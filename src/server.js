const { HTTP_PORT, HTTP_HOST } = require('./constants/project-constants');
const swaggerConfig = require('./configs/swagger-config');
const corsConfig = require('./configs/cors-config');
const swaggerPlugin = require('@fastify/swagger');
const FileController = require('./controllers/file-controller');

module.exports = function Server({
  fastify,
  knex,
  services,
  mappers,
  routes,
  schemaRepository,
  controllers
}) {
  const self = this;

  this.setup = async () => {
    const { v1Routes } = routes;

    fastify.register(swaggerPlugin, swaggerConfig);
    fastify.register(require('fastify-cors'), corsConfig);
    fastify.register(require('@fastify/multipart'));

    new v1Routes.testRoutes(fastify, { schemaRepository });
    new v1Routes.userRoutes(fastify, { schemaRepository, controllers });

    return self;
  };

  this.run = async () => {
    await fastify.listen(HTTP_PORT, HTTP_HOST, function (err) {
      console.info('Starting server listening on.......', `${HTTP_HOST}:${HTTP_PORT}`);
      if (err) throw err;
    });
  };
};
