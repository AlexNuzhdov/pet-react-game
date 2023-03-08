import EasyLevelPage from 'pages/EasyLevelPage';
import HardLevelPage from 'pages/HardLevelPage';
import HomePage from 'pages/HomePage';
import NormalyLevelPage from 'pages/NormalyLevelPage';
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from './forSharedLayout/SharedLayout';



export default function App() {

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/6cards" element={<EasyLevelPage />} />
        <Route path="/8cards" element={<NormalyLevelPage />} />
        <Route path="/12cards" element={<HardLevelPage />} />
      </Route>
    </Routes>
  );
}



