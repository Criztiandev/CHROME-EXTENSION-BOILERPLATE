chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.command === "test") {
    console.log("Received test command");

    try {
      const url = "https://rickandmortyapi.com/api/character/53";
      fetch(url)
        .then((res) => {
          if (res.status !== 200) {
            throw new Error(`Error: ${error.status} ${error.message}`);
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          response({ payload: data, message: "Fetched Successfully" });
        })
        .catch((error) => {
          throw new Error(`Error: ${error.status} ${error.message}`);
        });
    } catch (e) {
      response({ payload: null, message: e.message });
    }
  }

  return true;
});
