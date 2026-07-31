<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-left")    
      .col-lg-5.mb-3
        img(src='@/assets/curso/portada/intro.png', alt='')
      .col-lg-7
        p El dominio técnico de los procesos de confección industrial exige una comprensión articulada de los sistemas de medición, los materiales textiles, la documentación especializada y la maquinaria que interviene en las diferentes etapas del proceso productivo. En la confección deportiva, esta articulación adquiere una importancia particular, dado que las prendas destinadas a la actividad física requieren precisión en las medidas, una selección adecuada de los textiles y el cumplimiento de especificaciones técnicas que favorezcan su funcionalidad y calidad.
    p El componente formativo Maquinaria y sistema de medidas de camisetas deportivas aborda progresivamente el análisis de medidas, las tipologías de prendas, los textiles, las fichas técnicas, la maquinaria, los materiales, los insumos y el patronaje básico. Estos contenidos se desarrollan desde una perspectiva técnica y aplicada, con el propósito de fortalecer los conocimientos necesarios para interpretar y ejecutar los procesos relacionados con la confección de camisetas deportivas.
    .row.justify-content-center.align-items-center(data-aos="fade-left")               
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
