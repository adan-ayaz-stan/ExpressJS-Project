"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authMiddleware = (req, res, next) => {
    const isAuthenticated = true; // Replace with actual authentication logic
    if (isAuthenticated) {
        next();
    }
    else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};
exports.default = authMiddleware;
