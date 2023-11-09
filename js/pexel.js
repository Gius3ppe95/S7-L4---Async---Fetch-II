// Documentazione API Pexels: https://www.pexels.com/it-it/api/documentation/
document.addEventListener("DOMContentLoaded", function () {
  const mainSection = document.getElementById("main-section");
  const loadImagesButton = mainSection.querySelector("#loadImages");
  const searchInput = mainSection.querySelector("#search");

  loadImagesButton.addEventListener("click", () => {
    const query = searchInput.value;

    // Utilizza URLSearchParams per gestire i parametri della query
    const params = new URLSearchParams();
    params.set("query", query);

    const url = `https://api.pexels.com/v1/search?${params.toString()}`;

    console.log("URL di ricerca:", url);

    fetch(url, {
      method: "GET",
      headers: {
        Authorization: "59x3vQtqthyuwR9wNWh2d3B6GgbJb74wJGySEa2rtwGgOcW34a3cugAt",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Manipola i dati e aggiorna la pagina principale con le immagini
        console.log(data);
      })
      .catch((error) => console.error("Errore nella richiesta:", error));
  });
});
