const PostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    category: { type: String, enum: ['Event', 'Announcement', 'General'], default: 'General' },
    createdAt: { type: Date, default: Date.now },
  });