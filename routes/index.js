const {rootController} = require('../controllers/auth/index.js');
const rootRoute = {
    method: 'GET',
    url: '/',
    schema: {
        response: {
        200: {
            type: 'object',
            properties: {
                hello: { type: 'string' }
            }
        }
      }
    },
    handler: rootController
}

module.exports = {rootRoute};
  