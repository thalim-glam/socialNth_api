const router = require("express").Router();

const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controller/thought-controller");

router.route("/")
      .get(getAllThought)
      .post(createThought); // this is for /api/thoughts

router.route("/:id")
      .get(getThoughtById)
      .put(updateThought)
      .delete(deleteThought); // this is for /api/thoughts/:id

router.route("/:thoughtId/reactions")
      .post(addReaction); // this is for /api/thoughts/:thoughtId/reactions

router.route("/:thoughtId/reactions/:reactionId")
      .delete(removeReaction); // this is for /api/thoughts/:thoughtId/reactions/:reactionId

module.exports = router;

