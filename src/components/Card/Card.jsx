import './style.css';

const Card = ({ id, image, title, description, technologie }) => {
  return (
    <div className="card" id={id}>
      <img className="card_img" src={image} alt="background-img" />
      <div className="card_description">
        <h1 className="card_description_title">{title}</h1>
        <p className="card_description_content">{description}</p>
        <div className="card_technologie">
          {technologie &&
            technologie.map((techno) => (
              <img className="card_technologie_logo" src={techno} alt="logo" />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
