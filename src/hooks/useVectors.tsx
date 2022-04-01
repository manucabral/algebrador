import { useState } from "react";

export const useVectors = () => {
  const [vectorC, setVectorC] = useState("");
  const addVectors = (
    vectorA: number[],
    vectorB: number[],
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const vectorC = [0, 0, 0];
    if (vectorA.length !== vectorB.length) {
      setErrorMessage("Los vectores no tienen la misma dimensión");
    } else {
      for (let i = 0; i < vectorA.length; i++)
        vectorC[i] = vectorA[i] + vectorB[i];
      setVectorC(vectorC.join(","));
      setErrorMessage("");
    }
  };

  const subtractVectors = (
    vectorA: number[],
    vectorB: number[],
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const vectorC = [0, 0, 0];
    if (vectorA.length !== vectorB.length) {
      setErrorMessage("Los vectores no tienen la misma dimensión");
    } else {
      for (let i = 0; i < vectorA.length; i++)
        vectorC[i] = vectorA[i] - vectorB[i];
      setVectorC(vectorC.join(","));
      setErrorMessage("");
    }
  };

  const handleValue = (
    e: React.ChangeEvent<{ value: string }>,
    setValue: React.Dispatch<React.SetStateAction<number[]>>,
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const splitted = e.target.value.split(",");
    const elements = splitted.map((value) => Number(value));
    if (elements.some(isNaN)) {
      setValue([0, 0, 0]);
      setErrorMessage("No se puede introducir un valor no numérico");
    } else {
      setErrorMessage("");
      setValue(elements);
    }
  };

  return { vectorC, handleValue, addVectors, subtractVectors };
};
