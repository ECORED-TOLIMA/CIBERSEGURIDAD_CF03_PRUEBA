<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Protección de datos personales y privacidad
    
    .bloque-texto-g.bloque-texto-g--inverso.C1.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En la era digital, la protección de los datos personales y la privacidad se ha convertido en un aspecto fundamental. Millones de personas comparten diariamente información en línea sin ser plenamente conscientes de los riesgos asociados. Desde interacciones en redes sociales hasta transacciones bancarias, nuestros datos circulan constantemente por la red, lo que los convierte en un blanco atractivo para los ciberdelincuentes.
        br
        br

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center.align-items-center
          .col-lg-8.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-0
            p El derecho a la privacidad y a la protección de los datos ha motivado la creación de leyes y regulaciones que buscan salvaguardar la información de los ciudadanos. A continuación, se presentan algunos conceptos clave relacionados:
            .tarjeta.tarjeta--BG05.p-1
              .col-12.mb-0.order-lg-1.order-2.mb-lg-0.p-4
                p <b>Datos personales:</b> cualquier información que permita identificar a una persona, como el nombre, dirección, número de teléfono, correo electrónico, información financiera o datos biométricos.
                p <b>Privacidad:</b> es el derecho de cada individuo a controlar su información personal, así como a decidir cómo, cuándo y con quién compartirla.
                p <b>Ciberseguridad:</b> conjunto de medidas y prácticas orientadas a proteger los sistemas informáticos y los datos digitales frente a accesos no autorizados, ataques y otros riesgos.
                p <b>Habeas Data:</b> es un derecho fundamental que permite a cualquier persona conocer, actualizar y rectificar la información personal almacenada en bases de datos públicas o privadas. Está reconocido en legislaciones como el Reglamento General de Protección de Datos (GDPR) en Europa y la Ley de Protección de Datos Personales en varios países de América Latina. Este derecho otorga a los ciudadanos la posibilidad de:
                ul.lista-ul--color.lista-ul.mb-0
                  li.mb-0
                    i.fas.fa-shield
                    p.mb-0 Solicitar información sobre los datos que una organización almacena sobre ellos.
                  li.mb-0
                    i.fas.fa-shield
                    p.mb-0 Rectificar datos incorrectos o desactualizados.
                  li.mb-0
                    i.fas.fa-shield
                    p.mb-0 Eliminar información que ya no sea necesaria o que se haya recolectado de manera indebida.

          .col-lg-4.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema2/img02.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-down") Como un caso real, se encuentra el escándalo de Facebook y Cambridge Analytica, considerado una de las mayores crisis de privacidad de datos en la historia reciente. Este hecho se dio a conocer en 2018, cuando se reveló que la consultora británica Cambridge Analytica accedió de manera indebida a los datos personales de aproximadamente 87 millones de usuarios de Facebook sin su consentimiento.
    
    p.mb-4(data-aos="fade-down") ¿Cómo ocurrió la filtración?

    .tarjeta.tarjeta--BG01.px-md-5.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-10.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0.mb-3(data-aos="flip-down")
          .tarjeta.tarjeta--BG06.p-3
            .row.justify-content-center.align-items-center.mb-3
              .col-auto.mb-3
                figure
                  img(src='@/assets/curso/temas/tema2/img03.svg', alt='Imagen decorativa')
              .col-lg-10.col-12
                p <b>A)</b> En 2014, Aleksandr Kogan, investigador de la Universidad de Cambridge, desarrolló una aplicación llamada This Is Your Digital Life, que ofrecía un test de personalidad.

            .row.justify-content-center.align-items-center.mb-3
              .col-auto.mb-3
                figure
                  img(src='@/assets/curso/temas/tema2/img04.svg', alt='Imagen decorativa')
              .col-lg-10.col-12
                p <b>B)</b> Al instalarla, los usuarios otorgaban acceso a su información y también a la de sus contactos, debido a las políticas permisivas de Facebook en ese momento.

            .row.justify-content-center.align-items-center.mb-3
              .col-auto.mb-3
                figure
                  img(src='@/assets/curso/temas/tema2/img05.svg', alt='Imagen decorativa')
              .col-lg-10.col-12
                p <b>C)</b> Aunque solo 270.000 personas utilizaron la app, se extrajeron datos de millones de perfiles adicionales sin autorización.

            .row.justify-content-center.align-items-center.mb-0
              .col-auto.mb-3
                figure
                  img(src='@/assets/curso/temas/tema2/img06.svg', alt='Imagen decorativa')
              .col-lg-10.col-12
                p <b>D)</b> La información recolectada fue vendida a Cambridge Analytica, que la utilizó para crear perfiles psicológicos y diseñar campañas políticas altamente segmentadas, influyendo en procesos como la elección de Donald Trump (EE.UU., 2016) y el referéndum del Brexit (Reino Unido).

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      P A continuación, se presentan los impacto y consecuencias de esta filtración:            
      .col-12
        .row.justify-content-center.align-items-center
          .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0.mb-0
            ul.lista-ul--color.lista-ul.mb-4
              li.mb-3
                i.fas.fa-shield
                p.mb-0 Facebook fue duramente criticado por su falta de control sobre los datos de los usuarios.
              li.mb-3
                i.fas.fa-shield
                p.mb-0 La empresa fue sancionada con multas millonarias, incluyendo 5.000 millones de dólares por parte de la Comisión Federal de Comercio (FTC) de EE.UU.
              li.mb-3
                i.fas.fa-shield
                p.mb-0 Este escándalo impulsó reformas legales y una mayor conciencia sobre la necesidad de regular el uso de datos personales.
              li.mb-0
                i.fas.fa-shield
                p.mb-0 Cambridge Analytica se disolvió en mayo de 2018, tras la presión internacional y la pérdida de credibilidad.
            p.mb-0 Este caso evidenció la urgente necesidad de que las plataformas digitales adopten políticas más transparentes y responsables frente al tratamiento de los datos personales, así como de fortalecer la legislación en torno a la privacidad y la protección de la información.

          .col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema2/img07.png', alt='Imagen decorativa')
    
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Habeas Data y normatividad relacionada
    
    p.mb-5(data-aos="fade-down") El Habeas Data es un derecho fundamental que garantiza a las personas el control sobre su información personal contenida en bases de datos públicas o privadas. Este derecho protege la privacidad y permite a los ciudadanos conocer, actualizar, rectificar y, en ciertos casos, eliminar sus datos personales cuando hayan sido recolectados o tratados de forma indebida.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center.align-items-center
          .col-lg-9.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-0
            p.mb-4 La finalidad del Habeas Data es garantizar que los datos personales sean tratados conforme a los principios de legalidad, finalidad, libertad, veracidad, transparencia, acceso y seguridad. Su ejercicio fortalece la autonomía del individuo en la era digital y promueve la responsabilidad en el tratamiento de la información.
            p.mb-4 Es importante relacionar las principales facultades del Habeas Data:
            .tarjeta.tarjeta--BG05.p-1
              .col-12.mb-0.order-lg-1.order-2.mb-lg-0.p-4
                ul.lista-ul--color.lista-ul.mb-0
                  li.mb-3
                    i.fas.fa-shield
                    p.mb-0 Consultar los datos personales almacenados por cualquier entidad pública o privada.
                  li.mb-3
                    i.fas.fa-shield
                    p.mb-0 Actualizar y corregir la información que resulte incompleta, inexacta o desactualizada.
                  li.mb-3
                    i.fas.fa-shield
                    p.mb-0 Solicitar la supresión de datos cuyo tratamiento no respete los principios legales o ya no sea necesario.
                  li.mb-0
                    i.fas.fa-shield
                    p.mb-0 Revocar la autorización otorgada para el tratamiento de los datos, cuando no exista una obligación legal o contractual que lo impida.

          .col-lg-3.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema2/img08.jpg', alt='Imagen decorativa')

    .row.mb-5
      .col-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/ico01.svg', alt='Imagen decorativa')
      .col
        p.mb-0 Diversos países han establecido normativas que garantizan el derecho al Habeas Data y regulan el tratamiento de los datos personales, buscando proteger la privacidad de los ciudadanos y establecer responsabilidades claras para quienes gestionan dicha información:

    .row.justify-content-center.mb-5
      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img09.svg' alt="Imagen decorativa" style="width: 120px").m-auto
          .tarjeta.color-hover
            .p-4
              P.mb-0.text-center <b>Colombia:</b> la Ley 1266 de 2008 y la Ley 1581 de 2012 son los principales marcos legales sobre protección de datos personales en Colombia. Estas normas establecen los deberes de los responsables del tratamiento de datos y los derechos de los titulares. Además, la Sentencia C-748 de 2011 de la Corte Constitucional reafirma el Habeas Data como un derecho autónomo e independiente, complementario al derecho a la intimidad.

      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img10.svg' alt="Imagen decorativa" style="width: 120px").m-auto
          .tarjeta.color-hover
            .p-4
              P.mb-0.text-center <b>Unión Europea:</b> el Reglamento General de Protección de Datos (GDPR), en vigor desde 2018, es una de las normativas más estrictas a nivel global. Otorga a los ciudadanos europeos amplios derechos sobre sus datos personales, incluyendo el derecho al olvido y a la portabilidad de datos.

      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img11.svg' alt="Imagen decorativa" style="width: 120px").m-auto
          .tarjeta.color-hover
            .p-4
              P.mb-0.text-center <b>Latinoamérica:</b> países como México, Argentina, Brasil, Chile y Perú han adoptado leyes específicas que reconocen el Habeas Data y regulan el tratamiento de datos personales. La Ley General de Protección de Datos Personales (LGPD) en Brasil es un ejemplo reciente que establece obligaciones similares al GDPR europeo.

    p.mb-0(data-aos="fade-down") En resumen, el Habeas Data no solo protege la privacidad de los ciudadanos, sino que también impone a las organizaciones la responsabilidad de tratar los datos de manera ética, segura y transparente.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Herramientas de ciberseguridad

    p.mb-5(data-aos="fade-down") La ciberseguridad se apoya en diversas herramientas diseñadas para prevenir, detectar y responder a amenazas digitales que pueden comprometer la privacidad, la integridad y la disponibilidad de los datos. Estas herramientas son fundamentales tanto en entornos personales como corporativos, y su uso adecuado fortalece las defensas frente a ciberataques.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema2/img12.svg' alt='AvatarTop')
          h4.text-center Antivirus y <em>antimalware</em>
          p Son programas que detectan, bloquean y eliminan <em>software</em> malicioso, como virus, troyanos, <em>spyware</em> o <em>ransomware</em>. Algunas soluciones modernas, como Bitdefender o Kaspersky, integran motores de análisis en tiempo real y escaneo basado en inteligencia artificial para prevenir amenazas emergentes.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema2/img13.svg' alt='AvatarTop')
          h4.text-center Gestores de contraseñas
          p Permiten crear, almacenar y recuperar contraseñas complejas sin necesidad de memorizarlas. Aplicaciones como LastPass, Bitwarden o 1Password aseguran las credenciales mediante cifrado, ayudando a evitar prácticas inseguras como usar la misma contraseña en múltiples servicios.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema2/img14.svg' alt='AvatarTop')
          h4.text-center Autenticación Multifactor (MFA)
          p Añade una capa extra de seguridad al requerir más de una forma de autenticación para acceder a una cuenta o sistema. Por ejemplo, además de la contraseña, se puede requerir un código enviado al celular o una huella digital. Esto dificulta que un atacante acceda, aunque tenga la clave principal.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema2/img15.svg' alt='AvatarTop')
          h4.text-center Redes Privadas Virtuales (VPN)
          p Cifran el tráfico de internet del usuario y ocultan su dirección IP, proporcionando anonimato y seguridad en redes públicas. Son útiles para proteger la navegación cuando se usa Wi-Fi en lugares como cafeterías o aeropuertos, y para acceder a contenido restringido geográficamente.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema2/img16.svg' alt='AvatarTop')
          h4.text-center <em>Firewalls</em>
          p Actúan como una barrera entre una red segura y otra no confiable, filtrando el tráfico entrante y saliente. Pueden ser de <em>hardware</em> o <em>software</em>, y son esenciales para bloquear accesos no autorizados.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema2/img17.svg' alt='AvatarTop')
          h4.text-center Sistemas de detección y prevención de intrusos (IDS/IPS)
          p Estas herramientas monitorean el tráfico de red en busca de patrones sospechosos. Si se detecta una amenaza, pueden generar alertas (IDS) o actuar directamente para bloquear el ataque (IPS).

    p.mb-0(data-aos="fade-down") El uso combinado de estas herramientas, junto con prácticas seguras como la actualización constante del <em>software</em> y la formación en ciberseguridad, permite mitigar de manera efectiva los riesgos asociados a las amenazas digitales actuales.

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Buenas prácticas para la ciberseguridad y el ciberespacio

    p.mb-5(data-aos="fade-down") La protección de los datos personales y la seguridad en el entorno digital requieren una participación activa tanto del usuario como de las organizaciones. A continuación, se presentan buenas prácticas divididas en dos niveles: el del usuario final y el de la infraestructura tecnológica.

    .titulo.mb-5(data-aos="flip-up")
      img(src='@/assets/curso/temas/ico.svg', alt='Imagen decorativa')
      h4.mb-0 Desde el rol del usuario final

    //- .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
    //-   .col-12
    //-     .row.justify-content-center
    //-       .col-lg-8.col-12.mb-md-0
    //-         LineaTiempoD.color-acento-botones.especial
    //-           .row(numero="A" titulo="Usar contraseñas seguras y diferentes para cada cuenta")
    //-             .col-12.mb-4.mb-md-0
    //-               p.mb-0 Emplear contraseñas robustas es esencial para evitar accesos no autorizados. El uso de gestores de contraseñas como Bitwarden, LastPass o 1Password facilita la creación, almacenamiento y actualización de contraseñas complejas.
              
    //-           .row(numero="B" titulo="Evitar compartir información sensible en redes sociales")
    //-             .col-12.mb-4.mb-md-0
    //-               p.mb-0 Publicar ubicaciones en tiempo real, rutinas o datos familiares puede facilitar ataques dirigidos como el robo de identidad, acoso o fraudes. Los ciberdelincuentes suelen analizar redes sociales para responder preguntas de seguridad o suplantar identidades.

    //-           .row(numero="C" titulo="Revisar los permisos de las aplicaciones antes de instalarlas")
    //-             .col-12.mb-4.mb-md-0
    //-               p.mb-0 Muchas aplicaciones solicitan acceso a funciones innecesarias como micrófono, cámara o geolocalización. Es importante revisar estos permisos para evitar que se recopile o venda información sin consentimiento.

    //-           .row(numero="D" titulo="Actualizar frecuentemente el <em>software</em> y los sistemas operativos")
    //-             .col-12.mb-4.mb-md-0
    //-               p.mb-0 Las actualizaciones corrigen vulnerabilidades críticas. Ignorarlas deja los dispositivos expuestos a ataques como <em>ransomware</em>, <em>spyware</em> o brechas de seguridad.

    //-           .row(numero="E" titulo="Evitar redes Wi-Fi públicas sin protección")
    //-             .col-12.mb-4.mb-md-0
    //-               p.mb-0 Estas redes pueden ser interceptadas por atacantes. El uso de VPN (Red Privada Virtual) es recomendable para cifrar la conexión y proteger la privacidad.

    //-       .col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
    //-         figure
    //-           img(src='@/assets/curso/temas/tema2/img18.jpg', alt='Imagen decorativa')

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-8.col-12.mb-md-0
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--BGC03")
          .row(titulo="Usar contraseñas seguras y diferentes para cada cuenta")
            .col-12.mb-0.mb-md-0
              p.mb-0 Emplear contraseñas robustas es esencial para evitar accesos no autorizados. El uso de gestores de contraseñas como Bitwarden, LastPass o 1Password facilita la creación, almacenamiento y actualización de contraseñas complejas.
            
          .row(titulo="Evitar compartir información sensible en redes sociales")
            .col-12.mb-0.mb-md-0
              p.mb-0 Publicar ubicaciones en tiempo real, rutinas o datos familiares puede facilitar ataques dirigidos como el robo de identidad, acoso o fraudes. Los ciberdelincuentes suelen analizar redes sociales para responder preguntas de seguridad o suplantar identidades.
            
          .row(titulo="Revisar los permisos de las aplicaciones antes de instalarlas")
            .col-12.mb-0.mb-md-0
              p.mb-0 Muchas aplicaciones solicitan acceso a funciones innecesarias como micrófono, cámara o geolocalización. Es importante revisar estos permisos para evitar que se recopile o venda información sin consentimiento.
            
          .row(titulo="Actualizar frecuentemente el <em>software</em> y los sistemas operativos")
            .col-12.mb-0.mb-md-0
              p.mb-0 Las actualizaciones corrigen vulnerabilidades críticas. Ignorarlas deja los dispositivos expuestos a ataques como <em>ransomware</em>, <em>spyware</em> o brechas de seguridad.
            
          .row(titulo="Evitar redes Wi-Fi públicas sin protección")
            .col-12.mb-0.mb-md-0
              p.mb-0 Estas redes pueden ser interceptadas por atacantes. El uso de VPN (Red Privada Virtual) es recomendable para cifrar la conexión y proteger la privacidad.
            
      .col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema2/img18.jpg', alt='Imagen decorativa')

    .titulo.mb-5(data-aos="flip-up")
      img(src='@/assets/curso/temas/ico.svg', alt='Imagen decorativa')
      h4.mb-0 Desde la gestión de la Infraestructura Tecnológica (TI)

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center.align-items-center.tarjeta.tarjeta--BG06
          .col-lg-9.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.p-4
            .row.justify-content-center
              .col-sm.mb-0.mb-sm-0
                ol.lista-ol--cuadro
                  li.mb-4 
                    .lista-ol--cuadro__vineta.v--green
                      span A.
                    p.mb-0 <b>Evaluar los riesgos:</b> conocer qué activos deben protegerse ayuda a asignar recursos y justificar las inversiones en ciberseguridad.
                  li.mb-4 
                    .lista-ol--cuadro__vineta.v--green
                      span B.
                    p.mb-0 <b>Establecer políticas de seguridad:</b> incluir roles claros, normas sobre contraseñas, uso de dispositivos, acceso a la información y acciones frente a incidentes.
                  li.mb-4 
                    .lista-ol--cuadro__vineta.v--green
                      span C.
                    p.mb-0 <b>Implementar medidas de seguridad físicas:</b> controlar el acceso a servidores, redes y espacios críticos, así como contar con sistemas de extinción de incendios adecuados.
                  li.mb-4 
                    .lista-ol--cuadro__vineta.v--green
                      span D.
                    p.mb-0 <b>Controlar los recursos humanos:</b> verificar antecedentes y establecer protocolos de acceso según el perfil de cada trabajador.
                  li.mb-4 
                    .lista-ol--cuadro__vineta.v--green
                      span E.
                    p.mb-0 <b>Realizar copias de seguridad periódicas:</b> es fundamental automatizar respaldos y probar su restauración con regularidad para evitar la pérdida de datos.
                  li.mb-4 
                    .lista-ol--cuadro__vineta.v--green
                      span F.
                    p.mb-0 <b>Mantener los sistemas actualizados:</b> instalar parches de seguridad para prevenir ataques por vulnerabilidades conocidas.
                  li.mb-4 
                    .lista-ol--cuadro__vineta.v--green
                      span G.
                    p.mb-0 <b>Aplicar controles de acceso:</b> definir niveles de privilegio y permisos diferenciados por funciones y áreas.
                  li.mb-4 
                    .lista-ol--cuadro__vineta.v--green
                      span H.
                    p.mb-0 <b>Monitorear la red:</b> usar herramientas de análisis de tráfico, detección de intrusiones y alertas para reaccionar en tiempo real ante amenazas.
                  li.mb-4 
                    .lista-ol--cuadro__vineta.v--green
                      span I.
                    p.mb-0 <b>Capacitar a los usuarios:</b> sensibilizar sobre fraudes comunes como <em>phishing</em>, <em>ransomware</em> o ingeniería social. La educación continua es clave.
                  li.mb-4 
                    .lista-ol--cuadro__vineta.v--green
                      span J.
                    p.mb-0 <b>Cifrar la información:</b> todo dato confidencial (archivos, correos, bases de datos) debe estar cifrado para evitar accesos indebidos incluso si se pierde el dispositivo.
          .col-lg-3.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3.px-0.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema2/img19.png', alt='Imagen decorativa')  

    p.mb-5(data-aos="fade-down") A continuación, se presentan algunos casos representativos que permiten analizar vulnerabilidades comunes en el ámbito digital, así como identificar buenas y malas prácticas en la protección de la información.

    .tarjeta.tarjeta--BG08.p-4.p-md-5.mb-0(data-aos="flip-up")
      .tarjeta.tarjeta--blanca.p-4
        PasosB.color-acento-botones
          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-7.order-lg-1.order-2
              h4 Caso 1. Uso inadecuado de contraseñas
              p Una persona adquiere un nuevo portátil y se le solicita actualizar la contraseña de la red. Al tener dificultades para recordar sus contraseñas personales, consulta a un amigo, quien le sugiere reutilizar una contraseña ya existente. Además, le confiesa que suele anotarlas en la última página de su agenda.
              p <b>Análisis:</b> esta actitud revela una baja cultura de ciberseguridad. Reutilizar contraseñas incrementa el riesgo de accesos no autorizados si alguna de ellas se ve comprometida. Además, almacenarlas en papel sin protección es un riesgo físico evidente. Es recomendable el uso de gestores de contraseñas y autenticación multifactor.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img20.jpg', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-7.order-lg-1.order-2
              h4 Caso 2. Accesos innecesarios a plataformas sensibles
              p Una analista de soporte técnico recibe privilegios de administrador en la plataforma de gestión de clientes debido a un error en la configuración de permisos. Sin ser consciente de ello, accede a información sensible como datos bancarios y contratos.
              p <b>Análisis:</b> este incidente resalta la importancia de implementar controles de acceso adecuados. La falta de segmentación de permisos puede derivar en filtración de información, incluso si el acceso es involuntario. El principio de menor privilegio debe ser una norma básica en la infraestructura TI.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img21.jpg', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-7.order-lg-1.order-2
              h4 Caso 3. <em>Phishing</em> y robo de credenciales
              p Laura, una emprendedora, recibe un correo que simula provenir de su proveedor de pagos. Ingresa sus datos en un enlace falso, lo que resulta en el robo de sus credenciales y movimientos no autorizados en su cuenta bancaria.
              p <b>Análisis:</b> este caso presenta una técnica común de ciberataque, el <em>phishing</em>. Resalta la necesidad de verificar los remitentes, evitar ingresar datos en enlaces no verificados, y contar con protección adicional como la autenticación multifactor. La educación en ciberseguridad es clave para prevenir estos incidentes.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img22.jpg', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-7.order-lg-1.order-2
              h4 Caso 4. <em>Ransomware</em> en el sector salud
              p Una enfermera en un hospital en Bogotá accede a un enlace malicioso desde su correo. Horas después, los sistemas hospitalarios se bloquean con un mensaje de <em>ransomware</em> solicitando un rescate en criptomonedas. Las operaciones son suspendidas y se impone una multa por violación de la normativa de protección de datos.
              p <b>Análisis:</b> el caso evidencia la vulnerabilidad de infraestructuras críticas como la salud. La capacitación del personal, los filtros de seguridad en correos y las copias de respaldo son esenciales. Además, demuestra cómo una acción individual puede comprometer todo un sistema institucional.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img23.jpg', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-7.order-lg-1.order-2
              h4 Caso 5. <em>Software</em> sin actualizar en entidades públicas
              p Un funcionario en Cali conecta su portátil sin actualizar a la red interna municipal. Hackers aprovechan una vulnerabilidad conocida para acceder a bases de datos con información de dos millones de ciudadanos, que luego es vendida en la <em>dark</em> <em>web</em>.
              p <b>Análisis:</b> este incidente subraya la importancia de mantener actualizados los sistemas. Las actualizaciones y parches de seguridad corrigen errores críticos. El descuido en este aspecto puede generar consecuencias graves como robo de identidad, fraudes y pérdida de credibilidad institucional.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img24.jpg', alt='Imagen decorativa')

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
