(function () {

  /* ---- Typed.js — cycling header titles ---- */
  new Typed('#typed-text', {
    strings: [
      'PhD Researcher',
      'Hydrological Modeller',
      'ML Engineer',
      'Water Systems Researcher'
    ],
    typeSpeed: 55,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
    smartBackspace: true
  });

  /* ---- Particles.js — rising water bubbles ---- */
  particlesJS('particles-js', {
    particles: {
      number: { value: 70, density: { enable: true, value_area: 900 } },
      color: { value: '#00b4d8' },
      shape: { type: 'circle' },
      opacity: {
        value: 0.45,
        random: true,
        anim: { enable: true, speed: 0.6, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3.5,
        random: true,
        anim: { enable: false }
      },
      line_linked: {
        enable: true,
        distance: 140,
        color: '#00b4d8',
        opacity: 0.18,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.2,
        direction: 'top',
        random: true,
        straight: false,
        out_mode: 'out',
        attract: { enable: false }
      }
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onhover: { enable: true, mode: 'grab' },
        onclick: { enable: true, mode: 'push' },
        resize: true
      },
      modes: {
        grab: { distance: 160, line_linked: { opacity: 0.7 } },
        push: { particles_nb: 3 }
      }
    },
    retina_detect: true
  });


})();
