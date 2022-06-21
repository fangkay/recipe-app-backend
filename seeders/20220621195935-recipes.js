"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "recipes",
      [
        {
          image:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4584636.jpg&w=595&h=595&c=sc&poi=face&q=60",
          category: "Lunch",
          difficulty: 3,
          origin: "United States",
          name: "Tuna Salad",
          time: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5081856.jpg&w=595&h=398&c=sc&poi=face&q=60",
          category: "Lunch",
          difficulty: 2,
          origin: "United States",
          name: "Spicy Grilled Cheese Sandwich",
          time: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2Fc69261efa4d825689cd3307f7082c1c0%2F164661054163DF72EA-F8B7-4158-AE95-655BA498DCB0.jpeg&w=596&h=792&c=sc&poi=face&q=60",
          category: "Breakfast",
          difficulty: 4,
          origin: "Greece",
          name: "Classic Waffles",
          time: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F9f52af01b659fccce526ea36b3b335eb%2F1653270515image.jpg&w=596&h=399&c=sc&poi=face&q=60",
          category: "Dinner",
          difficulty: 6,
          origin: "Greece",
          name: "World's Best Lasagna",
          time: 120,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("recipes", null, {});
  },
};
