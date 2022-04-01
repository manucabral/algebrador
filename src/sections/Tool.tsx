import QuadraticEquation from "../components/QuadraticEquation"
import AddVectors from "../components/AddSubVectors";

export default function Tool() {
  return (
    <section className="tool-section">
      <div className="tool-container">
        <div className="tool-item">
          <QuadraticEquation />
        </div>
        <div className="tool-item">
          <AddVectors />
        </div>
      </div>
    </section>
  );
}
