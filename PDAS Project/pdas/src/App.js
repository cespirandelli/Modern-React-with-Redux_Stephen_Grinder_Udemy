import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>
      <ProfileCard
        img="AlexaImage"
        title="Alexa"
        handle="@alexa99"
        image={AlexaImage}
      />
      <ProfileCard
        CortanaImage
        title="Cortana"
        handle="@cortana32"
        image={CortanaImage}
      />
      <ProfileCard SiriImage title="Siri" handle="@siri01" image={SiriImage} />
    </div>
  );
}

export default App;
