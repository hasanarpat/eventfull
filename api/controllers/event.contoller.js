import prisma from '../lib/prisma.js';
import jwt from 'jsonwebtoken';

export const getEvents = async (req, res) => {
  const query = req.query;

  try {
    let events;
    if (Object.keys(query).length !== 0) {
      // Eğer query varsa, belirtilen kriterlere uygun etkinlikleri döndür
      events = await prisma.event.findMany({
        where: {
          title: {
            contains: query.title || undefined,
          },
          arenaName: {
            contains: query.arena || undefined,
          },
          artistName: {
            contains: query.artist || undefined,
          },
          date: {
            contains: query.date || undefined,
          },
          category: {
            has: query.category || null,
          },
          city: {
            contains: query.city || undefined,
          },
          price: {
            gte: parseInt(query.minPrice) || 0,
            lte: parseInt(query.maxPrice) || 100000,
          },
        },
      });
    } else {
      // Eğer query yoksa, tüm etkinlikleri döndür
      events = await prisma.event.findMany();
    }

    res.status(200).json(events);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to get events!' });
  }
};

export const getEvent = async (req, res) => {
  const id = req.params.id;
  const token = req.cookies?.token;

  try {
    const event = await prisma.event.findUnique({
      where: { id },
      include: {
        artist: true,
        arena: true,
      },
    });
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
        if (!err) {
          const saved = await prisma.savedEvents.findUnique({
            where: {
              userId_eventId: {
                eventId: id,
                userId: payload.id,
              },
            },
          });
          res.status(200).json({ ...event, isSaved: saved ? true : false });
        }
      });
    }

    res.status(200).json({ ...event, isSaved: false });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to get event info!' });
  }
};

export const addEvent = async (req, res) => {
  const body = req.body;
  const tokenUserId = req.userId;

  try {
    const newEvent = await prisma.event.create({
      data: {
        ...body,
        userId: tokenUserId,
      },
    });

    res.status(200).json(newEvent);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to add event!' });
  }
};

export const updateEvent = async (req, res) => {
  const body = req.body;
  const tokenUserId = req.cookies?.token;
  const id = req.params.id;

  try {
    const event = await prisma.event.findUnique({
      where: { id },
    });

    if (event.userId !== tokenUserId) {
      return res.status(403).json({ message: 'Not authorized!' });
    }

    const updatedEvent = await prisma.event.update({
      where: { id },
      data: {
        ...body,
      },
    });
    res.status(200).json(updatedEvent);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to update event!' });
  }
};

export const deleteEvent = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.cookies?.token;

  try {
    const event = await prisma.event.findUnique({
      where: { id },
    });

    if (event.userId !== tokenUserId) {
      return res.status(403).json({ message: 'Not authorized!' });
    }

    await prisma.event.delete({
      where: { id },
    });

    res.status(200).json({ message: 'Event succesfully deleted' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to update event!' });
  }
};
