document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded Successfully!");


    // Responsive Mobile Menu
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });

//Alert for booking Confirmation 
    document.querySelector(".booking-form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Booking Confirmed! Check your email for details.");
    });

    //Alert for Demo purpose
    document.querySelector(".btn").addEventListener("click", function() {
        button.addEventListener("click", function () {
            alert("Redirecting to booking page...");
        });
    });
});
        
document.addEventListener("DOMContentLoaded", function() {
    const bookingForm = document.querySelector(".booking-form");
    bookingForm.addEventListener("submit", function(e){
        e.preventDefault();
        alert("Booking Confirmed! Check your your email for confirmation.");
        bookingForm.reset();

    });
}); 

// Animate elements on scroll
document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".about-content, .about-image");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, {
      threshold: 0.3
    });
  
    animatedElements.forEach(el => observer.observe(el));
  });


  document.addEventListener("DOMContentLoaded", function () {
    console.log("Rooms Page Loaded");
  
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");
  
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  
    const bookButtons = document.querySelectorAll(".book-now");
    bookButtons.forEach(button => {
      button.addEventListener("click", () => {
        alert("Redirecting to booking page...");
        window.location.href = "booking.html";
      });
    });
  });
  
  

  // Gallery 
  document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-buttons button");
    const galleryItems = document.querySelectorAll(".gallery-item");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const captionText = document.getElementById("caption");
    const closeModal = document.querySelector(".close");
  
    // Filter Function
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const category = button.getAttribute("data-filter");
  
        // Remove active from all and set active class to current
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
  
        galleryItems.forEach(item => {
          const itemCategory = item.getAttribute("data-category");
          if (category === "all" || category === itemCategory) {
            item.style.display = "block";
            item.classList.add("fade-in");
          } else {
            item.style.display = "none";
            item.classList.remove("fade-in");
          }
        });
      });
    });
  
    // Modal Logic
    galleryItems.forEach(item => {
      const img = item.querySelector("img");
      img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerText = img.alt;
      });
    });
  
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Close modal when clicking outside image
    window.addEventListener("click", (e) => {
      if (e.target == modal) {
        modal.style.display = "none";
      }
    });
  });


  // contact
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const formSuccess = document.getElementById("formSuccess");
  
    const validateEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Clear errors
      nameError.textContent = "";
      emailError.textContent = "";
      messageError.textContent = "";
      formSuccess.textContent = "";
  
      let valid = true;
  
      if (name.value.trim() === "") {
        nameError.textContent = "Name is required";
        valid = false;
      }
  
      if (!validateEmail(email.value.trim())) {
        emailError.textContent = "Enter a valid email";
        valid = false;
      }
  
      if (message.value.trim().length < 10) {
        messageError.textContent = "Message should be at least 10 characters";
        valid = false;
      }
  
      if (valid) {
        formSuccess.textContent = "Message sent successfully! ✅";
        form.reset();
  
        // Optional: Store user input in localStorage
        const contactData = {
          name: name.value,
          email: email.value,
          message: message.value,
          time: new Date().toISOString()
        };
        localStorage.setItem("lastContact", JSON.stringify(contactData));
      }
    });
  });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll("[data-animate]").forEach(el => {
    observer.observe(el);
  });

   //LogIn
  document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const errorMsg = document.getElementById("errorMsg");
    const togglePassword = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("password");
  
    // Show/Hide Password Toggle
    togglePassword.addEventListener("click", () => {
      const type = passwordInput.getAttribute("type");
      passwordInput.setAttribute("type", type === "password" ? "text" : "password");
      togglePassword.textContent = type === "password" ? "🙈" : "👁️";
    });
  
    // Fake login logic with email validation
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const email = document.getElementById("email").value.trim();
      const password = passwordInput.value.trim();
  
      if (!validateEmail(email)) {
        errorMsg.textContent = "Please enter a valid email address.";
        return;
      }
  
      if (password.length < 6) {
        errorMsg.textContent = "Password must be at least 6 characters.";
        return;
      }
  
      // Simulate a login check (replace this with real authentication)
      if (email === "guest@sparsh.com" && password === "guest123") {
        errorMsg.style.color = "green";
        errorMsg.textContent = "Login successful! Redirecting...";
        setTimeout(() => {
          window.location.href = "/Homepage/index.html";
        }, 1500);
      } else {
        errorMsg.textContent = "Invalid credentials. Please try again.";
      }
    });
  
    function validateEmail(email) {
      const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      return regex.test(email);
    }
  });
          