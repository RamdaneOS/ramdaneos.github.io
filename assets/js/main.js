(function () {
	var observer = new IntersectionObserver(function (entries) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
				observer.unobserve(entry.target);
			}
		});
	}, { threshold: .1, rootMargin: '0px 0px -40px 0px' });

	document.querySelectorAll('.reveal').forEach(function (el) {
		observer.observe(el);
	});

	var nav = document.getElementById('site-nav');
	window.addEventListener('scroll', function () {
		if (window.scrollY > 60) {
			nav && nav.classList.add('scrolled');
		} else {
			nav && nav.classList.remove('scrolled');
		}
	}, { passive: true });
})();
