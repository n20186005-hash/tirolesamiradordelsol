export const locales = ["zh", "en", "it", "es"] as const;

export type Locale = (typeof locales)[number];

export const siteMeta = {
  name: "Tirolesa Mirador Del Sol",
  domain: "tirolesamiradordelsol.com",
  mapsUrl: "https://maps.app.goo.gl/hQhBUmt4YBhX2B7e7",
  address: "ruta 5 sin numero, D5881 Merlo, San Luis, Argentina",
  addressZh: "ruta 5 sin numero, D5881 Merlo, San Luis, 阿根廷",
  plusCode: "J3Q2+43 Merlo, San Luis, Argentina",
  plusCodeZh: "J3Q2+43 梅洛, 阿根廷圣路易斯",
  phone: "+54 2656 47-8290",
  rating: "4.7",
  reviewCount: "13,742",
  type: "Tourist attraction",
  heroImage: "/gallery/tirolesa-mirador-del-sol-03.jpg",
  ogImage: "/gallery/tirolesa-mirador-del-sol-03.jpg",
  galleryImages: Array.from({ length: 20 }, (_, index) => ({
    src: `/gallery/tirolesa-mirador-del-sol-${String(index + 1).padStart(2, "0")}.jpg`,
    index: index + 1,
  })),
} as const;

const languageNames: Record<Locale, string> = {
  zh: "中文",
  en: "English",
  it: "Italiano",
  es: "Español",
};

export type PageContent = {
  localeName: string;
  title: string;
  description: string;
  nav: {
    overview: string;
    gallery: string;
    reviews: string;
    visit: string;
    links: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    summary: string;
    ratingLabel: string;
    typeLabel: string;
    addressLabel: string;
    phoneLabel: string;
    plusCodeLabel: string;
    mapsCta: string;
    galleryCta: string;
  };
  metricsTitle: string;
  metrics: Array<{ label: string; value: string }>;
  story: {
    title: string;
    intro: string;
    cards: Array<{ title: string; body: string }>;
  };
  photos: {
    title: string;
    intro: string;
    mapsCta: string;
    altPrefix: string;
  };
  reviews: {
    title: string;
    intro: string;
    mapsCta: string;
    themes: Array<{ title: string; body: string }>;
  };
  visit: {
    title: string;
    cards: Array<{ title: string; body: string }>;
  };
  editorial: {
    title: string;
    body: string;
  };
  links: {
    title: string;
    intro: string;
    items: Array<{ title: string; href: string; description: string }>;
  };
  footer: {
    note: string;
    mapsLabel: string;
  };
};

export const localizedPath = (locale: Locale) => (locale === "zh" ? "/" : `/${locale}/`);

export const alternateLinks = locales.map((locale) => ({
  locale,
  label: languageNames[locale],
  href: localizedPath(locale),
}));

export const contentByLocale: Record<Locale, PageContent> = {
  zh: {
    localeName: "中文",
    title: "Tirolesa Mirador Del Sol | 阿根廷圣路易斯省四语景点指南",
    description:
      "面向中文、英语、意大利语与西班牙语访客的 Tirolesa Mirador Del Sol 单页科普指南，涵盖地理背景、观景体验、到访建议、照片与权威延伸链接。",
    nav: {
      overview: "概览",
      gallery: "照片",
      reviews: "评价",
      visit: "到访建议",
      links: "友情链接",
    },
    hero: {
      eyebrow: "阿根廷圣路易斯省 | 梅洛山地观景与高空滑索",
      headline: "Tirolesa Mirador Del Sol",
      summary:
        "这是一处位于 Villa de Merlo 东侧山脊公路沿线的高山观景点与冒险体验节点。页面以中性、科普化方式整理观景价值、地貌背景、到访安全与多语基础信息，避免旅游广告式表述。",
      ratingLabel: "Google 评分",
      typeLabel: "类型",
      addressLabel: "地址",
      phoneLabel: "电话",
      plusCodeLabel: "Plus Code",
      mapsCta: "在 Google 地图上查看位置",
      galleryCta: "查看现场照片",
    },
    metricsTitle: "基础信息",
    metrics: [
      { label: "景观特征", value: "山脊眺望、云海、峡谷公路" },
      { label: "体验类型", value: "观景 + 高空滑索" },
      { label: "区域背景", value: "Comechingones 山脉前缘" },
      { label: "适合人群", value: "自驾游客、摄影者、轻探险访客" },
    ],
    story: {
      title: "为什么这个页面更像专业景点落地页",
      intro:
        "与常见“打卡推荐”不同，这里把景点放回更大的地理与文化语境中，帮助访客先理解地点，再决定是否到访。",
      cards: [
        {
          title: "地理背景",
          body:
            "Mirador del Sol 所在的山地道路由梅洛城区向东抬升，逐渐进入 Comechingones 山脉的观景带。高差变化带来显著的视野开阔感，也是云层翻涌、山风增强与温差变化较明显的原因。",
        },
        {
          title: "体验逻辑",
          body:
            "这里的核心吸引力并不只是单一滑索项目，而是“山地公路抵达 + 观景平台停留 + 高空活动参与”三者叠加形成的完整到访过程。对许多访客而言，风景本身与到达路径同样重要。",
        },
        {
          title: "地方叙事",
          body:
            "与其虚构传奇，不如保留更可信的地方叙事：清晨逆温层形成的云海、傍晚山脊光线、以及来自山地观景传统的“Mirador del Sol”命名，共同构成此地最有辨识度的在地意象。",
        },
      ],
    },
    photos: {
      title: "照片",
      intro:
        "图库全部引用站内 `public/gallery` 资源，并统一改为适合 SEO 与多语言 URL 解析的文件名。首屏背景同样来自当前图库。",
      mapsCta: "在 Google 地图上查看位置",
      altPrefix: "Tirolesa Mirador Del Sol 现场照片",
    },
    reviews: {
      title: "评价",
      intro:
        "页面不堆砌情绪化好评，而是把高频反馈归纳为三个更有参考价值的观察维度，帮助访客形成预期。",
      mapsCta: "在 Google 地图上查看位置",
      themes: [
        {
          title: "观景视野",
          body:
            "高评分通常与山谷全景、山脊道路视角以及天气变化带来的戏剧性天空有关。即使不参加滑索，单纯观景也构成主要吸引力。",
        },
        {
          title: "冒险感受",
          body:
            "对参与滑索的访客而言，山体落差与开阔地形强化了速度感与高度感，因此建议在风力、装备与身体状况允许的前提下再参与高空项目。",
        },
        {
          title: "到访条件",
          body:
            "实际体验往往受天气、能见度、道路状态与人流影响。专业落地页应把这些变量写清楚，而不是仅强调“值得去”。",
        },
      ],
    },
    visit: {
      title: "到访建议",
      cards: [
        {
          title: "最佳时段",
          body:
            "清晨与傍晚通常拥有更具层次的光线；如果目标是拍摄山谷与云层变化，应优先关注能见度而非单纯晴天。",
        },
        {
          title: "交通方式",
          body:
            "适合自驾上山。山路弯道较多，出发前应确认车辆状态，并预留观景停车与返程时间。",
        },
        {
          title: "安全提示",
          body:
            "山地风力和气温变化快，建议携带外套、防晒用品和饮水。若参加滑索，应以现场运营规范和安全口径为准。",
        },
        {
          title: "停留时长",
          body:
            "纯观景拍照可停留约 30 至 60 分钟；若叠加高空项目或周边观景点，可安排半天。",
        },
      ],
    },
    editorial: {
      title: "编辑说明",
      body:
        "本站以非盈利景点科普为目标，因此页面结构优先提供位置、语境、到访建议、图片证据与官方延伸资料，而不是商业导流、价格刺激或夸张宣传语。",
    },
    links: {
      title: "友情链接",
      intro:
        "以下链接已按你的要求替换为与 Villa de Merlo、圣路易斯省及阿根廷国家旅游体系直接相关的官方站点，更贴合 Tirolesa Mirador Del Sol 的地理位置、山地交通与探险语境。",
      items: [
        {
          title: "梅洛市官方旅游局",
          href: "https://villademerlo.tur.ar/",
          description:
            "该景点所在城市的核心官方旅游网站，重点介绍梅洛著名的“微气候”与观景台环线，并覆盖高空滑索、四驱越野等山地活动，是与本站垂直度最高的匹配链接。",
        },
        {
          title: "圣路易斯省旅游局官方门户",
          href: "https://turismo.sanluis.gov.ar/",
          description:
            "圣路易斯省官方旅游推广入口，覆盖科门钦戈内斯山脉沿线的生态、探险与周边自然资源，适合规划梅洛周边更广阔的山地行程。",
        },
        {
          title: "阿根廷国家政府官网 - 圣路易斯省专页",
          href: "https://www.argentina.gob.ar/sanluis",
          description:
            "阿根廷国家级政务门户下设的圣路易斯省专页，概括该省地理地貌、自然资源与公共服务体系，可作为提升页面权威度的国家级参考外链。",
        },
        {
          title: "圣路易斯省政府官网 - 公共与应急资讯",
          href: "https://www.sanluis.gov.ar/",
          description:
            "省级行政管理主站，可用于补充 Ruta 5 山路上行相关的基础设施路况、山区气候预警与应急救援联络方式。",
        },
        {
          title: "阿根廷国家旅游局官方推广门户",
          href: "https://www.argentina.travel/",
          description:
            "面向全球游客的国家旅游入口，可作为国际访客了解阿根廷中部山脉、圣路易斯省风光与自驾路线安全信息的宏观参考。",
        },
      ],
    },
    footer: {
      note:
        "本页为静态四语景点指南，聚焦地理环境、观景体验与到访安全，不承载预订、促销或品牌背书。",
      mapsLabel: "Google Maps →",
    },
  },
  en: {
    localeName: "English",
    title: "Tirolesa Mirador Del Sol | Multilingual Visitor Guide in San Luis, Argentina",
    description:
      "A four-language static guide to Tirolesa Mirador Del Sol with geographic context, photos, practical visiting notes, review synthesis, and official external resources.",
    nav: {
      overview: "Overview",
      gallery: "Photos",
      reviews: "Reviews",
      visit: "Plan",
      links: "Links",
    },
    hero: {
      eyebrow: "San Luis Province, Argentina | Scenic ridge lookout and zipline",
      headline: "Tirolesa Mirador Del Sol",
      summary:
        "This page presents the site as a place-based guide rather than a tourism advertisement. It combines practical orientation, mountain context, visual evidence, and multilingual access for visitors heading toward the Mirador del Sol ridge above Villa de Merlo.",
      ratingLabel: "Google rating",
      typeLabel: "Type",
      addressLabel: "Address",
      phoneLabel: "Phone",
      plusCodeLabel: "Plus Code",
      mapsCta: "View on Google Maps",
      galleryCta: "Browse photos",
    },
    metricsTitle: "Key facts",
    metrics: [
      { label: "Landscape", value: "ridge views, cloud inversions, mountain road" },
      { label: "Experience", value: "lookout + zipline activity" },
      { label: "Regional setting", value: "foothills of the Comechingones range" },
      { label: "Best for", value: "drivers, photographers, light adventure visitors" },
    ],
    story: {
      title: "What makes this page feel more professional",
      intro:
        "A strong attraction page should explain the place, not just praise it. The structure below gives visitors context before persuasion.",
      cards: [
        {
          title: "Geographic reading",
          body:
            "The lookout sits along the ascending road east of Merlo, where elevation quickly opens broad views toward the valley. That topographic shift explains the stronger wind, wider sightlines, and dramatic cloud formations often associated with the site.",
        },
        {
          title: "Experience sequence",
          body:
            "Visitors do not encounter a zipline in isolation. The approach road, scenic stop, mountain exposure, and optional aerial activity work together as a single arrival experience.",
        },
        {
          title: "Local narrative",
          body:
            "Instead of inventing legends, this guide preserves a more credible regional narrative: sunrise light, cloud seas after temperature inversions, and the broader viewpoint culture of the Comechingones ridge.",
        },
      ],
    },
    photos: {
      title: "Photos",
      intro:
        "All images come from the local gallery folder and now use SEO-friendly filenames. The hero background is also sourced from the same on-site image set.",
      mapsCta: "View on Google Maps",
      altPrefix: "Tirolesa Mirador Del Sol photo",
    },
    reviews: {
      title: "Reviews",
      intro:
        "Rather than amplifying emotional praise, this page turns recurring feedback into three practical reading points.",
      mapsCta: "View on Google Maps",
      themes: [
        {
          title: "Panoramic reward",
          body:
            "High ratings are closely tied to the valley panorama, the mountain road approach, and shifting skies. For many visitors, the viewpoint alone is the main attraction.",
        },
        {
          title: "Adventure intensity",
          body:
            "For zipline participants, the open slope and visible drop amplify the feeling of height and speed. Conditions on the day matter.",
        },
        {
          title: "Variable conditions",
          body:
            "Weather, visibility, road status, and crowd levels shape the experience more than most promotional pages admit, so they deserve explicit mention.",
        },
      ],
    },
    visit: {
      title: "Plan your visit",
      cards: [
        {
          title: "Best light",
          body:
            "Early morning and late afternoon usually offer the most layered light. If photography matters, prioritize visibility and atmospheric conditions.",
        },
        {
          title: "Access",
          body:
            "The site is best reached by car. Mountain curves require careful driving and enough margin for parking, viewing, and descent.",
        },
        {
          title: "Safety",
          body:
            "Mountain wind and temperature can shift quickly. Carry layers, water, and sun protection. Follow on-site safety instructions for zipline operations.",
        },
        {
          title: "Suggested duration",
          body:
            "Allow 30 to 60 minutes for viewpoint-only visits, or up to half a day if combining photos, nearby stops, and aerial activities.",
        },
      ],
    },
    editorial: {
      title: "Editorial note",
      body:
        "As a non-profit attraction guide, this site privileges orientation, safety, geographic context, image evidence, and official reference links over booking prompts or promotional language.",
    },
    links: {
      title: "Related links",
      intro:
        "Following your request, the previous link section has been replaced with official resources directly connected to Villa de Merlo, San Luis Province, and Argentina's national tourism and public-service network.",
      items: [
        {
          title: "Villa de Merlo Tourism Office",
          href: "https://villademerlo.tur.ar/",
          description:
            "The most directly relevant official tourism site for the city where the attraction is located, with information on Merlo's microclimate, scenic circuits, and mountain adventure activities including ziplining.",
        },
        {
          title: "Turismo San Luis",
          href: "https://turismo.sanluis.gov.ar/",
          description:
            "The official provincial tourism portal, useful for understanding the broader ecological and adventure landscape of the Comechingones range around Merlo.",
        },
        {
          title: "San Luis Province - Argentina.gob.ar",
          href: "https://www.argentina.gob.ar/sanluis",
          description:
            "A national government page summarizing the province's geography, natural resources, and public services under a high-authority .gob.ar domain.",
        },
        {
          title: "Government of San Luis Province",
          href: "https://www.sanluis.gov.ar/",
          description:
            "A practical source for provincial road conditions, mountain weather alerts, and emergency contacts relevant to the ascent along Ruta 5.",
        },
        {
          title: "Argentina.travel",
          href: "https://www.argentina.travel/",
          description:
            "Argentina's official international tourism gateway, suitable for multilingual route planning and broader self-drive safety context for overseas visitors.",
        },
      ],
    },
    footer: {
      note:
        "Static four-language attraction guide focused on landscape interpretation, practical access, and visitor safety.",
      mapsLabel: "Google Maps →",
    },
  },
  it: {
    localeName: "Italiano",
    title: "Tirolesa Mirador Del Sol | Guida multilingue per visitatori in Argentina",
    description:
      "Guida statica in quattro lingue a Tirolesa Mirador Del Sol con contesto geografico, galleria fotografica, note pratiche di visita e collegamenti ufficiali.",
    nav: {
      overview: "Panoramica",
      gallery: "Foto",
      reviews: "Recensioni",
      visit: "Visita",
      links: "Link",
    },
    hero: {
      eyebrow: "Provincia di San Luis, Argentina | Belvedere di cresta e tirolesa",
      headline: "Tirolesa Mirador Del Sol",
      summary:
        "La pagina presenta il luogo come guida territoriale e non come annuncio promozionale. Riunisce orientamento pratico, contesto montano, immagini e accesso multilingue per chi sale verso il Mirador del Sol sopra Villa de Merlo.",
      ratingLabel: "Valutazione Google",
      typeLabel: "Tipologia",
      addressLabel: "Indirizzo",
      phoneLabel: "Telefono",
      plusCodeLabel: "Plus Code",
      mapsCta: "Apri su Google Maps",
      galleryCta: "Vedi le foto",
    },
    metricsTitle: "Dati essenziali",
    metrics: [
      { label: "Paesaggio", value: "cresta panoramica, mare di nuvole, strada montana" },
      { label: "Esperienza", value: "belvedere + tirolesa" },
      { label: "Contesto regionale", value: "fascia dei Comechingones" },
      { label: "Adatto a", value: "automobilisti, fotografi, visitatori avventura light" },
    ],
    story: {
      title: "Perché questa pagina appare piu professionale",
      intro:
        "Una buona landing page per un sito culturale deve spiegare il luogo prima di invitarvi ad andare. Qui la struttura privilegia il contesto.",
      cards: [
        {
          title: "Lettura geografica",
          body:
            "Il punto panoramico si trova lungo la strada che sale a est di Merlo. L'aumento rapido di quota apre la vista sulla valle e spiega vento piu forte, orizzonti piu ampi e cieli molto dinamici.",
        },
        {
          title: "Sequenza dell'esperienza",
          body:
            "La tirolesa non e un elemento isolato: strada d'accesso, sosta panoramica, esposizione alla montagna e attivita aerea compongono un'unica esperienza di arrivo.",
        },
        {
          title: "Narrazione locale",
          body:
            "Invece di inventare leggende, la guida conserva un racconto piu credibile: luce dell'alba, nubi da inversione termica e cultura dei miradores lungo la cresta dei Comechingones.",
        },
      ],
    },
    photos: {
      title: "Foto",
      intro:
        "Tutte le immagini provengono dalla galleria locale e ora usano nomi file piu leggibili per SEO e URL multilingue. Anche l'immagine hero proviene dallo stesso archivio.",
      mapsCta: "Apri su Google Maps",
      altPrefix: "Foto di Tirolesa Mirador Del Sol",
    },
    reviews: {
      title: "Recensioni",
      intro:
        "Invece di ripetere commenti entusiastici, la pagina sintetizza i riscontri ricorrenti in tre chiavi di lettura utili.",
      mapsCta: "Apri su Google Maps",
      themes: [
        {
          title: "Ricompensa panoramica",
          body:
            "Le valutazioni elevate sono strettamente legate alla vista sulla valle, alla strada panoramica e ai cambiamenti del cielo. Per molti visitatori il panorama basta da solo.",
        },
        {
          title: "Intensita dell'avventura",
          body:
            "Per chi prova la tirolesa, il versante aperto e il dislivello visibile aumentano la percezione di altezza e velocita. Le condizioni giornaliere contano molto.",
        },
        {
          title: "Condizioni variabili",
          body:
            "Meteo, visibilita, stato della strada e affluenza cambiano l'esperienza piu di quanto dicano molte pagine promozionali, quindi vanno esplicitati.",
        },
      ],
    },
    visit: {
      title: "Pianifica la visita",
      cards: [
        {
          title: "Luce migliore",
          body:
            "Mattino presto e tardo pomeriggio offrono spesso la luce piu stratificata. Se fotografi, considera soprattutto visibilita e atmosfera.",
        },
        {
          title: "Accesso",
          body:
            "Il sito si raggiunge al meglio in auto. Le curve di montagna richiedono guida prudente e tempo sufficiente per sosta e discesa.",
        },
        {
          title: "Sicurezza",
          body:
            "Vento e temperatura cambiano rapidamente. Porta strati leggeri, acqua e protezione solare. Per la tirolesa segui le indicazioni operative sul posto.",
        },
        {
          title: "Durata consigliata",
          body:
            "Prevedi 30-60 minuti per sola osservazione panoramica, oppure fino a mezza giornata con foto, soste vicine e attivita aeree.",
        },
      ],
    },
    editorial: {
      title: "Nota editoriale",
      body:
        "Come guida non profit, il sito privilegia orientamento, sicurezza, contesto geografico, prove fotografiche e link istituzionali rispetto a prenotazioni o linguaggio commerciale.",
    },
    links: {
      title: "Link correlati",
      intro:
        "Come richiesto, la sezione precedente e stata sostituita con risorse ufficiali collegate direttamente a Villa de Merlo, alla provincia di San Luis e al sistema turistico nazionale argentino.",
      items: [
        {
          title: "Turismo ufficiale di Villa de Merlo",
          href: "https://villademerlo.tur.ar/",
          description:
            "Il sito turistico ufficiale piu pertinente per la citta dove si trova l'attrazione, con informazioni su microclima, circuiti panoramici e attivita d'avventura come la tirolesa.",
        },
        {
          title: "Turismo San Luis",
          href: "https://turismo.sanluis.gov.ar/",
          description:
            "Portale turistico ufficiale della provincia, utile per leggere in chiave piu ampia il paesaggio ecologico e avventuroso della catena dei Comechingones.",
        },
        {
          title: "Provincia di San Luis - Argentina.gob.ar",
          href: "https://www.argentina.gob.ar/sanluis",
          description:
            "Pagina governativa nazionale che sintetizza geografia, risorse naturali e servizi pubblici della provincia sotto il dominio autorevole .gob.ar.",
        },
        {
          title: "Governo della Provincia di San Luis",
          href: "https://www.sanluis.gov.ar/",
          description:
            "Riferimento pratico per viabilita provinciale, allerte meteo montane e contatti di emergenza utili per la salita lungo la Ruta 5.",
        },
        {
          title: "Argentina.travel",
          href: "https://www.argentina.travel/",
          description:
            "Portale turistico nazionale rivolto ai visitatori internazionali, adatto a consultare informazioni multilingui su itinerari, sicurezza stradale e contesto generale del viaggio.",
        },
      ],
    },
    footer: {
      note:
        "Guida statica in quattro lingue dedicata a paesaggio, accesso pratico e sicurezza del visitatore.",
      mapsLabel: "Google Maps →",
    },
  },
  es: {
    localeName: "Español",
    title: "Tirolesa Mirador Del Sol | Guia multilingue del mirador en San Luis",
    description:
      "Guia estatica en cuatro idiomas sobre Tirolesa Mirador Del Sol con contexto geografico, fotos, recomendaciones de visita y enlaces oficiales.",
    nav: {
      overview: "Panorama",
      gallery: "Fotos",
      reviews: "Reseñas",
      visit: "Visita",
      links: "Enlaces",
    },
    hero: {
      eyebrow: "Provincia de San Luis, Argentina | Mirador serrano y tirolesa",
      headline: "Tirolesa Mirador Del Sol",
      summary:
        "La pagina presenta el sitio como una guia territorial y no como una promocion turistica. Reune orientacion practica, contexto de montaña, evidencia fotografica y acceso multilingue para visitantes que suben al cordon del Mirador del Sol sobre Villa de Merlo.",
      ratingLabel: "Calificacion de Google",
      typeLabel: "Tipo",
      addressLabel: "Direccion",
      phoneLabel: "Telefono",
      plusCodeLabel: "Plus Code",
      mapsCta: "Ver en Google Maps",
      galleryCta: "Ver fotos",
    },
    metricsTitle: "Datos clave",
    metrics: [
      { label: "Paisaje", value: "vista de filo, mar de nubes, camino serrano" },
      { label: "Experiencia", value: "mirador + tirolesa" },
      { label: "Entorno regional", value: "frente de las Sierras de los Comechingones" },
      { label: "Ideal para", value: "viajeros en auto, fotografia y aventura suave" },
    ],
    story: {
      title: "Por que esta pagina se siente mas profesional",
      intro:
        "Una buena pagina de destino debe explicar el lugar antes de persuadir. Aqui la estructura prioriza contexto, seguridad y lectura territorial.",
      cards: [
        {
          title: "Lectura geografica",
          body:
            "El mirador se encuentra sobre la ruta ascendente al este de Merlo. Ese cambio rapido de altura abre la vista del valle y explica el viento mas fuerte, el horizonte amplio y los cielos dramaticos que suelen asociarse al sitio.",
        },
        {
          title: "Secuencia de experiencia",
          body:
            "La tirolesa no aparece aislada. El camino de acceso, la parada panoramica, la exposicion a la sierra y la actividad aerea forman una sola experiencia de llegada.",
        },
        {
          title: "Relato local",
          body:
            "En lugar de inventar leyendas, la guia conserva una narrativa mas creible: amaneceres, inversiones termicas que producen nubes bajas y la tradicion de miradores sobre el filo serrano.",
        },
      ],
    },
    photos: {
      title: "Fotos",
      intro:
        "Todas las imagenes provienen de la carpeta local `public/gallery` y ahora usan nombres mas legibles para SEO y URLs multilingues. La imagen principal tambien sale de ese conjunto.",
      mapsCta: "Ver en Google Maps",
      altPrefix: "Foto de Tirolesa Mirador Del Sol",
    },
    reviews: {
      title: "Reseñas",
      intro:
        "En vez de acumular elogios emocionales, esta pagina organiza los comentarios repetidos en tres observaciones utiles para planificar la visita.",
      mapsCta: "Ver en Google Maps",
      themes: [
        {
          title: "Premio panoramico",
          body:
            "Las valoraciones altas suelen relacionarse con la vista del valle, la subida por la ruta serrana y los cambios del cielo. Para muchas personas, el mirador por si solo ya justifica la visita.",
        },
        {
          title: "Intensidad de aventura",
          body:
            "Quienes usan la tirolesa suelen destacar la sensacion de altura y velocidad reforzada por la pendiente abierta y el desnivel visible.",
        },
        {
          title: "Condiciones variables",
          body:
            "Clima, visibilidad, estado del camino y cantidad de gente modifican mucho la experiencia; por eso conviene mencionarlos de manera explicita.",
        },
      ],
    },
    visit: {
      title: "Sugerencias de visita",
      cards: [
        {
          title: "Mejor momento",
          body:
            "La primera hora de la mañana y el final de la tarde suelen ofrecer la luz mas interesante. Si vas a fotografiar, prioriza visibilidad y atmosfera.",
        },
        {
          title: "Acceso",
          body:
            "Conviene subir en auto. El camino de montaña tiene curvas y requiere manejar con cuidado y dejar margen para detenerse y bajar con calma.",
        },
        {
          title: "Seguridad",
          body:
            "El viento y la temperatura cambian rapido en altura. Lleva abrigo liviano, agua y proteccion solar. Para la tirolesa, manda siempre la norma operativa del lugar.",
        },
        {
          title: "Tiempo recomendado",
          body:
            "Reserva 30 a 60 minutos para mirador y fotos; si sumas actividad aerea o paradas cercanas, puedes dedicar media jornada.",
        },
      ],
    },
    editorial: {
      title: "Nota editorial",
      body:
        "Como guia no lucrativa de divulgacion turistica, el sitio prioriza orientacion, seguridad, contexto geografico, evidencia fotografica y enlaces oficiales por encima del lenguaje comercial.",
    },
    links: {
      title: "Enlaces relacionados",
      intro:
        "Tal como pediste, la antigua seccion de enlaces fue reemplazada por recursos oficiales directamente relacionados con Villa de Merlo, la provincia de San Luis y la red turistica y administrativa nacional.",
      items: [
        {
          title: "Secretaria de Turismo de Villa de Merlo",
          href: "https://villademerlo.tur.ar/",
          description:
            "El sitio oficial mas pertinente para la ciudad donde se ubica el atractivo, con informacion sobre microclima, circuitos panoramicos y actividades serranas como la tirolesa.",
        },
        {
          title: "Turismo San Luis",
          href: "https://turismo.sanluis.gov.ar/",
          description:
            "Portal oficial de turismo provincial, util para entender el contexto ecologico y de aventura de las Sierras de los Comechingones alrededor de Merlo.",
        },
        {
          title: "Provincia de San Luis - Argentina.gob.ar",
          href: "https://www.argentina.gob.ar/sanluis",
          description:
            "Pagina del gobierno nacional que resume geografia, recursos naturales y servicios publicos de la provincia bajo un dominio estatal de alta autoridad.",
        },
        {
          title: "Gobierno de la Provincia de San Luis",
          href: "https://www.sanluis.gov.ar/",
          description:
            "Referencia practica para consultar estado de rutas provinciales, alertas climaticas de montaña y contactos de emergencia para la subida por Ruta 5.",
        },
        {
          title: "Argentina.travel",
          href: "https://www.argentina.travel/",
          description:
            "Portal oficial de promocion turistica internacional, util para visitantes extranjeros que necesiten una referencia general sobre rutas, seguridad y contexto de viaje en Argentina.",
        },
      ],
    },
    footer: {
      note:
        "Guia estatica en cuatro idiomas centrada en interpretacion del paisaje, acceso practico y seguridad de visita.",
      mapsLabel: "Google Maps →",
    },
  },
};
