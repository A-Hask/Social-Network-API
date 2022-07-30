const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

router.route("/thoughts").get(getAllThoughts);

router.route("/thoughts/:thoughtId").get(getThoughtById).put(updateThought);

router.route("/:userId").post(addThought);

router.route("/:userId/:thoughtId").put(addReaction).delete(removeThought);

router.route("/thoughts/:thoughtId/:reactionId").delete(removeReaction);

module.exports = router;
