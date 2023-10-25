import React, { useState } from "react";

function HornedBeast({ title, imageUrl, description, onClick }) {
  const [favorites, setFavorites] = useState(0);

  const handleFavorite = (event) => {
    event.stopPropagation(); // Bu satırı ekleyerek, kalp ikonuna tıklanınca üstteki div'in onClick eventi tetiklenmez.
    setFavorites(favorites + 1);
  };

  return (
    <div className="horned-beast" onClick={onClick}>
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} title={title} />
      <p>{description}</p>
      <p onClick={handleFavorite}>❤️ {favorites}</p>
    </div>
  );
}

export default HornedBeast;
