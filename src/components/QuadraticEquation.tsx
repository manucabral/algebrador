import { useState } from "react";
import qe_formula from "../assets/quadratic_equation.svg";
import { useQuadraticEquation } from "../hooks/useQuadraticEquation";

export default function QuadraticEquation() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const { x1, x2, handleValue, applyFormula } = useQuadraticEquation();
  return (
    <div className="qe-container">
      <div className="qe-header">
        <h1 className="qe-title">Ecuación Cuadrática</h1>
        <p className="qe-description">
          Obtené las raices de una ecuación cuadrática.
        </p>
        <img src={qe_formula} alt="qe formula" />
      </div>
      <div className="qe-body">
        <div className="qe-inputs">
          <div className="item">
            <label className="item-label">a</label>
            <input
              className="item-input"
              type="number"
              name="a"
              defaultValue={a}
              onChange={(e) => handleValue(e, setA)}
            />
          </div>
          <div className="item">
            <label className="item-label">b</label>
            <input
              className="item-input"
              type="number"
              name="b"
              defaultValue={b}
              onChange={(e) => handleValue(e, setB)}
            />
          </div>
          <div className="item">
            <label className="item-label">c</label>
            <input
              className="item-input"
              type="number"
              name="c"
              defaultValue={c}
              onChange={(e) => handleValue(e, setC)}
            />
          </div>
          <div className="item">
            <button
              className="btn"
              onClick={() => applyFormula(a, b, c, setErrorMessage)}
            >
              Calcular
            </button>
          </div>
        </div>
        <div className="qe-outputs">
          <div className="item">
            <label className="item-label">X1</label>
            <input className="item-input" type="number" readOnly name="r1" value={x1} />
          </div>
          <div className="item">
            <label className="item-label">X2</label>
            <input className="item-input" type="number" readOnly value={x2} name="r2" />
          </div>
          <div className="item">
            {errorMessage && <p className="item-error">{errorMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
