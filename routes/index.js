const {rootController} = require('../controllers/auth/index.js');
const rootRoute = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    hello: {
                        type: 'string'
                    }
                }
            }
        }
    },
    handler: rootController
}

module.exports = {rootRoute};
  