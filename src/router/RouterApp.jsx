import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../views/Login";
import { Messages } from "../views/Messages";
import { NotFound } from "../views/NotFound";
import ProtectedRoute from "../components/ProtectedRoute";
import Help from "../views/Help";

const RouterApp = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/chat" replace /> : <Login />}
        /> 
        <Route path="/chat"
          element={
            <ProtectedRoute>
              <Messages />
            </ProtectedRoute>}
        />
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export { RouterApp }