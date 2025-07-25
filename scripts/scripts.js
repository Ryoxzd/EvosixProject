const endDate = new Date("2025-08-20T00:00:00").getTime(); 

const countdown = () => {
    const now = new Date().getTime();
    const gap = endDate - now;

    if (gap <= 0) {
        document.getElementById("countdown").innerHTML = "<h3>Event Started!</h3>";
        return;
    }

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    document.getElementById("days").innerText = d.toString().padStart(2, '0');
    document.getElementById("hours").innerText = h.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = m.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = s.toString().padStart(2, '0');
};



const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const navLink = document.querySelector(`.nav-links a[href="#${id}"]`);

      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove("active"));
        if (navLink) navLink.classList.add("active");
      }
    });
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});

setInterval(countdown, 1000);
countdown(); 
