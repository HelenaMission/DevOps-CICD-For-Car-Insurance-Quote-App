import { Request, Response } from "express";
import { pool } from "../pool/pool";
import { carValue, CarInput, CarOutput } from "../services/carValue";

export const carValueController = async (req: Request, res: Response) => {
  try {
    const { model, year } = req.body as CarInput;
    if (!model || typeof model !== "string" || !year || typeof year !== "number" || year <= 0) {
      return res.status(400).json("Invalid input. Please provide a valid value for model and year.");
    }

    const carValueResult = carValue({ model, year }) as CarOutput;

    const queryResult = await pool.query("INSERT INTO car_insurance_table (model, year, value) VALUES (?, ?, ?)", [
      model,
      year,
      carValueResult.value,
    ]);

    const response: CarOutput | string = carValueResult;

    res.json(response);
  } catch (error) {
    res.status(400).json({ error });
  }
};


