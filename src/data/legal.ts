import { locales, type Locale } from "./site";

export const legalPageKeys = ["privacy", "terms", "cookies"] as const;

export type LegalPageKey = (typeof legalPageKeys)[number];

type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type LegalDocument = {
  title: string;
  description: string;
  updatedLabel: string;
  updatedValue: string;
  intro: string;
  sections: LegalSection[];
};

type CookieCategory = {
  key: "necessary" | "analytics" | "preferences" | "marketing";
  title: string;
  description: string;
  statusLabel: string;
  statusValue: string;
  locked?: boolean;
  detailTitle: string;
  detailBody: string;
};

type CookiePage = LegalDocument & {
  categories: CookieCategory[];
  consentTitle: string;
  consentBody: string;
  note: string;
  saveLabel: string;
  rejectLabel: string;
  savedMessage: string;
  rejectedMessage: string;
};

export type LegalLocaleContent = {
  homeLabel: string;
  backLabel: string;
  footerLinks: {
    privacy: string;
    terms: string;
    cookies: string;
  };
  privacy: LegalDocument;
  terms: LegalDocument;
  cookies: CookiePage;
};

const legalSlugs: Record<LegalPageKey, string> = {
  privacy: "privacy-policy",
  terms: "terms-of-service",
  cookies: "cookie-settings",
};

export const legalSlugByKey = legalSlugs;

export const legalKeyBySlug = Object.fromEntries(
  Object.entries(legalSlugs).map(([key, slug]) => [slug, key]),
) as Record<string, LegalPageKey>;

export const localizedLegalPath = (locale: Locale, key: LegalPageKey) =>
  locale === "zh" ? `/${legalSlugByKey[key]}/` : `/${locale}/${legalSlugByKey[key]}/`;

export const legalAlternateUrls = (key: LegalPageKey, siteOrigin: string) =>
  locales.map((locale) => ({
    hreflang: locale === "zh" ? "zh-CN" : locale,
    href: `${siteOrigin}${localizedLegalPath(locale, key)}`,
  }));

export const legalContentByLocale: Record<Locale, LegalLocaleContent> = {
  zh: {
    homeLabel: "首页",
    backLabel: "返回首页",
    footerLinks: {
      privacy: "隐私政策",
      terms: "服务条款",
      cookies: "Cookie 设置",
    },
    privacy: {
      title: "隐私政策",
      description: "说明本网站如何收集、使用、保存与保护最小必要范围内的访问者信息。",
      updatedLabel: "最后更新时间",
      updatedValue: "2026年7月",
      intro:
        "我们以最小化处理为原则运营本网站。除维持站点运行、理解访问情况和回应主动联系所必需的信息外，我们不会主动要求访客提交与浏览目的无关的个人数据。",
      sections: [
        {
          title: "我们收集的信息",
          bullets: [
            "浏览数据，如 IP 地址、浏览器类型、设备与语言环境、访问时间、来源页面和浏览路径。",
            "Cookie 与类似技术产生的技术性记录，用于保存基础偏好或衡量页面访问情况。",
            "您通过电子邮件或其他主动联系渠道自愿提交的信息，例如姓名、联系地址及问题描述。",
          ],
        },
        {
          title: "我们如何使用您的信息",
          bullets: [
            "改善网站内容结构、语言体验与整体可用性。",
            "分析流量来源、访问模式和页面表现，以便进行非商业性的内容优化。",
            "回应咨询、纠错请求、版权通知或其他合法沟通。",
            "在适用法律要求下履行记录保存、合规披露或安全响应义务。",
          ],
        },
        {
          title: "处理依据与最小化原则",
          paragraphs: [
            "对于基础访问日志和站点安全记录，我们通常基于网站正常运行、故障排查和防止滥用的合法利益进行处理。",
            "对于您主动通过邮件或联系渠道发送的信息，我们基于回应请求、持续沟通或履行相关法定义务进行处理。",
            "除非确有必要，我们不会将访问数据与可直接识别个人身份的信息进行额外关联。",
          ],
        },
        {
          title: "第三方服务",
          paragraphs: [
            "本网站可能会链接或接入第三方服务，例如 Google Maps、Google Analytics 或其他地图、统计和托管基础设施服务。若相关服务被启用，它们将按照各自的隐私政策处理技术数据。",
            "当前站点是否实际启用某项第三方服务，以页面上可见的功能、脚本和说明为准。外部站点与嵌入服务不受本政策直接控制。",
          ],
        },
        {
          title: "数据保留与安全",
          paragraphs: [
            "我们仅在实现本政策所述目的所需期间内保留相关信息，随后会删除、匿名化或限制访问。",
            "我们采取合理的技术与组织措施保护信息安全，但互联网传输与第三方基础设施无法保证绝对无风险。",
          ],
        },
        {
          title: "您的权利",
          bullets: [
            "访问我们持有的与您相关的个人数据。",
            "要求更正不准确或不完整的信息。",
            "在适用条件下要求删除、限制处理或反对处理。",
            "在以同意为基础的处理中随时撤回同意，而不影响撤回前处理的合法性。",
            "向适用的数据保护监管机构提出投诉，特别是在 GDPR 或类似法规适用时。",
          ],
        },
      ],
    },
    terms: {
      title: "服务条款",
      description: "说明访问和使用本网站时适用的基本条件、责任边界与知识产权规则。",
      updatedLabel: "最后更新时间",
      updatedValue: "2026年7月",
      intro:
        "访问和使用本网站，即表示您同意受本条款约束。如果您不同意这些条款，请停止使用本网站。",
      sections: [
        {
          title: "内容使用",
          paragraphs: [
            "本网站内容仅供一般性参考与公共信息整理使用。本站是独立的第三方旅游信息网站，与景点运营方、政府机构、地图平台或任何商业服务商不存在从属、代理或授权背书关系，除非页面明确说明。",
          ],
        },
        {
          title: "信息准确性",
          paragraphs: [
            "我们努力提供准确、及时且尽量可核实的信息，但无法保证所有内容始终完整、无误或持续更新。",
            "开放时间、道路条件、票务安排、天气影响、联系方式及配套服务均可能发生变化。出行前请务必通过官方渠道再次核实关键事项。",
          ],
        },
        {
          title: "知识产权",
          paragraphs: [
            "本网站的页面设计、结构安排、原创文案与数据整理成果受适用的版权及相关法律保护。",
            "第三方地图、品牌名称、公开数据与其他非本站原创资料，其权利仍归各自权利人所有。若页面使用第三方图片、地图或嵌入内容，应同时遵守相应服务条款与许可条件。",
          ],
        },
        {
          title: "可接受使用",
          bullets: [
            "不得以自动化、抓取、干扰或其他方式破坏网站稳定性与正常访问。",
            "不得将本站内容包装为官方发布、运营承诺或交易性保证。",
            "不得利用本站内容从事违法、误导、侵权或损害第三方权益的行为。",
          ],
        },
        {
          title: "责任限制",
          paragraphs: [
            "本网站按“现状”提供，不附带任何明示或默示担保，包括但不限于适销性、特定用途适用性和持续可用性。",
            "对于您基于本站内容作出的行程、购买、预订、驾驶或其他决策所造成的直接或间接损失，我们在法律允许的最大范围内不承担责任。",
          ],
        },
        {
          title: "条款变更",
          paragraphs: [
            "我们可以因内容调整、技术更新或合规要求而修订本条款。更新版本将在本页公布，并以页面载明的更新时间为准。",
          ],
        },
      ],
    },
    cookies: {
      title: "Cookie 设置",
      description: "说明本站如何使用 Cookie、存储偏好，并允许访客记录可选类别的本地偏好。",
      updatedLabel: "最后更新时间",
      updatedValue: "2026年7月",
      intro:
        "我们使用必要的技术性存储来维持基本功能，并可在启用相应工具时使用分析型或偏好型 Cookie。您可以在本页记录对可选类别的偏好。",
      sections: [
        {
          title: "什么是 Cookie",
          paragraphs: [
            "Cookie 是网站写入浏览器的小型文本记录，用于识别会话、保存语言或功能偏好、衡量匿名访问情况，或支持第三方嵌入服务运行。",
          ],
        },
        {
          title: "我们如何使用 Cookie",
          bullets: [
            "维持页面基础运行与安全。",
            "保存语言、同意记录或其他站点偏好。",
            "在启用统计服务时衡量匿名访问趋势与内容表现。",
          ],
        },
      ],
      categories: [
        {
          key: "necessary",
          title: "必要 Cookie",
          description: "这些 Cookie 对网站正常运行、基础安全与同意记录至关重要，无法禁用。",
          statusLabel: "状态",
          statusValue: "始终保持活跃",
          locked: true,
          detailTitle: "必要 Cookie",
          detailBody: "用于基础会话、安全防护和记录您的同意选择，不用于广告投放。",
        },
        {
          key: "analytics",
          title: "分析型 Cookie",
          description: "它们通过收集匿名使用数据，帮助我们理解访客如何与网站互动。",
          statusLabel: "Google Analytics",
          statusValue: "可选",
          detailTitle: "Google Analytics",
          detailBody: "若统计服务被启用，它会记录匿名化的页面访问和使用模式，帮助我们改进内容与信息结构。",
        },
        {
          key: "preferences",
          title: "偏好 Cookie",
          description: "它们会记住您的语言与显示等站点设置，以改善后续访问体验。",
          statusLabel: "用户偏好",
          statusValue: "可选",
          detailTitle: "用户偏好",
          detailBody: "用于保存语言选择、Cookie 偏好以及未来可能提供的显示设置，不用于跨站追踪。",
        },
        {
          key: "marketing",
          title: "营销 Cookie",
          description: "它们通常用于个性化广告与活动衡量。当前站点默认不启用此类用途。",
          statusLabel: "个性化广告",
          statusValue: "默认停用",
          detailTitle: "个性化广告",
          detailBody: "本站当前不以广告投放为核心功能。如未来引入相关服务，将先更新本页并征得适用同意。",
        },
      ],
      consentTitle: "同意管理",
      consentBody:
        "您可以随时返回本页修改偏好。请注意，拒绝可选类别可能会影响未来某些增强功能或统计测量，但不会影响网站基础可访问性。",
      note:
        "本页记录的是浏览器本地偏好设置，用于在当前站点后续启用可选服务时尊重您的选择；它本身不会立即激活第三方脚本。",
      saveLabel: "保存偏好设置",
      rejectLabel: "拒绝一切",
      savedMessage: "Cookie 偏好已保存。",
      rejectedMessage: "已拒绝所有可选 Cookie。",
    },
  },
  en: {
    homeLabel: "Home",
    backLabel: "Back to home",
    footerLinks: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookie Settings",
    },
    privacy: {
      title: "Privacy Policy",
      description: "Explains how this website collects, uses, stores, and protects the minimum amount of visitor data needed to operate.",
      updatedLabel: "Last updated",
      updatedValue: "July 2026",
      intro:
        "We operate this website according to a data-minimization principle. We do not intentionally request personal information beyond what is necessary to run the site, understand visits, and respond to voluntary contact.",
      sections: [
        {
          title: "Information we collect",
          bullets: [
            "Browsing data such as IP address, browser type, device and language environment, access time, referring page, and browsing path.",
            "Technical records generated by cookies or similar technologies for basic preferences or visit measurement.",
            "Information you voluntarily send through email or other direct contact channels, such as your name, contact details, and message content.",
          ],
        },
        {
          title: "How we use your information",
          bullets: [
            "To improve site structure, multilingual usability, and overall content quality.",
            "To analyze traffic sources, browsing patterns, and page performance for non-commercial editorial optimization.",
            "To respond to questions, correction requests, copyright notices, or other lawful communications.",
            "To comply with legal, security, or record-keeping obligations where applicable.",
          ],
        },
        {
          title: "Legal basis and data minimization",
          paragraphs: [
            "Basic access logs and security-related records are generally processed on the basis of legitimate interests in operating, troubleshooting, and protecting the website.",
            "Information you send to us directly is processed to answer your request, maintain communication, or meet related legal obligations.",
            "Unless necessary, we do not combine browsing records with directly identifying personal information.",
          ],
        },
        {
          title: "Third-party services",
          paragraphs: [
            "This website may link to or rely on third-party services such as Google Maps, Google Analytics, or hosting and infrastructure providers. If such services are enabled, they process technical data under their own privacy policies.",
            "Whether a specific third-party service is actually active depends on the visible features, scripts, and disclosures present on the site at the time of access.",
          ],
        },
        {
          title: "Retention and security",
          paragraphs: [
            "We retain information only for as long as reasonably necessary to fulfill the purposes described here, after which it may be deleted, anonymized, or access-restricted.",
            "We use reasonable technical and organizational measures to protect data, but no internet transmission or third-party infrastructure can be guaranteed to be entirely risk-free.",
          ],
        },
        {
          title: "Your rights",
          bullets: [
            "To access the personal data we hold about you.",
            "To request correction of inaccurate or incomplete data.",
            "To request deletion, restriction, or objection where applicable.",
            "To withdraw consent at any time for consent-based processing.",
            "To lodge a complaint with an applicable supervisory authority, including under GDPR where relevant.",
          ],
        },
      ],
    },
    terms: {
      title: "Terms of Service",
      description: "Sets out the main conditions, responsibility limits, and intellectual-property rules that apply when using this website.",
      updatedLabel: "Last updated",
      updatedValue: "July 2026",
      intro:
        "By accessing or using this website, you agree to be bound by these terms. If you do not agree, you should stop using the site.",
      sections: [
        {
          title: "Use of content",
          paragraphs: [
            "All website content is provided for general reference and public-information purposes. This is an independent third-party travel information website and is not an official arm, agent, or endorsed representative of any attraction operator, government institution, mapping platform, or commercial service unless expressly stated.",
          ],
        },
        {
          title: "Accuracy of information",
          paragraphs: [
            "We aim to provide accurate, timely, and carefully checked information, but we cannot guarantee that all content will always be complete, error-free, or continuously updated.",
            "Opening hours, road conditions, ticketing arrangements, weather impacts, contact details, and supporting services may change. Please verify critical information through official channels before traveling.",
          ],
        },
        {
          title: "Intellectual property",
          paragraphs: [
            "The website design, information architecture, original writing, and editorial compilation are protected by applicable copyright and related laws.",
            "Third-party maps, brand names, public datasets, and other non-original materials remain the property of their respective rights holders and may be subject to their own licenses or terms.",
          ],
        },
        {
          title: "Acceptable use",
          bullets: [
            "Do not disrupt, scrape, overload, or interfere with the site's stability or normal access.",
            "Do not misrepresent the website as an official source, booking guarantee, or operator commitment.",
            "Do not use the content for unlawful, misleading, infringing, or harmful purposes.",
          ],
        },
        {
          title: "Limitation of liability",
          paragraphs: [
            "This website is provided on an 'as is' basis without express or implied warranties, including warranties of merchantability, fitness for a particular purpose, or uninterrupted availability.",
            "To the maximum extent permitted by law, we are not liable for direct or indirect loss arising from travel, booking, driving, purchasing, or other decisions made in reliance on this website.",
          ],
        },
        {
          title: "Changes to these terms",
          paragraphs: [
            "We may revise these terms to reflect editorial updates, technical changes, or legal requirements. The updated version will be posted on this page with its revised date.",
          ],
        },
      ],
    },
    cookies: {
      title: "Cookie Settings",
      description: "Explains how the site uses cookies, stores preferences, and lets visitors record local choices for optional categories.",
      updatedLabel: "Last updated",
      updatedValue: "July 2026",
      intro:
        "We use necessary technical storage for essential functionality and may use analytics or preference cookies when those tools are enabled. You can record your preferences for optional categories on this page.",
      sections: [
        {
          title: "What cookies are",
          paragraphs: [
            "Cookies are small text records written to your browser to recognize sessions, store language or display preferences, measure anonymous visits, or support third-party embedded services.",
          ],
        },
        {
          title: "How we use cookies",
          bullets: [
            "To keep basic pages functioning and secure.",
            "To remember language, consent, or site preferences.",
            "To measure anonymous visit trends when analytics services are enabled.",
          ],
        },
      ],
      categories: [
        {
          key: "necessary",
          title: "Necessary Cookies",
          description: "Required for basic operation, security, and consent recording. They cannot be disabled.",
          statusLabel: "Status",
          statusValue: "Always active",
          locked: true,
          detailTitle: "Necessary Cookies",
          detailBody: "Used for core sessions, security, and saving your consent choices, not for advertising.",
        },
        {
          key: "analytics",
          title: "Analytics Cookies",
          description: "Help us understand how visitors interact with the website through aggregated, anonymous measurement.",
          statusLabel: "Google Analytics",
          statusValue: "Optional",
          detailTitle: "Google Analytics",
          detailBody: "If analytics services are enabled, they collect anonymized page-use signals to improve content and structure.",
        },
        {
          key: "preferences",
          title: "Preference Cookies",
          description: "Remember language and display preferences to improve later visits.",
          statusLabel: "User Preferences",
          statusValue: "Optional",
          detailTitle: "User Preferences",
          detailBody: "Used to store language selection, cookie choices, and future display settings without cross-site tracking.",
        },
        {
          key: "marketing",
          title: "Marketing Cookies",
          description: "Usually used for personalized advertising and campaign measurement. This site does not enable them by default.",
          statusLabel: "Personalized Ads",
          statusValue: "Disabled by default",
          detailTitle: "Personalized Ads",
          detailBody: "The site is not primarily advertising-driven. If such services are introduced later, this page will be updated first.",
        },
      ],
      consentTitle: "Consent management",
      consentBody:
        "You may return to this page at any time to change your preferences. Rejecting optional categories may affect future enhanced features or audience measurement, but not basic site access.",
      note:
        "This page stores local browser preferences so the site can respect your choices if optional services are activated later; saving preferences here does not itself load third-party scripts.",
      saveLabel: "Save Preferences",
      rejectLabel: "Reject All",
      savedMessage: "Cookie preferences saved.",
      rejectedMessage: "All optional cookies rejected.",
    },
  },
  it: {
    homeLabel: "Home",
    backLabel: "Torna alla home",
    footerLinks: {
      privacy: "Privacy Policy",
      terms: "Termini di Servizio",
      cookies: "Impostazioni Cookie",
    },
    privacy: {
      title: "Privacy Policy",
      description: "Spiega come il sito raccoglie, usa, conserva e protegge il minimo indispensabile di dati dei visitatori.",
      updatedLabel: "Ultimo aggiornamento",
      updatedValue: "luglio 2026",
      intro:
        "Gestiamo questo sito secondo un principio di minimizzazione dei dati. Non richiediamo intenzionalmente informazioni personali oltre quanto necessario per il funzionamento del sito, la comprensione delle visite e la risposta ai contatti volontari.",
      sections: [
        {
          title: "Informazioni raccolte",
          bullets: [
            "Dati di navigazione come indirizzo IP, tipo di browser, dispositivo, lingua, orario di accesso, pagina di provenienza e percorso di navigazione.",
            "Registrazioni tecniche generate da cookie o tecnologie simili per preferenze di base o misurazione delle visite.",
            "Informazioni inviate volontariamente via email o tramite altri canali diretti, come nome, contatti e contenuto del messaggio.",
          ],
        },
        {
          title: "Come usiamo le informazioni",
          bullets: [
            "Per migliorare struttura, usabilita multilingue e qualita dei contenuti.",
            "Per analizzare origini del traffico, modelli di visita e rendimento delle pagine in chiave editoriale non commerciale.",
            "Per rispondere a domande, richieste di correzione, notifiche di copyright o altre comunicazioni lecite.",
            "Per adempiere a obblighi legali, di sicurezza o conservazione dei registri se applicabili.",
          ],
        },
        {
          title: "Base giuridica e minimizzazione",
          paragraphs: [
            "I log di accesso e i registri legati alla sicurezza sono di norma trattati sulla base del legittimo interesse a gestire, proteggere e diagnosticare il sito.",
            "Le informazioni inviate direttamente vengono trattate per rispondere alla richiesta, mantenere la comunicazione o adempiere a obblighi legali collegati.",
          ],
        },
        {
          title: "Servizi di terze parti",
          paragraphs: [
            "Il sito puo collegarsi o affidarsi a servizi di terze parti come Google Maps, Google Analytics o fornitori di hosting e infrastruttura. Se attivati, tali servizi trattano dati tecnici secondo le proprie informative.",
          ],
        },
        {
          title: "Conservazione e sicurezza",
          paragraphs: [
            "Conserviamo le informazioni solo per il tempo ragionevolmente necessario agli scopi descritti e poi le cancelliamo, anonimizzamo o limitiamo nell'accesso.",
            "Adottiamo misure tecniche e organizzative ragionevoli, ma nessuna trasmissione internet puo essere garantita priva di rischio assoluto.",
          ],
        },
        {
          title: "I tuoi diritti",
          bullets: [
            "Accedere ai dati personali che ti riguardano.",
            "Chiedere la rettifica di dati inesatti o incompleti.",
            "Chiedere cancellazione, limitazione o opposizione quando applicabile.",
            "Revocare il consenso per trattamenti basati sul consenso.",
            "Presentare reclamo all'autorita di controllo competente, incluso il quadro GDPR se rilevante.",
          ],
        },
      ],
    },
    terms: {
      title: "Termini di Servizio",
      description: "Definisce condizioni d'uso, limiti di responsabilita e regole di proprieta intellettuale applicabili al sito.",
      updatedLabel: "Ultimo aggiornamento",
      updatedValue: "luglio 2026",
      intro:
        "Accedendo o usando questo sito accetti di essere vincolato da questi termini. Se non li condividi, interrompi l'uso del sito.",
      sections: [
        {
          title: "Uso dei contenuti",
          paragraphs: [
            "I contenuti del sito sono forniti a scopo informativo generale. Questo e un sito indipendente di informazione turistica di terza parte e non rappresenta ufficialmente operatori, enti pubblici, piattaforme cartografiche o servizi commerciali salvo indicazione espressa.",
          ],
        },
        {
          title: "Accuratezza delle informazioni",
          paragraphs: [
            "Cerchiamo di offrire informazioni accurate e aggiornate, ma non possiamo garantire completezza, assenza di errori o aggiornamento continuo.",
            "Orari, condizioni stradali, servizi, meteo e contatti possono cambiare. Prima del viaggio verifica sempre gli elementi essenziali tramite fonti ufficiali.",
          ],
        },
        {
          title: "Proprieta intellettuale",
          paragraphs: [
            "Design del sito, struttura informativa, testi originali e lavoro editoriale sono protetti dalle norme applicabili.",
            "Mappe, marchi, dataset pubblici e altri materiali di terzi restano dei rispettivi titolari e possono essere soggetti a licenze o termini propri.",
          ],
        },
        {
          title: "Uso accettabile",
          bullets: [
            "Non interferire con stabilita, accesso normale o sicurezza del sito.",
            "Non presentare il sito come fonte ufficiale, garanzia di prenotazione o impegno operativo.",
            "Non usare i contenuti per finalita illecite, fuorvianti o lesive di diritti altrui.",
          ],
        },
        {
          title: "Limitazione di responsabilita",
          paragraphs: [
            "Il sito e fornito 'cosi com'e' senza garanzie espresse o implicite.",
            "Nei limiti consentiti dalla legge, non rispondiamo di perdite dirette o indirette derivanti da decisioni di viaggio, acquisto, guida o prenotazione prese sulla base del sito.",
          ],
        },
        {
          title: "Modifiche ai termini",
          paragraphs: [
            "Possiamo aggiornare questi termini per esigenze editoriali, tecniche o normative. La versione aggiornata verra pubblicata qui con la nuova data.",
          ],
        },
      ],
    },
    cookies: {
      title: "Impostazioni Cookie",
      description: "Spiega come il sito usa i cookie, salva le preferenze e consente di registrare scelte locali per categorie opzionali.",
      updatedLabel: "Ultimo aggiornamento",
      updatedValue: "luglio 2026",
      intro:
        "Usiamo memorizzazioni tecniche necessarie per le funzioni essenziali e possiamo usare cookie analitici o di preferenza quando tali strumenti sono attivi. In questa pagina puoi registrare le tue scelte opzionali.",
      sections: [
        {
          title: "Cosa sono i cookie",
          paragraphs: [
            "I cookie sono piccoli file di testo salvati nel browser per riconoscere sessioni, memorizzare lingua o preferenze, misurare visite anonime o supportare servizi incorporati di terze parti.",
          ],
        },
        {
          title: "Come usiamo i cookie",
          bullets: [
            "Per mantenere il sito funzionante e sicuro.",
            "Per ricordare lingua, consenso e preferenze.",
            "Per misurare trend anonimi di visita quando i servizi analitici sono attivi.",
          ],
        },
      ],
      categories: [
        {
          key: "necessary",
          title: "Cookie Necessari",
          description: "Necessari per funzionamento di base, sicurezza e registrazione del consenso. Non possono essere disattivati.",
          statusLabel: "Stato",
          statusValue: "Sempre attivi",
          locked: true,
          detailTitle: "Cookie Necessari",
          detailBody: "Servono a sessione, sicurezza e salvataggio delle tue scelte, non alla pubblicita.",
        },
        {
          key: "analytics",
          title: "Cookie Analitici",
          description: "Aiutano a capire come i visitatori usano il sito tramite misurazioni aggregate e anonime.",
          statusLabel: "Google Analytics",
          statusValue: "Opzionale",
          detailTitle: "Google Analytics",
          detailBody: "Se attivo, raccoglie segnali anonimizzati di utilizzo per migliorare contenuti e struttura.",
        },
        {
          key: "preferences",
          title: "Cookie di Preferenza",
          description: "Ricordano lingua e impostazioni di visualizzazione per migliorare le visite successive.",
          statusLabel: "Preferenze Utente",
          statusValue: "Opzionale",
          detailTitle: "Preferenze Utente",
          detailBody: "Memorizzano lingua, scelte cookie e future impostazioni senza tracciamento cross-site.",
        },
        {
          key: "marketing",
          title: "Cookie di Marketing",
          description: "Usati di solito per pubblicita personalizzata e misurazione campagne. Il sito non li abilita per default.",
          statusLabel: "Pubblicita Personalizzata",
          statusValue: "Disattivati di default",
          detailTitle: "Pubblicita Personalizzata",
          detailBody: "Il sito non e centrato sulla pubblicita. Se questi servizi verranno introdotti, la pagina sara aggiornata prima.",
        },
      ],
      consentTitle: "Gestione del consenso",
      consentBody:
        "Puoi tornare in questa pagina in qualsiasi momento per modificare le preferenze. Rifiutare le categorie opzionali puo limitare funzioni avanzate future o misurazioni statistiche, ma non l'accesso di base al sito.",
      note:
        "Questa pagina salva preferenze locali del browser per rispettare le tue scelte se servizi opzionali verranno attivati in futuro; salvare qui non carica da solo script di terze parti.",
      saveLabel: "Salva Preferenze",
      rejectLabel: "Rifiuta Tutto",
      savedMessage: "Preferenze cookie salvate.",
      rejectedMessage: "Tutti i cookie opzionali sono stati rifiutati.",
    },
  },
  es: {
    homeLabel: "Inicio",
    backLabel: "Volver al inicio",
    footerLinks: {
      privacy: "Politica de Privacidad",
      terms: "Terminos del Servicio",
      cookies: "Configuracion de Cookies",
    },
    privacy: {
      title: "Politica de Privacidad",
      description: "Explica como el sitio recopila, usa, conserva y protege la minima cantidad necesaria de datos de los visitantes.",
      updatedLabel: "Ultima actualizacion",
      updatedValue: "julio de 2026",
      intro:
        "Operamos este sitio con un criterio de minimizacion de datos. No solicitamos intencionalmente informacion personal mas alla de lo necesario para mantener el sitio, comprender las visitas y responder contactos voluntarios.",
      sections: [
        {
          title: "Informacion que recopilamos",
          bullets: [
            "Datos de navegacion como direccion IP, tipo de navegador, dispositivo, idioma, hora de acceso, pagina de origen y recorrido de navegacion.",
            "Registros tecnicos generados por cookies o tecnologias similares para preferencias basicas o medicion de visitas.",
            "Informacion que usted envia voluntariamente por correo electronico u otros canales directos, como nombre, datos de contacto y contenido del mensaje.",
          ],
        },
        {
          title: "Como usamos su informacion",
          bullets: [
            "Para mejorar la estructura del sitio, la experiencia multilingue y la calidad general del contenido.",
            "Para analizar origenes de trafico, patrones de uso y rendimiento de paginas con fines editoriales no comerciales.",
            "Para responder consultas, solicitudes de correccion, avisos de copyright u otras comunicaciones licitas.",
            "Para cumplir obligaciones legales, de seguridad o de conservacion cuando corresponda.",
          ],
        },
        {
          title: "Base juridica y minimizacion",
          paragraphs: [
            "Los registros basicos de acceso y seguridad suelen tratarse con base en intereses legitimos vinculados con la operacion, proteccion y diagnostico del sitio.",
            "La informacion enviada directamente se trata para responder su solicitud, mantener la comunicacion o cumplir obligaciones legales relacionadas.",
          ],
        },
        {
          title: "Servicios de terceros",
          paragraphs: [
            "El sitio puede enlazar o depender de servicios de terceros como Google Maps, Google Analytics o proveedores de hosting e infraestructura. Si se activan, trataran datos tecnicos segun sus propias politicas.",
          ],
        },
        {
          title: "Conservacion y seguridad",
          paragraphs: [
            "Conservamos la informacion solo durante el tiempo razonablemente necesario para los fines descritos y luego la eliminamos, anonimizamos o restringimos.",
            "Aplicamos medidas tecnicas y organizativas razonables, aunque ninguna transmision por internet puede garantizar riesgo cero.",
          ],
        },
        {
          title: "Sus derechos",
          bullets: [
            "Acceder a los datos personales que tengamos sobre usted.",
            "Solicitar correccion de datos inexactos o incompletos.",
            "Solicitar supresion, restriccion u oposicion cuando corresponda.",
            "Retirar el consentimiento en los tratamientos basados en consentimiento.",
            "Presentar una reclamacion ante la autoridad de control competente, incluido el marco GDPR cuando resulte aplicable.",
          ],
        },
      ],
    },
    terms: {
      title: "Terminos del Servicio",
      description: "Define condiciones de uso, limites de responsabilidad y reglas de propiedad intelectual aplicables a este sitio.",
      updatedLabel: "Ultima actualizacion",
      updatedValue: "julio de 2026",
      intro:
        "Al acceder o utilizar este sitio, usted acepta quedar sujeto a estos terminos. Si no esta de acuerdo, debe dejar de usarlo.",
      sections: [
        {
          title: "Uso del contenido",
          paragraphs: [
            "Todo el contenido se ofrece con fines informativos generales. Este es un sitio independiente de informacion turistica de terceros y no representa oficialmente a operadores, organismos publicos, plataformas cartograficas ni servicios comerciales salvo indicacion expresa.",
          ],
        },
        {
          title: "Exactitud de la informacion",
          paragraphs: [
            "Intentamos ofrecer informacion precisa y actualizada, pero no garantizamos integridad, ausencia de errores ni actualizacion continua.",
            "Horarios, condiciones del camino, servicios, clima y contactos pueden cambiar. Antes de viajar, verifique siempre los puntos esenciales con fuentes oficiales.",
          ],
        },
        {
          title: "Propiedad intelectual",
          paragraphs: [
            "El diseno del sitio, su estructura informativa, los textos originales y la labor editorial estan protegidos por la normativa aplicable.",
            "Mapas, marcas, conjuntos de datos publicos y otros materiales de terceros siguen perteneciendo a sus respectivos titulares y pueden tener licencias o terminos propios.",
          ],
        },
        {
          title: "Uso aceptable",
          bullets: [
            "No interfiera con la estabilidad, el acceso normal o la seguridad del sitio.",
            "No presente el sitio como fuente oficial, garantia de reserva o compromiso operativo.",
            "No use el contenido con fines ilicitos, enganiosos o lesivos para terceros.",
          ],
        },
        {
          title: "Limitacion de responsabilidad",
          paragraphs: [
            "El sitio se proporciona 'tal cual' sin garantias expresas ni implicitas.",
            "En la maxima medida permitida por la ley, no respondemos por perdidas directas o indirectas derivadas de decisiones de viaje, compra, conduccion o reserva tomadas a partir de este sitio.",
          ],
        },
        {
          title: "Cambios en estos terminos",
          paragraphs: [
            "Podemos actualizar estos terminos por ajustes editoriales, tecnicos o legales. La version vigente se publicara aqui con su fecha revisada.",
          ],
        },
      ],
    },
    cookies: {
      title: "Configuracion de Cookies",
      description: "Explica como el sitio usa cookies, guarda preferencias y permite registrar decisiones locales sobre categorias opcionales.",
      updatedLabel: "Ultima actualizacion",
      updatedValue: "julio de 2026",
      intro:
        "Usamos almacenamiento tecnico necesario para funciones esenciales y podemos usar cookies analiticas o de preferencias cuando esas herramientas esten activas. En esta pagina puede registrar sus decisiones sobre categorias opcionales.",
      sections: [
        {
          title: "Que son las cookies",
          paragraphs: [
            "Las cookies son pequenos registros de texto que el navegador guarda para reconocer sesiones, recordar idioma o preferencias, medir visitas anonimas o permitir servicios incrustados de terceros.",
          ],
        },
        {
          title: "Como usamos las cookies",
          bullets: [
            "Para mantener el funcionamiento basico y la seguridad del sitio.",
            "Para recordar idioma, consentimiento y preferencias.",
            "Para medir tendencias anonimas de visita cuando haya servicios analiticos habilitados.",
          ],
        },
      ],
      categories: [
        {
          key: "necessary",
          title: "Cookies Necesarias",
          description: "Son imprescindibles para el funcionamiento basico, la seguridad y el registro del consentimiento. No pueden desactivarse.",
          statusLabel: "Estado",
          statusValue: "Siempre activas",
          locked: true,
          detailTitle: "Cookies Necesarias",
          detailBody: "Sirven para sesion, seguridad y guardar sus elecciones, no para publicidad.",
        },
        {
          key: "analytics",
          title: "Cookies Analiticas",
          description: "Ayudan a entender como interactuan los visitantes con el sitio mediante medicion agregada y anonima.",
          statusLabel: "Google Analytics",
          statusValue: "Opcional",
          detailTitle: "Google Analytics",
          detailBody: "Si se activa, recopila senales anonimizadas de uso para mejorar contenidos y estructura.",
        },
        {
          key: "preferences",
          title: "Cookies de Preferencias",
          description: "Recuerdan idioma y ajustes de visualizacion para mejorar visitas futuras.",
          statusLabel: "Preferencias del Usuario",
          statusValue: "Opcional",
          detailTitle: "Preferencias del Usuario",
          detailBody: "Guardan idioma, elecciones de cookies y futuros ajustes sin seguimiento entre sitios.",
        },
        {
          key: "marketing",
          title: "Cookies de Marketing",
          description: "Suelen usarse para publicidad personalizada y medicion de campanas. Este sitio no las habilita por defecto.",
          statusLabel: "Publicidad Personalizada",
          statusValue: "Desactivadas por defecto",
          detailTitle: "Publicidad Personalizada",
          detailBody: "El sitio no esta orientado a la publicidad. Si esos servicios se incorporan, esta pagina se actualizara antes.",
        },
      ],
      consentTitle: "Gestion del consentimiento",
      consentBody:
        "Puede volver a esta pagina en cualquier momento para modificar sus preferencias. Rechazar categorias opcionales puede limitar futuras funciones avanzadas o mediciones estadisticas, pero no el acceso basico.",
      note:
        "Esta pagina guarda preferencias locales del navegador para respetar sus decisiones si en el futuro se activan servicios opcionales; guardar aqui no carga por si mismo scripts de terceros.",
      saveLabel: "Guardar Preferencias",
      rejectLabel: "Rechazar Todo",
      savedMessage: "Preferencias de cookies guardadas.",
      rejectedMessage: "Se rechazaron todas las cookies opcionales.",
    },
  },
};

