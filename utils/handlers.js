/**
 * Response handlers
 */

/**
 *
 * @param {*} code
 * @param {*} description
 * @param {*} response
 */
const handleMessage = (code, description, response) => (
  { status: { code, description }, response }
);

/**
 *
 * @param {*} response
 * @param {*} description
 * @param {*} code
 */
const handleWithData = (response, description, code) => {
  const status = code || 200;
  return (entity) => (entity
    ? response.status(status).json(handleMessage(status, description, entity))
    : response.status(204).end()
  );
};

/**
 *
 * @param {*} response
 * @param {*} description
 * @param {*} code
 */
const handleEntityNotFound = (response, description, code) => {
  const status = code || 404;
  return (entity) => (!entity
    ? response.status(status).json(handleMessage(status, description, entity))
    : entity
  );
};

/**
 *
 * @param {*} response
 * @param {*} description
 * @param {*} code
 */
const handleWithError = (response, description, code) => {
  const status = code || 500;
  return (error) => response.status(status).json(handleMessage(status, description, error));
};

module.exports = {
  handleMessage, handleWithData, handleEntityNotFound, handleWithError,
};
