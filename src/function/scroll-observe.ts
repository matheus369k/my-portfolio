document.body.addEventListener("load", () => {
    const sections = document.querySelectorAll("section");

    const myObserve = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                console.log(entry.target);
                entry.target.setAttribute("data-animation", "show");
                return;
            }

            console.log(entry.target);
            entry.target.setAttribute("data-animation", "hidden");
        });
    });

    sections.forEach(section => {
        myObserve.observe(section);
    });
});

