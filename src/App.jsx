import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import LogInPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import BodyComponent from "./components/BodyComponent";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<BodyComponent></BodyComponent>}>
              <Route path="/login" element={<LogInPage></LogInPage>}></Route>
              <Route path="/signup" element={<SignUpPage></SignUpPage>}></Route>
              <Route
                path="/profile"
                element={<ProfilePage></ProfilePage>}
              ></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
