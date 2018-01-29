'use strict';
module.exports = (sequelize, DataTypes) => {
  var Company = sequelize.define('Company', {
    title: DataTypes.STRING,
    activity: DataTypes.STRING,
    characteristics: DataTypes.STRING,
      geography: DataTypes.STRING,
      consumer: DataTypes.STRING,
      competitor: DataTypes.STRING,
      task: DataTypes.STRING,
      type: DataTypes.TEXT,
      type_other: DataTypes.TEXT,
      section: DataTypes.TEXT,
      section_other: DataTypes.TEXT,
      frequency: DataTypes.TEXT,
      language: DataTypes.TEXT,
      language_other: DataTypes.TEXT,
      content: DataTypes.STRING,
      impression: DataTypes.STRING,
      message: DataTypes.STRING,
      style: DataTypes.TEXT,
      style_other: DataTypes.TEXT,
      result_vision: DataTypes.TEXT,
      result_action: DataTypes.TEXT,
      result_feeling: DataTypes.TEXT,
      colour: DataTypes.TEXT,
      component: DataTypes.TEXT,
      component_other: DataTypes.TEXT,
      advertisement: DataTypes.TEXT,
      counter: DataTypes.TEXT,
      duration: DataTypes.TEXT,
      duration_other: DataTypes.TEXT,
      scenario1: DataTypes.STRING,
      scenario2: DataTypes.STRING,
      scenario3: DataTypes.STRING,
      note: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Company;
};