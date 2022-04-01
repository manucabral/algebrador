import { useState } from "react";
import { useVectors } from "../hooks/useVectors";

export default function AddVectors() {
  const [vectorA, setVectorA] = useState([0, 0, 0]);
  const [vectorB, setVectorB] = useState([0, 0, 0]);
  const [errorMessage, setErrorMessage] = useState("");
  const { vectorC, handleValue, addVectors, subtractVectors } = useVectors();
  return (
    <div className="v-container">
      <div className="v-header">
        <h1 className="v-title">Suma y resta de vectores</h1>
        <p className="v-description">
          Suma o resta dos vectores de hasta 3 dimensiones.
        </p>
        <img src="" alt="v formula" />
      </div>
      <div className="v-body">
        <div className="v-inputs">
          <div className="item">
            <label className="item-label">Vector 1</label>
            <input
              className="item-input"
              type="text"
              placeholder="1,2,3"
              defaultValue={"0,0,0"}
              onChange={(e) => handleValue(e, setVectorA, setErrorMessage)}
            />
          </div>
          <div className="item">
            <label className="item-label">Vector 2</label>
            <input
              className="item-input"
              type="text"
              placeholder="1,2,3"
              defaultValue={"0,0,0"}
              onChange={(e) => handleValue(e, setVectorB, setErrorMessage)}
            />
          </div>
          <div className="item">
            <button
              className="btn"
              onClick={() => addVectors(vectorA, vectorB, setErrorMessage)}
            >
              Sumar
            </button>
          </div>
          <div className="item">
            <button
              className="btn"
              onClick={() => subtractVectors(vectorA, vectorB, setErrorMessage)}
            >
              Restar
            </button>
          </div>
        </div>
        <div className="v-outputs">
          <div className="item">
            <label className="item-label">Res.</label>
            <input
              className="item-input"
              readOnly
              type="text"
              value={vectorC}
            />
          </div>
          <div className="item">
            {errorMessage && <p className="item-error">{errorMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
