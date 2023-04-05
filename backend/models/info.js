const mongoose = require("mongoose");


const infoSchema = new mongoose.Schema(
  {
    age: {
      type: Number,
      required: true,
    },
    disease: {
      type: String,
      required: true,
    },
    from: {
      type: String,
      required:true,
      
    },
    userid:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User'
    }
  },
  {
    timestamps: true,
  }
);

const Info = mongoose.model("Info", infoSchema);

module.exports = Info;
