const moveCursor = (e) => {
    const trophy = document.querySelector('.trophy');
    const mouseY = e.clientY;
    const mouseX = e.clientX - 24;

    const trophyX = trophy.offsetLeft;
    const trophyY = trophy.offsetTop;

    let rotation = Math.atan2(mouseY - trophyY, mouseX - trophyX) * 180 / Math.PI;

    if (mouseX < trophyX) {
        rotation -= 180; // Draai in de tegenovergestelde richting
    }

    gsap.to(trophy, {
        left: `${mouseX}px`,
        top: `${mouseY}px`,
        rotation: rotation,
        duration: 1,
    });
}
/*----------------------------------------------*/
function lukasvn(action) {
    let section = document.getElementById("lukasvn");
    const trophy = document.querySelector('.trophy');

    if(action == "enter" || action == "enterBack") {
        trophy.style.display = "block";
        section.addEventListener('mousemove', moveCursor);
    } else {
        trophy.style.display = "none";
        window.removeEventListener('mousemove', moveCursor);
    }

    if( ! section.init) {
        section.init = true;
        section.tl

/*----------------------------------------------*/
        .add("makeBall")

            .to("#lukasvn .soccerball span", {
                opacity: 1,
                borderRadius: "50%",
            }, "makeBall")

            .to("#lukasvn .soccerball", {
                borderRadius: "50%",
                boxShadow: "0 0 2rem rgba(255,255,255,0.5)",
                rotation: 360,
            }, "makeBall")

/*----------------------------------------------*/           
        .add("ballDissapear")
            .to("#lukasvn .soccerball", {
                width: "80vh",
                height: "80vh",
                left: "calc(50vw-70vh)",
                top: "10vh",
                opacity: 0,
            }, "ballDissapear")

            .to("#lukasvn .soccerball", {
                width: "40vw", 
                height: "40vw", 
                left: "30vw", 
                top: "40vh",
            }, "solar")

/*----------------------------------------------*/
        .add("speed")
            .to("#lukasvn .soccerball", {
                width: "40vw", 
                height: "40vw", 
                left: "30vw", 
                top: "calc(50vh - 20vw)"
            }, "speed")

/*----------------------------------------------*/
        .add("flag")
            .to("#lukasvn .flag", { 
                x: "110vw", 
                y: "30vh", 
                rotation: 0, 
                ease: "elastic.easeOut"
             },    "flag")
        
        .add("ballComeback")
            .to("#lukasvn .soccerball", {
                width: "40vw",
                height: "40vw",
                left: "30vw",
                top: "calc(50vh - 20vw)",
                opacity: 1,
            }, "ballComeback")

        .add("stadion")
            .to("#lukasvn .stadion", { 
                x: "110vw", 
                y: "30vh", 
                rotation: 0, 
                ease: "elastic.easeOut"
             },    "stadion")
/*----------------------------------------------*/
        .add("reset")
            .to("#lukasvn .soccerball", { 
                width: "20vw", 
                height: "20vw", 
                left: "40vw", 
                top: "calc(50vh - 10vw)", 
                borderRadius: "0",
                opacity: 0,
                ease: "elastic.easeOut"
             }, "reset")

            .to("#lukasvn .soccerball span", { 
                opacity: 0, 
                borderRadius: "0"
             }, "reset")
        ;
    }
}
