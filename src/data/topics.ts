import { siteMeta, type Locale } from "./site";

export type TopicSection = {
  id?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  cards?: Array<{ title: string; body: string }>;
  body?: string[];
};

export type TopicContent = {
  slug: string;
  canonicalPath: string;
  title: string;
  description: string;
  hero: {
    eyebrow: string;
    headline: string;
    summary: string;
  };
  intro: string;
  sections: TopicSection[];
  faq: {
    title: string;
    intro: string;
    groups: Array<{
      category: string;
      items: Array<{ question: string; answer: string }>;
    }>;
  };
};

export const topicSlugs = [
  "como-llegar",
  "que-hacer-en-merlo",
  "tirolesa-precios-horarios",
  "fotos",
] as const;

export type TopicSlug = (typeof topicSlugs)[number];

const lastVerified = `Los precios y horarios de la tirolesa no han sido confirmados con el operador. Consulta directamente la disponibilidad y las condiciones antes de viajar.`;

export const topicBySlug: Record<TopicSlug, TopicContent> = {
  "como-llegar": {
    slug: "como-llegar",
    canonicalPath: "/como-llegar/",
    title: "Cómo llegar al Mirador del Sol en Merlo | Ruta 5 y mapa",
    description:
      "Cómo llegar a Tirolesa Mirador del Sol en Villa de Merlo, San Luis: salida por Ruta 5 (Camino al Filo), distancia y tiempo desde el centro, dónde estacionar y opciones sin auto.",
    hero: {
      eyebrow: "Acceso y ubicación",
      headline: "Cómo llegar al Mirador del Sol en Villa de Merlo",
      summary:
        "El Mirador del Sol está sobre la Ruta 5 (Camino al Filo), a unos 8–10 km del centro de Villa de Merlo. Se llega en auto propio, remís o excursión; la subida es de curvas cerradas y ganancia de altura constante.",
    },
    intro:
      "La manera más común de llegar es en vehículo propio desde Villa de Merlo por la Ruta 5. A continuación gib datos prácticos para organizar el viaje sin sorpresas.",
    sections: [
      {
        id: "desde-merlo",
        eyebrow: "Ruta sugerida",
        title: "Desde el centro de Villa de Merlo",
        intro:
          "Tomá la Ruta 5 en dirección al Filo Serrano. La ruta está pavimentada en los primeros tramos y se vuelve más angosta y sinuosa a medida que gana altura. El Mirador del Sol queda a mitad de camino, antes de llegar a la cresta.",
        body: [
          `Distancia aproximada: ${siteMeta.cityFull} centro → Mirador del Sol, unos 8–10 km.`,
          "Tiempo de viaje: 25–35 minutos en auto, dependiendo del tránsito y las curvas.",
          "Altura: el mirador se encuentra cerca de los 1.470 m, por encima de los 800–900 m del casco urbano.",
        ],
      },
      {
        id: "en-auto",
        eyebrow: "En auto propio",
        title: "Conducción y precauciones",
        cards: [
          {
            title: "Curvas y altura",
            body:
              "La Ruta 5 asciende con curvas cerradas y cambios de pendiente. Reducí la velocidad, usá las marchas bajas en las bajadas y cedé el paso en los puntos estrechos.",
          },
          {
            title: "Clima de montaña",
            body:
              "La niebla y el viento pueden aparecer de golpe. Si la visibilidad cae, manejá con precaución y considerá postergar la subida.",
          },
          {
            title: "Combustible y carga",
            body:
              "Cargá combustible y batería en Villa de Merlo antes de subir: no hay estaciones de servicio en la zona alta.",
          },
        ],
      },
      {
        id: "estacionamiento",
        eyebrow: "Estacionamiento",
        title: "Dónde dejar el auto",
        intro:
          "El Mirador del Sol cuenta con un área de estacionamiento abierta y sin pavimentar junto a la zona de mirador y la base de la tirolesa.",
        body: [
          "Estacioná en lugar amplio, frenos puestos y fuera del paso de otros vehículos.",
          "En temporada alta y fines de semana el espacio se reduce por la tarde; id con tiempo.",
          "Abrí con cuidado las puertas: el viento de cresta puede ser fuerte.",
        ],
      },
      {
        id: "sin-auto",
        eyebrow: "Sin auto",
        title: "Opciones si no tenés vehículo",
        cards: [
          {
            title: "Remís o taxi",
            body:
              "Desde Villa de Merlo podés contratar un remís o taxi para la subida y el regreso. Conviene acordar el retorno antes de partir.",
          },
          {
            title: "Excursiones",
            body:
              "Varias agencias de Merlo incluyen el Camino al Filo y el Mirador del Sol en recorridos de día. Consultá en el centro o en el portal de turismo local.",
          },
          {
            title: "Transporte público",
            body:
              "No hay una línea regular que llegue directo al mirador; las combinaciones dependen de la temporada. Confirmá opciones actualizadas en la oficina de turismo.",
          },
        ],
      },
      {
        id: "coordenadas",
        eyebrow: "Punto exacto",
        title: "Coordenadas y mapa",
        intro: `Podés pegar estas coordenadas en tu navegador o app de mapas para llegar directo.`,
        body: [
          `Coordenadas: ${siteMeta.latitude}, ${siteMeta.longitude}`,
          `Plus Code: ${siteMeta.plusCode}`,
          `Dirección: ${siteMeta.address}`,
        ],
      },
    ],
    faq: {
      title: "Preguntas frecuentes sobre cómo llegar",
      intro:
        "Resolvemos las dudas más comunes para planificar el acceso al Mirador del Sol.",
      groups: [
        {
          category: "Acceso",
          items: [
            {
              question: "¿Se llega en auto particular al Mirador del Sol?",
              answer:
                "Sí. La opción más directa es en auto propio por la Ruta 5 (Camino al Filo) desde Villa de Merlo, unos 8–10 km y 25–35 minutos de viaje.",
            },
            {
              question: "¿La Ruta 5 está pavimentada?",
              answer:
                "Los tramos bajos están pavimentados, pero la ruta se estrecha y serpentea al ganar altura. No es una autopista: requiere conducción precavida.",
            },
            {
              question: "¿Hay transporte público hasta el mirador?",
              answer:
                "No hay una línea regular que llegue directo al mirador. Sin auto, lo más práctico es remís, taxi o una excursión desde Villa de Merlo.",
            },
            {
              question: "¿Cuánto tarda la subida desde el centro?",
              answer:
                "Entre 25 y 35 minutos en auto, dependiendo del tránsito y de la cantidad de curvas. En temporada alta conviene salir con anticipación.",
            },
            {
              question: "¿Dónde se estaciona?",
              answer:
                "Hay un área abierta y sin pavimentar junto al mirador. Llénala con cuidado, frenos puestos y fuera del paso; los fines de semana se llena por la tarde.",
            },
          ],
        },
      ],
    },
  },

  "que-hacer-en-merlo": {
    slug: "que-hacer-en-merlo",
    canonicalPath: "/que-hacer-en-merlo/",
    title: "Qué hacer en Merlo San Luis | Guía de atracciones cerca del Mirador del Sol",
    description:
      "Qué hacer en Villa de Merlo: Mirador del Sol, Filo Serrano, Valle del Conlara, La Carolina y el microclima serrano. Ideas para armar tu recorrido cerca de la tirolesa.",
    hero: {
      eyebrow: "Planifica tu visita",
      headline: "Qué hacer en Villa de Merlo y alrededores",
      summary:
        "Villa de Merlo es la base ideal para recorrer la sierra de los Comechingones. El Mirador del Sol es solo una parada: más arriba sigue el Filo Serrano y alrededor hay valles, pueblos y miradores.",
    },
    intro:
      "Si venís por la tirolesa y el Mirador del Sol, aprovechá para descubrir el resto de Merlo. Acá una selección de lugares y experiencias reales para armar tu recorrido.",
    sections: [
      {
        id: "mirador-del-sol",
        eyebrow: "Empezá aquí",
        title: "El propio Mirador del Sol",
        intro:
          "Antes de seguir, vale la pena detenerse en el mirador: vistas de filo, mar de nubes matutino y la base de la tirolesa. Es el punto de partida natural del Camino al Filo.",
        body: [
          "Mejor horario: temprano, para el mar de nubes y la luz lateral.",
          "Combiná con la subida al Filo Serrano si el clima acompaña.",
        ],
      },
      {
        id: "filo-serrano",
        eyebrow: "Más arriba",
        title: "Filo Serrano y la cresta",
        intro:
          "Siguiendo la Ruta 5 se llega a la cresta, donde se aprecia el límite natural entre San Luis y Córdoba y se abre la vista hacia las llanuras vecinas.",
        cards: [
          {
            title: "Mirador del Filo",
            body:
              "Punto alto del recorrido, con panorámica amplia. La vegetación ya es más baja y el viento, más presente.",
          },
          {
            title: "Camino al Filo",
            body:
              "La ruta panorámica completa: vale la pena si tenés auto y día despejado.",
          },
        ],
      },
      {
        id: "valle-conlara",
        eyebrow: "Valle",
        title: "Valle del Conlara",
        intro:
          "Al pie de la sierra, el Valle del Conlara suma ríos, balnearios de río y pequeñas localidades turísticas que combinan bien con el Mirador del Sol.",
        body: [
          "Ideal para una tarde de río después de la subida.",
          "Conectá con el resto de la región si tenés varios días.",
        ],
      },
      {
        id: "la-carolina",
        eyebrow: "Historia",
        title: "La Carolina, pueblo minero",
        intro:
          "Hacia el noroeste queda La Carolina, con restos de la actividad minera colonial. Buen complemento para quienes buscan geología e historia.",
        body: [
          "Visitá las ruinas y el museo local si te interesa la minería de la sierra.",
          "Queda a mayor distancia: planealo como día completo.",
        ],
      },
      {
        id: "pueblo-merlo",
        eyebrow: "El pueblo",
        title: "Villa de Merlo y su microclima",
        intro:
          "El casco urbano reúne alojamiento, gastronomía, artesanías y la famosa Avenida de los Césares. Es la mejor base para dormir y organizar salidas.",
        cards: [
          {
            title: "Avenida de los Césares",
            body:
              "Paseo peatonal del centro ligado a la leyenda de la Ciudad de los Césares. Buen paseo tranquilo al atardecer.",
          },
          {
            title: "Microclima",
            body:
              "Merlo es conocida por su clima suave y seco, ideal para descansar entre salidas de montaña.",
          },
          {
            title: "Gastronomía y artesanías",
            body:
              "Encontrás comida regional, productos de campo y ferias artesanales en el centro y alrededores.",
          },
        ],
      },
    ],
    faq: {
      title: "Preguntas frecuentes sobre qué hacer en Merlo",
      intro: "Ideas para armar tu recorrido alrededor del Mirador del Sol.",
      groups: [
        {
          category: "Itinerario",
          items: [
            {
              question: "¿Qué se puede hacer cerca del Mirador del Sol?",
              answer:
                "Además del mirador y la tirolesa, podés subir al Filo Serrano por la Ruta 5, recorrer el Valle del Conlara, visitar La Carolina y pasear por Villa de Merlo.",
            },
            {
              question: "¿Cuántos días conviene quedarse en Merlo?",
              answer:
                "Con 2 o 3 días alcanza para combinar la subida al mirador, el Filo Serrano y una salida de valle o pueblo sin apurarse.",
            },
            {
              question: "¿El Mirador del Sol es la única atracción de la zona?",
              answer:
                "No. Es una parada del Camino al Filo; la región suma cresta, valles, pueblos serranos y el microclima de Merlo.",
            },
            {
              question: "¿Dónde buscar información oficial de turismo?",
              answer:
                "Consultá el portal de turismo de Villa de Merlo y el de la provincia de San Luis para novedades, mapas y eventos actualizados.",
            },
          ],
        },
      ],
    },
  },

  "tirolesa-precios-horarios": {
    slug: "tirolesa-precios-horarios",
    canonicalPath: "/tirolesa-precios-horarios/",
    title: "Precios y horarios de la Tirolesa Mirador del Sol | Estado y verificación",
    description:
      "Estado de precios y horarios de la Tirolesa Mirador del Sol en Merlo: consulta al operador y a la autoridad responsable antes de viajar.",
    hero: {
      eyebrow: "Antes de venir",
      headline: "Precios y horarios de la tirolesa y el mirador",
      summary:
        "Los precios, horarios y condiciones de acceso no han sido verificados con el operador o la autoridad responsable. Consulta antes de viajar.",
    },
    intro:
      "Queremos que llegues con información clara y sin promesas falsas. La tirolesa depende del viento, la lluvia y la visibilidad, por eso sus horarios y precios se confirman en el lugar.",
    sections: [
      {
        id: "mirador-libre",
        eyebrow: "Acceso",
        title: "Condiciones de acceso al mirador",
        intro:
          "El Mirador del Sol está junto a la Ruta 5. Consulta a la autoridad responsable sobre el acceso actual.",
        body: [
          "Consulta si hay restricciones de acceso o cobros vigentes.",
          "Consulta dónde está permitido estacionar.",
        ],
      },
      {
        id: "tirolesa-paga",
        eyebrow: "Tirolesa",
        title: "Precio de la tirolesa",
        intro:
          "El precio y la forma de pago no han sido verificados con el operador.",
        body: [
          "Confirma el precio y la forma de pago antes de viajar.",
          "Consultalo directo en la base de la tirolesa o en los canales oficiales del operador antes de subir.",
        ],
      },
      {
        id: "horarios",
        eyebrow: "Horarios",
        title: "Horarios sujetos al clima",
        intro:
          "Los horarios y las condiciones de operación de la tirolesa no han sido verificados con el operador. Confírmalos directamente antes de salir.",
        body: [
          "No hay un horario fijo garantizado publicado por este sitio.",
          "El clima puede afectar la actividad; consulta al operador sobre la disponibilidad del día.",
        ],
      },
      {
        id: "requisitos",
        eyebrow: "Para participar",
        title: "Condiciones de la tirolesa",
        intro:
          "Como en toda actividad de altura, hay requisitos de seguridad. El equipo del sitio decide en cada salida.",
        cards: [
          {
            title: "Peso y edad",
            body:
              "Los límites de edad y peso y las condiciones para menores no han sido verificados con el operador. Confírmalos directamente antes de viajar.",
          },
          {
            title: "Salud",
            body:
              "Si tenés problemas cardíacos, vértigo severo o reciente operación, considerá solo el paseo de mirador.",
          },
          {
            title: "Seguridad",
            body:
              "El equipamiento, la instrucción y las medidas de seguridad no han sido verificadas con el operador. Consúltalos antes de participar.",
          },
        ],
      },
      {
        id: "verificacion",
        eyebrow: "Transparencia",
        title: "Estado y verificación",
        intro: lastVerified,
        body: [
          "Este sitio es una guía independiente: no vendemos ni fijamos tarifas.",
          "Llevá siempre un margen de tiempo por si la actividad no opera el día que vengas.",
        ],
      },
    ],
    faq: {
      title: "Preguntas frecuentes sobre precios y horarios",
      intro:
        "Respuestas honestas sobre costos y funcionamiento, sin datos inventados.",
      groups: [
        {
          category: "Precios y horarios",
          items: [
            {
              question: "¿Cuánto cuesta la tirolesa en el Mirador del Sol?",
              answer:
                "Es un servicio de pago que se abona en el lugar. El valor cambia por temporada y demanda, por eso te recomendamos confirmarlo directo en la base de la tirolesa o en los canales oficiales del operador antes de subir.",
            },
            {
              question: "¿El mirador tiene costo de entrada?",
              answer:
                "No. El Mirador del Sol es un espacio público de acceso libre; no se cobra para disfrutar las vistas.",
            },
            {
              question: "¿A qué hora abre la tirolesa?",
              answer:
                "No manejamos un horario fijo garantizado: la operación depende del clima del día (viento, lluvia y visibilidad). Confirmalo en el lugar el día de tu visita.",
            },
            {
              question: "¿Se puede reservar la tirolesa?",
              answer:
                "No gestionamos reservas desde esta guía. Consultá en el punto de venta del sitio o en la oficina de turismo de Villa de Merlo las opciones disponibles.",
            },
            {
              question: "¿Por qué no publican un precio exacto?",
              answer:
                "Porque las tarifas las fija y actualiza el operador, y no queremos mostrar un valor desactualizado. Mejor confirmarlo en el lugar para evitar sorpresas.",
            },
          ],
        },
      ],
    },
  },

  fotos: {
    slug: "fotos",
    canonicalPath: "/fotos/",
    title: "Fotos del Mirador del Sol en Merlo | Vistas, tirolesa y mar de nubes",
    description:
      "Galería de fotos reales del Mirador del Sol en Villa de Merlo: filo serrano, mar de nubes, la tirolesa y el Valle del Conlara. Consejos para fotografiar el lugar.",
    hero: {
      eyebrow: "Galería",
      headline: "Fotos del Mirador del Sol en Villa de Merlo",
      summary:
        "Una muestra de cómo se ve el Mirador del Sol según la hora y el clima: filo, nubes, tirolesa y valle. Usalas para reconocer el lugar y planear tu visita.",
    },
    intro:
      "Las imágenes muestran el mirador y sus alrededores en distintas condiciones. El paisaje cambia mucho entre la mañana y la tarde, y con la presencia o no de nubes.",
    sections: [
      {
        id: "que-ver",
        eyebrow: "El lugar en imágenes",
        title: "Qué se ve en las fotos",
        cards: [
          {
            title: "Filo y valle",
            body:
              "La apertura del relieve desde la cresta: el valle de Merlo y, más allá, las llanuras.",
          },
          {
            title: "Mar de nubes",
            body:
              "En las mañanas frías y calmadas suele formarse el mar de nubes sobre el valle.",
          },
          {
            title: "La tirolesa",
            body:
              "La base y el cable de la tirolesa, con el sistema de poleas y arneses.",
          },
          {
            title: "Cielo y luz",
            body:
              "La luz lateral del atardecer y, de noche, un cielo oscuro ideal para astrofotografía.",
          },
        ],
      },
      {
        id: "cuando",
        eyebrow: "Mejor momento",
        title: "Cuándo sacar las mejores fotos",
        body: [
          "Mañana temprano: más chances de mar de nubes e iluminación suave.",
          "Atardecer: luz lateral sobre el filo y tonos cálidos.",
          "Noche (sin luna, abril–septiembre): cielo austral y Vía Láctea.",
        ],
      },
      {
        id: "consejos",
        eyebrow: "Consejos",
        title: "Para fotografiar sin riesgo",
        cards: [
          {
            title: "Cuidado con el viento",
            body:
              "En la cresta el viento es fuerte: asegurá el trípode y los objetos sueltos.",
          },
          {
            title: "No te acerques al borde",
            body:
              "Las fotos de altura se toman desde zonas seguras, nunca al filo del precipicio.",
          },
          {
            title: "Respetá la actividad",
            body:
              "Si la tirolesa opera, seguí las indicaciones del personal para fotografiar.",
          },
        ],
      },
    ],
    faq: {
      title: "Preguntas frecuentes sobre las fotos",
      intro: "Dudas frecuentes sobre las imágenes y su uso.",
      groups: [
        {
          category: "Imágenes",
          items: [
            {
              question: "¿Se pueden usar estas fotos?",
              answer:
                "Las imágenes de esta guía se muestran para reconocer el lugar. Para uso editorial o comercial, consultá la autoría y licencia indicada al pie de cada página.",
            },
            {
              question: "¿Cuándo hay mar de nubes en el Mirador del Sol?",
              answer:
                "Suele verse en mañanas frías y calmadas, cuando una inversión térmica deposita nubes bajas sobre el valle. No está garantizado todos los días.",
            },
            {
              question: "¿Se puede sacar buenas fotos de noche?",
              answer:
                "Sí: la baja contaminación lumínica favorece la astrofotografía, mejor en noches sin luna entre abril y septiembre.",
            },
          ],
        },
      ],
    },
  },
};

export const topicList = topicSlugs.map((slug) => topicBySlug[slug]);

export const topicAlternate = (slug: TopicSlug, siteOrigin: string) => {
  const url = `${siteOrigin}${topicBySlug[slug].canonicalPath}`;
  return [
    { href: url, hreflang: "es" as Locale },
    { href: url, hreflang: "x-default" },
  ];
};
