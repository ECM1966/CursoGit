// variables function iniciarJuego()
const seleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('boton-reinicio')
const botonMascotaJugador = document.getElementById('boton-mascota')

// function seleccionarMascotaJugador() eliminamos la ya declarada arriba
const seleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')

// function seleccionarMascotaEnemigo()
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

// function combate() {
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

// function crearMensaje(resultado) {
const sectionMensajes = document.getElementById('resultado')
const ataqueDelJugador = document.getElementById('ataque-del-jugador')
const ataqueDelEnemigo = document.getElementById('ataque-del-enemigo')

// function crearMensajeFinal(resultadoFinal) todas sus variables ya declaradas

const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

// creamos una variable global que, a diferencia de las otras, esté fuera de la función ya que vamos a utilizarla en + funciones y si no deberíamos repetir variables
 // las var glob pueden leerse desde la consola, no las de las funciones, solo escribiendo la variable en la consola nos devuelve su valor
let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opciondeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo = []
let botonFuego
let botonAgua
let botonTierra
let botonReiniciar
let botones = []
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida,) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5)

let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5)

let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5)

hipodoge.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌵', id: 'boton-tierra'},
)
capipepo.ataques.push(
    {nombre: '🌵', id: 'boton-tierra'},
    {nombre: '🌵', id: 'boton-tierra'},
    {nombre: '🌵', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
)

ratigueya.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌵', id: 'boton-tierra'},
)

mokepones.push(hipodoge, capipepo, ratigueya)

function iniciarJuego() {
    seleccionarAtaque.style.display = 'none'
    
    sectionReiniciar.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opciondeMokepones = `
            <input type="radio" name="mascota" id=${mokepon.nombre} />
            <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
                <p>${mokepon.nombre}</p>
                <img src=${mokepon.foto} alt="${mokepon.nombre}">
            </label>
        `
    contenedorTarjetas.innerHTML += opciondeMokepones

    inputHipodoge = document.getElementById('Hipodoge')
    inputCapipepo = document.getElementById('Capipepo')
    inputRatigueya = document.getElementById('Ratigueya')

    })
// esta sección tiene un id='Reiniciar' además del id del propio botóm que es el que yo he utilizado
// si cambiamos el id tanto en este display 'none' como en el 'block', funciona igual 
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    // aquí creamos las variables con los botns de los ataques ya que aqui tenenos la logica para la selec de mascota por el jugador
    // estas líneas se han bajado a la función mostrarAtaques ya que en este punto aún no tenemos creadas las variables y nos da un error NULL

}

function seleccionarMascotaJugador() {
    seleccionarAtaque.style.display = 'flex'
    seleccionarMascota.style.display = 'none'

    if(inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if(inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if(inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else {
        alert('¡No has seleccionado ninguna mascota!')
    }

    extraerAtaques(mascotaJugador)

    // invocamos esta funct aquí, no antes de que el jugador haya elegido su mascota, debe ser después
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

     botonFuego = document.getElementById('boton-fuego')
     botonAgua = document.getElementById('boton-agua')
     botonTierra = document.getElementById('boton-tierra')
     botonReiniciar = document.getElementById('boton-reinicio')
     botones = document.querySelectorAll('.BAtaque')

     

     //comento por ser innecesarios y duplicar la función secuenciaAtaque
     //botonFuego.addEventListener('click', ataqueFuego)
     //botonAgua.addEventListener('click', ataqueAgua)
     //botonTierra.addEventListener('click', ataqueTierra)

     botonReiniciar.addEventListener('click', reiniciarJuego)
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#3795BD'
            } else if (e.target.textContent === '💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#3795BD'
            } else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#3795BD'
            }
            ataqueAleatorioEnemigo()
        })
    })
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0, mokepones.length -1)

        spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
        ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
        ataquesMokeponEnemigo.sort(function() {
            return Math.random() - 0.5
        })
        console.log(ataquesMokeponEnemigo)

        secuenciaAtaque()
}

// vamos a comentar estas funciones por ser innecesarias tras la creación de la función secuenciaAtaque del video 56
//function ataqueFuego() {
    //ataqueJugador = 'FUEGO'
    //ataqueAleatorioEnemigo()
//function ataqueAgua() {
    //ataqueJugador = 'AGUA'
    //ataqueAleatorioEnemigo()
//function ataqueTierra() {
    //ataqueJugador = 'TIERRA'
    //ataqueAleatorioEnemigo()

function ataqueAleatorioEnemigo() {
       let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1)

    if (ataqueAleatorio == 0 || ataqueAleatorio ==1) {
        ataqueEnemigo.push('FUEGO')
        console.log(ataqueEnemigo)
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('AGUA')
        console.log(ataqueEnemigo)
    } else {
        ataqueEnemigo.push('TIERRA')
        console.log(ataqueEnemigo)
    } 
    combate()
    }
        
// estas líneas se has sustituido por la nueva función que no es automatizar ni es aleatoria pero bueno
    //if (ataqueAleatorio == 1) {
        //ataqueEnemigo'FUEGO'
    //} else if (ataqueAleatorio == 2) {
        //ataqueEnemigo = 'AGUA'
    //} else {
        //ataqueEnemigo = 'TIERRA'
    //}



function combate() {
    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("¡EMPATE!")
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("¡GANASTE!")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("¡GANASTE!")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("¡GANASTE!")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("¡PERDISTE!")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
     }

     revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0)
    crearMensajeFinal(' FELICIDADES! Ganaste 😊')
    else if (vidasJugador == 0)
    crearMensajeFinal(' Lo siento, has perdido!😭 ')
}

function crearMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')
     
    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
        sectionMensajes.innerHTML = resultadoFinal
        
        botonFuego.disabled = true
        botonAgua.disabled = true
        botonTierra.disabled = true

        sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
        location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)