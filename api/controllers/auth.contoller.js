import bcrypt from 'bcrypt';
import prisma from '../lib/prisma.js';

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
  console.log('login endpoint post requested');
};

export const logout = async (req, res) => {
  console.log('logout endpoint post requested');
};
