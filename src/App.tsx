import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [data, setData] = useState(0);

  useEffect(() => {
    setInterval(() => {
      fetch("https://currentmillis.com/time/minutes-since-unix-epoch.php", {
        cache: "no-store",
      })
        .then((response) => response.json())
        .then((data) => setData(data));
    }, 1000);
  }, []);

  const time = new Date(data * 60 * 1000);

  const get = (time: Date) => {
    return `${time.getFullYear()}年${
      time.getMonth() + 1
    }月${time.getDate()}日${time.getHours()}時${time.getMinutes()}分`;
  };

  return (
    <>
      <p>{get(time)}</p>
    </>
  );
}

export default App;
