const router = require("express").Router();

const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controller/user-controller");


router.route("/")
      .get(getAllUser)
      .post(createUser); // this is /api/users

router.route("/:id")
      .get(getUserById)
      .put(updateUser)
      .delete(deleteUser); // this is /api/users/:id

router.route("/:userId/friends/:friendId")
      .post(addFriend)
      .delete(removeFriend); // this is for /api/users/:userId/friends/:friendId

module.exports = router;