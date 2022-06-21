"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        username: "John Doe",
        password: "john1234",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Kate Appleseed",
        password: "kate1234",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Maria Marshall",
        password: "maria1234",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Paul Purdey",
        password: "paul1234",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Grace Keller",
        password: "grace1234",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Ashley Rivers",
        password: "ashley1234",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Walter White",
        password: "walter1234",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Victoria Jackson",
        password: "victoria1234",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
