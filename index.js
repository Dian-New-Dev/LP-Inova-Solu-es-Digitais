const divsHoveredOver = document.getElementsByClassName('link-divs');

for (let i = 0; i < divsHoveredOver.length; i++) {
    divsHoveredOver[i].addEventListener('mouseenter', function () {
        this.style.backgroundColor = '#0091ff';
        this.style.border = 'none'
    })
}

for (let i = 0; i < divsHoveredOver.length; i++) {
    divsHoveredOver[i].addEventListener('mouseleave', function () {
        this.style.backgroundColor = 'inherit';
        this.style.border = '1px solid white'
    })
}