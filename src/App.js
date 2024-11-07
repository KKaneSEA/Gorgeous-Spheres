// import "./App.css";
import "./App.scss";
import { createXRStore, XR } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import { Sparkles, OrbitControls } from "@react-three/drei";

import Loading from "./Loading.js";
import Spheres from "./Spheres.js";

import { Suspense } from "react";

// const store = createXRStore();

function App() {
  const store = createXRStore();
  return (
    <>
      <div className="App-frame">
        <header className="Header">
          <h1 className="Header-title">GORGEOUS SPHERES</h1>
          <p className="Header-text">CLICK A SPHERE</p>
          <p className="Header-text-small">PLEASE HAVE SOUND ON</p>
          {/* <button className="AR-Button" onClick={() => store.enterAR()}>
            Enter AR on Mobile
          </button> */}
        </header>
        <div className="Canvas-frame">
          <Canvas flat className="Canvas" camera={{ fov: 50 }}>
            <XR store={store}>
              <Suspense
                fallback={<Loading position-y={0.05} scale={[2, 3, 2]} />}
              >
                <Spheres />
              </Suspense>
              <Sparkles
                size={7}
                scale={[10, 10, 30]}
                position-y={1}
                speed={0.9}
                count={20}
                color="beige"
              />

              <Sparkles
                size={7}
                scale={[15, 20, 10]}
                position-y={0.9}
                speed={1}
                count={20}
                color="beige"
              />
            </XR>
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default App;
