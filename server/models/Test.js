'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Test extends Model {}
    Test.init({
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      text: {
        type: DataTypes.TEXT,
      }
    }, {
      sequelize,
      modelName: 'Test'
    });
    return Test;
};
