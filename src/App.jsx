import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import BodyComponent from "./components/BodyComponent";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<BodyComponent></BodyComponent>}>
            <Route path="/login" element={<LogInPage></LogInPage>}></Route>
            <Route path="/signup" element={<SignUpPage></SignUpPage>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
