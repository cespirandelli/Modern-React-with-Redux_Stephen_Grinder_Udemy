import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "12unjd08",
      label: "Can I use React on a project?",
      content:
        "You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.",
    },
    {
      id: "ql99jf3",
      label: "Can I use JS on a project?",
      content:
        "You can use JS on any project you want.You can use JS on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.",
    },
    {
      id: "1kimi9d3",
      label: "Can I use CSS on a project?",
      content:
        "You can use CSS on any project you want.You can use CSS on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.",
    },
  ];
  return <Accordion items={items} />;
}

export default App;
