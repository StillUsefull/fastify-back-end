const fastify = require('fastify')({logger: false});
const {rootRoute} = require('./routes/index.js');
const PORT = process.env.PORT || 3000;
const {Client} = require('pg');


const client = new Client({
    user: 'admin',
    host: 'localhost',
    database: 'test',
    password: 'qwerty',
    port: 5432
})

fastify.get('/', rootRoute);

const start = async () => {
  try {
    await client.connect().then(()=> {
      client.query('SELECT NOW()', (err, res) => {
          if (err) { console.log(err); }
          else { console.log(res.row); }
          client.end();
      })
    })
    fastify.listen({port: PORT})
    console.log(`Server is listening port: ${PORT}`);

  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start();