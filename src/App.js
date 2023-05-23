import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./components/layouts/defaultLayout";
import {Suspense} from "react";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={'Please Wait ...'}>
        <Routes>
          <Route path="*" name="Home" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
