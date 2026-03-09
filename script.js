/* Scroll Spy + Progress */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");
const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

  let current = "";
  const scrollY = window.pageYOffset;
  const pageHeight = document.documentElement.scrollHeight;
  const viewportHeight = window.innerHeight;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  if (scrollY + viewportHeight >= pageHeight - 5) {
    current = sections[sections.length - 1].id;
  }

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });

  const scrollPercent =
    (scrollY / (pageHeight - viewportHeight)) * 100;

  progressBar.style.width = scrollPercent + "%";
});


/* Reveal Animation */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

  const windowHeight = window.innerHeight;

  reveals.forEach(element => {

    if (element.getBoundingClientRect().top < windowHeight - 100) {
      element.classList.add("active");
    }

  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* Typing Effect */
const text = "Lara Alcuetas";
let index = 0;

function typeEffect() {

  if (index < text.length) {

    document.getElementById("typing-name").innerHTML += text.charAt(index);
    index++;

    setTimeout(typeEffect, 100);
  }

}

typeEffect();



/* PROJECT MODAL SYSTEM */

function openProject(subject) {

  document.getElementById("projectModal").style.display = "flex";
  document.getElementById("projectTitle").innerText = subject.toUpperCase();

  const sidebar = document.querySelector(".project-sidebar ul");
  const display = document.getElementById("projectDisplay");

  display.innerHTML = "Select an item to view.";

  /* ENTREPRENEUR */
  if (subject === "entrep") {

    sidebar.innerHTML = `
      <li onclick="showContent('logo')">Logo</li>
      <hr>
      <li onclick="showContent('video')">Video Pitch</li>
      <hr>
      <li onclick="showContent('lc')">Lean Canvas</li>
      <hr>
      <li onclick="showContent('emc')">Empathy Map Canvas</li>
      <hr>
      <li onclick="showContent('bmc')">Business Model Canvas</li>
    `;
  }


  /* EMBEDDED */
  if (subject === "embedded") {

    sidebar.innerHTML = `
      <li onclick="showContent('ron')">LAFVIN 2WD ROBOT</li>
      <hr>
      <li onclick="showContent('mon')">Robot Montage</li>
      <hr>
      <li onclick="showContent('avo')">Obstacle Avoidance</li>
      <hr>
      <li onclick="showContent('line')">Line Following</li>
    `;
  }


  /* Artapp */
  if (subject === "artapp") {

    sidebar.innerHTML = `
      <li onclick="showContent('re')">Reimagine Portrait</li>
      <hr>
     
    `;
  }


  /* contem*/
  if (subject === "contem") {

    sidebar.innerHTML = `
       <li onclick="showContent('dior')">Diorama</li>
      <hr>
      <li onclick="showContent('rara')">Snap</li>
      <hr>
      <li onclick="showContent('dio')">TSS Featured</li>
      <hr>
      <li onclick="showContent('aww')">Award</li>
      <hr>
    `;
  }


  /* RANDOM SUBJECT */
  if (subject === "random") {

    sidebar.innerHTML = `
      <li onclick="showContent('jav')">Last project in java</li>
      <hr>
      <li onclick="showContent('sheet')">xampp</li>
    `;
  }

}


function closeProject() {

  document.getElementById("projectModal").style.display = "none";

}



/* DISPLAY CONTENT */

function showContent(type) {

  const display = document.getElementById("projectDisplay");


  /* ENTREPRENEUR */

  if (type === "logo") {
    display.innerHTML = `<img src="loglog.jpeg" class="project-image">`;
  }

  if (type === "video") {
    display.innerHTML = `
      <video controls class="project-video">
        <source src="bulb.mp4" type="video/mp4">
      </video>
    `;
  }

  if (type === "lc") {
    display.innerHTML = `<img src="Lc.jpeg" class="project-image">`;
  }

  if (type === "emc") {
    display.innerHTML = `<img src="EMC.jpeg" class="project-image">`;
  }

  if (type === "bmc") {
    display.innerHTML = `<img src="bmc.png" class="project-image">`;
  }



  /* EMBEDDED */

  if (type === "ron") {
    display.innerHTML = `<img src="robot.png" class="project-png">`;
  }

  if (type === "mon") {
    display.innerHTML = `<video src="car.mp4" class="project-video" controls></video>`;
  }

  if (type === "avo") {
    display.innerHTML = `<video src="1st.mp4" class="project-video" controls></video>`;
  }

  if (type === "line") {
    display.innerHTML = `<video src="line.mp4" class="project-video" controls></video>`;
  }


  /* Artapp */

  if (type === "re") {
    display.innerHTML = `<img src="art.png" class="project-image">`;
  }


  /* contem*/

    if (type === "dior") {
      display.innerHTML = `<img src="dio.jpg" class="project-image">`;
    }

    if (type === "rara") {
      display.innerHTML = `<img src="dio2.jpg" class="project-image">`;
    }

    if (type === "dio") {
      display.innerHTML = `<img src="dio3.jpg" class="project-image">`;
    }

    if (type === "aww") {
      display.innerHTML = `<img src="award.jpg" class="project-image">`;
    }



  /* RANDOM */

  if (type === "jav") {
    display.innerHTML = `<img src="java.png" class="project-image">`;
  }

  if (type === "sheet") {
    display.innerHTML = `<img src="xampp.png" class="project-image">`;
  }

}

/* SHOW THANK YOU AFTER FORM SUBMIT */

function showThankYou(event){
  event.preventDefault(); // prevent page reload
  document.getElementById("thankYouModal").style.display="flex";
}

/* CLOSE MODAL */

function closeThankYou(){
  document.getElementById("thankYouModal").style.display="none";
}

