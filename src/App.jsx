
import { BrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import StarsCanvas from "./components/canvas/Stars";

const Navbar = React.lazy(() => import('./components/Navbar'));
const Hero = React.lazy(() => import('./components/Hero'));
const Tech = React.lazy(() => import('./components/Tech'));
const Works = React.lazy(() => import('./components/Works'));
const Contact = React.lazy(() => import('./components/Contact'));
const Experience = React.lazy(() => import('./components/Experience'));
const Assistant = React.lazy(() => import('./pages/Assistant'));

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-color bg-no-repeat bg-center">
          <Suspense fallback={<div>Loading...</div>}>
              <Navbar />
              <Hero />
          </Suspense>
        </div>
          <Experience />
          <Tech />
          <Works />
      </div>
      <div className="relative z-0 flex self-auto items-center">
        <Suspense fallback={<div>Loading...</div>}>
          <Contact />
          <StarsCanvas />
          <Assistant />
        </Suspense>
      </div>
    </BrowserRouter>
  )
}

export default App
