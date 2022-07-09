const { SCHEMA_LOCATION_V1 } = require('../constants/schema-constants');
const path = require('path');

module.exports = function SchemaRepository(parser) {
  const self = this;

  this.loadAll = async function () {
    const testResponseSchema = await parser.dereference(
      path.join(SCHEMA_LOCATION_V1, 'test-response.json')
    );

    const userLoginRequestSchema = await parser.dereference(
      path.join(SCHEMA_LOCATION_V1, 'user-login-request-schema.json')
    );

    const userLoginResponseSchema = await parser.dereference(
      path.join(SCHEMA_LOCATION_V1, 'user-login-response-schema.json')
    );

    const v1Schemas = {
      user: {
        login: { request: userLoginRequestSchema, response: userLoginResponseSchema }
      },
      test: {
        response: testResponseSchema
      }
    };

    self.schemas = {
      v1: v1Schemas
    };

    return self.schemas;
  };
};
