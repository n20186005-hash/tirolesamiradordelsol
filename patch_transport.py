import re

with open('src/data/site.ts', 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    # Chinese Transport
    (r'"若希望缩短地面路程，可优先关注 Valle del Conlara 方向的区域机场；若班次不合适，也可先飞往 San Luis 或 Cordoba，再转地面交通进入 Merlo。"',
     r'"距离最近的为 Valle del Conlara 国际机场 (RLO)，车程约 30 分钟。若航班班次有限，也可飞往 San Luis (LUQ，距约 200 公里) 或 Cordoba (COR，距约 250 公里)，随后转乘长途巴士或租赁汽车进入 Merlo。"'),
    (r'"自驾是最直接的方式。抵达 Merlo 后沿 Ruta 5 继续上山，弯道连续、坡度明显，建议白天行车并为观景停车、会车和返程留出余量。"',
     r'"从 Merlo 市区沿 Avenida de los Césares 向东接入 Ruta 5。这是一条全程铺装但蜿蜒的发夹弯山路（Camino al Filo），车程约 25-35 分钟。上下山务必使用低挡位发动机制动，观景台附近有非铺装停车区域。"'),
    (r'"长途巴士通常先到 Villa de Merlo 客运站。此后仍需依靠出租车、remis、包车或同伴车辆完成上山段，因为观景点并不等同于市区平地目的地。"',
     r'"长途巴士均停靠 Villa de Merlo 镇中心客运站（Terminal de Ómnibus）。目前无公共巴士直达 Mirador del Sol，您需要在镇上租用 Remis（当地出租车）、乘坐专线旅游小巴或报名半日游旅行团。"'),
    (r'"接近观景台时，路面虽为常见山地旅游道路，但视野开阔、风力更强，停车点也较分散。无论自驾或接驳，都应把最后一段视作独立的山地到达过程。"',
     r'"接近 1470 米观景台时风力会显著增强。若骑行或徒步，请在早晨出发以避开午后高温与逆风；机动车抵达后，请将车辆停稳在路边宽阔处，注意开门时的强风。"'),

    # English Transport
    (r'"If you want to shorten the ground journey, prioritize the regional airport towards Valle del Conlara; if flights are unsuitable, you can also fly to San Luis or Cordoba first, then transfer to ground transportation to Merlo."',
     r'"The closest is Valle del Conlara International Airport (RLO), about a 30-minute drive. Alternatively, fly to San Luis (LUQ, ~200 km) or Cordoba (COR, ~250 km), then transfer via long-distance bus or rental car to Merlo."'),
    (r'"Driving is the most direct way. After arriving in Merlo, continue up the mountain along Ruta 5. The curves are continuous and the slope is obvious. It is recommended to drive during the day and leave extra time for sightseeing parking, passing, and returning."',
     r'"From Merlo, take Avenida de los Césares east to Ruta 5. This fully paved but winding hairpin mountain road (Camino al Filo) takes about 25-35 minutes. Use low-gear engine braking. Unpaved parking is available near the viewpoint."'),
    (r'"Long-distance buses usually arrive at the Villa de Merlo bus terminal first. After that, you still need to rely on taxis, remis, chartered cars, or companion vehicles to complete the uphill section, because the viewpoint is not a flat destination in the city."',
     r'"Long-distance buses arrive at the Villa de Merlo bus terminal. There is no direct public bus to Mirador del Sol. You must hire a Remis (local taxi) in town, take a tourist minibus, or join a half-day tour."'),
    (r'"Approaching the viewpoint, although the road is a common mountain tourist road, the view is open, the wind is stronger, and parking spots are scattered. Whether driving or taking a shuttle, the last section should be considered an independent mountain arrival process."',
     r'"Winds increase significantly near the 1,470m viewpoint. Cyclists and hikers should depart in the morning to avoid afternoon heat and headwinds. Drivers should park in wide areas and be cautious of strong winds when opening doors."'),

    # Italian Transport
    (r'"Se si desidera abbreviare il viaggio via terra, dare priorità all\'aeroporto regionale in direzione Valle del Conlara; se i voli non sono adatti, si può anche volare prima a San Luis o Cordoba, per poi trasferirsi su un trasporto via terra fino a Merlo."',
     r'"Il più vicino è l\'Aeroporto Internazionale Valle del Conlara (RLO), a circa 30 minuti di auto. In alternativa, si può volare a San Luis (LUQ, ~200 km) o Cordoba (COR, ~250 km), per poi trasferirsi a Merlo in autobus a lunga percorrenza o auto a noleggio."'),
    (r'"Guidare è il modo più diretto. Dopo l\'arrivo a Merlo, proseguire su per la montagna lungo la Ruta 5. Le curve sono continue e la pendenza è evidente. Si consiglia di guidare di giorno e lasciare tempo extra per il parcheggio panoramico, i sorpassi e il ritorno."',
     r'"Da Merlo, prendere Avenida de los Césares verso est fino alla Ruta 5. Questa strada di montagna (Camino al Filo) asfaltata ma tortuosa richiede circa 25-35 minuti. Usa il freno motore a marcia bassa. È disponibile un parcheggio sterrato vicino al belvedere."'),
    (r'"Gli autobus a lunga percorrenza di solito arrivano prima al terminal degli autobus di Villa de Merlo. Dopodiché, bisogna comunque affidarsi a taxi, remis, auto a noleggio o veicoli di accompagnatori per completare il tratto in salita, perché il punto panoramico non è una destinazione in piano in città."',
     r'"Gli autobus a lunga percorrenza arrivano al terminal di Villa de Merlo. Non ci sono autobus pubblici diretti per il Mirador del Sol. Devi noleggiare un Remis (taxi locale) in città, prendere un minibus turistico o unirti a un tour di mezza giornata."'),
    (r'"Avvicinandosi al punto panoramico, sebbene la strada sia una comune strada turistica di montagna, la vista è aperta, il vento è più forte e i parcheggi sono sparsi. Che si guidi o si prenda una navetta, l\'ultimo tratto dovrebbe essere considerato un processo di arrivo in montagna indipendente."',
     r'"I venti aumentano notevolmente vicino al belvedere a 1.470 m. Ciclisti ed escursionisti dovrebbero partire al mattino per evitare il caldo pomeridiano e i venti contrari. I conducenti dovrebbero parcheggiare in aree ampie e fare attenzione ai forti venti quando aprono le portiere."'),

    # Spanish Transport
    (r'"Si desea acortar el viaje por tierra, priorice el aeropuerto regional hacia el Valle del Conlara; si los vuelos no son adecuados, también puede volar primero a San Luis o Córdoba, y luego transferirse al transporte terrestre a Merlo."',
     r'"El más cercano es el Aeropuerto Internacional Valle del Conlara (RLO), a unos 30 minutos en coche. Alternativamente, vuele a San Luis (LUQ, ~200 km) o Córdoba (COR, ~250 km), y luego trasládese en autobús de larga distancia o coche de alquiler a Merlo."'),
    (r'"Conducir es la forma más directa. Después de llegar a Merlo, continúe subiendo la montaña por la Ruta 5. Las curvas son continuas y la pendiente es obvia. Se recomienda conducir de día y dejar tiempo adicional para el estacionamiento panorámico, los rebases y el regreso."',
     r'"Desde Merlo, tome la Avenida de los Césares hacia el este hasta la Ruta 5. Este camino de montaña asfaltado pero sinuoso (Camino al Filo) toma unos 25-35 minutos. Use el freno de motor en marcha baja. Hay estacionamiento de tierra disponible cerca del mirador."'),
    (r'"Los autobuses de larga distancia suelen llegar primero a la terminal de autobuses de Villa de Merlo. Después de eso, aún debe depender de taxis, remises, autos fletados o vehículos de acompañantes para completar la sección cuesta arriba, porque el mirador no es un destino plano en la ciudad."',
     r'"Los autobuses de larga distancia llegan a la terminal de Villa de Merlo. No hay autobús público directo al Mirador del Sol. Debe contratar un Remis (taxi local) en el pueblo, tomar un minibús turístico o unirse a un recorrido de medio día."'),
    (r'"Al acercarse al mirador, aunque el camino es un camino turístico de montaña común, la vista es abierta, el viento es más fuerte y los lugares de estacionamiento están dispersos. Ya sea conduciendo o tomando un transporte, la última sección debe considerarse un proceso de llegada a la montaña independiente."',
     r'"Los vientos aumentan significativamente cerca del mirador a 1.470 m. Los ciclistas y excursionistas deben salir por la mañana para evitar el calor de la tarde y los vientos en contra. Los conductores deben estacionar en áreas amplias y tener cuidado con los fuertes vientos al abrir las puertas."'),
]

for old, new in replacements:
    content = content.replace(old, new)

with open('src/data/site.ts', 'w', encoding='utf-8') as f:
    f.write(content)
