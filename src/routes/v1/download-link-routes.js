const HTTP_STATUS_CODE = require('http-status-codes');

function DownloadLinkRoutes(fastify, { controllers }) {
  fastify.route({
    method: 'GET',
    url: '/:linkId',
    description: 'Download file of a user',
    handler: async function (request, reply) {
      const linkId = request.params.linkId;
      const { stream, filename } = await controllers.linkController.download(linkId);
      reply
        .code(HTTP_STATUS_CODE.StatusCodes.OK)
        .header('Content-disposition', `attachment; filename=${filename}`)
        .send(stream);
    }
  });
}

module.exports = DownloadLinkRoutes;
