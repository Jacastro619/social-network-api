const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughtsController");

router.route("/").get(getThoughts).post(createThought);

router
  .route("/:thoughtID")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
