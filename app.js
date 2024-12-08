function myFunction() {
  var x = document.getElementById("myLinks");
  var y = document.getElementById("header");
  if (x.style.display === "flex") {
    x.style.display = "none";
    y.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.19)";
  } else {
    x.style.display = "flex";
    y.style.boxShadow = "none";
  }
}

function copyText(event, element) {
  navigator.clipboard.writeText(element.textContent).then(() => {
    const x = event.clientX;
    const y = event.clientY;

    const message = document.getElementById("copy-message");
    message.style.left = `${x}px`;
    message.style.top = `${y}px`;
    message.style.display = "block";

    setTimeout(() => {
      message.style.display = "none";
    }, 2000);
  }).catch(err => {
    console.error("Failed to copy text: ", err);
  });
}
