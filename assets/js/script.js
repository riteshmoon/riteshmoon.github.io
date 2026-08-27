// Mobile sidebar toggle for the multi-page academic site
(function () {
	var toggle = document.querySelector('.nav-toggle');
	var sidebar = document.querySelector('.sidebar');
	var overlay = document.querySelector('.nav-overlay');

	if (!toggle || !sidebar) return;

	function closeNav() {
		sidebar.classList.remove('open');
		if (overlay) overlay.classList.remove('open');
		toggle.setAttribute('aria-expanded', 'false');
	}

	function openNav() {
		sidebar.classList.add('open');
		if (overlay) overlay.classList.add('open');
		toggle.setAttribute('aria-expanded', 'true');
	}

	toggle.addEventListener('click', function () {
		if (sidebar.classList.contains('open')) {
			closeNav();
		} else {
			openNav();
		}
	});

	if (overlay) {
		overlay.addEventListener('click', closeNav);
	}

	// Close the mobile nav after a link is tapped
	var links = sidebar.querySelectorAll('a');
	links.forEach(function (link) {
		link.addEventListener('click', closeNav);
	});
})();
