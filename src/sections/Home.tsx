import math from "../assets/math.svg";

export default function Home() {
  return (
    <section className="home-section">
      <div className="home-container">
        <div className="home-header">
          <h1 className="home-title__text">Algebrador</h1>
          <img className="home-title__icon" src={math} alt="counter" />
        </div>
        <p className="home-description">
          Calcula los resultados de ciertas formulas matemáticas
        </p>
      </div>
    </section>
  );
}
