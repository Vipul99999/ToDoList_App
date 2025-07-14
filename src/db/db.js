

// Dependencies
const mongoose = require("mongoose");

// Module scaffolding
const db = {};

/**
 * Establish the database connection
 *
 * @param {ConnectionURI} uri
 * @returns {Promise}
 */
db.connect = (uri) => {
    return mongoose.connect(uri);
};

// Export module
module.exports = db;
