import { useState } from "react";
import {
  InputButtonStyles,
  InputStyles,
} from "../components/styleComponents/buttons";

export default function LocationForm(props) {
  const [location, setLocation] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.addLocation(location);
    setLocation("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputStyles
        type="text"
        value={location}
        placeholder="add new location"
        onChange={(e) => setLocation(e.target.value)}
      />
      <InputButtonStyles type="submit" value="Add">
        Add
      </InputButtonStyles>
    </form>
  );
}
