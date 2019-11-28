'use strict';
module.exports = (sequelize, DataTypes) => {
  const sharelog = sequelize.define('sharelog', {
    id_user: DataTypes.INTEGER,
    id_newsletter: DataTypes.INTEGER,
    id_media_social: DataTypes.INTEGER
  }, {});
  sharelog.associate = function (models) {
    // associations can be defined here
    sharelog.belongsTo(models.user, {
      foreignKey: 'id_user'
    });
    sharelog.belongsTo(models.newsletter, {
      foreignKey: 'id_newsletter'
    });
    sharelog.belongsTo(models.share_media, {
      foreignKey: 'id_media_social'
    });
  };
  return sharelog;
};