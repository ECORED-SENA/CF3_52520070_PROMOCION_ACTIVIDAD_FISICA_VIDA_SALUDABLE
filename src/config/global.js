export default {
  global: {
    componenteFormativo:
      'Promoción de la actividad física y estilos de vida saludable',
    descripcionCurso:
      'Este componente formativo aborda teorías de cambios comportamentales y recomendaciones sobre la actividad física para promover la salud. Explica modelos como el transteórico, la teoría de la autoeficacia, la motivación multidimensional, y el modelo ecológico. Ofrece pautas específicas para diferentes grupos etarios, personas con capacidades diferentes, y mujeres embarazadas, con el fin de prevenir enfermedades no transmisibles (ENT).',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Modelo transteórico ',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Teoría del comportamiento planificado',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Teoría de la autoeficacia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Escala multidimensional de la motivación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Modelo ecológico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Recomendaciones para la promoción de la actividad física (AF)',
        desarrolloContenidos: true,
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: 'Modelo transteórico',
      referencia:
        'Antena Lince UAdeO. (2024). Modelo Transteórico del Cambio | Entiende Tu Mente. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=OO7MbfdNafc',
    },
    {
      tema: 'Teoría del comportamiento planificado',
      referencia:
        'Dr. Samuel Fernández. Escuela de Psicología. (2021). La teoría de la acción planificada con ejemplos. Azjen (1991). [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=MLqOhNFzPqQ',
    },
    {
      tema: 'Teoría de la autoeficacia',
      referencia:
        'Bluecinante. (2023). ¿Qué es la AUTOEFICACIA?. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=XETTmLHShbg',
    },
    {
      tema: 'Modelo ecológico',
      referencia:
        'Psicoactiva. (2021). La teoría ecológica de Bronfenbrenner sobre la educación de nuestros hijos. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=W55jkgUd_ns',
    },
    {
      tema: 'Recomendaciones de Actividad Física (AF)',
      referencia: 'OMS. (2024). Actividad física.',
      tipo: 'Artículo',
      link:
        'https://www.who.int/es/news-room/fact-sheets/detail/physical-activity',
    },
  ],
  glosario: [
    {
      termino: 'Actividad física moderada',
      significado:
        'actividad que implica un esfuerzo físico moderado, donde el ritmo cardíaco se acelera, como caminar rápido o nadar.',
    },
    {
      termino: 'Actividad física',
      significado:
        'cualquier movimiento corporal producido por los músculos esqueléticos que requiere gasto de energía.',
    },
    {
      termino: 'Autoeficacia',
      significado:
        'confianza de una persona en su capacidad para ejecutar comportamientos específicos de manera exitosa.',
    },
    {
      termino: 'Enfermedades no transmisibles (ENT)',
      significado:
        'enfermedades crónicas como las cardiovasculares, respiratorias crónicas, diabetes y cáncer, que no se transmiten de persona a persona.',
    },
    {
      termino: 'Estilos de vida saludable',
      significado:
        'conjunto de hábitos y comportamientos que promueven el bienestar físico, mental y social, como la alimentación equilibrada y la actividad física regular.',
    },
    {
      termino: 'Modelo ecológico',
      significado:
        'teoría que analiza el comportamiento humano desde una perspectiva de interacciones entre el individuo y su entorno en múltiples niveles.',
    },
    {
      termino: 'Modelo transteórico',
      significado:
        'teoría que explica el cambio de comportamiento a través de cinco etapas: precontemplación, contemplación, preparación, acción y mantenimiento.',
    },
    {
      termino: 'Motivación extrínseca',
      significado:
        'impulso para realizar una acción motivado por recompensas o reconocimientos externos.',
    },
    {
      termino: 'Motivación intrínseca',
      significado:
        'impulso para realizar una acción debido a la satisfacción interna que genera, sin necesidad de recompensas externas.',
    },
    {
      termino: 'Teoría de la autoeficacia',
      significado:
        'teoría que sostiene que la creencia en la capacidad propia para realizar una tarea influye en la probabilidad de éxito al ejecutarla.',
    },
  ],
  referencias: [
    {
      referencia:
        'Anta, R. M. O., López-Sobaler, A. M., y Pérez-Farinós, N. (2013). Associated factors of obesity in Spanish representative samples. <em>Nutr Hosp, 28</em>(Supl|5), 56-62.',
      link: '',
    },
    {
      referencia:
        'Cabrera, G., Gómez, L., y Mateus, J. C. (2013). Actividad física y etapas de cambio comportamental en Bogotá.',
      link: '',
    },
    {
      referencia:
        'Garber, C. E., Blissmer, B., Deschenes, M. R., Franklin, B. A., Lamonte, M. J., Lee, I. M., y Swain, D. P. (2011). American College of Sports Medicine position stand: Quantity and quality of exercise for developing and maintaining cardiorespiratory, musculoskeletal, and neuromotor fitness in apparently healthy adults: Guidance for prescribing exercise. <em>Medicine and Science in Sports and Exercise, 43</em>(7), 1334-1359.',
      link: '',
    },
    {
      referencia:
        'García, J. C. S., Rodríguez-Blanque, R., Villar, N. M., Sánchez-López, A. M., Hernández, M. C. L., y Aguilar-Cordero, M. J. (2016). Influencia del ejercicio físico sobre la calidad de vida durante el embarazo y el posparto: Revisión sistemática. <em>Nutrición Hospitalaria, 33</em>(5).',
      link: '',
    },
    {
      referencia:
        'Gómez, J. C. (2016). Actividad física y factores de riesgo cardiovascular en niños y adolescentes. <em>VIREF Revista de Educación Física, 5</em>(1), 70-86.',
      link: '',
    },
    {
      referencia:
        'Kim, E. Y., Kim, S. Y., y Oh, D. W. (2012). Pelvic floor muscle exercises utilizing trunk stabilization for treating postpartum urinary incontinence: Randomized controlled pilot trial of supervised versus unsupervised training. <em>Clinical Rehabilitation, 26</em>(2), 132-141.',
      link: '',
    },
    {
      referencia:
        'Nelson, M. E., Rejeski, W. J., Blair, S. N., Duncan, P. W., Judge, J. O., King, A. C., y Castaneda-Sceppa, C. (2007). Physical activity and public health in older adults: Recommendation from the American College of Sports Medicine and the American Heart Association. <em>Circulation, 116</em>(9), 1094-1105.',
      link: '',
    },
    {
      referencia:
        'Romo-Pérez, V., García-Soidán, J. L., y Minguet, J. C. (2016). Circuitos biosaludables y cumplimiento de las recomendaciones sobre actividad física para mayores. <em>Revista Internacional de Medicina y Ciencias de la Actividad Física y del Deporte</em>, (47).',
      link: '',
    },
    {
      referencia:
        'Salgado-Araujo, J. L. M. (1998). Revisión de la literatura actual sobre la continuidad del cambio de conducta en relación a la actividad física. <em>Apunts: Educación Física y Deportes, 4</em>(54), 66-77.',
      link: '',
    },
    {
      referencia:
        'Seneviratne, S. N., Parry, G. K., McCowan, L. M., Ekeroma, A., Jiang, Y., Gusso, S., y Hofman, P. L. (2014). Antenatal exercise in overweight and obese women and its effects on offspring and maternal health: Design and rationale of the IMPROVE (Improving Maternal and Progeny Obesity Via Exercise) randomized controlled trial. <em>BMC Pregnancy and Childbirth, 14</em>(1), 1.',
      link: '',
    },
    {
      referencia:
        'World Health Organization. (2010). <em>Recomendaciones mundiales sobre actividad física para la salud</em>.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Leidy del Pilar Aguirre Caicedo',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Risaralda',
        },
        {
          nombre: 'Paola Alexandra Moya ',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
