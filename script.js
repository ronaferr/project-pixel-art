window.onload = function paintBlack(){
    let corInicial = localStorage.getItem('first option');

}
// função para criar pixels
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

// deu errado
/* function mudaMedidas() {
    // onde
    
    let pixel = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixel.length, i += 1;) {
        if (pixel[i].style.width === '50px') {
            pixel[i].style.width = '40px'
            pixel[i].style.height = '40px';
        }
        
        
    }

}
mudaMedidas(); */

// função para deixar paleta preta como selecionada
function initialSelected() {
    const classSelected = 'color selected';
    let color = document.querySelectorAll('.color');
    for (let i = 0; i < color.length; i += 1) {
        if (color[i].style.backgroundColor === 'black') {
            color[i].className = classSelected;
            const primaCor = color[i];
            localStorage.setItem('first option', 'primaCor');
        }
    }
}
initialSelected();

// função para clicar paleta e deixar selecionado
/* function selectedColor()  */
    let color = document.getElementsByClassName('color');
    let selcionado = 'color selected';
    let naoselecionado = 'color';
    let u;

    //passar pelas cores
    for (let i = 0; i < color.length; i += 1) {
        for (let j = 0; j < color.length; j += 1) {

        
    // fazer um event com a paleta
    color[i].addEventListener('click', function(){
        if (color[i] !== color[j]) {
            color[i].className = selcionado;
            color[j].className = naoselecionado;
            u = color[i].style.backgroundColor;
        } else {
            color[i].className = selcionado;
            color[j].className = selcionado;
            u = color[i].style.backgroundColor;
        } 
    })
    }
}
    

let pixelsBox = document.getElementsByClassName('pixel');
// passa pelos pixels
for (let i = 0; i < pixelsBox.length; i += 1) {
    // cria um evento para os pixels
    pixelsBox[i].addEventListener('click', function(){   
        // teste
        for (let j = 0; j < color.length; j += 1) {
        if (color[0].className === 'color selected') {
            pixelsBox[i].style.backgroundColor = 'black';
        }  else {
    pixelsBox[i].style.backgroundColor = u;
        }
    }
})
}

function buttonClear() {
    //onde?
    let mae = document.querySelector('#but');
    let botao = document.createElement('button');
    let idbut = 'clear-board';
    botao.id = idbut;
    botao.innerHTML = 'Limpar';
    botao.style.display = 'block';
    mae.appendChild(botao);

    let pixel = document.getElementsByClassName('pixel');

    botao.addEventListener('click', function(){
        for(let i = 0; i < pixel.length; i += 1) {
            pixel[i].style.backgroundColor = 'white';
        }
    })
}
buttonClear();

/*  function paintPixel()
    let colorSelected = document.getElementsByClassName('selected');
    let pixelsBox = document.getElementsByClassName('pixel')
    console.log(colorSelected);
    let backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
    console.log(backgroundColor);

    for (let i = 0; i < pixelsBox.length; i += 1) {
        pixelsBox[i].addEventListener('click', function(){
            pixelsBox[i].style.backgroundColor = backgroundColor;
        })
    } */