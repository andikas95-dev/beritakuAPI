'use strict';
module.exports = (sequelize, DataTypes) => {
  const newsletter = sequelize.define('newsletter', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    file: DataTypes.STRING,
    id_user: DataTypes.INTEGER
  }, {});
  newsletter.associate = function (models) {
    // associations can be defined here
    newsletter.belongsTo(models.user, {
      foreignKey: 'id_user'
    });
    // newsletter.hasMany(models.sharelog, {
    //   foreignKey: 'id'
    // });
  };
  return newsletter;
};