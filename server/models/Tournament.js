const TournamentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    subtitle: String,
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    registrationStart: { type: Date, required: true },
    registrationEnd: { type: Date, required: true },
    rules: String,
    description: String,
    prizePool: Number,
    entryFee: Number,
    maxTeams: Number,
    teamsRegistered: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }],
    game: {
      name: String,
      category: String,
    },
    status: { type: String, enum: ['Upcoming', 'Ongoing', 'Completed', 'Cancelled'], default: 'Upcoming' },
    tournamentBracket: [{ type: Object }], // Can be further detailed based on the bracket system used
  });