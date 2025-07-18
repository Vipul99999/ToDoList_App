

// Dependencies
const { error } = require("../util/script");

// Module scaffolding
const notFoundMiddleware = (_req, _res, next) => {
    next(error(404, "Your requested content couldn't found."));
};

// Export module
module.exports = notFoundMiddleware;
