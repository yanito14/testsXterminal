/**
 * Este codigo es un tester para poder practicar tests sin hacerlo en chati o notebook 
 * que a veces el resultado de los generados en tarjetas es peor que si le pides todas las preguntas
 * 
 * El prompt para un examen que funcione esta en prompt.txt
*/

const promptSync = require("prompt-sync");

//CAMBIAMOS EL JSON POR EL QUE TOQUE PARA CADA TEST, SOLO CAMBIAR EL NOMBRE
const json = require("./preguntas/test.json");

const prompt = promptSync();

function separarJson(data) {
  let preguntas = [];
  let opciones = [];
  let respuestas = [];

  for (let i = 0; i < data.length; i++) {
    preguntas.push(data[i].Pregunta);
    opciones.push(data[i].Opciones);
    respuestas.push(data[i].Respuesta);
  }

  return { preguntas, opciones, respuestas };
}

function iniciarTest() {
  const { preguntas, opciones, respuestas } = separarJson(json);
  let puntaje = 0;

  for (let i = 0; i < preguntas.length; i++) {
    console.log(`Pregunta ${i + 1}: ${preguntas[i]}`);

    for (let j = 0; j < opciones[i].length; j++) {
      const letra = opciones[i][j][0];
      const texto = opciones[i][j][1];
      console.log(`${letra}. ${texto}`);
    }

    const respuestaUsuario = prompt("Tu respuesta: ");

    if (respuestaUsuario && respuestaUsuario.toUpperCase() === respuestas[i].toUpperCase()) {
      console.log("¡Correcto!");
      puntaje++;
    } else {
      console.log(`Incorrecto. La respuesta correcta es: ${respuestas[i]}`);
    }
    console.log("\n");
  }
  console.log(`Has acertado: ${puntaje} de ${preguntas.length}`);
  console.log(`Tu nota es ${((puntaje / preguntas.length) * 10).toFixed(2)}/10`);
}

iniciarTest();
