const { User, Thought } = require("../models");

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find().populate("friends");
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userID }).populate(
        "friends"
      );

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userID },
        { $set: req.body },
        { new: true }
      ).populate("friends");

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userID });

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      await Thought.deleteMany({ _id: { $in: user.thoughts } });
      res.status(200).json({ message: "User has been deleted!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async addFriend(req, res) {
    try {
      const friend = await User.findByIdAndUpdate(
        req.params.userID,
        { $push: { friends: req.params.friendsID } },
        { new: true }
      );

      if (!friend) {
        return res
          .status(404)
          .json({ message: "No user or friend with that ID" });
      }

      res.status(200).json({ message: "Friend was added" });
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  },

  async removeFriend(req, res) {
    try {
      const friend = await User.findByIdAndUpdate(
        req.params.userID,
        { $pull: { friends: req.params.friendsID } },
        { new: true }
      );
      res.status(200).json({ message: "Friend was removed" });
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  },
};
