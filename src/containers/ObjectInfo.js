import React from 'react';
import '../css/ObjectInfo.css';

const ObjectInfo = ({ object, message }) => {
  // Assuming 'object' is an object with properties
  const properties = Object.keys(object);

  return (
    <div className="object-info">
      <h2>{message}</h2>
      <div className="object-properties">
        {properties.map((key) => (
          <div key={key} className="property">
            <span className="property-name">{key}:</span>
            <span className="property-value">{object[key]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ObjectInfo;