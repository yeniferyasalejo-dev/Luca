const GIFTS = [
  {
    "categoria": "Cuarto y Sueño",
    "subcategoria": "Ropa de cama",
    "prioridad": "esencial",
    "item": "Sábanas ajustadas para cuna (100% algodón)",
    "descripcion": "Se ensucian frecuentemente. Talla exacta de la cuna.",
    "cantidad": "4"
  },
  {
    "categoria": "Cuarto y Sueño",
    "subcategoria": "Ropa de cama",
    "prioridad": "esencial",
    "item": "Mantas swaddle / arrullos muselina",
    "descripcion": "Muselina o bambú. Sin almohada ni edredón pesado en la cuna.",
    "cantidad": "6"
  },
  {
    "categoria": "Cuarto y Sueño",
    "subcategoria": "Ropa de cama",
    "prioridad": "recomendado",
    "item": "Saco de dormir bebé (sleeping bag)",
    "descripcion": "Reemplaza edredón. Más seguro.",
    "cantidad": "2"
  },
  {
    "categoria": "Cuarto y Sueño",
    "subcategoria": "Ambiente y seguridad",
    "prioridad": "esencial",
    "item": "Termómetro ambiental",
    "descripcion": "Ideal 18–22°C.",
    "cantidad": "1"
  },
  {
    "categoria": "Cuarto y Sueño",
    "subcategoria": "Ambiente y seguridad",
    "prioridad": "recomendado",
    "item": "Móvil musical para cuna",
    "descripcion": "Con contraste visual blanco/negro/rojo para los 3 primeros meses.",
    "cantidad": "1"
  },
  {
    "categoria": "Cuarto y Sueño",
    "subcategoria": "Ambiente y seguridad",
    "prioridad": "esencial",
    "item": "Monitor de bebé con video (VTech VM901)",
    "descripcion": "Cámara WiFi 1080p, pantalla de 5\", zoom panorámico, visión nocturna y conversación bidireccional.",
    "cantidad": "1",
    "comprado": true
  },
  {
    "categoria": "Baño e Higiene",
    "subcategoria": "Baño",
    "prioridad": "esencial",
    "item": "Toallas suaves con capucha",
    "descripcion": "Algodón 100% o bambú.",
    "cantidad": "3"
  },
  {
    "categoria": "Baño e Higiene",
    "subcategoria": "Baño",
    "prioridad": "esencial",
    "item": "Jabón + shampoo bebé sin fragancia",
    "descripcion": "pH neutro, hipoalergénico. Cetaphil Baby, Mustela.",
    "cantidad": "2"
  },
  {
    "categoria": "Baño e Higiene",
    "subcategoria": "Pañales",
    "prioridad": "esencial",
    "item": "Pañales recién nacido (Talla RN / 1)",
    "descripcion": "",
    "cantidad": "2 paquetes"
  },
  {
    "categoria": "Baño e Higiene",
    "subcategoria": "Pañales",
    "prioridad": "esencial",
    "item": "Pañales",
    "descripcion": "Tener listos desde antes de nacer. Los más usados los primeros meses.",
    "cantidad": "4 paquetes"
  },
  {
    "categoria": "Baño e Higiene",
    "subcategoria": "Pañales",
    "prioridad": "esencial",
    "item": "Toallitas húmedas sin alcohol ni fragancia",
    "descripcion": "Que sean 99% agua. Para cada cambio de pañal. Mantener stock.",
    "cantidad": "Stock"
  },
  {
    "categoria": "Baño e Higiene",
    "subcategoria": "Pañales",
    "prioridad": "esencial",
    "item": "Crema para pañal — pasta de zinc (Bepanthen / Desitin)",
    "descripcion": "Previene dermatitis del pañal.",
    "cantidad": "2"
  },
  {
    "categoria": "Baño e Higiene",
    "subcategoria": "Pañales",
    "prioridad": "esencial",
    "item": "Basura para pañales sucios (Momcozy Triple Seal)",
    "descripcion": "Triple sello antiolores. Con pedal sin manos.",
    "cantidad": "1",
    "comprado": true
  },
  {
    "categoria": "Baño e Higiene",
    "subcategoria": "Pañales",
    "prioridad": "recomendado",
    "item": "Tapete de cambio lavable",
    "descripcion": "Uno fijo para el cambiador, otro portátil para salidas.",
    "cantidad": "2"
  },
  {
    "categoria": "Baño e Higiene",
    "subcategoria": "Pañales",
    "prioridad": "recomendado",
    "item": "Cambiador impermeable Jool Baby",
    "descripcion": "Cojín de espuma grande, ligero y portátil, fácil de limpiar. Color salvia (verde).",
    "cantidad": "1",
    "link": "https://www.amazon.com/-/es/Jool-Baby-Cambiador-impermeable-comodidad/dp/B0D64D3V9J/"
  },
  {
    "categoria": "Baño e Higiene",
    "subcategoria": "Cuidado corporal",
    "prioridad": "esencial",
    "item": "Cortauñas / lima eléctrica de bebé",
    "descripcion": "Lima eléctrica más segura. Usar cuando el bebé duerme.",
    "cantidad": "1"
  },
  {
    "categoria": "Baño e Higiene",
    "subcategoria": "Cuidado corporal",
    "prioridad": "recomendado",
    "item": "Peine y cepillo de cerdas suaves",
    "descripcion": "Para costra láctea y cabello fino.",
    "cantidad": "1 set"
  },
  {
    "categoria": "Baño e Higiene",
    "subcategoria": "Cuidado corporal",
    "prioridad": "recomendado",
    "item": "Crema hidratante bebé sin fragancia (Cetaphil Baby / Mustela)",
    "descripcion": "Post-baño. Piel de recién nacido muy seca al inicio.",
    "cantidad": "1"
  },
  {
    "categoria": "Alimentación",
    "subcategoria": "Alimentación complementaria +6m",
    "prioridad": "recomendado",
    "item": "Set cubiertos ergonómicos silicona sin BPA",
    "descripcion": "Cuchara cuello doblado, tenedor puntas redondeadas.",
    "cantidad": "2 sets"
  },
  {
    "categoria": "Alimentación",
    "subcategoria": "Alimentación complementaria +6m",
    "prioridad": "recomendado",
    "item": "Bowls con ventosa / taza de aprendizaje",
    "descripcion": "Ventosa para que no vuelen.",
    "cantidad": "3"
  },
  {
    "categoria": "Alimentación",
    "subcategoria": "Alimentación complementaria +6m",
    "prioridad": "esencial",
    "item": "Baberos impermeables (tela + silicona)",
    "descripcion": "Tela para recién nacido. Silicona con bolsillo a los 6 meses.",
    "cantidad": "10"
  },
  {
    "categoria": "Alimentación",
    "subcategoria": "Alimentación complementaria +6m",
    "prioridad": "opcional",
    "item": "Calienta biberones portátil",
    "descripcion": "Para salidas y viajes.",
    "cantidad": "1"
  },
  {
    "categoria": "Salud y Botiquín",
    "subcategoria": "Primeros auxilios",
    "prioridad": "esencial",
    "item": "Tijeras de punta roma",
    "descripcion": "Para cortar gasas, apósitos.",
    "cantidad": "1",
    "comprado": true
  },
  {
    "categoria": "Ropa y Vestir",
    "subcategoria": "Básicos 0–3 meses",
    "prioridad": "esencial",
    "item": "Bodies manga larga (algodón)",
    "descripcion": "Base del ajuar. Con broches entrepierna.",
    "cantidad": "8"
  },
  {
    "categoria": "Ropa y Vestir",
    "subcategoria": "Básicos 0–3 meses",
    "prioridad": "esencial",
    "item": "Bodies manga corta",
    "descripcion": "Para días calurosos o como capa interior.",
    "cantidad": "6"
  },
  {
    "categoria": "Ropa y Vestir",
    "subcategoria": "Pijamas por talla",
    "prioridad": "esencial",
    "item": "Pijamas con pies / enterizos",
    "talla": "0–3 meses",
    "descripcion": "Algodón. Con broches fáciles.",
    "cantidad": "3"
  },
  {
    "categoria": "Ropa y Vestir",
    "subcategoria": "Pijamas por talla",
    "prioridad": "esencial",
    "item": "Pijamas con pies / enterizos",
    "talla": "3–6 meses",
    "descripcion": "Algodón. Con broches fáciles.",
    "cantidad": "3"
  },
  {
    "categoria": "Ropa y Vestir",
    "subcategoria": "Pijamas por talla",
    "prioridad": "esencial",
    "item": "Pijamas con pies / enterizos",
    "talla": "6–9 meses",
    "descripcion": "Algodón. Con broches fáciles.",
    "cantidad": "3",
    "comprado": true
  },
  {
    "categoria": "Ropa y Vestir",
    "subcategoria": "Pijamas por talla",
    "prioridad": "esencial",
    "item": "Pijamas con pies / enterizos",
    "talla": "9–12 meses",
    "descripcion": "Algodón. Con broches fáciles.",
    "cantidad": "2"
  },
  {
    "categoria": "Ropa y Vestir",
    "subcategoria": "Básicos 0–3 meses",
    "prioridad": "esencial",
    "item": "Conjuntos / overoles de salida",
    "descripcion": "Para visitas.",
    "cantidad": "5"
  },
  {
    "categoria": "Ropa y Vestir",
    "subcategoria": "Básicos 0–3 meses",
    "prioridad": "esencial",
    "item": "Calcetines sin elástico apretado",
    "descripcion": "Se pierden solos — comprar varios.",
    "cantidad": "12 pares"
  },
  {
    "categoria": "Ropa y Vestir",
    "subcategoria": "Básicos 0–3 meses",
    "prioridad": "esencial",
    "item": "Gorros de algodón y de lana suave",
    "descripcion": "Recién nacidos pierden calor por la cabeza.",
    "cantidad": "4"
  },
  {
    "categoria": "Ropa y Vestir",
    "subcategoria": "Básicos 0–3 meses",
    "prioridad": "esencial",
    "item": "Chaqueta / saco de punto o polar",
    "descripcion": "Para salidas con clima frío. Sin cierre sobre la cabeza.",
    "cantidad": "2"
  },
  {
    "categoria": "Ropa y Vestir",
    "subcategoria": "Básicos 0–3 meses",
    "prioridad": "esencial",
    "item": "Conjunto de salida de la clínica",
    "descripcion": "El primer look. Cómodo para vestir rápido.",
    "cantidad": "1"
  },
  {
    "categoria": "Ropa y Vestir",
    "subcategoria": "Básicos 0–3 meses",
    "prioridad": "esencial",
    "item": "Baberos de tela suave",
    "descripcion": "Para escupidas y babas. Cambiar varias veces al día.",
    "cantidad": "12"
  },
  {
    "categoria": "Ropa y Vestir",
    "subcategoria": "Accesorios",
    "prioridad": "opcional",
    "item": "Bolsa para ropa sucia portátil",
    "descripcion": "Para prendas sucias en el pañalero.",
    "cantidad": "1"
  },
  {
    "categoria": "Transporte y Movilidad",
    "subcategoria": "Silla de auto",
    "prioridad": "esencial",
    "item": "Silla de auto Nuna EXEC™ Next (All-in-one)",
    "descripcion": "Desde $680. Color Granite.",
    "cantidad": "1",
    "confirmar": true
  },
  {
    "categoria": "Transporte y Movilidad",
    "subcategoria": "Cochecito",
    "prioridad": "esencial",
    "item": "Cochecito / coche con capazo plano (Travel System)",
    "descripcion": "Capazo plano 0–6 meses. Convertible ahorra dinero a largo plazo.",
    "cantidad": "1",
    "comprado": true
  },
  {
    "categoria": "Transporte y Movilidad",
    "subcategoria": "Accesorios salida",
    "prioridad": "recomendado",
    "item": "Tapete de cambio portátil impermeable",
    "descripcion": "Para cambiar en cualquier lugar.",
    "cantidad": "1"
  },
  {
    "categoria": "Juguetes y Estimulación",
    "subcategoria": "0–3 meses",
    "prioridad": "esencial",
    "item": "Tapete de actividades / gimnasio bebé",
    "descripcion": "Con arcos y juguetes colgantes. Estimula visión y motricidad.",
    "cantidad": "1"
  },
  {
    "categoria": "Juguetes y Estimulación",
    "subcategoria": "0–3 meses",
    "prioridad": "esencial",
    "item": "Sonajeros de silicona / tela suave",
    "descripcion": "Que pueda agarrar y llevar a la boca con seguridad.",
    "cantidad": "3"
  },
  {
    "categoria": "Juguetes y Estimulación",
    "subcategoria": "0–3 meses",
    "prioridad": "recomendado",
    "item": "Tarjetas de contraste blanco/negro",
    "descripcion": "Estimulan seguimiento visual. La visión del recién nacido detecta solo contrastes.",
    "cantidad": "1 set"
  },
  {
    "categoria": "Juguetes y Estimulación",
    "subcategoria": "0–3 meses",
    "prioridad": "recomendado",
    "item": "Espejo irrompible de bebé",
    "descripcion": "Para tummy time. Les fascina verse.",
    "cantidad": "1"
  },
  {
    "categoria": "Juguetes y Estimulación",
    "subcategoria": "3–6 meses",
    "prioridad": "esencial",
    "item": "Mordedores de silicona libre de BPA",
    "descripcion": "Varias texturas. Refrigerar (no congelar).",
    "cantidad": "4"
  },
  {
    "categoria": "Juguetes y Estimulación",
    "subcategoria": "3–6 meses",
    "prioridad": "recomendado",
    "item": "Juguetes de baño (patos, animales de goma)",
    "descripcion": "Sin BPA. Revisar que no acumulen moho por dentro.",
    "cantidad": "1 set"
  },
  {
    "categoria": "Juguetes y Estimulación",
    "subcategoria": "6–12 meses",
    "prioridad": "esencial",
    "item": "Libros de tela / cartón grueso",
    "descripcion": "Leer en voz alta desde el día 1 estimula el lenguaje.",
    "cantidad": "6"
  },
  {
    "categoria": "Juguetes y Estimulación",
    "subcategoria": "6–12 meses",
    "prioridad": "recomendado",
    "item": "Andador de empuje (caminador de arrastre)",
    "descripcion": "Tipo carrito de empuje. Para ~9–14 meses.",
    "cantidad": "1"
  },
  {
    "categoria": "Seguridad del Hogar",
    "subcategoria": "Baby-proof",
    "prioridad": "recomendado",
    "item": "Tapete antideslizante para bañera",
    "descripcion": "Para cuando empiece a bañarse de pie.",
    "cantidad": "1"
  }
];
const CATEGORY_ICONS = {
  "Cuarto y Sueño": "🌙",
  "Baño e Higiene": "🛁",
  "Alimentación": "🍼",
  "Salud y Botiquín": "🩹",
  "Ropa y Vestir": "👕",
  "Transporte y Movilidad": "🚗",
  "Juguetes y Estimulación": "🧸",
  "Seguridad del Hogar": "🏡"
};
