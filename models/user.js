'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    id_role: DataTypes.INTEGER
  }, {});
  user.associate = function (models) {
    // associations can be defined here
    user.belongsTo(models.role, {
      foreignKey: 'id_role',
    });
    user.hasMany(models.sharelog, {
      foreignKey: 'id'
    });
  };
  return user;
};