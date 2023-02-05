import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Layout from "./Layout";
import SetupContent from "./SetupContent";
import NERContext from "./NERContext";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />} >
            <Route path="/setup" element={<SetupContent/>}>

            </Route>
            <Route path="/ner" element={<NERContext/>}>

            </Route>

        </Route>
      </Routes>
  );
}

export default App;
