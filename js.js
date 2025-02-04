
document.addEventListener("DOMContentLoaded", function () {

    const navToggle = document.createElement("button");
    navToggle.textContent = "☰ Menu";
    navToggle.classList.add("nav-toggle");
  
    const nav = document.querySelector("nav");
    if (nav) {
      nav.parentNode.insertBefore(navToggle, nav);
      navToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
      });
    }
  
    // Contact Form Validation
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission for validation
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();
  
        if (name === "" || email === "" || message === "") {
          alert("Please fill in all fields.");
          return;
        }
  
        if (!validateEmail(email)) {
          alert("Please enter a valid email address.");
          return;
        }
  
        alert("Thank you! Your message has been sent.");
        contactForm.reset();
      });
    }
  
    // Function to validate email format
    function validateEmail(email) {
      const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return re.test(email);
    }
  
    // Dynamic News Page Example
    const newsContainer = document.querySelector(".news-container");
    if (newsContainer) {
      const newsArticles = [
        {
          title: "Newcastle vs Spurs Controversy",
          image: "news1.jpg",
          description: "Why Newcastle equalizer vs Spurs was allowed despite handball.",
          time: "31m ago"
        },
        {
          title: "Wayne Rooney on Darts Championship",
          image: "news2.jpg",
          description: "Colen & sons go wild for Littler after Darts Championship triumph.",
          time: "49m ago"
        },
        {
          title: "Guardiola on Man City Crisis",
          image: "news3.jpg",
          description: "Guardiola refuses to blame Man City players for crisis.",
          time: "51m ago"
        },
  
      {
          title: "Rashford Issues",
          image: "news3.jpg",
          description: "Revealed: Why Rashford was dropped from the lineup.",
          time: "55m ago"
        },
      ];
  
      newsArticles.forEach((article) => {
        let articleHTML = `
          <div class="news-card">
            <img src="${article.image}" alt="${article.title}">
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <span>${article.time}</span>
          </div>
        `;
        newsContainer.innerHTML += articleHTML;
      });
    }
  
    // Highlight Upcoming Events Dynamically
    const eventRows = document.querySelectorAll(".league-section table tbody tr");
    if (eventRows) {
      const today = new Date();
      eventRows.forEach(row => {
        let eventDate = new Date(row.cells[0].textContent);
        if (eventDate >= today) {
          row.style.backgroundColor = "#dff0d8"; // Light green for upcoming events
        }
      });
    }
  
    // Media Page: Play video on thumbnail click
    const mediaCards = document.querySelectorAll(".media-card video");
    mediaCards.forEach(video => {
      video.addEventListener("click", () => {
        video.play();
      });
    });
  });
  
  
  