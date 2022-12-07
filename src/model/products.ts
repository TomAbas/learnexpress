import mongoose from "mongoose";

const productShema = new mongoose.Schema({
  feature: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  name: {
    type: String,
    required: [true, "must provide"],
    trim: true,
    maxlength: [20, "name can't be more then 20c"],
  },
  price: {
    type: Number,
    required: [true, "must provide"],
  },
  company: {
    type: String,
    required: [true, "must provide"],
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: "{VALUE} is not supported",
    },
  },
});

export default mongoose.model("product", productShema);
