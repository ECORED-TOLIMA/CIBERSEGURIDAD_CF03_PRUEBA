export default {
  global: {
    componenteFormativo:
      'Seguridad en redes, protección de datos y políticas en ciberseguridad.',
    descripcionCurso:
      'En un entorno digital en constante evolución, garantizar la seguridad de la información es esencial. Este componente formativo aborda los fundamentos de la ciberseguridad, la protección de redes, la gestión de datos personales y las políticas organizacionales, incorporando estándares como ISO 27001 y herramientas prácticas para mitigar riesgos y enfrentar amenazas cibernéticas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
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
        titulo: 'Seguridad en redes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos asociados a la seguridad en redes',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Modelo OSI y su relación con la ciberseguridad',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Topologías de red',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Controles típicos de seguridad en una red',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Casos reales de seguridad en redes',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Seguridad en redes inalámbricas',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Protección de datos personales y privacidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Habeas Data y normatividad relacionada',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Herramientas de ciberseguridad',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Buenas prácticas para la ciberseguridad y el ciberespacio',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Las políticas y documentación en ciberseguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Administración de la Política de Seguridad de la Información',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Documentación derivada de la política',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Norma ISO 27001 y otros estándares',
            hash: 't_3_3',
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
  complementario: [
    {
      tema: '1. Seguridad en redes',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). Seguridad en la red [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=TwacC-0rwFs&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
    {
      tema: '2. Protección de datos personales y privacidad',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). Buenas prácticas y criterios de seguridad en la red [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=ODHXTKN4-Ok&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
    {
      tema: '3. Las políticas y documentación en ciberseguridad',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Ataques a la seguridad de la red [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=x56FT_OVARQ&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
  ],
  glosario: [
    {
      termino: 'Autenticación Multifactor (MFA)',
      significado:
        'método de seguridad que requiere múltiples formas de verificación para acceder a un sistema.',
    },
    {
      termino: 'Confidencialidad',
      significado:
        'principio que garantiza que la información solo sea accesible para usuarios autorizados.',
    },
    {
      termino: 'Cifrado',
      significado:
        'proceso de codificar datos para proteger su confidencialidad durante la transmisión o almacenamiento.',
    },
    {
      termino: '<em>Firewall</em>',
      significado:
        'sistema que filtra el tráfico de red para bloquear accesos no autorizados.',
    },
    {
      termino: 'GDPR (Reglamento General de Protección de Datos)',
      significado:
        'normativa europea que regula el tratamiento de datos personales.',
    },
    {
      termino: 'Habeas Data',
      significado:
        'derecho que permite a las personas controlar su información personal en bases de datos.',
    },
    {
      termino: 'IDS/IPS (Sistemas de Detección y Prevención de Intrusiones)',
      significado:
        'herramientas que monitorean y bloquean actividades maliciosas en redes.',
    },
    {
      termino: 'Integridad',
      significado:
        'principio que asegura que los datos no sean alterados de manera no autorizada.',
    },
    {
      termino: 'ISO 27001',
      significado:
        'estándar internacional para implementar Sistemas de Gestión de Seguridad de la Información (SGSI).',
    },
    {
      termino: 'Modelo OSI (Open Systems Interconnection)',
      significado:
        'marco teórico de siete capas que describe cómo se comunican los sistemas en una red.',
    },
    {
      termino: 'Privacidad',
      significado:
        'derecho a controlar cómo se recopila, usa y comparte la información personal.',
    },
    {
      termino: 'Riesgo',
      significado:
        'posibilidad de que una amenaza explote una vulnerabilidad, causando daños.',
    },
    {
      termino: 'Segmentación de red',
      significado:
        'división de una red en partes para limitar el acceso y contener brechas.',
    },
    {
      termino: 'VPN (Red Privada Virtual)',
      significado:
        'tecnología que cifra la conexión a Internet para proteger la privacidad.',
    },
    {
      termino: 'WPA2/WPA3',
      significado:
        'protocolos de cifrado para redes inalámbricas que evitan accesos no autorizados.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asociación Española de Normalización (UNE). (2021). Publicada la Norma UNE-EN ISO/IEC 27701 para la Gestión de la Privacidad de la Información.',
      link:
        'https://www.une.org/la-asociacion/sala-de-informacion-une/notas-de-prensa/publicada-la-norma-une-en-isoiec-27701-para-la-gestion-de-la-privacidad-de-la-informacion/ ',
    },
    {
      referencia:
        'Caballero Velasco, M. Á. (2015). El libro del hacker. Anaya Multimedia.',
      link: '',
    },
    {
      referencia:
        'Cano, J. E. (2018). Ciberseguridad y protección de datos personales en Colombia. Ediciones Jurídicas Gustavo Ibáñez.',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (2012). Ley 1581 de 2012 por la cual se dictan disposiciones generales para la protección de datos personales.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981',
    },
    {
      referencia:
        'Congreso de Colombia. (2013). Decreto 1377 de 2013 reglamentario de la Ley 1581 de 2012.',
      link: '',
    },
    {
      referencia:
        'Ferrer, E. A. (2023). Estudios de cibercrimen. Ediciones Olejnik.',
      link: '',
    },
    {
      referencia:
        'Gómez, L. A., & Rodríguez, M. P. (2020). Gestión de riesgos en seguridad informática: Enfoque práctico para organizaciones colombianas. Editorial Universidad del Rosario.',
      link: '',
    },
    {
      referencia:
        'Instituto Nacional de Ciberseguridad de España (INCIBE). (2022). Guía de introducción a la ciberseguridad.',
      link: '',
    },
    {
      referencia:
        'Instituto Nacional de Tecnologías de la Comunicación (INTECO). (2017). Guía para la implementación de ISO 27001 en pymes.',
      link: '',
    },
    {
      referencia:
        'ISACA. (2013). COBIT 5: A business framework for the governance and management of enterprise IT. ISACA.',
      link: '',
    },
    {
      referencia:
        'Joyanes Aguilar, L. (2018). Industria 4.0: La cuarta revolución industrial. Alfaomega.',
      link: '',
    },
    {
      referencia:
        'Martínez, R. H. (2019). Protección de datos y habeas data en Latinoamérica. Editorial Legis.',
      link: '',
    },
    {
      referencia:
        'National Institute of Standards and Technology (NIST). (2018). Framework for improving critical infrastructure cybersecurity – Version 1.1.',
      link: 'https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.04162018.pdf ',
    },
    {
      referencia:
        'National Institute of Standards and Technology (NIST). (2024). The NIST Cybersecurity Framework (CSF) 2.0.',
      link: 'https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf',
    },
    {
      referencia:
        'Organización Internacional de Normalización (ISO). (2015). ISO/IEC 27032:2012 Guidelines for cybersecurity.',
      link: '',
    },
    {
      referencia:
        'Organización Internacional de Normalización (ISO). (2022). ISO/IEC 27001:2022 Information security, cybersecurity and privacy protection - Information security management systems - Requirements. ',
      link: 'https://www.iso.org/standard/54534.html',
    },
    {
      referencia:
        'Paredes, A. R. Z., Quevedo, I. M. S., & Chalacán, L. J. M. (2020). Seguridad informática en las PyMES de la ciudad de Quevedo. Journal of Business and Entrepreneurial Studies: JBES, 4(2), 232–241.',
      link: '',
    },
    {
      referencia:
        'Pérez, C. A., & González, F. J. (2021). Seguridad en redes y criptografía aplicada. Ediciones de la U.',
      link: '',
    },
    {
      referencia:
        'Perlroth, N. (2017). All 3 Billion Yahoo Accounts Were Affected by 2013 Attack. The New York Times.',
      link:
        'https://www.nytimes.com/2017/10/03/technology/yahoo-hack-3-billion-users.html',
    },
    {
      referencia:
        'Ramírez, E. M. (2017). Manual de cumplimiento GDPR para empresas colombianas. Editorial Temis.',
      link: '',
    },
    {
      referencia:
        'Rincón, O. L. (2022). Ciberseguridad estratégica: Enfoque desde la normativa colombiana. Universidad Externado de Colombia.',
      link: '',
    },
    {
      referencia:
        'Stallings, W. (2019). Cryptography and network security: Principles and practice (7th ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Superintendencia de Industria y Comercio (SIC). (2020). Guía para la implementación del Principio de Responsabilidad Demostrada.',
      link: '',
    },
    {
      referencia:
        'Tanenbaum, A. S., & Wetherall, D. J. (2011). Computer networks (5th ed.). Pearson Education.',
      link: '',
    },
    {
      referencia:
        'Wikipedia. (2025, abril 21). Escándalo de datos de Facebook-Cambridge Analytica. Wikipedia. ',
      link:
        'https://es.wikipedia.org/wiki/Esc%C3%A1ndalo_de_datos_de_Facebook-Cambridge_Analytica',
    },
    {
      referencia:
        'Zetter, K. (2016). Inside the Cunning, Unprecedented Hack of Ukraine’s Power Grid. Wired. ',
      link:
        'https://www.wired.com/2016/03/inside-cunning-unprecedented-hack-ukraines-power-grid/ ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Javier Eduardo Díaz Machuca',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>Fullstack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
