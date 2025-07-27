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

//Untuk Navbar YA dani chan
const trigger = document.getElementById('dropdown-trigger');
const menu = document.getElementById('dropdown-menu');

trigger.addEventListener('mouseenter', () => {
  const rect = trigger.getBoundingClientRect();

  menu.style.display = 'block';
  menu.style.top = window.scrollY + rect.bottom + 8 + 'px';
  menu.style.left = window.scrollX + rect.left + 'px';
});

trigger.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!menu.matches(':hover')) {
      menu.style.display = 'none';
    }
  }, 100);
});

menu.addEventListener('mouseleave', () => {
    menu.style.display = 'none';
});

menu.addEventListener('mouseenter', () => {
    menu.style.display = 'block';
});

//bagian regis
document.getElementById("openModal").addEventListener("click", function() {
  document.getElementById("registerModal").style.display = "block";
});

document.getElementById("closeModal").addEventListener("click", function() {
  document.getElementById("registerModal").style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == document.getElementById("registerModal")) {
    document.getElementById("registerModal").style.display = "none";
  }
});

document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("registerModal").style.display = "none";
});

document.getElementById("openModal").addEventListener("click", function() {
  document.getElementById("registerModal").style.display = "block";
});

document.getElementById("closeModal").addEventListener("click", function() {
  document.getElementById("registerModal").style.display = "none";
});

document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();
    document.getElementById("registerModal").style.display = "none"; 
    document.getElementById("paymentModal").style.display = "block";
});

function showQRIS() {
  document.getElementById("qrisContainer").style.display = "block";
}

function closePaymentModal() {
  document.getElementById("paymentModal").style.display = "none";
}

window.onclick = function(event) {
  const registerModal = document.getElementById("registerModal");
  const paymentModal = document.getElementById("paymentModal");
  if (event.target === registerModal) {
    registerModal.style.display = "none";
  }
  if (event.target === paymentModal) {
    paymentModal.style.display = "none";
  }
};

function showTicketModal() {
  const teamName = document.getElementById("teamName").value;
  const game = document.getElementById("game").value;
  const whatsapp = document.getElementById("whatsapp").value;

  document.getElementById("ticketTeamName").innerText = teamName;
  document.getElementById("ticketGame").innerText = game;
  document.getElementById("ticketWhatsApp").innerText = whatsapp;
  document.getElementById("ticketDate").innerText = "Tanggal Pertandingan: 25 Agustus 2025"; // Contoh

  document.getElementById("ticketModal").style.display = "block";
}

function closePaymentModal() {
  document.getElementById("paymentModal").style.display = "none";
  document.getElementById("ticketTeamName").innerText = document.getElementById("teamName").value;
  document.getElementById("ticketGame").innerText = document.getElementById("game").value;
  document.getElementById("ticketWhatsApp").innerText = document.getElementById("whatsapp").value;
  document.getElementById("ticketDate").innerText = "Tanggal Pertandingan: 25 Agustus 2025";
  document.getElementById("ticketModal").style.display = "block";
}

function showTeamModal() {
  document.getElementById("teamNameDisplay").innerText = "EVOSIX";
  document.getElementById("opponentTeam").innerText = "Team A";
  document.getElementById("teamGame").innerText = "Mobile Legends";
  document.getElementById("teamModal").style.display = "block";
}

function closeTicketModal() {
  document.getElementById("ticketModal").style.display = "none";
}

function closeTeamModal() {
  document.getElementById("teamModal").style.display = "none";
}

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
