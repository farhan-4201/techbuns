/**
 * TechBuns Interactive JavaScript
 * Replicates exact behaviors of the live Next.js application
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header Sticky & Background Blur Transition
  const header = document.querySelector('header');
  const mobileMenu = document.getElementById('tb-mobile-menu');
  const menuBtn = document.querySelector('button[aria-controls="tb-mobile-menu"]');
  let isMenuOpen = false;

  function updateHeaderState() {
    const isScrolled = window.scrollY > 40;
    if (isScrolled || isMenuOpen) {
      header.classList.remove('bg-transparent');
      header.classList.add('bg-[#0F1729]/95', 'shadow-lg', 'backdrop-blur');
    } else {
      header.classList.remove('bg-[#0F1729]/95', 'shadow-lg', 'backdrop-blur');
      header.classList.add('bg-transparent');
    }
  }

  window.addEventListener('scroll', updateHeaderState, { passive: true });
  updateHeaderState();

  // 2. Mobile Menu Toggle
  const hamburgerSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu h-6 w-6" aria-hidden="true">
      <line x1="4" x2="20" y1="12" y2="12"></line>
      <line x1="4" x2="20" y1="6" y2="6"></line>
      <line x1="4" x2="20" y1="18" y2="18"></line>
    </svg>
  `;

  const closeSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x h-6 w-6" aria-hidden="true">
      <path d="M18 6 6 18"></path>
      <path d="m6 6 12 12"></path>
    </svg>
  `;

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      mobileMenu.classList.toggle('hidden', !isMenuOpen);
      menuBtn.setAttribute('aria-expanded', isMenuOpen ? 'true' : 'false');
      menuBtn.setAttribute('aria-label', isMenuOpen ? 'Close menu' : 'Open menu');
      menuBtn.innerHTML = isMenuOpen ? closeSvg : hamburgerSvg;
      updateHeaderState();
    });

    // Close menu when clicking any mobile link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        isMenuOpen = false;
        mobileMenu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.setAttribute('aria-label', 'Open menu');
        menuBtn.innerHTML = hamburgerSvg;
        updateHeaderState();
      });
    });
  }

  // 3. Smooth scrolling for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // 4. WhatsApp Speech Bubble Dismiss
  const hideChatBtn = document.querySelector('button[aria-label="Hide chat message"]');
  if (hideChatBtn) {
    hideChatBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const bubble = hideChatBtn.closest('.relative');
      if (bubble) {
        bubble.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
        bubble.style.opacity = '0';
        bubble.style.transform = 'scale(0.9)';
        setTimeout(() => bubble.remove(), 200);
      }
    });
  }

  // 5. Toast Notification System
  const toast = document.getElementById('tb-toast');
  const toastMsg = document.getElementById('tb-toast-msg');
  let toastTimer = null;

  function showToast(message, isError = false) {
    if (!toast) return;
    if (toastMsg) toastMsg.textContent = message;
    toast.style.background = isError ? '#dc2626' : '#059669';
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }

  // 6. Enquiry Form Submission & Success State
  const enquiryForm = document.getElementById('tb-enquiry-form');
  const formSuccess = document.getElementById('tb-form-success');
  const resetFormBtn = document.getElementById('tb-reset-form-btn');

  if (enquiryForm) {
    const submitBtn = enquiryForm.querySelector('button[type="submit"]');

    enquiryForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(enquiryForm);
      const name = formData.get('name')?.toString().trim();
      const email = formData.get('email')?.toString().trim();

      if (!name || !email) {
        showToast('Please fill in required fields (*)', true);
        return;
      }

      // Enter "sending" state
      const originalBtnHtml = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.classList.add('opacity-60');
      submitBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader-circle h-4 w-4 animate-spin" aria-hidden="true">
          <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
        </svg>
        Sending…
      `;

      // Simulate network submission with realistic delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Reset button
      submitBtn.disabled = false;
      submitBtn.classList.remove('opacity-60');
      submitBtn.innerHTML = originalBtnHtml;

      // Show success toast & transition form to confirmation state
      showToast('Enquiry sent successfully! We will contact you within 24 hours.');
      enquiryForm.reset();
      enquiryForm.classList.add('hidden');
      if (formSuccess) {
        formSuccess.classList.remove('hidden');
        formSuccess.classList.add('flex');
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }

  if (resetFormBtn && enquiryForm && formSuccess) {
    resetFormBtn.addEventListener('click', () => {
      formSuccess.classList.add('hidden');
      formSuccess.classList.remove('flex');
      enquiryForm.classList.remove('hidden');
    });
  }
});
