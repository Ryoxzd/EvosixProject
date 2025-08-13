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
// Ambil elemen modal dan elemen penting lainnya
const registerModal = document.getElementById("registerModal");
const paymentModal = document.getElementById("paymentModal");
const qrisContainer = document.getElementById("qrisContainer");
const ticketModal = document.getElementById("ticketModal");
const ticketPre = document.getElementById("ticket");

let registrationData = {};

// Event buka modal registrasi
document.getElementById("openModal").addEventListener("click", () => {
  registerModal.style.display = "block";
});

// Event tutup modal registrasi
document.getElementById("closeModal").addEventListener("click", () => {
  registerModal.style.display = "none";
});

// Tutup modal kalau klik di luar konten modal (register dan payment)
window.addEventListener("click", (event) => {
  if (event.target === registerModal) registerModal.style.display = "none";
  if (event.target === paymentModal) paymentModal.style.display = "none";
  if (event.target === ticketModal) ticketModal.style.display = "none";
});

// Submit form registrasi
document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;
  registrationData = {
    teamName: form.teamName.value.trim(),
    leaderName: form.leaderName.value.trim(),
    email: form.email.value.trim(),
    whatsapp: form.whatsapp.value.trim(),
    game: form.game.value,
  };

  registerModal.style.display = "none";
  paymentModal.style.display = "block";
});

// Tombol konfirmasi pembayaran
document.getElementById("confirmPayment").addEventListener("click", () => {
  paymentModal.style.display = "none";
  qrisContainer.style.display = "none";

  document.getElementById("ticketModal").style.display = "flex";
});

// Fungsi untuk menampilkan QRIS
function showQRIS() {
  qrisContainer.style.display = "block";
}


// Tombol tutup modal tiket
document.getElementById("closeTicket").addEventListener("click", () => {
  document.getElementById("ticketModal").style.display = "none";
});

document.getElementById("downloadTicket").addEventListener("click", () => {
  const ticketImg = document.getElementById("ticketImage");
  const link = document.createElement("a");
  link.href = ticketImg.src;
  link.download = "Tiket_EVOSIX.png";
  link.click();
});

// Tombol print tiket
document.getElementById("printTicket").addEventListener("click", () => {
  const ticketImg = document.getElementById("ticketImage");
  const printWindow = window.open("", "", "width=600,height=400");
  printWindow.document.write(`<img src="${ticketImg.src}" style="max-width:100%;">`);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
  printWindow.close();
});



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
  generateTicketImage(registrationData);
}

function showTicket() {
  if (!registrationData.teamName) {
    alert("Data registrasi belum lengkap!");
    return;
  }
  generateTicketImage(registrationData);
}


    document.getElementById('closeTicket').addEventListener('click', () => {
        ticketModal.style.display = 'none';
    });

    document.getElementById('downloadTicket').addEventListener('click', () => {
        const blob = new Blob([ticketPre.textContent], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `Tiket_${registrationData.teamName}.txt`;
        link.click();
    });

    document.getElementById('printTicket').addEventListener('click', () => {
        const printWindow = window.open('', '', 'width=600,height=400');
        printWindow.document.write(`<pre>${ticketPre.textContent}</pre>`);
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        printWindow.close();
    });


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
