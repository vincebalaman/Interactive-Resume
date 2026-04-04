$(document).ready(function () {

    $('#theme-toggle').on('click', function() {
    $('.container').toggleClass('dark-theme');
    });

    var name = prompt("Please enter your name: ", "Guest")
    var guestName = document.getElementById("guest")
    guestName.textContent = "Welcome " + name + "!";

    var coll = document.getElementsByClassName("nav-button");

    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            } 
        });
    }

    var coll = document.getElementsByClassName("more");

    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            } 
        });
    }

    const dropdown = document.getElementById("project-filter");
    const projects = document.querySelectorAll(".project-item");

    dropdown.addEventListener("change", function() {
        // "this.value" gets the 'value' attribute of the selected <option>
        const selectedTech = this.value;

        console.log("User selected:", selectedTech);

        // Simple "Query" Logic: Hide or Show elements based on the selection
        projects.forEach(project => {
            const projectTech = project.getAttribute("data-tech");

            if (selectedTech === "all" || projectTech === selectedTech) {
                project.style.display = "block"; // Show it
            } else {
                project.style.display = "none";  // Hide it
            }
        });
    });

    $('.hform').on('submit', function(event) {
        event.preventDefault();

        const emailProvided = $('#user-email').val();

        if (emailProvided) {
            const link = "https://mail.google.com/mail/?view=cm&to=balaman.vincejaliel@gmail.com&su=Hiring Offer&body=This is an offer email to...&bcc=" + emailProvided;
            prompt("Copy the link below to proceed:", link);
            $(this).trigger("reset");
        }
    });
});