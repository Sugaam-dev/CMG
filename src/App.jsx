import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home/Home";
import About from './pages/about/About';
import School from './pages/schools/Schoolpage';
import Collegeanduniversitypage from './pages/collegeuniversity/Collegeanduniversitypage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
                   <Route path='about' element={<About/>} />
                   <Route path='schools' element={<School/>} />
                   <Route path='CollegeUniversity' element={<Collegeanduniversitypage/>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
