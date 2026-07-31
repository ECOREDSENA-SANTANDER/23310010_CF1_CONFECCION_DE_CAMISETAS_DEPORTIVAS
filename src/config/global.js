export default {
  global: {
    Name: 'Maquinaria y sistema de medidas de camisetas deportivas',
    Description:
      'El componente maquinaria y sistema de medidas de camisetas deportivas desarrolla las competencias técnicas para analizar sistemas de medición corporal y de prenda, interpretar y elaborar fichas técnicas especializadas, seleccionar textiles y materiales adecuados para la confección deportiva, identificar y mantener la maquinaria requerida, así como construir patrones básicos aplicados a la camiseta deportiva masculina, en el marco de los estándares de calidad del sector confección industrial colombiano.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Análisis y clasificación de las medidas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Análisis de medidas y tipologías de prendas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipología de prendas',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Textiles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Aprovechamiento de los textiles',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Fichas técnicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Definición y tipos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Características y aplicación',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Maquinaria, materiales e insumos para confección',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Técnicas de manejo',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Usos y aplicaciones',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Insumos: guías, accesorios y agujas',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Mantenimiento preventivo',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Patronaje básico para el trazo de camiseta deportiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Patrones básicos masculinos',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Patrón de camiseta deportiva',
            hash: 't_6_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Aguja industrial',
      significado:
        'Componente metálico intercambiable montado en la barra de aguja de la máquina de coser, cuya selección en términos de número, punta y sistema determina la calidad del punto, la integridad del tejido y la resistencia de la costura en función del tipo de textil procesado.',
    },
    {
      termino: 'Aprovechamiento textil',
      significado:
        'Conjunto de estrategias técnicas orientadas a maximizar el uso del material disponible durante las etapas de tendido, trazo y corte, con el propósito de reducir el desperdicio generado y optimizar el rendimiento del metraje adquirido.',
    },
    {
      termino: 'Camiseta deportiva',
      significado:
        'Prenda superior de punto confeccionada con textiles de alto rendimiento, diseñada para facilitar la libertad de movimiento, gestionar la humedad corporal y mantener la temperatura durante la actividad física, cuya producción requiere el uso de maquinaria especializada y el cumplimiento de parámetros técnicos de calidad definidos en la ficha técnica.',
    },
    {
      termino: 'Clasificación de medidas',
      significado:
        'Proceso técnico mediante el cual se organizan y agrupan las dimensiones corporales o de prenda según criterios de talla, tipología o sistema de medición adoptado, con el fin de establecer rangos estandarizados aplicables a la producción en serie.',
    },
    {
      termino: 'Escala de tallas',
      significado:
        'Sistema de clasificación numérico o alfanumérico que agrupa las medidas corporales en rangos definidos para facilitar la producción, comercialización y adquisición de prendas de vestir, con referencia a normas técnicas nacionales o internacionales según el mercado de destino.',
    },
    {
      termino: 'Ficha técnica de confección',
      significado:
        'Documento de referencia que reúne de forma estructurada las especificaciones técnicas de una prenda, incluyendo materiales, medidas, tolerancias, costuras, acabados, instrucciones de confección y criterios de control de calidad aplicables a cada unidad producida.',
    },
    {
      termino: 'Insumo de confección',
      significado:
        'Material complementario incorporado al proceso productivo que no constituye el textil principal de la prenda, pero que cumple una función técnica o estética determinante en el resultado final; incluye hilos, cierres, elásticos, etiquetas, botones y elementos de acabado.',
    },
    {
      termino: 'Mantenimiento preventivo',
      significado:
        'Conjunto de actividades programadas de inspección, limpieza, lubricación y ajuste realizadas sobre la maquinaria de confección con periodicidad definida, con el propósito de prevenir fallas, prolongar la vida útil del equipo y garantizar la continuidad y calidad del proceso productivo.',
    },
    {
      termino: 'Maquinaria de confección',
      significado:
        'Conjunto de equipos industriales empleados en la transformación del textil en prenda terminada, entre los cuales se incluyen la máquina plana, la fileteadora, la collaretera, la recubridora y la elasticadora, cada una con funciones específicas determinadas por el tipo de costura y el material procesado.',
    },
    {
      termino: 'Patrón de confección',
      significado:
        'Plantilla técnica bidimensional que representa cada pieza de una prenda con sus dimensiones exactas, márgenes de costura, marcas de referencia y señales de construcción, utilizada como guía para el tendido, el trazo y el corte del textil en producción industrial.',
    },
    {
      termino: 'Patronaje básico',
      significado:
        'Disciplina técnica que comprende los procedimientos y cálculos necesarios para construir los moldes originales de una prenda a partir de las medidas corporales de referencia, sin aplicar transformaciones de diseño ni variaciones de estilo.',
    },
    {
      termino: 'Propiedades del textil',
      significado:
        'Características físicas, mecánicas y funcionales de una tela que determinan su comportamiento durante la confección y el uso de la prenda; incluyen elasticidad, recuperación, resistencia a la tensión, transpirabilidad, gestión de humedad y estabilidad dimensional.',
    },
    {
      termino: 'Tabla de medidas',
      significado:
        'Instrumento técnico de referencia que registra de manera organizada las dimensiones corporales o de prenda correspondientes a cada talla de una línea de producción, empleado como base para el patronaje, el control de calidad y la verificación de conformidad del producto terminado.',
    },
    {
      termino: 'Textil deportivo',
      significado:
        'Tejido de punto fabricado con fibras naturales, sintéticas o mixtas, cuyas propiedades técnicas (elasticidad, absorción de humedad, secado rápido, resistencia al <i>pilling</i> y estabilidad dimensional) lo hacen adecuado para la confección de prendas destinadas a la actividad física y el rendimiento deportivo.',
    },
    {
      termino: 'Tipología de prendas',
      significado:
        'Clasificación técnica de las prendas de vestir según criterios de uso, silueta, estructura de construcción y características funcionales, que orienta la selección de materiales, maquinaria y procesos de confección apropiados para cada categoría productiva.',
    },
  ],
  referencias: [
    {
      referencia: 'Gilewska, T. (2009). Patronaje: Las bases. Gustavo Gili.',
      link: '',
    },
    {
      referencia:
        'Gutiérrez Rengifo, L. A., Moncayo Velazco, A. X., Tanaka, K., Kimura, F., & Moreno Brand, D. (2011). Manual de patronaje básico e interpretación de diseños. Servicio Nacional de Aprendizaje (SENA); Agencia de Cooperación Internacional del Japón (JICA).',
      link: '',
    },
    {
      referencia:
        'Kawamura, Y. (2005). Fashion-ology: An introduction to fashion studies. Berg.',
      link: '',
    },
    {
      referencia:
        'Lorenzo, M. R. (2017). Patronaje industrial en textil y piel. Videocinco.',
      link: '',
    },
    {
      referencia:
        'Nakamichi, T. (2012). Pattern magic, vol. 1: La magia del patronaje. Gustavo Gili.',
      link: '',
    },
    {
      referencia:
        'Norton, K., & Eston, R. (Eds.). (2019). Kinanthropometry and exercise physiology (4.ª ed.). Routledge.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2011). Manual de patronaje básico e interpretación de diseños. Regional Distrito Capital, Centro de Manufactura en Textiles y Cuero.',
      link: '',
    },
    {
      referencia:
        'Smith, A. (2014). El gran libro de la costura (Nueva ed.). Blume.',
      link: '',
    },
    {
      referencia:
        'Smith, A. (2023). Corte y confección: Prendas de vestir a medida. Penguin Libros; DK.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico – Regional Santander',
        },
        {
          nombre: 'Angelica Varon Quintero',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturísticod - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Liliana Cristancho Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
