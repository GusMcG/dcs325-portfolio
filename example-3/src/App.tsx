import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleColorChange = (color: string) => {
    setBackgroundColor(color);
  };

  return (
    <div style={{ backgroundColor, color: "black", minHeight: "100vh" }}>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>Switch colors here!</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Color Options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => handleColorChange("#696a6e")}>
              Apple Dim Gray
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleColorChange("#ffeacf")}>
              Blanched Almond
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleColorChange("#f3f4ee")}>
              Apple Isabelline
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleColorChange("#96badc")}>
              Apple Sky Blue
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <h1>Background Color Switcher</h1>
      <h2>This webpage is an example of ShadCN/UI components</h2>
    </div>
  );
}

export default App;
