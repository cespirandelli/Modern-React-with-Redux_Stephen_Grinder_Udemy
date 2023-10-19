import {
  GoBell,
  GoCopilot,
  GoCreditCard,
  GoDatabase,
  GoEye,
} from "react-icons/go";
import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button secondary outline rounded>
          <GoBell />
          Click me!!
        </Button>
      </div>

      <div>
        <Button danger outline>
          <GoCopilot />
          Buy now
        </Button>
      </div>

      <div>
        <Button warning>
          <GoCreditCard />
          See deal
        </Button>
      </div>

      <div>
        <Button secondary outline>
          <GoDatabase />
          Hide Ads
        </Button>
      </div>

      <div>
        <Button primary rounded>
          <GoEye />
          Something
        </Button>
      </div>
    </div>
  );
}

export default App;
