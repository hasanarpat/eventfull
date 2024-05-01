import bcrypt from 'bcrypt';
import prisma from '../lib/prisma.js';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  if (password.length < 6 || !/^\D*\d+\D*$/.test(password))
    res.status(405).json({
      message:
        'Password must include a number character at least and must be 6 characters length!',
    });

  try {
    // hash the password before storing in database
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user with hashed password
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: 'User successfully created!' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to create user!' });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // check if user exists
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) res.status(401).json({ message: 'Invalid credentials!' });

    // check password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      res.status(401).json({ message: 'Invalid credentials!' });

    const age = 1000 * 60 * 60 * 24 * 7;
    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: age,
      }
    );

    const { password: userPassword, ...userInfo } = user;

    res
      .cookie('token', token, {
        htppOnly: true,
        maxAge: age,
      })
      .status(201)
      .json(userInfo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to login!' });
  }
};

export const logout = async (req, res) => {
  res
    .clearCookie('token')
    .status(200)
    .json({ message: 'Logged out succesfully!' });
};
