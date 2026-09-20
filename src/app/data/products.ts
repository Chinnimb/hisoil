import { Sprout, Layers, TreePine, Mountain } from 'lucide-react';

// Imágenes reales de producto (src/imports/productos)
import imgCompost from '../../imports/productos/compost-1.webp';
import imgCompostPaisajismo from '../../imports/productos/compost-2.webp';
import imgHumic from '../../imports/productos/humic.webp';
import imgBiofert from '../../imports/productos/biofert-1.webp';
import imgCarbon from '../../imports/productos/carbon.webp';
import imgRegenera from '../../imports/productos/regenera.webp';
import imgPremium from '../../imports/productos/premium.webp';
import imgBerry from '../../imports/productos/berry.webp';
import imgCannabis from '../../imports/productos/cannabis.webp';
import imgCitrus from '../../imports/productos/citrus.webp';
import imgTurf from '../../imports/productos/turf.webp';
import imgHydro from '../../imports/productos/hydro.webp';
import imgPalm from '../../imports/productos/palm.webp';
import imgChip from '../../imports/productos/chip.webp';
import imgSphagnum from '../../imports/productos/sphagnum.webp';
import imgTierraFertil from '../../imports/productos/tierra-fertil.webp';
import imgGreenroof from '../../imports/productos/greenroof.webp';
import imgRestore from '../../imports/productos/restore-1.webp';
import imgHydromulch from '../../imports/productos/hydromulch.webp';
import imgNative from '../../imports/productos/native.webp';
import imgOutdoor from '../../imports/productos/outdoor.webp';

type LucideIcon = typeof Sprout;

export type ProductLine =
  'agricultura' | 'sustratos' | 'materiasprimas' | 'paisajismo' | 'infraestructura';

// El cliente envió un documento con la dirección fotográfica definitiva para
// Productos. Hasta que cada foto se produzca/genere, TODA imagen de la
// página de Productos (catálogo, banners de familia y ficha de detalle) se
// reemplaza por ImagePlaceholder — tenga o no foto real confirmada. Volver a
// `false` restaura las fotos reales ya cargadas.
export const PRODUCTOS_SHOW_PLACEHOLDERS = true;

export interface ProductDetail {
  slug: string;
  name: string;
  short: string;
  line: ProductLine;
  Icon: LucideIcon;
  /** Real product photo. Omitted while photography/generation is pending — UI falls back to a placeholder. */
  image?: string;
  format: string;
  usage: string;
  badge?: string;
  status?: 'a-desarrollar' | 'opcional';
  description: string; // varios párrafos separados por una línea en blanco
  composition: string[];
  compositionLabel?: string; // default "Composición técnica"
  benefits: string[];
  applications: string[];
  applicationsTitle?: string; // default "Formas de aplicación"
  crops?: string[];
  cropsLabel?: string; // default "Cultivos recomendados"
  certifications?: string[];
  packaging: string[];
  packagingLabel?: string; // default "Presentaciones"
  highlight?: string; // bloque destacado (ej. Green Roof)
  storage?: string;
}

export const products: ProductDetail[] = [
  // ═══════════════ AGRICULTURA ═══════════════
  {
    slug: 'compost',
    name: 'HiSoil Compost',
    short: 'Enmienda orgánica premium para la regeneración y fertilidad de los suelos.',
    line: 'agricultura',
    Icon: Sprout,
    image: imgCompost,
    format: 'A granel · Big Bag 1 m³',
    usage: '3–6 t/ha',
    badge: 'Más vendido',
    description:
      'HiSoil Compost es una enmienda orgánica elaborada a partir de residuos agroindustriales seleccionados mediante un proceso controlado de compostaje aeróbico. Su alto contenido de materia orgánica estabilizada y actividad biológica contribuye a mejorar la fertilidad, la estructura y el funcionamiento del suelo de manera sostenible.\n\nDesarrollado para agricultura extensiva e intensiva, es una solución natural para incrementar la productividad, favorecer la salud del suelo y reducir la dependencia de insumos de síntesis química.',
    composition: [
      'Materia orgánica: ≥ 40%',
      'Nitrógeno total: 1,5–2,0%',
      'Fósforo (P₂O₅): 0,8%',
      'Potasio (K₂O): 1,2%',
      'pH: 6,5–7,5',
      'Humedad: ≤ 35%',
    ],
    benefits: [
      'Incrementa el contenido de materia orgánica del suelo',
      'Mejora la estructura, aireación y estabilidad de los agregados',
      'Favorece la retención de agua y la infiltración',
      'Estimula la actividad biológica y microbiológica del suelo',
      'Aporta nutrientes de liberación gradual',
      'Favorece el desarrollo radicular y la disponibilidad de nutrientes',
      'Reduce la dependencia de fertilizantes químicos',
      'Contribuye a la regeneración de suelos degradados',
      'Apto para sistemas de producción orgánica',
    ],
    applications: [
      'Aplicar al voleo o en forma localizada e incorporar superficialmente antes de la siembra o durante la preparación del suelo',
      'Dosis orientativa: 3 a 6 t/ha',
    ],
    crops: [
      'Soja',
      'Maíz',
      'Trigo',
      'Girasol',
      'Frutales',
      'Viñedos',
      'Hortalizas',
      'Pasturas',
      'Cultivos intensivos',
    ],
    certifications: ['Apto para Producción Orgánica'],
    packaging: ['A granel', 'Bolsón (Big Bag) de 1 m³'],
    storage:
      'Conservar en un lugar seco, ventilado y protegido de la humedad. Vida útil: 24 meses.',
    applicationsTitle: 'Recomendaciones de uso',
  },
  {
    slug: 'biofert',
    name: 'HiSoil Biofert',
    short: 'Biofertilizante biológico de última generación.',
    line: 'agricultura',
    Icon: Sprout,
    image: imgBiofert,
    format: 'Bidón 20 L · IBC 1.000 L',
    usage: 'Suelo · Fertirriego · Foliar',
    description:
      'HiSoil Biofert es un biofertilizante líquido formulado con un consorcio de microorganismos benéficos y sustancias bioactivas, desarrollado para potenciar la actividad biológica del suelo y favorecer el crecimiento de los cultivos.\n\nSu formulación permite su aplicación mediante fertirriego, al suelo o por vía foliar, integrándose fácilmente a diferentes sistemas de producción agrícola.',
    composition: [
      'Consorcio de microorganismos benéficos seleccionados',
      'Sustancias bioactivas de origen natural',
      'Estabilizadores biológicos',
    ],
    benefits: [
      'Favorece la fijación biológica de nitrógeno',
      'Contribuye a la solubilización del fósforo',
      'Estimula el desarrollo del sistema radicular',
      'Promueve una mayor actividad microbiológica del suelo',
      'Favorece una mejor eficiencia en el aprovechamiento de nutrientes',
      'Puede contribuir a una mayor tolerancia frente a condiciones de estrés',
      'Compatible con agricultura regenerativa',
      'Apto para producción orgánica',
    ],
    applications: [
      'Fertirriego: 2 L/ha',
      'Aplicación al suelo: 3–4 L/ha',
      'Aplicación foliar: 1 L/ha diluido al 1%',
    ],
    crops: ['Soja', 'Maíz', 'Trigo', 'Girasol', 'Alfalfa', 'Frutales', 'Vid', 'Hortalizas'],
    certifications: ['Compatible con producción orgánica'],
    packaging: ['Bidón de 20 L', 'IBC/Bin de 1.000 L'],
    storage: '5–25 °C. No congelar. Vida útil: 12 meses.',
    compositionLabel: 'Composición',
    applicationsTitle: 'Recomendaciones de uso',
  },
  {
    slug: 'humic',
    name: 'HiSoil Humic',
    short: 'Enmienda orgánica húmica a base de compost y leonardita.',
    line: 'agricultura',
    Icon: Sprout,
    image: imgHumic,
    format: 'A granel · Big Bag 1 m³',
    usage: '100–500 kg/ha',
    description:
      'HiSoil Humic es una enmienda orgánica sólida elaborada a partir de una mezcla de compost de alta calidad y leonardita, diseñada para mejorar la fertilidad del suelo y potenciar el desarrollo de los cultivos.\n\nLa combinación de materia orgánica estabilizada con sustancias húmicas naturales mejora las propiedades físicas, químicas y biológicas del suelo, favoreciendo la actividad microbiana, la disponibilidad de nutrientes y el crecimiento radicular.\n\nPor su composición de origen natural, es un producto apto para sistemas de producción orgánica.',
    composition: [
      'Compost estabilizado',
      'Leonardita',
      'Ácidos húmicos: 12%',
      'Ácidos fúlvicos: 3%',
      'Potasio (K₂O): 5%',
    ],
    benefits: [
      'Incrementa la capacidad de intercambio catiónico',
      'Favorece la disponibilidad y absorción de nutrientes',
      'Estimula el desarrollo radicular',
      'Mejora la estructura y retención de agua',
      'Favorece una mayor eficiencia en el uso de fertilizantes',
      'Compatible con fertilización mineral y orgánica',
      'Apto para producción orgánica',
    ],
    applications: ['Aplicación al suelo', 'Dosis orientativa: 100 a 500 kg/ha'],
    crops: [
      'Cereales',
      'Oleaginosas',
      'Frutales',
      'Hortalizas',
      'Vid',
      'Cultivos intensivos',
      'Forestales',
    ],
    certifications: ['Apto para Producción Orgánica'],
    packaging: ['A granel', 'Bolsón (Big Bag) de 1 m³'],
    storage: 'Lugar seco, ventilado y protegido de la humedad. Vida útil: 24 meses.',
    applicationsTitle: 'Recomendaciones de uso',
  },
  {
    slug: 'carbon',
    name: 'HiSoil Carbon',
    short: 'Enmienda orgánica carbonizada a base de compost y biochar.',
    line: 'agricultura',
    Icon: Sprout,
    image: imgCarbon,
    format: 'A granel · Big Bag 1 m³',
    usage: '2–5 t/ha',
    description:
      'HiSoil Carbon es una enmienda orgánica premium elaborada a partir de una mezcla de 70% compost maduro HiSoil y 30% biochar (carbonilla vegetal), diseñada para mejorar la salud del suelo, incrementar el contenido de carbono estable y potenciar la eficiencia del uso de agua y nutrientes.\n\nLa combinación de compost y biochar integra los beneficios de la materia orgánica estabilizada con la alta porosidad y permanencia del carbono vegetal, favoreciendo la actividad microbiológica, el desarrollo radicular y la regeneración de los suelos.\n\nEs un producto especialmente recomendado para sistemas de agricultura regenerativa y producción sustentable.',
    composition: [
      '70% Compost maduro HiSoil',
      '30% Biochar (carbonilla vegetal)',
      'Alto contenido de carbono orgánico estable',
      'Producto de origen natural',
    ],
    benefits: [
      'Incrementa el contenido de carbono del suelo',
      'Mejora la estructura y retención de agua',
      'Favorece la retención y disponibilidad de nutrientes',
      'Estimula la actividad biológica',
      'Favorece el desarrollo radicular',
      'Contribuye a la captura de carbono',
      'Apto para producción orgánica',
    ],
    applications: ['Aplicar incorporándolo al suelo', 'Dosis orientativa: 2 a 5 t/ha'],
    crops: [
      'Cereales',
      'Oleaginosas',
      'Frutales',
      'Viñedos',
      'Hortalizas',
      'Pasturas',
      'Forestales',
    ],
    certifications: ['Apto para Producción Orgánica', 'Compatible con Agricultura Regenerativa'],
    packaging: ['A granel', 'Bolsón (Big Bag) de 1 m³'],
    storage: 'Lugar seco y ventilado. Vida útil: 24 meses.',
    compositionLabel: 'Composición',
    applicationsTitle: 'Recomendaciones de uso',
  },
  {
    slug: 'regenera',
    name: 'HiSoil Regenera',
    short: 'Programa integral para la regeneración de suelos.',
    line: 'agricultura',
    Icon: Sprout,
    image: imgRegenera,
    format: 'Programa técnico personalizado',
    usage: 'A medida de cada establecimiento',
    badge: 'Recomendado',
    description:
      'HiSoil Regenera es un programa técnico desarrollado para recuperar la salud y productividad de suelos degradados mediante un manejo integral que combina diagnóstico, planificación, aplicación de enmiendas orgánicas y seguimiento agronómico.\n\nCada programa se diseña de acuerdo con las características de cada establecimiento, buscando mejorar la fertilidad, incrementar la materia orgánica, favorecer la actividad biológica del suelo y optimizar la productividad de manera sustentable.',
    composition: [
      'Diagnóstico inicial del suelo',
      'Diseño de un plan de regeneración personalizado',
      'Recomendación de productos HiSoil según las necesidades de cada lote',
      'Plan de aplicación por campaña',
      'Seguimiento técnico y monitoreo de resultados',
    ],
    benefits: [
      'Incrementa el contenido de materia orgánica',
      'Favorece la recuperación de la actividad biológica',
      'Mejora la estructura y retención de agua',
      'Optimiza la disponibilidad de nutrientes',
      'Favorece la captura de carbono',
      'Mejora la productividad y sustentabilidad del sistema',
    ],
    applications: ['Diagnóstico', 'Plan de regeneración', 'Implementación', 'Seguimiento'],
    crops: [
      'Agricultura extensiva',
      'Agricultura intensiva',
      'Frutales',
      'Viñedos',
      'Horticultura',
      'Pasturas',
    ],

    packaging: ['Plan anual', 'Programa recomendado de 3 años'],

    compositionLabel: '¿Qué incluye?',
    applicationsTitle: 'Metodología',
    cropsLabel: 'Destinado a',
    packagingLabel: 'Modalidades',
  },

  // ═══════════════ SUSTRATOS PROFESIONALES ═══════════════
  {
    slug: 'seed',
    name: 'HiSoil Seed',
    short: 'Sustrato profesional para siembra y germinación.',
    line: 'sustratos',
    Icon: Layers,
    format: 'Bolsa 25 · 50 · 80 dm³',
    usage: 'Siembra en bandejas, almácigos y germinación de semillas',
    description:
      'HiSoil Seed es un sustrato profesional de granulometría fina, especialmente formulado para lograr una germinación uniforme y un excelente desarrollo inicial de las plántulas. Su composición proporciona el equilibrio ideal entre retención de humedad, aireación y estabilidad física, favoreciendo una rápida emergencia y un sistema radicular vigoroso desde las primeras etapas del cultivo.',
    composition: [
      'Turba sphagnum',
      'Perlita',
      'Vermiculita',
      'Fertilizante starter',
      'pH controlado',
      'Conductividad eléctrica controlada',
      'Granulometría fina y homogénea',
      'Alta estabilidad física',
    ],
    benefits: [
      'Alta tasa de germinación',
      'Emergencia rápida y uniforme',
      'Excelente retención de agua',
      'Óptima aireación radicular',
      'Fácil trasplante',
      'Calidad uniforme entre lotes',
    ],
    applications: [
      'Llenado de bandejas de germinación',
      'Almácigos y siembra en macetas pequeñas',
      'Cobertura superficial de semillas',
    ],
    packaging: ['Bolsa 25 dm³', 'Bolsa 50 dm³', 'Bolsa 80 dm³'],
    storage:
      'Conservar en un lugar seco, ventilado y protegido de la luz solar directa. Vida útil: 24 meses desde la fecha de elaboración.',
  },
  {
    slug: 'plug',
    name: 'HiSoil Plug',
    short: 'Sustrato profesional para producción de plantines en plugs.',
    line: 'sustratos',
    Icon: Layers,
    format: 'Bolsa 25 · 50 · 80 dm³',
    usage: 'Producción profesional de plantines en bandejas plug',
    description:
      'HiSoil Plug es un sustrato profesional especialmente desarrollado para la producción intensiva de plantines en bandejas plug y sistemas de llenado automatizados. Su granulometría fina y uniforme permite un llenado preciso de las celdas, favoreciendo una excelente germinación, un desarrollo radicular equilibrado y la formación de un cepellón firme que facilita el trasplante. Su formulación combina materias primas de alta calidad que ofrecen un equilibrio óptimo entre retención de humedad, aireación y drenaje, asegurando un crecimiento uniforme y reduciendo el estrés durante el trasplante.',
    composition: [
      'Turba sphagnum',
      'Perlita fina',
      'Coco fibra',
      'Fertilizante starter',
      'pH controlado',
      'Conductividad eléctrica controlada',
      'Granulometría fina y homogénea',
      'Excelente estabilidad física',
    ],
    benefits: [
      'Excelente comportamiento en líneas de llenado automáticas',
      'Distribución homogénea en cada celda',
      'Alta estabilidad del cepellón',
      'Óptima relación entre retención de agua y aireación',
      'Reduce el estrés durante el trasplante',
      'Calidad constante entre lotes',
    ],
    applications: [
      'Producción intensiva en bandejas plug',
      'Compatible con sistemas automatizados de llenado y siembra',
      'Producción de hortalizas, flores, aromáticas y especies forestales',
    ],
    packaging: ['Bolsa 25 dm³', 'Bolsa 50 dm³', 'Bolsa 80 dm³'],
    storage:
      'Conservar en un lugar seco, ventilado y protegido de la luz solar directa. Vida útil: 24 meses desde la fecha de elaboración.',
  },
  {
    slug: 'nursery',
    name: 'HiSoil Nursery',
    short: 'Sustrato profesional para viveros de producción.',
    line: 'sustratos',
    Icon: Layers,
    format: 'Bolsa 25 · 50 · 80 dm³',
    usage: 'Producción comercial de plantas ornamentales, forestales y frutales',
    description:
      'HiSoil Nursery es un sustrato profesional desarrollado para viveros comerciales que requieren un medio de cultivo estable durante todo el ciclo de producción. Su formulación proporciona el equilibrio ideal entre retención de humedad, aireación y drenaje, promoviendo un desarrollo radicular vigoroso y un crecimiento uniforme de las plantas. Gracias a su elevada estabilidad estructural, mantiene sus propiedades físicas durante ciclos prolongados, reduciendo la compactación y favoreciendo un manejo más eficiente del riego y la fertilización.',
    composition: [
      'Turba sphagnum',
      'Corteza compostada',
      'Perlita',
      'Compost Premium',
      'pH controlado',
      'Conductividad eléctrica controlada',
      'Granulometría media',
      'Alta estabilidad física',
    ],
    benefits: [
      'Excelente estabilidad estructural durante ciclos largos',
      'Bajo riesgo de compactación',
      'Óptima retención de agua con excelente drenaje',
      'Favorece un desarrollo radicular abundante',
      'Fertilización inicial incorporada',
      'Calidad uniforme entre lotes',
    ],
    applications: [
      'Producción de plantas en macetas de vivero',
      'Viveros ornamentales y forestales',
      'Producción de frutales, arbustos y especies nativas',
    ],
    packaging: ['Bolsa 25 dm³', 'Bolsa 50 dm³', 'Bolsa 80 dm³'],
    storage:
      'Conservar en un lugar seco, ventilado y protegido de la luz solar directa. Vida útil: 24 meses desde la fecha de elaboración.',
  },
  {
    slug: 'premium',
    name: 'HiSoil Premium',
    short: 'Sustrato profesional premium para cultivos de alta exigencia.',
    line: 'sustratos',
    Icon: Layers,
    image: imgPremium,
    badge: 'Premium',
    format: 'Bolsa 25 · 50 · 80 dm³',
    usage: 'Producción profesional de cultivos de alto valor',
    description:
      'HiSoil Premium es un sustrato de máxima calidad desarrollado para productores que buscan el mayor rendimiento y uniformidad en cultivos de alta exigencia. Su formulación combina materias primas cuidadosamente seleccionadas para ofrecer un equilibrio óptimo entre aireación, retención de agua, drenaje y disponibilidad de nutrientes. Está diseñado para adaptarse a distintos sistemas de producción y puede personalizarse según las necesidades específicas de cada cultivo, tipo de contenedor y manejo agronómico.',
    composition: [
      'Turba rubia sphagnum',
      'Turba negra',
      'Perlita gruesa',
      'Fibra de coco',
      'Enmiendas técnicas',
      'pH controlado',
      'Conductividad eléctrica controlada',
      'Granulometría media a gruesa',
      'Excelente estabilidad física',
    ],
    benefits: [
      'Formulación adaptable a cada cultivo',
      'Máxima estabilidad física durante el ciclo productivo',
      'Excelente equilibrio entre retención de humedad y aireación',
      'Desarrollo radicular vigoroso y uniforme',
      'Alto rendimiento en cultivos intensivos',
      'Calidad uniforme y trazabilidad de materias primas',
    ],
    applications: [
      'Cultivos intensivos y de alto valor',
      'Producción bajo cubierta e invernaderos',
      'Macetas, contenedores y sistemas de producción profesional',
    ],
    packaging: ['Bolsa 25 dm³', 'Bolsa 50 dm³', 'Bolsa 80 dm³'],
    storage:
      'Conservar en un lugar seco, ventilado y protegido de la luz solar directa. Vida útil: 24 meses desde la fecha de elaboración.',
  },
  {
    slug: 'forest',
    name: 'HiSoil Forest',
    short: 'Sustrato profesional para producción de plantines forestales.',
    line: 'sustratos',
    Icon: Layers,
    format: 'Bolsa 25 · 50 · 80 dm³',
    usage: 'Producción de plantines para forestación y reforestación',
    description:
      'HiSoil Forest es un sustrato profesional especialmente desarrollado para la producción de plantines forestales nativos y comerciales. Su formulación proporciona una estructura física estable durante ciclos de producción prolongados, favoreciendo el desarrollo de un sistema radicular vigoroso y la formación de un cepellón compacto que mejora el prendimiento luego del trasplante a campo. Gracias a su equilibrio entre retención de humedad, aireación y drenaje, ofrece condiciones óptimas para el crecimiento uniforme de especies forestales en vivero.',
    composition: [
      'Corteza compostada',
      'Turba sphagnum',
      'Perlita',
      'Compost forestal',
      'pH controlado',
      'Conductividad eléctrica controlada',
      'Granulometría media',
      'Alta estabilidad estructural',
    ],
    benefits: [
      'Excelente desarrollo radicular',
      'Formación de un cepellón firme y consistente',
      'Mayor prendimiento luego del trasplante',
      'Óptima retención de agua con excelente drenaje',
      'Bajo riesgo de compactación',
      'Calidad uniforme entre lotes',
    ],
    applications: [
      'Producción de plantines forestales en bandejas y contenedores',
      'Programas de forestación y reforestación',
      'Producción de especies nativas y comerciales',
    ],
    packaging: ['Bolsa 25 dm³', 'Bolsa 50 dm³', 'Bolsa 80 dm³'],
    storage:
      'Conservar en un lugar seco, ventilado y protegido de la luz solar directa. Vida útil: 24 meses desde la fecha de elaboración.',
  },
  {
    slug: 'tobacco',
    name: 'HiSoil Tobacco',
    short: 'Sustrato profesional para producción de plantines de tabaco.',
    line: 'sustratos',
    Icon: Layers,
    format: 'Bolsa 25 · 50 · 80 dm³',
    usage: 'Producción de plantines de tabaco en sistema flotante y bandejas',
    description:
      'HiSoil Tobacco es un sustrato profesional especialmente formulado para la producción de plantines de tabaco mediante sistemas flotantes y bandejas de germinación. Su estructura física garantiza una excelente retención de humedad, adecuada oxigenación radicular y una germinación uniforme, favoreciendo la obtención de plantines vigorosos y homogéneos. Elaborado con materias primas de alta calidad y libre de patógenos, ofrece un medio de cultivo estable que acompaña el desarrollo del plantín hasta el momento del trasplante.',
    composition: [
      'Turba sphagnum canadiense',
      'Perlita',
      'Fertilizante starter',
      'pH controlado',
      'Conductividad eléctrica controlada',
      'Granulometría fina y homogénea',
      'Excelente estabilidad física',
    ],
    benefits: [
      'Alta uniformidad en la germinación',
      'Excelente desarrollo radicular',
      'Compatible con sistemas flotantes y bandejas',
      'Elevada retención de agua con adecuada aireación',
      'Libre de malezas y patógenos',
      'Favorece un trasplante uniforme',
    ],
    applications: [
      'Producción de plantines en bandejas de tabaco',
      'Semilleros flotantes',
      'Viveros especializados para producción tabacalera',
    ],
    packaging: ['Bolsa 25 dm³', 'Bolsa 50 dm³', 'Bolsa 80 dm³'],
    storage:
      'Conservar en un lugar seco, ventilado y protegido de la luz solar directa. Vida útil: 24 meses desde la fecha de elaboración.',
  },
  {
    slug: 'berry',
    name: 'HiSoil Berry',
    short: 'Sustrato profesional para arándanos y frutos rojos.',
    line: 'sustratos',
    Icon: Layers,
    image: imgBerry,
    format: 'Bolsa 25 · 50 · 80 dm³',
    usage: 'Producción profesional de arándanos y otros berries',
    description:
      'HiSoil Berry es un sustrato profesional especialmente formulado para el cultivo de arándanos y otros frutos rojos que requieren medios de cultivo ácidos y altamente estables. Su composición proporciona un ambiente ideal para el desarrollo radicular, favoreciendo una excelente retención de humedad, alta aireación y un drenaje eficiente durante todo el ciclo productivo. Su pH naturalmente ácido y su estabilidad física lo convierten en una solución ideal para cultivos en macetas, bolsas de cultivo, camas elevadas y sistemas con fertirriego.',
    composition: [
      'Turba rubia sphagnum',
      'Corteza de pino compostada',
      'Perlita',
      'Sulfato de amonio',
      'pH ácido, ideal para cultivos acidófilos',
      'Conductividad eléctrica controlada',
      'Granulometría media',
      'Alta estabilidad estructural',
    ],
    benefits: [
      'pH ideal para arándanos y frutos rojos',
      'Excelente retención de agua con óptima aireación',
      'Alta estabilidad para cultivos perennes',
      'Compatible con programas de fertirriego',
      'Favorece un desarrollo radicular vigoroso',
      'Reduce el riesgo de compactación',
    ],
    applications: [
      'Cultivo en bolsas y macetas',
      'Camas elevadas',
      'Plantaciones comerciales con fertirriego',
    ],
    crops: ['Arándano', 'Frambuesa', 'Zarzamora', 'Frutilla'],
    packaging: ['Bolsa 25 dm³', 'Bolsa 50 dm³', 'Bolsa 80 dm³'],
    storage:
      'Conservar en un lugar seco, ventilado y protegido de la luz solar directa. Vida útil: 24 meses desde la fecha de elaboración.',
  },
  {
    slug: 'cannabis',
    name: 'HiSoil Cannabis',
    short: 'Sustrato profesional para cannabis medicinal y cáñamo industrial.',
    line: 'sustratos',
    Icon: Layers,
    image: imgCannabis,
    badge: 'Nuevo',
    format: 'Bolsa 25 · 50 · 80 dm³',
    usage: 'Cultivo profesional indoor, greenhouse y outdoor',
    description:
      'HiSoil Cannabis es un sustrato profesional desarrollado para la producción de cannabis medicinal y cáñamo industrial bajo sistemas indoor, greenhouse y outdoor. Su formulación ofrece un equilibrio óptimo entre aireación, retención de humedad y drenaje, favoreciendo un desarrollo radicular vigoroso y un crecimiento uniforme durante todo el ciclo del cultivo. Elaborado con materias primas seleccionadas y de calidad constante, es compatible con programas de fertilización mineral u orgánica y puede adaptarse a los requerimientos específicos de cada variedad y sistema de manejo.',
    composition: [
      'Turba sphagnum',
      'Coco fibra',
      'Perlita',
      'Vermiculita',
      'Enmiendas orgánicas',
      'pH controlado',
      'Conductividad eléctrica controlada',
      'Granulometría media',
      'Excelente estabilidad física',
    ],
    benefits: [
      'Excelente desarrollo del sistema radicular',
      'Alta capacidad de aireación y drenaje',
      'Óptima retención de humedad',
      'Compatible con fertilización orgánica y mineral',
      'pH y conductividad controlados',
      'Materias primas de calidad profesional y trazabilidad',
    ],
    applications: [
      'Cultivo en macetas y contenedores',
      'Producción indoor con iluminación LED',
      'Producción en greenhouse',
      'Cultivo outdoor',
    ],
    certifications: ['SENASA', 'GAP'],
    packaging: ['Bolsa 25 dm³', 'Bolsa 50 dm³', 'Bolsa 80 dm³'],
    storage:
      'Conservar en un lugar seco, ventilado y protegido de la luz solar directa. Vida útil: 24 meses desde la fecha de elaboración.',
  },
  {
    slug: 'citrus',
    name: 'HiSoil Citrus',
    short: 'Sustrato profesional para producción de cítricos y frutales.',
    line: 'sustratos',
    Icon: Layers,
    image: imgCitrus,
    format: 'Bolsa 25 · 50 · 80 dm³',
    usage: 'Producción de plantines de cítricos y frutales en vivero',
    description:
      'HiSoil Citrus es un sustrato profesional especialmente desarrollado para la producción de plantines de cítricos y frutales en vivero. Su formulación proporciona un equilibrio ideal entre retención de humedad, aireación y drenaje, promoviendo un crecimiento radicular vigoroso y la formación de un cepellón firme que mejora el prendimiento luego del trasplante a campo. Su estructura física estable permite un manejo eficiente del riego y la fertilización durante todo el ciclo de producción.',
    composition: [
      'Turba sphagnum',
      'Corteza de pino',
      'Perlita',
      'Compost forestal',
      'pH ligeramente ácido',
      'Conductividad eléctrica controlada',
      'Granulometría media',
      'Excelente estabilidad estructural',
    ],
    benefits: [
      'Excelente desarrollo radicular',
      'Cepellón firme y consistente',
      'Óptimo equilibrio entre retención de agua y drenaje',
      'Favorece un mayor prendimiento en campo',
      'Alta estabilidad física durante el ciclo de vivero',
      'Compatible con programas de fertirriego',
    ],
    applications: [
      'Producción de plantines en macetas de vivero',
      'Producción de portainjertos y plantas injertadas',
      'Viveros comerciales de frutales',
    ],
    crops: ['Naranja', 'Limón', 'Mandarina', 'Manzana', 'Pera'],
    packaging: ['Bolsa 25 dm³', 'Bolsa 50 dm³', 'Bolsa 80 dm³'],
    storage:
      'Conservar en un lugar seco, ventilado y protegido de la luz solar directa. Vida útil: 24 meses desde la fecha de elaboración.',
  },
  {
    slug: 'turf',
    name: 'HiSoil Turf',
    short: 'Sustrato profesional para producción de césped en rollo.',
    line: 'sustratos',
    Icon: Layers,
    image: imgTurf,
    format: 'Bolsa 25 · 50 dm³ · Big-bag · A granel',
    usage: 'Producción profesional de césped y superficies deportivas',
    description:
      'HiSoil Turf es un sustrato profesional especialmente desarrollado para la producción intensiva de césped en rollo y la implantación de superficies deportivas y paisajísticas. Su formulación ofrece una estructura física estable, excelente drenaje y un adecuado contenido de materia orgánica, favoreciendo un rápido establecimiento del césped y un desarrollo radicular uniforme. Su equilibrio entre componentes minerales y orgánicos facilita el manejo del cultivo, mejora la cosecha del rollo y contribuye a obtener un producto final de alta calidad.',
    composition: [
      'Arena silícea',
      'Compost',
      'Turba negra',
      'Fertilizante starter',
      'Excelente drenaje',
      'Buena estabilidad estructural',
      'Granulometría adaptada para producción de césped',
      'Balance adecuado entre componentes minerales y orgánicos',
    ],
    benefits: [
      'Favorece una cosecha limpia del césped en rollo',
      'Excelente desarrollo radicular',
      'Rápido establecimiento del cultivo',
      'Óptima capacidad de drenaje',
      'Alta estabilidad durante el ciclo de producción',
      'Compatible con programas de fertilización y riego',
    ],
    applications: [
      'Producción comercial de césped en rollo',
      'Canchas de golf y fútbol',
      'Parques, jardines y espacios verdes',
    ],
    packaging: ['Bolsa 25 dm³', 'Bolsa 50 dm³', 'Big-bag', 'A granel'],
    storage:
      'Conservar en un lugar seco, ventilado y protegido de la luz solar directa. Vida útil: 24 meses desde la fecha de elaboración.',
  },
  {
    slug: 'hydro',
    name: 'HiSoil Hydro',
    short: 'Sustrato profesional para cultivos hidropónicos.',
    line: 'sustratos',
    Icon: Layers,
    image: imgHydro,
    format: 'Bolsa 25 · 50 · 80 dm³',
    usage: 'Sistemas hidropónicos comerciales y producción bajo cubierta',
    description:
      'HiSoil Hydro es un sustrato profesional desarrollado para sistemas de producción hidropónica que requieren un medio de cultivo estable, liviano y de excelente comportamiento físico. Su formulación proporciona una óptima relación entre retención de solución nutritiva, aireación y drenaje, favoreciendo un desarrollo radicular uniforme y un manejo eficiente del riego y la fertirrigación. Elaborado con materiales de alta calidad, permite un control preciso de la nutrición del cultivo y es compatible con los principales sistemas hidropónicos comerciales.',
    composition: [
      'Perlita expandida',
      'Vermiculita expandida',
      'Pumita',
      'Baja conductividad eléctrica',
      'Excelente capacidad de aireación',
      'Alta retención de solución nutritiva',
      'Granulometría uniforme',
    ],
    benefits: [
      'Excelente desarrollo radicular',
      'Óptimo equilibrio entre aireación y retención de humedad',
      'Favorece un manejo eficiente de la fertirrigación',
      'Compatible con diferentes sistemas hidropónicos',
      'Materiales estables y de alta calidad',
      'Reutilizable con un adecuado proceso de limpieza y desinfección',
    ],
    applications: [
      'Cultivos hidropónicos comerciales',
      'Producción en invernaderos',
      'Sistemas de fertirriego y cultivo sin suelo',
    ],
    crops: ['NFT', 'DWC', 'Riego por goteo', 'Mesas de cultivo', 'Contenedores hidropónicos'],
    packaging: ['Bolsa 25 dm³', 'Bolsa 50 dm³', 'Bolsa 80 dm³'],
    storage:
      'Conservar en un lugar seco, ventilado y protegido de la luz solar directa. Vida útil: 24 meses desde la fecha de elaboración.',
  },
  {
    slug: 'palm',
    name: 'HiSoil Palm',
    short: 'Sustrato profesional para palmeras y plantas ornamentales.',
    line: 'sustratos',
    Icon: Layers,
    image: imgPalm,
    format: 'Bolsa 25 · 50 · 80 dm³',
    usage: 'Palmeras, plantas tropicales y ornamentales',
    description:
      'HiSoil Palm es un sustrato profesional desarrollado para el cultivo de palmeras, plantas tropicales y especies ornamentales de gran porte. Su formulación proporciona una estructura física estable con excelente drenaje, adecuada aireación y óptima retención de humedad, favoreciendo un crecimiento vigoroso y un desarrollo radicular saludable. Está diseñado para cultivos en macetas de gran volumen, jardinería profesional, paisajismo y espacios verdes donde se requiere un sustrato durable y de alto desempeño.',
    composition: [
      'Turba sphagnum',
      'Corteza compostada',
      'Perlita',
      'Compost',
      'Excelente drenaje',
      'Alta estabilidad física',
      'Granulometría media a gruesa',
      'Óptimo equilibrio entre aireación y retención de humedad',
    ],
    benefits: [
      'Excelente drenaje para evitar encharcamientos',
      'Óptima aireación del sistema radicular',
      'Alta estabilidad estructural en macetas de gran volumen',
      'Favorece un crecimiento uniforme y vigoroso',
      'Buena capacidad de retención de humedad',
      'Ideal para uso profesional en viveros y paisajismo',
    ],
    applications: [
      'Macetas de gran volumen',
      'Palmeras y plantas tropicales',
      'Paisajismo, jardines y espacios verdes',
    ],
    packaging: ['Bolsa 25 dm³', 'Bolsa 50 dm³', 'Bolsa 80 dm³'],
    storage:
      'Conservar en un lugar seco, ventilado y protegido de la luz solar directa. Vida útil: 24 meses desde la fecha de elaboración.',
  },

  // ═══════════════ MATERIAS PRIMAS ═══════════════
  {
    slug: 'chip',
    name: 'HiSoil Chip',
    short: 'Astillas de madera para cobertura decorativa (Mulch).',
    line: 'materiasprimas',
    Icon: TreePine,
    image: imgChip,
    format: 'Granel · Big Bag · Bolsas de 130, 100, 60, 25 y 5 dm³',
    usage: 'Cobertura decorativa · Control de malezas · Conservación de humedad',
    description:
      'HiSoil Chip es un mulch elaborado a partir de astillas de madera seleccionadas, ideal para jardines, parques, plazas y proyectos de paisajismo. Actúa como cobertura superficial del suelo, reduciendo la evaporación del agua, limitando el crecimiento de malezas y mejorando la estética de los espacios verdes. Su granulometría uniforme y su baja proporción de finos permiten obtener una cobertura homogénea y de larga duración, protegiendo el suelo frente a cambios bruscos de temperatura y disminuyendo significativamente la frecuencia de riego. Es una solución sustentable para proyectos de jardinería residencial, paisajismo urbano y espacios verdes de uso público o privado.',
    composition: [
      'Astillas de madera seleccionadas',
      'Granulometría 20–60 mm',
      'Baja proporción de finos',
      'Libre de contaminantes',
    ],
    benefits: [
      'Reduce la evaporación del agua del suelo',
      'Disminuye el crecimiento de malezas',
      'Conserva una temperatura más estable en la zona radicular',
      'Reduce la frecuencia de riego',
      'Protege las raíces frente a temperaturas extremas',
      'Excelente terminación estética',
      'Durabilidad aproximada de 2 a 3 años según las condiciones de uso',
    ],
    applications: [
      'Distribuir una capa uniforme de 5 a 8 cm sobre la superficie',
      'Evitar el contacto directo con el cuello de las plantas',
      'Reponer el material cuando la capa disminuya por degradación natural',
    ],
    crops: [
      'Jardines',
      'Canteros',
      'Árboles',
      'Arbustos',
      'Plazas',
      'Parques',
      'Senderos',
      'Espacios recreativos',
      'Paisajismo',
    ],
    packaging: [
      'Granel',
      'Big Bag',
      'Bolsa 130 dm³',
      'Bolsa 100 dm³',
      'Bolsa 60 dm³',
      'Bolsa 25 dm³',
      'Bolsa 5 dm³',
    ],
    storage:
      'Conservar en un lugar seco, ventilado y protegido de la humedad excesiva y de la luz solar directa.',
  },
  {
    slug: 'minichip',
    name: 'HiSoil MiniChip',
    short: 'Astillas finas de madera para cobertura decorativa premium.',
    line: 'materiasprimas',
    Icon: TreePine,
    format: 'Granel · Big Bag · Bolsas de 130, 100, 60, 25 y 5 dm³',
    usage: 'Cobertura decorativa premium · Paisajismo · Jardinería',
    description:
      'HiSoil MiniChip es un mulch elaborado con astillas finas de madera seleccionadas, especialmente desarrollado para proyectos de paisajismo de alta calidad. Su granulometría uniforme proporciona una terminación más delicada y elegante, ideal para jardines residenciales, hoteles, barrios privados, viveros y espacios verdes donde la estética es un factor diferencial. Además de aportar una excelente terminación visual, ayuda a conservar la humedad del suelo, controlar el crecimiento de malezas y proteger las raíces frente a las variaciones de temperatura, contribuyendo al desarrollo saludable de las plantas. Su tamaño reducido facilita una distribución uniforme y una mejor adaptación a canteros ornamentales y macizos florales.',
    composition: [
      'Astillas finas de madera seleccionadas',
      'Granulometría 5–15 mm',
      'Material cribado y limpio',
      'Baja proporción de finos',
      'Libre de contaminantes',
    ],
    benefits: [
      'Terminación estética premium',
      'Cobertura uniforme de alta calidad',
      'Reduce la evaporación del agua',
      'Disminuye el crecimiento de malezas',
      'Compatible con sistemas de riego',
      'Protege las raíces frente a cambios bruscos de temperatura',
      'Descomposición gradual que incorpora materia orgánica al suelo',
    ],
    applications: [
      'Distribuir una capa uniforme de 3 a 5 cm',
      'Cubrir completamente la superficie del cantero',
      'Reponer el material cuando sea necesario para mantener el espesor recomendado',
    ],
    crops: [
      'Canteros ornamentales',
      'Jardines residenciales',
      'Maceteros',
      'Paisajismo premium',
      'Espacios verdes',
      'Bases de árboles y arbustos',
    ],
    packaging: [
      'Granel',
      'Big Bag',
      'Bolsa 130 dm³',
      'Bolsa 100 dm³',
      'Bolsa 60 dm³',
      'Bolsa 25 dm³',
      'Bolsa 5 dm³',
    ],
    storage:
      'Conservar en un lugar seco, ventilado y protegido de la humedad excesiva y de la luz solar directa.',
  },
  {
    slug: 'sphagnum',
    name: 'HiSoil Sphagnum',
    short: 'Turba sphagnum natural de Tierra del Fuego.',
    line: 'materiasprimas',
    Icon: TreePine,
    image: imgSphagnum,
    format: 'Bolsas de 130, 25 y 5 dm³',
    usage: 'Formulación de sustratos · Semilleros · Almácigos · Enmienda de suelos',
    description:
      'HiSoil Sphagnum es turba sphagnum natural proveniente de Tierra del Fuego (Argentina), seleccionada por su elevada capacidad de retención de agua y su estructura fibrosa estable. Constituye una de las materias primas más utilizadas en la elaboración de sustratos profesionales gracias a su excelente equilibrio entre retención hídrica, aireación y estabilidad física. Su estructura porosa favorece el desarrollo radicular, mejora la disponibilidad de agua para las plantas y aporta una base homogénea para la formulación de mezclas destinadas a viveros, horticultura, floricultura y producción forestal. Su calidad uniforme permite obtener sustratos de alto rendimiento con excelentes propiedades físicas y una larga estabilidad en el tiempo.',
    composition: [
      'Turba sphagnum natural de Tierra del Fuego',
      'pH natural 3,5–4,5',
      'Alta porosidad',
      'Estructura fibrosa estable',
      'Libre de aditivos',
    ],
    benefits: [
      'Excelente capacidad de retención de agua',
      'Favorece el desarrollo radicular',
      'Mejora la aireación de los sustratos',
      'Gran estabilidad física',
      'Calidad homogénea',
      'Ideal como base para formulaciones profesionales',
      'Materia prima natural de alta calidad',
    ],
    applications: [
      'Incorporar en formulaciones de sustratos',
      'Utilizar en semilleros y almácigos',
      'Emplear como componente para viveros y cultivos ornamentales',
    ],
    crops: [
      'Producción de sustratos',
      'Viveros',
      'Horticultura',
      'Floricultura',
      'Producción forestal',
      'Semilleros',
      'Almácigos',
    ],
    packaging: ['Bolsa 130 dm³', 'Bolsa 25 dm³', 'Bolsa 5 dm³'],
    storage:
      'Conservar en un lugar seco, ventilado y protegido de la humedad y de la luz solar directa. Mantener los envases cerrados hasta su utilización.',
  },
  {
    slug: 'perlite',
    name: 'HiSoil Perlite',
    short: 'Perlita expandida para sustratos profesionales.',
    line: 'materiasprimas',
    Icon: TreePine,
    format: 'Bolsas de 125, 25 y 5 dm³',
    usage: 'Componente de sustratos · Mejora del drenaje y la aireación',
    description:
      'HiSoil Perlite es perlita expandida de calidad hortícola, un material mineral inerte y ultraliviano utilizado para mejorar la estructura física de los sustratos. Gracias a su elevada porosidad incrementa la aireación y el drenaje, favoreciendo un desarrollo radicular más saludable y reduciendo el riesgo de compactación. Su estabilidad física y química permite mantener las propiedades del sustrato durante todo el ciclo del cultivo, siendo un componente ampliamente utilizado en viveros, producción hortícola, cultivos ornamentales, forestales y formulaciones profesionales. Al tratarse de un material estéril, inerte y de bajo peso específico, facilita la preparación de mezclas homogéneas de excelente calidad.',
    composition: [
      'Perlita expandida 100%',
      'Granulometría 2–5 mm',
      'pH 6,5–7,5',
      'Material mineral inerte',
      'Alta porosidad',
    ],
    benefits: [
      'Incrementa el drenaje del sustrato',
      'Mejora la aireación de la zona radicular',
      'Reduce la compactación',
      'Disminuye el peso de las mezclas',
      'Material químicamente inerte',
      'Alta estabilidad física',
      'Favorece un crecimiento radicular uniforme',
    ],
    applications: [
      'Incorporar a la formulación de sustratos',
      'Mezclar según el nivel de drenaje requerido',
      'Utilizar en viveros, macetas y producción hortícola',
    ],
    crops: [
      'Producción de sustratos',
      'Viveros',
      'Semilleros',
      'Almácigos',
      'Cultivos ornamentales',
      'Horticultura',
      'Producción forestal',
    ],
    packaging: ['Bolsa 125 dm³', 'Bolsa 25 dm³', 'Bolsa 5 dm³'],
    storage:
      'Conservar en un lugar seco, ventilado y protegido de la humedad y de la luz solar directa.',
  },
  {
    slug: 'vermiculite',
    name: 'HiSoil Vermiculite',
    short: 'Vermiculita expandida para sustratos profesionales.',
    line: 'materiasprimas',
    Icon: TreePine,
    format: 'Bolsas de 50, 25 y 5 dm³',
    usage: 'Componente de sustratos · Semilleros · Cobertura de semillas',
    description:
      'HiSoil Vermiculite es vermiculita expandida de calidad hortícola, un mineral natural procesado térmicamente que se caracteriza por su elevada capacidad de retención de agua y nutrientes. Su estructura liviana y porosa mejora las propiedades físicas de los sustratos, favoreciendo una germinación más uniforme y un desarrollo radicular vigoroso. Gracias a su elevada capacidad de intercambio catiónico (CIC), contribuye a retener nutrientes disponibles para las plantas, mejorando la eficiencia de fertilización y el aprovechamiento del agua. Es ampliamente utilizada en viveros, semilleros, almácigos y formulaciones profesionales donde se busca maximizar la retención hídrica sin comprometer la aireación del sistema radicular.',
    composition: [
      'Vermiculita expandida 100%',
      'Granulometría 2–4 mm',
      'pH 6,5–7,5',
      'Material mineral natural',
      'Alta capacidad de intercambio catiónico (CIC)',
    ],
    benefits: [
      'Excelente retención de agua',
      'Favorece la disponibilidad de nutrientes',
      'Alta capacidad de intercambio catiónico',
      'Mejora la germinación',
      'Favorece el desarrollo radicular',
      'Material liviano y estable',
      'Incrementa la calidad física del sustrato',
    ],
    applications: [
      'Incorporar en formulaciones de sustratos',
      'Utilizar en semilleros y almácigos',
      'Emplear como cobertura de semillas para conservar la humedad',
    ],
    crops: [
      'Producción de sustratos',
      'Semilleros',
      'Almácigos',
      'Viveros',
      'Producción hortícola',
      'Cultivos ornamentales',
    ],
    packaging: ['Bolsa 50 dm³', 'Bolsa 25 dm³', 'Bolsa 5 dm³'],
    storage:
      'Conservar en un lugar seco, ventilado y protegido de la humedad y de la luz solar directa.',
  },
  {
    slug: 'pometina',
    name: 'HiSoil Pometina',
    short: 'Pometina volcánica para formulación de sustratos.',
    line: 'materiasprimas',
    Icon: TreePine,
    format: 'Bolsas de 50, 25 y 5 dm³',
    usage: 'Formulación de sustratos · Drenaje · Techos verdes',
    description:
      'HiSoil Pometina es un agregado mineral de origen volcánico especialmente seleccionado para la formulación de sustratos profesionales. Su estructura altamente porosa mejora el drenaje, incrementa la aireación y aporta estabilidad física a las mezclas, favoreciendo un desarrollo radicular saludable y un crecimiento uniforme de las plantas. Su resistencia a la degradación permite mantener las propiedades físicas del sustrato durante largos períodos, siendo un componente ideal para viveros, horticultura, paisajismo, cultivos ornamentales y sistemas de techos verdes. Su origen mineral natural aporta estabilidad estructural sin modificar significativamente las propiedades químicas de la mezcla.',
    composition: [
      'Pometina volcánica seleccionada',
      'Granulometría 3–10 mm',
      'pH 6,8–7,2',
      'Material mineral natural',
      'Alta estabilidad física',
    ],
    benefits: [
      'Excelente capacidad de drenaje',
      'Mejora la aireación radicular',
      'Aporta estructura estable al sustrato',
      'Mineral natural de larga durabilidad',
      'Reduce la compactación',
      'Favorece un crecimiento radicular uniforme',
      'Ideal para formulaciones profesionales y techos verdes',
    ],
    applications: [
      'Incorporar en formulaciones de sustratos técnicos',
      'Utilizar en mezclas para cultivos con alta demanda de drenaje',
      'Emplear en sistemas de techos verdes y paisajismo',
    ],
    crops: [
      'Producción de sustratos',
      'Viveros',
      'Horticultura',
      'Cultivos ornamentales',
      'Techos verdes',
      'Paisajismo',
      'Infraestructura verde',
    ],
    packaging: ['Bolsa 50 dm³', 'Bolsa 25 dm³', 'Bolsa 5 dm³'],
    storage:
      'Conservar en un lugar seco, ventilado y protegido de la humedad y de la luz solar directa.',
  },

  // ═══════════════ PAISAJISMO ═══════════════
  {
    slug: 'compost-paisajismo',
    name: 'HiSoil Compost',
    short: 'Enmienda orgánica para jardinería, paisajismo y espacios verdes.',
    line: 'paisajismo',
    Icon: TreePine,
    image: imgCompostPaisajismo,
    format: 'A granel · Big Bag · Bolsas de 50, 25 y 5 dm³',
    usage: '5–20 L/m²',
    description:
      'Enmienda orgánica de alta calidad elaborada a partir de residuos agroindustriales mediante un proceso controlado de compostaje aeróbico. Aporta materia orgánica estabilizada, microorganismos benéficos y nutrientes de liberación gradual, mejorando las propiedades físicas, químicas y biológicas del suelo.',
    composition: [
      'Materia orgánica ≥ 40%',
      'Nitrógeno total 1,5–2%',
      'Fósforo (P₂O₅) 0,8%',
      'Potasio (K₂O) 1,2%',
      'pH 6,5–7,5',
      'Humedad ≤ 35%',
    ],
    benefits: [
      'Mejora la estructura del suelo',
      'Incrementa la retención de agua',
      'Favorece el desarrollo radicular',
      'Estimula la actividad biológica',
      'Reduce la compactación',
      'Aporta nutrientes de liberación gradual',
    ],
    applications: [
      'Mezclar con el suelo antes de plantar',
      'Aplicar como cobertura superficial',
      'Reincorporar periódicamente',
    ],
    crops: ['Jardines', 'Paisajismo', 'Parques', 'Plazas', 'Canteros', 'Césped', 'Viveros'],
    packaging: ['A granel', 'Big Bag', 'Bolsas de 50, 25 y 5 dm³'],
    storage: 'Conservar en un lugar seco, protegido de la lluvia y de la luz solar directa.',
    applicationsTitle: 'Cómo usar',
    cropsLabel: 'Aplicaciones recomendadas',
  },
  {
    slug: 'tierra-fertil',
    name: 'HiSoil Tierra Fértil',
    short: 'Tierra enriquecida lista para jardinería, paisajismo y espacios verdes.',
    line: 'paisajismo',
    Icon: TreePine,
    image: imgTierraFertil,
    format: 'A granel · Big Bag · Bolsas de 50, 25 y 5 dm³',
    usage: 'Plantación, nivelación y preparación de suelos',
    description:
      'Mezcla premium elaborada a partir de tierra seleccionada y compost HiSoil estabilizado, lista para usar.',
    composition: ['Tierra vegetal seleccionada', 'Compost HiSoil Premium'],
    benefits: [
      'Lista para usar',
      'Excelente estructura',
      'Favorece el drenaje',
      'Enriquecida con materia orgánica',
      'Homogénea',
      'Ideal para mejorar suelos',
    ],
    applications: [
      'Preparación de canteros',
      'Plantación de árboles y césped',
      'Relleno y nivelación',
    ],
    crops: ['Jardines', 'Parques', 'Viveros', 'Macetas', 'Arbolado urbano'],
    packaging: ['A granel', 'Big Bag', 'Bolsas de 50, 25 y 5 dm³'],
    storage: 'Conservar en un lugar seco, protegido de la lluvia y de la luz solar directa.',
    applicationsTitle: 'Cómo usar',
    cropsLabel: 'Aplicaciones recomendadas',
  },
  {
    slug: 'level',
    name: 'HiSoil Level',
    short: 'Sustrato para nivelación, preparación y acondicionamiento de terrenos.',
    line: 'paisajismo',
    Icon: TreePine,
    format: 'A granel · Big Bag',
    usage: 'Nivelación y preparación de superficies',
    description:
      'Sustrato técnico elaborado a partir de suelo seleccionado, compost HiSoil y agregados minerales para la preparación de terrenos.',
    composition: ['Suelo seleccionado', 'Compost HiSoil', 'Arena clasificada'],
    benefits: [
      'Nivelación uniforme',
      'Favorece el drenaje',
      'Aporta materia orgánica',
      'Excelente homogeneidad',
      'Reduce tiempos de obra',
    ],
    applications: [
      'Nivelación de parques',
      'Preparación para césped',
      'Relleno y acondicionamiento',
    ],
    crops: ['Parques', 'Canchas', 'Barrios privados', 'Espacios públicos'],
    packaging: ['A granel', 'Big Bag'],
    storage: 'Conservar en un lugar seco, protegido de la lluvia y de la luz solar directa.',
    applicationsTitle: 'Cómo usar',
    cropsLabel: 'Aplicaciones recomendadas',
  },
  {
    slug: 'outdoor',
    name: 'HiSoil Outdoor',
    short: 'Sustrato profesional para plantas de exterior, jardines y paisajismo.',
    line: 'paisajismo',
    Icon: TreePine,
    image: imgOutdoor,
    format: 'A granel · Big Bag · Bolsas de 50, 25 y 5 dm³',
    usage: 'Plantación y trasplante',
    description:
      'Sustrato profesional formulado para plantas de exterior con excelente equilibrio entre aireación y retención de humedad.',
    composition: ['Turba negra', 'Corteza compostada', 'Compost HiSoil', 'Perlita'],
    benefits: [
      'Excelente aireación',
      'Alta estabilidad',
      'Resiste ciclos de humedad-sequía',
      'Reduce el estrés del trasplante',
    ],
    applications: ['Macetas', 'Canteros', 'Terrazas y jardines'],
    crops: ['Ornamentales', 'Arbustos', 'Árboles', 'Paisajismo'],
    packaging: ['A granel', 'Big Bag', 'Bolsas de 50, 25 y 5 dm³'],
    storage: 'Conservar en un lugar seco, protegido de la lluvia y de la luz solar directa.',
    applicationsTitle: 'Cómo usar',
    cropsLabel: 'Aplicaciones recomendadas',
  },
  {
    slug: 'indoor',
    name: 'HiSoil Indoor',
    short: 'Sustrato profesional para plantas de interior y decoración vegetal.',
    line: 'paisajismo',
    Icon: TreePine,
    format: 'A granel · Big Bag · Bolsas de 50, 25 y 5 dm³',
    usage: 'Plantación y trasplante',
    description:
      'Sustrato profesional para plantas de interior con óptima aireación, retención de humedad y estabilidad física.',
    composition: ['Turba sphagnum', 'Corteza compostada', 'Compost HiSoil', 'Perlita'],
    benefits: [
      'Excelente retención de humedad',
      'Favorece raíces vigorosas',
      'Liviano',
      'Reduce el estrés del trasplante',
    ],
    applications: ['Plantas de interior', 'Macetas', 'Renovación parcial del sustrato'],
    crops: ['Follajes', 'Oficinas', 'Jardines de invierno', 'Decoración vegetal'],
    packaging: ['A granel', 'Big Bag', 'Bolsas de 50, 25 y 5 dm³'],
    storage: 'Conservar en un lugar seco, protegido de la lluvia y de la luz solar directa.',
    applicationsTitle: 'Cómo usar',
    cropsLabel: 'Aplicaciones recomendadas',
  },
  {
    slug: 'greenroof',
    name: 'HiSoil Green Roof',
    short: 'Sustrato técnico liviano para techos verdes, terrazas y cubiertas vegetadas.',
    line: 'paisajismo',
    Icon: TreePine,
    image: imgGreenroof,
    format: 'A granel · Big Bag',
    usage: 'Techos verdes extensivos e intensivos',
    description:
      'Sustrato técnico para cubiertas vegetadas con excelente relación entre peso, drenaje y retención de humedad.',
    composition: [
      'Ladrillo molido',
      'Piedra pómez (pumita)',
      'Carbonilla',
      'Turba sphagnum',
      'Compost HiSoil',
    ],
    benefits: [
      'Bajo peso volumétrico',
      'Excelente drenaje',
      'Alta estabilidad',
      'Favorece el desarrollo radicular',
      'Ideal para infraestructura verde',
    ],
    applications: ['Techos verdes extensivos', 'Techos verdes intensivos', 'Terrazas ajardinadas'],
    crops: ['Cubiertas vegetadas', 'Arquitectura sustentable', 'Infraestructura verde'],
    packaging: ['A granel', 'Big Bag'],
    storage: 'Conservar en un lugar seco, protegido de la lluvia y de la luz solar directa.',
    applicationsTitle: 'Cómo usar',
    cropsLabel: 'Aplicaciones recomendadas',
    highlight:
      'Ideal para arquitectos, paisajistas, constructoras, desarrolladores inmobiliarios y municipios que incorporan soluciones basadas en la naturaleza para mejorar el desempeño ambiental de sus proyectos.',
  },

  // ═══════════════ INFRAESTRUCTURA ═══════════════
  {
    slug: 'restore',
    name: 'HiSoil Restore',
    short:
      'Sustrato profesional para recuperación integral de suelos degradados y revegetación ambiental.',
    line: 'infraestructura',
    Icon: Mountain,
    image: imgRestore,
    format: 'Big Bag 1 m³ · A granel',
    usage: 'Capa de 10 a 20 cm de espesor',
    badge: 'Obra pública',
    description:
      'HiSoil Restore es un sustrato técnico especialmente desarrollado para la recuperación de suelos degradados y la restauración de áreas afectadas por actividades extractivas, movimientos de suelo, obras de infraestructura, incendios o erosión severa. Su formulación combina materia orgánica estabilizada, componentes minerales seleccionados y bioinsumos que mejoran las propiedades físicas, químicas y biológicas del suelo, favoreciendo el establecimiento rápido de la vegetación y la recuperación progresiva del ecosistema. Gracias a su elevada estabilidad estructural y capacidad de retención de agua, proporciona un medio ideal para el desarrollo radicular, disminuye los procesos erosivos y acelera la implantación de especies herbáceas, arbustivas o arbóreas. Es una solución especialmente indicada para proyectos de restauración ambiental, compensaciones ecológicas, obras públicas y privadas, minería, petróleo, gas y recuperación de áreas degradadas.',
    composition: [
      'Compost de alta estabilidad biológica',
      'Suelo vegetal mejorado',
      'Materiales minerales estructurales',
      'Agentes aireadores',
      'Bioinsumos y microorganismos benéficos',
      'Acondicionadores naturales de suelo',
    ],
    benefits: [
      'Favorece una rápida revegetación del terreno',
      'Incrementa el contenido de materia orgánica del suelo',
      'Mejora la infiltración y retención de agua',
      'Reduce significativamente la erosión hídrica y eólica',
      'Favorece el desarrollo de raíces profundas',
      'Incrementa la actividad biológica del suelo',
      'Mejora la estructura física de terrenos compactados',
      'Reduce la pérdida de nutrientes',
      'Disminuye el mantenimiento posterior',
      'Fácil aplicación mediante maquinaria convencional',
      'Ideal para grandes superficies',
      'Contribuye a la recuperación de ecosistemas degradados',
    ],
    applications: [
      'Revegetación de taludes: capa uniforme de 10 a 20 cm, compactar ligeramente y sembrar inmediatamente',
      'Canteras y minas: distribuir sobre superficie previamente conformada, implantar especies adaptadas a la zona',
      'Obras viales: aplicar sobre banquinas, terraplenes y taludes, complementar con hidrosiembra cuando corresponda',
      'Recuperación de áreas degradadas: incorporar superficialmente para acelerar la regeneración del suelo',
    ],
    crops: [
      'Restauración de suelos degradados',
      'Canteras',
      'Minas a cielo abierto',
      'Taludes ferroviarios y viales',
      'Terraplenes',
      'Obras hidráulicas',
      'Gasoductos y oleoductos',
      'Parques industriales',
      'Obras civiles',
      'Restauración post-incendio',
      'Áreas de compensación ambiental',
      'Paisajismo de gran escala',
    ],
    certifications: ['Apto para obra pública y proyectos ambientales'],
    packaging: ['Big Bag 1 m³', 'A granel'],
    storage:
      'Conservar en un lugar seco, protegido de la lluvia y de la radiación solar directa. Mantener el producto sobre superficies limpias y evitar el contacto con contaminantes. En presentaciones a granel, se recomienda cubrir el material con lona permeable durante el almacenamiento prolongado.',
  },
  {
    slug: 'hydromulch',
    name: 'HiSoil HydroMulch',
    short:
      'Sistema profesional de hidrosiembra para revegetación, control de erosión y restauración ambiental.',
    line: 'infraestructura',
    Icon: Mountain,
    image: imgHydromulch,
    format: 'Servicio de hidrosiembra',
    usage: 'Taludes · Banquinas · Canteras · Grandes superficies',
    description:
      'HiSoil HydroMulch es una mezcla técnica especialmente formulada para la aplicación mediante hidrosiembra, diseñada para lograr una rápida implantación vegetal y brindar protección inmediata contra la erosión en superficies con pendiente o de difícil acceso. Su composición integra fibras vegetales, semillas adaptadas al ambiente, fertilizantes de implantación y aditivos biodegradables que generan una cobertura uniforme sobre el terreno, favoreciendo la retención de humedad, la germinación y el establecimiento de la vegetación. La aplicación hidráulica permite cubrir rápidamente grandes extensiones de terreno con excelente homogeneidad, reduciendo tiempos de obra y costos operativos respecto a métodos tradicionales de siembra. Es una solución ideal para proyectos de infraestructura, minería, petróleo, gas, recuperación ambiental y estabilización de suelos.',
    composition: [
      'Fibras vegetales biodegradables',
      'Semillas seleccionadas según la región y el proyecto',
      'Fertilizantes de implantación',
      'Aglomerantes naturales biodegradables',
      'Bioestimulantes',
      'Retenedores de humedad',
      'Colorante natural para control visual de la aplicación',
    ],
    benefits: [
      'Rápida implantación de la cobertura vegetal',
      'Protección inmediata frente a la erosión hídrica y eólica',
      'Excelente adherencia sobre superficies inclinadas',
      'Aplicación uniforme y de alta productividad',
      'Favorece la retención de humedad',
      'Reduce el escurrimiento superficial',
      'Mejora el porcentaje de germinación',
      'Disminuye la pérdida de suelo',
      'Ideal para zonas de difícil acceso',
      'Compatible con mezclas de semillas nativas o específicas para cada proyecto',
      'Solución eficiente para grandes superficies',
      'Reduce tiempos de ejecución de obra',
    ],
    applications: [
      'Taludes y terraplenes: cobertura uniforme sobre toda la superficie para proteger el suelo desde el primer momento',
      'Canteras y minería: mezcla adaptada con especies vegetales apropiadas para la restauración ambiental del sitio',
      'Obras viales: aplicar sobre banquinas, terraplenes y taludes inmediatamente después de finalizar los movimientos de suelo',
      'Grandes superficies: parques industriales, obras civiles, rellenos sanitarios, gasoductos, oleoductos y proyectos de infraestructura',
    ],
    crops: [
      'Taludes viales',
      'Banquinas',
      'Ferrocarriles',
      'Canteras',
      'Minas',
      'Oleoductos',
      'Gasoductos',
      'Obras hidráulicas',
      'Parques industriales',
      'Rellenos sanitarios',
      'Restauración ambiental',
      'Áreas degradadas',
      'Grandes superficies con difícil acceso',
    ],
    packaging: ['Consultar por servicio de hidrosiembra'],
    storage:
      'Conservar el producto en un lugar seco, ventilado y protegido de la humedad y de la radiación solar directa. Mantener los envases correctamente cerrados hasta el momento de su utilización para preservar la calidad de las semillas y de los componentes de la mezcla.',
  },
  {
    slug: 'erosion',
    name: 'HiSoil Erosion',
    short: 'Sistema profesional para control de erosión y estabilización de suelos.',
    line: 'infraestructura',
    Icon: Mountain,
    format: 'Producto en desarrollo',
    usage: 'Taludes · Banquinas · Márgenes de ríos',
    status: 'a-desarrollar',
    description:
      'HiSoil Erosion estabiliza el terreno desde el primer momento, reduciendo la erosión y creando las condiciones ideales para el establecimiento de la vegetación. Actualmente se encuentra en etapa de desarrollo, con soluciones adaptables a las necesidades específicas de cada proyecto de restauración ambiental e infraestructura.',
    composition: ['Producto en desarrollo — consultar formulaciones específicas según proyecto'],
    benefits: [
      'Estabilización inmediata del terreno',
      'Reducción de procesos erosivos',
      'Condiciones ideales para el establecimiento de la vegetación',
      'Soluciones adaptables a cada proyecto',
    ],
    applications: [
      'Taludes',
      'Banquinas',
      'Márgenes de ríos y arroyos',
      'Canteras',
      'Obras viales',
      'Restauración ambiental',
    ],
    crops: [
      'Taludes',
      'Banquinas',
      'Márgenes de ríos y arroyos',
      'Canteras',
      'Obras viales',
      'Restauración ambiental',
    ],
    packaging: ['Producto en desarrollo — consultar disponibilidad'],
    storage: 'Consultar condiciones específicas de almacenamiento según formulación.',
  },
  {
    slug: 'native',
    name: 'HiSoil Native',
    short:
      'Mezclas profesionales de semillas nativas para restauración ecológica y revegetación de ecosistemas.',
    line: 'infraestructura',
    Icon: Mountain,
    image: imgNative,
    format: 'Producto en desarrollo',
    usage: 'Mezclas formuladas según ecorregión',
    status: 'a-desarrollar',
    description:
      'HiSoil Native desarrolla mezclas de semillas adaptadas a cada región del país para favorecer la recuperación de ecosistemas, la biodiversidad y la estabilidad del suelo. Se trata de una línea actualmente en desarrollo, formulada específicamente para proyectos de restauración ecológica y compensación ambiental.',
    composition: [
      'Producto en desarrollo — mezclas formuladas específicamente para cada ecorregión',
    ],
    benefits: [
      'Favorece la recuperación de ecosistemas',
      'Promueve la biodiversidad local',
      'Contribuye a la estabilidad del suelo',
      'Mezclas específicas por región y proyecto',
    ],
    applications: [
      'Restauración ecológica',
      'Compensaciones ambientales',
      'Áreas protegidas',
      'Obras de infraestructura',
      'Minería',
      'Recuperación de ecosistemas degradados',
    ],
    crops: [
      'Restauración ecológica',
      'Compensaciones ambientales',
      'Áreas protegidas',
      'Obras de infraestructura',
      'Minería',
      'Recuperación de ecosistemas degradados',
    ],
    packaging: [
      'Producto en desarrollo — consultar disponibilidad de especies y desarrollos específicos',
    ],
    storage: 'Consultar condiciones específicas de almacenamiento según formulación.',
  },
];

export function getProductBySlug(slug: string): ProductDetail | undefined {
  return products.find((p) => p.slug === slug);
}

/**
 * Returns true if the product belongs to the compost family
 * (uses the "Tierra Cálida" warm palette instead of Hisoil green).
 */
export function isCompostProduct(slug: string): boolean {
  const compostSlugs = new Set(['compost', 'compost-paisajismo', 'humic', 'carbon', 'regenera']);
  return compostSlugs.has(slug);
}

export function getRelatedProducts(slug: string, line: ProductLine, limit = 3): ProductDetail[] {
  return products.filter((p) => p.line === line && p.slug !== slug).slice(0, limit);
}

export const lineLabels: Record<ProductLine, string> = {
  agricultura: 'Agricultura',
  sustratos: 'Sustratos Profesionales',
  materiasprimas: 'Materias Primas',
  paisajismo: 'Sustratos',
  infraestructura: 'Infraestructura & Restauración',
};
