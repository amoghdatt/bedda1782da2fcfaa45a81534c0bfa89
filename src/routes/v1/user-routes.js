const HTTP_STATUS_CODE = require('http-status-codes');

function UserRoutes(fastify, { controllers = {}, schemaRepository }) {
  fastify.route({
    method: 'POST',
    url: '/v1/user/login',
    schema: {
      request: schemaRepository.v1.user.login.request,
      response: {
        200: schemaRepository.v1.user.login.response
      }
    },
    handler: async function (request, reply) {
      const user = request.body.data;
      reply.code(HTTP_STATUS_CODE.StatusCodes.OK).send({ data: 'logged in' });
    }
  });

  fastify.route({
    method: 'POST',
    url: '/v1/user/signup',
    schema: {
      request: schemaRepository.v1.user.signup.request,
      response: {
        200: schemaRepository.v1.user.signup.response
      }
    },
    handler: async function (request, reply) {
      const user = request.body.data;
      reply.code(HTTP_STATUS_CODE.StatusCodes.OK).send({ data: 'signed in' });
    }
  });

  fastify.route({
    method: 'POST',
    url: '/v1/user/:userId/file/upload',
    schema: {
      response: {
        200: schemaRepository.v1.user.signup.response
      }
    },
    handler: async function (request, reply) {
      const data = await request.file();
      reply.code(HTTP_STATUS_CODE.StatusCodes.CREATED).send({ data: 'file stored' });
    }
  });

  return fastify;
}

module.exports = UserRoutes;
