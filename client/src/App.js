import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/Login";
import FrontPage from "./pages/frontPage";
import Register from "./pages/auth/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import Analytics from "./pages/Dashboard/Analytics";
import AdminHome from "./pages/Admin/AdminHome";
import Contact from "./pages/contactus";
import Footer from "./pages/Footer";
import VolunteerForm from "./pages/Volunteer";
import Email from "./pages/email";
import AdminUpload from "./pages/Admin/AdminUpload";
import Header from "./components/shared/Layout/Header";
import DonorHome from "./pages/Admin/SupplierHome";
import WeatherForecast from './components/weatherforecast/WeatherForecast';
import CropSalesAnalytics1 from "./pages/Dashboard/CropSalesAnalytics1";
import CropPrediction from './pages/CropPrediction';



function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/volunteer" 
          element={
            <ProtectedRoute>
              <Header />
              <VolunteerForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/email"
          element={<Email />}
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminHome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/supplierhome"
          element={
            <ProtectedRoute>
              <SupplierHome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <Header />
              <FrontPage />
              <Footer />
            </>
          }
        />

        <Route
          path="/analytics"
          element={
            <Route>
              <Analytics />
            </Route>
          }
        />
        
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        
        <Route
          path="/contactus"
          element={
            <>
              <Header />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/weather-forecast"
          element={<WeatherForecast />}
        />
        <Route
          path="/admin-upload"
          element={<AdminUpload />}
        />
              
        <Route
          path="/crop-prediction"
          element={
            <>
              <Header />
              <CropPrediction />
              <Footer />
            </>
          }
        />
        
        <Route path="/crop-prediction" element={<CropPrediction />} />
        <Route path="/crop-result" element={<CropPrediction />} />
      </Routes>
    </>
    
  );
}

export default App;
