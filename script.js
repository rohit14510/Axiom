
   
   document.addEventListener('DOMContentLoaded', function () {
    new Splide('#client-slider', {
      type: 'loop',
      perPage: 5,
      autoplay: true,
      interval: 1000,
      pauseOnHover: true,
      arrows: false,
      pagination: false,
      breakpoints: {
        991: {
          perPage: 2,
        },
      },
    }).mount();
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    new Splide('#desktop-slider', {
      type       : 'loop',
      perPage    : 1,
      perMove    : 1,
      autoplay   : true,
      interval   : 2000,
      pauseOnHover: true,
      arrows     : true,
      pagination : true,
      breakpoints: {
        1024: {
          perPage: 3,
        },
        768: {
          perPage: 2,
        },
        480: {
          perPage: 1,
        },
      },
    }).mount();
  });




//  new Splide('#splide', {
//     type   : 'loop',
//     perPage: 1,
//     autoplay: true,
//     interval: 3000,
//     pauseOnHover: true,
//     arrows: false,       
//     pagination: false,   
//   }).mount();

// counter
  const counters = document.querySelectorAll('.counter');
  let counterStarted = false;

  function runCounter() {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const speed = 200; // lower is faster

      const updateCount = () => {
        const count = +counter.innerText;
        const increment = Math.ceil(target / speed);

        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = '+' + target;
        }
      };

      updateCount();
    });
  }

  // Trigger when section is in viewport
  window.addEventListener('scroll', () => {
    const section = document.getElementById('counter-section');
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight && !counterStarted) {
      runCounter();
      counterStarted = true;
    }
  });
  
  //business
  const contentData = [
  {
    title: "Furnishing of Indian Railway Coaches",
    video: "assets/FurnishingCoaches.mp4",
    desc: `We at ACME thrive to transform ordinary train journeys into extraordinary experiences.
    We strive to create comfortable, stylish, and efficient interiors for train coaches that
    cater to the diverse needs of passengers while upholding the highest standards of safety
    and durability. We believe that the journey is just as important as the destination.`
  },
  {
    title: "Refurbishment of Indian Railway Coaches",
    video: "assets/RefurbishmentCoaches.mp4",
    desc: `We specialize in upgrading and modernizing existing railway coaches with cutting-edge designs,
    improved comfort, and enhanced safety features. Our refurbishment services aim to extend coach life while
    meeting modern passenger expectations.`
  },
  {
    title: "Technology in Rolling Stock",
    video: "assets/Training-Simulator.jpg", // This is an image
    desc: `Leveraging advanced technologies in rolling stock, we provide smart monitoring systems, AI-driven safety
    tools, and IoT-based innovations to revolutionize how railway assets operate.`
  },
  {
    title: "Component Manufacturing",
    video: "assets/ComponentManufacturing.mp4",
    desc: `From metal parts to precision-fit components, we manufacture a wide range of railway products that
    adhere to stringent industry standards, ensuring quality and durability in every delivery.`
  }
];

const listItems = document.querySelectorAll("#businessList li");
const videoContainer = document.getElementById("videoContainer");
const titleEl = document.getElementById("businessTitle");
const descEl = document.getElementById("businessDesc");

listItems.forEach(item => {
  item.addEventListener("click", () => {
    // Remove active class
    listItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    // Get selected data
    const index = item.getAttribute("data-index");
    const data = contentData[index];

    // Check file type
    const isVideo = data.video.endsWith(".mp4");

    // Update videoContainer
    videoContainer.innerHTML = isVideo
      ? `
        <video muted autoplay loop width="100%" height="100%">
          <source src="${data.video}" type="video/mp4">
        </video>
      `
      : `
        <img src="${data.video}" alt="${data.title}" width="100%" height="100%" style="object-fit: cover;" />
      `;

    // Update title and description
    titleEl.textContent = data.title;
    descEl.textContent = data.desc;
  });
});



 