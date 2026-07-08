export const locales = ["zh", "en", "it", "es"] as const;

export type Locale = (typeof locales)[number];

type TextCard = { title: string; body: string };

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
  heroImage: "/gallery/tirolesamiradordelsol-1.jpg",
  ogImage: "/gallery/tirolesamiradordelsol-1.jpg",
  galleryImages: Array.from({ length: 20 }, (_, index) => ({
    src: `/gallery/tirolesamiradordelsol-${index + 1}.jpg`,
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
    transport: string;
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
    cards: TextCard[];
  };
  insights: {
    title: string;
    intro: string;
    cards: TextCard[];
  };
  technical: {
    title: string;
    intro: string;
    rows: Array<{ dimension: string; value: string; note: string }>;
  };
  routeProfile: {
    title: string;
    intro: string;
    stages: Array<{ title: string; elevation: string; body: string }>;
  };
  astronomy: {
    title: string;
    intro: string;
    cards: TextCard[];
  };
  faq: {
    title: string;
    intro: string;
    items: Array<{ question: string; answer: string }>;
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
    themes: TextCard[];
  };
  transport: {
    title: string;
    intro: string;
    cards: TextCard[];
  };
  visit: {
    title: string;
    cards: TextCard[];
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
    copyright: string;
    disclaimer: string;
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
      "面向中文、英语、意大利语与西班牙语访客的 Tirolesa Mirador Del Sol 单页科普指南，涵盖地理背景、微气候、交通方式、照片与官方延伸链接。",
    nav: {
      overview: "概览",
      gallery: "照片",
      reviews: "评价",
      transport: "交通",
      visit: "到访建议",
      links: "官方链接",
    },
    hero: {
      eyebrow: "阿根廷圣路易斯省 | 梅洛山地观景与高空滑索",
      headline: "Tirolesa Mirador Del Sol",
      summary:
        "本站为聚焦地理环境、观景体验与到访安全，不承载预订、促销或品牌背书。该刊物完全免费，旨在促进阿根廷旅游业的发展。",
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
      { label: "景观特征", value: "山脊眺望、山谷云海、盘山公路" },
      { label: "体验类型", value: "观景平台 + 高空滑索" },
      { label: "区域背景", value: "Comechingones 山脉西坡前缘" },
      { label: "适合人群", value: "自驾游客、摄影者、轻探险访客" },
    ],
    story: {
      title: "地理与地方语境",
      intro:
        "Mirador del Sol 的价值不只在单一活动项目，而在于它把山路、海拔、云层、地方命名与观景传统连成一个完整的到访语境。",
      cards: [
        {
          title: "地形抬升",
          body:
            "从 Villa de Merlo 市区向东上山，海拔迅速抬升，山谷视野随之展开。正是这种明显的地形变化，塑造了观景平台的开阔感、风力增强与天气变化速度。",
        },
        {
          title: "微气候线索",
          body:
            "Merlo 常被放在“微气候”语境中讨论。对访客而言，更直观的感受来自山体屏障、日夜温差与逆温层共同作用下形成的清晨云海、午后通风和较低体感温度。",
        },
        {
          title: "Comechingones 山脉",
          body:
            "Mirador del Sol 的命名与这条山脉长期形成的观景文化有关。太阳升落、山脊线与季节光线，是理解这处地点最重要的地方性背景。",
        },
      ],
    },
    insights: {
      title: "自然与工程观察",
      intro:
        "可以从生态、工程与光线三个维度理解这处山地景观。",
      cards: [
        {
          title: "山地生态群落",
          body:
            "沿着上山道路前进，低处干燥林地逐渐过渡到更耐风的灌丛与草坡。观景平台附近不仅适合看山谷，也适合观察高地植被、裸岩与猛禽利用上升气流盘旋的现象。",
        },
        {
          title: "滑索的重力逻辑",
          body:
            "山地滑索依靠起终点高差和钢缆张力工作，风速、体重与当日天气都会影响速度与体感。是否参与活动，应以现场设备状态、运营说明与安全口径为最终依据。",
        },
        {
          title: "光线与云海",
          body:
            "清晨更容易观察低云与逆温层带来的层次感，傍晚则更适合观看山脊侧光。若主要目的为摄影或地貌观察，时段选择往往比“是否晴天”更关键。",
        },
      ],
    },
    technical: {
      title: "基础空间与地质数据",
      intro:
        "以下结构化数据概括了该地点的坐标、海拔、岩性、气候与植被带，帮助访客以地理学视角快速理解其空间特征。",
      rows: [
        {
          dimension: "地理坐标",
          value: "32°21'S, 64°58'W",
          note: "位于南半球、阿根廷中部内陆的 Comechingones 山脉西侧。",
        },
        {
          dimension: "海拔高度",
          value: "约 1,470 米 / 4,822 英尺",
          note: "大致位于 Villa de Merlo 市区与更高山脊主线之间的中继高度。",
        },
        {
          dimension: "地质年代",
          value: "古生代",
          note: "属于 Comechingones 山脉较古老的基岩体系背景。",
        },
        {
          dimension: "主要岩性",
          value: "结晶岩、花岗岩、片麻岩",
          note: "地表景观明显受到长期风化与水蚀塑形的影响。",
        },
        {
          dimension: "年均气温",
          value: "约 17°C（Merlo 基准）",
          note: "观景台体感通常比市区低约 4 至 6°C，且受风寒影响更明显。",
        },
        {
          dimension: "植被带",
          value: "查科高山过渡带",
          note: "以灌木、耐旱草本与高地草甸特征为主，呈现明显垂直变化。",
        },
      ],
    },
    routeProfile: {
      title: "Ruta 5（Camino al Filo）垂直动线",
      intro:
        "Tirolesa Mirador Del Sol 是整条山脊景观公路上的关键中继点。理解这条爬升线，才能真正理解该地点的空间关系。",
      stages: [
        {
          title: "起点：梅洛市区",
          elevation: "约 800 至 900 米",
          body:
            "这里是 Merlo 微气候叙事最集中的平地与山麓带。车辆由此进入 Ruta 5 后开始连续发夹弯攀升，植被较为茂密，城市与山地之间的过渡关系也最清晰。",
        },
        {
          title: "中继：Tirolesa Mirador Del Sol",
          elevation: "约 1,470 米",
          body:
            "这里是森林带向高山灌丛和草坡过渡的显著分界线。地形在此突然开阔，峡谷视野、风力条件与滑索工程对自然切口的利用都在这一高度集中体现。",
        },
        {
          title: "终点：Filo Serrano 山脊线",
          elevation: "约 2,100 米",
          body:
            "继续上行可接近山脊顶部及圣路易斯省与科尔多瓦省的自然地理边界。此处植被更贴地生长，远景可延伸至相邻省份平原，空间尺度显著放大。",
        },
      ],
    },
    astronomy: {
      title: "夜空保护与天文观测",
      intro:
        "远离核心城镇光源后，山地观景台展现出极高的暗夜保护、南半球星空与夜景摄影复合价值。",
      cards: [
        {
          title: "低光污染条件",
          body:
            "受山体遮挡与相对有限的城市灯光外溢影响，无云夜晚通常具备较好的暗夜观测条件。若以 Bortle 暗空尺度理解，这一区域常可被放在 3 至 4 级的可观测范围内。",
        },
        {
          title: "南半球星空识别",
          body:
            "这里适合辨认南十字星、半人马座阿尔法星以及麦哲伦星云等典型南天目标。对北半球访客而言，这类天体构成了非常鲜明的区域差异体验。",
        },
        {
          title: "星空摄影建议",
          body:
            "若进行夜景或银河拍摄，通常建议使用稳定三脚架和 14mm 至 24mm 广角镜头。若想同时保留观景台地景与银河结构，4 月至 9 月的无月夜条件更为理想。",
        },
      ],
    },
    faq: {
      title: "常见地质与出行释疑",
      intro:
        "关于地质特征、气候影响与出行规划的高频释疑。",
      items: [
        {
          question: "到达 Tirolesa Mirador Del Sol 必须驾驶四驱越野车（4x4）吗？",
          answer:
            "通常不需要。通往观景台的 Ruta 5 主要为铺装山路，标准两驱车辆一般即可抵达；但由于发夹弯密集、坡度变化明显，驾驶者仍应具备基本山路驾驶经验，并合理使用发动机制动。",
        },
        {
          question: "这里的“微气候”会对高空滑索体验产生什么物理影响？",
          answer:
            "微气候在现场最直接的体现之一，是热气流与峡谷穿堂风对速度和体感的影响。实际运营通常需要依据实时风况监测决定是否暂停项目，因此风速阈值比宣传描述更重要。",
        },
        {
          question: "如果不体验高空滑索，单纯观景的价值在哪里？",
          answer:
            "即使不参加滑索，这里依然提供约 180 度无遮挡山谷视野，可观察山体切割、谷地冲刷地貌以及不同海拔带的植被变化。作为一处地理地貌观测台，它本身就具有很高的独立价值。",
        },
      ],
    },
    photos: {
      title: "现场照片",
      intro:
        "涵盖山谷视野、山地道路、观景平台与活动环境的现场影像。",
      mapsCta: "在 Google 地图上查看位置",
      altPrefix: "山谷与观景台照片",
    },
    reviews: {
      title: "访客观察",
      intro:
        "来自访客的高频反馈被归纳为三个具体的观察维度，帮助建立合理的到访预期。",
      mapsCta: "在 Google 地图上查看位置",
      themes: [
        {
          title: "观景收益",
          body:
            "高评分首先来自山谷全景、山脊道路和天气变化带来的视觉层次。即使不参加高空活动，单纯停留观景也足以构成主要吸引力。",
        },
        {
          title: "冒险强度",
          body:
            "对参与滑索的访客而言，地形落差与开阔坡面会明显放大高度感与速度感，因此身体状态与当天风况都比宣传语更重要。",
        },
        {
          title: "条件波动",
          body:
            "实际体验会受到能见度、风力、道路状况与车流影响。相较于笼统的“值得去”，这些变量更值得提前写清楚。",
        },
      ],
    },
    transport: {
      title: "怎么到这里",
      intro:
        "Tirolesa Mirador Del Sol 位于 Merlo 山地上方，通常需要先抵达 Villa de Merlo，再完成最后一段盘山路上升。以下方式最常见。",
      cards: [
        {
          title: "区域机场",
          body:
            "距离最近的为 Valle del Conlara 国际机场 (RLO)，车程约 30 分钟。若航班班次有限，也可飞往 San Luis (LUQ，距约 200 公里) 或 Cordoba (COR，距约 250 公里)，随后转乘长途巴士或租赁汽车进入 Merlo。",
        },
        {
          title: "自驾抵达",
          body:
            "从 Merlo 市区沿 Avenida de los Césares 向东接入 Ruta 5。这是一条全程铺装但蜿蜒的发夹弯山路（Camino al Filo），车程约 25-35 分钟。上下山务必使用低挡位发动机制动，观景台附近有非铺装停车区域。",
        },
        {
          title: "巴士加接驳",
          body:
            "长途巴士均停靠 Villa de Merlo 镇中心客运站（Terminal de Ómnibus）。目前无公共巴士直达 Mirador del Sol，您需要在镇上租用 Remis（当地出租车）、乘坐专线旅游小巴或报名半日游旅行团。",
        },
        {
          title: "最后一段山路",
          body:
            "接近 1470 米观景台时风力会显著增强。若骑行或徒步，请在早晨出发以避开午后高温与逆风；机动车抵达后，请将车辆停稳在路边宽阔处，注意开门时的强风。",
        },
      ],
    },
    visit: {
      title: "到访建议",
      cards: [
        {
          title: "最佳光线",
          body:
            "若以摄影和山地观察为主，建议优先考虑日出后或日落前 1 至 1.5 小时。清晨更适合看云层与逆温，傍晚更适合看山脊侧光。",
        },
        {
          title: "温差与风寒",
          body:
            "随着海拔升高，体感温度通常会低于山下市区。山脊位置叠加风寒效应，即使暖季也建议携带防风外套、饮水和基础防晒。",
        },
        {
          title: "停留时长",
          body:
            "纯观景拍照可安排约 30 至 60 分钟；若叠加滑索、邻近观景点或山路停靠拍摄，半天会更从容。",
        },
        {
          title: "现场安全",
          body:
            "高空项目请始终以现场运营规范为准。若当天风力偏强、能见度较低或身体状态欠佳，优先选择停留观景而非勉强参与活动。",
        },
      ],
    },
    editorial: {
      title: "编辑说明",
      body:
        "本站以非盈利景点科普为目标，因此页面优先提供位置、环境语境、交通方式、现场照片与官方资料，而不是商业导流、价格刺激或夸张宣传语。",
    },
    links: {
      title: "官方延伸链接",
      intro:
        "这些站点可用于继续了解 Villa de Merlo、圣路易斯省及阿根廷国家层面的旅游公共信息、山地交通与政务资源。",
      items: [
        {
          title: "梅洛市官方旅游局",
          href: "https://villademerlo.tur.ar/",
          description:
            "最贴近景点所在地的官方旅游网站，可继续查阅 Merlo 的微气候叙事、景观线路与周边山地活动信息。",
        },
        {
          title: "圣路易斯省旅游局官方门户",
          href: "https://turismo.sanluis.gov.ar/",
          description:
            "省级官方旅游入口，适合扩展阅读 Comechingones 山脉、探险活动和 Merlo 周边自然景观。",
        },
        {
          title: "阿根廷国家政府官网 - 圣路易斯省专页",
          href: "https://www.argentina.gob.ar/sanluis",
          description:
            "国家级政务门户下设的圣路易斯省页面，可作为高权威背景信息入口。",
        },
        {
          title: "圣路易斯省政府官网",
          href: "https://www.sanluis.gov.ar/",
          description:
            "适合补充山区公共信息、政务通知与基础服务资源。",
        },
        {
          title: "阿根廷国家旅游门户",
          href: "https://www.argentina.travel/",
          description:
            "面向国际访客的国家级旅游入口，适合查阅更宏观的交通、目的地与旅行背景信息。",
        },
      ],
    },
    footer: {
      note:
        "本站为聚焦地理环境、观景体验与到访安全，不承载预订、促销或品牌背书。该刊物完全免费，旨在促进阿根廷旅游业的发展。",
      copyright: "© 2026 Tirolesa Mirador Del Sol指南 · 保留所有权利。",
      disclaimer:
        "本网站是一个独立的第三方非盈利科普指南项目，我们与阿根廷政府或任何官方机构均无隶属关系。",
      mapsLabel: "Google Maps →",
    },
  },
  en: {
    localeName: "English",
    title: "Tirolesa Mirador Del Sol | Multilingual Visitor Guide in San Luis, Argentina",
    description:
      "A four-language guide to Tirolesa Mirador Del Sol with geographic context, microclimate notes, transport options, on-site photos, and official reference links.",
    nav: {
      overview: "Overview",
      gallery: "Photos",
      reviews: "Reviews",
      transport: "Access",
      visit: "Plan",
      links: "Links",
    },
    hero: {
      eyebrow: "San Luis Province, Argentina | Scenic ridge lookout and zipline",
      headline: "Tirolesa Mirador Del Sol",
      summary:
        "This page treats the site as a place-based guide rather than a tourism advertisement. It brings together mountain context, microclimate clues, access routes, on-site images, and practical advice for visitors heading above Villa de Merlo.",
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
      { label: "Landscape", value: "ridge views, cloud layers, mountain road" },
      { label: "Experience", value: "lookout platform + zipline" },
      { label: "Regional setting", value: "western edge of the Comechingones range" },
      { label: "Best for", value: "drivers, photographers, light-adventure visitors" },
    ],
    story: {
      title: "Geography and place context",
      intro:
        "The value of Mirador del Sol comes from more than one activity. Road ascent, elevation gain, valley views, cloud behavior, and local naming traditions all shape the experience.",
      cards: [
        {
          title: "Topographic rise",
          body:
            "From central Merlo, the road climbs quickly toward the eastern ridge. That rapid gain in elevation explains the widening views, stronger wind, and changing sky conditions often associated with the site.",
        },
        {
          title: "Microclimate clues",
          body:
            "Merlo is often described through its local microclimate. At this lookout, visitors mostly notice it through mountain shelter effects, day-night temperature contrast, and inversion layers that can produce morning cloud seas.",
        },
        {
          title: "Comechingones backdrop",
          body:
            "The name Mirador del Sol belongs to a broader ridge-view tradition linked to the Comechingones landscape. Sun angles, horizon lines, and seasonal light remain central to the site's identity.",
        },
      ],
    },
    insights: {
      title: "Nature and engineering notes",
      intro:
        "Read as a field site rather than a simple stop, the lookout reveals useful clues about mountain ecology, zipline physics, and the timing of light.",
      cards: [
        {
          title: "Mountain ecology",
          body:
            "As the road rises, lower dry woodland gives way to wind-tolerant shrubs, grasses, and exposed rock. The ridge also creates good conditions for observing soaring birds using thermal and slope lift.",
        },
        {
          title: "Gravity and zipline systems",
          body:
            "Mountain ziplines rely on elevation difference and cable tension. Wind, body weight, and daily operating conditions all affect speed and comfort, so the operator's current briefing should always take priority.",
        },
        {
          title: "Light and cloud timing",
          body:
            "Morning is often better for cloud layers and inversion effects, while late afternoon is stronger for side light on the ridge. For photography, timing matters as much as a clear forecast.",
        },
      ],
    },
    technical: {
      title: "Technical landscape data",
      intro:
        "A stronger destination page benefits from a compact technical sheet summarizing coordinates, elevation, rock type, climate, and vegetation. These details give the site a more geographic reading frame.",
      rows: [
        {
          dimension: "Coordinates",
          value: "32°21'S, 64°58'W",
          note: "Southern Hemisphere location in inland central Argentina along the western side of the Comechingones range.",
        },
        {
          dimension: "Elevation",
          value: "Approx. 1,470 m / 4,822 ft",
          note: "An intermediate height between urban Merlo and the higher ridge crest above.",
        },
        {
          dimension: "Geologic age",
          value: "Paleozoic",
          note: "Part of the older basement context associated with the Comechingones mountains.",
        },
        {
          dimension: "Dominant lithology",
          value: "Crystalline rock, granite, gneiss",
          note: "The exposed landscape reflects long-term weathering and water erosion.",
        },
        {
          dimension: "Mean annual temperature",
          value: "About 17°C in Merlo",
          note: "The lookout often feels 4 to 6°C cooler than the town below, especially under wind exposure.",
        },
        {
          dimension: "Vegetation belt",
          value: "Transitional Chaco upland zone",
          note: "Shrubs, dry-adapted grasses, and highland meadow characteristics appear along the ascent.",
        },
      ],
    },
    routeProfile: {
      title: "Ruta 5 (Camino al Filo) vertical profile",
      intro:
        "Tirolesa Mirador Del Sol makes more sense when read as one node along the climbing scenic road rather than as an isolated lookout. Elevation gain drives the visitor experience.",
      stages: [
        {
          title: "Start: central Merlo",
          elevation: "Approx. 800-900 m",
          body:
            "This lower zone concentrates the best-known Merlo microclimate setting. From here vehicles enter Ruta 5 and begin a sequence of switchbacks through denser vegetation and the clearest urban-mountain transition.",
        },
        {
          title: "Middle node: Tirolesa Mirador Del Sol",
          elevation: "Approx. 1,470 m",
          body:
            "This is the key transition between lower woodland and higher shrubland or grass slope. The land opens abruptly, which explains the stronger canyon view, wind exposure, and the engineering logic of the zipline location.",
        },
        {
          title: "Upper end: Filo Serrano ridge line",
          elevation: "Approx. 2,100 m",
          body:
            "Farther uphill, the road approaches the crest and the natural boundary between San Luis and Cordoba provinces. Vegetation becomes lower and more exposed, while the visual field expands toward adjacent plains.",
        },
      ],
    },
    astronomy: {
      title: "Dark-sky and astronomy reading",
      intro:
        "Seen as an observation platform rather than only a daytime stop, the area also offers a useful framework for night-sky protection, southern-sky recognition, and astrophotography.",
      cards: [
        {
          title: "Low light pollution",
          body:
            "With the ridge helping to block part of the urban glow, clear nights can offer comparatively strong dark-sky conditions. In practical terms, the area is often discussed within a Bortle 3 to 4 style observing range.",
        },
        {
          title: "Southern-sky targets",
          body:
            "The site is well suited for identifying the Southern Cross, Alpha Centauri, and the Magellanic Clouds. For visitors from the Northern Hemisphere, these targets can be one of the most striking differences of place.",
        },
        {
          title: "Astrophotography guidance",
          body:
            "Night photography generally benefits from a tripod and a wide lens in the 14 mm to 24 mm range. If the goal is to combine ridge foreground and Milky Way structure, moonless nights from roughly April to September are often preferred.",
        },
      ],
    },
    faq: {
      title: "Structured visitor FAQ",
      intro:
        "Common practical questions are easier to trust when presented as concise technical answers instead of scattered comments.",
      items: [
        {
          question: "Do I need a 4x4 vehicle to reach Tirolesa Mirador Del Sol?",
          answer:
            "Usually not. The main access section along Ruta 5 is paved and standard two-wheel-drive vehicles normally reach the lookout without issue. The real challenge comes from repeated switchbacks, grade changes, and mountain-driving technique.",
        },
        {
          question: "How does the local microclimate affect the zipline experience?",
          answer:
            "One of the clearest physical effects is the interaction between thermal uplift and canyon wind. Real-time wind monitoring matters more than brochure language because strong airflow changes both safety thresholds and ride conditions.",
        },
        {
          question: "Is the site still worthwhile without doing the zipline?",
          answer:
            "Yes. Even without the aerial activity, the location works as a high-value observation platform with a broad open view across the valley, visible erosional landforms, and a clear transition between elevation belts.",
        },
      ],
    },
    photos: {
      title: "On-site photos",
      intro:
        "The gallery uses local images of the valley, mountain road, lookout area, and activity setting, offering a visual reference before arrival. The hero background comes from the same on-site image set.",
      mapsCta: "View on Google Maps",
      altPrefix: "Valley and lookout photo",
    },
    reviews: {
      title: "Visitor observations",
      intro:
        "Instead of amplifying emotional praise, this section turns recurring comments into three reading points that are more useful for planning a visit.",
      mapsCta: "View on Google Maps",
      themes: [
        {
          title: "Panoramic return",
          body:
            "High ratings are closely tied to the valley panorama, the ascent by mountain road, and changing cloud or light conditions. For many visitors, the viewpoint itself is enough.",
        },
        {
          title: "Adventure intensity",
          body:
            "For zipline participants, the open slope and visible drop can greatly amplify the sensation of speed and height. Physical condition and wind on the day matter more than promotional wording.",
        },
        {
          title: "Variable conditions",
          body:
            "Visibility, wind, traffic, and road status can reshape the experience. These variables are often more useful than generic claims that the place is simply worth visiting.",
        },
      ],
    },
    transport: {
      title: "How to get here",
      intro:
        "Most visitors first reach Villa de Merlo and then complete the final mountain ascent to Mirador del Sol. These are the most practical arrival patterns.",
      cards: [
        {
          title: "Regional airports",
          body:
            "If you want the shortest overland approach, watch for flights serving the Valle del Conlara area. When schedules do not fit, San Luis or Cordoba are broader alternatives followed by road transfer to Merlo.",
        },
        {
          title: "Self-drive route",
          body:
            "Driving is the most direct option. After reaching Merlo, continue uphill along Ruta 5 toward the lookout. Curves, grade changes, and scenic pull-offs make daylight driving the safest choice.",
        },
        {
          title: "Bus plus transfer",
          body:
            "Long-distance buses usually stop in Villa de Merlo first. From there, the final uphill segment normally requires a taxi, remis, arranged transfer, or travel companion with a vehicle.",
        },
        {
          title: "Final mountain segment",
          body:
            "Near the lookout the road feels like a distinct mountain approach rather than a simple urban arrival. Wind exposure, parking distribution, and visibility deserve separate attention.",
        },
      ],
    },
    visit: {
      title: "Plan your visit",
      cards: [
        {
          title: "Best light",
          body:
            "For landscape reading and photography, aim for shortly after sunrise or roughly 1 to 1.5 hours before sunset. Morning favors cloud layers; late afternoon favors ridge relief.",
        },
        {
          title: "Temperature and wind chill",
          body:
            "The ridge usually feels cooler than central Merlo. Add wind exposure and the perceived temperature drops further, so a light windproof layer, water, and sun protection are recommended.",
        },
        {
          title: "Suggested duration",
          body:
            "Allow 30 to 60 minutes for a viewpoint-only stop, or up to half a day if you combine photos, nearby overlooks, and aerial activity.",
        },
        {
          title: "On-site safety",
          body:
            "For adventure activities, the operator's active safety briefing always overrides general travel advice. If wind strengthens, visibility drops, or you do not feel fully fit, a lookout-only visit may be the better option.",
        },
      ],
    },
    editorial: {
      title: "Editorial note",
      body:
        "As a non-profit attraction guide, this site prioritizes orientation, environmental context, access information, on-site photos, and official references over booking prompts or promotional language.",
    },
    links: {
      title: "Official reference links",
      intro:
        "These resources help extend the page outward to Merlo, San Luis Province, and Argentina-wide public travel information.",
      items: [
        {
          title: "Villa de Merlo Tourism Office",
          href: "https://villademerlo.tur.ar/",
          description:
            "The most locally relevant official tourism source for Merlo, useful for broader context on scenic circuits, local climate narratives, and nearby attractions.",
        },
        {
          title: "Turismo San Luis",
          href: "https://turismo.sanluis.gov.ar/",
          description:
            "The official provincial tourism portal, suitable for expanding the ecological and mountain-travel context around the Comechingones range.",
        },
        {
          title: "San Luis Province - Argentina.gob.ar",
          href: "https://www.argentina.gob.ar/sanluis",
          description:
            "A national government page offering a higher-authority overview of the province and its public context.",
        },
        {
          title: "Government of San Luis Province",
          href: "https://www.sanluis.gov.ar/",
          description:
            "Useful for public notices, provincial services, and broader practical context.",
        },
        {
          title: "Argentina.travel",
          href: "https://www.argentina.travel/",
          description:
            "Argentina's official travel gateway for international visitors seeking broader route and destination context.",
        },
      ],
    },
    footer: {
      note:
        "This site focuses on geography, viewpoint experience, and visitor safety. It does not provide booking, promotions, or brand endorsement. The publication is fully free and aims to support the development of tourism in Argentina.",
      copyright: "© 2026 Tirolesa Mirador Del Sol Guide. All rights reserved.",
      disclaimer:
        "This website is an independent third-party non-profit educational guide project and has no institutional affiliation with the Government of Argentina or any official authority.",
      mapsLabel: "Google Maps →",
    },
  },
  it: {
    localeName: "Italiano",
    title: "Tirolesa Mirador Del Sol | Guida multilingue per visitatori in Argentina",
    description:
      "Guida in quattro lingue a Tirolesa Mirador Del Sol con contesto geografico, note sul microclima, modi di arrivo, foto sul posto e link ufficiali.",
    nav: {
      overview: "Panoramica",
      gallery: "Foto",
      reviews: "Recensioni",
      transport: "Accesso",
      visit: "Visita",
      links: "Link",
    },
    hero: {
      eyebrow: "Provincia di San Luis, Argentina | Belvedere di cresta e tirolesa",
      headline: "Tirolesa Mirador Del Sol",
      summary:
        "La pagina presenta il luogo come guida territoriale e non come annuncio promozionale. Riunisce contesto montano, indizi di microclima, modi di arrivo, immagini reali e consigli pratici per chi sale sopra Villa de Merlo.",
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
      { label: "Paesaggio", value: "vista di cresta, nuvole basse, strada montana" },
      { label: "Esperienza", value: "belvedere + tirolesa" },
      { label: "Contesto regionale", value: "margine occidentale dei Comechingones" },
      { label: "Adatto a", value: "automobilisti, fotografi, visitatori soft adventure" },
    ],
    story: {
      title: "Geografia e contesto locale",
      intro:
        "Il valore del Mirador del Sol non dipende solo da un'attivita. Salita stradale, quota, vista sulla valle, nuvole e tradizione del nome costruiscono insieme l'esperienza.",
      cards: [
        {
          title: "Rapido aumento di quota",
          body:
            "Dal centro di Merlo la strada sale rapidamente verso il filo orientale. Questo spiega l'apertura del panorama, il vento piu forte e la grande variabilita del cielo.",
        },
        {
          title: "Indizi di microclima",
          body:
            "Merlo viene spesso raccontata attraverso il suo microclima. Qui il visitatore lo percepisce soprattutto nella protezione offerta dal rilievo, nell'escursione termica e nelle inversioni che possono generare nubi basse al mattino.",
        },
        {
          title: "Sfondo dei Comechingones",
          body:
            "Il nome Mirador del Sol appartiene a una piu ampia cultura dei belvedere di cresta. Angolo del sole, linea dell'orizzonte e luce stagionale restano elementi chiave dell'identita del sito.",
        },
      ],
    },
    insights: {
      title: "Osservazioni naturali e tecniche",
      intro:
        "Letto come punto di osservazione e non solo come sosta panoramica, il luogo offre spunti su ecologia montana, fisica della tirolesa e tempi della luce.",
      cards: [
        {
          title: "Ecologia di montagna",
          body:
            "Salendo, il bosco secco inferiore lascia spazio a arbusti piu resistenti al vento, erbe alte e roccia affiorante. La cresta favorisce anche l'osservazione di uccelli che sfruttano le correnti ascensionali.",
        },
        {
          title: "Logica gravitazionale della tirolesa",
          body:
            "Le tirolese di montagna funzionano grazie al dislivello e alla tensione del cavo. Vento, peso corporeo e condizioni operative del giorno influenzano velocita e comfort, quindi vale sempre il briefing attivo dell'operatore.",
        },
        {
          title: "Luce e nubi",
          body:
            "Il mattino favorisce strati di nuvole e inversioni termiche; il tardo pomeriggio valorizza meglio la luce radente sul filo. Per fotografare, il momento giusto conta quasi quanto il meteo.",
        },
      ],
    },
    technical: {
      title: "Scheda tecnica del paesaggio",
      intro:
        "Una pagina piu autorevole beneficia di una scheda sintetica con coordinate, quota, litologia, clima e fascia vegetazionale. Aiuta a leggere il luogo in chiave geografica e non solo turistica.",
      rows: [
        {
          dimension: "Coordinate",
          value: "32°21'S, 64°58'W",
          note: "Posizione dell'emisfero australe nell'Argentina interna centrale, sul versante occidentale dei Comechingones.",
        },
        {
          dimension: "Quota",
          value: "Circa 1.470 m / 4.822 ft",
          note: "Altezza intermedia tra Merlo urbana e la linea di cresta piu elevata.",
        },
        {
          dimension: "Eta geologica",
          value: "Paleozoico",
          note: "Inserita nel contesto del basamento antico della catena.",
        },
        {
          dimension: "Litologia principale",
          value: "Rocce cristalline, granito, gneiss",
          note: "Il paesaggio esposto riflette lunga alterazione e incisione idrica.",
        },
        {
          dimension: "Temperatura media annua",
          value: "Circa 17°C a Merlo",
          note: "Il belvedere risulta spesso 4-6°C piu fresco del centro abitato, soprattutto con vento.",
        },
        {
          dimension: "Fascia vegetazionale",
          value: "Transizione alto Chaco",
          note: "Arbusti, graminacee resistenti alla siccita e caratteri di prateria montana.",
        },
      ],
    },
    routeProfile: {
      title: "Profilo verticale della Ruta 5",
      intro:
        "La tirolesa e il mirador si comprendono meglio come tappa di una strada panoramica in salita, non come luogo isolato. L'esperienza del visitatore e guidata soprattutto dal dislivello.",
      stages: [
        {
          title: "Partenza: Merlo centro",
          elevation: "Circa 800-900 m",
          body:
            "Qui si concentra il microclima piu noto della citta. Da questo punto la Ruta 5 sale con tornanti successivi tra vegetazione piu fitta e un chiaro passaggio tra urbano e montagna.",
        },
        {
          title: "Nodo intermedio: Tirolesa Mirador Del Sol",
          elevation: "Circa 1.470 m",
          body:
            "Questo tratto segna il passaggio tra bosco inferiore e arbusti o pendii erbosi piu alti. L'apertura improvvisa del rilievo spiega panorama, vento e logica ingegneristica della tirolesa.",
        },
        {
          title: "Parte alta: Filo Serrano",
          elevation: "Circa 2.100 m",
          body:
            "Più in alto la strada si avvicina alla cresta e al confine naturale tra San Luis e Cordoba. La vegetazione diventa piu bassa e la visuale si apre maggiormente verso le pianure vicine.",
        },
      ],
    },
    astronomy: {
      title: "Cielo notturno e osservazione astronomica",
      intro:
        "Considerato come piattaforma di osservazione, il sito ha interesse anche notturno per condizioni di cielo scuro, riconoscimento del cielo australe e fotografia astronomica.",
      cards: [
        {
          title: "Basso inquinamento luminoso",
          body:
            "La cresta aiuta a schermare parte della luce urbana, per cui le notti limpide possono offrire condizioni favorevoli di cielo buio. In termini pratici l'area viene spesso collocata in un intervallo simile a Bortle 3-4.",
        },
        {
          title: "Riferimenti del cielo australe",
          body:
            "Il luogo e adatto a riconoscere Croce del Sud, Alpha Centauri e Nubi di Magellano. Per chi proviene dall'emisfero nord, questi oggetti sono tra gli elementi piu distintivi.",
        },
        {
          title: "Suggerimenti fotografici",
          body:
            "Per fotografare il cielo convengono treppiede stabile e grandangolo tra 14 mm e 24 mm. Se si vuole includere la cresta e la Via Lattea, le notti senza luna tra aprile e settembre sono spesso le piu adatte.",
        },
      ],
    },
    faq: {
      title: "FAQ strutturata",
      intro:
        "Le domande pratiche piu frequenti risultano piu affidabili se organizzate come risposte tecniche concise e non come commenti sparsi.",
      items: [
        {
          question: "Serve un veicolo 4x4 per arrivare?",
          answer:
            "In genere no. Il tratto principale della Ruta 5 verso il mirador e asfaltato e una normale auto a due ruote motrici e di solito sufficiente. Le difficolta reali riguardano tornanti, pendenza e tecnica di guida in montagna.",
        },
        {
          question: "In che modo il microclima influenza la tirolesa?",
          answer:
            "Uno degli effetti piu evidenti e l'interazione tra termiche e vento del canyon. Il monitoraggio del vento in tempo reale conta piu delle descrizioni promozionali, perche modifica sia la sicurezza sia la dinamica della corsa.",
        },
        {
          question: "Vale la visita anche senza fare la tirolesa?",
          answer:
            "Si. Anche senza attivita aerea, il sito resta un ottimo punto di osservazione con ampia vista sulla valle, forme erosive leggibili e transizione evidente tra fasce altitudinali.",
        },
      ],
    },
    photos: {
      title: "Foto sul posto",
      intro:
        "La galleria raccoglie immagini reali della valle, della strada di salita, del belvedere e dell'area di attivita. Anche lo sfondo hero proviene dallo stesso archivio locale.",
      mapsCta: "Apri su Google Maps",
      altPrefix: "Foto del paesaggio e del mirador",
    },
    reviews: {
      title: "Osservazioni dei visitatori",
      intro:
        "Invece di accumulare elogi emotivi, la pagina organizza i riscontri ricorrenti in tre chiavi di lettura piu utili per preparare la visita.",
      mapsCta: "Apri su Google Maps",
      themes: [
        {
          title: "Rendimento panoramico",
          body:
            "Le valutazioni alte dipendono soprattutto dalla vista sulla valle, dalla salita panoramica e dai cambi di luce o nuvolosita. Per molti il belvedere basta gia da solo.",
        },
        {
          title: "Intensita dell'avventura",
          body:
            "Chi prova la tirolesa percepisce in modo piu forte altezza e velocita per via del versante aperto e del dislivello visibile. Contano molto le condizioni del giorno.",
        },
        {
          title: "Condizioni variabili",
          body:
            "Visibilita, vento, traffico e stato della strada possono cambiare sensibilmente l'esperienza. Sono dati piu utili di una generica formula promozionale.",
        },
      ],
    },
    transport: {
      title: "Come arrivare",
      intro:
        "Nella maggior parte dei casi si raggiunge prima Villa de Merlo e poi si completa l'ultima salita di montagna verso il Mirador del Sol.",
      cards: [
        {
          title: "Aeroporti regionali",
          body:
            "Per ridurre il tratto su strada conviene controllare i voli verso l'area della Valle del Conlara. In alternativa si puo arrivare a San Luis o Cordoba e proseguire via terra fino a Merlo.",
        },
        {
          title: "Arrivo in auto",
          body:
            "L'auto e il mezzo piu diretto. Una volta a Merlo si continua in salita lungo la Ruta 5 verso il mirador; curve, pendenza e soste panoramiche rendono preferibile la guida diurna.",
        },
        {
          title: "Bus piu trasferimento",
          body:
            "I bus a lunga percorrenza arrivano di solito alla terminal di Villa de Merlo. Da li l'ultimo tratto richiede normalmente taxi, remis, trasferimento concordato o un veicolo privato.",
        },
        {
          title: "Ultimo tratto montano",
          body:
            "Vicino al belvedere la strada va considerata come un vero accesso di montagna: esposizione al vento, soste distribuite e visibilita richiedono attenzione autonoma.",
        },
      ],
    },
    visit: {
      title: "Pianifica la visita",
      cards: [
        {
          title: "Luce migliore",
          body:
            "Per leggere il paesaggio e fotografare, privilegia l'ora dopo l'alba oppure circa 1-1,5 ore prima del tramonto. Il mattino favorisce le nubi basse, il tardo pomeriggio il rilievo del crinale.",
        },
        {
          title: "Temperatura e vento",
          body:
            "La cresta risulta di solito piu fresca del centro di Merlo. Con il vento la temperatura percepita scende ancora, quindi convengono giacca leggera antivento, acqua e protezione solare.",
        },
        {
          title: "Durata consigliata",
          body:
            "Calcola 30-60 minuti per sola sosta panoramica, oppure fino a mezza giornata se aggiungi foto, belvederi vicini e attivita aeree.",
        },
        {
          title: "Sicurezza sul posto",
          body:
            "Per le attivita d'avventura conta sempre il briefing operativo attivo. Se il vento aumenta, la visibilita cala o non ti senti in piena forma, puo essere preferibile una visita solo panoramica.",
        },
      ],
    },
    editorial: {
      title: "Nota editoriale",
      body:
        "Come guida non profit, il sito privilegia orientamento, contesto ambientale, modi di arrivo, immagini sul posto e riferimenti ufficiali rispetto a linguaggio commerciale o inviti alla prenotazione.",
    },
    links: {
      title: "Link ufficiali di riferimento",
      intro:
        "Queste risorse aiutano ad ampliare la lettura del luogo verso Merlo, la provincia di San Luis e il contesto pubblico nazionale argentino.",
      items: [
        {
          title: "Turismo ufficiale di Villa de Merlo",
          href: "https://villademerlo.tur.ar/",
          description:
            "La fonte turistica ufficiale piu vicina al luogo, utile per il contesto locale su itinerari panoramici, clima e attrazioni della zona.",
        },
        {
          title: "Turismo San Luis",
          href: "https://turismo.sanluis.gov.ar/",
          description:
            "Portale turistico ufficiale della provincia, adatto a leggere in modo piu ampio il paesaggio montano dei Comechingones.",
        },
        {
          title: "Provincia di San Luis - Argentina.gob.ar",
          href: "https://www.argentina.gob.ar/sanluis",
          description:
            "Pagina governativa nazionale con un quadro piu istituzionale della provincia e del suo contesto pubblico.",
        },
        {
          title: "Governo della Provincia di San Luis",
          href: "https://www.sanluis.gov.ar/",
          description:
            "Utile per avvisi pubblici, servizi provinciali e contesto pratico piu ampio.",
        },
        {
          title: "Argentina.travel",
          href: "https://www.argentina.travel/",
          description:
            "Portale ufficiale nazionale per i visitatori internazionali che cercano un riferimento piu generale su destinazioni e spostamenti.",
        },
      ],
    },
    footer: {
      note:
        "Il sito si concentra su contesto geografico, esperienza panoramica e sicurezza di visita. Non ospita prenotazioni, promozioni o sostegni di marchio. La pubblicazione e completamente gratuita e intende favorire lo sviluppo del turismo in Argentina.",
      copyright: "© 2026 Guida Tirolesa Mirador Del Sol. Tutti i diritti riservati.",
      disclaimer:
        "Questo sito e un progetto indipendente, non profit e divulgativo di terza parte; non ha alcun rapporto istituzionale con il governo argentino o con enti ufficiali.",
      mapsLabel: "Google Maps →",
    },
  },
  es: {
    localeName: "Español",
    title: "Tirolesa Mirador Del Sol | Guia multilingue del mirador en San Luis",
    description:
      "Guia en cuatro idiomas sobre Tirolesa Mirador Del Sol con contexto geografico, notas de microclima, formas de acceso, fotos del lugar y enlaces oficiales.",
    nav: {
      overview: "Panorama",
      gallery: "Fotos",
      reviews: "Reseñas",
      transport: "Acceso",
      visit: "Visita",
      links: "Enlaces",
    },
    hero: {
      eyebrow: "Provincia de San Luis, Argentina | Mirador serrano y tirolesa",
      headline: "Tirolesa Mirador Del Sol",
      summary:
        "La pagina presenta el sitio como una guia territorial y no como una promocion turistica. Reune contexto de montaña, claves de microclima, formas de llegada, imagenes reales y recomendaciones practicas para quienes suben sobre Villa de Merlo.",
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
      { label: "Paisaje", value: "vista de filo, capas de nubes, camino serrano" },
      { label: "Experiencia", value: "mirador + tirolesa" },
      { label: "Entorno regional", value: "borde occidental de los Comechingones" },
      { label: "Ideal para", value: "viajeros en auto, fotografia y aventura suave" },
    ],
    story: {
      title: "Geografia y contexto local",
      intro:
        "El valor de Mirador del Sol no depende solo de una actividad. La subida, la altura, la vista del valle, el comportamiento de las nubes y la tradicion del nombre forman una sola experiencia territorial.",
      cards: [
        {
          title: "Ascenso topografico",
          body:
            "Desde el centro de Merlo la ruta gana altura con rapidez hacia el cordon oriental. Ese cambio explica la amplitud de la vista, el viento mas fuerte y la variacion del cielo.",
        },
        {
          title: "Claves de microclima",
          body:
            "Merlo suele describirse a partir de su microclima. En este mirador eso se percibe sobre todo por el abrigo de la sierra, la amplitud termica y las inversiones que pueden generar nubes bajas por la mañana.",
        },
        {
          title: "Marco Comechingones",
          body:
            "El nombre Mirador del Sol pertenece a una tradicion mas amplia de miradores de altura. Los angulos del sol, la linea del horizonte y la luz estacional siguen siendo parte central de la identidad del sitio.",
        },
      ],
    },
    insights: {
      title: "Lecturas naturales y tecnicas",
      intro:
        "Si se observa como nodo de interpretacion y no solo como parada panoramica, el lugar permite hablar de ecologia serrana, fisica de la tirolesa y tiempos de la luz.",
      cards: [
        {
          title: "Ecologia de altura",
          body:
            "A medida que el camino asciende, el bosque seco inferior deja paso a arbustos mas resistentes al viento, pastos serranos y roca expuesta. La cresta tambien favorece la observacion de aves planeadoras.",
        },
        {
          title: "Logica gravitatoria de la tirolesa",
          body:
            "Las tirolesas de montaña funcionan por diferencia de altura y tension del cable. Viento, peso corporal y condiciones operativas del dia influyen en la velocidad y la sensacion, por lo que manda siempre la charla de seguridad activa.",
        },
        {
          title: "Luz y nubosidad",
          body:
            "La mañana suele ser mejor para capas de nubes e inversiones termicas; el final de la tarde favorece la luz lateral sobre el filo. Para fotografiar, la hora elegida importa casi tanto como el pronostico.",
        },
      ],
    },
    technical: {
      title: "Ficha tecnica del paisaje",
      intro:
        "Una pagina mas solida gana mucho con una ficha compacta de coordenadas, altura, litologia, clima y vegetacion. Esto permite leer el sitio con una logica geografica y no solo turistica.",
      rows: [
        {
          dimension: "Coordenadas",
          value: "32°21'S, 64°58'W",
          note: "Ubicacion del hemisferio sur en el interior central argentino, sobre el lado occidental de los Comechingones.",
        },
        {
          dimension: "Altitud",
          value: "Aprox. 1.470 m / 4.822 ft",
          note: "Cota intermedia entre el Merlo urbano y la cresta mas alta.",
        },
        {
          dimension: "Edad geologica",
          value: "Paleozoico",
          note: "Parte del contexto de basamento antiguo de la sierra.",
        },
        {
          dimension: "Litologia dominante",
          value: "Roca cristalina, granito, gneis",
          note: "El relieve visible refleja meteorizacion prolongada y erosion hidrica.",
        },
        {
          dimension: "Temperatura media anual",
          value: "Cerca de 17°C en Merlo",
          note: "El mirador suele sentirse 4-6°C mas fresco que el pueblo, sobre todo con viento.",
        },
        {
          dimension: "Piso de vegetacion",
          value: "Transicion de Chaco serrano",
          note: "Predominan arbustos, pastos resistentes a la sequia y rasgos de pastizal alto.",
        },
      ],
    },
    routeProfile: {
      title: "Perfil vertical de la Ruta 5",
      intro:
        "La tirolesa y el mirador se entienden mejor como parte de una carretera panoramica en ascenso y no como un punto aislado. La ganancia de altura organiza la experiencia completa.",
      stages: [
        {
          title: "Inicio: centro de Merlo",
          elevation: "Aprox. 800-900 m",
          body:
            "Aqui se concentra el microclima mas conocido de la ciudad. Desde este punto la Ruta 5 asciende con curvas cerradas entre vegetacion mas densa y una transicion clara entre espacio urbano y serrano.",
        },
        {
          title: "Nodo medio: Tirolesa Mirador Del Sol",
          elevation: "Aprox. 1.470 m",
          body:
            "Este tramo marca la transicion entre bosque bajo y matorral o ladera herbacea de mayor altura. La apertura repentina del relieve explica el panorama, el viento y la logica tecnica del trazado de la tirolesa.",
        },
        {
          title: "Final alto: Filo Serrano",
          elevation: "Aprox. 2.100 m",
          body:
            "Mas arriba, la ruta se acerca a la cresta y al limite natural entre San Luis y Cordoba. La vegetacion se vuelve mas baja y la vista se expande hacia llanuras vecinas.",
        },
      ],
    },
    astronomy: {
      title: "Cielo oscuro y observacion astronomica",
      intro:
        "Si se interpreta como plataforma de observacion, el sitio tambien tiene valor nocturno por sus condiciones de cielo oscuro, la lectura del cielo austral y la fotografia astronomica.",
      cards: [
        {
          title: "Baja contaminacion luminica",
          body:
            "La sierra ayuda a bloquear parte del resplandor urbano, de modo que las noches despejadas pueden ofrecer condiciones favorables de observacion. En terminos practicos, la zona suele comentarse en un rango cercano a Bortle 3-4.",
        },
        {
          title: "Referencias del cielo austral",
          body:
            "El lugar es adecuado para reconocer Cruz del Sur, Alpha Centauri y las Nubes de Magallanes. Para visitantes del hemisferio norte, estos objetos suelen ser uno de los rasgos mas distintivos.",
        },
        {
          title: "Consejos de fotografia",
          body:
            "Para fotografiar el cielo convienen tripode estable y gran angular entre 14 mm y 24 mm. Si se desea combinar la cresta y la Via Lactea, las noches sin luna entre abril y septiembre suelen ser las mejores.",
        },
      ],
    },
    faq: {
      title: "FAQ estructurada",
      intro:
        "Las preguntas practicas mas frecuentes resultan mas utiles cuando se presentan como respuestas tecnicas breves y no como comentarios dispersos.",
      items: [
        {
          question: "¿Hace falta un vehiculo 4x4 para llegar?",
          answer:
            "Por lo general no. El tramo principal de la Ruta 5 hacia el mirador esta asfaltado y un auto comun de traccion simple suele ser suficiente. La dificultad real esta en las curvas cerradas, la pendiente y la tecnica de manejo serrano.",
        },
        {
          question: "¿Como afecta el microclima a la experiencia de tirolesa?",
          answer:
            "Uno de los efectos mas claros es la interaccion entre termicas y viento de quebrada. El monitoreo de viento en tiempo real importa mas que cualquier frase promocional, porque condiciona tanto la seguridad como la dinamica del recorrido.",
        },
        {
          question: "¿Vale la pena visitar el lugar sin hacer la tirolesa?",
          answer:
            "Si. Incluso sin actividad aerea, el sitio funciona como mirador de alto valor con amplia vista del valle, formas erosivas visibles y una transicion clara entre pisos altitudinales.",
        },
      ],
    },
    photos: {
      title: "Fotos del sitio",
      intro:
        "La galeria reune imagenes reales del valle, la ruta de subida, el mirador y el entorno de actividad. La imagen principal tambien procede de este mismo archivo local.",
      mapsCta: "Ver en Google Maps",
      altPrefix: "Foto del valle y del mirador",
    },
    reviews: {
      title: "Observaciones de visitantes",
      intro:
        "En vez de acumular elogios emotivos, esta seccion organiza los comentarios repetidos en tres claves de lectura mas utiles para planificar la visita.",
      mapsCta: "Ver en Google Maps",
      themes: [
        {
          title: "Retorno panoramico",
          body:
            "Las valoraciones altas se relacionan sobre todo con la vista del valle, la subida por camino serrano y los cambios de luz o nubosidad. Para mucha gente, el mirador ya vale por si mismo.",
        },
        {
          title: "Intensidad de aventura",
          body:
            "Quienes prueban la tirolesa suelen percibir con mas fuerza la velocidad y la altura por la pendiente abierta y el desnivel visible. Importan mucho las condiciones del dia.",
        },
        {
          title: "Condiciones variables",
          body:
            "Visibilidad, viento, trafico y estado del camino pueden modificar mucho la experiencia. Son datos mas utiles que una frase promocional generica.",
        },
      ],
    },
    transport: {
      title: "Como llegar",
      intro:
        "En la practica, la mayoria de los visitantes llega primero a Villa de Merlo y luego completa el ultimo ascenso serrano hacia Mirador del Sol.",
      cards: [
        {
          title: "Aeropuertos regionales",
          body:
            "Si buscas reducir el tramo terrestre, conviene revisar vuelos hacia el area de Valle del Conlara. Cuando no coinciden los horarios, San Luis o Cordoba son alternativas mas amplias antes de seguir por carretera hasta Merlo.",
        },
        {
          title: "Llegada en auto",
          body:
            "El auto es la forma mas directa. Una vez en Merlo, la subida por Ruta 5 hacia el mirador presenta curvas, pendiente y paradas panoramicas, por lo que resulta preferible conducir de dia.",
        },
        {
          title: "Bus y transferencia",
          body:
            "Los buses de larga distancia suelen terminar en la terminal de Villa de Merlo. Desde alli, el ultimo tramo normalmente requiere taxi, remis, traslado acordado o un vehiculo particular.",
        },
        {
          title: "Ultimo tramo serrano",
          body:
            "Cerca del mirador el acceso debe leerse como un verdadero tramo de montaña y no como una llegada urbana simple. La exposicion al viento, la visibilidad y los puntos de estacionamiento merecen atencion propia.",
        },
      ],
    },
    visit: {
      title: "Sugerencias de visita",
      cards: [
        {
          title: "Mejor luz",
          body:
            "Para leer el paisaje y fotografiar, conviene llegar poco despues del amanecer o entre 1 y 1,5 horas antes del atardecer. La mañana favorece las nubes bajas; la tarde, el relieve lateral del filo.",
        },
        {
          title: "Temperatura y viento",
          body:
            "La cresta suele sentirse mas fresca que el centro de Merlo. Si se suma el viento, baja aun mas la temperatura percibida, por lo que conviene llevar abrigo liviano cortaviento, agua y proteccion solar.",
        },
        {
          title: "Tiempo recomendado",
          body:
            "Reserva 30 a 60 minutos para una parada panoramica simple, o hasta media jornada si sumas fotos, miradores cercanos y actividad aerea.",
        },
        {
          title: "Seguridad en sitio",
          body:
            "En actividades de aventura siempre prevalece la indicacion operativa vigente. Si aumenta el viento, cae la visibilidad o no te sientes en plena forma, puede ser mejor una visita solo panoramica.",
        },
      ],
    },
    editorial: {
      title: "Nota editorial",
      body:
        "Como guia no lucrativa de divulgacion turistica, el sitio prioriza orientacion, contexto ambiental, formas de llegada, fotos del lugar y referencias oficiales por encima del lenguaje comercial.",
    },
    links: {
      title: "Enlaces oficiales de referencia",
      intro:
        "Estos recursos permiten ampliar la lectura del lugar hacia Merlo, la provincia de San Luis y el sistema publico de informacion turistica de Argentina.",
      items: [
        {
          title: "Secretaria de Turismo de Villa de Merlo",
          href: "https://villademerlo.tur.ar/",
          description:
            "La fuente oficial mas cercana al lugar, util para ampliar contexto local sobre circuitos panoramicos, clima y atractivos cercanos.",
        },
        {
          title: "Turismo San Luis",
          href: "https://turismo.sanluis.gov.ar/",
          description:
            "Portal oficial de turismo provincial, adecuado para entender en escala mas amplia el paisaje serrano de los Comechingones.",
        },
        {
          title: "Provincia de San Luis - Argentina.gob.ar",
          href: "https://www.argentina.gob.ar/sanluis",
          description:
            "Pagina gubernamental nacional con un marco mas institucional sobre la provincia y su contexto publico.",
        },
        {
          title: "Gobierno de la Provincia de San Luis",
          href: "https://www.sanluis.gov.ar/",
          description:
            "Util para avisos publicos, servicios provinciales y contexto practico mas amplio.",
        },
        {
          title: "Argentina.travel",
          href: "https://www.argentina.travel/",
          description:
            "Portal oficial nacional para visitantes internacionales que buscan una referencia mas general sobre destinos y desplazamientos.",
        },
      ],
    },
    footer: {
      note:
        "Este sitio se centra en el entorno geografico, la experiencia panoramica y la seguridad de visita. No ofrece reservas, promociones ni respaldo de marca. La publicacion es completamente gratuita y busca contribuir al desarrollo del turismo en Argentina.",
      copyright: "© 2026 Guia Tirolesa Mirador Del Sol. Todos los derechos reservados.",
      disclaimer:
        "Este sitio web es un proyecto independiente, no lucrativo y divulgativo de terceros; no tiene relacion institucional con el Gobierno de Argentina ni con ninguna entidad oficial.",
      mapsLabel: "Google Maps →",
    },
  },
};
