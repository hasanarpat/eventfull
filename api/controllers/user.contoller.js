import prisma from '../lib/prisma.js';

// TODO: CONTROL IF USER IS ADMIN AND VERIFY ADMIN TOKEN -> DO NOT FORGET TO MODIFY TOKEN FOR IS_ADMIN

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
  const query = req.query;

  try {
    // if there is a query search for usernames those contains query value and abstract password value from user object via select
    let users;
    if (query && query.username) {
      users = await prisma.user.findMany({
        where: {
          username: {
            contains: query.username,
          },
        },
        select: {
          id: true,
          username: true,
          email: true,
          avatar: true,
          createdAt: true,
        },
      });
    } else {
      users = await prisma.user.findMany({
        select: {
          id: true,
          username: true,
          email: true,
          avatar: true,
          createdAt: true,
        },
      });
    }

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
    const { password, ...rest } = updatedUser;

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
