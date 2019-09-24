import React from "react";

// function Sidebar() {
//   return (
//     <div>
//       <h1>
//         Hello <span>WORLD</span>
//       </h1>
//       <p>
//         There’s a simple pattern I find immensely useful when writing React
//         applications. If you’ve been doing React for a while, you have probably
//         already discovered it. This article explains it well, but I want to add
//         a few more points.
//       </p>
//     </div>
//   );
// }

const Sidebar = ({ activeBtn = "en" }) => {
  const data = {
    en: {
      message: "Hello World",
      text: `There’s a simple pattern I find immensely useful when writing React
        applications. If you’ve been doing React for a while, you have probably
        already discovered it. This article explains it well, but I want to add
        a few more points.`
    },
    fr: {
      message: "Bonjour le monde!",
      text: `There’s a simple pattern I find immensely useful when writing React
        applications. If you’ve been doing React for a while, you have probably
        already discovered it. This article explains it well, but I want to add
        a few more points.`
    }
  };

  return (
    <div>
      <h1>
        <span>{data[activeBtn].message}</span>
      </h1>
      <p>{data[activeBtn].text}</p>
    </div>
  );
};

export default Sidebar;
