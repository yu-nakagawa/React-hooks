import { useState } from "react";

const TextInput = () => {
  const [name, setName] = useState("");
  const handleName = (event) => {
    setName(event.target.value);
  };
  return (
    <>
      <input value={name} onChange={handleName} />
      <p>copy:{name}</p>
    </>
  );
};

export default TextInput;
