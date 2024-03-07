const MessageSchema = new mongoose.Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    subject: String,
    content: String,
    sentAt: { type: Date, default: Date.now },
    read: { type: Boolean, default: false },
  });