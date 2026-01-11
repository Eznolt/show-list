// ---------------- Data ----------------
const shows = [
  /* ---------------- Anime ---------------- */
  { name: "Attack on Titan", genre: "Anime", description: "People trying not to get eaten by giant monsters. There’s a lot insane moments and plot twists that you wont see coming.", rating: 10, status: "all" },
  { name: "Demon Slayer", genre: "Anime", description: "Kid goes on a journey to save his sister and fight demons. Was a really good watch for me and animation is top tier", rating: 9, status: "all" },
  { name: "Hells Paradise", genre: "Anime", description: "This one i already told you about. A bunch of criminals go to a deadly island hunting an elixir for immortality… stuff gets intense fast.", rating: 10, status: "all" },
  { name: "Spy x Family", genre: "Anime", description: "A spy makes a fake family… and somehow it actually works out. Pretty funny and heartwarming.", rating: 10, status: "all" },
  { name: "Gachiakuta", genre: "Anime", description: "Weird adventure with a lot of mystery. Has a unique power systemt in it which caught my eye", rating: 8, status: "all" },
  { name: "My Dress Up Darling", genre: "Anime", description: "Cosplay, laughs, and a tiny bit of romance. It’s just a chill, feel-good watch.", rating: 9, status: "all" },
  { name: "Horimiya", genre: "Anime", description: "Two students hiding their real sides meet and things happen. Proabably my favorite romance anime(yes i watch them)", rating: 10, status: "all" },
  { name: "Shangri La Frontier", genre: "Anime", description: "Gaming adventures that are both tense and exciting. One of my favorite new animes out and its kind of like Sword Art Online", rating: 8, status: "all" },
  { name: "Chainsaw Man", genre: "Anime", description: "Crazy action, demons everywhere, and some dark humor. Its pretty graphic not really ut overall a good anime", rating: 9, status: "all" },
  { name: "Dan Dan Dan", genre: "Anime", description: "This has action involving supernatural beings and also romance but the slow kind where they dont even realize it", rating: 8, status: "all" },
  { name: "Lord of the Mysteries", genre: "Anime", description: "This was based off a light novel i read so i was exxcited it got an anime. Probably one of the most unique power systems and insane world building", rating: 9, status: "all" },
  { name: "Wind Breaker", genre: "Anime", description: "Involves a student who moves into a new school full of delinquents and has a lot of fighting", rating: 8, status: "all" },
  { name: "Alya Sometimes Hiders her feelings in Russian", genre: "Anime", description: "Lowkey romance and comedy. another good romance i liked", rating: 8, status: "all" },
  { name: "86 eighty six", genre: "Anime", description: "One of my favorites involving a military group fighting against an alien threat", rating: 9, status: "all" },
  { name: "My love story with Yamada run at lvl 999", genre: "Anime", description: "Another romannce i found entertaining and heartwarming", rating: 8, status: "all" },
  { name: "Cyberpunk", genre: "Anime", description: "Futuristic action and cool fight scenes and some nice worldbuilding. im sure youve heard of the game", rating: 10, status: "all" },
  { name: "Sakamoto Days", genre: "Anime", description: "Currently one of my favorites. A retired assasin trying to live a normal life but gets dragged back into that life", rating: 10, status: "all" },
  { name: "Blue Box", genre: "Anime", description: "Romance + sports. Its a good show with a balance of both the romance and sports ( healed me fr)", rating: 9, status: "all" },
  { name: "Mashle", genre: "Anime", description: "Magic school but goofy and fun. Caught me by surprise by how much i laughed", rating: 8, status: "all" },

  /* ---------------- Shows ---------------- */
  { name: "Severance", genre: "Shows", description: "Office work gets weird when people’s memories are split between work and home", rating: 8, status: "all" },
  { name: "From", genre: "Shows", description: "People stuck in a mysterious town that won’t let them leave. Season 2 kinda dragged but season 3 made up for it", rating: 10, status: "all" },
  { name: "Alice In Borderland", genre: "Shows", description: "Survival games as it kind of reminded me of squid games LOL.", rating: 9, status: "all" },
  { name: "Narcos", genre: "Shows", description: "The story of Pablo Escobar and the Medellin Cartel. Only watch the first two seasons tbh 3rd u dont need too", rating: 10, status: "all" },
  { name: "Dark", genre: "Shows", description: "Time travel mystery that messes with your head in the best way.", rating: 10, status: "all" },
  { name: "South Park", genre: "Shows", description: "Very funny LMAOOO thats all i got", rating: 10, status: "all" },
  { name: "Regular Show", genre: "Shows", description: "MORDECAI AND RIGBY need i say more?", rating: 10, status: "all" },
  { name: "Bobs Burgers", genre: "Shows", description: "Pretty good show if you want to eat or pass time", rating: 9, status: "all" },
  { name: "Punisher", genre: "Shows", description: "Lots of action as its based off Marvels Punisher", rating: 9, status: "all" },
  { name: "Abbot Elementary", genre: "Shows", description: "Comedy about school staff trying to survive and teach", rating: 9, status: "all" },

  /* ---------------- Movies ---------------- */
  { name: "Only the Brave", genre: "Movies", description: "True story about elite firefighters. lowkey sad", rating: 9, status: "all" },
  { name: "Lone Survivor", genre: "Movies", description: "My favorite war movie of all time to be honest", rating: 10, status: "all" },
  { name: "As Above So Below", genre: "Movies", description: "Exploring catacombs gone wrong(dont know why they went there)", rating: 8, status: "all" },
  { name: "The Wild Robot", genre: "Movies", description: "Have tissues nearby", rating: 10, status: "all" },
  { name: "Four Brothers", genre: "Movies", description: "Siblings coming together after a tragedy very good movie", rating: 9, status: "all" },
  { name: "The Gray Man", genre: "Movies", description: "Lots of action and fighting LOL ", rating: 8, status: "all" },
  { name: "Hacksaw Ridge", genre: "Movies", description: "Another war movie i loved watching", rating: 10, status: "all" },
  { name: "CloverField", genre: "Movies", description: "A good found footage movie where a monster appears on earth OOOOOOOO", rating: 9, status: "all" },
  { name: "REC", genre: "Movies", description: "Spanish horror about a zombie outbreak.", rating: 8, status: "all" }
];

// ---------------- DOM References ----------------
const allShowsEl = document.getElementById("all-shows");
const watchingEl = document.getElementById("watching");
const finishedEl = document.getElementById("finished");

// ---------------- Populate dropdown dynamically ----------------
function populateFilter() {
  const select = document.getElementById("genreFilter");
  const categories = ["All", "Anime", "Shows", "Movies"];

  categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    select.appendChild(option);
  });
}

// ---------------- Render function ----------------
function render() {
  allShowsEl.innerHTML = "";
  watchingEl.innerHTML = "";
  finishedEl.innerHTML = "";

  const selectedGenre = document.getElementById("genreFilter").value;

  const genreMap = {};

  shows.forEach(show => {
    if (selectedGenre !== "All" && show.genre !== selectedGenre) return;

    const li = document.createElement("li");
    li.innerHTML = `
      <span>${show.name}</span>
      <div class="actions">
        ${show.status !== "watching" ? `<button onclick="setStatus('${show.name}', 'watching')">Watching</button>` : ""}
        ${show.status !== "finished" ? `<button onclick="setStatus('${show.name}', 'finished')">Finished</button>` : ""}
        <button class="info-btn" onclick="openModal(
          '${show.name}',
          '${show.description}',
          ${show.rating}
        )">ⓘ</button>
      </div>
    `;

    if (show.status === "watching") {
      watchingEl.appendChild(li);
    } else if (show.status === "finished") {
      finishedEl.appendChild(li);
    } else {
      if (!genreMap[show.genre]) {
        const section = document.createElement("div");
        section.className = "genre-section";
        section.innerHTML = `<h3>${show.genre}</h3>`;
        genreMap[show.genre] = section;
        allShowsEl.appendChild(section);
      }
      genreMap[show.genre].appendChild(li);
    }
  });
}

// ---------------- Status Functions ----------------
function setStatus(name, status) {
  const show = shows.find(s => s.name === name);
  show.status = status;
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
