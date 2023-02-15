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
  },
  {
    "name" : "Rabi M.",
    "designation" : "Sales Boy",
    "pic" : "./pictures/pic4.jpg",
    "testimonial" : "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
  },
  {
    "name" : "Jit R.",
    "designation" : "Sales Boy",
    "pic" : "./pictures/pic5.png",
    "testimonial" : "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
  },
  {
    "name" : "Olivia",
    "designation" : "* Model ",
    "pic" : "./pictures/pic6.jpg",

    "testimonial" : "I had such great fun modeling. Trying on the wedding dresses was just superb! It was a dream assignment! I am not the 'standard' shape for modelling as I am curvy and never imagined I could do something like this but in fact my shape was just what the",
  },
  {
    "name" : "Amelia. ",
      "designation" : "* Coder ",
      "pic" : "./pictures/pic7.jpg",
      "testimonial" : "When I was thinking about writing this blog post, my first thought was that I’m not the right person to write about being a woman in tech. I’ve never understood gender roles so I was afraid that my point of view would be somehow wrong."
  }
]

// DRY = Don't Repeat Yourself
function thedots (idx) {
  let dots = document.querySelector(".dots");
  dots.innerHTML = '';

  for (const [index, item] of users.entries()) {
    let btn = document.createElement('button');
    btn.className = "dot";
    if (index === idx) {
      btn.classList.add('dot--active');
    }
    dots.append(btn);
  }
}

function main () {
  let ta = document.querySelector('.testimonial-author')
  let tj = document.querySelector('.testimonial-job')
  let tt = document.querySelector('.testimonial-text')

  let idx = 0;

  let p = document.getElementById("dp")
  p.src = users[idx]["pic"];
  ta.textContent = users[idx]["name"];
  tj.textContent = users[idx]["designation"];
  tt.textContent = users[idx]["testimonial"];

  thedots(idx);


  document.querySelector(".btn--left").addEventListener('click', () => {
    idx = idx-1;
    if (idx === -1) {
      idx = users.length-1;
    }
    p.src = users[idx]["pic"];
    ta.textContent = users[idx]["name"];
    tj.textContent = users[idx]["designation"];
    tt.textContent = users[idx]["testimonial"];
    thedots(idx);
  });

  document
    .querySelector(".btn--right")
    .addEventListener('click', () => {
      idx = idx+1;
      if (idx === users.length) {
        idx = 0;
      }
      p.src = users[idx]["pic"];
      ta.textContent = users[idx]["name"];
      tj.textContent = users[idx]["designation"];
      tt.textContent = users[idx]["testimonial"];
      thedots(idx);
    });
}

main();

