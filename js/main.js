const toggleTheme = document.querySelectorAll(".toggle__theme");

toggleTheme.forEach(e => {
	const moon = document.querySelector(".moon"),
		sun = document.querySelector(".sun"),
		body = document.querySelector("body");
	e.addEventListener("click", function () {
		if (moon.style.opacity == 1) {
			moon.style.opacity = 0;
			sun.style.opacity = 1;
			body.classList.toggle("night");
		} else {
			moon.style.opacity = 1;
			sun.style.opacity = 0;
			body.classList.toggle("night")
		}
	})
})