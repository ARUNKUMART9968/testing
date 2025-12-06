import React from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useGSAP } from "@gsap/react"; 

import {Terminal} from "#windows/index.js";
import { Navbar, Welcome, Dock } from "#components/index.js";
import "./index.css";

gsap.registerPlugin(Draggable, useGSAP);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
    </main>
  );
};

export default App;
