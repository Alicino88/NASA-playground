import "./App.css";
import { IoMdMoon as Moon, IoMdSunny as Sun } from "react-icons/io";

export default function Switch() {
  return (
    <button className="Switch">
      <Sun className="icon" />
      <Moon className="icon" />
    </button>
  );
}
