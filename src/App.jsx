import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./Pages/Home";
import Kontakt from "./Pages/Kontakt";
import Fotogalerija from "./Pages/Fotogalerija";
import Opis from "./Pages/Opis";
import PagesNotFound from "./Pages/PagesNotFound";
import AppLayout from "./Pages/AppLayout";
import Zdravlje from "./Pages/Zdravlje";
import SkoliozaKamp from "./Pages/zdravlje/SkoliozaKamp";

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/o-nama" element={<Opis />} />

            <Route path="/zdravlje" element={<Zdravlje />} />

            <Route path="/zdravlje/skolioza-kamp" element={<SkoliozaKamp />} />

            <Route path="/fotogalerija" element={<Fotogalerija />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="*" element={<PagesNotFound />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;
