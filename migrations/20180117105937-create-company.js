'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Companies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
          allowNull: true,
        type: Sequelize.STRING
      },
      activity: {
          allowNull: true,
        type: Sequelize.STRING
      },
      characteristics: {
          allowNull: true,
        type: Sequelize.STRING
      },
      geography: {
          allowNull: true,
          type: Sequelize.STRING
      },
      consumer: {
          allowNull: true,
          type: Sequelize.STRING
      },
      competitor: {
          allowNull: true,
          type: Sequelize.STRING
      },
      task: {
          allowNull: true,
          type: Sequelize.STRING
      },
        type: {
            allowNull: true,
            type: Sequelize.TEXT
        },
        type_other: {
            allowNull: true,
            type: Sequelize.TEXT
        },
        section: {
            allowNull: true,
            type: Sequelize.TEXT
        },
        section_other: {
            allowNull: true,
            type: Sequelize.TEXT
        },
        frequency: {
            allowNull: true,
            type: Sequelize.TEXT
        },
        language: {
            allowNull: true,
            type: Sequelize.TEXT
        },
        language_other: {
            allowNull: true,
            type: Sequelize.TEXT
        },
        content: {
            allowNull: true,
            type: Sequelize.STRING
        },
        impression: {
            allowNull: true,
            type: Sequelize.STRING
        },
        message: {
            allowNull: true,
            type: Sequelize.STRING
        },
        style: {
            allowNull: true,
            type: Sequelize.TEXT
        },
        style_other: {
            allowNull: true,
            type: Sequelize.TEXT
        },
        result_vision: {
            allowNull: true,
            type: Sequelize.TEXT
        },
        result_action: {
            allowNull: true,
            type: Sequelize.TEXT
        },
        result_feeling: {
            allowNull: true,
            type: Sequelize.TEXT
        },
        colour: {
            allowNull: true,
            type: Sequelize.TEXT
        },
        component: {
            allowNull: true,
            type: Sequelize.TEXT
        },
        component_other: {
            allowNull: true,
            type: Sequelize.TEXT
        },
        advertisement: {
            allowNull: true,
            type: Sequelize.TEXT
        },
        counter: {
            allowNull: true,
            type: Sequelize.TEXT
        },
        duration: {
            allowNull: true,
            type: Sequelize.TEXT
        },
        duration_other: {
            allowNull: true,
            type: Sequelize.TEXT
        },
        scenario1: {
            allowNull: true,
            type: Sequelize.STRING
        },
        scenario2: {
            allowNull: true,
            type: Sequelize.STRING
        },
        scenario3: {
            allowNull: true,
            type: Sequelize.STRING
        },
        note: {
            allowNull: true,
            type: Sequelize.STRING
        },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    },{charset: 'utf8',collate: 'utf8_unicode_ci'});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Companies');
  }
};