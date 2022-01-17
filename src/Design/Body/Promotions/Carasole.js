import React from "react";


export default function Carasole() {
  const [img, setImg] = React.useState(0);
  setTimeout(() => {
    setImg(img + 1);
  }, 3000);
  if (img > 2) {
    setImg(0);
  }
  return (
    <div>
      <p style={{ color: "white" }}>{img}</p>
    </div>
  );
}
