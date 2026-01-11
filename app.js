// ---------------- Data ----------------
let shows = [
  /* Anime */
  { name: "Attack on Titan", category: "Anime", genre: "Action", description: "Humans fight Titans in a post-apocalyptic world.", rating: 10, status: "all" },
  { name: "Demon Slayer", category: "Anime", genre: "Action", description: "A boy fights demons to save his sister.", rating: 9, status: "all" },
  { name: "Hells Paradise", category: "Anime", genre: "Horror", description: "A deadly journey to find the elixir of immortality.", rating: 8, status: "all" },
  { name: "Spy x Family", category: "Anime", genre: "Comedy", description: "A spy must build a fake family to maintain peace.", rating: 9, status: "all" },
  { name: "Gachiakuta", category: "Anime", genre: "Adventure", description: "Mystery adventure anime.", rating: 7, status: "all" },
  { name: "My Dress Up Darling", category: "Anime", genre: "Romance", description: "Romance and cosplay.", rating: 8, status: "all" },
  { name: "Horimiya", category: "Anime", genre: "Romance", description: "Slice-of-life romance.", rating: 8, status: "all" },
  { name: "Shangri La Frontier", category: "Anime", genre: "Adventure", description: "Gaming meets adventure.", rating: 8, status: "all" },
  { name: "Chainsaw Man", category: "Anime", genre: "Horror", description: "Action horror with dark humor.", rating: 10, status: "all" },
  { name: "Dan Dan Dan", category: "Anime", genre: "Action", description: "Exciting new anime series.", rating: 7, status: "all" },
  { name: "Lord of the Mysteries", category: "Anime", genre: "Mystery", description: "Mystery and supernatural.", rating: 9, status: "all" },
  { name: "Wind Breaker", category: "Anime", genre: "Sports", description: "Sports / skating anime.", rating: 8, status: "all" },
  { name: "Alya Sometimes Hiders her feelings in Russian", category: "Anime", genre: "Romance", description: "Romantic comedy.", rating: 7, status: "all" },
  { name: "86 eighty six", category: "Anime", genre: "Action", description: "War drama with mechs.", rating: 9, status: "all" },
  { name: "My love story with Yamada run at lvl 999", category: "Anime", genre: "Romance", description: "Romantic comedy adventure.", rating: 8, status: "all" },
  { name: "Cyberpunk", category: "Anime", genre: "Action", description: "Futuristic action.", rating: 8, status: "all" },
  { name: "Sakamoto Days", category: "Anime", genre: "Action", description: "Action-comedy with hitman antics.", rating: 8, status: "all" },
  { name: "Blue Box", category: "Anime", genre: "Romance", description: "Romance and sports.", rating: 8, status: "all" },
  { name: "Mashle", category: "Anime", genre: "Comedy", description: "Magic school parody.", rating: 7, status: "all" },

  /* Shows */
  { name: "Severance", category: "Shows", genre: "Sci-Fi", description: "Corporate thriller about work-life separation.", rating: 10, status: "all" },
  { name: "From", category: "Shows", genre: "Horror", description: "Mysterious town trapping visitors.", rating: 9, status: "all" },
  { name: "Alice In Borderland", category: "Shows", genre: "Action", description: "Survival games in a parallel world.", rating: 9, status: "all" },
  { name: "Narcos", category: "Shows", genre: "Drama", description: "Drug cartel drama based on real events.", rating: 10, status: "all" },
  { name: "Dark", category: "Shows", genre: "Sci-Fi", description: "Time travel mystery thriller.", rating: 10, status: "all" },
  { name: "South Park", category: "Shows", genre: "Comedy", description: "Adult animated comedy.", rating: 9, status: "all" },
  { name: "Regular Show", category: "Shows", genre: "Comedy", description: "Animated comedy with surreal humor.", rating: 8, status: "all" },
  { name: "Bobs Burgers", category: "Shows", genre: "Comedy", description: "Family-run burger restaurant comedy.", rating: 8, status: "all" },
  { name: "Punisher", category: "Shows", genre: "Action", description: "Marvel vigilante action.", rating: 9, status: "all" },
  { name: "Abbot Elementary", category: "Shows", genre: "Comedy", description: "Comedy about a school staff.", rating: 8, status: "all" },

  /* Movies */
  { name: "Only the Brave", category: "Movies", genre: "Action", description: "True story of elite firefighters.", rating: 9, status: "all" },
  { name: "Lone Survivor", category: "Movies", genre: "Action", description: "Military survival drama.", rating: 9, status: "all" },
  { name: "As Above So Below", category: "Movies", genre: "Horror", description: "Horror adventure in catacombs.", rating: 7, status: "all" },
  { name: "The Wild Robot", category: "Movies", genre: "Sci-Fi", description: "Animated story about a robot on an island.", rating: 8, status: "all" },
  { name: "Four Brothers", category: "Movies", genre: "Action", description: "Action drama about siblings avenging a death.", rating: 8, status: "all" },
  { name: "The Gray Man", category: "Movies", genre: "Action", description: "Action thriller with assassins.", rating: 8, status: "all" },
  { name: "Hacksaw Ridge", category: "Movies", genre: "Drama", description: "True WWII story of heroism.", rating: 10, status: "all" },
  { name: "CloverField", category: "Movies", genre: "Sci-Fi", description: "Monster thriller.", rating: 8, status: "all" },
  { name: "REC", category: "Movies", genre: "Horror", description: "Spanish horror about a zombie outbreak.", rating: 8, status: "all" }
];

// ---------------- LocalStorage ----------------
if (localStorage.getItem("shows")) {
  shows = JSON.parse(localStorage.getItem("shows"));
} else {
  localStorage.setItem("shows", JSON.stringify(shows));
}

// ---------------- DOM References ----------------
const allShowsEl = document.getElementById("all-shows");
const watchingEl = document.getElementById("watching");
const finishedEl = document.getElementById("finished");

// ---------------- Populate dropdown dynamically ----------------
function populateFilter() {
  const select = document.getElementById("genreFilter");
  const genres = [...new Set(shows.map(show => show.genre))].sort();

  const allOption = document.createElement("option");
  allOption.value = "All";
  allOption.textContent = "All";
  select.appendChild(allOption);

  genres.forEach(g => {
    const option = document.createElement("option");
    option.value = g;
    option.textContent = g;
    select.appendChild(option);
  });
}

// ---------------- Render function ----------------
function render() {
  allShowsEl.innerHTML = "";
  watchingEl.innerHTML = "";
  finishedEl.innerHTML = "";

  const selectedGenre = document.getElementById("genreFilter").value;
  const categoryMap = {};

  shows.forEach(show => {
    if (selectedGenre !== "All" && show.genre !== selectedGenre) return;

    const li = document.createElement("li");

    if (show.status === "watching") {
      li.innerHTML = `
        <span>${show.name}</span>
        <div class="actions">
          <button onclick="setStatus('${show.name}', 'finished')">Finished</button>
          <button onclick="setStatus('${show.name}', 'all')">Reset</button>
          <button class="info-btn" onclick="openModal('${show.name}', '${show.description}', ${show.rating})">ⓘ</button>
        </div>
      `;
      watchingEl.appendChild(li);

    } else if (show.status === "finished") {
      li.innerHTML = `
        <span>${show.name}</span>
        <div class="actions">
          <button onclick="setStatus('${show.name}', 'watching')">Watching</button>
          <button onclick="setStatus('${show.name}', 'all')">Reset</button>
          <button class="info-btn" onclick="openModal('${show.name}', '${show.description}', ${show.rating})">ⓘ</button>
        </div>
      `;
      finishedEl.appendChild(li);

    } else {
      // All Shows
      if (!categoryMap[show.category]) {
        const section = document.createElement("div");
        section.className = "genre-section";
        section.innerHTML = `<h3>${show.category}</h3>`;
        categoryMap[show.category] = section;
        allShowsEl.appendChild(section);
      }

      li.innerHTML = `
        <span>${show.name}</span>
        <div class="actions">
          <button onclick="setStatus('${show.name}', 'watching')">Watching</button>
          <button onclick="setStatus('${show.name}', 'finished')">Finished</button>
          <button class="info-btn" onclick="openModal('${show.name}', '${show.description}', ${show.rating})">ⓘ</button>
        </div>
      `;
      categoryMap[show.category].appendChild(li);
    }
  });
}

// ---------------- Status Functions ----------------
function setStatus(name, status) {
  const show = shows.find(s => s.name === name);
  show.status = status;
  localStorage.setItem("shows", JSON.stringify(shows));
  render();
}

// ---------------- Modal Functions ----------------
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
populateFilter();
render();
