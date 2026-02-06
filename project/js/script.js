// ===== Dark Mode =====
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

console.log("JS 연결됨");

