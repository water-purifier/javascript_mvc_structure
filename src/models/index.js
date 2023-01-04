const dbConfig = require('../config/db.config');
const Sequelize = require('sequelize');
const dbConnect = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

module.exports = {
    Sequelize: Sequelize,
    dbConnect: dbConnect,
    Post: require('./Post')(dbConnect, Sequelize),
};
