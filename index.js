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
    "name" : "Disha P.",
    "designation": "Head worker",
    "pic": "./pictures/pic_4.jpg",
    "testimonial": "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia."
  },
  {
    "name" : "Kiara A.",
    "designation": "New worker",
    "pic": "./pictures/pic_5.jpg",
    "testimonial": "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia."
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

