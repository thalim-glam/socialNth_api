const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },

    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => `NEED TO FORMAT DATE ${timestamp}`,
    },

    username: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

//------------------------

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => `NEED TO FORMAT DATE ${timestamp}`,
    },

    username: {
      type: String,
      required: true,
    },

    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtual: true, 
    },
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
