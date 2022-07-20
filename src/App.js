import "./App.css";
import { DetailMovie } from "./pages/DetailMovie";
import { Homepage } from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from "@mui/material";
import ProtectedRoute from "./components/ProtectedRoute";

import Navbar from "./components/Navbar";
import theme from "./themes/theme";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Homepage />
                <Footer />
              </>
            }
          />
          <Route
            path="login"
            element={
              <ProtectedRoute loginOnly={false}>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="register"
            element={
              <ProtectedRoute loginOnly={false}>
                <Register />
              </ProtectedRoute>
            }
          />
          <Route
            path="/movie/:id"
            element={
              <ProtectedRoute>
                <Navbar />
                <DetailMovie />
                <Footer />
              </ProtectedRoute>
            }
          />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
