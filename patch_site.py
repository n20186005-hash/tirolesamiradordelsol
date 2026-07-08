import re

with open('src/data/site.ts', 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    # Chinese
    (r'这是一处位于 Villa de Merlo 东侧山脊道路上的高海拔观景点与冒险活动节点。页面以非商业、科普化方式整理地貌背景、微气候、交通方式、现场照片与安全提示，帮助访客在抵达前先理解地点本身。', 
     r'本站为聚焦地理环境、观景体验与到访安全，不承载预订、促销或品牌背书。该刊物完全免费，旨在促进阿根廷旅游业的发展。'),
    (r'如果把这里视为一个科普节点，而不是普通打卡点，可以从生态、工程与光线三个维度理解这处山地景观。', 
     r'可以从生态、工程与光线三个维度理解这处山地景观。'),
    (r'专业景点页面通常需要一张可快速检索的技术卡片，用以概括坐标、海拔、岩性、气候与植被带。以下数据可帮助访客以更地理学的方式理解该地点。', 
     r'以下结构化数据概括了该地点的坐标、海拔、岩性、气候与植被带，帮助访客以地理学视角快速理解其空间特征。'),
    (r'Tirolesa Mirador Del Sol 并不是孤立的观景台节点，而是整条山脊景观公路上的关键中继点。理解这条爬升线，才能真正理解访客的空间体验。', 
     r'Tirolesa Mirador Del Sol 是整条山脊景观公路上的关键中继点。理解这条爬升线，才能真正理解该地点的空间关系。'),
    (r'如果把这里视为长期观测点，夜间价值并不低于白天。远离核心城镇光源后，山地观景台会显现出暗夜保护、南半球星空与夜景摄影的复合意义。', 
     r'远离核心城镇光源后，山地观景台展现出极高的暗夜保护、南半球星空与夜景摄影复合价值。'),
    (r'这类高频问题如果只依赖零散评论，很容易失真。以结构化答疑方式呈现，能更有效地回答“怎么去、值不值、风险在哪里”这类实际问题。', 
     r'关于地质特征、气候影响与出行规划的高频释疑。'),
    (r'照片均来自站内图库，涵盖山谷视野、山地道路、观景平台与活动环境，可作为到访前的视觉参考。首屏背景同样取自这组现场影像。', 
     r'涵盖山谷视野、山地道路、观景平台与活动环境的现场影像。'),
    (r'与其堆砌情绪化短评，不如把高频反馈归纳为三个更有判断价值的观察维度，帮助访客建立合理预期。', 
     r'来自访客的高频反馈被归纳为三个具体的观察维度，帮助建立合理的到访预期。'),
    
    # English
    (r'This is a high-altitude viewpoint and adventure activity hub located on the ridge road east of Villa de Merlo. This page organizes the geomorphological background, microclimate, transportation methods, on-site photos, and safety tips in a non-commercial, educational manner, helping visitors understand the location itself before arriving.',
     r'This site focuses on geographical context, viewing experiences, and safety. We do not handle bookings, promotions, or brand endorsements. This free publication aims to promote tourism in Argentina.'),
    (r'If you consider this an educational node rather than a standard photo spot, you can understand this mountain landscape from the dimensions of ecology, engineering, and light.',
     r'Understand this mountain landscape through the dimensions of ecology, engineering, and light.'),
    (r'A professional attraction page usually needs a quick-reference technical card to summarize coordinates, elevation, lithology, climate, and vegetation zones. The following data helps visitors understand the location in a more geographical way.',
     r'The following structured data summarizes the location\'s coordinates, elevation, lithology, climate, and vegetation zones.'),
    (r'Tirolesa Mirador Del Sol is not an isolated viewpoint, but a key relay point on the entire ridge scenic route. Understanding this climbing line is essential to truly grasp the visitor\'s spatial experience.',
     r'Tirolesa Mirador Del Sol is a key intermediate point on the mountain ridge scenic route. Understanding this ascent is essential to grasping the spatial context.'),
    (r'If viewed as a long-term observation point, its nighttime value is no less than daytime. Away from core town light sources, the mountain viewpoint reveals a composite significance of dark sky protection, Southern Hemisphere stargazing, and night photography.',
     r'Away from core urban light sources, the mountain lookout offers exceptional value for dark sky preservation, Southern Hemisphere stargazing, and astrophotography.'),
    (r'If such high-frequency questions rely only on scattered reviews, they easily become distorted. Presenting them in a structured Q&A format more effectively answers practical questions like "how to get there, is it worth it, where are the risks".',
     r'Structured answers to common questions regarding geological features, climate impacts, and travel planning.'),
    (r'All photos are from the site\'s gallery, covering valley views, mountain roads, viewing platforms, and activity environments, serving as a visual reference before visiting. The hero background is also taken from this set of live images.',
     r'On-site images covering valley views, mountain roads, the viewing platform, and the activity environment.'),
    (r'Rather than piling up emotional short reviews, it is better to summarize high-frequency feedback into three observation dimensions with more judgment value, helping visitors build reasonable expectations.',
     r'High-frequency visitor feedback is summarized into three specific observation dimensions to help establish reasonable expectations.'),

    # Italian
    (r'Questo è un punto panoramico ad alta quota e un centro di attività d\'avventura situato sulla strada del crinale a est di Villa de Merlo. Questa pagina organizza il background geomorfologico, il microclima, i metodi di trasporto, le foto sul posto e i consigli di sicurezza in modo non commerciale ed educativo, aiutando i visitatori a comprendere il luogo stesso prima di arrivare.',
     r'Questo sito si concentra sul contesto geografico, sull\'esperienza visiva e sulla sicurezza. Non gestiamo prenotazioni, promozioni o approvazioni di marchi. Questa pubblicazione gratuita mira a promuovere il turismo in Argentina.'),
    (r'Se consideri questo un nodo educativo piuttosto che un normale punto fotografico, puoi comprendere questo paesaggio montano dalle dimensioni dell\'ecologia, dell\'ingegneria e della luce.',
     r'Comprendere questo paesaggio montano attraverso le dimensioni dell\'ecologia, dell\'ingegneria e della luce.'),
    (r'Una pagina di attrazione professionale di solito ha bisogno di una scheda tecnica di rapida consultazione per riassumere coordinate, altitudine, litologia, clima e zone di vegetazione. I seguenti dati aiutano i visitatori a comprendere il luogo in modo più geografico.',
     r'I seguenti dati strutturati riassumono le coordinate, l\'altitudine, la litologia, il clima e le zone di vegetazione del luogo.'),
    (r'Tirolesa Mirador Del Sol non è un punto panoramico isolato, ma un punto di snodo chiave sull\'intero percorso panoramico del crinale. Comprendere questa linea di salita è essenziale per cogliere veramente l\'esperienza spaziale del visitatore.',
     r'Tirolesa Mirador Del Sol è un punto intermedio chiave sulla strada panoramica del crinale. Comprendere questa salita è essenziale per cogliere il contesto spaziale.'),
    (r'Se visto come un punto di osservazione a lungo termine, il suo valore notturno non è inferiore a quello diurno. Lontano dalle fonti di luce centrali della città, il punto panoramico montano rivela un significato composito di protezione del cielo buio, osservazione delle stelle dell\'emisfero sud e fotografia notturna.',
     r'Lontano dalle fonti di luce urbane, il belvedere montano offre un eccezionale valore per la conservazione del cielo buio, l\'osservazione delle stelle dell\'emisfero sud e l\'astrofotografia.'),
    (r'Se tali domande ad alta frequenza si basano solo su recensioni sparse, si distorcono facilmente. Presentarle in un formato Q&A strutturato risponde in modo più efficace a domande pratiche come "come arrivarci, ne vale la pena, dove sono i rischi".',
     r'Risposte strutturate a domande comuni riguardanti caratteristiche geologiche, impatti climatici e pianificazione del viaggio.'),
    (r'Tutte le foto provengono dalla galleria del sito, coprendo viste sulla valle, strade di montagna, piattaforme panoramiche e ambienti di attività, fungendo da riferimento visivo prima della visita. Anche lo sfondo principale è tratto da questo set di immagini dal vivo.',
     r'Immagini in loco che coprono viste sulla valle, strade di montagna, la piattaforma panoramica e l\'ambiente dell\'attività.'),
    (r'Piuttosto che accumulare brevi recensioni emotive, è meglio riassumere i feedback ad alta frequenza in tre dimensioni di osservazione con maggiore valore di giudizio, aiutando i visitatori a costruire aspettative ragionevoli.',
     r'I feedback frequenti dei visitatori sono riassunti in tre dimensioni di osservazione specifiche per aiutare a stabilire aspettative ragionevoli.'),

    # Spanish
    (r'Este es un mirador de gran altitud y un centro de actividades de aventura ubicado en el camino de la cresta al este de Villa de Merlo. Esta página organiza los antecedentes geomorfológicos, el microclima, los métodos de transporte, las fotos en el lugar y los consejos de seguridad de una manera educativa y no comercial, ayudando a los visitantes a comprender la ubicación en sí antes de llegar.',
     r'Este sitio se centra en el contexto geográfico, la experiencia visual y la seguridad. No gestionamos reservas, promociones ni respaldos de marcas. Esta publicación gratuita tiene como objetivo promover el turismo en Argentina.'),
    (r'Si consideras esto un nodo educativo en lugar de un punto fotográfico estándar, puedes comprender este paisaje de montaña desde las dimensiones de la ecología, la ingeniería y la luz.',
     r'Comprenda este paisaje de montaña a través de las dimensiones de la ecología, la ingeniería y la luz.'),
    (r'Una página de atracción profesional generalmente necesita una tarjeta técnica de referencia rápida para resumir coordenadas, elevación, litología, clima y zonas de vegetación. Los siguientes datos ayudan a los visitantes a comprender la ubicación de una manera más geográfica.',
     r'Los siguientes datos estructurados resumen las coordenadas, elevación, litología, clima y zonas de vegetación del lugar.'),
    (r'Tirolesa Mirador Del Sol no es un mirador aislado, sino un punto de relevo clave en toda la ruta escénica de la cresta. Comprender esta línea de ascenso es esencial para captar verdaderamente la experiencia espacial del visitante.',
     r'Tirolesa Mirador Del Sol es un punto intermedio clave en la ruta escénica de la cresta. Comprender este ascenso es esencial para captar el contexto espacial.'),
    (r'Si se ve como un punto de observación a largo plazo, su valor nocturno no es menor que el diurno. Lejos de las fuentes de luz del centro de la ciudad, el mirador de montaña revela un significado compuesto de protección del cielo oscuro, observación de estrellas del hemisferio sur y fotografía nocturna.',
     r'Lejos de las fuentes de luz urbanas, el mirador de montaña ofrece un valor excepcional para la preservación del cielo oscuro, la observación de estrellas del hemisferio sur y la astrofotografía.'),
    (r'Si tales preguntas de alta frecuencia dependen solo de reseñas dispersas, se distorsionan fácilmente. Presentarlas en un formato de preguntas y respuestas estructurado responde de manera más efectiva a preguntas prácticas como "cómo llegar, vale la pena, dónde están los riesgos".',
     r'Respuestas estructuradas a preguntas comunes sobre características geológicas, impactos climáticos y planificación de viajes.'),
    (r'Todas las fotos son de la galería del sitio, cubriendo vistas del valle, caminos de montaña, plataformas de observación y entornos de actividad, sirviendo como referencia visual antes de la visita. El fondo principal también se toma de este conjunto de imágenes en vivo.',
     r'Imágenes en el lugar que cubren vistas del valle, caminos de montaña, la plataforma de observación y el entorno de la actividad.'),
    (r'En lugar de acumular reseñas cortas emocionales, es mejor resumir los comentarios de alta frecuencia en tres dimensiones de observación con más valor de juicio, ayudando a los visitantes a construir expectativas razonables.',
     r'Los comentarios frecuentes de los visitantes se resumen en tres dimensiones de observación específicas para ayudar a establecer expectativas razonables.'),
]

for old, new in replacements:
    content = content.replace(old, new)

# Write back
with open('src/data/site.ts', 'w', encoding='utf-8') as f:
    f.write(content)
