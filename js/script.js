// Validasi form
document.getElementById("messageForm").addEventListener("submit", function(e){
  e.preventDefault();
  const name  = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const msg   = document.getElementById("msg").value.trim();

  if(!name || !email || !phone || !msg){
    alert("Semua field harus diisi!");
    return;
  }
  alert("Pesan berhasil dikirim ke Muhammad Said Imtiyaz!");
  this.reset();
});
// ===== Scroll to Top Button =====
const scrollTopBtn = document.getElementById("scrollTopBtn");

// tampilkan tombol ketika user scroll ke bawah
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

// klik tombol untuk scroll ke atas
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
// ===== Smooth Scroll sudah aktif dari CSS =====

// ===== Scroll to Top Button =====
const scrollTopButton = document.getElementById("scrollTopBtn");

// Tampilkan tombol saat user scroll ke bawah
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});
// ===== Fade-in saat scroll =====
const fadeElements = document.querySelectorAll('.fade-in');

function checkFadeIn() {
  const triggerBottom = window.innerHeight * 0.85;

  fadeElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkFadeIn);
window.addEventListener('load', checkFadeIn);


