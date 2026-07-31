<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo Maquinaria y sistema de medidas de camisetas deportivas aborda los fundamentos técnicos necesarios para reconocer y aplicar los procesos relacionados con la medición, los materiales y la documentación utilizada en la confección. En este contexto, se estudian los sistemas de medición, la clasificación de las medidas corporales, los cuadros de tallas, las proporciones del cuerpo y las tipologías de prendas. También se analizan las fibras, los hilos, los tejidos y las características de los textiles, así como su aprovechamiento durante la distribución y el corte de las piezas que conforman una prenda.
    p Asimismo, el componente integra la definición, los tipos, las características y las aplicaciones de las fichas técnicas como instrumentos para organizar y comunicar la información del proceso productivo. Se abordan las características, los usos y las técnicas de manejo de la maquinaria de confección, junto con la calibración de puntadas, la selección de guías, accesorios y agujas, y la aplicación del mantenimiento preventivo. Finalmente, se desarrollan los fundamentos del patronaje mediante la construcción de bases superiores femeninas y masculinas, el trazo de mangas, el despiece de patrones y la elaboración de los patrones de camisetas deportivas masculina y femenina, con el propósito de favorecer el ajuste, la funcionalidad y la calidad de la prenda.
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Esquema conceptual del componente Maquinaria y sistema de medidas de camisetas deportivas, organizado en seis áreas principales. La primera aborda los sistemas de medición y las medidas corporales. La segunda incluye los cuadros de tallas, las proporciones corporales y las tipologías de prendas. La tercera reúne fibras, hilos, hilatura, tejidos, caracterización y aprovechamiento de los textiles. La cuarta presenta la definición, los tipos, las características y la aplicación de las fichas técnicas. La quinta comprende las técnicas de manejo, los usos, las aplicaciones, los insumos y el mantenimiento preventivo de la maquinaria de confección. La sexta integra la base superior femenina, el trazo de manga, los patrones básicos masculinos, el despiece y los patrones de camisetas deportivas masculina y femenina.")
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
