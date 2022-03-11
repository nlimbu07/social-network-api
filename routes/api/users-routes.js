const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users
router.route('/').get(getAllUsers).post(createUser);

//  Set up GET one, PUT, and DELETE at /api/users/:id
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// POST and DELETE friends
router.route('/:id/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
