import "./ImageShow.css";

function ImageShow({ image }) {
  return (
    <img className="img" src={image.urls.small} alt={image.alt_description} />
  );
}

export default ImageShow;
