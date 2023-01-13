let users = [
  {
    "name" : "Jasmin P.",
    "designation": "Assistant Teacher",
    "pic": "./pictures/pic1.jpg",
    "testimonial": "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia."
  },
  {
    "name" : "Neha S.",
    "designation": "Office Manager",
    "pic": "./pictures/pic2.jpg",
    "testimonial": "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia."
  },
  {
    "name" : "Sony J.",
    "designation": "Marketing Head",
    "pic": "./pictures/pic3.jpg",
    "testimonial": "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia."
  }
]

let idx = 0;
let p = document.getElementById("dp")
p.src = users[idx]["pic"];

document
  .querySelector(".btn--right")
  .addEventListener('click', () => {
    console.log(users.length);
    console.log(idx);

    idx = idx+1;
    if (idx === users.length) {
      idx = 0;
    }
    p.src = users[idx]["pic"];
    document.querySelector('.testimonial-author').textContent = users[idx]["name"];
    document.querySelector('.testimonial-job').textContent = users[idx]["designation"];
  })


