import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getItem = async (req: Request, res: Response) => {
  const items = await prisma.items.findMany();
  res.json(items);
};

export const getItemByName = async (req: Request, res: Response) => {
    const { item } = req.params;
    console.log(req.params)
    const itemFound = await prisma.items.findMany({
        where: {
            name: {
                contains: item
            }
        }
    });

    res.json(itemFound)
}

export const createItem = async (req: Request, res: Response) => {
  const { name, quantity } = req.body;

  const item = await prisma.items.create({
    data: {
      name,
      quantity,
    },
  });

  res.json(item);
};
