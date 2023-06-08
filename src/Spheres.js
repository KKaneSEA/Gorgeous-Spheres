import { useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { useRef } from "react";

export default function Spheres() {
  const sphere = useRef();

  const texture1 = useTexture("./normal1.jpg");
  const texture2 = useTexture("./normal2.jpg");
  const texture3 = useTexture("./normal3.jpg");
  const normalArrays = [texture1, texture2, texture3];

  const colorArrays = ["red", "blue", "yellow"];

  function randomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  useFrame((state, delta) => {
    sphere.current.rotation.y += delta * 0.6;
    sphere.current.rotation.z += delta * 0.6;
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
      <OrbitControls minDistance={2} maxDistance={7} />
      <directionalLight position={[1, 1, 3]} intensity={1} color="blue" />
      <ambientLight intensity={1.2} color="white" />
      <mesh ref={sphere} onClick={sphereHandler}>
        <sphereGeometry />
        <meshStandardMaterial color="green" map={randomItem(normalArrays)} />
      </mesh>
      <mesh ref={sphere} onClick={sphereHandler} position={[2, 0, 2]}>
        <sphereGeometry />
        <meshStandardMaterial color="green" map={randomItem(normalArrays)} />
      </mesh>
    </>
  );
}
