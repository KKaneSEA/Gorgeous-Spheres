import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Sparkles, OrbitControls } from "@react-three/drei";
import Spheres from "./Spheres.js";

function App() {
  return (
    <>
      <div className="App-frame">
        <header className="Header">
          <h1>Gorgeous Spheres</h1>
          <p className="Header-text">Click a sphere</p>
          <p className="Header-text">(sound on)</p>
        </header>
        <div className="Canvas-frame">
          <Canvas flat className="Canvas">
            <Spheres />
            <Sparkles
              size={7}
              scale={[10, 10, 30]}
              position-y={1}
              speed={0.9}
              count={20}
              color="beige"
            />
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default App;
