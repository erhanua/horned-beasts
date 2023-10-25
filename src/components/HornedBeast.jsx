import React, { useState } from "react";

function HornedBeast({ title, imageUrl, description }) {
  const [favorites, setFavorites] = useState(0);

  const handleFavorite = () => {
    setFavorites(favorites + 1);
  };

  return (
    <div className="horned-beast" onClick={handleFavorite}>
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} title={title} />
      <p>{description}</p>
      <p>❤️ {favorites}</p>
    </div>
  );
}

export default HornedBeast;
