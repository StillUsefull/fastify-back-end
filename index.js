const fastify = require('fastify')({logger: false});
const cookies = require('@fastify/cookie');
const session = require('@fastify/session');
const {Client} = require('pg');


const {rootRoute} = require('./routes/index.js');


const PORT = process.env.PORT || 3000;


//postgres
const client = new Client({
    user: 'admin',
    host: 'localhost',
    database: 'test',
    password: 'qwerty',
    port: 5432
})

//plugins
fastify.register(cookies);
fastify.register(session, {secret: '123456789123456789123456789123456789'});


//session
fastify.addHook('preHandler', (request, reply, done) => {
  request.session.user = {name: 'max'};
  done();
})


//routes
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