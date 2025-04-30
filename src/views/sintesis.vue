<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente formativo aborda los principios fundamentales de la seguridad en redes, incluyendo conceptos clave, el modelo OSI, las topologías de red y los controles de seguridad, así como casos reales y particularidades de redes inalámbricas. También se enfoca en la protección de datos personales y la privacidad, integrando el análisis del Habeas Data, las herramientas de ciberseguridad y las buenas prácticas en el ciberespacio. Finalmente, se profundiza en la administración de la Política de Seguridad de la Información, la documentación derivada de dicha política y el marco normativo representado por la norma ISO 27001 y los estándares complementarios, esenciales para una gestión integral de la ciberseguridad.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se representan los principales aspectos de la ciberseguridad, incluyendo la seguridad en redes, la protección de datos personales y la gestión de políticas y normas internacionales, como la ISO 27001, para garantizar la integridad, confidencialidad y disponibilidad de la información.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
