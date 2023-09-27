import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importez Bootstrap CSS
import Video from './video';
import Video2 from './video2';

export default function App() {

  const [image, setImage] = React.useState();
	const [role, setRole] = React.useState(localStorage.getItem('role'));

  //new Route for test page Home.js by thomas
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Video2/>}/>
        </Routes>
      </BrowserRouter>
  );
}