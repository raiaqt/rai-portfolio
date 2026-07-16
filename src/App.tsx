import Introduction from "./pages/Introduction/Introduction";
import BuildSide from "./components/BuildSide/BuildSide";
import MovementSide from "./components/MovementSide/MovementSide";
import Contact from "./pages/Contact/Contact";
import ParticleBackground from "./components/ParticleBackground/ParticleBackground";

import "./App.scss";

function App() {
  return (
    <>
      <Introduction />
      <div className="site-split" aria-label="Two-column portfolio: build on the left, movement on the right">
        <div className="site-split-surface site-split-surface--nerd" aria-hidden="true">
          <div className="site-split-surface-bg">
            <ParticleBackground />
          </div>
        </div>
        <div className="site-split-surface site-split-surface--movement" aria-hidden="true" />

        <div className="site-split-grid">
          <div className="site-split-cell site-split-cell--nerd site-split-cell--build">
            <BuildSide />
          </div>
          <div className="site-split-rail site-split-rail--1" aria-hidden="true">
            <span className="site-split-knot">×</span>
          </div>
          <div className="site-split-cell site-split-cell--movement site-split-cell--move">
            <MovementSide />
          </div>
          <div className="site-split-rail site-split-rail--2" aria-hidden="true">
            <span className="site-split-knot">×</span>
          </div>
          <div className="site-split-rail site-split-rail--3" aria-hidden="true">
            <span className="site-split-knot">×</span>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}

export default App;
