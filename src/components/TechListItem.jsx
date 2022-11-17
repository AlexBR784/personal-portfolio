import React from "react";

export const TechListItem = ({ tech, url }) => {
  return (
    <li className="flex items-center">
      <img width="20" className="mr-1" src={url} />
      {tech}
    </li>
  );
};
