let currentPage = 1;
const totalPages = 3; // Update based on how many PNGs you have

function updateComic() {
  document.getElementById('comicImage').src = `comics/page${currentPage}.png`;
  document.getElementById('pageNumber').innerText = `Page ${currentPage}`;
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    updateComic();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    updateComic();
  }
}
