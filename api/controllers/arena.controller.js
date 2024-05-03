import prisma from '../lib/prisma.js';

// TODO: CONTROL IF USER IS ADMIN AND VERIFY ADMIN TOKEN -> DO NOT FORGET TO MODIFY TOKEN FOR IS_ADMIN

export const getArena = async (req, res) => {
  const id = req.params.id;

  try {
    const arena = await prisma.arena.findUnique({
      where: { id },
    });

    res.status(200).json(arena);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to get arena!' });
  }
};

export const getArenas = async (req, res) => {
  const query = req.query;

  try {
    const arenas = await prisma.arena.findMany();

    res.status(200).json(arenas);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to get arenas!' });
  }
};

export const addArena = async (req, res) => {
  const body = req.body;

  try {
    const newArena = await prisma.arena.create({
      data: {
        ...body,
      },
    });
    res.status(201).json(newArena);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to add arena' });
  }
};

export const updateArena = async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  try {
    const updatedArena = await prisma.arena.update({
      where: { id },
      data: {
        ...body,
      },
    });

    res.status(200).json(updatedArena);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to update arena info!' });
  }
};

export const deleteArena = async (req, res) => {
  const id = req.params.id;

  try {
    await prisma.arena.delete({
      where: { id },
    });
    res.status(200).json({ message: 'Arena succesfully deleted!' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to delete arena!' });
  }
};
