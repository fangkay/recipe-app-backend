"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("ingredients", "ingredientlistId", {
      type: Sequelize.INTEGER,
      references: {
        model: "ingredientlists",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("ingredients", "ingredientlistId");
  },
};
