import { Canvas } from "@react-three/fiber";
import React from "react";
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";

const App = () => {
  return (
    <div className="w-full h-screen font-['helvetica']">
      <div className="navbar line flex gap-8 pt-10 pb-3 absolute top-0 left-1/2 -translate-x-1/2">
        {[
          "Store",
          "Mac",
          "iPad",
          "iPhone",
          "iCloud",
          "Watch",
          "AirPods",
          "TV&Home",
          "Entertainment",
          "Accesories",
          "Support",
        ].map((e) => (
        <a href="" className="text-white font-[400] text-sm ">
         {e}
        </a>
        ))} ;
      </div>
      <div className="absolute flex flex-col items-center text-white top-24 left-1/2 -translate-x-1/2 ">
        <h3 className="masked text-7xl tracking-tighter font-[600] ">MacBook Pro</h3>
        <h5 className="font-[200]">Mind-blowing,  Head-turning </h5>
        <p className="font-[200]  text-center w-2/3">
           Buy MacBook Pro starting at ₹158900.00 with education savings. And now up to 30 Sep, get AirPods.
        </p>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
          ]}
        />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
