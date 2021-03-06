const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    currentMealplan: {
      type: String,
      required: false,
    },
    currentMealplanStartTime: {
      type: Date,
      required: false,
    },
    completedMealplans: {
      type: String,
      required: false,
    },
    completedMeals: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = User = mongoose.model("users", UserSchema);
