import { useState } from "react";

function ShowImage() {
  const [imageSrc, setImageSrc] = useState(null);

  function handleShowImage() {
    setImageSrc("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5lYKXbvab7rb7LiHP-d5Qmq8hNXTGSWDQV4ZgmDC7APXMhhl3X-oCXyUjxyY2nd-tIuKQ7OnL5UGFyAS9lsQEYzdloqtY8EQ8lh7MNtQ&s=10");
  }

  return (
    <div>
      <button onClick={handleShowImage}>Pokaż obraz</button>
      {imageSrc && <img src={imageSrc} alt="Obraz" />}
    </div>
  );
}

export default ShowImage;
