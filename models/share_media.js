'use strict';
module.exports = (sequelize, DataTypes) => {
  const share_media = sequelize.define('share_media', {
    media_social: DataTypes.STRING
  }, {});
  share_media.associate = function (models) {
    // associations can be defined here
    // share_media.hasMany(models.sharelog, {
    //   foreignKey: 'id'
    // });
  };
  return share_media;
};