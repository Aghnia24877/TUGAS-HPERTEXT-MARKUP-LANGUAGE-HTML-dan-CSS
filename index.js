document.getElementById("submit").onclick = function() {
  let name = document.getElementById("nama").value.trim();
  let nim = document.getElementById("nim").value.trim();
  let email = document.getElementById("email").value.trim();
  let pesan = document.getElementById("pesan").value.trim();

  if (name === "" || email === "" || nim === "" || pesan === "") {
    document.getElementById("notif").style.display = "block";
    document.getElementById("notif-message").textContent = "Semua kolom harus diisi!";
  } else {
    document.getElementById("notif").style.display = "block";
    document.getElementById("notif-message").textContent = "Terima kasih telah menghubungi Aghnia! Pesanmu sudah terkirim.";
    document.getElementById("contactForm").reset();
  }
}

// Dark mode toggle
document.getElementById("mode-toggle").onclick = function() {
  let body = document.body;
  let button = document.getElementById("mode-toggle").value.trim();

  if (button === "🌙 Dark mode") {
    body.style.backgroundColor = "#121212";
    body.style.color = "#ffffff";
    document.getElementById("mode-toggle").textContent = "☀️ Light mode";
  }
  
}