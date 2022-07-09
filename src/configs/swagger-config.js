const { HTTP_HOST, HTTP_PORT } = require('../constants/project-constants');

module.exports = {
  routePrefix: '/documentation',
  swagger: {
    info: {
      title: `title`,
      description: 'Testing the Fastify swagger API',
      version: '0.1.0'
    },
    externalDocs: {
      url: ''
    },
    host: `${HTTP_HOST}:${HTTP_PORT}`,
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [{ name: 'APIs' }]
  }
};
