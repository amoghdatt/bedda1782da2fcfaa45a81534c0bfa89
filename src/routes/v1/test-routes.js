const HTTP_STATUS_CODES = require('http-status-codes');

function TestRoute(fastify, { schemaRepository }) {
  fastify.route({
    method: 'POST',
    url: '/ping',
    schema: {
      response: {
        200: schemaRepository.v1.test.response
      }
    },
    handler: async function (request, reply) {
      if (request.body.data === 'ping')
        reply.code(HTTP_STATUS_CODES.StatusCodes.OK).send({ data: 'pong' });
    }
  });

  return fastify;
}

module.exports = TestRoute;
