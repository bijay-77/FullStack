    // ---------------------------------------
    // NAVIGATION: Smooth Scroll + Highlight
    // ---------------------------------------
    const navItems = document.querySelectorAll(".navitem li");

    navItems.forEach(item => {
        item.addEventListener("click", () => {
            const targetId = item.getAttribute("data-target");
            const section = document.getElementById(targetId);

            if (section) {
                section.scrollIntoView({ behavior: "smooth" });

                // Update active class
                navItems.forEach(i => i.classList.remove("isselected"));
                item.classList.add("isselected");
            } else {
                console.error(`Section '${targetId}' not found.`);
            }
        });
    });

    // ---------------------------------------
    // BUTTONS: Scroll to About & Projects
    // ---------------------------------------
    document.getElementById("aboutBtn")?.addEventListener("click", () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("projectsBtn")?.addEventListener("click", () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    });

    // ---------------------------------------
    // PROJECT HOVER EFFECT (Simple Animation)
    // ---------------------------------------
    const projectTitles = document.querySelectorAll(".project-container div");

    projectTitles.forEach(title => {
        title.addEventListener("mouseenter", () => {
            title.style.opacity = "0.6";
            title.style.transition = "0.3s";
        });

        title.addEventListener("mouseleave", () => {
            title.style.opacity = "1";
        });
    });

    // ---------------------------------------
    // CONTACT FORM VALIDATION + ERROR HANDLING
    // ---------------------------------------
    const form = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");

    form?.addEventListener("submit", event => {
        event.preventDefault(); // stop refresh

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        try {
            if (!name || !email || !message) {
                throw "All fields are required!";
            }

            if (!email.includes("@") || !email.includes(".")) {
                throw "Invalid email format!";
            }

            formStatus.style.color = "green";
            formStatus.textContent = "Message sent successfully!";
            form.reset();

        } catch (error) {
            formStatus.style.color = "red";
            formStatus.textContent = error;
            console.error("Form Error:", error);
        }
    });

    // ---------------------------------------
    // VIDEO EVENTS
    // ---------------------------------------
    const video = document.getElementById("introVideo");

    video?.addEventListener("play", () => {
        console.log("Video is playing...");
    });

    video?.addEventListener("pause", () => {
        console.log("Video paused.");
    });

    video?.addEventListener("ended", () => {
        alert("Thanks for watching my introduction video!");
    });
