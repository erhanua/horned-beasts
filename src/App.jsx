import React, { useState } from "react";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SelectedBeast from "./components/Modal";

function App() {
  const [selectedBeast, setSelectedBeast] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  const handleShowModal = (beast) => {
    setSelectedBeast(beast);
    setModalShow(true);
  };

  const handleCloseModal = () => {
    setModalShow(false);
  };
  return (
    <div className="app">
      <Header />
      <Gallery handleShowModal={handleShowModal} />
      <SelectedBeast
        show={modalShow}
        handleClose={handleCloseModal}
        beast={selectedBeast}
      />
      <Footer />
    </div>
  );
}

export default App;
