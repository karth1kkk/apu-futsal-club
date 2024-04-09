import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { AmbientLight, DirectionalLight } from 'three';
import { OrbitControls } from "@react-three/drei";
import { useState, useEffect } from "react";

import './App.css'
import { Model } from "./Model";
import { Canvas } from "@react-three/fiber";

function Home() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const [rotationY, setRotationY] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setRotationY((prevRotationY) => prevRotationY + 0.01); // Increase rotation angle on the y-axis
      }, 16); // Adjust rotation speed as needed (60fps)
  
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    const [scroll, setScroll] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY || window.pageYOffset;
        setScroll(scrollTop / (document.documentElement.scrollHeight - window.innerHeight));
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const blurIntensity = scroll >= 1 ? 5 : 0; // Adjust blur intensity as needed
  
  return (
    <>

<header>
      <h1>APU'S Futsal Club</h1>

      <nav>
      <Box>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
      </Box>
        <a href="#about">About</a>
        <a href="/dashboard" className="button">Activities</a>
      </nav>
    </header>

    <section className="sneaker" >
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 0]} intensity={5} />
      <OrbitControls enableZoom={false} />
      <directionalLight position={[-1, -10, 3]} intensity={5} color={0x59009F} />
      <Model position={[0, 0, 0]} scale={[3.2, 3.2, 3.2]} rotation={[0, rotationY, 0]}/> {/* Center the model */}
    </Canvas>
     
    </section>
    

    <section className="new-drop">
      <img src="logo.svg" alt="New Drop" />
    </section>

    <section className="content">
      <img src="warmup-1.jpg" alt="Photo" />

      <p id="about">
        In a realm flooded with flashy team branding and over-the-top designs, 
        APU's Futsal Club emerges as a breath of fresh air, prioritizing 
        minimalistic elegance and unparalleled performance on the court.
      </p>
    </section>

    <section className="content">
      <p>
      Blending tradition with innovation, our latest futsal gear offers more than 
      just equipment—it's a lifestyle choice for those who appreciate sophistication 
      and top performance on the court.
      </p>

      <img src="warmup-2.jpg" alt="Photo" />
    </section>

    <section className="content">
      <img src="warmup-3.jpg" alt="Photo" />

      <p>
      Join us in celebrating a return to the essentials and stepping into a new era of futsal. 
      Welcome to the APUBC revolution.
      </p>
    </section>

    </>
  )
}

export default Home