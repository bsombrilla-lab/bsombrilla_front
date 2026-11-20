/* ==========================================================================
   1. VARIABLES Y FUNCIONES AUXILIARES
   ========================================================================== */

const $ = (selector) => document.querySelector(selector);

const H = (tag, attributes = {}, innerHTML = "") =>
  Object.assign(document.createElement(tag), attributes, { innerHTML });

// En local se usa el puerto 3000. En producción se usa el mismo dominio
// desde el que se sirve el sitio (el servidor también sirve la carpeta front).
// Si el frontend vive en otro dominio, define window.SOMBRILLA_API_URL.

/* ==========================================================================
   2. DATOS DE LA APLICACIÓN
   ========================================================================== */

// Líneas de apoyo
const apoyoData = [
  {
    image: "images/linea-155.svg",
    imageAlt:
      "Logotipo circular de la Línea 155 de orientación a mujeres víctimas de violencia, con el número 155 y un teléfono móvil",
    title: "Línea nacional para orientación a mujeres",
    subtitle: "",
    desc: "Orientación para mujeres víctimas de violencia. Disponible las 24 horas.",
    tels: [["155", "155"]],
  },
  {
    icon: "🚨",
    title: "Línea única de emergencias",
    subtitle: "",
    desc: "Para situaciones de riesgo inmediato o emergencias médicas, policiales o de protección.",
    tels: [["123", "123"]],
  },
  {
    icon: "💬",
    title: "Línea de atención en salud mental",
    subtitle: "",
    desc: "Servicio gratuito de escucha, orientación psicológica y apoyo emocional ante situaciones de crisis o dificultades personales.",
    tels: [["106", "106"]],
  },
  {
    icon: "💜",
    title: "Línea púrpura",
    subtitle: "Atención a mujeres víctimas de violencia",
    desc: "Brinda orientación a mujeres víctimas de violencia sobre sus derechos, mecanismos de protección y rutas de atención.",
    tels: [["018000 112137", "018000112137"]],
    whatsapp: ["WhatsApp +57 300 755 1846", "https://wa.me/573007551846"],
  },
  {
    icon: "⚖️",
    title: "Casas de Justicia",
    subtitle: "",
    desc: "Orientación jurídica y psicosocial gratuita y acceso a servicios de justicia y protección de derechos.",
    tels: [
      ["(601) 377 9595", "6013779595"],
      ["195", "195"],
    ],
  },
  {
    icon: "🏛️",
    title: "Alcaldía de Bogotá",
    subtitle: "",
    desc: "Información sobre programas y servicios de orientación, inclusión social, formación y empleabilidad.",
    tels: [["195", "195"]],
    link: "https://bogota.gov.co/servicios/oportunidades-y-apoyos",
  },
];

// Organizaciones de apoyo
const orgsData = [
  [
    "Casa Libertad",
    "Programa de atención pospenitenciaria en Bogotá que brinda orientación psicosocial, jurídica y laboral.",
    [["(601) 377 9595 ext. 4900 / 4901 / 4902 / 4903", "6013779595"]],
  ],
  [
    "Acción Interna",
    "Acompañamiento psicosocial, asesoría jurídica, formación, emprendimiento y oportunidades de empleo.",
    [["+57 310 260 0134", "+573102600134"]],
  ],
  [
    "Segundas oportunidades",
    "Orientación, formación, asesoría jurídica y oportunidades de empleabilidad.",
    [["+57 310 260 0134", "+573102600134"]],
  ],
  [
    "INPEC",
    "Orientación en salud, educación, acompañamiento psicosocial y asesoría jurídica.",
    [["(601) 234 7474", "6012347474"]],
  ],
  [
    "Corporación Mujeres Libres",
    "Acompañamiento a mujeres privadas y pospenadas y sus familias.",
    [["+57 323 247 1686", "+573232471686"]],
  ],
  [
    "Fundación Retorno a la Libertad",
    "Acompañamiento psicosocial, orientación jurídica, formación y apoyo para la reintegración social y familiar.",
    [
      ["+57 312 547 5550", "+573125475550"],
      ["+57 317 550 5158", "+573175505158"],
    ],
    "https://fundacionretornoalalibertad.org/",
  ],
  [
    "SENA – Agencia Pública de Empleo",
    "Orientación ocupacional, formación, intermediación laboral y apoyo para emprendimiento.",
    [],
    "https://ape.sena.edu.co/",
  ],
  [
    "Alcaldía de Bogotá",
    "Oportunidades y apoyos disponibles en la ciudad.",
    [],
    "https://bogota.gov.co/servicios/oportunidades-y-apoyos",
  ],
];

// Áreas de ocupación
const ocupacionesData = [
  [
    "Trabajo y generación de ingresos",
    "Encontrar o crear una fuente de ingresos y un lugar en el mundo laboral.",
  ],
  [
    "Educación y formación",
    "Estudiar, aprender un oficio o retomar una meta educativa.",
  ],
  [
    "Emprendimiento",
    "Convertir un saber, una habilidad o una idea en un proyecto propio.",
  ],
  [
    "Cuidado de sí misma",
    "Descanso, salud, alimentación y tiempo para una misma.",
  ],
  [
    "Cuidado de otras personas",
    "Hijos, hijas, madres, familiares: cuidar también es una ocupación.",
  ],
  [
    "Reconstrucción de vínculos familiares",
    "Volver a encontrarse y construir nuevas formas de relación.",
  ],
  [
    "Nuevas redes sociales",
    "Amistades, grupos y comunidades donde se comparte y se cuenta con otras.",
  ],
  [
    "Participación comunitaria",
    "Ser parte de espacios del barrio, la localidad o la ciudad.",
  ],
  [
    "Recreación y tiempo libre",
    "Disfrutar, jugar, moverse, crear, salir a pasear.",
  ],
  ["Espiritualidad", "Prácticas y creencias que dan sentido y calma."],
  [
    "Organización de rutinas",
    "Diseñar los días con horarios y hábitos que se ajusten a tu vida.",
  ],
  [
    "Proyectos de vida",
    "Imaginar lo que quieres construir y decidir por dónde empezar.",
  ],
  [
    "Recuperación o construcción de roles",
    "Ser madre, hija, trabajadora, vecina, líder… los roles que elijas.",
  ],
  [
    "Nuevas formas de habitar la comunidad",
    "Moverte, usar servicios y sentirte parte del lugar donde vives.",
  ],
];

// Ruta de acompañamiento
const rutaData = [
  [
    "🗂️",
    "Salir y reorganizarse",
    "Documentación, identificación, orientación inicial y reconocimiento de necesidades inmediatas.",
    [
      "Registraduría Nacional",
      "Secretaría Distrital de Integración Social",
      "Defensoría del Pueblo",
      "Personerías",
      "Secretaría Distrital de la Mujer / Casas de Igualdad de Oportunidades",
    ],
  ],
  [
    "💚",
    "Cuidar la salud",
    "Acceso a servicios de salud física y mental, afiliación y orientación.",
    ["Secretaría Distrital de Salud", "Línea 106"],
  ],
  [
    "🏠",
    "Encontrar estabilidad",
    "Vivienda, alimentación, recursos básicos y condiciones para la vida cotidiana.",
    [
      "Secretaría Distrital de Integración Social",
      "Secretaría Distrital del Hábitat",
      "Banco de Alimentos de Bogotá",
      "ICBF",
      "Manzanas del Cuidado",
    ],
  ],
  [
    "🧵",
    "Formarse y trabajar",
    "Educación, capacitación, empleo, emprendimiento y generación de ingresos.",
    [
      "SENA",
      "Agencia Pública de Empleo",
      "Secretaría Distrital de Desarrollo Económico",
      "Cámara de Comercio de Bogotá",
      "Manzanas del Cuidado",
      "IPES",
    ],
  ],
];

// Preguntas para reflexionar
const preguntasCaminoData = [
  [
    "¿Qué quieres construir?",
    "Puede ser algo grande o pequeño. Tú decides el tamaño.",
  ],
  [
    "¿Qué necesitas hoy?",
    "Hoy, no dentro de un año. Una sola cosa ya es un comienzo.",
  ],
  [
    "¿Qué te gustaría aprender?",
    "Un oficio, un idioma, una herramienta… lo que despierte tu curiosidad.",
  ],
  [
    "¿Qué actividad quieres recuperar o comenzar?",
    "Algo que disfrutabas, o algo que nunca has probado.",
  ],
  [
    "¿Con quién cuentas?",
    "Personas, grupos u organizaciones que ya están en tu camino.",
  ],
  [
    "¿Qué oportunidad estás buscando?",
    "Nombrarla ayuda a reconocerla cuando aparezca.",
  ],
];

// Opciones del formulario de orientación
const opcionesFormulario = [
  "Empleo",
  "Educación",
  "Salud",
  "Orientación jurídica",
  "Vivienda",
  "Emprendimiento",
  "Redes de apoyo",
  "Otro",
];

/* ==========================================================================
   3. RENDERIZADO DINÁMICO DE COMPONENTES
   ========================================================================== */

// Tarjetas de líneas de apoyo
$("#apoyoGrid").append(
  ...apoyoData.map((item) =>
    H(
      "article",
      { className: "card" },
      `
            ${
              item.image
                ? `<img class="line-logo" src="${item.image}" alt="${item.imageAlt}" width="240" height="240" loading="lazy" decoding="async">`
                : `<div class="ico" aria-hidden="true">${item.icon}</div>`
            }
            <h3>${item.title}</h3>
            ${item.subtitle ? `<p><strong>${item.subtitle}</strong></p>` : ""}
            <p>${item.desc}</p>
            <div class="push">
                ${(item.tels || [])
                  .map(
                    ([text, num]) =>
                      `<a class="tel" href="tel:${num}" aria-label="Llamar al ${text}">📞 ${text}</a>`,
                  )
                  .join(" ")}
                ${
                  item.whatsapp
                    ? `<a class="tel whatsapp" href="${item.whatsapp[1]}" target="_blank" rel="noopener" aria-label="Escribir por WhatsApp al ${item.whatsapp[0].replace("WhatsApp ", "")}">💬 ${item.whatsapp[0]}</a>`
                    : ""
                }
                ${
                  item.link
                    ? `
                    <div>
                        <a class="btn sm alt" href="${item.link}" target="_blank" rel="noopener">
                            Más información
                            <span class="sr" hidden>(abre en otra pestaña)</span>
                        </a>
                    </div>
                `
                    : ""
                }
            </div>
        `,
    ),
  ),
);

// Nota sobre la cobertura de las líneas
$("#apoyoGrid").append(
  H(
    "article",
    { className: "card note-card" },
    `
            <img
                class="note-art"
                src="images/apoyo-lineas.webp"
                alt="Ilustración de una mujer con audífonos rosados y los ojos cerrados, rodeada de hojas turquesas y moradas"
                width="1254"
                height="1254"
                loading="lazy"
                decoding="async"
            >
            <div class="note-copy">
                <h3>Nota</h3>
                <p>
                    Estas líneas corresponden a Bogotá. Si estás en otra ciudad,
                    consulta con la Alcaldía o Secretaría correspondiente las rutas
                    de atención disponibles.
                </p>
            </div>
        `,
  ),
);

// Tarjetas de organizaciones
$("#orgGrid").append(
  ...orgsData.map(([title, desc, tels, link]) =>
    H(
      "article",
      { className: "card" },
      `
            <div class="mono" aria-hidden="true">${title[0]}</div>
            <h3>${title}</h3>
            <p>${desc}</p>
            <div class="push">
                ${tels
                  .map(
                    ([text, num]) =>
                      `<a class="tel" href="tel:${num}" aria-label="Llamar al ${text}">📞 ${text}</a><br>`,
                  )
                  .join("")}
                ${
                  link
                    ? `
                    <a class="btn sm alt" href="${link}" target="_blank" rel="noopener"
                       aria-label="Visitar sitio de ${title} (abre en otra pestaña)">
                        Visitar sitio
                    </a>
                `
                    : ""
                }
            </div>
        `,
    ),
  ),
);

// Botones de áreas de ocupación
$("#chips").append(
  ...ocupacionesData.map(([title, desc]) => {
    const chipButton = H(
      "button",
      { className: "chip", type: "button" },
      title,
    );

    chipButton.setAttribute("aria-pressed", "false");

    chipButton.onclick = () => {
      document.querySelectorAll(".chip").forEach((chip) => {
        chip.setAttribute("aria-pressed", "false");
      });

      chipButton.setAttribute("aria-pressed", "true");

      $("#coreT").textContent = title;
      $("#coreP").textContent = desc;
    };

    return chipButton;
  }),
);

// Pasos de la ruta de acompañamiento
$("#rutaL").append(
  ...rutaData.map(([icon, title, desc, resources], index) =>
    H(
      "li",
      { className: "st" },
      `
            <span class="num" aria-hidden="true">${index + 1}</span>

            <div class="card">
                <div aria-hidden="true" style="font-size: 1.6rem">${icon}</div>

                <h3>
                    <span class="sr" style="position: absolute; left: -999px">
                        Estación ${index + 1}:
                    </span>
                    ${title}
                </h3>

                <p>${desc}</p>

                <ul id="r${index}" hidden>
                    ${resources.map((item) => `<li>${item}</li>`).join("")}
                </ul>

                <button
                    class="btn sm alt push"
                    aria-expanded="false"
                    aria-controls="r${index}"
                    data-r="${index}"
                    type="button">
                    Ver recursos
                </button>
            </div>
        `,
    ),
  ),
);

// Preguntas del camino
$("#cam").append(
  ...preguntasCaminoData.map(([question, note]) => {
    const qButton = H(
      "button",
      { className: "q", type: "button" },
      `${question}<small hidden>${note}</small>`,
    );

    qButton.setAttribute("aria-pressed", "false");
    qButton.setAttribute("aria-expanded", "false");

    qButton.onclick = () => {
      const smallText = qButton.querySelector("small");
      const isHidden = smallText.hidden;

      smallText.hidden = !isHidden;

      qButton.setAttribute("aria-expanded", isHidden);
      qButton.setAttribute("aria-pressed", isHidden);
    };

    return qButton;
  }),
);

// Opciones del formulario
$("#opts").append(
  ...opcionesFormulario.map((option) =>
    H(
      "label",
      {},
      `<input type="checkbox" name="b" value="${option}"> ${option}`,
    ),
  ),
);

/* ==========================================================================
   4. MANEJO DE EVENTOS E INTERACTIVIDAD
   ========================================================================== */

// Acordeón de la ruta: mostrar u ocultar recursos
document.querySelectorAll("[data-r]").forEach((btn) => {
  btn.onclick = () => {
    const targetList = $("#r" + btn.dataset.r);
    const isHidden = targetList.hidden;

    targetList.hidden = !isHidden;

    btn.setAttribute("aria-expanded", isHidden);
    btn.textContent = isHidden ? "Ocultar recursos" : "Ver recursos";
  };
});

// Envío del formulario de orientación
$("#f").onsubmit = async (e) => {
  e.preventDefault();

  const elegidas = [...document.querySelectorAll('[name="b"]:checked')].map(
    (x) => x.value,
  );

  const messageValue = $("#m").value.trim();

  if (!elegidas.length && !messageValue) {
    $("#e").textContent =
      "Elige al menos una opción o cuéntanos brevemente qué necesitas, para poder orientarte.";

    $("#m").setAttribute("aria-invalid", "true");
    $("#m").focus();

    return;
  }

  $("#e").textContent = "";
  $("#m").removeAttribute("aria-invalid");

  const boton = $('#f button[type="submit"]');
  boton.disabled = true;

  let mensajeError = "";

  try {
    const respuesta = await fetch(`${API_URL}/api/solicitudes`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: $("#n").value.trim(),
        contacto: $("#c").value.trim(),
        motivos: elegidas,
        mensaje: messageValue,
      }),
    });

    if (!respuesta.ok) {
      const datos = await respuesta.json().catch(() => ({}));

      mensajeError =
        datos.error || "No pudimos enviar tu solicitud. Intenta de nuevo.";
    }
  } catch (x) {
    mensajeError =
      "No hay conexión con el servidor. Intenta de nuevo en unos minutos.";
  }

  if (mensajeError) {
    $("#e").textContent = mensajeError;
    boton.disabled = false;

    return;
  }

  $("#f").style.display = "none";

  const successBox = $("#ok");

  successBox.style.display = "block";
  successBox.focus();
};

// Menú móvil
const burgerBtn = $("#burger");

burgerBtn.onclick = () => {
  const isOpen = $("#mm").classList.toggle("open");

  burgerBtn.setAttribute("aria-expanded", isOpen);
};

// Cerrar el menú móvil al seleccionar un enlace
document.querySelectorAll("#mm a").forEach((link) => {
  link.onclick = () => {
    $("#mm").classList.remove("open");
    burgerBtn.setAttribute("aria-expanded", "false");
  };
});

/* ==========================================================================
   5. ESTADO DE SESIÓN
   ========================================================================== */

// Cambiar los botones del encabezado si hay una sesión guardada
(() => {
  let ses = null;

  try {
    ses = JSON.parse(localStorage.getItem("sombrilla_sesion"));
  } catch (e) {
    ses = null;
  }

  if (!ses) return;

  // Si la sesión venció en el servidor, se limpia la copia local
  fetch(`${API_URL}/api/yo`, { credentials: "include" })
    .then((r) => r.json())
    .then((d) => {
      if (!d.usuaria) {
        try {
          localStorage.removeItem("sombrilla_sesion");
        } catch (x) {
          // El almacenamiento local podría no estar disponible.
        }

        location.reload();
      }
    })
    .catch(() => {
      // Sin conexión: se deja todo como está.
    });

  // Cerrar la sesión (en el servidor y en este navegador)
  const salir = async (e) => {
    e.preventDefault();

    try {
      await fetch(`${API_URL}/api/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch (x) {
      // Aun así se limpia la sesión local.
    }

    try {
      localStorage.removeItem("sombrilla_sesion");
    } catch (x) {
      // El almacenamiento local podría no estar disponible.
    }

    location.reload();
  };

  // Cambiar los enlaces de inicio de sesión por cerrar sesión
  document.querySelectorAll('a[href="login.html"]').forEach((a) => {
    a.textContent = a.classList.contains("btn")
      ? "CERRAR SESIÓN"
      : "Cerrar sesión";

    a.href = "#";
    a.onclick = salir;
  });

  // Ocultar los enlaces de registro
  document.querySelectorAll('a[href="registro.html"]').forEach((a) => {
    a.style.display = "none";
  });

  // Actualizar el enlace para compartir testimonios
  const t = $("#testiCuenta");

  if (t) {
    t.textContent = "COMPARTIR CON MI CUENTA";
    t.href = "testimonio.html";
  }
})();

/* ==========================================================================
   7. TESTIMONIOS PUBLICADOS (SECCIÓN "VOCES")
   ========================================================================== */

// Muestra los testimonios que el equipo aprobó
fetch(`${API_URL}/api/testimonios`)
  .then((r) => r.json())
  .then((lista) => {
    const grid = $("#voces .grid");

    if (!Array.isArray(lista) || !lista.length || !grid) return;

    grid.innerHTML = "";

    grid.append(
      ...lista.map((t) => {
        const card = H(
          "article",
          { className: "card" },
          `
                    <div class="ico" aria-hidden="true">💬</div>
                    <h3></h3>
                    <p class="texto"></p>
                    <p class="meta"></p>
                `,
        );

        const fecha = new Date(t.fecha);

        const mes = isNaN(fecha)
          ? ""
          : fecha.toLocaleDateString("es-CO", {
              month: "long",
              year: "numeric",
            });

        // textContent evita que se ejecute código escrito dentro del testimonio
        card.querySelector("h3").textContent = t.nombre;
        card.querySelector(".texto").textContent = t.texto;
        card.querySelector(".meta").textContent = [t.areas, mes]
          .filter(Boolean)
          .join(" · ");

        return card;
      }),
    );
  })
  .catch(() => {
    // Sin conexión: se dejan las tarjetas "Próximamente".
  });
