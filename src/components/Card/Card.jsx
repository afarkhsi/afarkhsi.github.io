import './style.css';

const Card = ({ id, image, title, description, technologie, link }) => {
  return (
    <div className="card" id={id}>
      <img className="card_img" src={image} alt="background-img" />
      <div className="card_description">
        <div className="card_description_header">
          <span className="card_description_header_title">{title}</span>
          <a
            className="card_description_header_link"
            href={link}
            target="_blank"
          >
            Voir le projet
          </a>
        </div>

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
