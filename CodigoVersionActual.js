//Interactividad con el acordeon
document.querySelectorAll('.accordion_button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('accordion_button--active');

        if (button.classList.contains('accordion_button--active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
        } else {
            accordionContent.style.maxHeight = 0;
        }
    })
})

//Funciones cuadrado
console.group("Cuadrado")
function perimetroCuadrado(lado) {
    return lado * 4
}

function areaCuadrado(lado) {
    return lado * lado
}

function volumenCuadrado(lado) {
    return lado * lado * lado
}
console.groupEnd()


//Funciones rectangulos
console.group("Rectangulo")
function perimetroRectangulo(largo, alto) {
    return (largo * 2) + (alto * 2)
}

function areaRectangulo(largo, alto) {
    return largo * alto
}

function volumenRectangulo(largo, alto, ancho) {
    return largo * alto * ancho
}
console.groupEnd()


//Funciones Triangulo Equilatero
console.group("Triangulo Equilatero")
function perimetroTrianguloE(lado) {
    return lado * 3
}

function areaTringuloE(lado, altura) {
    return (lado * altura) / 2
}

function volumenPiramideCuadrada(lado, altura) {
    if (lado > 0) {
        let base = lado * lado
        let volumen = (base * altura) / 3
        return volumen
    }
}
console.groupEnd()


//Funciones Triangulo Rectangulo
console.group("Triangulo Rectangulo")
function perimetroTrianguloR(cateto1, cateto2, hipotenusa) {
    if (hipotenusa === undefined) {
        return Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2))
    } else if (cateto1 === undefined) {
        return Math.sqrt(Math.pow(hipotenusa, 2) - Math.pow(cateto2, 2))
    } else if (cateto2 === undefined) {
        return Math.sqrt(Math.pow(hipotenusa, 2) - Math.pow(cateto1, 2))
    } else{
        return cateto1+cateto2+hipotenusa
    }
}

function areaTrianguloR(cateto1, altura) {
    return (cateto1 * altura) / 2
}

function volumenTrianguloR(cateto1, altura, ancho) {
    return (cateto1 * altura * ancho) / 2
}
console.groupEnd()


//Funciones circulo
console.group("Circulo")
const PI = Math.PI;

function diametroCirculo(radio) {
    return radio * 2
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return diametro * PI
}

function areaCirculo(radio) {
    return PI * (radio * radio)
}

function volumenEsfera(radio) {
    let ab = Math.pow(radio, 3)
    return (4 * PI * ab) / 3
}
console.groupEnd()


//Funciones rombo
console.group("Rombo")
function perimetroRombo(lado) {
    return lado * 4
}

function areaRombo(diagonalMenor, diagonalMayor, lado) {
    if (diagonalMayor === undefined) {
        let cateto1 = Math.sqrt(Math.pow(lado, 2) - Math.pow((diagonalMenor / 2), 2))
        return (diagonalMenor * (cateto1 * 2)) / 2
    } else if (diagonalMenor === undefined) {
        let cateto2 = Math.sqrt(Math.pow(lado, 2) - Math.pow((diagonalMayor / 2), 2))
        return (diagonalMayor * (cateto2 * 2)) / 2
    } else if (lado === undefined) {
        return (diagonalMayor * diagonalMenor) / 2
    }else{
        return (diagonalMayor*diagonalMenor)/2
    }
}
console.groupEnd()


//Funciones Trapecio
console.group("Trapecio")
function perimetroTrapecio(altura, baseMayor, baseMenor) {
    let esquina = (baseMayor - baseMenor) / 2
    let lado = Math.sqrt(Math.pow(esquina, 2) + Math.pow)(altura, 2)
    return baseMayor + baseMenor + (lado * 2)
}

function areaTrapecio(altura, baseMayor, baseMenor) {
    return altura * baseMayor * baseMenor
}
console.groupEnd()


//Funciones Paralelogramo
console.group("Paralelogramo")
function perimetroParalelogramo(lateral, base) {
    return (lateral * 2) + (base * 2)
}
function areaParalelogramo(base, altura) {
    return base * altura
}
console.groupEnd()


//Funciones Hexagono o Pentagono
console.group("Pentagono o Hexagono ")
function perimetroPH(lados, arista) {
    return arista * lados
}

function areaPH(apotema, perimetro) {
    return (perimetro(perimetroPH(lados,arista)) * apotema) / 2
}
console.groupEnd()


//Cilindro
console.group("Cilindro")
function volumenCilindro(radio, altura) {
    let areaBase = Math.pow(radio, 2) * PI
    return areaBase * altura
}
console.groupEnd()

//Cono
console.group("Cono")
function volumenCono(radio, altura) {
    let areaBase = Math.pow(radio, 2) * PI
    return (areaBase * altura) / 3

}
console.groupEnd()


//Piramide de base triangular
console.group("Piramide base triangular")
function volumenPiramideT(arista, altura) {
    if (arista > 0) {
        let alturaBase = Math.sqrt(Math.pow(arista, 2) - Math.pow((arista / 2), 2))
        let areaBase = (alturaBase * arista) / 2
        let volumen = (areaBase * altura) / 3
        return volumen
    }

}
console.groupEnd()




//ATRAPA DATOS DE HTML EN FUNCIONES DE JAVASCRIPT PARA EL CUADRADO

function calcularPerimetroCuadrado() {
    const input = document.getElementById("CuadradoP").value
    const perimetro = perimetroCuadrado(input)
    document.getElementById("cuadrado_Perimetro").innerHTML = perimetro + "cm";
}

function calcularAreaCuadrado() {
    const input = document.getElementById("CuadradoP").value
    const area = areaCuadrado(input)
    document.getElementById("cuadrado_Area").innerHTML = area + "cm2";
}

function calcularVolumenCuadrado(){
    const input = document.getElementById("CuadradoP").value
    const volumen = volumenCuadrado (input)
    document.getElementById("cuadrado_Volumen").innerHTML = volumen + "cm3"
}


//ATRAPA DATOS DE HTML EN FUNCIONES DE JAVASCRIPT PARA EL CUADRADO

