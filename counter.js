// count
 const counts = document.querySelectorAll('.count');
let countStarted = false;

// Function to animate the counters
function runcount() {
  counts.forEach(count => {
    const target = +count.getAttribute('data-target');
    const speed = 200; // lower is faster

    const updateCount = () => {
      let currentCount = +count.innerText;
      const increment = Math.ceil(target / speed);

      if (currentCount < target) {
        count.innerText = currentCount + increment;
        setTimeout(updateCount, 10); // Repeat the increment every 10 ms
      } else {
        count.innerText ='+' + target;
      }
    };

    updateCount();
  });
}

// Function to check if the section is in view
function isInView() {
  const section = document.getElementById('counter-section');
  const rect = section.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Trigger the counting animation when the section is in view
window.addEventListener('scroll', () => {
  if (isInView() && !countStarted) {
    countStarted = true; // Prevent running the count again
    runcount();
  }
});
