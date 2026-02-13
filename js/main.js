document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = form.querySelector('.form-status');
    status.textContent = 'Enviando...';
    try {
      const data = new FormData(form);
      const res = await fetch(form.action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' }});
      if (res.ok) {
        status.textContent = '¡Gracias! Te responderemos pronto.';
        form.reset();
      } else {
        status.textContent = 'Ocurrió un problema. Inténtalo de nuevo.';
      }
    } catch (err) {
      status.textContent = 'Sin conexión. Intenta más tarde.';
    }
  });
}
