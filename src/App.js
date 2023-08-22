import "./App.css";
import { Routes, Route } from "react-router-dom";
import DiscoverPage from "./pages/Discover";
import FavoritePage from "./pages/Favorite";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<DiscoverPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
