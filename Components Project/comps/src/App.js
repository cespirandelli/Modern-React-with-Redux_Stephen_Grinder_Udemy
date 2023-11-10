import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "12unjd08",
      label: "Can I use React on a project?",
      content:
        "Content from section 1; Content from section 1; Content from section 1",
    },
    {
      id: "ql99jf3",
      label: "Can I use JS on a project?",
      content:
        "Content from section 2; Content from section 2; Content from section 2",
    },
    {
      id: "1kimi9d3",
      label: "Can I use CSS on a project?",
      content:
        "Content from section 3; Content from section 3; Content from section 3",
    },
  ];
  return <Accordion items={items} />;
}

export default App;
