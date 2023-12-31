const { User, Thought } = require("../models");

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.status(200).json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtID });

      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }

      res.status(200).json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);

      await User.findByIdAndUpdate(
        req.body.userID,
        { $push: { thoughts: thought._id } },
        { new: true }
      );

      res.status(200).json(thought);
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  },
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtID },
        { $set: req.body },
        { new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }

      res.status(200).json(thought);
    } catch (err) {
      res.status(500).json(err);
      console.log();
    }
  },
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findByIdAndDelete(req.params.thoughtID);
      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }

      await User.findByIdAndUpdate(
        req.params.userID,
        { $pull: { thoughts: thought._id } },
        { new: true }
      );

      res.status(200).json({ message: "Thought deleted" });
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  },
  async addreaction(req, res) {
    try {
      const reaction = await Thought.findByIdAndUpdate(
        { _id: req.params.thoughtID },
        { reactions: [req.body] },
        { new: true }
      ).populate("reactions");
      res.status(200).json(reaction);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async removereaction(req, res) {
    try {
      const thought = await Thought.findById(req.params.thoughtID);

      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }

      const reactionIndex = thought.reactions.findIndex(
        (reaction) => reaction.reactionId.toString() === req.params.reactionID
      );

      if (reactionIndex === -1) {
        return res.status(404).json({ message: "No reaction with that ID" });
      }

      thought.reactions.pull({ reactionId: req.params.reactionID });
      await thought.save();
      res.status(200).json({ message: "reaction deleted" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
