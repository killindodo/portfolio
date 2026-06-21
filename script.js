document.addEventListener("DOMContentLoaded", () => {
    
    /* -------------------------------------------
       1. SCROLL-DRIVEN PROGRESS METER LOGIC
       ------------------------------------------- */
    const progressBars = document.querySelectorAll('.progress-circle');

    const observerOptions = {
        root: null, 
        threshold: 0.1 
    };

    const animateSkills = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const percentage = element.getAttribute('data-percent');
                element.style.setProperty('--skill-width', `${percentage}%`);
                observer.unobserve(element);
            }
        });
    };

    const observer = new IntersectionObserver(animateSkills, observerOptions);
    progressBars.forEach(bar => observer.observe(bar));

    /* -------------------------------------------
       2. HERO TYPING TAGLINE LOGIC
       ------------------------------------------- */
    const phrases = [
        "Aspiring Data Engineer.",
        "Frontend Developer.",
        "Problem Solver."
    ];
    
    const textTarget = document.getElementById("typing-text");
    let phraseIndex = 0;
    let characterIndex = 0;
    let isDeleting = false;
    let dynamicSpeed = 100;

    function runTypingLoop() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            // Cut text back character by character
            textTarget.textContent = currentPhrase.substring(0, characterIndex - 1);
            characterIndex--;
            dynamicSpeed = 40; // Deletes faster than typing
        } else {
            // Add next character
            textTarget.textContent = currentPhrase.substring(0, characterIndex + 1);
            characterIndex++;
            dynamicSpeed = 100;
        }

        // State machine logic switches
        if (!isDeleting && characterIndex === currentPhrase.length) {
            dynamicSpeed = 2000; // Rest at full word display
            isDeleting = true;
        } else if (isDeleting && characterIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length; // Jump to next phrase array entry smoothly
            dynamicSpeed = 400; // Small delay before typing next word
        }

        setTimeout(runTypingLoop, dynamicSpeed);
    }

    // Initialize the typing machine execution loop
    if(textTarget) runTypingLoop();
});