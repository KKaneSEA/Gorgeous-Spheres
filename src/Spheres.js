import "./App.css";

import { useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { useRef } from "react";
import useSound from "use-sound";
import sound1 from "./sounds/sound1.mp3";
import sound2 from "./sounds/sound2.mp3";
import sound3 from "./sounds/sound3.mp3";
import sound4 from "./sounds/sound4.mp3";
import sound5 from "./sounds/sound5.mp3";

export default function Spheres() {
  const textures = useTexture([
    "./normal1.jpg",
    "./normal2.jpg",
    "./normal3.jpg",
    "./normal4.jpg",
    "./normal5.jpg",
    "./normal6.jpg",
    "./normal7.jpg",
    "./normal8.jpg",
  ]);

  const colors = [
    "#ffb3b3",
    "#F7E6B2",
    "#E0A900",
    "#BA6368",
    "#FFCD69",
    "#C7FC62",
    "#E5FFB3",
    "#BADFFF",
  ];

  const [play1] = useSound(sound1, { volume: 0.1 });
  const [play2] = useSound(sound2, { volume: 0.1 });
  const [play3] = useSound(sound3, { volume: 0.05 });
  const [play4] = useSound(sound4, { volume: 0.09 });
  const [play5] = useSound(sound5, { volume: 0.2 });

  const sounds = [play1, play2, play3, play4, play5];

  const sphereData = [
    {
      position: [3, 1.6, 1],
      scale: 0.7,
      color: "#FFBFC3",
      sound: play5,
      rotation: [0, 0.6, 0.6],
    },
    {
      position: [-2, 2, -2],
      scale: 0.7,
      color: "#E6D62E",
      sound: play4,
      rotation: [0, 0, 0.6],
    },
    {
      position: [2.2, 1, -5],
      scale: 1.2,
      color: "#FFBFC3",
      sound: play3,
      rotation: [0, 0, 0.5],
    },
    {
      position: [6, -2, -2.5],
      scale: 0.9,
      color: "#BADFFF",
      sound: play2,
      rotation: [0, 0.6, 0],
    },
    {
      position: [1.1, -3.2, -0.9],
      scale: 1,
      color: "#EBDCAB",
      sound: play2,
      rotation: [0.6, 0, 0],
    },
    {
      position: [-2.5, -1.2, -2],
      scale: 0.8,
      color: "#F0BB0E",
      sound: play1,
      rotation: [0.2, 0, 0],
    },
    {
      position: [-5, 2, -6],
      scale: 1.2,
      color: "#FFBFC3",
      sound: play4,
      rotation: [0, 0, 0.6],
    },
    {
      position: [-6, -6, -1.8],
      scale: 1.5,
      color: "#F77B23",
      sound: play3,
      rotation: [0, 0, 0.6],
    },
    {
      position: [1, -5, 3],
      scale: 0.9,
      color: "#F0BB0E",
      sound: play5,
      rotation: [0.6, 0.3, 0],
    },
    {
      position: [-7, 1.2, -1.2],
      scale: 1.3,
      color: "#F77B23",
      sound: play2,
      rotation: [0, 0, 0.6],
    },
    {
      position: [1, -2, 6],
      scale: 1.2,
      color: "#E6D62E",
      sound: play1,
      rotation: [0.6, 0, 0],
    },
    {
      position: [1, 2, -10],
      scale: 0.9,
      color: "#EBDCAB",
      sound: play5,
      rotation: [0, 0, 0.9],
    },
  ];

  const sphereRefs = useRef([]);

  const randomItem = (items) => items[Math.floor(Math.random() * items.length)];

  useFrame((state, delta) => {
    sphereRefs.current.forEach((ref, i) => {
      if (!ref) return;
      const [rx, ry, rz] = sphereData[i].rotation;
      ref.rotation.x += delta * rx;
      ref.rotation.y += delta * ry;
      ref.rotation.z += delta * rz;
    });
  });

  const handleSphereClick = (evt) => {
    evt.object.material.color.set(randomItem(colors));
    console.log(evt.object, evt.eventObject.uuid, "Sphere clicked");
  };

  const pointerEvents = {
    onPointerEnter: () => (document.body.style.cursor = "pointer"),
    onPointerLeave: () => (document.body.style.cursor = "auto"),
  };

  return (
    <>
      <OrbitControls
        minDistance={2}
        maxDistance={10}
        target={[-0.7, -0.8, -2.2]}
      />
      <directionalLight position={[1, 1, 3]} intensity={1} color="white" />
      <ambientLight intensity={1.2} color="white" />
      {sphereData.map((s, i) => (
        <mesh
          key={i}
          ref={(el) => (sphereRefs.current[i] = el)}
          position={s.position}
          scale={s.scale}
          onClick={(evt) => {
            handleSphereClick(evt);
            s.sound();
          }}
          onContextMenu={handleSphereClick}
          {...pointerEvents}
        >
          <sphereGeometry />
          <meshStandardMaterial color={s.color} map={randomItem(textures)} />
        </mesh>
      ))}
    </>
  );
}
