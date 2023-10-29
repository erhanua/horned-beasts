import React, { useState } from "react";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SelectedBeast from "./components/Modal";
import galleryOfBeasts from "./components/data";

function App() {
  const [selectedBeast, setSelectedBeast] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  const [searchInput, setSearchInput] = useState("");
  const filteredBeasts = galleryOfBeasts.filter(
    (beast) =>
      beast.title.toLowerCase().includes(searchInput.toLowerCase()) ||
      beast.keyword.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleShowModal = (beast) => {
    setSelectedBeast(beast);
    setModalShow(true);
  };

  const handleCloseModal = () => {
    setModalShow(false);
  };
  return (
    <div className="app">
      <Header setSearchInput={setSearchInput} />
      <Gallery beasts={filteredBeasts} handleShowModal={handleShowModal} />
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
