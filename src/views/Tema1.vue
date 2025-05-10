<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Seguridad en redes
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="flip-up")
      .col-12
        .row.justify-content-center
          .col-lg-9.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-3
            p La seguridad en redes constituye un pilar esencial en el entorno digital actual, donde la constante digitalización de la información y la interconexión de dispositivos han incrementado los riesgos para la integridad, confidencialidad y disponibilidad de los datos. Este ámbito va mucho más allá de la instalación de <em>firewalls</em> o antivirus; se trata de un enfoque integral que abarca el diseño arquitectónico de las redes, el control de accesos y la formación de los usuarios.
            .row
              .col-auto.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/ico01.svg', alt='Imagen decorativa')
              .col.mb-3
                p.mb-0 El modelo OSI (Open Systems Interconnection), por ejemplo, ofrece una estructura lógica que permite analizar las vulnerabilidades presentes en cada capa de comunicación. Mientras la capa física requiere mecanismos de control de acceso físico, la capa de aplicación demanda estrategias específicas contra amenazas como <em>malware</em> o ataques de ingeniería social. A su vez, técnicas como la segmentación de redes, el uso de redes privadas virtuales (VPN) y el cifrado de extremo a extremo fortalecen la protección frente a accesos no autorizados e intercepciones

          .col-lg-3.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema1/img01.png', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-0(data-aos="flip-up")
      .col-12
        .row.justify-content-center
          .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
            .row.mb-3
              .col-auto.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/tema1/img03.png', alt='Imagen decorativa')
              .col
                p.mb-0 Uno de los mayores desafíos continúa siendo el factor humano. La mayoría de incidentes de ciberseguridad se originan en errores o descuidos por parte de los usuarios, lo que hace indispensable implementar políticas claras, programas de formación continua y protocolos de respuesta ante incidentes.
            .tarjeta.tarjeta--BGC01.p-4.mb-0
              .col.mb-0
                p.mb-0 Normas internacionales como la ISO 27001 orientan la adopción de buenas prácticas y controles efectivos, siempre que sean aplicadas de forma consciente y adaptativa. La seguridad en redes debe asumirse como un proceso constante que evoluciona con las amenazas, y representa una inversión estratégica para proteger los activos digitales y garantizar la confianza en el entorno organizacional.            

          .col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema1/img02.png', alt='Imagen decorativa')

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Conceptos asociados a la seguridad en redes

    .bloque-texto-g.bloque-texto-g--inverso.C1.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img04.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el panorama digital actual, la seguridad en redes representa un pilar esencial para salvaguardar la integridad, confidencialidad y disponibilidad de la información. Las redes actúan como el sistema circulatorio de las organizaciones contemporáneas, facilitando el flujo continuo de datos entre dispositivos, usuarios y sistemas. No obstante, esta conectividad permanente también incrementa la exposición a amenazas cibernéticas, que van desde ataques de <em>ransomware</em> altamente sofisticados hasta intrusiones silenciosas orientadas al robo de información crítica.
        br
        br
      
    p.mb-5(data-aos="fade-down") La seguridad en redes trasciende el uso de herramientas tecnológicas; se configura como una disciplina estratégica que integra <em>hardware</em>, <em>software</em>, normativas y la formación del recurso humano. Su propósito es establecer un entorno digital resiliente, en el que los datos puedan circular y almacenarse con un nivel mínimo de riesgo, garantizando la protección de las organizaciones y los usuarios.

    p.mb-5(data-aos="fade-down") Entre los principios fundamentales que rigen esta área se encuentran:

    .row.justify-content-center.mb-5
      .col-8.col-lg.bg-c2.m-2(data-aos="fade-down")
        .p-4
          figure.mb-4
            img(src='@/assets/curso/temas/tema1/img05.svg', style="width: 50px" ,alt='')
          h4.text-white Confidencialidad
          p.text-white.mb-0 Restringe el acceso a la información únicamente a usuario autorizados.
          
      .col-8.col-lg.bg-c2.m-2(data-aos="fade-down")
        .p-4
          figure.mb-4
            img(src='@/assets/curso/temas/tema1/img06.svg', style="width: 50px" ,alt='')
          h4.text-white Integridad
          p.text-white.mb-0 Asegura que los datos no sean modificados sin autorización.
          
      .col-8.col-lg.bg-c2.m-2(data-aos="fade-down")
        .p-4
          figure.mb-4
            img(src='@/assets/curso/temas/tema1/img07.svg', style="width: 50px" ,alt='')
          h4.text-white Disponibilidad
          p.text-white.mb-0 Garantiza el acceso oportuno a los sistemas y datos.
          
      .col-8.col-lg.bg-c2.m-2(data-aos="fade-down")
        .p-4
          figure.mb-4
            img(src='@/assets/curso/temas/tema1/img08.svg', style="width: 50px" ,alt='')
          h4.text-white Autenticación
          p.text-white.mb-0 Verifica la identidad de quienes acceden a los recursos digitales.

    .row.mb-0
      .col-auto.d-none.d-lg-block(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/ico01.svg', alt='Imagen decorativa')
      .col-10.mb-3
        p.mb-0(data-aos="fade-down") Estos conceptos constituyen la base de múltiples estrategias de ciberseguridad aplicadas en sectores empresariales y gubernamentales, con el fin de proteger la infraestructura de red frente a un entorno de amenazas en constante evolución.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Modelo OSI y su relación con la ciberseguridad

    p.mb-5(data-aos="fade-down") El modelo OSI (Open Systems Interconnection) es una referencia teórica que describe cómo interactúan los sistemas de comunicación a través de una red. Se organiza en siete capas, cada una con funciones específicas:

    .tarjeta.tarjeta--BG01.px-md-5.px-4
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
        .col-lg-3.d-none.d-lg-block
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema1/img09.png", alt="alt").img400.m-auto
        .col-lg-9
          SlyderF.custom(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema1/img10.svg", alt="alt").img100.m-auto
              h4.titulo-1 1. Capa física
              p.mb-0 Maneja la transmisión de datos en forma de señales eléctricas, ópticas o de radio.

            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema1/img11.svg", alt="alt").img100.m-auto
              h4.titulo-1 2. Capa de enlace de datos
              p.mb-0 Asegura la transferencia libre de errores entre dispositivos directamente conectados.

            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema1/img12.svg", alt="alt").img100.m-auto
              h4.titulo-1 3. Capa de red
              p.mb-0 Encargada del direccionamiento y encaminamiento de los paquetes a través de distintas redes.

            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema1/img13.svg", alt="alt").img100.m-auto
              h4.titulo-1 4. Capa de transporte
              p.mb-0 Garantiza la entrega confiable y en orden de los datos entre sistemas extremos.

            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema1/img14.svg", alt="alt").img100.m-auto
              h4.titulo-1 5. Capa de sesión
              p.mb-0 Establece, mantiene y finaliza sesiones de comunicación entre aplicaciones.

            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema1/img15.svg", alt="alt").img100.m-auto
              h4.titulo-1 6. Capa de presentación:
              p.mb-0 Gestiona el formato de los datos, su compresión y el cifrado.

            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema1/img16.svg", alt="alt").img100.m-auto
              h4.titulo-1 7. Capa de aplicación
              p.mb-0 Proporciona servicios directamente al usuario final, como correo electrónico o navegación <em>web</em>.

    .row.justify-content-center.align-items-center.mb-0(data-aos="flip-up")
      .col-12
        .row.justify-content-center.align-items-center
          .col-lg-9.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
            p Para presentar cómo funciona el modelo OSI en un proceso cotidiano, se puede considerar el caso de una comunicación por correo electrónico. Emma desea enviar un mensaje a su colega Javier. Ella redacta el mensaje en su aplicación de correo, lo que involucra la capa de aplicación. Luego, el texto se convierte a un formato estándar en la capa de presentación, y se inicia una conexión mediante la capa de sesión.
            .tarjeta.tarjeta--BGC01.px-4.py-3.mb-3
              .row.justify-content-center
                .col-auto.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema1/img17.svg', alt='Imagen decorativa')
                .col-10.mb-3
                  p.mb-0 La capa de transporte fragmenta el mensaje en paquetes, mientras la capa de red determina la ruta más eficiente. La capa de enlace de datos garantiza que cada paquete llegue sin errores, y en la capa física, los datos se transmiten como señales a través del medio físico.
            .row
              .col-auto.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/ico01.svg', alt='Imagen decorativa')
              .col
                p.mb-0 Este recorrido evidencia que la seguridad es esencial en cada capa, desde el cifrado en la capa de presentación, hasta la protección contra accesos no autorizados en las capas de red y enlace. Comprender el modelo OSI permite identificar en qué puntos se deben aplicar controles para proteger la información de forma integral.
            

          .col-lg-3.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema1/img18.jpg', alt='Imagen decorativa')
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Topologías de red

    p.mb-5(data-aos="fade-down") La forma en que se estructuran las redes influye directamente en su rendimiento, escalabilidad y nivel de seguridad. Estas estructuras, conocidas como topologías de red, determinan cómo se conectan los dispositivos entre sí y cómo fluye la información a través de ellos.
    p.mb-5(data-aos="fade-down") Algunas de las topologías más comunes incluyen:

    .row.justify-content-center.mb-0(data-aos="flip-down")
      .col-md-8.col-lg.m-2
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/temas/tema1/img19.png', style="width: 100%" ,alt='').m-auto
          .col-12.bg-c1.h-100
            .p-4
              p.mb-0 <b>Topología en estrella:</b> todos los dispositivos están conectados a un nodo central, generalmente un <em>switch</em> o <em>router</em>. Su principal ventaja es la facilidad de configuración y gestión, ya que cualquier cambio o fallo en un nodo periférico no afecta al resto de la red. Sin embargo, si el nodo central presenta una falla, toda la red se ve comprometida, lo que lo convierte en un punto crítico de seguridad.

      .col-md-8.col-lg.m-2
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/temas/tema1/img20.png', style="width: 100%" ,alt='').m-auto
          .col-12.bg-c1.h-100
            .p-4
              p.mb-0 <b>Topología en bus:</b> utiliza un único canal de comunicación compartido por todos los dispositivos. Es económica y fácil de instalar, pero sufre problemas de colisión de datos y sufre una alta vulnerabilidad: un daño en el cable principal puede interrumpir toda la red.
              br
              br
    
    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-md-8.col-lg.m-2
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/temas/tema1/img21.png', style="width: 100%" ,alt='').m-auto
          .col-12.bg-c1.h-100
            .p-4
              p.mb-0 <b>Topología en anillo:</b> cada dispositivo está conectado con el siguiente formando un círculo cerrado. Los datos circulan en una sola dirección o en ambas, según el diseño. Aunque es eficiente en el uso de recursos, un fallo en un solo nodo puede afectar la transmisión, a menos que se implementen mecanismos de autorrecuperación.

      .col-md-8.col-lg.m-2
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/temas/tema1/img22.png', style="width: 100%" ,alt='').m-auto
          .col-12.bg-c1.h-100
            .p-4
              p.mb-0 <b>Topología en malla:</b> cada nodo está interconectado con múltiples dispositivos. Esta topología ofrece alta redundancia y confiabilidad, ideal para entornos que requieren máxima disponibilidad y tolerancia a fallos, aunque implica un mayor costo y complejidad en la implementación.
              br

    p.mb-0(data-aos="fade-down") Comprender estas estructuras permite seleccionar la más adecuada según los requerimientos de seguridad, rendimiento y disponibilidad de cada organización.

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Controles típicos de seguridad en una red
    
    .tarjeta.tarjeta--BG02.px-md-5.p-4
      p.mb-5(data-aos="fade-down") La protección de una red requiere una combinación de herramientas, políticas y buenas prácticas diseñadas para prevenir, detectar y responder a amenazas. Entre los controles más comunes y efectivos se encuentran:
      .tarjeta.tarjeta--blanca.p-4.mb-5
        .row.justify-content-center.mb-3(data-aos="flip-down")
          .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
            .row.justify-content-center.mb-1
              .col-auto.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema1/img23.svg', style="width: 50px" ,alt='')
              .col-10
                p #[b #[em Firewalls]:] actúan como barreras entre redes internas y externas, filtrando el tráfico según reglas establecidas para bloquear accesos no autorizados.
            .row.justify-content-center.mb-1
              .col-auto.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema1/img24.svg', style="width: 50px" ,alt='')
              .col-10
                p <b>Sistemas de Detección y Prevención de Intrusos (IDS/IPS):</b> analizan el tráfico de red en tiempo real para identificar comportamientos anómalos y, en el caso de los IPS, detener amenazas activamente.
            .row.justify-content-center.mb-1
              .col-auto.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema1/img25.svg', style="width: 50px" ,alt='')
              .col-10
                p <b>Cifrado de datos:</b> garantiza la confidencialidad de la información durante la transmisión mediante protocolos como TLS o mediante el uso de redes privadas virtuales (VPN).
            .row.justify-content-center.mb-1
              .col-auto.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema1/img26.svg', style="width: 50px" ,alt='')
              .col-10
                p <b>Autenticación multifactor (MFA):</b> añade capas adicionales de verificación, como códigos temporales o biometría, para reforzar el acceso seguro a sistemas sensibles.
            .row.justify-content-center.mb-1
              .col-auto.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema1/img27.svg', style="width: 50px" ,alt='')
              .col-10
                p <b>Segmentación de redes:</b> divide la red en zonas o subredes independientes para limitar el movimiento lateral de amenazas en caso de una brecha.
            .row.justify-content-center.mb-1
              .col-auto.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema1/img28.svg', style="width: 50px" ,alt='')
              .col-10
                p <b>Listas de control de acceso (ACL):</b> permiten definir reglas precisas sobre qué usuarios o dispositivos pueden acceder a determinados recursos o servicios.
          
          .col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img29.png',alt='')

        .row.justify-content-center(data-aos="flip-down")
          .col-lg-9.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
            .row.justify-content-center.mb-2
              .col-auto.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema1/img30.svg', style="width: 50px" ,alt='')
              .col-10
                p #[b Control de acceso basado en roles (RBAC):] asigna permisos de acuerdo con las funciones laborales, reduciendo la exposición innecesaria a información sensible.
            .row.justify-content-center.mb-2
              .col-auto.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema1/img31.svg', style="width: 50px" ,alt='')
              .col-10
                p <b>Sistemas SIEM (Security Information and Event Management):</b> recopilan, correlacionan y analizan eventos de seguridad para detectar ataques complejos y generar alertas en tiempo real.
            .row.justify-content-center.mb-2
              .col-auto.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema1/img32.svg', style="width: 50px" ,alt='')
              .col-10
                p <b>Control de acceso a la red (NAC):</b> evalúa el cumplimiento de políticas de seguridad en los dispositivos antes de permitir su conexión a la red.
            .row.justify-content-center.mb-2
              .col-auto.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema1/img33.svg', style="width: 50px" ,alt='')
              .col-10
                p <b>Prevención de pérdida de datos (DLP):</b> monitoriza y restringe el envío no autorizado de información confidencial fuera de la organización.
            .row.justify-content-center.mb-2
              .col-auto.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema1/img34.svg', style="width: 50px" ,alt='')
              .col-10
                p <b>Copias de seguridad y recuperación ante desastres:</b> aseguran la disponibilidad de la información en caso de fallos, ataques o eventos inesperados.
          .col-lg-3.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema1/img35.png',alt='')

      .row.mb-0
        .col-auto.d-none.d-lg-block(data-aos="flip-up")
          figure
            img(src='@/assets/curso/temas/ico01.svg', alt='Imagen decorativa')
        .col-10.mb-3
          p.mb-0(data-aos="fade-down") Estos controles deben implementarse de manera coordinada, adaptándose al contexto de cada organización y actualizándose constantemente para enfrentar nuevas amenazas.

    separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.5 Casos reales de seguridad en redes

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center.cajon.C01.p-4
          .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0.mb-0.px-4
            p.mb-0 La seguridad en redes es esencial para proteger la información y las infraestructuras tecnológicas de las organizaciones frente a una amplia variedad de amenazas cibernéticas. A lo largo de los años, diversas empresas y entidades gubernamentales han sido víctimas de ataques que han comprometido no solo la confidencialidad de los datos, sino también la confianza de los usuarios. Estos incidentes evidencian la necesidad de contar con medidas de seguridad efectivas y un enfoque estratégico que abarque desde la protección física de los sistemas hasta la educación continua de los usuarios. A continuación, se presentan dos casos reales que muestran cómo la falta de controles adecuados puede resultar en consecuencias devastadoras para las organizaciones y sus clientes.
          .col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.px-0
            figure
              img(src='@/assets/curso/temas/tema1/img36.png', alt='Imagen decorativa')   

    .tarjeta.tarjeta--BG01.px-md-5.px-4.mb-5
      .row.justify-content-center.mb-0(data-aos="flip-up")
        .col-lg-10.col-12
          .tarjeta--container.row.mb-5
            .col-xl.col-md-6.tarjeta.tarjeta--BG03.p-5
              .row.justify-content-center.mb-3
                .col-lg-4.col-6
                  figure
                    img(src='@/assets/curso/temas/tema1/img37.svg', alt='Imagen decorativa')
                
              h4.text-center Caso 1: el ataque a Yahoo
              p.mb-3 En 2013 y 2014, Yahoo sufrió una de las mayores brechas de seguridad de la historia, comprometiendo más de 3.000 millones de cuentas de usuario. Los atacantes explotaron una vulnerabilidad en el sistema de seguridad de Yahoo, logrando acceder a información personal sensible como correos electrónicos, contraseñas y datos de seguridad. Lo más alarmante de este caso fue la falta de cifrado en ciertas bases de datos, lo que permitió que los datos fueran accesibles incluso cuando se empleaban contraseñas cifradas. 
              p La brecha de seguridad pasó desapercibida durante varios años, lo que evidenció la importancia de contar con monitoreo constante, cifrado robusto y autenticación multifactor como medidas preventivas. Este incidente subraya la necesidad de aplicar buenas prácticas de seguridad desde el diseño de los sistemas hasta su implementación.

            .col-xl.col-md-6.tarjeta.tarjeta--BG04.p-5
              .row.justify-content-center.mb-3
                .col-lg-4.col-6
                  figure
                    img(src='@/assets/curso/temas/tema1/img38.svg', alt='Imagen decorativa')
                
              h4.text-center Caso 2: el ciberataque a una empresa de energía
              p.mb-3 En 2015, un sofisticado ataque cibernético dirigido a la red eléctrica de Ucrania dejó a cientos de miles de personas sin electricidad durante varias horas. Los atacantes, presuntamente respaldados por un grupo de hackers rusos, utilizaron técnicas de <em>phishing</em> para obtener credenciales de acceso de los empleados y, finalmente, comprometieron los sistemas de control industrial. Este ataque demostró la vulnerabilidad de las infraestructuras críticas y la importancia de implementar segmentación de redes, monitoreo constante y políticas de control de acceso más estrictas. 
              p Además, la rapidez con la que los atacantes se infiltraron destacó la necesidad de mejorar la capacitación en seguridad cibernética y la conciencia de los empleados sobre los riesgos asociados con el <em>phishing</em> y otros vectores de ataque.

    .row.justify-content-center.align-items-center.mb-0(data-aos="flip-up")
      .col-12
        .row.justify-content-center
          .col-lg-8.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-3
            p.mb-0 Estos casos enseñan cómo las brechas de seguridad no solo afectan a las organizaciones, sino también a sus usuarios y a la infraestructura crítica. Desde la implementación de conceptos fundamentales como la confidencialidad e integridad de los datos, hasta la adopción de medidas de seguridad avanzadas como <em>firewalls</em>, segmentación de redes y cifrado, cada aspecto de la seguridad en redes es vital para fortalecer las defensas. El modelo OSI proporciona una base teórica para entender en qué capas de comunicación deben aplicarse las medidas de seguridad, mientras que las topologías de red y los controles de seguridad juegan un papel crucial en la prevención de ataques cibernéticos. A medida que las amenazas evolucionan, mantenerse actualizado con las mejores prácticas y estándares de seguridad es esencial para proteger los datos y la privacidad en un mundo cada vez más digitalizado.

          .col-lg-4.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema1/img39.png', alt='Imagen decorativa')
      
    separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.6 Seguridad en redes inalámbricas

    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-12
        .row.justify-content-center.align-items-center
          .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0.mb-3
            p Las conexiones inalámbricas son una parte integral de la vida digital moderna, ya que permiten que dispositivos como <em>laptops</em>, <em>smartphones</em> y <em>tablets</em> se conecten a la red sin necesidad de cables físicos. Estas redes funcionan a través de un identificador llamado SSID (Service Set Identifier), el cual es visible para los dispositivos cercanos. Aunque es posible configurar un <em>router</em> inalámbrico para que no difunda su SSID, este método no debe considerarse una solución definitiva para proteger la red, ya que los ciberdelincuentes aún pueden detectar la red mediante técnicas de análisis.
            .tarjeta.tarjeta--BGC02.p-3
              .row.justify-content-center
                .col-auto.order-lg-1.order-2.mb-lg-0.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema1/img40.png', alt='Imagen decorativa')
                .col-lg-10.col-12.mb-0.order-lg-2.order-2.mb-lg-0
                  p.mb-0 Una de las primeras medidas para mejorar la seguridad de una red inalámbrica es cambiar el SSID predeterminado y la clave inicial de acceso del <em>router</em>. Además, es crucial activar las opciones de seguridad inalámbrica, como el cifrado WPA2 o WPA3, para proteger la transmisión de datos. Estas tecnologías de cifrado son esenciales para evitar que los datos sean interceptados por personas no autorizadas.

          .col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema1/img41.jpg', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center.align-items-center
          .col-lg-8.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-3
            p Sin embargo, es importante tener en cuenta que incluso con WPA2 o WPA3 activado, las redes inalámbricas pueden seguir siendo vulnerables a ciertos ataques, como el ataque de diccionario o el ataque de fuerza bruta. Por ello, es recomendable implementar otras medidas complementarias, como el uso de redes privadas virtuales (VPN) para proteger la privacidad de las comunicaciones y asegurarse de que los dispositivos conectados a la red estén adecuadamente protegidos con <em>software</em> antivirus y <em>firewalls</em>.
            .row.justify-content-center
              .col-auto.d-none.d-lg-block.order-lg-1.order-2.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema1/img42.png', alt='Imagen decorativa')
              .col-lg-10.col-12.mb-3.order-lg-2.order-2.mb-lg-0
                p La seguridad en redes inalámbricas es un aspecto crítico en el contexto de la ciberseguridad, ya que la facilidad de acceso a estas redes también aumenta el riesgo de intrusiones. Implementar las mejores prácticas y mantener una vigilancia constante es fundamental para proteger la red contra posibles amenazas.

          .col-lg-4.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema1/img43.jpg', alt='Imagen decorativa')
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
