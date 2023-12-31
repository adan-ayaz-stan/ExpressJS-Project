"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexController_1 = require("../controllers/indexController");
const router = express_1.default.Router();
router.get('/', indexController_1.getItem);
router.get('/:item', indexController_1.getItemByName);
router.post('/', indexController_1.createItem);
exports.default = router;
