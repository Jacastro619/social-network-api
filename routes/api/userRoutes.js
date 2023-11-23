const router = require("express").Router();
const {
  getUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(createUser);

router.route("/:userID").get(getSingleUser).put(updateUser).delete(deleteUser);

router
  .route("/:userID/friends/:friendsID")
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;
