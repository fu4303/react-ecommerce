import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';

// @desc Auth user and get Token
// @route GET /api/users/login
// @acess Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: null,
    });
  } else {
    res.status(401); //401 - Unauthorized
    throw new Error('Unauthorized : Access is denied due to invalid credentials');
  }
});

export { authUser };