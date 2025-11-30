const addButton = document.querySelector('.add-button');
const moviesGrid = document.querySelector('.movies-grid');

let movies = [];
let editingId = null;

// Load movies from local storage on page load
function loadMovies() {
    const savedMovies = localStorage.getItem('movies');
    if (savedMovies) {
        movies = JSON.parse(savedMovies);
        displayMovies();
    }
}

// Save movies to local storage
function saveMovies() {
    localStorage.setItem('movies', JSON.stringify(movies));
}

addButton.addEventListener('click', (e) => {
    if (!addButton.classList.contains('form-active') && (e.target === addButton || e.target.classList.contains('plus-box') || e.target === addButton.querySelector('p'))) {
        showForm();
    }
});

function showForm(movie = null, cardElement = null) {
    // Close any existing forms first
    closeForm();
    
    const container = cardElement || addButton;
    const isEdit = movie !== null;
    
    if (isEdit) {
        editingId = movie.id;
        cardElement.classList.add('form-active');
    } else {
        container.classList.add('form-active');
    }
    
    const formHTML = `
        <div class="movie-form">
            <h2>${isEdit ? 'Edit' : 'Add'} Movie/Series</h2>
            <input type="text" id="title" placeholder="Title" value="${movie?.title || ''}" required>
            <input type="text" id="cover" placeholder="Image URL" value="${movie?.cover || ''}" required>
            <select id="genre" required>
                <option value="">Select Genre</option>
                ${['Action', 'Comedy', 'Drama', 'Sci-Fi', 'Horror', 'Fantasy', 'Romance', 'Crime', 'Western', 'Musical', 'Animation', 'Documentary'].map(g => 
                    `<option value="${g}" ${movie?.genre === g ? 'selected' : ''}>${g}</option>`
                ).join('')}
            </select>
            <div class="rating-input">
                <label>Rating:</label>
                <select id="rating" required>
                    <option value="">Select Rating</option>
                    ${[1,2,3,4,5].map(r => `<option value="${r}" ${movie?.rating === r ? 'selected' : ''}>${r}</option>`).join('')}
                </select>
            </div>
            <div class="form-buttons">
                <button class="save-btn">${isEdit ? 'Save' : 'Add'}</button>
                <button class="cancel-btn">Cancel</button>
            </div>
        </div>
    `;
    
    container.insertAdjacentHTML('beforeend', formHTML);
    
    document.querySelector('.save-btn').addEventListener('click', () => saveMovie(isEdit));
    document.querySelector('.cancel-btn').addEventListener('click', closeForm);
}

function saveMovie(isEdit) {
    const title = document.getElementById('title').value;
    const cover = document.getElementById('cover').value;
    const genre = document.getElementById('genre').value;
    const rating = document.getElementById('rating').value;

    if (!title || !cover || !genre || !rating) {
        alert('Please fill all fields');
        return;
    }

    if (isEdit) {
        const index = movies.findIndex(m => m.id === editingId);
        movies[index] = { id: editingId, title, cover, genre, rating: parseInt(rating) };
    } else {
        movies.push({ id: Date.now(), title, cover, genre, rating: parseInt(rating) });
    }

    saveMovies();
    displayMovies();
    closeForm();
}

function closeForm() {
    // Remove all forms
    document.querySelectorAll('.movie-form').forEach(form => form.remove());
    
    // Remove form-active class from add button
    addButton.classList.remove('form-active');
    
    // Remove form-active class from all movie cards
    document.querySelectorAll('.movie-card.form-active').forEach(card => {
        card.classList.remove('form-active');
    });
    
    // Reset editing ID
    editingId = null;
}

function displayMovies() {
    document.querySelectorAll('.movie-card').forEach(card => card.remove());

    const moviesHTML = movies.map(movie => `
        <div class="movie-card">
            <img src="${movie.cover}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p class="genre">${movie.genre}</p>
                <p class="rating">${'★'.repeat(movie.rating)}${'☆'.repeat(5 - movie.rating)}</p>
            </div>
            <div class="card-buttons">
                <button class="edit-btn" data-id="${movie.id}">Edit</button>
                <button class="delete-btn" data-id="${movie.id}">Delete</button>
            </div>
        </div>
    `).join('');

    moviesGrid.insertAdjacentHTML('beforeend', moviesHTML);
    
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            const movie = movies.find(m => m.id === id);
            showForm(movie, this.closest('.movie-card'));
        });
    });
    
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            movies = movies.filter(m => m.id !== parseInt(this.dataset.id));
            saveMovies();
            displayMovies();
        });
    });
}

loadMovies();