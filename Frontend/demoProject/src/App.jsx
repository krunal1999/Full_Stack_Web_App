import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import LoginPage from "./pages/authenticationPage/LoginPage";
import RegistrationPage from "./pages/authenticationPage/RegistrationPage";
import Layout from "./layout/Layout";
import HomePage from "./pages/authenticationPage/HomePage";
import { Provider } from "react-redux";
import { store } from "./store/store";
import LandingPage from "./pages/LandingPage";
import ProtectedRoute from "./layout/ProtectedRoute";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          // public routes
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegistrationPage />} />


          //private router
          <Route path="protect" element={<ProtectedRoute />}>
            <Route path="landingpage" element={<LandingPage />} />
          </Route>
        </Route>
      </>
    )
  );

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </>
  );
}

export default App;
