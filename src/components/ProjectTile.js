// import React from 'react';
// // import ColorThief from 'color-thief-browser';
// import '../styles/ProjectTile.css';

// function ProjectTile({ image, title, description, date, primary, secondary}) {
  
//     return (
//         <div className="project-tile" style={{ backgroundColor: primary}}>
//             <div className="tile-content" style={{ backgroundColor: primary, color: secondary }}>
//                 <h3>{title}</h3>
//                 <p>{description}</p>
//                 {date && <p className="tile-price">{date}</p>}
//             </div>
//             <img src={image} alt={title} className="tile-image" />
//         </div>
//     );  
// }

// export default ProjectTile;

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectTile.css';

function ProjectTile({ id, image, title, description, type, primary, secondary }) {
  return (
    <div className="project-tile" style={{ backgroundColor: primary }}>
      <div className="tile-content" style={{ backgroundColor: primary, color: secondary }}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <Link to={`/projects/${id}`}>
        <img src={image} alt={title} className="tile-image" />
      </Link>
    </div>
  );
}

export default ProjectTile;
