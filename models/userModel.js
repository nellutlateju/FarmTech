const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: [true, "role is required"],
      enum: ["admin", "supplier"],
    },
    name: {
      type: String,
      required: function () {
        if (this.role === "supplier" || this.role === "admin") {
          return true;
        }
        return false;
      },
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is requied"],
    },
    address: {
      type: String,
      required: [true, "address is required"],
    },
    phone: {
      type: String,
      required: [true, "phone numbe is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
