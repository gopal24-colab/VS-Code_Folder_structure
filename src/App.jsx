import "./App.css";
import { Folder } from "./components";

import FolderData from "./data/FolderData";

function App() {
  return (
    <>
      <Folder explorer={FolderData} />
    </>
  );
}

export default App;
