/* =========================================================
   DATOS DEL CUESTIONARIO
   ========================================================= */

// Opción múltiple: [pregunta, "opciones separadas por |", índice correcto (0=a)]
const mc = [
  ["¿Qué porcentaje de la energía química del alimento convierte el cuerpo de un maratonista en movimiento eficiente?", "100%|75%|50%|25%", 3],
  ["La energía potencial que posee un cuerpo en reposo está determinada principalmente por:", "Su volumen y velocidad|Su posición y su masa|Su temperatura y presión|La presencia de enzimas", 1],
  ["Una reacción en la que los productos contienen más energía que los reactantes y requiere aporte externo de energía se denomina:", "Exergónica|Endergónica|Exotérmica|Espontánea", 1],
  ["¿Qué establece la Primera Ley de la Termodinámica?", "La entropía del universo siempre disminuye.|La energía no se crea ni se destruye, solo se transforma.|Toda reacción química libera calor al entorno.|Las células vivas funcionan con un 100% de eficiencia energética.", 1],
  ["La medida de la tendencia a la pérdida de complejidad, orden y energía útil en un sistema se conoce como:", "Entalpía|Entropía|Energía libre|Anabolismo", 1],
  ["¿Cuántas combinaciones posibles de codones existen en el código genético?", "20|61|64|3", 2],
  ["¿Cuál de los siguientes codones funciona como el codón de inicio para la traducción?", "UAA|UGA|UAG|AUG", 3],
  ["La propiedad del código genético que indica que un mismo aminoácido puede ser codificado por más de un codón se denomina:", "Universalidad|Solapamiento|Degeneración o redundancia|Ambigüedad", 2],
  ["El ATP está compuesto químicamente por:", "Una base nitrogenada adenina, una azúcar ribosa y tres grupos fosfato.|Guanina, desoxirribosa y dos grupos fosfato.|Una cadena de tres aminoácidos y un ácido graso.|Nicotinamida, ribosa y un grupo fosfato.", 0],
  ["Las enzimas aumentan la velocidad de las reacciones químicas celulares debido a que:", "Incrementan la temperatura interna de la célula.|Disminuyen la energía de activación necesaria para la reacción.|Aumentan la entropía dentro de la célula.|Consumen gran cantidad de ATP en cada ciclo.", 1],
  ["¿Qué nombre recibe el compuesto resultante de la interacción directa entre una enzima y su sustrato?", "Complejo producto-enzima (PE)|Complejo enzima-sustrato (ES)|Inhibidor competitivo|Cofactor catalítico", 1],
  ["¿Cuál es la función principal de la enzima luciferasa en la luz biológica que producen las luciérnagas?", "Degradar carbohidratos en presencia de agua.|Catalizar una reacción que modifica la luciferina usando la energía del ATP para emitir luz.|Romper enlaces covalentes por medio de la hidrólisis.|Sintetizar glucosa a partir de dióxido de carbono.", 1],
  ["¿Cómo afecta el aumento de la temperatura a la actividad enzimática antes de alcanzar los 60 °C?", "Reduce los choques entre las moléculas.|Incrementa la energía cinética, favoreciendo los choques y la velocidad de reacción.|Desnaturaliza la enzima de forma permanente.|Disminuye la cantidad de sustrato libre en el medio.", 1],
  ["¿Cuál es el valor aproximado del pH óptimo para la mayoría de las enzimas humanas?", "Entre 1 y 2|Entre 4 y 5|Entre 7 y 7.5|Mayor a 10", 2],
  ["¿Qué ocurre en la inhibición enzimática competitiva?", "El inhibidor se une al sitio activo impidiendo la unión del sustrato de forma reversible.|El inhibidor altera irreversiblemente la forma de la enzima uniéndose a un sitio distinto.|El inhibidor destruye la estructura primaria del sustrato.|El efecto no se puede contrarrestar aumentando la concentración de sustrato.", 0],
  ["Los compuestos de arsénico, los insecticidas y los iones de mercurio (Hg+2) son ejemplos de:", "Inhibidores reversibles competitivos|Coenzimas activadoras|Inhibidores irreversibles (venenos)|Sustratos de alta afinidad", 2],
  ["¿Cómo se define el anabolismo en las células?", "Reacciones de degradación que liberan energía.|Reacciones endergónicas de síntesis de moléculas complejas a partir de componentes sencillos.|Ruptura de glucosa sin consumo de ATP.|Liberación de energía térmica por medio de motores moleculares.", 1],
  ["La ecuación química global de la oxidación metabólica de la glucosa es:", "C6H12O6+6O2→6CO2+6H2O+energía|6CO2+6H2O→C6H12O6+6O2|C6H12O6→2 alcohol+2CO2|Ácido pirúvico+NADH→Ácido láctico+NAD+", 0],
  ["¿Cuál es la ganancia neta de moléculas de ATP obtenidas por cada molécula de glucosa al finalizar la glucólisis?", "4 ATP|2 ATP|36 ATP|1 ATP", 1],
  ["¿Dónde tiene lugar el ciclo de Krebs en las células eucariotas?", "En la membrana tilacoide|En el citosol|En la matriz de la mitocondria|En el estroma del cloroplasto", 2],
  ["Durante la fermentación alcohólica, ¿cuáles son los productos finales de desecho generados por las levaduras?", "Ácido láctico y oxígeno|Alcohol etílico (etanol) y dióxido de carbono (CO2)|Ácido pirúvico y agua|Glucosa y ATP", 1],
  ["¿Qué acumulación metabólica en los músculos causa ardor y dolor durante el ejercicio físico intenso?", "Ácido cítrico|Etanol|Ácido láctico|Acetil-CoA", 2],
  ["¿Cuál es la estructura fotosintética interna rodeada por el estroma y agrupada en granas?", "Mitocondria|Tilacoides|Ribosomas|Cristas mitocondriales", 1],
  ["¿Qué evento ocurre de forma directa durante la fase luminosa (Fase I) de la fotosíntesis?", "La fijación de dióxido de carbono en el ciclo de Calvin.|La ruptura de la molécula de agua (fotólisis del agua) mediante energía solar.|La fermentación láctica de azúcares.|La formación directa de piruvato.", 1],
  ["¿En qué parte del cloroplasto se lleva a cabo el Ciclo de Calvin (Fase II)?", "En el estroma|En la membrana externa|En el interior del espacio tilacoidal|En la matriz celular", 0]
];

// Verdadero o Falso: [afirmación, respuesta correcta]
const vf1 = [
  ["Casi el 75% de la energía residual en el ejercicio de un atleta se disipa en forma de calor.", "V"],
  ["La energía luminosa del sol se convierte en energía química durante el proceso de fotosíntesis.", "V"],
  ["Las reacciones exergónicas absorben energía del entorno para poder llevarse a cabo.", "F"],
  ["Las moléculas portadoras de energía como el ATP funcionan de manera similar a pilas recargables dentro de la célula.", "V"],
  ["Según la segunda ley de la termodinámica, los procesos de conversión de energía en el cuerpo humano pueden ser 100% eficientes.", "F"],
  ["El código genético es ambiguo porque un solo codón puede codificar varios aminoácidos diferentes.", "F"],
  ["Los codones UAA, UAG y UGA son codones de parada (stop) que señalan el final de la traducción.", "V"],
  ["El ARN de transferencia (ARNt) lleva el anticodón y transporta el aminoácido correspondiente al ribosoma.", "V"],
  ["El catabolismo es la fase metabólica de síntesis de moléculas complejas que requiere un gasto de energía.", "F"],
  ["El sitio activo es la zona de la enzima especializada donde se une el sustrato para llevar a cabo la reacción.", "V"]
];

// Completar: [texto con ___ , "respuesta|otra respuesta válida"]
const fb1 = [
  ["La energía ___ se produce a consecuencia del movimiento de un cuerpo o de sus moléculas.", "cinética"],
  ["El conjunto de reacciones químicas enzimáticas que permiten a los organismos crecer, reproducirse, mantenerse y responder a estímulos se denomina ___.", "metabolismo"],
  ["Las moléculas orgánicas básicas (proteínas, carbohidratos, lípidos y ácidos nucleicos) están compuestas principalmente por el grupo de elementos conocido como ___.", "CHONPS"],
  ["La secuencia de tres bases en el ARNm que codifica para un aminoácido específico se llama ___.", "codón"],
  ["En la nomenclatura estándar de aminoácidos, la alanina se representa con el código de tres letras Ala y con el código de una sola letra ___.", "A"],
  ["Durante la traducción en eucariotas, el primer aminoácido incorporado en la cadena polipeptídica siempre es la ___.", "metionina"],
  ["El paso de NAD+ a NADH implica una reacción de ___ mediante la ganancia de electrones e hidrógeno.", "reducción"],
  ["La fase del metabolismo que consiste en la degradación de moléculas complejas para obtener energía se conoce como ___.", "catabolismo"],
  ["Las enzimas se clasifican según el comité EC en ___ clases principales de acuerdo al tipo de reacción que catalizan.", "seis|6"],
  ["Los biocatalizadores de naturaleza proteica que aceleran las reacciones químicas metabólicas se llaman ___.", "enzimas"]
];

// Relación de columnas: s = código de la primera letra (65 = A, 70 = F)
const mt1 = [
  { s: 65, a: ["Energía Química", "Fotosíntesis", "Entropía", "Fonones", "Reacción Exergónica"], b: [
    ["Partículas cuánticas responsables de la transferencia de calor mediante vibraciones en redes cristalinas.", "D"],
    ["Proceso que convierte la energía luminosa en energía química almacenada en glucosa.", "B"],
    ["Energía almacenada en los enlaces químicos de moléculas como carbohidratos y grasas.", "A"],
    ["Grado de desorden y aleatoriedad de un sistema.", "C"],
    ["Reacción química que libera energía libre al entorno (ej. combustión o catabolismo).", "E"]
  ]},
  { s: 70, a: ["Oxidorreductasas", "Transferasas", "Hidrolasas", "Liasas", "Isomerasas", "Ligasas"], b: [
    ["Catalizan la ruptura de enlaces mediante la adición de una molécula de agua (hidrólisis).", "H"],
    ["Catalizan la unión de dos moléculas acoplada a la degradación de ATP.", "K"],
    ["Catalizan reacciones de oxidación y reducción (transferencia de electrones).", "F"],
    ["Transfieren grupos funcionales (como un grupo fosfato) de una molécula a otra.", "G"],
    ["Catalizan el ordenamiento intramolecular de átomos para formar un isómero.", "J"],
    ["Catalizan el rompimiento de enlaces dobles o la adición de grupos a dobles enlaces sin hidrólisis.", "I"]
  ]}
];

const vf2 = [
  ["Las reacciones catabólicas requieren un gasto neto de energía para construir moléculas complejas.", "F"],
  ["El complejo enzima-producto (EP) se disocia liberando el producto y dejando la enzima libre para volver a actuar.", "V"],
  ["En la etapa C de saturación enzimática, agregar más cantidad de sustrato aumenta indefinidamente la velocidad de la reacción.", "F"],
  ["La pepsina es una enzima del estómago cuyo pH óptimo se sitúa en torno a un valor muy ácido de 2.", "V"],
  ["Un inhibidor no competitivo se une de manera exclusiva al sitio activo de la enzima compitiendo directamente con el sustrato.", "F"],
  ["La glucólisis es un proceso anaeróbico que se lleva a cabo en dos etapas consecutivas.", "V"],
  ["Durante el paso del ácido pirúvico a Acetil-CoA en la mitocondria, se libera dióxido de carbono (CO2) y se produce NADH.", "V"],
  ["Las plantas, algas y cianobacterias son consideradas organismos fotoautótrofos.", "V"],
  ["Durante la fotofosforilación, el electrón reemplazado en la clorofila del fotosistema II proviene de la escisión del agua.", "V"],
  ["La fermentación es un proceso aerobio que genera mayor cantidad de ATP que la respiración celular completa.", "F"]
];

const fb2 = [
  ["El conjunto de procesos por el cual las enzimas catalizan las reacciones se denomina ___.", "catálisis enzimática"],
  ["En el código del Comité Internacional de Nomenclatura Enzimática (EC), el código 1.1.1.1 corresponde a la enzima ___.", "alcohol deshidrogenasa"],
  ["La disciplina que estudia la velocidad de las reacciones catalizadas y los factores que la modifican se conoce como ___.", "cinética enzimática"],
  ["Las dos bases de datos biológicas especializadas en la nomenclatura de enzimas citadas en la literatura son ExplorEnz, ENZYME e ___.", "BRENDA"],
  ["La fase de la respiración celular que significa “descomponer glucosa” se denomina ___.", "glucólisis"],
  ["Durante el ciclo de Krebs, el ácido pirúvico transformado se combina con la coenzima A para producir el compuesto reactivo de entrada llamado ___.", "acetil-CoA"],
  ["La coenzima reducida que acepta electrones de alta energía en la glucólisis y el ciclo de Krebs para transportarlos se llama ___.", "NAD+|NADH"],
  ["El pigmento verde capaz de captar la energía luminosa en los organismos fotosintéticos es la ___.", "clorofila"],
  ["El proceso de síntesis de ATP mediado por el gradiente de electrones e hidrógenos impulsado por luz recibe el nombre de ___.", "fotofosforilación"],
  ["Las eubacterias utilizadas para elaborar productos alimenticios como yogur y queso realizan el tipo de fermentación denominada ___.", "fermentación láctica"]
];

const mt2 = [
  { s: 65, a: ["BRENDA", "Lactasa", "Hexoquinasa", "Pepsina", "M-CSA"], b: [
    ["Enzima que cataliza la degradación de la glucosa en la glucólisis.", "C"],
    ["Base de datos sobre función, parámetros cinéticos e interacción enzima-ligando.", "A"],
    ["Enzima encargada de desglosar la lactosa en la digestión.", "B"],
    ["Enzima digestiva estomacal que actúa en un medio altamente ácido.", "D"],
    ["Base de datos con información sobre mecanismos de reacción paso a paso.", "E"]
  ]},
  { s: 70, a: ["Glucólisis", "Ciclo de Krebs", "Ciclo de Calvin", "Fermentación Láctica", "Fase Luminosa"], b: [
    ["Ocurre en el estroma del cloroplasto y utiliza ATP y NADPH para sintetizar azúcares.", "H"],
    ["Ruptura anaeróbica inicial de la glucosa en dos moléculas de piruvato.", "F"],
    ["Ocurre en la matriz mitocondrial y oxida acetil-CoA liberando CO2, NADH y FADH2.", "G"],
    ["Proceso fotosintético donde se absorbe luz, se rompe el agua y se libera O2.", "J"],
    ["Ocurre en el citosol celular al agotarse el oxígeno durante el esfuerzo muscular.", "I"]
  ]}
];

// [Título, tipo, datos]
const SECCIONES = [
  ["Parte 1 · Opción múltiple", "mc", mc],
  ["Parte 2 · Verdadero o Falso", "vf", vf1],
  ["Parte 3 · Términos e incompletos", "fb", fb1],
  ["Parte 4 · Relación de columnas", "mt", mt1],
  ["II · Verdadero o Falso", "vf", vf2],
  ["III · Complementación", "fb", fb2],
  ["IV · Relación / Pareamiento", "mt", mt2]
];

/* =========================================================
   LÓGICA
   ========================================================= */
const $ = id => document.getElementById(id);
let actual = 0;
let resultados = SECCIONES.map(() => ({}));

// Quita acentos, espacios y símbolos para comparar respuestas escritas
const limpiar = s => s.toLowerCase().normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");

const total = j => SECCIONES[j][1] === "mt"
  ? SECCIONES[j][2].reduce((n, b) => n + b.b.length, 0)
  : SECCIONES[j][2].length;

const contestadas = j => Object.keys(resultados[j]).length;
const aciertos = j => Object.values(resultados[j]).filter(Boolean).length;

function actualizarBarra() {
  let t = 0, c = 0, a = 0;
  SECCIONES.forEach((_, j) => { t += total(j); c += contestadas(j); a += aciertos(j); });
  $("prog").style.width = (c / t * 100) + "%";
  $("progtxt").textContent = c
    ? `Llevas ${c} de ${t} contestadas · ${a} correctas ✅`
    : "Aún no has contestado nada. ¡Tú puedes! 💪";
}

function dibujarTabs() {
  $("tabs").innerHTML = SECCIONES.map((s, j) =>
    `<button class="${j === actual ? "on" : ""}" onclick="mostrar(${j})">${s[0].split(" · ")[0]} · ${aciertos(j)}/${total(j)}</button>`
  ).join("");
  actualizarBarra();
}

function revisarFin() {
  const fin = $("fin");
  if (!fin) return;
  if (contestadas(actual) === total(actual)) {
    const a = aciertos(actual), t = total(actual);
    fin.textContent = a === t
      ? `🎉 ¡Perfecto! ${a}/${t} correctas`
      : `✨ Sección terminada: ${a}/${t} correctas. ¡Repásala y vuelve a intentarlo!`;
  } else fin.textContent = "";
}

function mostrar(j) {
  actual = j;
  const [titulo, tipo, datos] = SECCIONES[j];
  let h = `<h2>${titulo}</h2>`;

  if (tipo === "mc") datos.forEach((q, i) => {
    h += `<div class="q"><p><span class="num">${i + 1}</span>${q[0]}</p>` +
      q[1].split("|").map((o, x) =>
        `<button class="opt" onclick="elegir(${i},${x},this)"><span class="k">${"abcd"[x]}</span><span>${o}</span></button>`
      ).join("") + `</div>`;
  });

  if (tipo === "vf") datos.forEach((q, i) => {
    h += `<div class="q"><p><span class="num">${i + 1}</span>( <span class="par"></span> ) ${q[0]}</p>
      <div class="vf-btns">
        <button class="vf" onclick="vf(${i},'V',this)">V · Verdadero</button>
        <button class="vf" onclick="vf(${i},'F',this)">F · Falso</button>
      </div><div class="msg"></div></div>`;
  });

  if (tipo === "fb") datos.forEach((q, i) => {
    const p = q[0].split("___");
    h += `<div class="q"><p><span class="num">${i + 1}</span>${p[0]}<input onchange="completar(${i},this)" autocomplete="off" placeholder="escribe aquí">${p[1]}</p><div class="msg"></div></div>`;
  });

  if (tipo === "mt") datos.forEach((b, bi) => {
    h += `<div class="q"><ul class="lista">` +
      b.a.map((x, i) => `<li><b>${String.fromCharCode(b.s + i)}.</b> ${x}</li>`).join("") +
      `</ul>` +
      b.b.map((x, i) =>
        `<div class="fila">( <input class="l" maxlength="1" oninput="relacionar(${bi},${i},this)"> ) ${x[0]}</div>`
      ).join("") + `</div>`;
  });

  h += `<div class="fin" id="fin"></div>
        <button class="reset" onclick="resultados[${j}]={};mostrar(${j})">↻ Reiniciar esta sección</button>`;
  $("body").innerHTML = h;
  dibujarTabs();
  window.scrollTo(0, 0);
}

function elegir(i, x, btn) {
  const card = btn.parentNode;
  if (card.dataset.listo) return;
  card.dataset.listo = 1;
  const correcta = SECCIONES[actual][2][i][2];
  const ok = x === correcta;
  const opts = card.querySelectorAll(".opt");
  opts.forEach(o => o.classList.add("locked"));
  btn.classList.add(ok ? "ok" : "bad");
  opts[correcta].classList.add("ok");
  resultados[actual][i] = ok;
  dibujarTabs(); revisarFin();
}

function vf(i, v, btn) {
  const card = btn.closest(".q");
  if (card.dataset.listo) return;
  card.dataset.listo = 1;
  const correcta = SECCIONES[actual][2][i][1];
  const ok = v === correcta;
  card.querySelector(".par").textContent = v;
  btn.classList.add(ok ? "ok" : "bad");
  const msg = card.querySelector(".msg");
  msg.textContent = ok ? "✔ ¡Correcto!" : "✘ La respuesta es " + correcta;
  msg.className = "msg " + (ok ? "ok" : "bad");
  resultados[actual][i] = ok;
  dibujarTabs(); revisarFin();
}

function completar(i, input) {
  const valor = input.value.trim();
  if (!valor) return;
  const validas = SECCIONES[actual][2][i][1].split("|");
  const ok = validas.some(a => limpiar(a) === limpiar(valor));
  input.className = ok ? "ok" : "bad";
  const msg = input.closest(".q").querySelector(".msg");
  msg.textContent = ok ? "✔ ¡Correcto!" : "✘ Respuesta: " + validas[0];
  msg.className = "msg " + (ok ? "ok" : "bad");
  resultados[actual][i] = ok;
  dibujarTabs(); revisarFin();
}

function relacionar(bi, i, input) {
  const v = input.value.toUpperCase();
  input.value = v;
  if (!v) return;
  const ok = v === SECCIONES[actual][2][bi].b[i][1];
  input.className = "l " + (ok ? "ok" : "bad");
  resultados[actual][bi + "." + i] = ok;
  dibujarTabs(); revisarFin();
}

function resetAll() {
  resultados = SECCIONES.map(() => ({}));
  mostrar(0);
}

mostrar(0);