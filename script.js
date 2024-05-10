const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes)

checkBoxes();

// we need to add a function to tell where or when do we need them to start coming...

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4


    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
             box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}                                                   