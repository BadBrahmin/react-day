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
      text: `Si vous faites React depuis un moment, vous avez probablement
        déjà découvert cela. Cet article explique bien, mais je veux ajouter
        quelques points de plus. Il existe un motif simple que je trouve extrêmement utile lors de la rédaction de React
        applications.`
    },
    Hi: {
      message: "This is supposed to be in Hindi",
      text: `यदि आप थोड़ी देर के लिए प्रतिक्रिया कर रहे हैं, तो आपके पास शायद है
        पहले से ही पता चला। यह लेख इसे अच्छी तरह से समझाता है, लेकिन मैं जोड़ना चाहता हूं
        कुछ और बिंदु। रिएक्ट लिखते समय एक सरल पैटर्न मुझे बेहद उपयोगी लगता है
        अनुप्रयोग।`
    },
    Gr: {
      message: "I know nothing other than Danke in German",
      text: `Wenn Sie schon eine Weile mit React gearbeitet haben, haben Sie dies wahrscheinlich getan
        schon entdeckt. Dieser Artikel erklärt es gut, aber ich möchte hinzufügen
        noch ein paar punkte. Es gibt ein einfaches Muster, das mir beim Schreiben von React außerordentlich nützlich ist
        anwendungen.`
    },
    Ch: {
      message: "I don't know what it says in Chinese",
      text: `
如果您已经进行了一段时间React，您可能已经
        已经发现了。本文对此进行了很好的解释，但我想添加
        还有几点。我发现有一个简单的模式在编写React时非常有用
        应用。 `
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
