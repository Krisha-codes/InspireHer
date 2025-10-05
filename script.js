const women = [
  {
    name: "Marie Curie",
    field: "Physics & Chemistry",
    bio: "Pioneer in radioactivity and the first person to win two Nobel Prizes.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Marie_Curie_c1920.jpg"
  },
  {
    name: "Katherine Johnson",
    field: "Mathematics / NASA",
    bio: "Her calculations helped send Apollo astronauts to the Moon safely.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Katherine_Johnson_1983.jpg"
  },
  {
    name: "Ada Lovelace",
    field: "Computer Science",
    bio: "Wrote the first algorithm intended for a computer — the first programmer.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg"
  },
  {
    name: "Kalpana Chawla",
    field: "Astronautics",
    bio: "The first woman of Indian origin in space; a symbol of courage and dreams.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Kalpana_Chawla%2C_NASA_photo_portrait_in_orange_suit.jpg"
  },
  {
    name: "Fei-Fei Li",
    field: "Artificial Intelligence",
    bio: "Leading AI researcher, advocate for human-centered AI and diversity in tech.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Fei-Fei_Li_2018.jpg"
  }
];

function newInspiration() {
  const random = Math.floor(Math.random() * women.length);
  const woman = women[random];

  document.getElementById("name").innerText = woman.name;
  document.getElementById("field").innerText = woman.field;
  document.getElementById("bio").innerText = woman.bio;
  document.getElementById("photo").src = woman.photo;
}

// Show one profile when the page loads
newInspiration();
