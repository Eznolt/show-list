// ---------------- Data ----------------
const shows = [
  /* Anime */
  { name: "Attack on Titan", category: "Anime", subGenre: "Action", description: "Humans fight Titans in a post-apocalyptic world.", rating: 10, status: "all" },
  { name: "Demon Slayer", category: "Anime", subGenre: "Action", description: "A boy fights demons to save his sister.", rating: 9, status: "all" },
  { name: "Hells Paradise", category: "Anime", subGenre: "Action", description: "A deadly journey to find the elixir of immortality.", rating: 8, status: "all" },
  { name: "Spy x Family", category: "Anime", subGenre: "Comedy", description: "A spy must build a fake family to maintain peace.", rating: 9, status: "all" },
  { name: "Gachiakuta", category: "Anime", subGenre: "Adventure", description: "Mystery adventure anime.", rating: 7, status: "all" },
  { name: "My Dress Up Darling", category: "Anime", subGenre: "Romance", description: "Romance and cosplay.", rating: 8, status: "all" },
  { name: "Horimiya", category: "Anime", subGenre: "Romance", description: "Slice-of-life romance.", rating: 8, status: "all" },
  { name: "Shangri La Frontier", category: "Anime", subGenre: "Adventure", description: "Gaming meets adventure.", rating: 8, status: "all" },
  { name: "Chainsaw Man", category: "Anime", subGenre: "Horror", description: "Action horror with dark humor.", rating: 10, status: "all" },
  { name: "Dan Dan Dan", category: "Anime", subGenre: "Action", description: "Exciting new anime series.", rating: 7, status: "all" },
  { name: "Lord of the Mysteries", category: "Anime", subGenre: "Mystery", description: "Mystery and supernatural.", rating: 9, status: "all" },
  { name: "Wind Breaker", category: "Anime", subGenre: "Sports", description: "Skateboarding / sports anime.", rating: 8, status: "all" },
  { name: "Alya Sometimes Hiders her feelings in Russian", category: "Anime", subGenre: "Romance", description: "Romantic comedy.", rating: 7, status: "all" },
  { name: "86 eighty six", category: "Anime", subGenre: "Action", description: "War drama with mechs.", rating: 9, status: "all" },
  { name: "My love story with Yamada run at lvl 999", category: "Anime", subGenre: "Romance", description: "Romantic comedy adventure.", rating: 8, status: "all" },
  { name: "Cyberpunk", category: "Anime", subGenre: "Action", description: "Futuristic action.", rating: 8, status: "all" },
  { name: "Sakamoto Days", category: "Anime", subGenre: "Action/Comedy", description: "Action-comedy with hitman antics.", rating: 8, status: "all" },
  { name: "Blue Box", category: "Anime", subGenre: "Romance", description: "Romance and sports.", rating: 8, status: "all" },
  { name: "Mashle", category: "Anime", subGenre: "Comedy", description: "Magic school parody.", rating: 7, status: "all" },

  /* Shows */
  { name: "Severance", category: "Shows", subGenre: "Thriller", description: "Corporate thriller about work-life separation.", rating: 10, status: "all" },
  { name: "From", category: "Shows", subGenre: "Horror", description: "Mysterious town trapping visitors.", rating: 9, status: "all" },
  { name: "Alice In Borderland", category: "Shows", subGenre: "Action/Thriller", description: "Survival games in a parallel world.", rating: 9, status: "all" },
  { name: "Narcos", category: "Shows", subGenre: "Crime", description: "Drug cartel drama based on real events.", rating: 10, status: "all" },
  { name: "Dark", category: "Shows", subGenre: "Sci-Fi/Thriller", description: "Time travel mystery thriller.", rating: 10, status: "all" },
  { name: "South Park", category: "Shows", subGenre: "Comedy", description: "Adult animated comedy.", rating: 9, status: "all" },
  { name: "Regular Show", category: "Shows", subGenre: "Comedy", description: "Animated comedy with surreal humor.", rating: 8, status: "all" },
  { name: "Bobs Burgers", category: "Shows", subGenre: "Comedy", description: "Family-run burger restaurant comedy.", rating: 8, status: "all" },
  { name: "Punisher", category: "Shows", subGenre: "Action", description: "Marvel vigilante action.", rating: 9, status: "all" },
  { name: "Abbot Elementary", category: "Shows", subGenre: "Comedy", description: "Comedy about a school staff.", rating: 8, status: "all" },

  /* Movies */
  { name: "Only the Brave", category: "Movies", subGenre: "Drama", description: "True story of elite firefighters.", rating: 9, status: "all" },
  { name: "Lone Survivor", category: "Movies", subGenre: "War/Action", description: "Military survival drama.", rating: 9, status: "all" },
  { name: "As Above So Below", category: "Movies", subGenre: "Horror", description: "Horror adventure in catacombs.", rating: 7, status: "all" },
  { name: "The Wild Robot", category: "Movies", subGenre: "Animation", description: "Animated story about a robot on an island.", rating: 8, status: "all" },
  { name: "Four Brothers", category: "Movies", subGenre: "Action/Drama", description: "Action drama about siblings avenging a death.", rating: 8, status: "all" },
  { name: "The Gray Man", category: "Movies", subGenre: "Action/Thriller", description: "Action thriller with assassins.", rating: 8, status: "all" },
  { name: "Hacksaw Ridge", category: "Movies", subGenre: "War/Drama", description: "True WWII story of heroism.", rating: 10, status: "all" },
  { name: "CloverField", category: "Movies", subGenre: "Action/Monster", description: "Monster thriller.", rating: 8, status: "all" },
  { name: "REC", category: "Movies", subGenre: "Horror", description: "Spanish horror about a zombie outbreak.", rating: 8, status: "all" }
];

// ---------------- DOM References ----------------
const allShowsEl = document.getElementById("all-shows");
const watchingEl = document.getElementById("watching");
const finishedEl = document.getElementById("finished");

// ---------------- Populate filters ----------------
function populateFilters() {
  const categorySelect = document.getElementById("categoryFilter");
  const subGenreSelect = document.getElementById("subGenreFilter");

  // Categories
  const categories = [...new Set(shows.map(s => s.category))].sort();
  categorySelect.innerHTML = '<option value="All">All</option>';
  categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categorySelect.appendChild(option);
  });

  // Sub-genres
  const subGenres = [...new Set(shows.map(s => s.subGenre))].sort();
  subGenreSelect.innerHTML = '<option value="All">All</option>';
  subGenres.forEach(genre => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    subGenreSelect.appendChild(option);
  });
}

// ---------------- Render ----------------
function render() {
  allShowsEl.innerHTML = "";
  watchingEl.innerHTML = "";
  finishedEl.innerHTML = "";

  const selectedCategory = document.getElementById("categoryFilter").value;
  const selectedSubGenre = document.getElementById("subGenreFilter").value;

  const genreMap = {};

  shows.forEach(show => {
    if (selectedCategory !== "All" && show.category !== selectedCategory) return;
    if (selectedSubGenre !== "All" && show.subGenre !== selectedSubGenre) return;

    const li = document.createElement("li");
    li.innerHTML = `
      <span>${show.name}</span>
      <div class="actions">
        <button onclick="setStatus('${show.name}', 'watching')">Watching</button>
        <button onclick="setStatus('${show.name}', 'finished')">Finished</button>
        <button class="info-btn" onclick="openModal(
          '${show.name}',
          '${show.description}',
          ${show.rating}
        )">ⓘ</button>
      </div>
    `;

    if (show.status === "watching") watchingEl.appendChild(li);
    else if (show.status === "finished") finishedEl.appendChild(li);
    else {
      if (!genreMap[show.subGenre]) {
        const section = document.createElement("div");
        section.className = "genre-section";
        section.innerHTML = `<h3>${show.subGenre}</h3>`;
        genreMap[show.subGenre] = section;
        allShowsEl.appendChild(section);
      }
      genreMap[show.subGenre].appendChild(li);
    }
  });
}

// ---------------- Status ----------------
function setStatus(name, status) {
  const show = shows.find(s => s.name === name);
  show.status = status;
  render();
}

// ---------------- Modal ----------------
function openModal(title, description, rating) {
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-description").textContent = description;
  document.getElementById("modal-rating").textContent = rating;
  document.getElementById("info-modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("info-modal").classList.add("hidden");
}

// ---------------- Initialize ----------------
populateFilters();
render();
