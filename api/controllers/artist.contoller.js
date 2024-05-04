import prisma from '../lib/prisma.js';

export const getArtist = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await prisma.artist.findUnique({
      where: { id },
    });

    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to get artist!' });
  }
};

export const getArtists = async (req, res) => {
  // TODO: add pagination and limitation for larger database possibility
  const query = req.query;

  try {
    let artists;
    if (query.category) {
      artists = await prisma.artist.findMany({
        where: {
          category: {
            has: query.category || undefined,
          },
          title: query.title || undefined,
        },
      });
    } else {
      artists = await prisma.artist.findMany();
    }

    res.status(200).json(artists);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to get artists!' });
  }
};

export const addArtist = async (req, res) => {
  const body = req.body;

  try {
    const newArtist = await prisma.artist.create({
      data: {
        ...body,
      },
    });
    res.status(201).json(newArtist);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to add artist' });
  }
};

export const updateArtist = async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  const tokenUserId = req.userId;

  try {
    const artist = await prisma.artist.findUnique({
      where: { id },
    });

    if (artist.userId !== tokenUserId)
      return res.status(403).json({ message: 'Forbidden! Not authorized!' });

    const updatedArtist = await prisma.artist.update({
      where: { id },
      data: {
        ...body,
      },
    });

    res.status(200).json(updatedArtist);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to update artist info!' });
  }
};

export const deleteArtist = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;

  try {
    const artist = await prisma.artist.findUnique({
      where: { id },
    });

    if (artist.userId !== tokenUserId)
      return res.status(403).json({ message: 'Forbidden! Not authorized!' });

    await prisma.artist.delete({
      where: { id },
    });
    res.status(200).json({ message: 'Artist succesfully deleted!' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to delete artist!' });
  }
};
