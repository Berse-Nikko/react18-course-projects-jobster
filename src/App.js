import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ErrorPage, Landing, RegisterPage, ProtectedRoute } from "./pages"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {
  Profile,
  AllJobs,
  AddJob,
  Stats,
  SharedLayout,
} from "./pages/dashboard"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  )
}

export default App
