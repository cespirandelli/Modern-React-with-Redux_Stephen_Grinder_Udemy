import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

console.log(AlexaImage); // Base 64 will transform the image of 9,7Kb or less to a string
console.log(SiriImage); // Will be shows as a path to the image if bigger then 9,7Kb.

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>
      <img src={AlexaImage} />
      <img src={SiriImage} />

      <ProfileCard img="AlexaImage" title="Alexa" handle="@alexa99" />
      <ProfileCard CortanaImage title="Cortana" handle="@cortana32" />
      <ProfileCard SiriImage title="Siri" handle="@siri01" />
    </div>
  );
}

export default App;
