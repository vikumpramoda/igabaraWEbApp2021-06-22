const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  email: { 
    type: String, 
    require: true 
  },
  firstName: { 
    type: String, 
    require: true 
  },
  lastName: { 
    type: String, 
    require: true 
  },
  slot: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'slot'
  }
}, { versionKey: false })

const pinkreservationModel = mongoose.model('pinkreservationCalander', reservationSchema);

module.exports = pinkreservationModel;