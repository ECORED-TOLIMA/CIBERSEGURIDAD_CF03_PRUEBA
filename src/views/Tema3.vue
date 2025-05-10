<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Las políticas y documentación en ciberseguridad

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center.align-items-center
          .col-lg-8.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-3
            p En la era digital, la información se ha convertido en uno de los activos más valiosos para organizaciones e individuos. La creciente cantidad de amenazas cibernéticas y el aumento en la sofisticación de los ataques han hecho necesario establecer políticas de seguridad de la información. Estas políticas permiten proteger los datos, minimizar los riesgos y garantizar los principios fundamentales de la ciberseguridad: la confidencialidad, la integridad y la disponibilidad.
            .tarjeta.tarjeta--BGC02.p-3
              .row.justify-content-center.align-items-center
                .col-lg-2.d-none.d-lg-block.order-lg-1.order-2.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema3/img01.png', alt='Imagen decorativa')
                .col-lg-10.col-12.mb-0.order-lg-2.order-2.mb-lg-0
                  p.mb-0 La Política de Seguridad de la Información es un conjunto de normas y directrices que establece cómo se protege la información dentro de una organización. Su objetivo principal es prevenir accesos no autorizados, asegurar el correcto funcionamiento de los sistemas y responder de manera efectiva ante posibles incidentes.

          .col-lg-4.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema3/img02.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-down") A partir de esta política, se generan documentos clave que definen la estructura operativa de la seguridad informática en las organizaciones. Entre ellos se destacan:

    .tarjeta.tarjeta--BG01.px-md-5.p-4
      .row.justify-content-center
        .col-lg-10.col-12
          .row.justify-content-center
            .col-12.col-md-10.col-lg-6.mb-3(data-aos="fade-down")
              .tarjeta-box
                .tarjeta-header
                  .circle A)
                  .title Normas de seguridad
                .tarjeta-body.px-4
                  p Son especificaciones técnicas y organizativas diseñadas para aplicar la política de seguridad.
                  p <b>Ejemplo 1:</b> una empresa tecnológica implementa una norma que obliga a usar autenticación multifactor (MFA) para acceder a sistemas internos.                    
                  p.mb-0 <b>Ejemplo 2:</b> un banco exige el cifrado completo de disco en todos sus dispositivos corporativos, para evitar accesos indebidos en caso de extravío.                    

            .col-12.col-md-10.col-lg-6.mb-3(data-aos="fade-down")
              .tarjeta-box
                .tarjeta-header
                  .circle B)
                  .title Procedimientos de seguridad
                .tarjeta-body.px-4
                  p Son descripciones detalladas sobre cómo aplicar las normas establecidas.
                  p <b>Ejemplo 1:</b> una empresa define un procedimiento de gestión de contraseñas en el que los empleados deben cambiarlas cada 90 días y utilizar combinaciones alfanuméricas seguras.
                  p.mb-0 <b>Ejemplo 2:</b> un hospital establece un procedimiento que restringe el acceso a las historias clínicas, permitiendo el ingreso únicamente al personal autorizado mediante permisos diferenciados.

            .col-12.col-md-10.col-lg-6.mb-3(data-aos="fade-down")
              .tarjeta-box
                .tarjeta-header
                  .circle C)
                  .title Plan de Continuidad del Negocio (BCP)
                .tarjeta-body.px-4
                  p Son estrategias para garantizar la operación de la organización frente a interrupciones o incidentes de seguridad.
                  p <b>Ejemplo 1:</b> una tienda virtual implementa servidores de respaldo en la nube, lo que le permite mantener su plataforma activa durante una caída del centro de datos principal.
                  p.mb-0 <b>Ejemplo 2:</b> un banco diseña un plan para que sus cajeros automáticos sigan operando, aunque ocurra una falla en su infraestructura de TI.

            .col-12.col-md-10.col-lg-6.mb-3(data-aos="fade-down")
              .tarjeta-box
                .tarjeta-header
                  .circle D)
                  .title Plan de respuesta a incidentes
                .tarjeta-body.px-4
                  p Establece las acciones que se deben tomar ante vulneraciones o ciberataques.
                  p <b>Ejemplo 1:</b> una empresa de <em>software</em> define un protocolo que, ante un ataque de <em>ransomware</em>, requiere desconectar los sistemas afectados, alertar al equipo de seguridad y restaurar desde copias de seguridad.
                  p.mb-0 <b>Ejemplo 2:</b> un hospital activa un protocolo específico ante accesos no autorizados a registros médicos, que incluye la revocación de credenciales comprometidas y una auditoría para evaluar el alcance del incidente.                  

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Administración de la Política de Seguridad de la Información

    .row.justify-content-center.align-items-center.mb-3(data-aos="flip-up")
      .col-12
        .row.justify-content-center.align-items-center
          .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0.mb-3
            p.mb-4 La administración de la Política de Seguridad de la Información es un proceso estratégico orientado a proteger los datos críticos de una organización. Su objetivo principal es establecer directrices claras para preservar la confidencialidad, integridad y disponibilidad de la información, en alineación con los objetivos institucionales y los requisitos legales y normativos.
            .tarjeta.tarjeta--BGC02.p-3
              .row.justify-content-center.align-items-center
                .col-auto.d-none.d-lg-block.order-lg-1.order-2.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema3/img03.png', alt='Imagen decorativa')
                .col-lg-10.col-12.mb-0.order-lg-2.order-2.mb-lg-0
                  p.mb-0 Un paso fundamental en esta administración es la evaluación de riesgos, que permite identificar los activos valiosos, las amenazas potenciales y las vulnerabilidades existentes. Este análisis facilita la priorización de controles y la asignación eficiente de recursos. Con base en ello, se definen normas y procedimientos específicos para la implementación de controles técnicos (como cifrado, cortafuegos o <em>firewalls</em>) y controles organizacionales (roles, funciones y responsabilidades).

          .col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema3/img04.jpg', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-3(data-aos="flip-up")
      .col-12
        .row.justify-content-center
          .col-lg-7.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-3
            p La alta dirección cumple un papel clave al aprobar y respaldar la Política de Seguridad de la Información, lo cual demuestra compromiso con la cultura de seguridad y garantiza los recursos necesarios para su aplicación. En paralelo, es esencial establecer programas de capacitación y concienciación para que todo el personal comprenda sus responsabilidades, desde el uso adecuado de contraseñas hasta la notificación de incidentes.
            .row.justify-content-center
              .col-auto.d-none.d-lg-block.order-lg-1.order-2.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema3/img15.svg', alt='Imagen decorativa')
              .col-lg-10.col-12.mb-3.order-lg-2.order-2.mb-lg-0
                p La política debe integrar un Plan de Continuidad del Negocio, que defina cómo mantener las operaciones ante eventos críticos, y un Plan de Respuesta a Incidentes, que establezca las acciones necesarias frente a brechas de seguridad. Ambos planes deben ser probados de forma periódica mediante simulacros y ejercicios controlados.

          .col-lg-5.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema3/img16.png', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center
          .col-lg-7.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0.mb-3
            p La monitorización y auditoría son componentes clave para evaluar el cumplimiento de la política. Herramientas como los sistemas SIEM (Security Information and Event Management) permiten el análisis en tiempo real de los registros de actividad, mientras que las auditorías internas y externas verifican la eficacia de los controles establecidos.
            .row.justify-content-center
              .col-auto.d-none.d-lg-block.order-lg-1.order-2.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/ico01.svg', alt='Imagen decorativa')
              .col-lg-10.col-12.mb-3.order-lg-2.order-2.mb-lg-0
                p El marco normativo ISO/IEC 27001 brinda una estructura estandarizada para la implementación y gestión de la Política de Seguridad de la Información. Este modelo incorpora el ciclo de mejora continua PDCA (Planificar, Hacer, Verificar, Actuar), y su certificación constituye un respaldo frente a clientes, socios y entes reguladores.

          .col-lg-5.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema3/img05.jpg', alt='Imagen decorativa')

    .bloque-texto-g.bloque-texto-g--inverso.C1.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img06.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Entre los desafíos más comunes se encuentran la resistencia al cambio por parte de los colaboradores y la evolución constante de las amenazas cibernéticas, lo que requiere actualizaciones frecuentes de la política. Por ello, esta no debe entenderse como un documento estático, sino como un instrumento dinámico que debe revisarse de forma anual o ante cambios significativos en la tecnología, el entorno normativo o la infraestructura.
        br
        br
        p Una política de seguridad efectiva debe lograr un equilibrio entre protección y productividad, evitando controles excesivos que interfieran con la operatividad. Su éxito depende del compromiso colectivo, donde cada miembro de la organización asuma la protección de la información como una responsabilidad compartida.

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Documentación derivada de la política
    
    p.mb-5(data-aos="fade-down")  La documentación derivada de la Política de Seguridad de la Información incluye varios documentos clave que permiten implementar, gestionar y auditar las directrices establecidas. Cada uno de estos documentos desempeña un papel crucial en la ejecución de políticas de seguridad de manera eficiente y en el cumplimiento de los requisitos organizacionales y legales. Los principales documentos derivados son:

    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-4
            figure
              img(src="@/assets/curso/temas/tema3/img07.png", alt="alt").img100.m-auto
          h4.text-center Normas de seguridad
          p.mb-0 Especifican los requisitos técnicos y organizacionales para aplicar las políticas de seguridad de la información, como las normativas sobre la autenticación multifactor o el cifrado de dispositivos corporativos.

      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-4
            figure
              img(src="@/assets/curso/temas/tema3/img08.png", alt="alt").img100.m-auto
          h4.text-center Procedimientos de seguridad
          p.mb-0 Detallan las acciones a seguir para implementar las normas de seguridad, tales como las pautas para la creación y gestión de contraseñas o los procedimientos de acceso a sistemas críticos.

      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-4
            figure
              img(src="@/assets/curso/temas/tema3/img09.png", alt="alt").img100.m-auto
          h4.text-center Planes de continuidad del negocio
          p.mb-0 Establecen las estrategias para mantener las operaciones esenciales ante incidentes de seguridad, asegurando que la empresa pueda seguir funcionando en caso de una crisis.

      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-4
            figure
              img(src="@/assets/curso/temas/tema3/img10.png", alt="alt").img100.m-auto
          h4.text-center Planes de respuesta a incidentes
          p.mb-0 Definen las acciones específicas que deben tomarse ante la detección de un incidente de seguridad, como el protocolo de restauración tras un ataque de <em>ransomware</em> o el procedimiento de respuesta ante un acceso no autorizado.

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Norma ISO 27001 y otros estándares

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center.align-items-center
          .col-lg-9.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0.mb-3
            p La ISO 27001 es un estándar internacional clave para la gestión de seguridad de la información. Establece los requisitos para crear, implementar, mantener y mejorar un Sistema de Gestión de Seguridad de la Información (SGSI). Su principal objetivo es proteger la confidencialidad, integridad y disponibilidad de la información mediante un enfoque sistemático, minimizando riesgos y asegurando el cumplimiento con normativas legales.
            p Beneficios clave de la implementación de la ISO 27001:
            .tarjeta.tarjeta--BGC02.p-3
              .row.justify-content-center.align-items-center
                .col-auto.d-none.d-lg-block.order-lg-2.order-2.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema3/img11.svg', alt='Imagen decorativa')
                .col-lg-9.col-12.mb-0.order-lg-1.order-2.mb-lg-0
                  ul.lista-ul--color.lista-ul.mb-0
                    li.mb-4
                      i.fas.fa-shield
                      p.mb-0 <b>Protección de datos:</b> reduce vulnerabilidades ante ciberataques y fugas de datos.
                    li.mb-4
                      i.fas.fa-shield
                      p.mb-0 <b>Cumplimiento normativo:</b> ayuda a la organización a alinearse con leyes y regulaciones.
                    li.mb-4
                      i.fas.fa-shield
                      p.mb-0 <b>Confianza de clientes:</b> la certificación ISO 27001 es reconocida globalmente y mejora la reputación corporativa.
                    li.mb-0
                      i.fas.fa-shield
                      p.mb-0 <b>Mejora continua:</b> enfoque basado en el ciclo PHVA (Planificar-Hacer-Verificar-Actuar) que fomenta la mejora constante del SGSI.

          .col-lg-3.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema3/img12.jpg', alt='Imagen decorativa')
    
    p.mb-5(data-aos="fade-down") La ISO 27001 se estructura en 10 cláusulas principales que abarcan aspectos como la planificación, evaluación de riesgos, y mejora continua, y está estrechamente relacionada con otros estándares de la serie ISO 27000 que cubren diferentes aspectos de la seguridad de la información y la privacidad.
    
    p.mb-5(data-aos="fade-down") Algunos estándares complementarios de la familia ISO 27000 incluyen:

    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        .row.justify-content-center
          .col-8.col-lg.bg-c2.m-2(data-aos="flip-down")
            .p-2
              figure.mb-4
                img(src='@/assets/curso/temas/tema3/img13.svg', style="width: 60px" ,alt='Imagen decorativa')
              h4.text-white ISO/IEC 27000
              p.mb-0.text-white Vocabulario y principios básicos.

          .col-8.col-lg.bg-c2.m-2(data-aos="flip-down")
            .p-2
              figure.mb-4
                img(src='@/assets/curso/temas/tema3/img13.svg', style="width: 60px" ,alt='Imagen decorativa')
              h4.text-white ISO/IEC 27002
              p.mb-0.text-white Código de prácticas para controles de seguridad.

          .col-8.col-lg.bg-c2.m-2(data-aos="flip-down")
            .p-2
              figure.mb-4
                img(src='@/assets/curso/temas/tema3/img13.svg', style="width: 60px" ,alt='Imagen decorativa')
              h4.text-white ISO/IEC 27005
              p.mb-0.text-white Gestión de riesgos.

          .col-8.col-lg.bg-c2.m-2(data-aos="flip-down")
            .p-2
              figure.mb-4
                img(src='@/assets/curso/temas/tema3/img13.svg', style="width: 60px" ,alt='Imagen decorativa')
              h4.text-white ISO/IEC 27017
              p.mb-0.text-white Seguridad en la nube.

          .col-8.col-lg.bg-c2.m-2(data-aos="flip-down")
            .p-2
              figure.mb-4
                img(src='@/assets/curso/temas/tema3/img13.svg', style="width: 60px" ,alt='Imagen decorativa')
              h4.text-white ISO/IEC 27018
              p.mb-0.text-white Protección de datos personales en la nube.

    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        .row.justify-content-center
          .col-8.col-lg.bg-c2.m-2(data-aos="flip-down")
            .p-2
              figure.mb-4
                img(src='@/assets/curso/temas/tema3/img13.svg', style="width: 60px" ,alt='Imagen decorativa')
              h4.text-white ISO/IEC 27701
              p.mb-0.text-white Extensión para privacidad (PIMS).

          .col-8.col-lg.bg-c2.m-2(data-aos="flip-down")
            .p-2
              figure.mb-4
                img(src='@/assets/curso/temas/tema3/img13.svg', style="width: 60px" ,alt='Imagen decorativa')
              h4.text-white ISO/IEC 27031
              p.mb-0.text-white Resiliencia TI para continuidad del negocio.

          .col-8.col-lg.bg-c2.m-2(data-aos="flip-down")
            .p-2
              figure.mb-4
                img(src='@/assets/curso/temas/tema3/img13.svg', style="width: 60px" ,alt='Imagen decorativa')
              h4.text-white ISO/IEC 27034
              p.mb-0.text-white Seguridad en aplicaciones.

          .col-8.col-lg.bg-c2.m-2(data-aos="flip-down")
            .p-2
              figure.mb-4
                img(src='@/assets/curso/temas/tema3/img13.svg', style="width: 60px" ,alt='Imagen decorativa')
              h4.text-white ISO/IEC 27040
              p.mb-0.text-white Almacenamiento seguro.

          .col-8.col-lg.bg-c2.m-2(data-aos="flip-down")
            .p-2
              figure.mb-4
                img(src='@/assets/curso/temas/tema3/img13.svg', style="width: 60px" ,alt='Imagen decorativa')
              h4.text-white ISO/IEC 27035
              p.mb-0.text-white Gestión de incidentes.

    .row.justify-content-center.align-items-center.mb-0(data-aos="flip-up")
      .col-12
        .row.justify-content-center
          .col-lg-9.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-3
            p.mb-0 En conclusión, la Norma ISO 27001 no actúa de forma aislada, sino que forma parte de una familia de estándares que permiten construir un sistema de gestión integral y robusto en materia de seguridad de la información. Estos estándares complementarios proporcionan lineamientos específicos sobre control, gestión de riesgos, privacidad, continuidad del negocio, seguridad en la nube, entre otros aspectos críticos. Su implementación coordinada fortalece la capacidad de una organización para proteger sus activos de información, garantizar el cumplimiento normativo y responder eficazmente ante incidentes, consolidando así una cultura organizacional orientada a la seguridad y mejora continua.

          .col-lg-3.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema3/img14.jpg', alt='Imagen decorativa')

</template>

<script>
export default {
  name: 'Tema3',
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
