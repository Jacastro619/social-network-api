const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addreaction,
  removereaction,
} = require("../../controllers/thoughtsController");

router.route("/").get(getThoughts).post(createThought);

router.route("/:thoughtID").get(getSingleThought).put(updateThought);

router.route("/:userID/:thoughtID").delete(deleteThought);

router.route("/:thoughtID/reactions").post(addreaction).delete(removereaction);

router.route("/:thoughtID/reactions/:reactionID").delete(removereaction);

module.exports = router;
