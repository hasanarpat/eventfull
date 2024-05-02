import prisma from '../lib/prisma.js';

export const getUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    // separate password from user info for response
    const { password, ...rest } = user;

    res.status(200).json(rest);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to get user info' });
  }
};

export const getUsers = async (req, res) => {
  const query = res.query;
  try {
    const users = await prisma.user.findMany({
      where: {
        username: {
          contains: query.username || undefined,
        },
      },
    });

    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to get user info' });
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        ...body,
      },
    });

    // separate password from user info for response
    const { password, ...rest } = updateUser;

    res.status(200).json(rest);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to get user info' });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await prisma.user.delete({
      where: { id },
    });
    res.status(200).json({ message: 'User succesfully deleted!' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to delete user!' });
  }
};
