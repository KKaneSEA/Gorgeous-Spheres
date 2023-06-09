import { useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { useRef } from "react";

export default function Spheres() {
  const sphere1 = useRef();
  const sphere2 = useRef();
  const sphere3 = useRef();
  const sphere4 = useRef();
  const sphere5 = useRef();
  const sphere6 = useRef();
  const sphere7 = useRef();
  const sphere8 = useRef();
  const sphere9 = useRef();
  const sphere10 = useRef();
  const sphere11 = useRef();
  const sphere12 = useRef();

  const texture1 = useTexture("./normal1.jpg");
  const texture2 = useTexture("./normal2.jpg");
  const texture3 = useTexture("./normal3.jpg");
  const texture4 = useTexture("./normal4.jpg");
  const texture5 = useTexture("./normal5.jpg");
  const texture6 = useTexture("./normal6.jpg");
  const texture7 = useTexture("./normal7.jpg");
  const texture8 = useTexture("./normal8.jpg");
  const normalArrays = [
    texture1,
    texture2,
    texture3,
    texture4,
    texture5,
    texture6,
    texture7,
    texture8,
  ];

  const colorArrays = [
    "#ffb3b3",
    "#F7E6B2",
    "#E0A900",
    "#BA6368",
    "#FFCD69",
    "#C7FC62",
    "#E5FFB3",
  ];

  function randomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  useFrame((state, delta) => {
    sphere1.current.rotation.y += delta * 0.6;
    sphere1.current.rotation.z += delta * 0.6;
    sphere2.current.rotation.z += delta * 0.6;
    sphere3.current.rotation.z += delta * 0.5;
    sphere4.current.rotation.y += delta * 0.6;
    sphere5.current.rotation.x += delta * 0.6;
    sphere6.current.rotation.x += delta * 0.2;
    sphere7.current.rotation.z += delta * 0.6;
    sphere8.current.rotation.z += delta * 0.6;
    sphere9.current.rotation.y += delta * 0.3;
    sphere9.current.rotation.x += delta * 0.6;
    sphere10.current.rotation.z += delta * 0.6;
    sphere11.current.rotation.x += delta * 0.6;
    sphere12.current.rotation.z += delta * 0.9;
  });

  const sphereHandler = (evt) => {
    // evt.object.material.color.set(`hsl(${Math.random() * 360}, 100%, 75%)`);
    evt.object.material.color.set(randomItem(colorArrays));
    // evt.object.material.map.set(randomItem(normalArrays));
    console.log(evt.object);
    console.log(evt.eventObject.uuid);
    console.log("the event");
  };

  return (
    <>
      <OrbitControls
        minDistance={2}
        maxDistance={7}
        target={[-0.7, -0.8, -2.2]}
      />
      <directionalLight position={[1, 1, 3]} intensity={1} color="white" />
      <ambientLight intensity={1.2} color="white" />
      <mesh
        ref={sphere1}
        onClick={sphereHandler}
        position={[3, 1.6, 1]}
        scale={0.7}
      >
        <sphereGeometry />
        <meshStandardMaterial color="#FFBFC3" map={randomItem(normalArrays)} />
      </mesh>
      <mesh
        ref={sphere2}
        onClick={sphereHandler}
        position={[-2, 2, -2]}
        scale={0.7}
      >
        <sphereGeometry />
        <meshStandardMaterial color="#E6D62E" map={randomItem(normalArrays)} />
      </mesh>

      <mesh
        ref={sphere3}
        onClick={sphereHandler}
        position={[2.2, 1, -5]}
        scale={1.2}
      >
        <sphereGeometry />
        <meshStandardMaterial color="#FFBFC3" map={randomItem(normalArrays)} />
      </mesh>
      <mesh
        ref={sphere4}
        onClick={sphereHandler}
        position={[6, -2, -2.5]}
        scale={0.9}
      >
        <sphereGeometry />
        <meshStandardMaterial color="#BADFFF" map={randomItem(normalArrays)} />
      </mesh>
      <mesh
        ref={sphere5}
        onClick={sphereHandler}
        position={[1.1, -3.2, -0.9]}
        scale={1}
      >
        <sphereGeometry />
        <meshStandardMaterial color="#EBDCAB" map={randomItem(normalArrays)} />
      </mesh>
      <mesh
        ref={sphere6}
        onClick={sphereHandler}
        position={[-2.5, -1.2, -2]}
        scale={0.8}
      >
        <sphereGeometry />
        <meshStandardMaterial color="#F0BB0E" map={randomItem(normalArrays)} />
      </mesh>
      <mesh
        ref={sphere7}
        onClick={sphereHandler}
        position={[-5, 2, -6]}
        scale={1.2}
      >
        <sphereGeometry />
        <meshStandardMaterial color="#FFBFC3" map={randomItem(normalArrays)} />
      </mesh>
      <mesh
        ref={sphere8}
        onClick={sphereHandler}
        position={[-6, -6, -1.8]}
        scale={1.5}
      >
        <sphereGeometry />
        <meshStandardMaterial color="#F77B23" map={randomItem(normalArrays)} />
      </mesh>
      <mesh
        ref={sphere9}
        onClick={sphereHandler}
        position={[1, -5, 3]}
        scale={0.9}
      >
        <sphereGeometry />
        <meshStandardMaterial color="#F0BB0E" map={randomItem(normalArrays)} />
      </mesh>
      <mesh
        ref={sphere10}
        onClick={sphereHandler}
        position={[-7, 1.2, -1.2]}
        scale={1.3}
      >
        <sphereGeometry />
        <meshStandardMaterial color="#F77B23" map={randomItem(normalArrays)} />
      </mesh>
      <mesh
        ref={sphere11}
        onClick={sphereHandler}
        position={[1, -2, 6]}
        scale={1.2}
      >
        <sphereGeometry />
        <meshStandardMaterial color="#E6D62E" map={randomItem(normalArrays)} />
      </mesh>
      <mesh
        ref={sphere12}
        onClick={sphereHandler}
        position={[1, 2, -10]}
        scale={0.9}
      >
        <sphereGeometry />
        <meshStandardMaterial color="#EBDCAB" map={randomItem(normalArrays)} />
      </mesh>
    </>
  );
}
