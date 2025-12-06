// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../components/Exceptions/not-found";
import ProjectDetailPage from "../components/project/project-detail";
import { Path } from "../constants/appConstants/appConstants";
import QrCodeSetting from "../pages/qrCode/qrCodeSetting";
import QrCodeView from "../pages/qrCode/qrCodeView";

export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route
        path={[Path.project, Path.slug].join("/")}
        element={<ProjectDetailPage />}
      />

      <Route path={`/${Path.qrcode}`} element={<QrCodeSetting />} />
      <Route path={`/${Path.viewQR}`} element={<QrCodeView />} />

      <Route path={Path.others} element={<NotFound />} />
    </Routes>
  );
}
