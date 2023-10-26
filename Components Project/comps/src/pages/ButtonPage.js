import {
  GoBell,
  GoCopilot,
  GoCreditCard,
  GoDatabase,
  GoEye,
} from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div>
      <div>
        <Button
          secondary
          outline
          rounded
          onClick={handleClick}
          className="mb-5"
        >
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

export default ButtonPage;
