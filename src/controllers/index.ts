import { Request, Response } from 'express';
import { dolarBlueService, mxnPesos } from '../services';

export const getDolarBlue = async (req: Request, res: Response): Promise<void> => {
  try {
    const value: number = await dolarBlueService();
    res.status(200).json({ value });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ error: errorMessage });
  }
};

export const getMxnPesos = async (req: Request, res: Response): Promise<void> => {
  try {
    const value: number | undefined = await mxnPesos();
    res.status(200).json({ value });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ error: errorMessage });
  }
};
