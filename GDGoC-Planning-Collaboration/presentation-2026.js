if (new URLSearchParams(location.search).has('qa')) document.body.classList.add('qa');

const slides = [...document.querySelectorAll('.slide')];
const progressBar = document.getElementById('progressBar');
const counter = document.getElementById('counter');
const notesDialog = document.getElementById('notesDialog');
const overviewDialog = document.getElementById('overviewDialog');
const notesTitle = document.getElementById('notesTitle');
const notesBody = document.getElementById('notesBody');
const overviewGrid = document.getElementById('overviewGrid');
const initialSlide = Math.max(0, Math.min(slides.length - 1, Number(location.hash.replace('#slide-', '')) - 1 || 0));
let current = initialSlide;

const two = value => String(value).padStart(2, '0');

function go(index, behavior = 'smooth') {
  const next = Math.max(0, Math.min(slides.length - 1, index));
  slides[next].scrollIntoView({ behavior, block: 'start' });
}

function setCurrent(index) {
  current = index;
  slides.forEach((slide, slideIndex) => slide.classList.toggle('active', slideIndex === index));
  const accent = getComputedStyle(slides[index]).getPropertyValue('--accent');
  progressBar.style.width = `${((index + 1) / slides.length) * 100}%`;
  progressBar.style.background = accent;
  counter.textContent = `${two(index + 1)} / ${two(slides.length)}`;
  history.replaceState(null, '', `#slide-${index + 1}`);
}

function openNotes() {
  notesTitle.textContent = `${two(current + 1)} · ${slides[current].dataset.title}`;
  notesBody.textContent = slides[current].querySelector('.speaker-note')?.textContent.trim() || '등록된 노트가 없습니다.';
  notesDialog.showModal();
}

const observer = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (visible) setCurrent(slides.indexOf(visible.target));
}, { threshold: [.55, .75] });
slides.forEach(slide => observer.observe(slide));

slides.forEach((slide, index) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = `<small>${two(index + 1)} · ${slide.dataset.time} · ${slide.dataset.chapter}</small><b>${slide.dataset.title}</b>`;
  button.addEventListener('click', () => { overviewDialog.close(); button.blur(); go(index); });
  overviewGrid.append(button);
});

document.getElementById('prev').addEventListener('click', () => go(current - 1));
document.getElementById('next').addEventListener('click', () => go(current + 1));
document.getElementById('notes').addEventListener('click', openNotes);
document.getElementById('overview').addEventListener('click', () => overviewDialog.showModal());
document.getElementById('fullscreen').addEventListener('click', () => document.documentElement.requestFullscreen?.());
document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => document.getElementById(button.dataset.close).close()));

document.addEventListener('keydown', event => {
  const openedDialog = document.querySelector('dialog[open]');
  if (openedDialog) {
    if (event.key === 'Escape') openedDialog.close();
    return;
  }
  if (['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(event.key)) { event.preventDefault(); go(current + 1); }
  if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(event.key)) { event.preventDefault(); go(current - 1); }
  if (event.key === 'Home') { event.preventDefault(); go(0); }
  if (event.key === 'End') { event.preventDefault(); go(slides.length - 1); }
  if (event.key.toLowerCase() === 'n') openNotes();
  if (event.key.toLowerCase() === 'o') overviewDialog.showModal();
  if (event.key.toLowerCase() === 'f') document.documentElement.requestFullscreen?.();
});

requestAnimationFrame(() => go(initialSlide, 'auto'));
