import { useState, ChangeEvent, Dispatch, SetStateAction } from "react";

export const useQuadraticEquation = () => {
  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(0);

  const handleValue = (
    e: ChangeEvent<{ value: string }>,
    setValue: Dispatch<SetStateAction<number>>
  ) => {
    const value = Number(e.target.value);
    if (Number.isNaN(value)) setValue(0);
    else setValue(value);
  };

  const applyFormula = (a: number, b: number, c: number) => {
    if (a === 0 && b === 0 && c === 0) {
      setX1(0);
      setX2(0);
    }
    if (a === 0 && b !== 0) {
      setX1(-c / b);
      setX2(-c / b);
    }
    if (a !== 0) {
      const discriminant = b ** 2 - 4 * a * c;
      if (discriminant < 0) {
        setX1(0);
        setX2(0);
      } else if (discriminant === 0) {
        setX1(-b / (2 * a));
        setX2(-b / (2 * a));
      } else {
        setX1((-b + Math.sqrt(discriminant)) / (2 * a));
        setX2((-b - Math.sqrt(discriminant)) / (2 * a));
      }
    }
  };
  return { x1, x2, handleValue, applyFormula };
};
