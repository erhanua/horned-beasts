import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
