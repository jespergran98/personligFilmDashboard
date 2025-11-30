const addButton = document.querySelector('.add-button');
const moviesGrid = document.querySelector('.movies-grid');

let movies = [];

addButton.addEventListener('click', () => {
    showAddMovieForm();
});

function showAddMovieForm() {
    const existingForm = document.querySelector('.movie-form');
    if (existingForm) return;

    const formHTML = `
        <div class="movie-form">
            <h2>Add Movie/Series</h2>
            <input type="text" id="title" placeholder="Title" required>
            <input type="text" id="cover" placeholder="Image URL" required>
            <select id="genre" required>
                <option value="">Select Genre</option>
                <option value="Action">Action</option>
                <option value="Comedy">Comedy</option>
                <option value="Drama">Drama</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Horror">Horror</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Romance">Romance</option>
                <option value="Crime">Crime</option>
                <option value="Western">Western</option>
                <option value="Musical">Musical</option>
                <option value="Animation">Animation</option>
                <option value="Documentary">Documentary</option>
            </select>
            <div class="rating-input">
                <label>Rating:</label>
                <select id="rating" required>
                    <option value="">Select Rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div class="form-buttons">
                <button onclick="addMovie()">Add</button>
                <button onclick="closeForm()">Cancel</button>
            </div>
        </div>
    `;
    
    moviesGrid.insertAdjacentHTML('beforebegin', formHTML);
}

function addMovie() {
    const title = document.getElementById('title').value;
    const cover = document.getElementById('cover').value;
    const genre = document.getElementById('genre').value;
    const rating = document.getElementById('rating').value;

    if (!title || !cover || !genre || !rating) {
        alert('Please fill all fields');
        return;
    }

    const movie = {
        id: Date.now(),
        title: title,
        cover: cover,
        genre: genre,
        rating: parseInt(rating)
    };

    movies.push(movie);
    displayMovies();
    closeForm();
}

function closeForm() {
    const form = document.querySelector('.movie-form');
    if (form) form.remove();
}

function displayMovies() {
    const existingCards = document.querySelectorAll('.movie-card');
    existingCards.forEach(card => card.remove());

    const moviesHTML = movies.map(movie => `
        <div class="movie-card">
            <img src="${movie.cover}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p class="genre">${movie.genre}</p>
                <p class="rating">${'★'.repeat(movie.rating)}${'☆'.repeat(5 - movie.rating)}</p>
            </div>
            <button class="delete-btn" onclick="deleteMovie(${movie.id})">Delete</button>
        </div>
    `).join('');

    moviesGrid.insertAdjacentHTML('beforeend', moviesHTML);
}

function deleteMovie(id) {
    movies = movies.filter(movie => movie.id !== id);
    displayMovies();
}