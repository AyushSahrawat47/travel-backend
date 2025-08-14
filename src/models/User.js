const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
    },
    phone: {
      type: String, // Store in E.164 format, e.g., +14155552671
      required: true,
      validate: {
        validator: function (v) {
          return /^\+[1-9]\d{1,14}$/.test(v); // E.164 regex
        },
        message: (props) => `${props.value} is not a valid phone number!`,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
