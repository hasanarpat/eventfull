import prisma from '../lib/prisma.js';

export const getCommentsOfUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const comments = await prisma.comment.findMany({
      where: {
        userId,
      },
    });

    res.status(200).json(comments);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to fetch comments!' });
  }
};

export const getCommentsOfEvent = async (req, res) => {
  const eventId = req.params.id;

  try {
    const comments = await prisma.comment.findMany({
      where: {
        eventId,
      },
    });

    res.status(200).json(comments);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to fetch comments!' });
  }
};

export const addComment = async (req, res) => {
  const tokenUserId = req.userId;
  const body = req.body;

  try {
    await prisma.comment.create({
      data: {
        ...body,
        userId: tokenUserId,
      },
    });

    res.status(201).json({ message: 'Your comment posted successfully!' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to post comment!' });
  }
};

export const updateComment = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;
  const body = req.body;

  try {
    const comment = await prisma.comment.findUnique({
      where: {
        id,
      },
    });

    if (comment.userId !== tokenUserId)
      return res.status(404).json({ message: 'Not authorized!' });

    await prisma.comment.update({
      where: { id },
      data: {
        ...body,
      },
    });

    res.status(201).json({ message: 'Your comment updated successfully!' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to update comment!' });
  }
};

export const deleteComment = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;

  try {
    const comment = await prisma.comment.findUnique({
      where: {
        id,
      },
    });

    if (comment.userId !== tokenUserId)
      return res.status(404).json({ message: 'Not authorized!' });

    await prisma.comment.delete({
      where: { id },
    });

    res.status(200).json({ message: 'Your comment deleted successfully!' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to delete comment!' });
  }
};

// export const getAllComments = async (req, res) => {
//   try {
//     const comments = await prisma.comment.findMany();

//     res.status(200).json(comments);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: 'Failed to fetch comments!' });
//   }
// };
