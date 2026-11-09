export const locales = ["es", "en", "it", "zh"] as const;

export type Locale = (typeof locales)[number];

type TextCard = { title: string; body: string };

export type WeatherConditionKey =
  | "clear"
  | "mostlyClear"
  | "partlyCloudy"
  | "overcast"
  | "fog"
  | "drizzle"
  | "rain"
  | "showers"
  | "snow"
  | "thunderstorm";

export type WeatherAdviceCopy = {
  title: string;
  travelTitle: string;
  planTitle: string;
  itemsTitle: string;
  alertTitle: string;
  noAlertLabel: string;
  alertIntro: string;
  windLevelSuffix: string;
  travel: Record<string, string>;
  plan: Record<string, string>;
  items: Record<string, string>;
  alertNames: Record<string, string>;
  alerts: Record<string, string>;
};

export type WeatherContent = {
  title: string;
  intro: string;
  currentTitle: string;
  forecastTitle: string;
  updatedLabel: string;
  loadingLabel: string;
  errorLabel: string;
  refreshLabel: string;
  feelsLikeLabel: string;
  humidityLabel: string;
  windLabel: string;
  gustLabel: string;
  uvLabel: string;
  precipitationLabel: string;
  todayLabel: string;
  altitudeNote: string;
  conditions: Record<WeatherConditionKey, string>;
  advice: WeatherAdviceCopy;
};

export const siteMeta = {
  name: "Tirolesa Mirador Del Sol",
  shortName: "Mirador del Sol",
  domain: "tirolesamiradordelsol.com",
  city: "Merlo",
  cityFull: "Villa de Merlo",
  state: "San Luis",
  stateFull: "San Luis Province",
  country: "Argentina",
  countryCode: "AR",
  postalCode: "D5881",
  latitude: -32.3621453,
  longitude: -64.9497895,
  timezone: "America/Argentina/San_Luis",
  mapsUrl: "https://maps.app.goo.gl/hQhBUmt4YBhX2B7e7",
  mapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5989.873707894216!2d-64.9497895!3d-32.3621453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2e5ca753d7c0d%3A0xd061f65ae7a8bdf4!2sTirolesa%20Mirador%20Del%20Sol!5e1!3m2!1ses!2sar!4v1789006121405!5m2!1ses!2sar",
  merloTourismUrl: "https://villademerlo.tur.ar/",
  govtTourismUrl: "https://turismo.sanluis.gov.ar/",
  address: "ruta 5 sin numero, D5881 Merlo, San Luis, Argentina",
  addressZh: "ruta 5 sin numero, D5881 Merlo, San Luis, 阿根廷",
  plusCode: "J3Q2+43 Merlo, San Luis, Argentina",
  plusCodeZh: "J3Q2+43 梅洛, 阿根廷圣路易斯",
  phone: "+54 2656 47-8290",
  phoneIntl: "+542656478290",
  rating: "4.7",
  reviewCount: "13,857",
  type: "Tourist attraction",
  heroImage: "/images/hero-tirolesa-mirador-del-sol.jpg",
  heroImageWebp: "/images/hero-tirolesa-mirador-del-sol.webp",
  ogImage: "/images/og-tirolesa-mirador-del-sol.jpg",
  galleryImages: Array.from({ length: 20 }, (_, index) => ({
    src: `/gallery/tirolesamiradordelsol-${index + 1}.jpg`,
    webp: `/gallery/tirolesamiradordelsol-${index + 1}.webp`,
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
    history: string;
    weather: string;
    amenities: string;
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
    directionsCta: string;
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
  history: {
    title: string;
    intro: string;
    cards: TextCard[];
  };
  legends: {
    title: string;
    intro: string;
    cards: TextCard[];
  };
  weather: WeatherContent;
  amenities: {
    title: string;
    intro: string;
    cards: TextCard[];
  };
  landmarks: {
    title: string;
    intro: string;
    items: Array<{ name: string; distance: string; body: string }>;
  };
  faq: {
    title: string;
    intro: string;
    groups: Array<{
      category: string;
      items: Array<{ question: string; answer: string }>;
    }>;
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
  sources: {
    title: string;
    intro: string;
    items: Array<{ title: string; href: string; description: string }>;
  };
  imageCredits: {
    title: string;
    body: string;
  };
  footer: {
    note: string;
    copyright: string;
    disclaimer: string;
    mapsLabel: string;
    napTitle: string;
  };
};

export const localizedPath = (locale: Locale) => (locale === "es" ? "/" : `/${locale}/`);

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
      history: "历史",
      weather: "天气",
      amenities: "周边设施",
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
      directionsCta: "如何到达",
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
        {
          title: "安全与装备",
          body:
            "装备、检查程序和开放情况尚未向经营方核实；请在参加前直接确认。",
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
          note: "南半球，阿根廷中部内陆",
        },
        {
          dimension: "海拔高度",
          value: "约 1,470 米 (4,822 英尺)",
          note: "位于梅洛市区与山脉主峰之间",
        },
        {
          dimension: "地质年代",
          value: "古生代 (Paleozoico)",
          note: "科门钦戈内斯山脉基岩",
        },
        {
          dimension: "主要岩性",
          value: "结晶岩、花岗岩、片麻岩",
          note: "呈现强烈的风化与水蚀地貌",
        },
        {
          dimension: "年均气温",
          value: "约 17°C（Merlo 基准）",
          note: "观景台气温通常比市区低 4-6°C",
        },
        {
          dimension: "植被带",
          value: "查科高山过渡带",
          note: "以灌木与耐旱高山草甸为主",
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
    history: {
      title: "历史脉络与地方背景",
      intro:
        "理解 Tirolesa Mirador Del Sol，需要把它放回一条更长的历史线索：原住民的山地生活、殖民时期的山麓聚落、建镇后的疗养传统，以及公路时代形成的观景文化。",
      cards: [
        {
          title: "原住民的山地记忆",
          body:
            "在西班牙人到来之前，科门钦戈内斯人（Comechingones）长期生活在圣路易斯与科尔多瓦之间的山地与谷地。他们依山而居，以采集、狩猎与小型农耕为生，山脊、水源与太阳方位构成了理解土地的基本坐标。今天观景台所依托的这条山脊，正是这一文化地理长期使用的空间。",
        },
        {
          title: "殖民与建镇",
          body:
            "16 世纪后，西班牙殖民势力沿山谷推进，山麓地带出现牧场、驿站与传教据点。19 世纪中叶，Villa de Merlo 正式建镇，逐步发展为以山地气候与疗养环境闻名的内陆小镇。通往山脊的道路，正是这一地区与高地建立联系的历史产物。",
        },
        {
          title: "公路时代的观景传统",
          body:
            "20 世纪后期，随着公路延伸与汽车普及，Ruta 5（Camino al Filo）成为从镇区通往山脊的主要通道。Mirador del Sol 凭借天然的高点位置，逐渐被固定为观看日出、云海与山谷光线的公共观景点，也由此获得了“太阳瞭望台”的当代含义。",
        },
      ],
    },
    legends: {
      title: "传说与地方叙事",
      intro:
        "以下内容属于地方口述传统与民间叙事，并非可考证的史实，但它们解释了这处山地为何在当地人心目中具有特殊位置。",
      cards: [
        {
          title: "“太阳瞭望台”之名",
          body:
            "当地口述传统把这里称作“太阳的瞭望台”。一种说法认为，早期牧人会在日出前登上山脊，以太阳跃出山谷的位置判断当天的风向与放牧方向，久而久之形成固定的瞭望点。地名中的“Sol（太阳）”正来自这种与光线和方向相关的日常经验。",
        },
        {
          title: "云海之舟",
          body:
            "在梅洛山谷流传的民间故事中，清晨的云海被想象成一片静止的白色湖面，而山脊像停泊在云上的船。老人常提醒孩子：云雾漫上公路时不要独自上山——这是山在用雾说话。这类叙事至今仍被用来提醒访客尊重山地天气的快速变化。",
        },
        {
          title: "塞萨雷斯之城",
          body:
            "梅洛有一条著名的 Avenida de los Césares，其名字来自殖民时期广为流传的“塞萨雷斯之城”（Ciudad de los Césares）传说——一座据称藏在南方群山中的富庶之城。传说虽未被证实，却塑造了这片山地关于“未知与远方”的想象，也提醒访客：这里真正值得寻找的，是地质、星空与云雾本身。",
        },
      ],
    },
    weather: {
      title: "实时天气与 7 日预报",
      intro:
        "以下气象信息依据观景台坐标实时更新，帮助您判断是否需要携带防雨与保暖装备，并合理安排上山时段。",
      currentTitle: "当前天气",
      forecastTitle: "未来数日预报",
      updatedLabel: "更新时间",
      loadingLabel: "正在获取气象数据…",
      errorLabel: "暂时无法获取天气数据，请稍后重试或参考当地气象预报。",
      refreshLabel: "刷新",
      feelsLikeLabel: "体感",
      humidityLabel: "湿度",
      windLabel: "风速",
      windLabel: "风速",
      gustLabel: "阵风",
      uvLabel: "紫外线",
      precipitationLabel: "降水概率",
      todayLabel: "今天",
      altitudeNote:
        "观景台海拔约 1,470 米，体感温度通常低于梅洛市区 4–6°C，并伴有明显山风。",
      conditions: {
        clear: "晴",
        mostlyClear: "晴间多云",
        partlyCloudy: "多云",
        overcast: "阴",
        fog: "雾",
        drizzle: "毛毛雨",
        rain: "雨",
        showers: "阵雨",
        snow: "雪",
        thunderstorm: "雷阵雨",
      },
      advice: {
        title: "出行建议",
        travelTitle: "出行穿搭",
        planTitle: "游玩安排",
        itemsTitle: "随身物品",
        alertTitle: "风险提醒",
        noAlertLabel: "当前无气象预警",
        alertIntro: "建议调整行程，尽量避开危险区域，并密切关注天气变化。",
        windLevelSuffix: "级",
        travel: {
          rainLikely: "大概率会下雨，尽量携带雨具",
          drizzle: "有小雨，路面湿滑，走路注意防滑",
          heavyRain: "降雨较强，建议穿防水外套，避免淋湿后失温",
          thunderstorm: "雷雨天气，注意防雷防雨，避免停留在空旷高处",
          hot: "气温较高，建议穿轻薄透气衣物，尽量避开正午外出",
          uv: "紫外线较强，注意防晒",
          tempSwing: "昼夜温差大，建议备一件外套，方便增减衣物",
          cold: "气温偏低，注意做好防寒保暖",
          windy: "风力偏大，建议穿防风外套，避免宽松衣物与容易被吹落的帽子",
          veryWindy: "大风天气，注意固定好衣物与随身物品",
          clear: "天气晴好，适合户外游览，仍需注意防晒",
          overcast: "光线柔和，适合拍照，穿着以舒适透气为主",
          fallback: "天气平稳，按常规户外穿着即可",
        },
        plan: {
          rainLikely: "降水概率较高，优先选择室内场馆，户外项目建议延后",
          drizzle: "有小雨，露天项目体验较差，注意台阶与栈道湿滑",
          heavyRain: "降雨较强，不建议户外游玩，滑索、缆车等可能临时停运",
          thunderstorm: "雷雨期间请勿登高，不要在山脊、大树或金属设施旁停留，高空项目大概率关闭",
          hot: "缩短户外游玩时间，避开正午高温时段",
          uv: "正午紫外线强，建议在阴影处休息",
          cold: "气温偏低，户外停留时间不宜过长",
          windy: "高空滑索、缆车等露天项目可能因风停运，请以现场公告为准",
          veryWindy: "大风天气，户外高空项目大概率关闭，建议改为山下行程",
          clear: "天气晴朗，适合户外游玩，也适合观赏日出日落与云海",
          overcast: "无暴晒，适合长时间户外游览与拍照",
          fog: "能见度较低，不适合远眺观景，山路行驶请减速",
          mountain: "山地天气变化快，出发前请确认景区与滑索的开放状态",
          fallback: "适合常规户外行程，请留意现场运营公告",
        },
        items: {
          umbrella: "雨伞",
          raincoat: "雨衣（风大时不建议长柄伞）",
          sunscreen: "防晒霜",
          sunglasses: "墨镜",
          hat: "遮阳帽",
          water: "充足饮用水",
          jacket: "一件外套",
          warmCoat: "厚外套、围巾",
          windproof: "防风外套",
          mask: "口罩（能见度差时）",
          fallback: "无需特别携带额外物品",
        },
        alertNames: {
          heavyRain: "强降雨",
          thunderstorm: "雷电",
          veryWindy: "大风",
          fog: "大雾",
          heat: "高温",
          cold: "低温",
        },
        alerts: {
          heavyRain: "降雨较强，请避开山谷与低洼地带，警惕山洪和滑坡。",
          thunderstorm: "雷电天气，请勿登山，不要在山脊或树下避雨，远离金属设施。",
          veryWindy: "大风天气，请远离山脊边缘、广告牌与临时设施。",
          fog: "能见度差，山区道路行驶与观景请格外小心。",
          heat: "高温天气，注意补水防暑，谨防中暑。",
          cold: "低温天气，注意防寒防冻，谨防失温。",
        },
      },
    },
    amenities: {
      title: "周边设施与补给",
      intro:
        "本网站为非盈利科普项目，仅按类型介绍访客常用设施，不推荐、不背书任何具体商户。以下信息帮助您提前规划补给与停留安排。",
      cards: [
        {
          title: "公共卫生间",
          body:
            "观景台一带的公共卫生间数量有限，通常集中在停车区与活动服务点附近。山区设施可能随季节或运营安排调整，建议在梅洛市区先行解决，并自备纸巾与免洗洗手液。",
        },
        {
          title: "停车",
          body:
            "观景台附近为非铺装的开阔停车区域，旺季午后车位相对紧张。请将车辆停稳在路面宽阔处，拉紧手刹，并注意开门时的强风与来往车辆。",
        },
        {
          title: "餐饮补给",
          body:
            "山上餐饮以简餐、小吃和饮品为主，选择相对有限。若对饮食有特殊需求，建议在 Villa de Merlo 市区用餐或提前自备食物与饮水。",
        },
        {
          title: "住宿",
          body:
            "过夜住宿主要集中在山下的 Villa de Merlo 及周边山谷，类型涵盖酒店、山林小屋、公寓与营地等。观景台本身不具备住宿条件，行程通常安排为“山下住宿 + 上山半日”。",
        },
        {
          title: "商超与药店",
          body:
            "超市、便利店与药店集中在梅洛市区。上山前建议一次性备齐饮水、防晒、常用药品与少量现金，以应对山上可能出现的断网与电子支付不便。",
        },
        {
          title: "加油与充电",
          body:
            "常规加油站分布在梅洛市区及进出城干道沿线，山区路段没有加油站。电动车与插电混动车辆应在市区充满电后再上山，并预留往返余量。",
        },
      ],
    },
    landmarks: {
      title: "周边地标与延伸行程",
      intro:
        "以观景台为中心，周边分布着若干可用于延伸行程的地标与区域。距离为概数，实际车程受路况与天气影响。",
      items: [
        {
          name: "Villa de Merlo 市区",
          distance: "约 8–10 公里 · 车程 25–35 分钟",
          body:
            "观景台所在山地线路的起点，集中了住宿、餐饮、加油与补给设施，是上山前最重要的落脚点。",
        },
        {
          name: "Filo Serrano 山脊线",
          distance: "继续上行约 10 公里",
          body:
            "沿 Ruta 5 继续爬升可接近山脊顶部，这里也是圣路易斯省与科尔多瓦省之间的自然地理分界。",
        },
        {
          name: "Valle del Conlara",
          distance: "山麓北侧",
          body:
            "山谷地带的农业与旅游区域，与梅洛共同构成这一地区的活动范围，适合与观景台行程组合安排。",
        },
        {
          name: "La Carolina 历史矿业小镇",
          distance: "西北方向山地",
          body:
            "保留殖民时期矿业遗迹的山地小镇，适合作为更深入的山地历史与地质延伸行程。",
        },
      ],
    },
    faq: {
      title: "常见地质与出行释疑",
      intro:
        "为了帮助您做出最合理的行程决策，我们基于实地地理条件与高频到访反馈，将常见问题归纳为以下四个核心维度（含价格、开放时间与预约）：",
      groups: [
        {
          category: "一、 价格、开放时间与预约 (Precios y Horarios)",
          items: [
            {
              question: "Mirador del Sol 的高空滑索多少钱？",
              answer:
                "滑索价格、支付方式和观景台当前通行条件尚未向经营方或主管单位核实。请在出发前直接确认。",
            },
            {
              question: "Merlo 的 Mirador del Sol 开放时间是什么？",
              answer:
                "滑索和观景台的当前开放时间尚未核实；请在出发前向经营方及当地主管单位确认。天气可能影响运营。",
            },
            {
              question: "高空滑索有年龄或体重限制吗？",
              answer:
                "年龄、体重、健康限制和未成年人的要求尚未向经营方核实。出发前请直接确认；如有健康疑问，请咨询医疗专业人员。",
            },
            {
              question: "可以提前预约滑索吗？",
              answer:
                "能否预约取决于当日运营安排，一般通过现场或运营方官方渠道办理。本站为独立的公益科普指南，不销售、不代订、不收取佣金，仅说明如何在上山前确认活动状态。",
            },
          ],
        },
        {
          category: "二、 地质特征与自然环境 (Geología y Entorno)",
          items: [
            {
              question: "科门钦戈内斯山脉（Comechingones）的地质稳定性如何？在这里进行高空滑索安全吗？",
              answer:
                "该山脉属于阿根廷中部的潘帕斯断块山系（Sierras Pampeanas），基岩主要由古生代的结晶岩、花岗岩和片麻岩构成，地质结构极其古老且稳定。滑索工程的承重锚点均采用重型机械深度打入这些坚硬的无缝基岩中，其抗拉扯与承重能力远超常规土质或喀斯特地貌山体。",
            },
            {
              question: "为什么观景台这一侧的山势如此陡峭，而山脉另一侧却很平缓？",
              answer:
                "这是一个典型的“断块山”地质特征。科门钦戈内斯山脉的西坡（即梅洛市和观景台所在的一侧）处于地质断层面，地势受挤压陡然抬升，造就了滑索所需的巨大峡谷落差；而东坡（朝向科尔多瓦省）则是平缓下降的斜坡。这种不对称地形是数百万年地壳构造运动的直接结果。",
            },
            {
              question: "如果不体验高空滑索，单纯观景的价值在哪里？",
              answer:
                "即使不参加滑索，这里依然提供约 180 度无遮挡山谷视野，可观察山体切割、谷地冲刷地貌以及不同海拔带的植被变化。作为一处地理地貌观测台，它本身就具有很高的独立价值。",
            },
          ],
        },
        {
          category: "三、 微气候与物理影响 (Microclima y Física)",
          items: [
            {
              question: "“微气候”是否意味着观景台这里四季如春、从不下雨？",
              answer:
                "这是一个常见的误区。梅洛的“微气候”主要指空气富氧、极高比例的负离子以及低污染，而非恒温或无降水。实际上，受海拔抬升影响，观景台区域的气象变化比山下市区更剧烈。阵雨、速生云雾以及昼夜大温差是非常典型的山地气候特征。",
            },
            {
              question: "观景台区域适合使用无人机（Drone）进行航拍吗？",
              answer:
                "需极度谨慎。由于深邃的峡谷地形和微气候特性，这里白天会产生强烈的上升热气流（Térmicas）和不可预测的穿堂阵风（Ráfagas）。重量较轻的消费级无人机在此极易偏航失控甚至坠毁。建议仅在清晨风力处于最低谷时谨慎起飞，并密切关注风速警报。",
            },
            {
              question: "山风会对高空滑索体验产生什么影响？",
              answer:
                "天气可能影响活动。测风、停运标准和安全程序尚未向经营方核实；请直接确认。",
            },
          ],
        },
        {
          category: "四、 行程规划与到访条件 (Planificación y Accesibilidad)",
          items: [
            {
              question: "到达 Tirolesa Mirador Del Sol 必须驾驶四驱越野车（4x4）吗？",
              answer:
                "通常不需要。通往观景台的 Ruta 5 主要为铺装山路，标准两驱车辆一般即可抵达；但由于发夹弯密集、坡度变化明显，驾驶者仍应具备基本山路驾驶经验，并合理使用发动机制动。",
            },
            {
              question: "前往 1,470 米的海拔，会有高原反应（Soroche / Puna）吗？",
              answer:
                "通常不会。医学上的高原反应一般出现在海拔 2,500 米以上的地区。Tirolesa Mirador Del Sol 的海拔为 1,470 米，绝大多数访客（包括老人和儿童）在此高度不会出现缺氧症状。但由于气温骤降，更容易发生的是因未带保暖衣物而受凉。",
            },
            {
              question: "这里的设施是否适合老年人或轮椅使用者？",
              answer:
                "观景台主体区域紧邻 Ruta 5 景观公路，停车后步行距离极短，且平坦度尚可，老年人及轮椅使用者可以轻松抵达边缘地带欣赏全景。但高空滑索区域以及周边未经铺设的岩石小径，出于安全考虑，不建议行动不便者前往。",
            },
            {
              question: "山区的移动网络信号如何？需要提前准备什么？",
              answer:
                "由于庞大山体的物理遮挡，Ruta 5 沿线及观景台的移动网络信号（4G/3G）非常不稳定，甚至部分路段会完全丢失信号。强烈建议访客在离开梅洛市区前，提前下载好 Google Maps 离线地图，并随身携带少量比索现金，以防山上因断网无法使用电子支付（如 Mercado Pago）。",
            },
            {
              question: "高空滑索（Tirolesa）对参与者有什么具体的物理限制？",
              answer:
                "年龄、体重、健康限制和未成年人的要求尚未向经营方核实。出发前请直接确认；如有健康疑问，请咨询医疗专业人员。",
            },
          ],
        },
      ],
    },
    photos: {
      title: "现场照片",
      intro:
        "涵盖山谷视野、山地道路、观景平台与活动环境的现场影像。",
      mapsCta: "在 Google 地图上查看位置",
      altPrefix: "Mirador del Sol 高空滑索与山谷全景照片",
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
      title: "如何前往 Mirador del Sol",
      intro:
        "Tirolesa Mirador Del Sol 位于 Merlo 山地上方，通常需要先抵达 Villa de Merlo，再沿 Ruta Provincial 5 完成最后一段盘山路上升。以下方式最常见，距离与时间均为约值，供规划参考。",
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
    sources: {
      title: "资料来源与延伸阅读",
      intro:
        "本站内容基于公开地理资料、地方政府与官方旅游门户整理，供访客进一步核实与延伸阅读。以下链接均为第三方权威或公共信息源。",
      items: [
        {
          title: "圣路易斯国立大学旅游与城市规划学院 · 原生植物指南",
          href: "https://ftu.unsl.edu.ar/wp-content/uploads/libros-publicaciones-ftu/Guia-de-plantas-nativas.pdf",
          description: "Florencia Arriola（旅游大学导游专业主任）于 2026 年 11 月 2 日推荐此 Villa de Merlo 原生植被指南，作为区域自然背景资料。本站尚未取得正文，不能据此确认滑索现场的具体植物；大学也未核实滑索运营或审核本站。链接可能出现访问验证。",
        },
        {
          title: "Villa de Merlo 官方旅游门户",
          href: "https://villademerlo.tur.ar/",
          description: "景点所在地最直接的官方旅游信息源，可核实景观线路、气候背景与周边活动。",
        },
        {
          title: "圣路易斯省旅游局官方门户",
          href: "https://turismo.sanluis.gov.ar/",
          description: "省级官方旅游入口，适合扩展阅读科门钦戈内斯山脉与周边自然景观。",
        },
        {
          title: "阿根廷国家旅游门户",
          href: "https://www.argentina.travel/",
          description: "国家级旅游信息入口，适合查阅宏观交通与目的地背景。",
        },
        {
          title: "Comechingones 人（维基百科）",
          href: "https://es.wikipedia.org/wiki/Comechingones",
          description: "关于该地区原住民历史与文化的公开参考资料。",
        },
        {
          title: "Villa de Merlo（维基百科）",
          href: "https://es.wikipedia.org/wiki/Villa_de_Merlo",
          description: "关于梅洛建镇历史、气候与地理位置的公开参考资料。",
        },
      ],
    },
    imageCredits: {
      title: "图片版权说明",
      body:
        "本网站所展示的所有图片产权及版权均归原摄影者所有。本站仅以非盈利科普为目的进行展示，不主张对图片的所有权；如权利人对展示方式有异议，可通过本站联系方式提出，我们将及时处理。",
    },
    footer: {
      copyright: "© 2026 Tirolesa Mirador Del Sol指南 · 保留所有权利。",
      disclaimer:
        "本网站是一个独立的第三方非盈利科普指南项目，我们与阿根廷政府或任何官方机构均无隶属关系。",
      mapsLabel: "Google Maps →",
      napTitle: "地点信息",
    },
  },
  en: {
    localeName: "English",
    title: "Tirolesa Mirador Del Sol | Multilingual Visitor Guide in San Luis, Argentina",
    description:
      "A four-language guide to Tirolesa Mirador Del Sol with geographic context, microclimate notes, transport options, on-site photos, and official reference links.",
    nav: {
      overview: "Overview",
      history: "History",
      weather: "Weather",
      amenities: "Facilities",
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
      directionsCta: "How to get there",
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
        {
          title: "Safety and equipment",
          body:
            "Equipment, inspection procedures and operating decisions have not been verified with the operator. Ask directly about equipment, instruction and safety arrangements before participating.",
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
        },
        {
          dimension: "Elevation",
          value: "Approx. 1,470 m / 4,822 ft",
        },
        {
          dimension: "Geologic age",
          value: "Paleozoic",
        },
        {
          dimension: "Dominant lithology",
          value: "Crystalline rock, granite, gneiss",
        },
        {
          dimension: "Mean annual temperature",
          value: "About 17°C in Merlo",
        },
        {
          dimension: "Vegetation belt",
          value: "Transitional Chaco upland zone",
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
    history: {
      title: "Historical context",
      intro:
        "To understand Tirolesa Mirador Del Sol, it helps to place it on a longer timeline: Indigenous mountain life, colonial settlement on the lower slopes, Merlo's restorative-town tradition, and the scenic-road culture of the modern era.",
      cards: [
        {
          title: "Indigenous mountain memory",
          body:
            "Long before Spanish arrival, the Comechingones peoples lived across the mountains and valleys between present-day San Luis and Córdoba. They settled along the ranges, combining gathering, hunting and small-scale farming, and read the land through ridgelines, water sources and the position of the sun. The ridge beneath today's lookout belongs to that long-used cultural landscape.",
        },
        {
          title: "Colonisation and the founding of Merlo",
          body:
            "From the 16th century, Spanish colonial expansion moved up the valleys, bringing ranches, staging posts and mission outposts to the lower slopes. In the mid-19th century Villa de Merlo was formally established and gradually grew into an inland town known for its mountain climate and restorative setting. The road toward the ridge is a product of that link between settlement and highland.",
        },
        {
          title: "The scenic-road era",
          body:
            "In the later 20th century, as roads were extended and car travel spread, Ruta 5 (Camino al Filo) became the main link from town to ridge. Thanks to its natural high point, Mirador del Sol was gradually established as a public viewpoint for sunrise, cloud seas and valley light — which is also where its modern meaning as a 'sun lookout' comes from.",
        },
      ],
    },
    legends: {
      title: "Legends and local storytelling",
      intro:
        "The following belongs to local oral tradition and folklore rather than verifiable history, yet it explains why this ridge holds a special place in the local imagination.",
      cards: [
        {
          title: "The name 'Sun Lookout'",
          body:
            "Local oral tradition calls the spot the lookout of the sun. One account holds that early herders climbed the ridge before dawn and read the day's wind and grazing direction from where the sun broke over the valley, gradually establishing a fixed lookout point. The 'Sol' in the name comes from this everyday experience of light and direction.",
        },
        {
          title: "Boats on the cloud sea",
          body:
            "In stories told around the Merlo valley, the morning cloud sea is imagined as a still white lake, with the ridge resting on it like a moored boat. Elders would warn children not to climb alone when fog crept over the road — the mountain, they said, was speaking through the mist. Such narratives are still used to remind visitors how quickly mountain weather can change.",
        },
        {
          title: "The City of the Caesars",
          body:
            "Merlo's well-known Avenida de los Césares takes its name from the colonial legend of the Ciudad de los Césares, a fabled wealthy city said to lie hidden in the southern mountains. The story was never verified, yet it shaped this range's imagination of the unknown — and it is a useful reminder that what is truly worth seeking here is the geology, the night sky and the clouds themselves.",
        },
      ],
    },
    weather: {
      title: "Live weather and 7-day forecast",
      intro:
        "The data below updates according to the lookout's coordinates, helping you decide whether to carry rain and warm layers and how to time the ascent.",
      currentTitle: "Current conditions",
      forecastTitle: "Next few days",
      updatedLabel: "Updated",
      loadingLabel: "Loading weather data…",
      errorLabel: "Weather data is temporarily unavailable. Please try again later or check a local forecast.",
      refreshLabel: "Refresh",
      feelsLikeLabel: "Feels like",
      humidityLabel: "Humidity",
      windLabel: "Wind",
      gustLabel: "Gusts",
      uvLabel: "UV index",
      precipitationLabel: "Rain chance",
      todayLabel: "Today",
      altitudeNote:
        "The lookout sits at about 1,470 m, usually 4–6°C cooler than central Merlo and exposed to noticeable ridge wind.",
      conditions: {
        clear: "Clear",
        mostlyClear: "Mostly clear",
        partlyCloudy: "Partly cloudy",
        overcast: "Overcast",
        fog: "Fog",
        drizzle: "Drizzle",
        rain: "Rain",
        showers: "Showers",
        snow: "Snow",
        thunderstorm: "Thunderstorm",
      },
      advice: {
        title: "Practical advice",
        travelTitle: "What to wear",
        planTitle: "Plan your visit",
        itemsTitle: "What to bring",
        alertTitle: "Weather alerts",
        noAlertLabel: "No active weather alerts",
        alertIntro: "Consider adjusting your plans, avoid hazardous areas and keep monitoring the weather.",
        windLevelSuffix: "Bft",
        travel: {
          rainLikely: "Rain is likely — bring rain gear",
          drizzle: "Light drizzle and slippery paths — watch your footing",
          heavyRain: "Heavy rain — wear a waterproof jacket to avoid getting soaked and chilled",
          thunderstorm: "Thunderstorms — dress for rain and take lightning seriously, avoid exposed high ground",
          hot: "Hot day — wear light, breathable clothing and avoid the midday sun",
          uv: "Strong UV — protect your skin",
          tempSwing: "A large day–night temperature swing — bring a layer you can add or remove",
          cold: "Cold — dress for warmth",
          windy: "Windy — wear a windproof jacket and avoid loose clothing or hats that blow off",
          veryWindy: "Strong wind — secure your clothing and belongings",
          clear: "Clear skies — great for the outdoors, but still use sun protection",
          overcast: "Soft, even light — comfortable for photos; dress for comfort",
          fallback: "Settled weather — normal outdoor clothing is fine",
        },
        plan: {
          rainLikely: "High chance of rain — favour indoor options and postpone outdoor activities",
          drizzle: "Drizzle spoils open-air activities; watch slippery steps and boardwalks",
          heavyRain: "Heavy rain — outdoor activities are not advised; zip lines and cable cars may suspend",
          thunderstorm: "During thunderstorms stay off ridges and away from tall trees or metal structures; high-altitude rides will likely close",
          hot: "Shorten outdoor time and avoid the midday heat",
          uv: "UV peaks at midday — rest in the shade",
          cold: "Limit long outdoor exposure in the cold",
          windy: "Zip lines and cable cars may stop in strong wind — follow on-site notices",
          veryWindy: "In strong wind, high-altitude activities will likely close; consider a valley plan",
          clear: "Clear skies — ideal for the outdoors, sunrise/sunset and the sea of clouds",
          overcast: "No harsh sun — good for long walks and photography",
          fog: "Low visibility — poor for distant views; drive mountain roads slowly",
          mountain: "Mountain weather changes fast — check that the site and zip line are open before you set off",
          fallback: "Normal outdoor plans should be fine — check on-site notices",
        },
        items: {
          umbrella: "Umbrella",
          raincoat: "Raincoat (avoid a long umbrella in strong wind)",
          sunscreen: "Sunscreen",
          sunglasses: "Sunglasses",
          hat: "Sun hat",
          water: "Plenty of water",
          jacket: "An extra layer",
          warmCoat: "Warm coat and scarf",
          windproof: "Windproof jacket",
          mask: "Face mask (if visibility is poor)",
          fallback: "No extra items needed",
        },
        alertNames: {
          heavyRain: "Heavy rain",
          thunderstorm: "Thunderstorms",
          veryWindy: "Strong wind",
          fog: "Dense fog",
          heat: "High heat",
          cold: "Low temperatures",
        },
        alerts: {
          heavyRain: "Heavy rain — avoid valleys and low ground; watch for flash floods and landslides.",
          thunderstorm: "Lightning risk — do not hike, and do not shelter under trees or on ridges; stay clear of metal structures.",
          veryWindy: "Strong wind — stay away from ridge edges, signs and temporary structures.",
          fog: "Poor visibility — take extra care driving mountain roads and viewing.",
          heat: "High heat — keep hydrated and prevent heat stroke.",
          cold: "Low temperatures — protect against cold and hypothermia.",
        },
      },
    },
    amenities: {
      title: "Facilities and supplies",
      intro:
        "This is a non-profit educational project, so we describe facilities only by type and do not recommend or endorse any specific business. The notes below help you plan supplies and stops in advance.",
      cards: [
        {
          title: "Public restrooms",
          body:
            "Public restrooms around the lookout are limited and usually concentrated near the parking area and activity service points. Mountain facilities may change with the season or operating schedule, so it is wise to go before leaving central Merlo and to carry tissues and hand sanitiser.",
        },
        {
          title: "Parking",
          body:
            "Parking near the lookout is an unpaved open area and can be busy on peak afternoons. Park on a wide, level section, apply the handbrake, and take care when opening doors in strong wind or passing traffic.",
        },
        {
          title: "Food and drink",
          body:
            "Food on the mountain is limited to light meals, snacks and drinks. If you have specific dietary needs, eat in Villa de Merlo or bring your own food and water.",
        },
        {
          title: "Accommodation",
          body:
            "Overnight stays are concentrated in Villa de Merlo and the surrounding valleys, ranging from hotels and mountain lodges to apartments and campsites. The lookout itself has no lodging, so the usual pattern is to sleep below and spend half a day on the mountain.",
        },
        {
          title: "Supermarkets and pharmacies",
          body:
            "Supermarkets, convenience stores and pharmacies are concentrated in central Merlo. Stock up on water, sun protection, basic medication and a little cash before the ascent, in case of patchy signal and limited electronic payment on the mountain.",
        },
        {
          title: "Fuel and charging",
          body:
            "Conventional fuel stations sit in central Merlo and along the main approach roads; there is no station on the mountain section. Electric and plug-in hybrid vehicles should charge fully in town and keep a generous margin for the return trip.",
        },
      ],
    },
    landmarks: {
      title: "Nearby landmarks and side trips",
      intro:
        "Several landmarks and areas around the lookout can extend a visit. Distances are approximate and actual driving time depends on road and weather conditions.",
      items: [
        {
          name: "Villa de Merlo town centre",
          distance: "About 8–10 km · 25–35 min drive",
          body:
            "The starting point of the mountain route, where lodging, dining, fuel and supplies are concentrated — the key base before heading uphill.",
        },
        {
          name: "Filo Serrano ridge line",
          distance: "About 10 km further uphill",
          body:
            "Continuing along Ruta 5 approaches the crest and the natural geographic boundary between San Luis and Córdoba provinces.",
        },
        {
          name: "Valle del Conlara",
          distance: "North of the foothills",
          body:
            "An agricultural and tourism valley that, together with Merlo, defines the activity area of this region and combines well with a lookout visit.",
        },
        {
          name: "La Carolina historic mining town",
          distance: "North-west in the highlands",
          body:
            "A mountain town with colonial-era mining remains, suited to a deeper history and geology side trip.",
        },
      ],
    },
    faq: {
      title: "Structured visitor FAQ",
      intro:
        "Common practical questions are easier to trust when presented as concise technical answers instead of scattered comments.",
      groups: [
        {
          category: "Prices, opening hours and bookings",
          items: [
            {
              question: "How much does the zipline at Mirador del Sol cost?",
              answer:
                "Zipline prices and payment arrangements and current lookout access have not been verified with the operator or responsible authority. Confirm before travelling.",
            },
            {
              question: "What are the opening hours of Mirador del Sol in Merlo?",
              answer:
                "Current lookout and zipline hours have not been verified. Confirm with the responsible authority and operator before travelling; weather may affect operation.",
            },
            {
              question: "Is there an age or weight limit for the zipline?",
              answer:
                "Age, weight, health and minor-participation requirements have not been verified with the operator. Confirm them directly before travelling; seek appropriate medical advice for individual health concerns.",
            },
            {
              question: "Can the zipline be booked in advance?",
              answer:
                "Availability and the booking method depend on the day's operation and are handled on site or through the operator's official channels. This guide is an independent, non-commercial project: it does not sell, book or charge commission, and only explains how to confirm the activity before going up.",
            },
          ],
        },
        {
          category: "Geology and environment",
          items: [
            {
              question: "How stable is the Comechingones range? Is the zipline safe?",
              answer:
                "The range belongs to the Sierras Pampeanas block mountains of central Argentina, with a bedrock of ancient, stable Paleozoic crystalline rock, granite and gneiss. Zipline anchor points are driven deep into this hard, seamless bedrock, giving load and pull resistance well beyond what softer soils or karst terrain would allow.",
            },
            {
              question: "Why is the lookout side so steep while the other side is gentle?",
              answer:
                "This is a classic block-mountain feature. The western slope — the side facing Merlo and the lookout — sits on the geological fault plane and was uplifted sharply, creating the large canyon drop the zipline uses. The eastern slope toward Córdoba descends as a gentler ramp. This asymmetry is the direct result of millions of years of tectonic movement.",
            },
            {
              question: "Is the site still worthwhile without doing the zipline?",
              answer:
                "Yes. Even without the aerial activity, the location offers a broad, largely unobstructed valley panorama, readable erosion landforms and a clear transition between elevation belts. As a geomorphological observation point it has strong value on its own.",
            },
          ],
        },
        {
          category: "Microclimate and physics",
          items: [
            {
              question: "Does 'microclimate' mean the lookout is mild all year and never rains?",
              answer:
                "That is a common misconception. Merlo's microclimate mainly refers to oxygen-rich air, high negative-ion levels and low pollution — not constant temperature or no rain. Because of the elevation gain, weather at the lookout is in fact more changeable than in town: showers, fast-forming cloud and large day-night temperature swings are typical mountain features.",
            },
            {
              question: "Can I fly a drone at the lookout?",
              answer:
                "Extreme care is needed. The deep canyon and microclimate produce strong daytime thermals and unpredictable gusts. Light consumer drones can easily drift or crash here. If you fly, do so only in the calmest early-morning window and monitor wind warnings closely.",
            },
            {
              question: "How does wind affect the zipline?",
              answer:
                "Weather may affect the activity. Monitoring equipment, suspension criteria and safety procedures have not been verified with the operator; ask directly before travelling and participating.",
            },
          ],
        },
        {
          category: "Planning and access",
          items: [
            {
              question: "Do I need a 4x4 vehicle to reach Tirolesa Mirador Del Sol?",
              answer:
                "Usually not. The main access along Ruta 5 is paved and standard two-wheel-drive vehicles normally reach the lookout without issue. Repeated switchbacks and grade changes still call for basic mountain-driving experience and sensible use of engine braking.",
            },
            {
              question: "Will I get altitude sickness at 1,470 m?",
              answer:
                "Generally not. Clinically significant altitude sickness usually appears above about 2,500 m. At 1,470 m, the vast majority of visitors — including older adults and children — show no symptoms. The greater risk is a chill from not bringing warm layers when temperatures drop.",
            },
            {
              question: "Is the site suitable for older visitors or wheelchair users?",
              answer:
                "The main lookout area sits right beside the scenic road, with a very short walk from parking and reasonably level ground, so older visitors and wheelchair users can usually reach the edge for the panorama. The zipline area and unpaved rocky paths are not recommended for those with limited mobility.",
            },
            {
              question: "What about mobile signal and cash?",
              answer:
                "Because of the large mountain mass, 4G/3G signal along Ruta 5 and at the lookout is very unstable and can disappear entirely in places. Download offline maps before leaving central Merlo and carry a little cash, in case weak signal prevents electronic payment such as Mercado Pago.",
            },
            {
              question: "Are there physical limits for the zipline?",
              answer:
                "Age, weight, health and minor-participation requirements have not been verified with the operator. Confirm them directly before travelling; seek appropriate medical advice for individual health concerns.",
            },
          ],
        },
      ],
    },
    photos: {
      title: "On-site photos",
      intro:
        "The gallery uses local images of the valley, mountain road, lookout area, and activity setting, offering a visual reference before arrival. The hero background comes from the same on-site image set.",
      mapsCta: "View on Google Maps",
      altPrefix: "Photos of the zipline and panoramic views at Mirador del Sol",
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
      title: "How to get to Mirador del Sol",
      intro:
        "Most visitors first reach Villa de Merlo and then complete the final mountain ascent along Ruta Provincial 5. These are the most practical options, with approximate distances and times to plan the climb.",
      cards: [
        {
          title: "Regional airports",
          body:
            "The closest airport is Valle del Conlara (RLO), about 30 minutes by car from Villa de Merlo. If schedules do not fit, San Luis (LUQ, roughly 200 km) or Cordoba (COR, roughly 250 km) are broader alternatives, followed by road transfer to Merlo.",
        },
        {
          title: "Self-drive via Ruta Provincial 5",
          body:
            "Driving is the most direct option. From central Villa de Merlo take Avenida de los Cesares east onto Ruta Provincial 5, known as Camino al Filo: about 8-10 km of continuous climb to the lookout, with tight bends and roughly 25-35 minutes of driving. Drive up in daylight and use engine braking on the way down.",
        },
        {
          title: "Parking by the lookout",
          body:
            "There is an open, unpaved parking area beside the lookout that can fill up on busy afternoons. Stop on a wide, level stretch, use the handbrake, and take care opening doors in strong wind.",
        },
        {
          title: "Bus, remis and transfers",
          body:
            "Long-distance buses terminate at the Villa de Merlo bus station. There is no public bus service up to the lookout: the final segment requires a taxi, local remis, arranged transfer, a booked tour, or your own vehicle.",
        },
        {
          title: "Final mountain segment",
          body:
            "Near the lookout the road feels like a distinct mountain approach rather than a simple urban arrival. Wind exposure, reduced visibility and parking distribution deserve separate attention before you step out of the vehicle.",
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
    sources: {
      title: "Sources and further reading",
      intro:
        "This page is compiled from public geographic material and official local and national tourism portals, so that visitors can verify and extend what they read. All links below lead to third-party authoritative or public information sources.",
      items: [
        {
          title: "UNSL Faculty of Tourism and Urbanism · Native plants guide",
          href: "https://ftu.unsl.edu.ar/wp-content/uploads/libros-publicaciones-ftu/Guia-de-plantas-nativas.pdf",
          description: "Florencia Arriola, director of the University Tourism Guide program, recommended this guide to Villa de Merlo native vegetation on 2 November 2026 as regional background. We have not obtained the text and cannot confirm species at the zipline site. The university did not verify the operation or endorse this guide. The link may present an access check.",
        },
        {
          title: "Villa de Merlo official tourism portal",
          href: "https://villademerlo.tur.ar/",
          description: "The most locally relevant official tourism source, useful for scenic circuits, climate context and nearby activities.",
        },
        {
          title: "San Luis provincial tourism portal",
          href: "https://turismo.sanluis.gov.ar/",
          description: "The official provincial entry point for wider reading on the Comechingones range and surrounding nature.",
        },
        {
          title: "Argentina official travel portal",
          href: "https://www.argentina.travel/",
          description: "A national travel gateway for broader transport and destination context.",
        },
        {
          title: "Comechingones people (Wikipedia)",
          href: "https://es.wikipedia.org/wiki/Comechingones",
          description: "Public reference material on the Indigenous history and culture of this region.",
        },
        {
          title: "Villa de Merlo (Wikipedia)",
          href: "https://es.wikipedia.org/wiki/Villa_de_Merlo",
          description: "Public reference material on Merlo's founding history, climate and geography.",
        },
      ],
    },
    imageCredits: {
      title: "Image credits and copyright",
      body:
        "All images displayed on this website remain the property and copyright of their original photographers. They are shown here for non-profit educational purposes only, and this site claims no ownership of them. If a rights holder objects to the way an image is presented, please contact us through this site and we will respond promptly.",
    },
    footer: {
      copyright: "© 2026 Tirolesa Mirador Del Sol Guide. All rights reserved.",
      disclaimer:
        "This website is an independent third-party non-profit educational guide project and has no institutional affiliation with the Government of Argentina or any official authority.",
      mapsLabel: "Google Maps →",
      napTitle: "Location details",
    },
  },
  it: {
    localeName: "Italiano",
    title: "Tirolesa Mirador Del Sol | Guida multilingue per visitatori in Argentina",
    description:
      "Guida in quattro lingue a Tirolesa Mirador Del Sol con contesto geografico, note sul microclima, modi di arrivo, foto sul posto e link ufficiali.",
    nav: {
      overview: "Panoramica",
      history: "Storia",
      weather: "Meteo",
      amenities: "Servizi",
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
      directionsCta: "Come arrivare",
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
        {
          title: "Sicurezza e attrezzatura",
          body:
            "Attrezzatura, controlli e decisioni operative non sono stati verificati con il gestore. Chiedi direttamente prima di partecipare.",
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
        },
        {
          dimension: "Quota",
          value: "Circa 1.470 m / 4.822 ft",
        },
        {
          dimension: "Eta geologica",
          value: "Paleozoico",
        },
        {
          dimension: "Litologia principale",
          value: "Rocce cristalline, granito, gneiss",
        },
        {
          dimension: "Temperatura media annua",
          value: "Circa 17°C a Merlo",
        },
        {
          dimension: "Fascia vegetazionale",
          value: "Transizione alto Chaco",
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
    history: {
      title: "Contesto storico",
      intro:
        "Per capire Tirolesa Mirador Del Sol è utile collocarlo su una linea temporale più lunga: vita montana indigena, insediamento coloniale sui versanti inferiori, tradizione di soggiorno di Merlo e cultura della strada panoramica in epoca moderna.",
      cards: [
        {
          title: "Memoria montana indigena",
          body:
            "Molto prima dell'arrivo degli spagnoli, i popoli Comechingones vivevano tra le montagne e le valli degli attuali San Luis e Córdoba. Si stabilivano lungo i rilievi, unendo raccolta, caccia e piccola agricoltura, e leggevano il territorio attraverso le linee di cresta, le sorgenti e la posizione del sole. La cresta su cui sorge l'attuale belvedere appartiene a questo paesaggio culturale di lunga durata.",
        },
        {
          title: "Colonizzazione e fondazione di Merlo",
          body:
            "Dal XVI secolo l'espansione coloniale spagnola risalì le valli, portando allevamenti, stazioni di posta e avamposti missionari sui versanti inferiori. A metà del XIX secolo Villa de Merlo fu fondata ufficialmente e crebbe come cittadina interna nota per il clima montano e la vocazione al riposo. La strada verso la cresta nasce da questo legame tra insediamento e alta montagna.",
        },
        {
          title: "L'era della strada panoramica",
          body:
            "Nel tardo XX secolo, con l'estensione delle strade e la diffusione dell'automobile, la Ruta 5 (Camino al Filo) divenne il collegamento principale tra il centro abitato e la cresta. Grazie al suo punto alto naturale, Mirador del Sol si è affermato come belvedere pubblico per alba, mare di nuvole e luce della valle: da qui deriva anche il significato moderno di 'belvedere del sole'.",
        },
      ],
    },
    legends: {
      title: "Leggende e racconto locale",
      intro:
        "Quanto segue appartiene alla tradizione orale e al folclore locale più che alla storia verificabile, ma spiega perché questa cresta occupi un posto speciale nell'immaginario del luogo.",
      cards: [
        {
          title: "Il nome 'Belvedere del Sole'",
          body:
            "La tradizione orale locale chiama questo punto il belvedere del sole. Un racconto sostiene che i primi pastori salissero sulla cresta prima dell'alba e leggessero il vento e la direzione del pascolo da dove il sole spuntava sulla valle, consolidando nel tempo un punto di osservazione fisso. Il 'Sol' nel nome nasce da questa esperienza quotidiana di luce e direzione.",
        },
        {
          title: "Barche sul mare di nuvole",
          body:
            "Nei racconti della valle di Merlo, il mare di nuvole del mattino è immaginato come un lago bianco immobile, con la cresta che vi riposa come una barca ormeggiata. Gli anziani ammonivano i bambini a non salire da soli quando la nebbia invadeva la strada: la montagna, dicevano, parlava attraverso la nebbia. Ancora oggi questi racconti ricordano ai visitatori quanto rapidamente cambi il tempo in montagna.",
        },
        {
          title: "La Città dei Cesari",
          body:
            "La nota Avenida de los Césares di Merlo prende il nome dalla leggenda coloniale della Ciudad de los Césares, una mitica città ricca che si diceva nascosta nelle montagne del sud. La storia non fu mai verificata, ma ha plasmato l'immaginario di questa catena montuosa; ed è un buon promemoria che ciò che vale davvero cercare qui sono la geologia, il cielo notturno e le nuvole stesse.",
        },
      ],
    },
    weather: {
      title: "Meteo in tempo reale e previsioni a 7 giorni",
      intro:
        "I dati seguenti si aggiornano in base alle coordinate del belvedere, aiutandoti a decidere se portare strati antipioggia e caldi e come programmare la salita.",
      currentTitle: "Condizioni attuali",
      forecastTitle: "Prossimi giorni",
      updatedLabel: "Aggiornato",
      loadingLabel: "Caricamento dati meteo…",
      errorLabel: "Dati meteo temporaneamente non disponibili. Riprova più tardi o consulta una previsione locale.",
      refreshLabel: "Aggiorna",
      feelsLikeLabel: "Percepita",
      humidityLabel: "Umidità",
      windLabel: "Vento",
      gustLabel: "Raffiche",
      uvLabel: "Indice UV",
      precipitationLabel: "Probabilità pioggia",
      todayLabel: "Oggi",
      altitudeNote:
        "Il belvedere si trova a circa 1.470 m, di solito 4–6°C più fresco del centro di Merlo e esposto a un vento di cresta sensibile.",
      conditions: {
        clear: "Sereno",
        mostlyClear: "Prevalentemente sereno",
        partlyCloudy: "Parzialmente nuvoloso",
        overcast: "Coperto",
        fog: "Nebbia",
        drizzle: "Pioviggine",
        rain: "Pioggia",
        showers: "Rovesci",
        snow: "Neve",
        thunderstorm: "Temporale",
      },
      advice: {
        title: "Consigli pratici",
        travelTitle: "Come vestirsi",
        planTitle: "Organizza la visita",
        itemsTitle: "Cosa portare",
        alertTitle: "Avvisi meteo",
        noAlertLabel: "Nessun avviso meteo attivo",
        alertIntro: "Valuta di modificare il programma, evita le zone a rischio e monitora il meteo.",
        windLevelSuffix: "Bft",
        travel: {
          rainLikely: "Probabile pioggia — porta l'antipioggia",
          drizzle: "Pioviggine e sentieri scivolosi — attenzione dove metti i piedi",
          heavyRain: "Pioggia intensa — indossa una giacca impermeabile per non bagnarti e raffreddarti",
          thunderstorm: "Temporali — vestiti per la pioggia e prendi sul serio i fulmini, evita i punti elevati esposti",
          hot: "Giornata calda — capi leggeri e traspiranti, evita il sole di mezzogiorno",
          uv: "UV forte — proteggi la pelle",
          tempSwing: "Forte escursione termica giorno-notte — porta uno strato da aggiungere o togliere",
          cold: "Freddo — vestiti pesante",
          windy: "Ventoso — giacca antivento ed evita abiti larghi o cappelli che volano via",
          veryWindy: "Vento forte — assicura abiti e oggetti personali",
          clear: "Cielo sereno — ideale all'aperto, ma usa comunque la protezione solare",
          overcast: "Luce morbida e uniforme — comoda per le foto; veste comodo",
          fallback: "Meteo stabile — normale abbigliamento da esterno",
        },
        plan: {
          rainLikely: "Alta probabilità di pioggia — preferisci opzioni al coperto e rimanda le attività all'aperto",
          drizzle: "La pioviggine rovina le attività all'aperto; attenzione a gradini e passerelle scivolose",
          heavyRain: "Pioggia intensa — attività all'aperto sconsigliate; zip line e funivie possono sospendere",
          thunderstorm: "Durante i temporali evita creste e alberi alti o strutture metalliche; le attività in quota probabilmente chiudono",
          hot: "Riduci il tempo all'aperto ed evita il caldo di mezzogiorno",
          uv: "UV al massimo a mezzogiorno — riposa all'ombra",
          cold: "Limita la permanenza prolungata all'aperto con il freddo",
          windy: "Zip line e funivie possono fermarsi con vento forte — segui le indicazioni sul posto",
          veryWindy: "Con vento forte le attività in quota probabilmente chiudono; valuta un programma a valle",
          clear: "Cielo sereno — ideale per l'aperto, alba/tramonto e il mare di nuvole",
          overcast: "Senza sole forte — buono per lunghe passeggiate e fotografie",
          fog: "Visibilità scarsa — poco adatto alle viste lontane; guida piano sulle strade di montagna",
          mountain: "Il meteo in montagna cambia in fretta — verifica che il sito e la zip line siano aperti prima di partire",
          fallback: "I normali programmi all'aperto dovrebbero andare bene — controlla le indicazioni sul posto",
        },
        items: {
          umbrella: "Ombrello",
          raincoat: "Impermeabile (evita l'ombrello lungo con vento forte)",
          sunscreen: "Crema solare",
          sunglasses: "Occhiali da sole",
          hat: "Cappello",
          water: "Acqua a sufficienza",
          jacket: "Uno strato in più",
          warmCoat: "Cappotto caldo e sciarpa",
          windproof: "Giacca antivento",
          mask: "Mascherina (se la visibilità è scarsa)",
          fallback: "Nessun oggetto extra necessario",
        },
        alertNames: {
          heavyRain: "Pioggia intensa",
          thunderstorm: "Temporali",
          veryWindy: "Vento forte",
          fog: "Nebbia fitta",
          heat: "Caldo intenso",
          cold: "Temperature basse",
        },
        alerts: {
          heavyRain: "Pioggia intensa — evita valli e zone depresse; attenzione a piene improvvise e frane.",
          thunderstorm: "Rischio fulmini — non fare escursioni e non ripararti sotto gli alberi o sulle creste; stai lontano dalle strutture metalliche.",
          veryWindy: "Vento forte — stai lontano da bordi di cresta, cartelli e strutture temporanee.",
          fog: "Visibilità scarsa — massima attenzione alla guida in montagna e all'osservazione.",
          heat: "Caldo intenso — idratati e previeni i colpi di calore.",
          cold: "Temperature basse — proteggiti dal freddo e dall'ipotermia.",
        },
      },
    },
    amenities: {
      title: "Servizi e rifornimenti",
      intro:
        "Questo è un progetto divulgativo non profit: descriviamo i servizi solo per tipologia e non consigliamo né sponsorizziamo attività specifiche. Le note seguenti aiutano a pianificare rifornimenti e soste in anticipo.",
      cards: [
        {
          title: "Servizi igienici pubblici",
          body:
            "I servizi igienici vicino al belvedere sono limitati e di solito concentrati presso l'area di parcheggio e i punti di servizio delle attività. Le strutture di montagna possono variare con la stagione o l'operatività, quindi conviene provvedere prima di lasciare il centro di Merlo e portare fazzoletti e gel igienizzante.",
        },
        {
          title: "Parcheggio",
          body:
            "Il parcheggio vicino al belvedere è un'area aperta non asfaltata e nei pomeriggi di punta può essere affollato. Sosta su un tratto ampio e pianeggiante, inserisci il freno a mano e fai attenzione nell'aprire le portiere con vento forte o traffico in transito.",
        },
        {
          title: "Cibo e bevande",
          body:
            "Sulla montagna l'offerta è limitata a pasti leggeri, snack e bevande. Se hai esigenze alimentari specifiche, mangia a Villa de Merlo o porta con te cibo e acqua.",
        },
        {
          title: "Alloggio",
          body:
            "I pernottamenti sono concentrati a Villa de Merlo e nelle valli circostanti, tra hotel, lodge di montagna, appartamenti e campeggi. Il belvedere non offre alloggio: lo schema tipico è dormire a valle e dedicare mezza giornata alla montagna.",
        },
        {
          title: "Supermercati e farmacie",
          body:
            "Supermercati, minimarket e farmacie sono concentrati nel centro di Merlo. Fai scorta di acqua, protezione solare, farmaci di base e un po' di contanti prima della salita, in caso di segnale debole e pagamenti elettronici limitati in montagna.",
        },
        {
          title: "Carburante e ricarica",
          body:
            "Le stazioni di servizio tradizionali si trovano nel centro di Merlo e lungo le strade di accesso principali; non ce ne sono sul tratto montano. I veicoli elettrici e ibridi plug-in dovrebbero ricaricare completamente in città e mantenere un margine generoso per il ritorno.",
        },
      ],
    },
    landmarks: {
      title: "Luoghi vicini ed escursioni",
      intro:
        "Attorno al belvedere si trovano alcuni luoghi e aree che possono prolungare la visita. Le distanze sono indicative e i tempi reali dipendono da strada e meteo.",
      items: [
        {
          name: "Centro di Villa de Merlo",
          distance: "Circa 8–10 km · 25–35 min in auto",
          body:
            "Punto di partenza del percorso montano, dove si concentrano alloggio, ristorazione, carburante e rifornimenti: la base principale prima della salita.",
        },
        {
          name: "Linea di cresta Filo Serrano",
          distance: "Circa 10 km più in alto",
          body:
            "Proseguendo lungo la Ruta 5 si avvicina la cresta e il confine geografico naturale tra le province di San Luis e Córdoba.",
        },
        {
          name: "Valle del Conlara",
          distance: "A nord delle prime alture",
          body:
            "Valle agricola e turistica che, insieme a Merlo, definisce l'area di attività della regione e si combina bene con una visita al belvedere.",
        },
        {
          name: "La Carolina, borgo minerario storico",
          distance: "A nord-ovest, in quota",
          body:
            "Borgo di montagna con resti minerari di epoca coloniale, adatto a un'escursione più approfondita tra storia e geologia.",
        },
      ],
    },
    faq: {
      title: "FAQ strutturata",
      intro:
        "Le domande pratiche più frequenti risultano più affidabili se organizzate come risposte tecniche concise e non come commenti sparsi.",
      groups: [
        {
          category: "Prezzi, orari e prenotazioni",
          items: [
            {
              question: "Quanto costa la tirolesa al Mirador del Sol?",
              answer:
                "Prezzi, modalità di pagamento e condizioni attuali di accesso non sono stati verificati con il gestore o le autorità competenti. Confermali prima del viaggio.",
            },
            {
              question: "Quali sono gli orari del Mirador del Sol a Merlo?",
              answer:
                "Gli orari attuali del belvedere e della tirolesa non sono stati verificati. Confermali con le autorità competenti e il gestore prima del viaggio; il meteo può influire sul servizio.",
            },
            {
              question: "Ci sono limiti di eta o di peso per la tirolesa?",
              answer:
                "Limiti di età, peso, salute e condizioni per i minori non sono stati verificati con il gestore. Confermali direttamente prima del viaggio; per dubbi di salute chiedi a un professionista sanitario.",
            },
            {
              question: "Si puo prenotare la tirolesa in anticipo?",
              answer:
                "Disponibilita e modalita di prenotazione dipendono dall'operativita del giorno e si gestiscono sul posto o tramite i canali ufficiali. Questa guida e un progetto divulgativo indipendente: non vende, non prenota e non applica commissioni, e si limita a spiegare come confermare l'attivita prima di salire.",
            },
          ],
        },
        {
          category: "Geologia e ambiente",
          items: [
            {
              question: "Quanto è stabile la catena dei Comechingones? La tirolesa è sicura?",
              answer:
                "La catena appartiene alle Sierras Pampeanas dell'Argentina centrale, con un basamento di rocce cristalline paleozoiche antiche e stabili, granito e gneiss. Gli ancoraggi della tirolesa sono infissi in profondità in questo basamento duro e compatto, offrendo una resistenza molto superiore a quella di terreni più morbidi o carsici.",
            },
            {
              question: "Perché il versante del belvedere è ripido e l'altro è dolce?",
              answer:
                "È una tipica montagna a blocchi. Il versante occidentale — quello verso Merlo e il belvedere — si trova sul piano di faglia e fu sollevato bruscamente, creando il grande dislivello di canyon usato dalla tirolesa. Il versante orientale verso Córdoba scende come una rampa più dolce. Questa asimmetria deriva direttamente da milioni di anni di movimenti tettonici.",
            },
            {
              question: "Vale la visita anche senza fare la tirolesa?",
              answer:
                "Sì. Anche senza attività aerea, il sito offre un ampio panorama quasi libero sulla valle, forme erosive leggibili e una transizione evidente tra fasce altitudinali. Come punto di osservazione geomorfologica ha un valore autonomo.",
            },
          ],
        },
        {
          category: "Microclima e fisica",
          items: [
            {
              question: "'Microclima' significa che qui è sempre mite e non piove mai?",
              answer:
                "È un equivoco comune. Il microclima di Merlo indica soprattutto aria ricca di ossigeno, un alto livello di ioni negativi e basso inquinamento, non temperatura costante o assenza di pioggia. Per via della quota, il tempo al belvedere è anzi più variabile che in città: rovesci, nubi improvvise e forti escursioni termiche sono tipiche della montagna.",
            },
            {
              question: "Posso usare un drone al belvedere?",
              answer:
                "Serve estrema cautela. Il canyon profondo e il microclima generano forti termiche diurne e raffiche imprevedibili. I droni consumer leggeri possono facilmente andare fuori rotta o schiantarsi. Se voli, fallo solo nella finestra più calma dell'alba e monitora attentamente gli avvisi di vento.",
            },
            {
              question: "Come influisce il vento sulla tirolesa?",
              answer:
                "Il meteo può influire sull’attività. Strumenti di monitoraggio, criteri di sospensione e procedure di sicurezza non sono stati verificati con il gestore: chiedi direttamente.",
            },
          ],
        },
        {
          category: "Pianificazione e accesso",
          items: [
            {
              question: "Serve un veicolo 4x4 per arrivare?",
              answer:
                "In genere no. Il tratto principale della Ruta 5 verso il mirador è asfaltato e una normale auto a due ruote motrici di solito è sufficiente. Tornanti e pendenze richiedono comunque esperienza di guida in montagna e un uso accorto del freno motore.",
            },
            {
              question: "Si soffre il mal di montagna a 1.470 m?",
              answer:
                "Generalmente no. Il mal di montagna clinicamente rilevante compare di solito oltre i 2.500 m. A 1.470 m la grande maggioranza dei visitatori — anziani e bambini compresi — non mostra sintomi. Il rischio maggiore è il raffreddamento per non aver portato strati caldi quando la temperatura scende.",
            },
            {
              question: "Il sito è adatto ad anziani o a chi usa la sedia a rotelle?",
              answer:
                "L'area principale del belvedere è a ridosso della strada panoramica, con una camminata molto breve dal parcheggio e terreno abbastanza pianeggiante, quindi anziani e utenti in sedia a rotelle di solito raggiungono il bordo per il panorama. L'area della tirolesa e i sentieri rocciosi non asfaltati non sono consigliati a chi ha mobilità ridotta.",
            },
            {
              question: "Come funzionano segnale mobile e contanti?",
              answer:
                "Per la grande massa montuosa, il segnale 4G/3G lungo la Ruta 5 e al belvedere è molto instabile e in alcuni tratti può sparire del tutto. Scarica mappe offline prima di lasciare il centro di Merlo e porta un po' di contanti, in caso di pagamento elettronico non disponibile.",
            },
            {
              question: "Ci sono limiti fisici per la tirolesa?",
              answer:
                "Limiti di età, peso, salute e condizioni per i minori non sono stati verificati con il gestore. Confermali direttamente prima del viaggio; per dubbi di salute chiedi a un professionista sanitario.",
            },
          ],
        },
      ],
    },
    photos: {
      title: "Foto sul posto",
      intro:
        "La galleria raccoglie immagini reali della valle, della strada di salita, del belvedere e dell'area di attivita. Anche lo sfondo hero proviene dallo stesso archivio locale.",
      mapsCta: "Apri su Google Maps",
      altPrefix: "Foto della tirolesa e viste panoramiche al Mirador del Sol",
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
      title: "Come arrivare al Mirador del Sol",
      intro:
        "Nella maggior parte dei casi si raggiunge prima Villa de Merlo e poi si completa l'ultima salita di montagna lungo la Ruta Provincial 5. Ecco le opzioni piu pratiche, con distanze e tempi indicativi.",
      cards: [
        {
          title: "Aeroporti regionali",
          body:
            "L'aeroporto piu vicino e quello di Valle del Conlara (RLO), a circa 30 minuti d'auto da Villa de Merlo. Se gli orari non coincidono, San Luis (LUQ, circa 200 km) o Cordoba (COR, circa 250 km) sono alternative piu ampie, seguite dal trasferimento su strada fino a Merlo.",
        },
        {
          title: "In auto lungo la Ruta Provincial 5",
          body:
            "L'auto e il mezzo piu diretto. Dal centro di Villa de Merlo si prende l'Avenida de los Cesares verso est e si prosegue sulla Ruta Provincial 5, detta Camino al Filo: circa 8-10 km di salita continua fino al mirador, con curve strette e circa 25-35 minuti di guida. Conviene salire di giorno e usare il freno motore in discesa.",
        },
        {
          title: "Parcheggio accanto al mirador",
          body:
            "Accanto al mirador c'e un'area di sosta aperta e non asfaltata, che puo riempirsi nei pomeriggi piu affollati. Fermati su un tratto ampio e pianeggiante, inserisci il freno a mano e attenzione alle portiere con vento forte.",
        },
        {
          title: "Bus, remis e transfer",
          body:
            "I bus a lunga percorrenza terminano alla stazione di Villa de Merlo. Non esiste un servizio pubblico di bus fino al mirador: l'ultimo tratto richiede taxi, remis locale, transfer concordato, un'escursione prenotata o un veicolo proprio.",
        },
        {
          title: "Ultimo tratto montano",
          body:
            "Vicino al belvedere la strada va considerata un vero accesso di montagna e non un semplice arrivo urbano. Esposizione al vento, visibilita ridotta e distribuzione dei parcheggi meritano attenzione prima di scendere dal veicolo.",
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
    sources: {
      title: "Fonti e approfondimenti",
      intro:
        "Questa pagina è compilata da materiale geografico pubblico e da portali turistici ufficiali locali e nazionali, così che i visitatori possano verificare e approfondire. Tutti i link puntano a fonti terze autorevoli o pubbliche.",
      items: [
        {
          title: "Facoltà di Turismo e Urbanistica UNSL · Guida alle piante native",
          href: "https://ftu.unsl.edu.ar/wp-content/uploads/libros-publicaciones-ftu/Guia-de-plantas-nativas.pdf",
          description: "Florencia Arriola, direttrice del corso di Guida Universitaria di Turismo, ha consigliato il 2 novembre 2026 questa guida alla vegetazione nativa di Villa de Merlo come contesto regionale. Non abbiamo ottenuto il testo e non possiamo confermare specie presso la tirolesa. La facoltà non ha verificato il servizio né approvato questa guida. Il link può richiedere una verifica.",
        },
        {
          title: "Portale turistico ufficiale di Villa de Merlo",
          href: "https://villademerlo.tur.ar/",
          description: "La fonte ufficiale più vicina al luogo, utile per circuiti panoramici, contesto climatico e attività vicine.",
        },
        {
          title: "Portale turistico della provincia di San Luis",
          href: "https://turismo.sanluis.gov.ar/",
          description: "Portale ufficiale provinciale per approfondire la catena dei Comechingones e la natura circostante.",
        },
        {
          title: "Portale ufficiale di viaggio dell'Argentina",
          href: "https://www.argentina.travel/",
          description: "Portale nazionale per un contesto più ampio su trasporti e destinazioni.",
        },
        {
          title: "Popolo Comechingones (Wikipedia)",
          href: "https://es.wikipedia.org/wiki/Comechingones",
          description: "Materiale di riferimento pubblico sulla storia e la cultura indigene della regione.",
        },
        {
          title: "Villa de Merlo (Wikipedia)",
          href: "https://es.wikipedia.org/wiki/Villa_de_Merlo",
          description: "Materiale di riferimento pubblico sulla storia, il clima e la geografia di Merlo.",
        },
      ],
    },
    imageCredits: {
      title: "Crediti e copyright delle immagini",
      body:
        "Tutte le immagini mostrate su questo sito restano di proprietà e sotto copyright dei rispettivi fotografi. Sono qui presentate solo a scopo divulgativo e non profit, e il sito non ne rivendica la proprietà. Se un avente diritto si oppone al modo in cui un'immagine è presentata, può contattarci tramite il sito e risponderemo prontamente.",
    },
    footer: {
      copyright: "© 2026 Guida Tirolesa Mirador Del Sol. Tutti i diritti riservati.",
      disclaimer:
        "Questo sito e un progetto indipendente, non profit e divulgativo di terza parte; non ha alcun rapporto istituzionale con il governo argentino o con enti ufficiali.",
      mapsLabel: "Google Maps →",
      napTitle: "Dettagli del luogo",
    },
  },
  es: {
    localeName: "Español",
    title: "Tirolesa Mirador del Sol en Merlo | Horarios y Cómo Llegar",
    description:
      "Visitá Tirolesa Mirador del Sol en Villa de Merlo, San Luis. Descubrí cómo llegar por Ruta 5, las vistas panorámicas, fotos y consejos para organizar tu visita.",
    nav: {
      overview: "Panorama",
      history: "Historia",
      weather: "Clima",
      amenities: "Servicios",
      gallery: "Fotos",
      reviews: "Reseñas",
      transport: "Acceso",
      visit: "Visita",
      links: "Enlaces",
    },
    hero: {
      eyebrow: "Provincia de San Luis, Argentina | Mirador serrano y tirolesa",
      headline: "Tirolesa Mirador del Sol en Villa de Merlo",
      summary:
        "Conocé el entorno del Mirador del Sol y la tirolesa sobre Villa de Merlo: paisaje serrano, Ruta 5 y referencias para planificar el viaje. Consulta al operador y a la autoridad responsable por el acceso y las condiciones actuales.",
      ratingLabel: "Calificación de Google",
      typeLabel: "Tipo",
      addressLabel: "Dirección",
      phoneLabel: "Teléfono",
      plusCodeLabel: "Plus Code",
      mapsCta: "Ver en Google Maps",
      galleryCta: "Ver fotos",
      directionsCta: "Cómo llegar",
    },
    metricsTitle: "Datos clave",
    metrics: [
      { label: "Paisaje", value: "vista de filo, capas de nubes, camino serrano" },
      { label: "Experiencia", value: "mirador + tirolesa" },
      { label: "Entorno regional", value: "borde occidental de los Comechingones" },
      { label: "Ideal para", value: "viajeros en auto, fotografía y aventura suave" },
    ],
    story: {
      title: "Geografía y contexto local",
      intro:
        "El valor de Mirador del Sol no depende solo de una actividad. La subida, la altura, la vista del valle, el comportamiento de las nubes y la tradición del nombre forman una sola experiencia territorial.",
      cards: [
        {
          title: "Ascenso topográfico",
          body:
            "Desde el centro de Merlo la ruta gana altura con rapidez hacia el cordón oriental. Ese cambio explica la amplitud de la vista, el viento más fuerte y la variación del cielo.",
        },
        {
          title: "Claves de microclima",
          body:
            "Merlo suele describirse a partir de su microclima. En este mirador eso se percibe sobre todo por el abrigo de la sierra, la amplitud térmica y las inversiones que pueden generar nubes bajas por la mañana.",
        },
        {
          title: "Marco Comechingones",
          body:
            "El nombre Mirador del Sol pertenece a una tradición más amplia de miradores de altura. Los ángulos del sol, la línea del horizonte y la luz estacional siguen siendo parte central de la identidad del sitio.",
        },
      ],
    },
    insights: {
      title: "Lecturas naturales y técnicas",
      intro:
        "Si se observa como nodo de interpretación y no solo como parada panorámica, el lugar permite hablar de ecología serrana, física de la tirolesa y tiempos de la luz.",
      cards: [
        {
          title: "Ecología de altura",
          body:
            "A medida que el camino asciende, el bosque seco inferior deja paso a arbustos más resistentes al viento, pastos serranos y roca expuesta. La cresta también favorece la observación de aves planeadoras.",
        },
        {
          title: "Lógica gravitatoria de la tirolesa",
          body:
            "Las tirolesas de montaña funcionan por diferencia de altura y tensión del cable. Viento, peso corporal y condiciones operativas del día influyen en la velocidad y la sensación, por lo que manda siempre la charla de seguridad activa.",
        },
        {
          title: "Luz y nubosidad",
          body:
            "La mañana suele ser mejor para capas de nubes e inversiones térmicas; el final de la tarde favorece la luz lateral sobre el filo. Para fotografiar, la hora elegida importa casi tanto como el pronóstico.",
        },
        {
          title: "Seguridad y equipamiento",
          body:
            "No hemos verificado con el operador el equipamiento, las inspecciones ni los procedimientos de seguridad. Consúltalos directamente antes de participar.",
        },
      ],
    },
    technical: {
      title: "Ficha técnica del paisaje",
      intro:
        "Una página más sólida gana mucho con una ficha compacta de coordenadas, altura, litología, clima y vegetación. Esto permite leer el sitio con una lógica geográfica y no solo turística.",
      rows: [
        {
          dimension: "Coordenadas",
          value: "32°21'S, 64°58'W",
          note: "Hemisferio sur, interior central de Argentina",
        },
        {
          dimension: "Altitud",
          value: "Aprox. 1.470 m / 4.822 ft",
          note: "Entre el casco urbano de Merlo y la cresta principal",
        },
        {
          dimension: "Edad geológica",
          value: "Paleozoico",
          note: "Basamento de la sierra de los Comechingones",
        },
        {
          dimension: "Litología dominante",
          value: "Roca cristalina, granito, gneis",
          note: "Relieve de fuerte meteorización y erosión hídrica",
        },
        {
          dimension: "Temperatura media anual",
          value: "Cerca de 17 °C en Merlo",
          note: "En el mirador suele ser 4–6 °C más fresco que en el valle",
        },
        {
          dimension: "Piso de vegetación",
          value: "Transición de Chaco serrano",
          note: "Matorral y pastizal de altura resistente al viento",
        },
      ],
    },
    routeProfile: {
      title: "Perfil vertical de la Ruta 5 (Camino al Filo)",
      intro:
        "La tirolesa y el mirador se entienden mejor como parte de una carretera panorámica en ascenso y no como un punto aislado. La ganancia de altura organiza la experiencia completa.",
      stages: [
        {
          title: "Inicio: centro de Merlo",
          elevation: "Aprox. 800-900 m",
          body:
            "Aquí se concentra el microclima más conocido de la ciudad. Desde este punto la Ruta 5 asciende con curvas cerradas entre vegetación más densa y una transición clara entre espacio urbano y serrano.",
        },
        {
          title: "Nodo medio: Tirolesa Mirador Del Sol",
          elevation: "Aprox. 1.470 m",
          body:
            "Este tramo marca la transición entre bosque bajo y matorral o ladera herbácea de mayor altura. La apertura repentina del relieve explica el panorama, el viento y la lógica técnica del trazado de la tirolesa.",
        },
        {
          title: "Final alto: Filo Serrano",
          elevation: "Aprox. 2.100 m",
          body:
            "Más arriba, la ruta se acerca a la cresta y al límite natural entre San Luis y Córdoba. La vegetación se vuelve más baja y la vista se expande hacia llanuras vecinas.",
        },
      ],
    },
    astronomy: {
      title: "Cielo oscuro y observación astronómica",
      intro:
        "Si se interpreta como plataforma de observación, el sitio también tiene valor nocturno por sus condiciones de cielo oscuro, la lectura del cielo austral y la fotografía astronómica.",
      cards: [
        {
          title: "Baja contaminación lumínica",
          body:
            "La sierra ayuda a bloquear parte del resplandor urbano, de modo que las noches despejadas pueden ofrecer condiciones favorables de observación. En términos prácticos, la zona suele comentarse en un rango cercano a Bortle 3-4.",
        },
        {
          title: "Referencias del cielo austral",
          body:
            "El lugar es adecuado para reconocer la Cruz del Sur, Alpha Centauri y las Nubes de Magallanes. Para visitantes del hemisferio norte, estos objetos suelen ser uno de los rasgos más distintivos.",
        },
        {
          title: "Consejos de fotografía",
          body:
            "Para fotografiar el cielo convienen trípode estable y gran angular entre 14 mm y 24 mm. Si se desea combinar la cresta y la Vía Láctea, las noches sin luna entre abril y septiembre suelen ser las mejores.",
        },
      ],
    },
    history: {
      title: "Contexto histórico",
      intro:
        "Para entender Tirolesa Mirador Del Sol conviene situarlo en una línea de tiempo más larga: la vida montañesa indígena, el asentamiento colonial en las laderas, la tradición de descanso de Merlo y la cultura de la ruta panorámica en la época moderna.",
      cards: [
        {
          title: "Memoria montañesa indígena",
          body:
            "Mucho antes de la llegada española, los pueblos comechingones vivían entre las sierras y valles de los actuales San Luis y Córdoba. Se asentaban a lo largo de los cordones, combinando recolección, caza y agricultura a pequeña escala, y leían el territorio a través de las líneas de cresta, las fuentes de agua y la posición del sol. La cresta sobre la que hoy se ubica el mirador pertenece a ese paisaje cultural de largo uso.",
        },
        {
          title: "Colonización y fundación de Merlo",
          body:
            "Desde el siglo XVI la expansión colonial española remontó los valles, trayendo estancias, postas y avanzadas misionales a las laderas bajas. A mediados del siglo XIX se fundó formalmente Villa de Merlo, que creció como una localidad serrana conocida por su clima y su carácter reparador. El camino hacia la cresta es producto de ese vínculo entre el poblado y la montaña alta.",
        },
        {
          title: "La era de la ruta panorámica",
          body:
            "En el último tramo del siglo XX, con la extensión de los caminos y la difusión del automóvil, la Ruta 5 (Camino al Filo) se convirtió en el enlace principal entre el pueblo y la cresta. Gracias a su punto alto natural, Mirador del Sol se consolidó como mirador público para el amanecer, el mar de nubes y la luz del valle: de allí proviene también su sentido moderno de 'mirador del sol'.",
        },
      ],
    },
    legends: {
      title: "Leyendas y relatos locales",
      intro:
        "Lo que sigue pertenece a la tradición oral y al folclore local más que a la historia verificable, pero explica por qué esta cresta ocupa un lugar especial en el imaginario del lugar.",
      cards: [
        {
          title: "El nombre 'Mirador del Sol'",
          body:
            "La tradición oral local llama a este punto el mirador del sol. Un relato sostiene que los primeros pastores subían a la cresta antes del amanecer y leían el viento y la dirección del pastoreo según el lugar por donde el sol rompía sobre el valle, consolidando con el tiempo un punto fijo de observación. El 'Sol' del nombre nace de esa experiencia cotidiana de luz y dirección.",
        },
        {
          title: "Barcos sobre el mar de nubes",
          body:
            "En los relatos que se cuentan en el valle de Merlo, el mar de nubes del amanecer se imagina como un lago blanco y quieto, con la cresta descansando sobre él como un barco amarrado. Los mayores advertían a los niños que no subieran solos cuando la niebla invadía el camino: la montaña, decían, hablaba a través de la niebla. Todavía hoy estos relatos recuerdan al visitante lo rápido que cambia el tiempo en la montaña.",
        },
        {
          title: "La Ciudad de los Césares",
          body:
            "La conocida Avenida de los Césares de Merlo toma su nombre de la leyenda colonial de la Ciudad de los Césares, una mítica ciudad rica que se decía escondida en las montañas del sur. La historia nunca se comprobó, pero modeló el imaginario de esta sierra; y es un buen recordatorio de que lo que realmente vale la pena buscar aquí son la geología, el cielo nocturno y las nubes mismas.",
        },
      ],
    },
    weather: {
      title: "Clima en tiempo real y pronóstico de 7 días",
      intro:
        "Los datos siguientes se actualizan según las coordenadas del mirador, para ayudarte a decidir si llevar capas de abrigo y lluvia y cómo programar la subida.",
      currentTitle: "Condiciones actuales",
      forecastTitle: "Próximos días",
      updatedLabel: "Actualizado",
      loadingLabel: "Cargando datos del clima…",
      errorLabel: "Los datos del clima no están disponibles por el momento. Intenta de nuevo más tarde o consulta un pronóstico local.",
      refreshLabel: "Actualizar",
      feelsLikeLabel: "Sensación",
      humidityLabel: "Humedad",
      windLabel: "Viento",
      gustLabel: "Ráfagas",
      uvLabel: "Índice UV",
      precipitationLabel: "Prob. de lluvia",
      todayLabel: "Hoy",
      altitudeNote:
        "El mirador se encuentra a unos 1.470 m, por lo general 4–6 °C más fresco que el centro de Merlo y expuesto a un viento de cresta notable.",
      conditions: {
        clear: "Despejado",
        mostlyClear: "Mayormente despejado",
        partlyCloudy: "Parcialmente nublado",
        overcast: "Cubierto",
        fog: "Niebla",
        drizzle: "Llovizna",
        rain: "Lluvia",
        showers: "Chaparrones",
        snow: "Nieve",
        thunderstorm: "Tormenta",
      },
      advice: {
        title: "Consejos prácticos",
        travelTitle: "Qué ponerse",
        planTitle: "Planifica tu visita",
        itemsTitle: "Qué llevar",
        alertTitle: "Avisos meteorológicos",
        noAlertLabel: "Sin avisos meteorológicos activos",
        alertIntro: "Considera ajustar tu plan, evita zonas de riesgo y sigue atento al clima.",
        windLevelSuffix: "Bft",
        travel: {
          rainLikely: "Probable lluvia — lleva equipo de lluvia",
          drizzle: "Llovizna y senderos resbaladizos — cuidado dónde pisas",
          heavyRain: "Lluvia intensa — usa campera impermeable para no mojarte ni enfriarte",
          thunderstorm: "Tormentas — vístete para la lluvia y toma en serio los rayos, evita los puntos elevados expuestos",
          hot: "Día caluroso — ropa liviana y transpirable, evita el sol del mediodía",
          uv: "UV alto — protege tu piel",
          tempSwing: "Gran amplitud térmica día-noche — lleva una capa para sumar o quitar",
          cold: "Frío — abrígate bien",
          windy: "Ventoso — campera cortaviento y evita ropa suelta o sombreros que se vuelen",
          veryWindy: "Viento fuerte — asegura tu ropa y tus pertenencias",
          clear: "Cielo despejado — ideal para el aire libre, pero igual usa protección solar",
          overcast: "Luz suave y uniforme — cómoda para fotos; viste con comodidad",
          fallback: "Tiempo estable — ropa de exterior habitual",
        },
        plan: {
          rainLikely: "Alta probabilidad de lluvia — prioriza opciones bajo techo y posterga las actividades al aire libre",
          drizzle: "La llovizna arruina las actividades al aire libre; cuidado con escalones y pasarelas resbaladizas",
          heavyRain: "Lluvia intensa — no se recomiendan actividades al aire libre; la tirolesa y el teleférico pueden suspenderse",
          thunderstorm: "Durante las tormentas evita crestas y árboles altos o estructuras metálicas; las actividades en altura probablemente cierren",
          hot: "Reduce el tiempo al aire libre y evita el calor del mediodía",
          uv: "El UV alcanza su pico al mediodía — descansa a la sombra",
          cold: "Limita la exposición prolongada al frío",
          windy: "La tirolesa y el teleférico pueden detenerse con viento fuerte — sigue los avisos del lugar",
          veryWindy: "Con viento fuerte las actividades en altura probablemente cierren; considera un plan en el valle",
          clear: "Cielo despejado — ideal para el aire libre, el amanecer/atardecer y el mar de nubes",
          overcast: "Sin sol fuerte — bueno para caminatas largas y fotografía",
          fog: "Visibilidad baja — poco apto para vistas lejanas; maneja despacio en las rutas de montaña",
          mountain: "El clima de montaña cambia rápido — confirma que el sitio y la tirolesa estén abiertos antes de salir",
          fallback: "Los planes habituales al aire libre deberían estar bien — revisa los avisos del lugar",
        },
        items: {
          umbrella: "Paraguas",
          raincoat: "Piloto o impermeable (evita el paraguas largo con viento fuerte)",
          sunscreen: "Protector solar",
          sunglasses: "Anteojos de sol",
          hat: "Sombrero o gorra",
          water: "Agua suficiente",
          jacket: "Una capa extra",
          warmCoat: "Campera de abrigo y bufanda",
          windproof: "Campera cortaviento",
          mask: "Barbijo (si la visibilidad es baja)",
          fallback: "No hace falta llevar nada extra",
        },
        alertNames: {
          heavyRain: "Lluvia intensa",
          thunderstorm: "Tormentas",
          veryWindy: "Viento fuerte",
          fog: "Niebla densa",
          heat: "Calor intenso",
          cold: "Temperaturas bajas",
        },
        alerts: {
          heavyRain: "Lluvia intensa — evita valles y zonas bajas; atención a crecidas y deslizamientos.",
          thunderstorm: "Riesgo de rayos — no hagas trekking y no te refugies bajo árboles ni en crestas; aléjate de estructuras metálicas.",
          veryWindy: "Viento fuerte — aléjate de bordes de cresta, carteles y estructuras temporales.",
          fog: "Visibilidad reducida — extrema el cuidado al conducir en montaña y al observar.",
          heat: "Calor intenso — hidrátate y evita el golpe de calor.",
          cold: "Temperaturas bajas — protégete del frío y la hipotermia.",
        },
      },
    },
    amenities: {
      title: "Servicios y abastecimiento",
      intro:
        "Este es un proyecto divulgativo sin fines de lucro: describimos los servicios solo por tipo y no recomendamos ni respaldamos comercios concretos. Las notas siguientes ayudan a planificar suministros y paradas con antelación.",
      cards: [
        {
          title: "Baños públicos",
          body:
            "Los baños públicos cerca del mirador son limitados y suelen concentrarse junto al estacionamiento y a los puntos de servicio de las actividades. Las instalaciones de montaña pueden variar según la temporada o la operación, así que conviene ir antes de salir del centro de Merlo y llevar pañuelos y gel desinfectante.",
        },
        {
          title: "Estacionamiento",
          body:
            "El estacionamiento junto al mirador es un sector abierto sin pavimentar y puede llenarse en las tardes de mayor afluencia. Detente en un tramo amplio y nivelado, pon el freno de mano y ten cuidado al abrir las puertas con viento fuerte o tránsito.",
        },
        {
          title: "Comida y bebida",
          body:
            "La oferta en la montaña se limita a comidas ligeras, snacks y bebidas. Si tienes necesidades alimentarias específicas, come en Villa de Merlo o lleva tu propia comida y agua.",
        },
        {
          title: "Alojamiento",
          body:
            "Los pernoctes se concentran en Villa de Merlo y los valles cercanos, con hoteles, lodges de montaña, departamentos y campings. El mirador no ofrece alojamiento: lo habitual es dormir abajo y dedicar media jornada a la montaña.",
        },
        {
          title: "Supermercados y farmacias",
          body:
            "Supermercados, tiendas de conveniencia y farmacias se concentran en el centro de Merlo. Abastécete de agua, protección solar, medicamentos básicos y algo de efectivo antes de subir, ante la señal irregular y los pagos electrónicos limitados en la montaña.",
        },
        {
          title: "Combustible y carga",
          body:
            "Las estaciones de servicio tradicionales están en el centro de Merlo y a lo largo de las rutas de acceso principales; no hay ninguna en el tramo de montaña. Los vehículos eléctricos e híbridos enchufables deberían cargar por completo en la ciudad y reservar un margen generoso para el regreso.",
        },
      ],
    },
    landmarks: {
      title: "Lugares cercanos y excursiones",
      intro:
        "Alrededor del mirador hay varios lugares y áreas que pueden extender la visita. Las distancias son aproximadas y el tiempo real depende del camino y del clima.",
      items: [
        {
          name: "Centro de Villa de Merlo",
          distance: "Unos 8–10 km · 25–35 min en auto",
          body:
            "Punto de partida del recorrido de montaña, donde se concentran alojamiento, gastronomía, combustible y suministros: la base principal antes de subir.",
        },
        {
          name: "Línea de cresta Filo Serrano",
          distance: "Unos 10 km más arriba",
          body:
            "Continuando por la Ruta 5 se aproxima la cresta y el límite geográfico natural entre las provincias de San Luis y Córdoba.",
        },
        {
          name: "Valle del Conlara",
          distance: "Al norte de las primeras lomadas",
          body:
            "Valle agrícola y turístico que, junto con Merlo, define el área de actividad de la región y se combina bien con una visita al mirador.",
        },
        {
          name: "La Carolina, pueblo minero histórico",
          distance: "Al noroeste, en altura",
          body:
            "Pueblo de montaña con restos mineros de la época colonial, adecuado para una excursión más profunda entre historia y geología.",
        },
      ],
    },
    faq: {
      title: "Preguntas frecuentes",
      intro:
        "Preguntas frecuentes sobre el Mirador del Sol y la tirolesa en Villa de Merlo: precios, horarios, límites de edad y peso, seguridad, formas de acceso y clima.",
      groups: [
        {
          category: "Precios, horarios y reservas",
          items: [
            {
              question: "¿Cuánto cuesta la tirolesa en el Mirador del Sol?",
              answer:
                "Los precios, la forma de pago y las condiciones actuales de acceso al mirador no han sido verificados con el operador ni con la autoridad responsable. Confírmalos antes de viajar.",
            },
            {
              question: "¿Qué horarios tiene el Mirador del Sol en Merlo?",
              answer:
                "Los horarios actuales del mirador y de la tirolesa no han sido verificados. Confírmalos con la autoridad responsable y el operador antes de viajar; el clima puede afectar la actividad.",
            },
            {
              question: "¿Hay límite de edad o peso para la tirolesa?",
              answer:
                "Los requisitos de edad, peso, salud y participación de menores no han sido verificados con el operador. Confírmalos directamente antes de viajar; ante dudas de salud consulta a un profesional sanitario.",
            },
            {
              question: "¿Se puede reservar la tirolesa con antelación?",
              answer:
                "La disponibilidad y la forma de reserva dependen de la operación del día y se gestionan en el sitio o por sus canales oficiales. Esta guía es un proyecto divulgativo independiente: no vende, no reserva y no cobra comisiones, por lo que solo orienta sobre cómo confirmar la actividad antes de subir.",
            },
          ],
        },
        {
          category: "Geología y entorno",
          items: [
            {
              question: "¿Qué tan estable es la sierra de los Comechingones? ¿Es segura la tirolesa?",
              answer:
                "La sierra pertenece a las Sierras Pampeanas del centro de Argentina, con un basamento de rocas cristalinas paleozoicas antiguas y estables, granito y gneis. Los anclajes de la tirolesa se clavan en profundidad en este basamento duro y compacto, ofreciendo una resistencia muy superior a la de suelos más blandos o kársticos.",
            },
            {
              question: "¿Por qué la ladera del mirador es tan empinada y la otra es suave?",
              answer:
                "Es una montaña de bloques típica. La ladera occidental —la que mira a Merlo y al mirador— se apoya en el plano de falla y se elevó de golpe, creando el gran desnivel de quebrada que aprovecha la tirolesa. La ladera oriental, hacia Córdoba, desciende como una rampa más suave. Esta asimetría es el resultado directo de millones de años de movimientos tectónicos.",
            },
            {
              question: "¿Vale la pena visitar el lugar sin hacer la tirolesa?",
              answer:
                "Sí. Incluso sin actividad aérea, el sitio funciona como mirador de alto valor con amplia vista del valle, formas erosivas visibles y una transición clara entre pisos altitudinales. Como punto de observación geomorfológica tiene valor por sí mismo.",
            },
          ],
        },
        {
          category: "Microclima y física",
          items: [
            {
              question: "¿'Microclima' significa que aquí es siempre templado y nunca llueve?",
              answer:
                "Es un error frecuente. El microclima de Merlo se refiere sobre todo a aire rico en oxígeno, altos niveles de iones negativos y baja contaminación, no a una temperatura constante ni a la ausencia de lluvia. Por la altura, el tiempo en el mirador es de hecho más variable que en la ciudad: chaparrones, nubes repentinas y grandes amplitudes térmicas son rasgos típicos de la montaña.",
            },
            {
              question: "¿Puedo volar un dron en el mirador?",
              answer:
                "Hay que extremar la precaución. La quebrada profunda y el microclima generan fuertes térmicas diurnas y ráfagas impredecibles. Los drones de consumo ligeros pueden desviarse o estrellarse con facilidad. Si vuelas, hazlo solo en la ventana más calma del amanecer y vigila de cerca los avisos de viento.",
            },
            {
              question: "¿Cómo afecta el viento a la tirolesa?",
              answer:
                "El clima puede afectar la actividad. No hemos verificado con el operador los instrumentos de medición, criterios de suspensión ni procedimientos de seguridad; consúltalos directamente.",
            },
          ],
        },
        {
          category: "Planificación y acceso",
          items: [
            {
              question: "¿Hace falta un vehículo 4x4 para llegar?",
              answer:
                "Por lo general no. El tramo principal de la Ruta 5 hacia el mirador está asfaltado y un auto común de tracción simple suele ser suficiente. Las curvas cerradas y los cambios de pendiente exigen igualmente experiencia básica de manejo serrano y un uso sensato del freno de motor.",
            },
            {
              question: "¿Se sufre mal de altura a 1.470 m?",
              answer:
                "En general no. El mal de altura clínicamente relevante aparece normalmente por encima de unos 2.500 m. A 1.470 m la gran mayoría de los visitantes —incluidas personas mayores y niños— no muestra síntomas. El mayor riesgo es el enfriamiento por no llevar capas de abrigo cuando baja la temperatura.",
            },
            {
              question: "¿Es un sitio apto para personas mayores o en silla de ruedas?",
              answer:
                "El área principal del mirador está junto a la ruta panorámica, con un paseo muy corto desde el estacionamiento y terreno bastante nivelado, por lo que personas mayores y usuarios de silla de ruedas suelen alcanzar el borde para ver el panorama. El área de la tirolesa y los senderos rocosos sin pavimentar no se recomiendan para quienes tienen movilidad reducida.",
            },
            {
              question: "¿Cómo funcionan la señal móvil y el efectivo?",
              answer:
                "Por la gran masa montañosa, la señal 4G/3G a lo largo de la Ruta 5 y en el mirador es muy inestable y en algunos tramos puede desaparecer por completo. Descarga mapas sin conexión antes de salir del centro de Merlo y lleva algo de efectivo, en caso de que la señal impida el pago electrónico como Mercado Pago.",
            },
            {
              question: "¿Hay límites físicos para la tirolesa?",
              answer:
                "Los requisitos de edad, peso, salud y participación de menores no han sido verificados con el operador. Confírmalos directamente antes de viajar; ante dudas de salud consulta a un profesional sanitario.",
            },
          ],
        },
      ],
    },
    photos: {
      title: "Fotos del sitio",
      intro:
        "La galería reúne imágenes reales del valle, la ruta de subida, el mirador y el entorno de actividad. La imagen principal también procede de este mismo archivo local.",
      mapsCta: "Ver en Google Maps",
      altPrefix: "Fotos de la tirolesa y vistas panorámicas en Mirador del Sol",
    },
    reviews: {
      title: "Observaciones de visitantes",
      intro:
        "En vez de acumular elogios emotivos, esta sección organiza los comentarios repetidos en tres claves de lectura más útiles para planificar la visita.",
      mapsCta: "Ver en Google Maps",
      themes: [
        {
          title: "Rendimiento panorámico",
          body:
            "Las valoraciones altas se relacionan sobre todo con la vista del valle, la subida por camino serrano y los cambios de luz o nubosidad. Para mucha gente, el mirador ya vale por sí mismo.",
        },
        {
          title: "Intensidad de la aventura",
          body:
            "Quienes prueban la tirolesa suelen percibir con más fuerza la velocidad y la altura por la pendiente abierta y el desnivel visible. Importan mucho las condiciones del día.",
        },
        {
          title: "Condiciones variables",
          body:
            "Visibilidad, viento, tráfico y estado del camino pueden modificar mucho la experiencia. Son datos más útiles que una frase promocional genérica.",
        },
      ],
    },
    transport: {
      title: "Cómo llegar al Mirador del Sol",
      intro:
        "La mayoría de los visitantes llega primero a Villa de Merlo y después completa el último ascenso serrano por la Ruta Provincial 5. Estas son las vías más prácticas, con distancias y tiempos aproximados para planificar la subida.",
      cards: [
        {
          title: "Aeropuertos regionales",
          body:
            "El aeropuerto más cercano es el de Valle del Conlara (RLO), a unos 30 minutos en auto de Villa de Merlo. Si los horarios no coinciden, San Luis (LUQ, a unos 200 km) o Córdoba (COR, a unos 250 km) son alternativas más amplias; desde allí se continúa por carretera hasta Merlo.",
        },
        {
          title: "En auto por la Ruta Provincial 5",
          body:
            "El auto es la forma más directa. Desde el centro de Villa de Merlo se toma la Avenida de los Césares hacia el este y se sigue por la Ruta Provincial 5, conocida como Camino al Filo: unos 8–10 km de subida continua hasta el mirador, con curvas cerradas y unos 25–35 minutos de manejo. Conviene subir de día y usar el freno de motor en las bajadas.",
        },
        {
          title: "Estacionamiento junto al mirador",
          body:
            "Junto al mirador hay un sector de estacionamiento abierto, sin pavimentar, que puede llenarse en las tardes de mayor afluencia. Detente en un tramo amplio y nivelado, pon el freno de mano y ten cuidado al abrir las puertas con viento fuerte.",
        },
        {
          title: "Bus, remis y transferencia",
          body:
            "Los buses de larga distancia terminan en la terminal de Villa de Merlo. No hay servicio público de bus hasta el mirador: el último tramo requiere taxi, remis local, transfer acordado, excursión contratada o un vehículo particular.",
        },
        {
          title: "Último tramo serrano",
          body:
            "Cerca del mirador el acceso debe leerse como un tramo de montaña y no como una llegada urbana simple. La exposición al viento, la visibilidad reducida y los puntos de estacionamiento merecen atención propia antes de bajar del vehículo.",
        },
      ],
    },
    visit: {
      title: "Sugerencias de visita",
      cards: [
        {
          title: "Mejor luz",
          body:
            "Para leer el paisaje y fotografiar, conviene llegar poco después del amanecer o entre 1 y 1,5 horas antes del atardecer. La mañana favorece las nubes bajas; la tarde, el relieve lateral del filo.",
        },
        {
          title: "Temperatura y viento",
          body:
            "La cresta suele sentirse más fresca que el centro de Merlo. Si se suma el viento, baja aún más la temperatura percibida, por lo que conviene llevar abrigo liviano cortaviento, agua y protección solar.",
        },
        {
          title: "Tiempo recomendado",
          body:
            "Reserva 30 a 60 minutos para una parada panorámica simple, o hasta media jornada si sumas fotos, miradores cercanos y actividad aérea.",
        },
        {
          title: "Seguridad en el sitio",
          body:
            "En actividades de aventura siempre prevalece la indicación operativa vigente. Si aumenta el viento, cae la visibilidad o no te sientes en plena forma, puede ser mejor una visita solo panorámica.",
        },
      ],
    },
    editorial: {
      title: "Nota editorial",
      body:
        "Como guía no lucrativa de divulgación turística, el sitio prioriza orientación, contexto ambiental, formas de llegada, fotos del lugar y referencias oficiales por encima del lenguaje comercial.",
    },
    links: {
      title: "Enlaces oficiales de referencia",
      intro:
        "Estos recursos permiten ampliar la lectura del lugar hacia Merlo, la provincia de San Luis y el sistema público de información turística de Argentina.",
      items: [
        {
          title: "Secretaría de Turismo de Villa de Merlo",
          href: "https://villademerlo.tur.ar/",
          description:
            "La fuente oficial más cercana al lugar, útil para ampliar contexto local sobre circuitos panorámicos, clima y atractivos cercanos.",
        },
        {
          title: "Turismo San Luis",
          href: "https://turismo.sanluis.gov.ar/",
          description:
            "Portal oficial de turismo provincial, adecuado para entender en escala más amplia el paisaje serrano de los Comechingones.",
        },
        {
          title: "Provincia de San Luis - Argentina.gob.ar",
          href: "https://www.argentina.gob.ar/sanluis",
          description:
            "Página gubernamental nacional con un marco más institucional sobre la provincia y su contexto público.",
        },
        {
          title: "Gobierno de la Provincia de San Luis",
          href: "https://www.sanluis.gov.ar/",
          description:
            "Útil para avisos públicos, servicios provinciales y contexto práctico más amplio.",
        },
        {
          title: "Argentina.travel",
          href: "https://www.argentina.travel/",
          description:
            "Portal oficial nacional para visitantes internacionales que buscan una referencia más general sobre destinos y desplazamientos.",
        },
      ],
    },
    sources: {
      title: "Fuentes y lecturas complementarias",
      intro:
        "Esta página se compila a partir de material geográfico público y de portales turísticos oficiales locales y nacionales, para que el visitante pueda verificar y ampliar lo que lee. Todos los enlaces apuntan a fuentes terceras autorizadas o públicas.",
      items: [
        {
          title: "Facultad de Turismo y Urbanismo UNSL · Guía de plantas nativas",
          href: "https://ftu.unsl.edu.ar/wp-content/uploads/libros-publicaciones-ftu/Guia-de-plantas-nativas.pdf",
          description: "Florencia Arriola, directora de la carrera Guía Universitario de Turismo, recomendó el 2 de noviembre de 2026 esta guía del monte nativo de Villa de Merlo como contexto regional. No hemos obtenido el texto y no podemos confirmar especies en el sitio de la tirolesa. La facultad no verificó la operación ni avaló esta guía. El enlace puede solicitar una verificación de acceso.",
        },
        {
          title: "Portal turístico oficial de Villa de Merlo",
          href: "https://villademerlo.tur.ar/",
          description: "La fuente oficial más cercana al lugar, útil para circuitos panorámicos, contexto climático y actividades cercanas.",
        },
        {
          title: "Portal turístico de la provincia de San Luis",
          href: "https://turismo.sanluis.gov.ar/",
          description: "Portal oficial provincial para ampliar la lectura sobre los Comechingones y la naturaleza circundante.",
        },
        {
          title: "Portal oficial de viajes de Argentina",
          href: "https://www.argentina.travel/",
          description: "Portal nacional para un contexto más amplio sobre transportes y destinos.",
        },
        {
          title: "Pueblo comechingón (Wikipedia)",
          href: "https://es.wikipedia.org/wiki/Comechingones",
          description: "Material de referencia público sobre la historia y la cultura indígenas de la región.",
        },
        {
          title: "Villa de Merlo (Wikipedia)",
          href: "https://es.wikipedia.org/wiki/Villa_de_Merlo",
          description: "Material de referencia público sobre la historia, el clima y la geografía de Merlo.",
        },
      ],
    },
    imageCredits: {
      title: "Créditos y derechos de imagen",
      body:
        "Todas las imágenes mostradas en este sitio son propiedad y están bajo derechos de autor de sus fotógrafos originales. Se muestran aquí únicamente con fines divulgativos y sin fines de lucro, y este sitio no reclama su propiedad. Si un titular de derechos objeta la forma en que se presenta una imagen, puede contactarnos a través del sitio y responderemos con prontitud.",
    },
    footer: {
      copyright: "© 2026 Guía Tirolesa Mirador Del Sol. Todos los derechos reservados.",
      disclaimer:
        "Este sitio web es un proyecto independiente, no lucrativo y divulgativo de terceros; no tiene relación institucional con el Gobierno de Argentina ni con ninguna entidad oficial.",
      mapsLabel: "Google Maps →",
      napTitle: "Datos del lugar",
    },
  },
};
