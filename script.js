const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
	nav.classList.toggle("active");
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		const target = document.querySelector(this.getAttribute('href'));
		const navbarHeight = 80; // Höhe Navbar
		const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

		nav.classList.remove("active");

		window.scrollTo({
			top: targetPosition,
			behavior: 'smooth'
		});
	});
});
