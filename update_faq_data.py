import json

with open('src/data/site.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Update types
content = content.replace(
    '''  faq: {
    title: string;
    intro: string;
    items: Array<{ question: string; answer: string }>;
  };''',
    '''  faq: {
    title: string;
    intro: string;
    groups: Array<{
      category: string;
      items: Array<{ question: string; answer: string }>;
    }>;
  };'''
)

# Update zh
old_zh_faq = '''    faq: {
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
    },'''

new_zh_faq = '''    faq: {
      title: "常见地质与出行释疑",
      intro:
        "为了帮助您做出最合理的行程决策，我们基于实地地理条件与高频到访反馈，将常见问题归纳为以下三个核心维度：",
      groups: [
        {
          category: "一、 地质特征与自然环境 (Geología y Entorno)",
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
          category: "二、 微气候与物理影响 (Microclima y Física)",
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
                "滑索是一项依赖重力与空气动力学的户外项目。现场运营方配备了专业测风仪进行实时监控。当峡谷风速或横风超过工程安全阈值时，出于物理规律与访客安全考量，项目会强制暂停。因此，滑索体验具有一定的天气随机性。",
            },
          ],
        },
        {
          category: "三、 行程规划与到访条件 (Planificación y Accesibilidad)",
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
                "除去天气变量，参与者自身需满足物理阈值。通常要求体重在 30 公斤至 100 公斤之间（具体以现场称重为准），以确保滑行动能与机械制动系统的最佳匹配，避免动能不足停在半空或动能过载。患有心血管疾病、严重恐高症或近期接受过手术的访客，建议将其作为纯粹的观景行程。",
            },
          ],
        },
      ],
    },'''

# Update en
old_en_faq = '''    faq: {
      title: "Structured visitor FAQ",
      intro:
        "Structured answers to common questions regarding geological features, climate impacts, and travel planning.",
      items: [
        {
          question: "Do I need a 4x4 vehicle to reach Tirolesa Mirador Del Sol?",
          answer:
            "Usually not. The main access section along Ruta 5 is paved and standard two-wheel-drive vehicles normally reach the lookout without issue. The real challenge comes from repeated switchbacks, grade changes, and mountain-driving technique.",
        },
        {
          question: "How does the 'microclimate' affect the zipline experience?",
          answer:
            "The microclimate directly manifests as thermals and canyon crosswinds, which impact both speed and perceived temperature. Operations are guided by real-time wind monitoring, making wind thresholds more critical than promotional promises.",
        },
        {
          question: "If I skip the zipline, what is the value of just visiting?",
          answer:
            "Even without the activity, the site offers an unobstructed 180-degree view of the valley. It functions as an excellent geographical observatory to study mountain carving, valley erosion, and vegetation changes across different elevation bands.",
        },
      ],
    },'''

new_en_faq = '''    faq: {
      title: "Structured visitor FAQ",
      intro:
        "To help you make informed travel decisions, we have organized the most common questions into three core dimensions based on geographical conditions and visitor feedback:",
      groups: [
        {
          category: "1. Geology and Environment",
          items: [
            {
              question: "How geologically stable are the Comechingones Mountains? Is ziplining safe here?",
              answer:
                "These mountains belong to the Sierras Pampeanas system. The bedrock consists of Paleozoic crystalline rocks, granite, and gneiss, making it extremely old and stable. The zipline's load-bearing anchors are deeply drilled into this solid, seamless bedrock, offering tensile strength far superior to typical soil or karst mountains.",
            },
            {
              question: "Why is the mountain so steep on the viewpoint side but gentle on the other?",
              answer:
                "This is a classic 'block mountain' feature. The western slope (where Merlo and the viewpoint are) lies on a geological fault plane that was thrust upward, creating the massive canyon drop needed for the zipline. The eastern slope (facing Cordoba) is a gentle decline. This asymmetry is the result of millions of years of tectonic movement.",
            },
            {
              question: "If I skip the zipline, what is the value of just visiting?",
              answer:
                "Even without the activity, the site offers an unobstructed 180-degree view of the valley. It functions as an excellent geographical observatory to study mountain carving, valley erosion, and vegetation changes across different elevation bands.",
            },
          ],
        },
        {
          category: "2. Microclimate and Physical Impacts",
          items: [
            {
              question: "Does the 'microclimate' mean it's always spring-like and never rains here?",
              answer:
                "This is a common misconception. Merlo's microclimate refers to oxygen-rich air, high negative ions, and low pollution, not a constant temperature or lack of rain. Due to the elevation, weather changes more drastically at the viewpoint than in the city below. Sudden showers, rapid fog, and large day-night temperature swings are typical.",
            },
            {
              question: "Is it safe to fly a consumer drone at the viewpoint?",
              answer:
                "Extreme caution is required. The deep canyon and microclimate generate strong thermal updrafts and unpredictable crosswinds during the day. Lightweight consumer drones can easily lose control or crash here. Flying is only recommended in the early morning when winds are calmest.",
            },
            {
              question: "How does mountain wind affect the zipline experience?",
              answer:
                "The zipline relies on gravity and aerodynamics. Operators use anemometers for real-time monitoring. If canyon winds exceed safety thresholds, the activity is paused due to physical laws and safety protocols. Therefore, the experience is somewhat dependent on daily weather.",
            },
          ],
        },
        {
          category: "3. Planning and Accessibility",
          items: [
            {
              question: "Do I need a 4x4 vehicle to reach Tirolesa Mirador Del Sol?",
              answer:
                "Usually not. Ruta 5 is mostly paved, and standard 2WD vehicles can reach the top. However, due to dense hairpin turns and steep grades, drivers should have mountain driving experience and use engine braking appropriately.",
            },
            {
              question: "Will I experience altitude sickness (Soroche/Puna) at 1,470 meters?",
              answer:
                "Typically, no. Medical altitude sickness generally occurs above 2,500 meters. At 1,470 meters, most visitors (including elderly and children) will not feel hypoxia. However, due to sudden temperature drops, catching a cold from lack of warm clothing is much more common.",
            },
            {
              question: "Are the facilities suitable for the elderly or wheelchair users?",
              answer:
                "The main viewpoint area is right next to Ruta 5. The walk from the parking area is very short and relatively flat, making it accessible for the elderly and wheelchair users to enjoy the panoramic view. However, the zipline area and surrounding unpaved rocky trails are not recommended for those with limited mobility.",
            },
            {
              question: "How is the mobile signal in the mountains? What should I prepare?",
              answer:
                "Due to the massive mountain blocking the signal, 4G/3G connectivity along Ruta 5 and at the viewpoint is highly unstable and often nonexistent. We strongly recommend downloading offline Google Maps before leaving Merlo and carrying some cash (Pesos), as digital payments (like Mercado Pago) may fail without internet.",
            },
            {
              question: "What are the physical requirements for the zipline?",
              answer:
                "Besides weather, participants must meet physical thresholds. The weight limit is usually between 30 kg and 100 kg (verified on-site) to ensure optimal kinetic energy and braking. Those with cardiovascular issues, severe acrophobia, or recent surgeries should treat this purely as a sightseeing trip.",
            },
          ],
        },
      ],
    },'''

# Update it
old_it_faq = '''    faq: {
      title: "FAQ strutturata",
      intro:
        "Risposte strutturate a domande comuni riguardanti caratteristiche geologiche, impatti climatici e pianificazione del viaggio.",
      items: [
        {
          question: "Serve un veicolo 4x4 per arrivare?",
          answer:
            "In genere no. Il tratto principale della Ruta 5 verso il mirador e asfaltato e una normale auto a due ruote motrici e di solito sufficiente. Le difficolta reali riguardano tornanti, pendenza e tecnica di guida in montagna.",
        },
        {
          question: "Come influisce il 'microclima' sull'esperienza della tirolesa?",
          answer:
            "Il microclima si manifesta direttamente come correnti termiche e venti trasversali del canyon, influenzando sia la velocita che la temperatura percepita. Le operazioni si basano sul monitoraggio del vento in tempo reale, rendendo i limiti del vento piu importanti delle promesse promozionali.",
        },
        {
          question: "Se non faccio la tirolesa, vale la pena andarci?",
          answer:
            "Anche senza l'attivita, il sito offre una vista a 180 gradi senza ostacoli sulla valle. Funziona come un eccellente osservatorio geografico per studiare l'erosione della valle, le formazioni rocciose e i cambiamenti della vegetazione in base all'altitudine.",
        },
      ],
    },'''

new_it_faq = '''    faq: {
      title: "FAQ strutturata",
      intro:
        "Per aiutarti a prendere decisioni di viaggio informate, abbiamo organizzato le domande più comuni in tre dimensioni principali basate sulle condizioni geografiche e sul feedback dei visitatori:",
      groups: [
        {
          category: "1. Geologia e Ambiente",
          items: [
            {
              question: "Quanto sono geologicamente stabili i Monti Comechingones? La tirolesa è sicura qui?",
              answer:
                "Queste montagne appartengono al sistema delle Sierras Pampeanas. Il substrato roccioso è costituito da rocce cristalline paleozoiche, granito e gneiss, il che lo rende estremamente antico e stabile. Gli ancoraggi portanti della tirolesa sono perforati in profondità in questo solido substrato roccioso, offrendo una resistenza alla trazione di gran lunga superiore a quella del terreno tipico o delle montagne carsiche.",
            },
            {
              question: "Perché la montagna è così ripida sul lato del belvedere ma dolce dall'altra parte?",
              answer:
                "Questa è una classica caratteristica di 'montagna a blocchi'. Il versante occidentale (dove si trovano Merlo e il belvedere) si trova su un piano di faglia geologica che è stato spinto verso l'alto, creando l'enorme dislivello del canyon necessario per la tirolesa. Il versante orientale (verso Cordoba) è un dolce declivio. Questa asimmetria è il risultato di milioni di anni di movimenti tettonici.",
            },
            {
              question: "Se non faccio la tirolesa, vale la pena andarci?",
              answer:
                "Anche senza l'attivita, il sito offre una vista a 180 gradi senza ostacoli sulla valle. Funziona come un eccellente osservatorio geografico per studiare l'erosione della valle, le formazioni rocciose e i cambiamenti della vegetazione in base all'altitudine.",
            },
          ],
        },
        {
          category: "2. Microclima e Impatti Fisici",
          items: [
            {
              question: "Il 'microclima' significa che qui è sempre primavera e non piove mai?",
              answer:
                "Questo è un malinteso comune. Il microclima di Merlo si riferisce ad aria ricca di ossigeno, ioni negativi alti e basso inquinamento, non a una temperatura costante o alla mancanza di pioggia. A causa dell'altitudine, il tempo cambia in modo più drastico al belvedere che in città. Acquazzoni improvvisi, nebbia rapida e grandi sbalzi di temperatura giorno-notte sono tipici.",
            },
            {
              question: "È sicuro far volare un drone consumer al belvedere?",
              answer:
                "È richiesta estrema cautela. Il profondo canyon e il microclima generano forti correnti ascensionali termiche e venti trasversali imprevedibili durante il giorno. I droni leggeri possono facilmente perdere il controllo o schiantarsi qui. Il volo è consigliato solo la mattina presto quando i venti sono più calmi.",
            },
            {
              question: "Come influisce il vento di montagna sull'esperienza della tirolesa?",
              answer:
                "La tirolesa si basa sulla gravità e sull'aerodinamica. Gli operatori utilizzano anemometri per il monitoraggio in tempo reale. Se i venti del canyon superano le soglie di sicurezza, l'attività viene sospesa a causa delle leggi fisiche e dei protocolli di sicurezza. Pertanto, l'esperienza dipende in una certa misura dal tempo giornaliero.",
            },
          ],
        },
        {
          category: "3. Pianificazione e Accessibilità",
          items: [
            {
              question: "Serve un veicolo 4x4 per arrivare?",
              answer:
                "In genere no. La Ruta 5 è in gran parte asfaltata e i veicoli 2WD standard possono raggiungere la cima. Tuttavia, a causa dei fitti tornanti e delle pendenze ripide, i conducenti dovrebbero avere esperienza di guida in montagna e utilizzare il freno motore in modo appropriato.",
            },
            {
              question: "Soffrirò di mal di montagna (Soroche/Puna) a 1.470 metri?",
              answer:
                "In genere no. Il mal di montagna medico si verifica generalmente sopra i 2.500 metri. A 1.470 metri, la maggior parte dei visitatori (compresi anziani e bambini) non avvertirà ipossia. Tuttavia, a causa di improvvisi cali di temperatura, prendere un raffreddore per mancanza di vestiti caldi è molto più comune.",
            },
            {
              question: "Le strutture sono adatte per anziani o persone in sedia a rotelle?",
              answer:
                "L'area del belvedere principale è proprio accanto alla Ruta 5. La passeggiata dal parcheggio è molto breve e relativamente pianeggiante, rendendo accessibile agli anziani e alle persone in sedia a rotelle godersi la vista panoramica. Tuttavia, l'area della tirolesa e i sentieri rocciosi non asfaltati circostanti non sono raccomandati per chi ha mobilità ridotta.",
            },
            {
              question: "Com'è il segnale mobile in montagna? Cosa devo preparare?",
              answer:
                "A causa della massiccia montagna che blocca il segnale, la connettività 4G/3G lungo la Ruta 5 e al belvedere è altamente instabile e spesso inesistente. Consigliamo vivamente di scaricare Google Maps offline prima di lasciare Merlo e di portare dei contanti (Pesos), poiché i pagamenti digitali (come Mercado Pago) potrebbero fallire senza internet.",
            },
            {
              question: "Quali sono i requisiti fisici per la tirolesa?",
              answer:
                "Oltre al tempo, i partecipanti devono soddisfare delle soglie fisiche. Il limite di peso è solitamente compreso tra 30 kg e 100 kg (verificato in loco) per garantire l'energia cinetica e la frenata ottimali. Coloro che hanno problemi cardiovascolari, grave acrofobia o interventi chirurgici recenti dovrebbero considerarlo puramente come un viaggio turistico.",
            },
          ],
        },
      ],
    },'''

# Update es
old_es_faq = '''    faq: {
      title: "FAQ estructurada",
      intro:
        "Respuestas estructuradas a preguntas comunes sobre características geológicas, impactos climáticos y planificación de viajes.",
      items: [
        {
          question: "¿Hace falta un vehiculo 4x4 para llegar?",
          answer:
            "Por lo general no. El tramo principal de la Ruta 5 hacia el mirador esta asfaltado y un auto comun de traccion simple suele ser suficiente. La dificultad real esta en las curvas cerradas, la pendiente y la tecnica de manejo serrano.",
        },
        {
          question: "¿Como afecta el 'microclima' a la tirolesa?",
          answer:
            "El microclima se manifiesta como termicas y vientos cruzados del cañon, lo que afecta la velocidad y la temperatura percibida. La operacion depende del monitoreo del viento en tiempo real, por lo que los limites de seguridad son mas importantes que los anuncios turisticos.",
        },
        {
          question: "Si no hago la tirolesa, ¿vale la pena ir?",
          answer:
            "Aun sin la actividad, el lugar ofrece una vista de 180 grados del valle sin interrupciones. Funciona como un excelente observatorio geografico para ver la erosion del valle, las formaciones rocosas y los cambios de vegetacion segun la altura.",
        },
      ],
    },'''

new_es_faq = '''    faq: {
      title: "FAQ estructurada",
      intro:
        "Para ayudarle a tomar las decisiones de viaje más informadas, hemos organizado las preguntas más comunes en tres dimensiones fundamentales basadas en las condiciones geográficas y los comentarios de los visitantes:",
      groups: [
        {
          category: "1. Geología y Entorno",
          items: [
            {
              question: "¿Qué tan estables geológicamente son las Sierras de los Comechingones? ¿Es segura la tirolesa aquí?",
              answer:
                "Estas montañas pertenecen al sistema de las Sierras Pampeanas. La roca madre está formada por rocas cristalinas paleozoicas, granito y gneis, lo que la hace extremadamente antigua y estable. Los anclajes de carga de la tirolesa están perforados profundamente en esta roca madre sólida y sin fisuras, ofreciendo una resistencia a la tracción muy superior a la de las montañas de suelo típico o kársticas.",
            },
            {
              question: "¿Por qué la montaña es tan empinada del lado del mirador pero suave del otro lado?",
              answer:
                "Esta es una característica clásica de 'montaña en bloque'. La ladera occidental (donde están Merlo y el mirador) se encuentra en un plano de falla geológica que fue empujado hacia arriba, creando la enorme caída del cañón necesaria para la tirolesa. La ladera oriental (hacia Córdoba) es un declive suave. Esta asimetría es el resultado de millones de años de movimiento tectónico.",
            },
            {
              question: "Si no hago la tirolesa, ¿vale la pena ir?",
              answer:
                "Aun sin la actividad, el lugar ofrece una vista de 180 grados del valle sin interrupciones. Funciona como un excelente observatorio geografico para ver la erosion del valle, las formaciones rocosas y los cambios de vegetacion segun la altura.",
            },
          ],
        },
        {
          category: "2. Microclima e Impactos Físicos",
          items: [
            {
              question: "¿El 'microclima' significa que siempre es primavera y nunca llueve aquí?",
              answer:
                "Este es un error común. El microclima de Merlo se refiere a aire rico en oxígeno, altos iones negativos y baja contaminación, no a una temperatura constante o falta de lluvia. Debido a la elevación, el clima cambia más drásticamente en el mirador que en la ciudad de abajo. Los aguaceros repentinos, la niebla rápida y los grandes cambios de temperatura entre el día y la noche son típicos.",
            },
            {
              question: "¿Es seguro volar un dron de consumo en el mirador?",
              answer:
                "Se requiere extrema precaución. El profundo cañón y el microclima generan fuertes corrientes térmicas ascendentes y vientos cruzados impredecibles durante el día. Los drones de consumo ligeros pueden perder fácilmente el control o estrellarse aquí. Solo se recomienda volar temprano en la mañana cuando los vientos están más tranquilos.",
            },
            {
              question: "¿Cómo afecta el viento de la montaña a la experiencia de la tirolesa?",
              answer:
                "La tirolesa depende de la gravedad y la aerodinámica. Los operadores utilizan anemómetros para el monitoreo en tiempo real. Si los vientos del cañón superan los umbrales de seguridad, la actividad se detiene debido a las leyes físicas y los protocolos de seguridad. Por lo tanto, la experiencia depende en cierta medida del clima diario.",
            },
          ],
        },
        {
          category: "3. Planificación y Accesibilidad",
          items: [
            {
              question: "¿Hace falta un vehiculo 4x4 para llegar?",
              answer:
                "Por lo general no. La Ruta 5 está asfaltada en su mayor parte y los vehículos 2WD estándar pueden llegar a la cima. Sin embargo, debido a las densas curvas cerradas y las pendientes pronunciadas, los conductores deben tener experiencia en conducción en montaña y usar el freno de motor de manera adecuada.",
            },
            {
              question: "¿Experimentaré mal de altura (Soroche/Puna) a 1.470 metros?",
              answer:
                "Normalmente no. El mal de altura médico generalmente ocurre por encima de los 2.500 metros. A 1.470 metros, la mayoría de los visitantes (incluidos ancianos y niños) no sentirán hipoxia. Sin embargo, debido a las caídas repentinas de temperatura, resfriarse por falta de ropa abrigada es mucho más común.",
            },
            {
              question: "¿Las instalaciones son aptas para personas mayores o usuarios de sillas de ruedas?",
              answer:
                "El área principal del mirador está justo al lado de la Ruta 5. La caminata desde el área de estacionamiento es muy corta y relativamente plana, lo que la hace accesible para que las personas mayores y los usuarios de sillas de ruedas disfruten de la vista panorámica. Sin embargo, el área de la tirolesa y los senderos rocosos sin pavimentar circundantes no se recomiendan para personas con movilidad reducida.",
            },
            {
              question: "¿Cómo es la señal móvil en la montaña? ¿Qué debo preparar?",
              answer:
                "Debido a la enorme montaña que bloquea la señal, la conectividad 4G/3G a lo largo de la Ruta 5 y en el mirador es muy inestable y a menudo inexistente. Recomendamos encarecidamente descargar Google Maps sin conexión antes de salir de Merlo y llevar algo de efectivo (Pesos), ya que los pagos digitales (como Mercado Pago) pueden fallar sin internet.",
            },
            {
              question: "¿Cuáles son los requisitos físicos para la tirolesa?",
              answer:
                "Además del clima, los participantes deben cumplir con umbrales físicos. El límite de peso suele estar entre 30 kg y 100 kg (verificado en el lugar) para garantizar la energía cinética y el frenado óptimos. Aquellos con problemas cardiovasculares, acrofobia severa o cirugías recientes deben tratar esto puramente como un viaje de turismo.",
            },
          ],
        },
      ],
    },'''

content = content.replace(old_zh_faq, new_zh_faq)
content = content.replace(old_en_faq, new_en_faq)
content = content.replace(old_it_faq, new_it_faq)
content = content.replace(old_es_faq, new_es_faq)

with open('src/data/site.ts', 'w', encoding='utf-8') as f:
    f.write(content)
