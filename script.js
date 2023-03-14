const message =
  "Merci d'avoir contacté le Royaume de Colchide. Nous vous répondrons ultérieurement.";

document
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
