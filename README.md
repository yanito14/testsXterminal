# Terminal Test

Practica tests de cualquier tema directamente en la terminal. Genera las preguntas con IA, guárdalas en JSON y ejecútalas sin salir del editor.

---

## ¿Cómo funciona?

El flujo completo es de 3 pasos:

```
1. Generas el JSON con IA  →  2. Lo guardas en /preguntas  →  3. Ejecutas el test
```

---

## Paso 1 — Genera las preguntas con IA

Hay dos prompts disponibles en la raíz del proyecto:

| Archivo | Cuándo usarlo |
|---|---|
| `prompt.txt` | Prompt genérico. La IA elige el enfoque del contenido. |
| `prompt_conPersonalizacionContenido.txt` | Igual pero con un hueco para que **tú especifiques el tema**. |

Copia el contenido del prompt que quieras, pégalo en ChatGPT, Claude o cualquier LLM.

> Si usas `prompt_conPersonalizacionContenido.txt`, busca esta línea y rellénala antes de pegarlo:
> ```
> Las preguntas deben centrarse en: [ESPECIFICA AQUÍ EL TEMA]
> ```

El modelo te devolverá **únicamente un array JSON** listo para usar.

---

## Paso 2 — Guarda el JSON

Pega la respuesta del modelo en un archivo `.json` dentro de la carpeta `preguntas/`:

```
preguntas/
└── mi_examen_tema3.json   ← aquí
```

El formato que debe tener cada pregunta es:

```json
[
  {
    "Pregunta": "Texto de la pregunta",
    "Opciones": [
      ["a", "Primera opción"],
      ["b", "Segunda opción"],
      ["c", "Tercera opción"],
      ["d", "Cuarta opción"]
    ],
    "Respuesta": "b"
  }
]
```

---

## Paso 3 — Apunta al JSON y ejecuta

Abre `tester.js` y cambia el nombre del archivo en la línea 11:

```js
// CAMBIA SOLO EL NOMBRE DEL ARCHIVO
const json = require("./preguntas/mi_examen_tema3.json");
```

Luego instala las dependencias (solo la primera vez):

```bash
npm install
```

Y lanza el test:

```bash
node tester.js
```

---

## Resultado

El programa te va preguntando una a una. Escribe la letra (`a`, `b`, `c` o `d`) y pulsa Enter.

Al terminar verás tu puntuación y tu nota sobre 10:

```
Has acertado: 32 de 40
Tu nota es 8.00/10
```
