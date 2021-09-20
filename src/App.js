import { useEffect, useState } from "react";
import { Article, TextInput, Counter } from "./components";

function App() {
  const [id, setId] = useState("yu-nakagawa");
  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);
  return (
    <div>
      <Article title="hoge" content="fuga" />
      <Article title="hogeee" content="fugaa" />
      <TextInput />
      <Counter />
    </div>
  );
}

export default App;
