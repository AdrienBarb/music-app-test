import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
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
