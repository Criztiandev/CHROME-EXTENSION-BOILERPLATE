//Send Message
chrome.runtime.sendMessage({ command: "test", payload: {} }, (response) => {
  console.log("hi");

  console.log(response);
});
