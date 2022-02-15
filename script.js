function createPixels() {
    // onde?
    let linhas = document.getElementsByClassName('line');
    // customizar
    for (let i = 0; i < linhas.length; i += 1) {
        for (let j = 1; j <= 5; j += 1) {
            let pixel = document.createElement('div');
            pixel.className = 'pixel';
            pixel.style.width = '40px';
            pixel.style.height = '40px';
            pixel.style.border = '1px solid black';
            pixel.style.display = 'inline-block';
            pixel.style.backgroundColor = 'white';
            linhas[i].appendChild(pixel);
        }
    }  
}
createPixels();

/* function mudaMedidas() {
    // onde
    
    let pixel = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixel.length, i += 1;) {
        if (pixel[i].style.width = '50px') {
            pixel[i].style.width = '40px'
            pixel[i].style.height = '40px';
        }
        
        
    }

}
mudaMedidas(); */