"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ingredientlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ingredientlist.hasMany(models.ingredient, { foreignKey: "id" });
    }
  }
  ingredientlist.init(
    {
      item: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ingredientlist",
    }
  );
  return ingredientlist;
};
