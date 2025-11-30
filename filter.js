const sortSelect = document.getElementById('sort-select');

sortSelect.addEventListener('change', function() {
    const sortBy = this.value;
    sortMovies(sortBy);
});

function sortMovies(sortBy) {
    if (sortBy === 'rating') {
        movies.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'alphabetical') {
        movies.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'date') {
        movies.sort((a, b) => b.id - a.id);
    } else if (sortBy === 'genre') {
        movies.sort((a, b) => a.genre.localeCompare(b.genre));
    }
    displayMovies();
}