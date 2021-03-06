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
console.group("Funciones para el calculo de la geometria de las figuras")
function perimetroCuadrado(lado) {
    return lado * 4
}

function areaCuadrado(lado) {
    return lado * lado
}

function volumenCuadrado(lado) {
    return lado * lado * lado
}

function perimetroRectangulo(largo, alto) {
    return (largo * 2) + (alto * 2)
}

function areaRectangulo(largo, alto) {
    return largo * alto
}

function volumenRectangulo(largo, alto, ancho) {
    return largo * alto * ancho
}

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


function perimetroTrianguloR(cateto1, cateto2, hipotenusa) {
    if (cateto1 == 0) {
        cateto1 = Math.sqrt(Math.pow(hipotenusa, 2) - Math.pow(cateto2, 2))
    } if (cateto2 == 0) {
        cateto2 = Math.sqrt(Math.pow(hipotenusa, 2) - Math.pow(cateto1, 2))
    } if (hipotenusa == 0) {
        hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2))
    }
    let c1 = parseInt(cateto1)
    let c2 = parseInt(cateto2)
    let h1 = parseInt(hipotenusa)
    return c1 + c2 + h1
}

function areaTrianguloR(cateto1, cateto2, hipotenusa) {
    if (cateto1 == 0) {
        cateto1 = Math.sqrt(Math.pow(hipotenusa, 2) - Math.pow(cateto2, 2))
    } else if (cateto2 == 0) {
        cateto2 = Math.sqrt(Math.pow(hipotenusa, 2) - Math.pow(cateto1, 2))
    }
    return (cateto1 * cateto2) / 2
}


function volumenTrianguloR(cateto1, cateto2, ancho) {
    return (cateto1 * cateto2 * ancho) / 2
}

let PI1 = Math.PI;
const PI = PI1.toFixed(2)

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
    let ab1 = (4 * PI * ab) / 3
    return ab1.toFixed(2)
}

function perimetroRombo(lado) {
    return lado * 4
}

function areaRombo(lado, diagonalMenor, diagonalMayor) {
    let area = (diagonalMenor * diagonalMayor) / 2
    return area

}

function perimetroTrapecio(altura, baseMenor, baseMayor) {

    let esquina = (baseMayor - baseMenor) / 2
    let lado = Math.sqrt(Math.pow(esquina, 2) + Math.pow(altura, 2))
    let perimetroT = parseInt(baseMayor) + parseInt(baseMenor) + parseInt((lado * 2))
    return perimetroT
}

function areaTrapecio(altura, baseMayor, baseMenor) {
    let areaT = (baseMayor + baseMenor) / 2 * altura
    return areaT
}

function perimetroParalelogramo(base, lateral) {
    return (lateral * 2) + (base * 2)
}
function areaParalelogramo(base, altura) {
    return base * altura
}

function perimetroPH(lados, arista) {
    return arista * lados
}

function areaPH(apotema, perimetro) {
    return (perimetro * apotema) / 2
}

function volumenCilindro(radio, altura) {
    let areaBase = Math.pow(radio, 2) * PI
    return areaBase * altura
}

function volumenCono(radio, altura) {
    let areaBase = Math.pow(radio, 2) * PI
    return (areaBase * altura) / 3

}

function volumenPiramideT(arista, altura) {
    if (arista > 0) {
        let alturaBase = Math.sqrt(Math.pow(arista, 2) - Math.pow((arista / 2), 2))
        let areaBase = (alturaBase * arista) / 2
        let volumen = (areaBase * altura) / 3
        return volumen
    }

}
console.groupEnd()

console.group("Funciones que toman los datos de HTML")

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

function calcularVolumenCuadrado() {
    const input = document.getElementById("CuadradoP").value
    const volumen = volumenCuadrado(input)
    document.getElementById("cuadrado_Volumen").innerHTML = volumen + "cm3"
}


function calcularPerimetroRectagulo() {
    const largo = document.getElementById("RectanguloLargo").value
    const alto = document.getElementById("RectanguloAlto").value
    const perimetro = perimetroRectangulo(largo, alto)

    document.getElementById("rectangulo_Perimetro").innerHTML = perimetro + "cm"
}

function calcularAreaRectagulo() {
    const largo = document.getElementById("RectanguloLargo").value
    const alto = document.getElementById("RectanguloAlto").value
    const area = areaRectangulo(alto, largo)

    document.getElementById("rectangulo_Area").innerHTML = area + "cm2"
}

function calcularVolumenRectagulo() {
    const largo = document.getElementById("RectanguloLargo").value
    const alto = document.getElementById("RectanguloAlto").value
    const ancho = document.getElementById("RectanguloAncho").value

    const volumen = volumenRectangulo(largo, alto, ancho)

    document.getElementById("rectangulo_Volumen").innerHTML = volumen + "cm3"
}


function calcularPerimetroTrianguloE() {
    const lado = document.getElementById("TrianguloLadoE").value
    const perimetro = perimetroTrianguloE(lado)

    document.getElementById("triangulo_PerimetroE").innerHTML = perimetro + "cm"
}

function calcularAreaTrianguloE() {
    const lado = document.getElementById("TrianguloLadoE").value
    const altura = document.getElementById("TrianguloAlturaE").value
    const area = areaTringuloE(lado, altura)

    document.getElementById("triangulo_AreaE").innerHTML = area + "cm2"
}

function calcularVolumenTrianguloE() {
    const lado = document.getElementById("TrianguloLadoE").value
    const altura = document.getElementById("TrianguloAlturaE").value
    const volumen = volumenPiramideCuadrada(lado, altura)

    document.getElementById("triangulo_VolumenE").innerHTML = volumen + "cm3"
}


function calcularPerimetroTrianguloR() { 
    const cateto_1 = document.getElementById("TrianguloCateto1").value
    const cateto_2 = document.getElementById("TrianguloCateto2").value
    const hipotenusa1 = document.getElementById("TrianguloHipotenusa").value
    const perimetro = perimetroTrianguloR(cateto_1, cateto_2, hipotenusa1)
    debugger

    document.getElementById("triangulo_PerimetroR").innerHTML = perimetro + "cm"
}

function calcularAreaTrianguloR() {
    const cateto_1 = document.getElementById("TrianguloCateto1").value
    const cateto_2 = document.getElementById("TrianguloCateto2").value
    const hipotenusa_ = document.getElementById("TrianguloHipotenusa").value
    const area = areaTrianguloR(cateto_1, cateto_2, hipotenusa_)

    document.getElementById("triangulo_AreaR").innerHTML = area + "cm2"
}

function calcularVolumenTrianguloR() {
    const cateto_1 = document.getElementById("TrianguloCateto1").value
    debugger
    const cateto_2 = document.getElementById("TrianguloCateto2").value
    debugger
    const ancho = document.getElementById("TrianguloAncho").value
    const volumen = volumenTrianguloR(cateto_1, cateto_2, ancho)

    document.getElementById("triangulo_VolumenR").innerHTML = volumen + "cm3"

}

function calcularPerimetroCirculo() {
    const radio = document.getElementById("radioCirculo").value
    const perimetro = perimetroCirculo(radio)

    document.getElementById("circulo_Perimetro").innerHTML = perimetro.toFixed(2) + "cm"
}

function calcularAreaCirculo() {
    const radio = document.getElementById("radioCirculo").value
    const area = areaCirculo(radio)

    document.getElementById("circulo_Area").innerHTML = area.toFixed(2) + "cm2"
}

function calcularVolumenCirculo() {
    const radio = document.getElementById("radioCirculo").value
    const volumen = volumenEsfera(radio)

    document.getElementById("circulo_Volumen").innerHTML = volumen + "cm3"
}

function calcularPerimetroRombo() {
    const lado = document.getElementById("Rombo_Lado").value
    const perimetro = perimetroRombo(lado)

    document.getElementById("Rombo_Perimetro").innerHTML = perimetro.toFixed(2) + "cm"
}
function calcularAreaRombo() {
    const lado = document.getElementById("Rombo_Lado").value
    const diagonalMenor = document.getElementById("Rombo_diagonalMenor").value
    const diagonalMayor = document.getElementById("Rombo_diagonalMayor").value
    const area = areaRombo(lado, diagonalMenor, diagonalMayor)

    document.getElementById("Rombo_Area").innerHTML = area + "cm2"


}


function calcularPerimetroTrapecio() {
    const altura = document.getElementById("trapecio_Altura").value
    const baseMenor = document.getElementById("trapecio_baseMenor").value
    const baseMayor = document.getElementById("trapecio_baseMayor").value
    const perimetro = perimetroTrapecio(altura, baseMenor, baseMayor)

    document.getElementById("trapecio_Perimetro").innerHTML = perimetro + "cm"
}

function calcularAreaTrapecio() {
    const altura = document.getElementById("trapecio_Altura").value
    const baseMenor = document.getElementById("trapecio_baseMenor").value
    const baseMayor = document.getElementById("trapecio_baseMayor").value
    const area = areaTrapecio(altura, baseMenor, baseMayor)

    document.getElementById("trapecio_Area").innerHTML = area + "cm2"
}


function calcularPerimetroParalelogramo() {
    const base = document.getElementById("paralelogramo_base").value
    const lateral = document.getElementById("paralelogramo_lateral").value
    const perimetro = perimetroParalelogramo(base, lateral)

    document.getElementById("paralelogramo_Perimetro").innerHTML = perimetro + "cm"
}

function calcularAreaParalelogramo() {
    const base = document.getElementById("paralelogramo_base").value
    const altura = document.getElementById("paralelogramo_Altura").value
    const area = areaParalelogramo(base, altura)

    document.getElementById("paralelogramo_Area").innerHTML = area + "cm2"
}


function calcularPerimetroHexaPenta() {
    const lados = document.getElementById("hexaPenta_Lados").value
    const arista = document.getElementById("hexaPenta_Arista").value
    const perimetro = perimetroPH(lados, arista)

    document.getElementById("hexaPenta_Perimetro").innerHTML = perimetro + "cm"
}

function calcularAreaHexaPenta() {
    const apotema = document.getElementById("hexaPenta_Apotema").value
    const lados = document.getElementById("hexaPenta_Lados").value
    const arista = document.getElementById("hexaPenta_Arista").value
    const perimetro = perimetroPH(lados, arista)
    const area = areaPH(apotema, perimetro)

    document.getElementById("hexaPenta_Area").innerHTML = area + "cm2"
}

function calcularVolumenCilindro() {
    const radio = document.getElementById("cilindro_Radio").value
    const altura = document.getElementById("cilindro_Altura").value
    const volumen = volumenCilindro(radio, altura)

    document.getElementById("cilindro_Volumen").innerHTML = volumen + "cm3"
}

function calcularVolumenCono() {
    const radio = document.getElementById("cono_Radio").value
    const altura = document.getElementById("cono_Altura").value
    const volumen = volumenCono(radio, altura)

    document.getElementById("cono_Volumen").innerHTML = volumen + "cm3"

}

function calcularVolumenPiramideT() {
    const arista = document.getElementById("piramideT_Arista").value
    const altura = document.getElementById("piramideT_Altura").value
    const vol = volumenPiramideT(arista, altura)
    const volumen = vol.toFixed(2)

    document.getElementById("piramideT_Volumen").innerHTML = volumen + "cm3"
}
console.groupEnd()