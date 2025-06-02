(() => {
      'use strict'

      // Fetch form element
      const form = document.getElementById('contactForm')

      // Form submit event
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } else {
          event.preventDefault()
          alert('Thank you for your message! I will get back to you soon.')
          form.reset()
        }
        form.classList.add('was-validated')
      }, false)
    })()
