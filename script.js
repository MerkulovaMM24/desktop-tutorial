const url 
async function fetchMessages() {
    const response = await fetch(url);
    const json = await response.json();
  
    const element = document.querySelector(".messages");
    element.innerHTML = "";
    for (const item of json) {
      const message = item.message;
      const name = item.name;
  
      element.innerHTML += "<p>" + name + ": " + message + "</p>";
    }
  }                                                                     