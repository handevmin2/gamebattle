const TeamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    logo: String,
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    tournament: { type: mongoose.Schema.Types.ObjectId, ref: 'Tournament' },
    paymentCompleted: { type: Boolean, default: false },
  });