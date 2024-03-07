const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    profilePicture: { type: String, required: false },
    authMethods: [{
      provider: { type: String, required: true },
      providerId: { type: String, required: true, unique: true },
    }],
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
    tournamentsParticipated: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tournament' }],
    cumulativePrizeMoney: { type: Number, default: 0 },
    wins: { type: Number, default: 0 },
    gamesPlayed: { type: Number, default: 0 },
    winRate: { type: Number, default: 0 },
    bankAccount: {
      bankName: String,
      accountNumber: String,
      accountHolder: String,
      verified: { type: Boolean, default: false },
    }
  });
  