const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: 0,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.user = require('../models/user.model.js')(sequelize, Sequelize);
db.list = require('../models/list.model')(sequelize, Sequelize);
db.task = require('../models/task.model')(sequelize, Sequelize);

 
db.list.belongsToMany(db.user, { through: 'user_list', foreignKey: 'listId', otherKey: 'userId'});
db.user.belongsToMany(db.list, { through: 'user_list', foreignKey: 'userId', otherKey: 'listId'});

module.exports = db;