import React from 'react';
import '../styles/About.css';
import ToolTile from './ToolTile';
import pitching from '../images/pitching.png'; // Adjust the path accordingly
import designthink from '../images/designthink.png'; // Example tool image, adjust path accordingly
import POVs from '../images/POVs.png'; // Example tool image, adjust path accordingly
import HMW from   '../images/HMW.png'; // Example tool image, adjust path accordingly
import AssumptionTest from '../images/AssumptionTest.png'; // Example tool image, adjust path accordingly
import empathymap from '../images/empathymap.png'; // Example tool image, adjust path accordingly
import visual from '../images/visual.png'; // Example tool image, adjust path accordingly
import sketches from '../images/Sketches.png'; // Example tool image, adjust path accordingly
import userflows from '../images/userflows.png'; // Example tool image, adjust path accordingly
import MedFi from '../images/MedFi.png'; // Example tool image, adjust path accordingly
import groundedTheory from '../images/groundedTheory.png'; // Example tool image, adjust path accordingly
// import Hexagon from './Hexagon';
import design_thinking from '../images/design_thinking.png';

function Frameworks() { 
    const tools = [
        {
            image: empathymap,
            title: 'Empathy Maps',
            primary: "#525659",
            secondary: 'black', 
        },
        {
            image: groundedTheory,
            title: 'Grounded Theory',
            primary: "white",
            secondary: 'black',
        },
        {
            image: POVs,
            title: 'POVs',
            primary: "#FBF7FF",
            secondary: 'black', 
        },
        {
            image: HMW,
            title: 'HMWs',
            primary: "white",
            secondary: 'black', 
        },
        {
            image: AssumptionTest,
            title: 'Assumption Evalutions',
            primary: "white",
            secondary: 'black', 
        },
        {
            image: visual,
            title: 'Mood Boards & Style Tiles',
            primary: "white",
            secondary: 'black',
        },
        {
            image: sketches,
            title: 'Rapid Sketches',
            primary: "white",
            secondary: 'black',
        },
        {
            image: userflows,
            title: 'User Flows',
            primary: "white",
            secondary: 'black',
        },
        {
            image: MedFi,
            title: 'Figma Prototypes',
            primary: "white",
            secondary: 'black',
        },
        ];

      
    return(
        <section className='tools-section'>
            <h2>Design Thinking Tools and Frameworks</h2>
            <div className="hexagon">
                <img src={design_thinking} alt="Design Thinking Hex Tile, Empathize, Define, Ideate, Prototype, Test, Build" />
            </div>
            <div className='tool-tile-section'>
                <Tools tools={tools} />
            </div>  
        </section>
    )
}

function Tools({ tools }) {
    return (
      <div className="tools">
        <div className='tools-container'>
          {tools.map((tool, index) => (
            <ToolTile
              key={index}
              image={tool.image}
              title={tool.title}
              description={tool.description}
              primary={tool.primary}
              secondary={tool.secondary}
            />
          ))}
        </div>
      </div>
    );
  }

export default Frameworks;