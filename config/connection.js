const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
    // Use JawsDB URL if available (Heroku)
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else if (process.env.DATABASE_URL) {
    // Use DATABASE_URL if available (Heroku)
    sequelize = new Sequelize(process.env.DATABASE_URL);
} else {
    // Use local MySQL configuration
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}

module.exports = sequelize;
