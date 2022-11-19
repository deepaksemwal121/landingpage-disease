import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/cabg/MainPage";
import IVF from "./pages/ivf/IVF";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<MainPage />} />
          <Route path="ivf" element={<IVF />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
