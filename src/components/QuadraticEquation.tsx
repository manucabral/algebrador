import { useState } from "react";
import qe_formula from "../assets/quadratic_equation.svg";
import { useQuadraticEquation } from "../hooks/useQuadraticEquation";

export default function QuadraticEquation() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
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
          <div className="qe-item">
            <label className="qe-item-label">a</label>
            <input
              className="qe-item-input"
              type="number"
              name="a"
              defaultValue={a}
              onChange={(e) => handleValue(e, setA)}
            />
          </div>
          <div className="qe-item">
            <label className="qe-item-label">b</label>
            <input
              className="qe-item-input"
              type="number"
              name="b"
              defaultValue={b}
              onChange={(e) => handleValue(e, setB)}
            />
          </div>
          <div className="qe-item">
            <label className="qe-item-label">c</label>
            <input
              className="qe-item-input"
              type="number"
              name="c"
              defaultValue={c}
              onChange={(e) => handleValue(e, setC)}
            />
          </div>
          <div className="qe-item">
            <button
              className="qe-item-btn"
              onClick={() => applyFormula(a, b, c)}
            >
              Calcular
            </button>
          </div>
        </div>
        <div className="qe-outputs">
          <div className="qe-item">
            <label className="qe-item-label">X1</label>
            <input
              className="qe-item-input"
              type="number"
              name="r1"
              value={x1}
            />
          </div>
          <div className="qe-item">
            <label className="qe-item-label">X2</label>
            <input
              className="qe-item-input"
              type="number"
              value={x2}
              name="r2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
