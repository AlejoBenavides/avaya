//VENTANA DOS

document.getElementById("dos-extensiones").addEventListener("dblclick", () => {
    document.getElementById("ventana-dos").style.display = "block"
    timeoutID = window.setTimeout(  
        () => {document.getElementById("ventana-dos").style.display = "none"
          }, 500)
})

//VENTANA AVAYA CARGANDO Y AVAYA ACEPTAR

document.getElementById("icono-avaya").addEventListener("dblclick", () => {
    timeoutID = window.setTimeout(
        () => {document.getElementById("avaya-cargando").style.display = "block"
        }, 300)

    timeoutID = window.setTimeout(
        () => {document.getElementById("aceptar-avaya").style.display = "block"
        }, 3000)
})

//VENTANA CAMBIAR CONFIGURACIÓN DE INGRESO DE LA VENTANA ACEPTAR DE AVAYA

document.getElementById("btn-config-avaya").addEventListener("click", () => {
    document.getElementById("contenedor-config-sistema").style.display ="block"
})

//CAMBIO ENTRE PESTAÑAS TELEFONÍA Y AGENTE DE LA VENTANA CAMBIAR CONFIGURACIÓN DE INGRESO

document.getElementById("pestana-tel").addEventListener("click", () => {
    document.getElementById("config-sistema-tel").style.zIndex = 420
    document.getElementById("config-sistema-agent").style.zIndex = 410
})

document.getElementById("pestana-agent").addEventListener("click", () => {
    document.getElementById("config-sistema-agent").style.zIndex = 420
    document.getElementById("config-sistema-tel").style.zIndex = 410
})

//CERRAR VENTANA CAMBIAR CONFIGURACIÓN DE INGRESO CON BOTÓN CERRAR

document.getElementById("btn-cancelar").addEventListener("click", () => {
    document.getElementById("contenedor-config-sistema").style.display ="none"
    document.getElementById("config-sistema-tel").style.zIndex = 420
    document.getElementById("config-sistema-agent").style.zIndex = 410
})

//CERRAR VENTANA CAMBIAR CONFIGURACIÓN DE INGRESO CON BOTÓN CERRAR

document.getElementById("btn-cancelar-ventana-aceptar").addEventListener("click", () => {
    document.getElementById("aceptar-avaya").style.display = "none"
    document.getElementById("avaya-cargando").style.display = "none"
    document.getElementById("contenedor-config-sistema").style.display ="none"
    document.getElementById("config-sistema-tel").style.zIndex = 420
    document.getElementById("config-sistema-agent").style.zIndex = 410
})

//MOSTRAR VENTANA INICIAL DE AVAYA

document.getElementById("btn-aceptar-ventana-aceptar").addEventListener("click", () => {
    document.getElementById("aceptar-avaya").style.display = "none"
    document.getElementById("avaya-cargando").style.display = "none"
    document.getElementById("contenedor-config-sistema").style.display ="none"
    document.getElementById("cerrar-avaya-contactos").style.display ="none"
    document.getElementById("config-sistema-tel").style.zIndex = 420
    document.getElementById("config-sistema-agent").style.zIndex = 410
    timeoutID = window.setTimeout(
        () => {document.getElementById("contenedor-ventana-inicial-avaya").style.display = "block"
        }, 500)
})

document.getElementById("btn-guardar-config-sistema").addEventListener("click", () => {
    document.getElementById("aceptar-avaya").style.display = "none"
    document.getElementById("avaya-cargando").style.display = "none"
    document.getElementById("contenedor-config-sistema").style.display ="none"
    document.getElementById("cerrar-avaya-contactos").style.display ="none"
    document.getElementById("config-sistema-tel").style.zIndex = 420
    document.getElementById("config-sistema-agent").style.zIndex = 410
    timeoutID = window.setTimeout(
        () => {document.getElementById("contenedor-ventana-inicial-avaya").style.display = "block"
        }, 500)
})

//CERRAR VENTANA INICIAL DE AVAYA ------------ NO OLVIDAR OCULTAR TODO ---------------------------------------

document.getElementById("cerrar-avaya").addEventListener("click", () => {
    timeoutID = window.setTimeout(
        () => {
                document.getElementById("contenedor-ventana-inicial-avaya").style.display = "none"
                document.getElementById("input-avaya").value = ""
                document.getElementById("mute-avaya").style.display ="none"
                document.getElementById("menu-opciones-sistema").style.display = "none"
                document.getElementById("contenedor-entro-llamada").style.display = "none"
                document.getElementById("btn-transferir-valor").style.display = "none"
                document.getElementById("btn-hold-on").style.display = "none"
                document.getElementById("transferencia-contactos").style.display = "none"
                document.getElementById("btn-area-transfer1").style.display = "none"
                document.getElementById("btn-area-transfer2").style.display = "none"
                document.getElementById("btn-area-transfer3").style.display = "none"
                document.getElementById("btn-area-transfer4").style.display = "none"
                document.getElementById("cerrar-avaya-contactos").style.display = "none"
                document.getElementById("btn-transferir-valor").style.display = "none"
                document.getElementById("contenedor-opciones-transferencia").style.display = "none"
            }, 400)
})

//MUTE

document.getElementById("mute-off-avaya").addEventListener("click", () => {
    document.getElementById("mute-avaya").style.display ="block"
})

document.getElementById("mute-avaya").addEventListener("click", () => {
    document.getElementById("mute-avaya").style.display ="none"
})

//BOTÓN OPCIONES DESDE LA VENTANA INICIAL DE AVAYA

    //ABRIR Y CERRAR

document.getElementById("btn-opciones-sistema").addEventListener("click", () => {
    let mostrar = document.getElementById("menu-opciones-sistema")
    if (mostrar.style.display == "block") {
        mostrar.style.display = "none"
    }else{
        mostrar.style.display = "block"
    }
})

//OCULTAR VENTANA OPCIONES AL HACER FOCUS EN EL INPUT

//---------------PENDIENTE--------------------------------------------

//MOSTRAR VENTANA PREFERENCIAS DEL AGENTE

document.getElementById("opcion1-configuracion").addEventListener("click", () => {
    document.getElementById("menu-opciones-sistema").style.display = "none"
    document.getElementById("contenedor-controles-audio").style.display = "block"
})

    //CERRAR VENTANA

document.getElementById("cerrar-controles-audio").addEventListener("click", () => {
    document.getElementById("contenedor-controles-audio").style.display = "none"
})

document.getElementById("btn-aceptar-controles-audio").addEventListener("click", () => {
    document.getElementById("contenedor-controles-audio").style.display = "none"
})

document.getElementById("btn-cancelar-controles-audio").addEventListener("click", () => {
    document.getElementById("contenedor-controles-audio").style.display = "none"
})

//MOSTRAR VENTANA CONFIGURACIÓN DEL SISTEMA

document.getElementById("opcion2-configuracion").addEventListener("click", () => {
    document.getElementById("menu-opciones-sistema").style.display = "none"
    document.getElementById("contenedor-config-sistema").style.display = "block"
})

//MENU DE CONFIGURACIÓN VENTANA PRINCIPAL DE AVAYA ------------ NO OLVIDAR OCULTAR TODO ---------------------------------------

    //SALIR

document.getElementById("opcion-salir-configuracion").addEventListener("click", () => {
    timeoutID = window.setTimeout(
        () => {
                document.getElementById("contenedor-ventana-inicial-avaya").style.display = "none"
                document.getElementById("input-avaya").value = ""
                document.getElementById("mute-avaya").style.display ="none"
                document.getElementById("menu-opciones-sistema").style.display = "none"
                document.getElementById("contenedor-entro-llamada").style.display = "none"
                document.getElementById("btn-transferir-valor").style.display = "none"
                document.getElementById("btn-hold-on").style.display = "none"
            }, 400)
})

//LOGUEARSE, ESTADO CONDICIONALMENTE DISPONIBLE ----- EL LOGIN ES EL 10100 ------------------ 

const formInput = document.getElementById("form-input")
formInput.addEventListener("submit", (e) => {
    e.preventDefault()
})

const logueo = document.getElementById("submit-oculto")

logueo.addEventListener("click", () => {
    let input =document.getElementById("input-avaya").value
    if (input == 841010010100 || input == 82 || input == 831 || input == 832 || input == 835 || input == 85 && logueo !== "") {
        document.getElementById("contenedor-entro-llamada").style.display = "block"
    } else {
        alert("RECUERDA: \r Logueo: 84 más dos veces el login más Enter \r Disponible: 82 más Enter \r Break: 381 más Enter \r Training: 832 más Enter \r Pausas activas: 835 más Enter \r Deslogueo: 85 más Enter")    
    }
    document.getElementById("input-avaya").value=""
    document.getElementById("contenedor-opciones-transferencia").style.display ="none"
    document.getElementById("numero-tel").innerHTML = input

    contador_s = 0
    const s =document.getElementById("segundos")
    const cronometro = setInterval( () => {
        if(contador_s == 0){
            contador_s++
        }
        s.innerHTML = "0" + contador_s
        contador_s++
    }, 1000)

    timeoutID = window.setTimeout(
        () => {
        document.getElementById("contenedor-entro-llamada").style.display = "none"
        document.getElementById("btn-transferir-valor").style.display = "none"
        document.getElementById("transferencia-contactos").style.display = "none"
        document.getElementById("contenedor-entro-llamada").style.display = "none"
        document.getElementById("btn-area-transfer1").style.display = "none"
        document.getElementById("btn-area-transfer2").style.display = "none"
        document.getElementById("btn-area-transfer3").style.display = "none"
        document.getElementById("btn-area-transfer4").style.display = "none"
        document.getElementById("btn-transferir-valor").style.display = "none"
        document.getElementById("cerrar-avaya-contactos").style.display = "none"
        document.getElementById("btn-hold-on").style.display = "none"
        document.getElementById("btn-hold").style.display = "block"
        document.getElementById("btn-transferir").style.display = "block"
        document.getElementById("btn-colgar").style.display = "block"
        clearInterval(cronometro)
        document.getElementById("segundos").innerHTML = "00"
            }, 4800)
})

//HOLD, TRANSFERIR Y COLGAR

    //COLGAR

document.getElementById("btn-colgar").addEventListener("click", () => {
    document.getElementById("input-avaya").value=""
    document.getElementById("contenedor-entro-llamada").style.display = "none"
    document.getElementById("btn-transferir-valor").style.display = "none"
    document.getElementById("transferencia-contactos").style.display = "none"
    document.getElementById("btn-area-transfer1").style.display = "none"
    document.getElementById("btn-area-transfer2").style.display = "none"
    document.getElementById("btn-area-transfer3").style.display = "none"
    document.getElementById("btn-area-transfer4").style.display = "none"
    document.getElementById("btn-transferir-valor").style.display = "none"
    document.getElementById("cerrar-avaya-contactos").style.display = "none"
    clearInterval(cronometro)
})

    //TRANSFERIR

document.getElementById("btn-transferir").addEventListener("click", () => {
    let mostrarOcultarMenu = document.getElementById("contenedor-opciones-transferencia")
    if(mostrarOcultarMenu.style.display == "block"){
        mostrarOcultarMenu.style.display = "none"
    }else{
        mostrarOcultarMenu.style.display ="block"
    }
})

document.getElementById("valor").addEventListener("click", () => {
    document.getElementById("contenedor-opciones-transferencia").style.display = "none"
    document.getElementById("input-avaya").focus()
    document.getElementById("btn-transferir-valor").style.display = "block"

})

document.getElementById("btn-transferir-valor").addEventListener("click", () => {
    document.getElementById("btn-transferir-valor").style.display = "none"
    document.getElementById("contenedor-entro-llamada").style.display = "none"
    document.getElementById("input-avaya").value = ""


    document.getElementById("transferencia-contactos").style.display = "none"
    document.getElementById("btn-area-transfer1").style.display = "none"
    document.getElementById("btn-area-transfer2").style.display = "none"
    document.getElementById("btn-area-transfer3").style.display = "none"
    document.getElementById("btn-area-transfer4").style.display = "none"
    document.getElementById("btn-transferir-valor").style.display = "none"
    document.getElementById("cerrar-avaya-contactos").style.display = "none"
})

document.getElementById("btn-area-transfer1").addEventListener("click", () => {
    document.getElementById("transferencia-contactos").style.display = "none"
    document.getElementById("contenedor-entro-llamada").style.display = "none"
    document.getElementById("btn-area-transfer1").style.display = "none"
    document.getElementById("btn-area-transfer2").style.display = "none"
    document.getElementById("btn-area-transfer3").style.display = "none"
    document.getElementById("btn-area-transfer4").style.display = "none"
    document.getElementById("cerrar-avaya-contactos").style.display = "none"
    document.getElementById("btn-transferir-valor").style.display = "none"
})
document.getElementById("btn-area-transfer2").addEventListener("click", () => {
    document.getElementById("transferencia-contactos").style.display = "none"
    document.getElementById("contenedor-entro-llamada").style.display = "none"
    document.getElementById("btn-area-transfer1").style.display = "none"
    document.getElementById("btn-area-transfer2").style.display = "none"
    document.getElementById("btn-area-transfer3").style.display = "none"
    document.getElementById("btn-area-transfer4").style.display = "none"
    document.getElementById("cerrar-avaya-contactos").style.display = "none"
    document.getElementById("btn-transferir-valor").style.display = "none"
})
document.getElementById("btn-area-transfer3").addEventListener("click", () => {
    document.getElementById("transferencia-contactos").style.display = "none"
    document.getElementById("contenedor-entro-llamada").style.display = "none"
    document.getElementById("btn-area-transfer1").style.display = "none"
    document.getElementById("btn-area-transfer2").style.display = "none"
    document.getElementById("btn-area-transfer3").style.display = "none"
    document.getElementById("btn-area-transfer4").style.display = "none"
    document.getElementById("cerrar-avaya-contactos").style.display = "none"
    document.getElementById("btn-transferir-valor").style.display = "none"
})
document.getElementById("btn-area-transfer4").addEventListener("click", () => {
    document.getElementById("transferencia-contactos").style.display = "none"
    document.getElementById("contenedor-entro-llamada").style.display = "none"
    document.getElementById("btn-area-transfer1").style.display = "none"
    document.getElementById("btn-area-transfer2").style.display = "none"
    document.getElementById("btn-area-transfer3").style.display = "none"
    document.getElementById("btn-area-transfer4").style.display = "none"
    document.getElementById("cerrar-avaya-contactos").style.display = "none"
    document.getElementById("btn-transferir-valor").style.display = "none"
})

document.getElementById("contactos").addEventListener("click", () => {
    document.getElementById("contenedor-opciones-transferencia").style.display = "none"
    document.getElementById("transferencia-contactos").style.display = "block"
    document.getElementById("btn-area-transfer1").style.display = "block"
    document.getElementById("btn-area-transfer2").style.display = "block"
    document.getElementById("btn-area-transfer3").style.display = "block"
    document.getElementById("btn-area-transfer4").style.display = "block"
    document.getElementById("cerrar-avaya-contactos").style.display = "block"
    document.getElementById("btn-transferir-valor").style.display = "block"    
})

document.getElementById("cerrar-avaya-contactos").addEventListener("click", () => {
    document.getElementById("contenedor-opciones-transferencia").style.display = "none"
    document.getElementById("transferencia-contactos").style.display = "none"
    document.getElementById("btn-area-transfer1").style.display = "none"
    document.getElementById("btn-area-transfer2").style.display = "none"
    document.getElementById("btn-area-transfer3").style.display = "none"
    document.getElementById("btn-area-transfer4").style.display = "none"
    document.getElementById("cerrar-avaya-contactos").style.display = "none"
    document.getElementById("btn-transferir-valor").style.display = "none"    
})

//HOLD

document.getElementById("btn-hold").addEventListener("click", () => {
    document.getElementById("btn-hold").style.display = "none"
    document.getElementById("btn-transferir").style.display = "none"
    document.getElementById("btn-colgar").style.display = "none"
    document.getElementById("btn-hold-on").style.display = "block"
})

document.getElementById("btn-hold-on").addEventListener("click", () => {
    document.getElementById("btn-hold").style.display = "block"
    document.getElementById("btn-transferir").style.display = "block"
    document.getElementById("btn-colgar").style.display = "block"
    document.getElementById("btn-hold-on").style.display = "none"
})

document.getElementById("contenedor-llamada").addEventListener("dblclick", () => {
    document.getElementById("contenedor-ventana-inicial-avaya").style.display = "block"
    document.getElementById("contenedor-entro-llamada").style.display = "block"
    document.getElementById("numero-tel").innerHTML = "3013906339"
    document.getElementById("cerrar-avaya-contactos").style.display = "none"

})

//PROHIBIDO JUGAR

const juego = document.getElementById("juego")
juego.addEventListener("dblclick", () => {
    document.getElementById("prohibido-jugar").style.display = "flex"
})
