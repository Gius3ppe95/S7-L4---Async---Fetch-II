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
        const photos = data.photos;
        const photoContainer = document.querySelector(".album .container .row");
        photoContainer.innerHTML = "";

        photos.forEach((photo) => {
          const card = document.createElement("div");
          card.classList.add("col-md-4");
          card.innerHTML = `
            <div class="card mb-4 shadow-sm">
              <img src="${photo.src.medium}" class="bd-placeholder-img card-img-top" width="100%" height="225">
              <div class="card-body">
                <h5 class="card-title">${photo.photographer}</h5>
                <p class="card-text">${photo.url}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small class="text-muted">${photo.id}</small>
                </div>
              </div>
            </div>
          `;

          photoContainer.appendChild(card);
        });
      })
      .catch((error) => console.error("Errore nella richiesta:", error));
  });
});
