const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Animation
    hamburger.classList.toggle("toggle");}
);

// Get all the buttons
const buttons = document.querySelectorAll('.my-button');

// Add a click event listener to all the buttons
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Remove the "active" class from all buttons
    buttons.forEach(function(b) {
      b.classList.remove('active');
    });
    // Add the "active" class to the clicked button
    this.classList.add('active');
  });
});


document.getElementById("Art_Plus_Code").addEventListener("click", function() {
    let experience_texts_title = document.querySelector(".experience_texts_title");
    let experience_texts_company_title = document.querySelector(".experience_texts_company_title");
    let experience_texts_duration =document.querySelector(".experience_texts_duration");
    let Art_Plus_Code_list = document.getElementById("experience_texts_description_list");
    let Art_Plus_Code_list_items = [
        "I have worked on improving the professional appearance of the company's website and two client websites, which were created using WordPress.",
        "I have completed 5 to 6 projects using Flutter, demonstrating my expertise in this technology.", 
        "I have a track record of successfully analyzing user requirements and developing client-satisfying applications, exemplified by my work on multiple projects.",
        "I have experience in designing and implementing efficient software programs, as well as testing and debugging them to ensure their quality. These skills have allowed me to deliver error-free software to clients."];

    experience_texts_title.innerHTML = "Software Developer ";

    experience_texts_company_title.innerHTML ="@ Art Plus Code";

    experience_texts_duration.innerHTML = "July 2021 - Present";

    if(Art_Plus_Code_list.innerHTML === ""){
        for (var i = 0; i < Art_Plus_Code_list_items.length; i++) {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(Art_Plus_Code_list_items[i]));
            Art_Plus_Code_list.appendChild(li);
        }
    }else{
        let bullets = Art_Plus_Code_list.querySelectorAll("li");
        for (let i = 0; i < bullets.length; i++) {
            // Change the text of the current bullet point element
            bullets[i].innerHTML =Art_Plus_Code_list_items[i];
            
          }
    }
});

document.getElementById("Uplers").addEventListener("click", function() {
    let experience_texts_title = document.querySelector(".experience_texts_title");
    let experience_texts_company_title = document.querySelector(".experience_texts_company_title");
    let experience_texts_duration =document.querySelector(".experience_texts_duration");
    let Uplers_list = document.getElementById("experience_texts_description_list");
    let Uplers_items = [
        "I have designed and developed email templates for a multinational corporation, showcasing my ability to create visually appealing and effective marketing materials.",
        "I have developed landing pages for a multinational corporation, demonstrating my expertise in creating high-converting web pages for marketing campaigns.        ", 
        "Developed and maintained user-facing web applications using HTML, CSS, and JavaScript also, Collaborated with designers to implement and maintain the visual style of web applications",
        "Worked with back-end developers to integrate front-end code with server-side logic & Created responsive and mobile-friendly layouts using CSS frameworks such as Bootstrap",
    ];

    experience_texts_title.innerHTML = "Frontend Developer ";

    experience_texts_company_title.innerHTML ="@ Uplers";

    experience_texts_duration.innerHTML = "July 2020 - August 2021";

    if(Uplers_list.innerHTML === ""){
        for (var i = 0; i < Uplers_items.length; i++) {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(Uplers_items[i]));
            Uplers_list.appendChild(li);
        }
    }else{
        let bullets = Uplers_list.querySelectorAll("li");
        for (let i = 0; i < bullets.length; i++) {
            // Change the text of the current bullet point element
            bullets[i].innerHTML = Uplers_items[i];
          }
    }
});


document.getElementById("H_N_Techno").addEventListener("click", function() {
    let experience_texts_title = document.querySelector(".experience_texts_title");
    let experience_texts_company_title = document.querySelector(".experience_texts_company_title");
    let experience_texts_duration =document.querySelector(".experience_texts_duration");
    let H_N_Techno_list = document.getElementById("experience_texts_description_list");
    let H_N_Techno_items = [
        "I have experience using Java to develop and maintain software applications. I have also participated in user requirements meetings to understand client needs and translate them into proposed application designs",
        "Collaborated with cross-functional teams to identify and prioritize development tasks, Also Communicated with clients and other team members about project status and issues thatarose.",
        "Conducted code reviews to ensure code quality and adherence to best practices and Developed prototypes of new technologies and features for potential incorporation into future products.",
        "Debugged and fixed issues to improve software reliability and Wrote and maintained technical documentation", ];

    experience_texts_title.innerHTML = "Web Developer ";

    experience_texts_company_title.innerHTML ="@ H N Techno";

    experience_texts_duration.innerHTML = "Jun 2018 - August 2019";

    if(H_N_Techno_list.innerHTML === ""){
        for (var i = 0; i < H_N_Techno_items.length; i++) {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(H_N_Techno_items[i]));
            H_N_Techno_list.appendChild(li);
        }
    }else{
        let bullets = H_N_Techno_list.querySelectorAll("li");
        for (let i = 0; i < bullets.length; i++) {
            // Change the text of the current bullet point element
            bullets[i].innerHTML = H_N_Techno_items[i];
          }
    }
});
