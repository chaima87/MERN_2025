import React from "react";
import Tabs from "./components/Tabs";
import "./App.css";

const tabItems = [
  { label: "Home", content: <div>Welcome to the home tab.</div> },
  { label: "Profile", content: <div>This is your profile.</div> },
  { label: "Settings", content: <div>Adjust your settings here.</div> },
];

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <Tabs items={tabItems} />
    </div>
  );
}

export default App;
