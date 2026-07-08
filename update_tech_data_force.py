import re

with open('src/data/site.ts', 'r', encoding='utf-8') as f:
    content = f.read()

old_zh_match = re.search(r'    technical: \{\s*title: "基础空间与地质数据",[\s\S]*?      \],\s*\},', content)
if old_zh_match:
    new_zh = '''    technical: {
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
    },'''
    content = content.replace(old_zh_match.group(0), new_zh)

old_en_match = re.search(r'    technical: \{\s*title: "Basic spatial and geological data",[\s\S]*?      \],\s*\},', content)
if old_en_match:
    new_en = '''    technical: {
      title: "Basic spatial and geological data",
      intro:
        "The following structured data summarizes the location's coordinates, elevation, lithology, climate, and vegetation zones.",
      rows: [
        {
          dimension: "Geographic Coordinates",
          value: "32°21'S, 64°58'W",
          note: "Southern Hemisphere, inland central Argentina",
        },
        {
          dimension: "Elevation",
          value: "Approx. 1,470 m (4,822 ft)",
          note: "Located between Villa de Merlo and the main mountain peak",
        },
        {
          dimension: "Geological Era",
          value: "Paleozoic",
          note: "Comechingones Mountains bedrock",
        },
        {
          dimension: "Main Lithology",
          value: "Crystalline rock, granite, gneiss",
          note: "Shows strong weathering and water erosion geomorphology",
        },
        {
          dimension: "Average Annual Temp",
          value: "Approx. 17°C (Merlo baseline)",
          note: "The temperature at the lookout is usually 4-6°C lower than in the city",
        },
        {
          dimension: "Vegetation Zone",
          value: "Chaco-High Mountain Transitional Zone",
          note: "Dominated by shrubs and drought-resistant alpine meadows",
        },
      ],
    },'''
    content = content.replace(old_en_match.group(0), new_en)

old_it_match = re.search(r'    technical: \{\s*title: "Dati spaziali e geologici di base",[\s\S]*?      \],\s*\},', content)
if old_it_match:
    new_it = '''    technical: {
      title: "Dati spaziali e geologici di base",
      intro:
        "I seguenti dati strutturati riassumono le coordinate, l'altitudine, la litologia, il clima e le zone di vegetazione del luogo.",
      rows: [
        {
          dimension: "Coordinate Geografiche",
          value: "32°21'S, 64°58'W",
          note: "Emisfero australe, entroterra dell'Argentina centrale",
        },
        {
          dimension: "Altitudine",
          value: "Circa 1.470 m (4.822 ft)",
          note: "Situato tra Villa de Merlo e il picco principale della montagna",
        },
        {
          dimension: "Era Geologica",
          value: "Paleozoico",
          note: "Substrato roccioso dei Monti Comechingones",
        },
        {
          dimension: "Litologia Principale",
          value: "Rocce cristalline, granito, gneiss",
          note: "Mostra una forte geomorfologia da agenti atmosferici ed erosione idrica",
        },
        {
          dimension: "Temp. Media Annua",
          value: "Circa 17°C (base Merlo)",
          note: "La temperatura al belvedere è solitamente inferiore di 4-6°C rispetto alla città",
        },
        {
          dimension: "Zona di Vegetazione",
          value: "Zona di transizione Chaco-Alta Montagna",
          note: "Dominata da arbusti e prati alpini resistenti alla siccità",
        },
      ],
    },'''
    content = content.replace(old_it_match.group(0), new_it)

old_es_match = re.search(r'    technical: \{\s*title: "Datos espaciales y geológicos básicos",[\s\S]*?      \],\s*\},', content)
if old_es_match:
    new_es = '''    technical: {
      title: "Datos espaciales y geológicos básicos",
      intro:
        "Los siguientes datos estructurados resumen las coordenadas, elevación, litología, clima y zonas de vegetación del lugar.",
      rows: [
        {
          dimension: "Coordenadas Geográficas",
          value: "32°21'S, 64°58'W",
          note: "Hemisferio sur, interior del centro de Argentina",
        },
        {
          dimension: "Elevación",
          value: "Aprox. 1.470 m (4.822 ft)",
          note: "Ubicado entre Villa de Merlo y el pico principal de la sierra",
        },
        {
          dimension: "Era Geológica",
          value: "Paleozoico",
          note: "Roca madre de las Sierras de los Comechingones",
        },
        {
          dimension: "Litología Principal",
          value: "Roca cristalina, granito, gneis",
          note: "Presenta una fuerte geomorfología de meteorización y erosión hídrica",
        },
        {
          dimension: "Temp. Media Anual",
          value: "Aprox. 17°C (base Merlo)",
          note: "La temperatura en el mirador suele ser 4-6°C más baja que en la ciudad",
        },
        {
          dimension: "Zona de Vegetación",
          value: "Zona de transición Chaco-Alta Montaña",
          note: "Dominada por arbustos y prados alpinos resistentes a la sequía",
        },
      ],
    },'''
    content = content.replace(old_es_match.group(0), new_es)

with open('src/data/site.ts', 'w', encoding='utf-8') as f:
    f.write(content)
