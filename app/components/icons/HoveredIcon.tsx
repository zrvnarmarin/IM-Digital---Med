// "use client"

// import React, { useState } from 'react';

// export const HoveredIcon = ({ iconFill, backgroundFill } : { iconFill?: string, backgroundFill?: string }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   // Set the fill color based on whether the component is hovered or not
//   const fill = isHovered ? "#80d6f7" : iconFill;
//   const backgroundGill = is
  
//   return (
//     <svg
//       fill={fill}
//       width="50px"
//       height="50px"
//       viewBox="-10 -10 120.00 120.00"
//       xmlns="http://www.w3.org/2000/svg"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <g
//         id="SVGRepo_bgCarrier"
//         strokeWidth="0"
//         transform="translate(0,0), scale(1)"
//       >
//         <rect
//           x="-10"
//           y="-10"
//           width="120.00"
//           height="120.00"
//           rx="60"
//           fill={backgroundFill}
//         />
//       </g>

//       <g
//         id="SVGRepo_tracerCarrier"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         stroke="#CCCCCC"
//         strokeWidth="0.8"
//       />

//       <g id="SVGRepo_iconCarrier">
//         {" "}
//         <g>
//           {" "}
//           <path d="M72,25H70a.94.94,0,0,0-1,1v4a8,8,0,0,1-8,8H39a8,8,0,0,1-8-8V26a.94.94,0,0,0-1-1H28a6,6,0,0,0-6,6V74a6,6,0,0,0,6,6H72a6,6,0,0,0,6-6V31A6,6,0,0,0,72,25ZM28,53.86V51.79a2.08,2.08,0,0,1,2.08-2.08h3.11V46.6a2.08,2.08,0,0,1,2.07-2.08h2.08a2.08,2.08,0,0,1,2.07,2.08v3.11H42.5a2.08,2.08,0,0,1,2.08,2.08v2.07a2.08,2.08,0,0,1-2.08,2.08H39.39v3.11a2.07,2.07,0,0,1-2.07,2.07H35.24a2.07,2.07,0,0,1-2.07-2.07V55.94H30.06A2.08,2.08,0,0,1,28,53.86ZM71.66,71.65A1.32,1.32,0,0,1,70.33,73H29.41a1.33,1.33,0,0,1-1.33-1.33V69a1.34,1.34,0,0,1,1.33-1.33H70.33A1.33,1.33,0,0,1,71.66,69Zm0-11.62a1.33,1.33,0,0,1-1.33,1.33H50.22A1.34,1.34,0,0,1,48.89,60V57.37A1.34,1.34,0,0,1,50.22,56H70.33a1.33,1.33,0,0,1,1.33,1.33Zm0-11.63a1.33,1.33,0,0,1-1.33,1.33H50.41a1.34,1.34,0,0,1-1.33-1.33V45.74a1.34,1.34,0,0,1,1.33-1.33H70.33a1.33,1.33,0,0,1,1.33,1.33Z" />{" "}
//           <path d="M39,32H61a2,2,0,0,0,2-2V26a6,6,0,0,0-6-6H43a6,6,0,0,0-6,6v4A2,2,0,0,0,39,32Z" />{" "}
//         </g>{" "}
//       </g>
//     </svg>
//   );
// };
