<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center.align-items-center
          .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
            p Este componente formativo aborda la seguridad en redes, la protección de datos personales y la gestión de políticas en ciberseguridad. En un entorno digital cada vez más interconectado, es fundamental garantizar la integridad, confidencialidad y disponibilidad de la información mediante estrategias como el uso del modelo OSI, controles de red y buenas prácticas de protección.
            .tarjeta.tarjeta--BGC01.p-4.mb-3
              .row.justify-content-center
                .col-auto.mb-3
                  figure
                    img(src='@/assets/curso/temas/intro/img01.svg', alt='Imagen decorativa')
                .col-10.mb-0
                  p.mb-0 La privacidad y el derecho al Habeas Data adquieren relevancia ante la creciente circulación de datos sensibles, lo que exige el uso de herramientas y acciones concretas para minimizar riesgos. A su vez, la implementación de políticas de seguridad y la adopción de estándares como la norma ISO 27001 permiten establecer lineamientos eficaces para proteger los activos de información.
            .row
              .col-auto.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/ico01.svg', alt='Imagen decorativa')
              .col
                p.mb-0 Comprender estos elementos fortalece la capacidad de respuesta ante amenazas cibernéticas y promueve una cultura organizacional orientada a la prevención y al cumplimiento normativo. Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video.
            

          .col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/intro/img03.jpg', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/dEuX6dAOTPw?si=ro68B50mOvP1a95B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
