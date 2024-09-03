import React from "react";

const PersonCard = ({ name, image, x, y }) => (
  <foreignObject width="200" height="280" x={x} y={y}>
    <div className="card">
      <div className="card-content">
        <div className="person">
          {image && <img src={image} alt={name} className="image" />}
          {name && <div className="name">{name}</div>}
        </div>
      </div>
    </div>
  </foreignObject>
);

export default PersonCard;
