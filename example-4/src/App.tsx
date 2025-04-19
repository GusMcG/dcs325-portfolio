import { useState } from "react";
import NavBar from "./NavBar";
import AuthDemo from "./components/AuthDemo";
import FirestoreDemo from "./components/FirestoreDemo";
import StorageDemo from "./components/StorageDemo";
import BootstrapDemo from "./components/BootstrapDemo";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

interface DisplayState {
  showAuth: boolean;
  showFirestore: boolean;
  showStorage: boolean;
  showBootstrap: boolean;
}

function App() {
  const [showElements, setShowElements] = useState<DisplayState>({
    showAuth: false,
    showFirestore: false,
    showStorage: false,
    showBootstrap: false,
  });

  const toggleAuth = () => {
    setShowElements((prevShowElements) => ({
      ...prevShowElements,
      showAuth: !prevShowElements.showAuth,
    }));
  };

  const toggleFirestore = () => {
    setShowElements((prevShowElements) => ({
      ...prevShowElements,
      showFirestore: !prevShowElements.showFirestore,
    }));
  };

  const toggleStorage = () => {
    setShowElements((prevShowElements) => ({
      ...prevShowElements,
      showStorage: !prevShowElements.showStorage,
    }));
  };

  const toggleBootstrap = () => {
    setShowElements((prevShowElements) => ({
      ...prevShowElements,
      showBootstrap: !prevShowElements.showBootstrap,
    }));
  };

  return (
    <div className="container py-4">
      <NavBar
        toggleAuth={toggleAuth}
        toggleFirestore={toggleFirestore}
        toggleStorage={toggleStorage}
        toggleBootstrap={toggleBootstrap}
      />

      <div className="mt-4">
        {showElements.showAuth && <AuthDemo />}
        {showElements.showFirestore && <FirestoreDemo />}
        {showElements.showStorage && <StorageDemo />}
        {showElements.showBootstrap && <BootstrapDemo />}
      </div>
    </div>
  );
}

export default App;
