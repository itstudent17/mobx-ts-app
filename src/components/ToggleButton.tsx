import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

interface IToggleButtonProps {
  path: string;
  text: string;
}

const ToggleButton: React.FC<IToggleButtonProps> = ({ path, text }) => (
  <div className="container">
    <header className={"center"}>
      <Link to={path}>
        <Button variant="primary" size="lg">
          {text}
        </Button>
      </Link>
    </header>
  </div>
);

export default ToggleButton;
