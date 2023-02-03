import React, { useState } from "react";

const CloseButton = () => <button>❌</button>;

const ExpandMenuButton = () => <button>Expand Menu</button>;

const StarButton = () => <button>⭐</button>;

const ImageDisplay = ({ src }) => <img src={src} alt="displayed image" />;

const RandomImageButton = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentImage(images[randomIndex]);
  };

  return (
    <>
      <ImageDisplay src={currentImage} />
      <button onClick={handleClick}>Random Image</button>
    </>
  );
};

const App = () => {
  return (
    <div>
      <div>
        <CloseButton />
        <ExpandMenuButton />
        <StarButton />
      </div>
      <RandomImageButton images={["image1.jpg", "image2.jpg", "image3.jpg"]} />
    </div>
  );
};

export default App;
