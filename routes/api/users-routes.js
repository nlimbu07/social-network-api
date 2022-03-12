const router = require('express').Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controller/user-controller');

// Set up GET all and POST at /api/users
router.route('/').get(getAllUser).post(createUser);

//  Set up GET one, PUT, and DELETE at /api/users/:id
router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);

// POST and DELETE friends
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
