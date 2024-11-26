export function initializeFaqTabs() {
  document.querySelectorAll('.faq-title').forEach(title => {
    title.addEventListener('click', () => {
      const parent = title.parentElement; // faq-item
      const isActive = parent.classList.contains('active');

      document.querySelectorAll('.faq-item.active').forEach(item => {
        item.classList.remove('active');
      });

      if (!isActive) {
        parent.classList.add('active');
      }
    });
  });
}
