var deferredPrompt;
if (!window.Promise) {
  window.Promise = Promise;
}
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(function() {
    console.log("Service worker registered");
  });
}

window.addEventListener("beforeinstallprompt", function(event) {
  console.log("beforeinstallpropmt fired");

  event.preventDefault();
  deferredPrompt = event;
  return false;
});

fetch("https://httpbin.org/ip")
  .then(function(response) {
    console.log(response);
    response.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  });

fetch("https://httpbin.org/post", {
  method: "POST",
  headers: {
    "Content-Type": "appliction/json",
    Accept: "application/json"
  },
  mode: "cors",
  body: JSON.stringify({ message: "Does this works" })
})
  .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  });
