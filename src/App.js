import React, { useState, useEffect } from "react";
import axios from "axios";

const request = {
  endPoint:
    "https://3ic8ifp6ye.execute-api.ap-southeast-2.amazonaws.com/prod/userData",
  header: {
    contentType: "application/json",
    apiKey: "e62d284703c74dddb9c85a66c9fba223",
  },
};

function App() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    axios
      .get(request.endPoint, {
        headers: {
          "x-api-key": "e62d284703c74dddb9c85a66c9fba223",
        },
      })
      .then((res) => {
        setUrl(res.data.url);
      });
  }, []);

  function updateUrl(URL) {
    const json = JSON.stringify({
      url: URL,
    });

    axios.post(request.endPoint, json, {
      headers: {
        "Content-Type": request.header.contentType,
        "x-api-key": request.header.apiKey,
      },
    });
  }

  return (
    <div className="App">
      <input value={url} onChange={(e) => setUrl(e.target.value)} />
      <button onClick={() => updateUrl(url)}>save URL</button>
    </div>
  );
}

export default App;
