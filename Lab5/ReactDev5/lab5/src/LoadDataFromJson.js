import { useState } from "react";

function LoadDataFromJson() {
  const [data, setData] = useState(null);

  function loadData() {
    fetch('/data.json')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => setData({ error: 'Błąd ładowania' }));
  }

  return (
    <div>
      <button onClick={loadData}>Wczytaj dane</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default LoadDataFromJson;
