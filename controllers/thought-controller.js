const { Thought, User } = require('../models');

const thoughtController = {
  getAllThoughts(req, res) {
    Thought.create()
      .sort({ _id: -1 })
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.json(err));
  },
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res
            .status(404)
            .json({ message: 'No thought found with the given id' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.json(err));
  },

  createThought({ body }, res) {
    Thought.create(body)
      .then(({ _id }) => {
        return User.findByIdAndUpdate(
          { _id: body.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          res
            .status(404)
            .json({ message: 'No thought found with the given id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },

  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res
            .status(404)
            .json({ message: 'No thought found with the given id' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.json(err));
  },

  deleteThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.id })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res
            .status(404)
            .json({ message: 'No thought found with the given id' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.json(err));
  },

  createReaction({ params }, res) {
    Thought.findByIdAndUpdate(
      { _id: params.id },
      { $pull: { reactions: { reactionId: params.reactionId } } },
      { new: true, runValidators: true }
    )
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res
            .status(404)
            .json({ message: 'No thought found with the given id' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.json(err));
  },

  removeReaction({ params }, res) {
    Thought.findByIdAndUpdate(
      { _id: params.id },
      { $pull: { reactions: { reactionId: params.reactionId } } },
      { new: true, runValidators: true }
    )
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res
            .status(404)
            .json({ message: 'No thought found with the given id' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.status(err));
  },
};

module.exports = thoughtController;
