document.addEventListener("DOMContentLoaded", function () {
    // Gestion du cube
    const cube = document.getElementById("cube");
    let currentFace = 0;
    const faces = ['front', 'right', 'back', 'left', 'top', 'bottom'];

    cube.addEventListener("click", function () {
        currentFace = (currentFace + 1) % faces.length;
        
        let transformValue = "";
        switch (faces[currentFace]) {
            case "front":
                transformValue = "rotateX(0deg) rotateY(0deg)";
                break;
            case "back":
                transformValue = "rotateX(0deg) rotateY(180deg)";
                break;
            case "left":
                transformValue = "rotateX(0deg) rotateY(-90deg)";
                break;
            case "right":
                transformValue = "rotateX(0deg) rotateY(90deg)";
                break;
            case "top":
                transformValue = "rotateX(-90deg) rotateY(0deg)";
                break;
            case "bottom":
                transformValue = "rotateX(90deg) rotateY(0deg)";
                break;
        }
        cube.style.transform = transformValue;
    });

    // Observer pour l'animation de l'élément `.all`
    document.addEventListener("DOMContentLoaded", function () {
        const element = document.querySelector(".all");
    
        if (element) {
            const observer = new IntersectionObserver(function (entries, observer) {
                entries.forEach(entry => {
                    console.log(entry.isIntersecting); // Ajout d'un log pour vérifier si l'élément est visible
                    if (entry.isIntersecting) {
                        // L'élément devient visible, ajoute la classe pour l'animation
                        element.classList.add("animate");
                        observer.unobserve(entry.target); // Arrêter l'observation après le premier passage
                    }
                });
            }, {
                threshold: 0.5 // Déclenche lorsque 50% de l'élément est visible
            });
    
            // Observer l'élément `.all`
            observer.observe(element);
        }
    });
    
    
});
