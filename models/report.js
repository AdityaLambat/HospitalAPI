const mongooose = require('mongoose');

const reportSchema = new mongooose.Schema({
  status: {
    type: String,
    required: true,
    enum: ['Negative', 'Postive', 'Quarantine']
  },
  doctor: {
    type: mongooose.Schema.Types.ObjectId,
    // required: true,
    ref: 'Doctor',
  }

}, {
  timestamps: true,
})

const Report = mongooose.model('Report', reportSchema);
module.exports = Report;