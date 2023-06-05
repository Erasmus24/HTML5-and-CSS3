const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// document.addEventListener("mousemove", parallax);
// function parallax(event) {
//   this.querySelectorAll(".about-me__img").forEach((shift) => {
//     const position = shift.getAttribute("image-value");
//     const x = (event.pageX * position) / 210;
//     const y = (event.pageY * position) / 210;

//     shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
//   });
// }

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      document.getElementById("containerLoader").classList.add('hide'); 
  
      setTimeout(function(){ 
        document.getElementById("containerLoader").style.display = 'none';
      }, 1000);
    }
  };


/*
 * typingEffect()
 */
function typingEffect() {
    const contactTexts = ['Sphiwe Erasmus Hadebe', 'A Full Stack Web Developer', 'A Front End Web Developer'];
    const typedtext = document.getElementsByClassName("typedtext")[0];
    let removing = false;
    let idx = char = 0;

    setInterval(() => { // We define the interval of the typing speed

        // If we do not reach the limit, we insert characters in the html
        if (char < contactTexts[idx].length) typedtext.innerHTML += contactTexts[idx][char];

        // 15*150ms = time before starting to remove characters
        if (char == contactTexts[idx].length + 15) removing = true;

        // Removing characters, the last one always
        if (removing) typedtext.innerHTML = typedtext.innerHTML.substring(0, typedtext.innerHTML.length - 1);

        char++; // Next character

        // When there is nothing else to remove
        if (typedtext.innerHTML.length === 0) {

            // If we get to the end of the texts we start over
            if (idx === contactTexts.length - 1) idx = 0
            else idx++;

            char = 0; // Start the next text by the first character
            removing = false; // No more removing characters
        }

    }, 80); // Typing speed, 150 ms

}
typingEffect();
// function shuffleArray(array) {
//     let currentIndex = array.length,
//         temporaryValue, randomIndex;

//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {

//         // Pick a remaining element...
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex -= 1;

//         // And swap it with the current element.
//         temporaryValue = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temporaryValue;
//     }

//     return array;
// }

