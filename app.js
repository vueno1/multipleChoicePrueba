//creo una funcion verificarRepuestas para el formulario 
function verificarRespuestas () {

    //variables 
    let total = 5 //total de preguntas = 5
    let puntos = 0 // total de puntos, incializa en 0
    let myForm = document.forms ["quizForm"] // el formulario se guarda en la variable myForm
    let respuestas = ["a", "b", "c", "a", "b"] /*array con las respuestas correctas*/
    //indice [0, 1, 2, 3, 4]

    //-------------------------------------------------------------------------------------------------------

    //con el ciclo "for" hacemos el conteo de i y lo usamos para validar respuestas. 
    // INICIO = i = inicializa en 1
    //CONDICION = i itera si el valor de i es (<=) a 5
    //FINAL = si cumple, va a ir sumando de a uno (i++)
    for (let i = 1; i<=total; i++) {

        //↓SENTENCIA↓//

        //si cualquiera de las preguntas <myForm["p"+i]> no tiene valor (null), o si estan vacios ("")
        if (myForm["p"+ i].value === null || myForm["p"+ i].value === "") {

            //mensaje de alerta
            alert ("por favor, responder la pregunta" + i)

            //retorna false para terminar con la iteracion del ciclo "for"
            return false

        } else {
            //p1 → respuesta 1-1 = indice 0
            //p2 → respuesta 2-1 = indice 1
            //p3 → respuesta 3-1 = indice 2, etc etc...
            if (myForm ["p"+ i ].value === respuestas[i - 1]){
                //si se cumple, sumo 1 punto a la variable "puntos"
                puntos++
            }
        }
    }

    //guardo el div de resultados en un variable y lo uso para imprimir. 
    let resultado = document.getElementById ("resultado")
    //imprimo resultados obtenidos 
    resultado.innerHTML = '<h3>Obtuviste <span>'+ puntos+'</span> de <span>'+ total +' puntos </span> </h3>'
        
    return false 
}