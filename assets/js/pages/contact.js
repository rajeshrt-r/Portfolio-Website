// Centralized Verified Site Configuration (Data Architecture)
        const siteConfig = {
            name: "Rajesh R",
            title: "AI & Data Science Engineering Student",
            email: "rajeshrt905@gmail.com",
            location: "Tamil Nadu, India",
            social: {
                github: "https://github.com/rajeshrt-r",
                linkedin: "https://www.linkedin.com/in/rajesh-r-50ab65355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                twitter: "https://x.com/Rajeshrtrj",
                instagram: "https://www.instagram.com/rajesh_the_don_r?igsh=bWkzY3lidzY1OGd3&utm_source=ig_contact_invite"
            }
        };

        // DOM Elements
        const menuToggleBtn = document.getElementById('menu-toggle-btn');
        const mobileNav = document.getElementById('mobile-nav');
        const themeToggleBtn = document.getElementById('theme-toggle-btn');
        const themeIcon = document.getElementById('theme-icon');
        const scrollTopBtn = document.getElementById('scroll-top-btn');
        const toastEl = document.getElementById('toast-notify');
        const toastMsg = document.getElementById('toast-msg');

        // Contact Form Elements
        const contactForm = document.getElementById('contact-form');
        const nameInput = document.getElementById('user_name');
        const emailInput = document.getElementById('user_email');
        const subjectInput = document.getElementById('user_subject');
        const messageInput = document.getElementById('user_message');
        const charCounter = document.getElementById('char-counter');
        const submitBtn = document.getElementById('submit-btn');
        const honeypotInput = document.getElementById('form_honeypot_bot');

        // Error message elements
        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const subjectError = document.getElementById('subject-error');
        const messageError = document.getElementById('message-error');

        // Feedback Card Elements
        const feedbackCard = document.getElementById('form-feedback-card');
        const copyMessageBtn = document.getElementById('copy-message-btn');
        const openMailtoBtn = document.getElementById('open-mailto-btn');
        const resetFormBtn = document.getElementById('reset-form-btn');
        let preparedEmailBody = "";

        // 1. Mobile Navigation Toggle
        if (menuToggleBtn && mobileNav) {
            menuToggleBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const isOpen = mobileNav.classList.toggle('open');
                menuToggleBtn.setAttribute('aria-expanded', isOpen);
                const icon = menuToggleBtn.querySelector('i');
                if (isOpen) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });

            document.addEventListener('click', (e) => {
                if (!mobileNav.contains(e.target) && !menuToggleBtn.contains(e.target)) {
                    mobileNav.classList.remove('open');
                    menuToggleBtn.setAttribute('aria-expanded', 'false');
                    const icon = menuToggleBtn.querySelector('i');
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        }

        // 2. Theme Toggle (Persisted in localStorage)
        const currentTheme = localStorage.getItem('portfolio-theme') || 'dark';
        if (currentTheme === 'light') {
            document.body.classList.add('light-theme');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }

        if (themeToggleBtn) {
            themeToggleBtn.addEventListener('click', () => {
                document.body.classList.toggle('light-theme');
                const isLight = document.body.classList.contains('light-theme');
                if (isLight) {
                    themeIcon.classList.remove('fa-moon');
                    themeIcon.classList.add('fa-sun');
                    localStorage.setItem('portfolio-theme', 'light');
                } else {
                    themeIcon.classList.remove('fa-sun');
                    themeIcon.classList.add('fa-moon');
                    localStorage.setItem('portfolio-theme', 'dark');
                }
            });
        }

        // 3. Scroll to Top
        if (scrollTopBtn) {
            scrollTopBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // 4. Toast Notification Utility
        let toastTimeout;
        function showToast(message) {
            clearTimeout(toastTimeout);
            toastMsg.textContent = message;
            toastEl.classList.add('show');
            toastTimeout = setTimeout(() => {
                toastEl.classList.remove('show');
            }, 3000);
        }

        // 5. Copy Buttons (Email & Location)
        const copyButtons = document.querySelectorAll('.copy-btn');
        copyButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const textToCopy = btn.getAttribute('data-copy');
                if (navigator.clipboard && window.isSecureContext) {
                    navigator.clipboard.writeText(textToCopy).then(() => {
                        showToast(`Copied "${textToCopy}" to clipboard!`);
                    }).catch(() => {
                        fallbackCopy(textToCopy);
                    });
                } else {
                    fallbackCopy(textToCopy);
                }
            });
        });

        function fallbackCopy(text) {
            const tempInput = document.createElement('textarea');
            tempInput.value = text;
            tempInput.style.position = 'fixed';
            tempInput.style.left = '-9999px';
            document.body.appendChild(tempInput);
            tempInput.select();
            try {
                document.execCommand('copy');
                showToast(`Copied "${text}" to clipboard!`);
            } catch (err) {
                showToast("Failed to copy. Please select and copy manually.");
            }
            document.body.removeChild(tempInput);
        }

        // 6. Topic Pills quick-select
        const topicPills = document.querySelectorAll('.topic-pill');
        topicPills.forEach(pill => {
            pill.addEventListener('click', () => {
                const subject = pill.getAttribute('data-subject');
                subjectInput.value = subject;
                validateSubject();
                topicPills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                subjectInput.focus();
            });
        });

        // 7. Message Textarea Character Counter
        if (messageInput && charCounter) {
            messageInput.addEventListener('input', () => {
                const count = messageInput.value.length;
                charCounter.textContent = `${count} / 1500`;
                validateMessage();
            });
        }

        // 8. Form Validation Functions
        function validateName() {
            const val = nameInput.value.trim();
            if (val.length < 2) {
                nameError.classList.add('visible');
                nameInput.style.borderColor = '#F87171';
                return false;
            } else {
                nameError.classList.remove('visible');
                nameInput.style.borderColor = '';
                return true;
            }
        }

        function validateEmail() {
            const val = emailInput.value.trim();
            // Sensible RFC 5322 compatible email format regex
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
            if (!val || !emailPattern.test(val)) {
                emailError.classList.add('visible');
                emailInput.style.borderColor = '#F87171';
                return false;
            } else {
                emailError.classList.remove('visible');
                emailInput.style.borderColor = '';
                return true;
            }
        }

        function validateSubject() {
            const val = subjectInput.value.trim();
            if (val.length < 2) {
                subjectError.classList.add('visible');
                subjectInput.style.borderColor = '#F87171';
                return false;
            } else {
                subjectError.classList.remove('visible');
                subjectInput.style.borderColor = '';
                return true;
            }
        }

        function validateMessage() {
            const val = messageInput.value.trim();
            if (val.length < 10) {
                messageError.classList.add('visible');
                messageInput.style.borderColor = '#F87171';
                return false;
            } else {
                messageError.classList.remove('visible');
                messageInput.style.borderColor = '';
                return true;
            }
        }

        nameInput.addEventListener('blur', validateName);
        emailInput.addEventListener('blur', validateEmail);
        subjectInput.addEventListener('blur', validateSubject);
        messageInput.addEventListener('blur', validateMessage);

        // 9. Form Submission Handling (Formspree + Mailto fallback)
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Bot check (honeypot)
            if (honeypotInput.value !== '') {
                console.warn('Bot detected via honeypot.');
                return;
            }

            const isNameValid = validateName();
            const isEmailValid = validateEmail();
            const isSubjectValid = validateSubject();
            const isMessageValid = validateMessage();

            if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
                showToast("Please fix the errors in the form.");
                return;
            }

            // Disable submit button temporarily
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Sending...</span>';

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const subject = subjectInput.value.trim();
            const message = messageInput.value.trim();

            preparedEmailBody = `Hello Rajesh,\n\n${message}\n\n---\nFrom: ${name}\nEmail: ${email}`;

            // Build mailto URL as fallback
            const mailtoUrl = `mailto:${encodeURIComponent(siteConfig.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(preparedEmailBody)}`;
            if (openMailtoBtn) {
                openMailtoBtn.href = mailtoUrl;
            }

            // Try Formspree submission
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('subject', subject);
            formData.append('message', message);

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    showToast("Message sent successfully!");
                    // Reveal feedback card with success message
                    document.getElementById('feedback-text').innerHTML =
                        `Your message has been sent to <strong>${siteConfig.email}</strong>. I'll get back to you soon!`;
                    feedbackCard.querySelector('.feedback-header i').className = 'fa-solid fa-circle-check';
                    feedbackCard.querySelector('.feedback-header span').textContent = 'Message Sent Successfully';
                } else {
                    throw new Error('Formspree submission failed');
                }
            } catch (err) {
                console.warn('Formspree submission failed, falling back to mailto:', err);
                showToast("Opening your email client as fallback...");
            }

            // Reveal feedback card
            setTimeout(() => {
                feedbackCard.classList.add('visible');
                feedbackCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> <span>Send Message</span> <i class="fa-solid fa-arrow-right"></i>';

                // Trigger mailto as fallback/backup
                try {
                    window.location.href = mailtoUrl;
                } catch (err) {
                    console.log("Mailto triggered", err);
                }
            }, 600);
        });

        // 10. Copy Prepared Message button
        if (copyMessageBtn) {
            copyMessageBtn.addEventListener('click', () => {
                if (preparedEmailBody) {
                    fallbackCopy(preparedEmailBody);
                } else {
                    showToast("No prepared message found yet.");
                }
            });
        }

        // 11. Send Another Message Reset
        if (resetFormBtn) {
            resetFormBtn.addEventListener('click', () => {
                contactForm.reset();
                charCounter.textContent = '0 / 1500';
                feedbackCard.classList.remove('visible');
                topicPills.forEach(p => p.classList.remove('active'));
                nameInput.style.borderColor = '';
                emailInput.style.borderColor = '';
                subjectInput.style.borderColor = '';
                messageInput.style.borderColor = '';
                showToast("Form cleared.");
                nameInput.focus();
            });
        }
