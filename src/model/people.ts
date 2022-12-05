import mongoose from "mongoose";

const peopleShema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "must provide"],
    trim: true,
    maxlength: [20, "name can't be more then 20c"],
  },
  lastName: {
    type: String,
    require: [true, "must"],
  },
  yearsOld: {
    type: Number,
    require: true,
  },
});

export default mongoose.model("people", peopleShema);
