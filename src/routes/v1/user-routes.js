const HTTP_STATUS_CODE = require('http-status-codes');

function UserRoutes(fastify, { controllers, schemaRepository }) {
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
      const fields = data.fields;
      const enrichedData = {
        ...data,
        userId: request.params.userId
      };
      const filePath = await controllers.fileController.uploadFile(enrichedData);
      reply.code(HTTP_STATUS_CODE.StatusCodes.CREATED).send({ data: `file stored ${filePath}` });
    }
  });

  fastify.route({
    method: 'GET',
    url: '/v1/user/:userId/files',
    description: 'Get all files of a user',
    handler: async function (request, reply) {
      const userId = request.params.userId;
      const data = await controllers.userController.allUserFiles(userId);
      return { data };
      reply.code(HTTP_STATUS_CODE.StatusCodes.OK).send({ data });
    }
  });

  return fastify;
}

module.exports = UserRoutes;
