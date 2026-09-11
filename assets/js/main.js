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

	document.querySelectorAll('.exp-toggle').forEach(function (btn) {
		var target = document.getElementById(btn.getAttribute('aria-controls'));
		var label = btn.querySelector('.exp-toggle-label');
		var moreText = label.textContent;
		if (!target) return;
		btn.addEventListener('click', function () {
			var expanded = btn.getAttribute('aria-expanded') === 'true';
			target.hidden = expanded;
			btn.setAttribute('aria-expanded', String(!expanded));
			label.textContent = expanded ? moreText : 'Show less';
		});
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
