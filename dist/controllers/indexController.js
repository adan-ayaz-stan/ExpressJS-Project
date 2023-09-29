"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createItem = exports.getItemByName = exports.getItem = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getItem = async (req, res) => {
    const items = await prisma.items.findMany();
    res.json(items);
};
exports.getItem = getItem;
const getItemByName = async (req, res) => {
    const { item } = req.params;
    console.log(req.params);
    const itemFound = await prisma.items.findMany({
        where: {
            name: {
                contains: item
            }
        }
    });
    res.json(itemFound);
};
exports.getItemByName = getItemByName;
const createItem = async (req, res) => {
    const { name, quantity } = req.body;
    const item = await prisma.items.create({
        data: {
            name,
            quantity,
        },
    });
    res.json(item);
};
exports.createItem = createItem;
