import { Request, Response, NextFunction } from 'express';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const isAuthenticated = true; // Replace with actual authentication logic

  if (isAuthenticated) {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

export default authMiddleware;
