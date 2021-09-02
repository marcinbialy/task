'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Task extends Model {}
    Task.init({
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      isComplete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    }, {
      sequelize,
      modelName: 'Task'
    });
    return Task;
};
