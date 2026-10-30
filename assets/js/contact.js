/**
 * ==========================================================================
   Contact Page Specific JavaScript
   ==========================================================================
*/

const ContactPage = (() => {
  const form = $('#contactForm');
  const topicPills = $$('.topic-pill');
  const messageInput = $('#message');

  const handleTopicClick = (e) => {
    const pill = e.currentTarget;
    const topic = pill.textContent.trim();

    topicPills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');

    if (messageInput) {
      const currentMessage = messageInput.value.trim();
      if (currentMessage) {
        messageInput.value = `${currentMessage}\n\nI'm interested in discussing: ${topic}`;
      } else {
        messageInput.value = `I'm interested in discussing: ${topic}`;
      }
    }
  };

  const validateForm = () => {
    if (!form) return true;

    const name = form.querySelector('#name')?.value.trim();
    const email = form.querySelector('#email')?.value.trim();
    const message = form.querySelector('#message')?.value.trim();

    let isValid = true;

    if (!name || name.length < 2) {
      isValid = false;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      isValid = false;
    }

    if (!message || message.length < 20) {
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    if (!validateForm()) {
      e.preventDefault();
      alert('Please fill in all required fields correctly.');
      return;
    }

    // Form will be submitted to Formspree as configured in the HTML
    // No additional client-side processing needed
  };

  const init = () => {
    topicPills.forEach(pill => {
      pill.addEventListener('click', handleTopicClick);
    });

    form?.addEventListener('submit', handleSubmit);
  };

  return { init };
})();

// Initialize only on contact page
if (document.querySelector('.workspace-section') || document.querySelector('#contactForm')) {
  document.addEventListener('DOMContentLoaded', ContactPage.init);
}