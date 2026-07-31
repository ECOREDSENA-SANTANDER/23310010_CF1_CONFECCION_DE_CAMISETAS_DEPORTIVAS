<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Análisis y clasificación de las medidas
      
      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img01.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          br
          p.mb-0 El análisis de medidas implica organizar y sistematizar los datos obtenidos del cuerpo humano, ya que esta información orienta de manera directa el desarrollo técnico del patronaje y la construcción de la moldería. En este sentido, resulta necesario disponer de un sistema de medidas estructurado que permita identificar, ordenar y clasificar cada registro según su función dentro del proceso.
            br
            br
      p La correcta interpretación de estas medidas facilita su aplicación en la elaboración de patrones básicos, al establecer relaciones proporcionales entre los distintos segmentos corporales y los requerimientos de ajuste, holgura y funcionalidad que exige la prenda. De este modo, la clasificación técnica de las medidas se convierte en un soporte fundamental para garantizar la coherencia entre la estructura corporal y la solución constructiva propuesta.

      .row.justify-content-center.align-items-center.mb-3(data-aos="fade-left")
        .col-lg-8.mb-3
          .row.justify-content-start.mb-4(data-aos="zoom-in-left")
            .col-sm-12.col-lg-12
              .d-flex.align-items-center
                img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
                h3.bg2.py-2.w-card-text Clasificación de los sistemas de medidas
          p En el ámbito del patronaje, el sistema de medidas corresponde al conjunto organizado de procedimientos utilizados para obtener, registrar y aplicar los datos derivados de la medición corporal. La precisión en este proceso resulta determinante para la construcción de patrones de prendas de vestir, ya que de la calidad del registro depende el nivel de ajuste, adaptación y funcionalidad que la prenda alcance durante su uso.
          .cajon.color-acento-contenido.p-4.mb-4
            p El proceso de medición influye directamente en la forma en que la prenda se adapta al cuerpo, considerando relaciones de proporcionalidad, confort y desempeño funcional, con el propósito de lograr coherencia entre la estructura corporal y la solución constructiva desarrollada.
        .col-lg-4.col-8.col-md-6
          img(src='@/assets/curso/temas/t1/img02.png', alt='')
      p De manera general, los sistemas de medidas empleados en patronaje se clasifican en:   

      .row.justify-content-start.mb-3(data-aos="zoom-in-left")
        .col-12.col-lg-5
          h4.bg3.py-2.w-card-text2 Sistemas de medidas empleadas en patronaje
    
      .row.justify-content-center.align-items-center.mb-2(data-aos="fade-left")
        .col-lg-10
          .tarjeta--container.row.justify-content-center
            .col-md.tarjeta.color-primario.p-4.col-md-9.col-lg-6
              h3.text-center Sistema inglés
              p Toma como unidad base la pulgada. Se utiliza de forma tradicional en procesos de patronaje desarrollados en contextos productivos de países como Estados Unidos, Inglaterra y Australia.
              .row.justify-content-center.mb-4
                .col-11.bg1.p-4
                  .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                    h5 Figura 1. 
                    span Escala de fracciones de pulgada del sistema inglés
                  figure
                    img(src='@/assets/curso/temas/t1/fig1.svg', alt='Escala fraccionaria entre uno y dos que organiza divisiones sucesivas del segmento en dieciseisavos, octavos, cuartos, medios y tres cuartos para referencia de medidas proporcionales.')    
            
            .col-md.tarjeta.color-acento-contenido.p-4.col-md-9.col-lg-6
              h3.text-center Sistema internacional o métrico decimal
              p Toma como unidad base el metro. Se emplea de manera predominante en la mayoría de los países de América Latina y en diversos entornos industriales y educativos vinculados con la confección.
              .row.justify-content-center.mb-4
                .col-11.bg1.p-4
                  .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                    h5 Figura 2.
                    span  Escala de centímetros del sistema métrico decimal
                  figure
                    img(src='@/assets/curso/temas/t1/fig2.svg', alt='Escala métrica lineal graduada de cero a cinco centímetros, con subdivisiones regulares que permiten precisar medidas cortas en unidades y fracciones de centímetro.')    

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg2.py-2.w-card-text Las medidas
      .row.justify-content-center.mb-2
        .col-lg-5.mb-3.col-md-9
          img(src='@/assets/curso/temas/t1/img03.png', alt='')
        .col-lg-7
          .cajon.color-primario.p-4.mb-3
            p.mb-0 Las medidas corresponden a valores numéricos que permiten describir el tamaño y las proporciones de una figura, un objeto o un segmento corporal. En los procesos de patronaje de prendas, estos datos se obtienen mediante el uso de la cinta métrica flexible, aplicada de forma lineal y perimetral para registrar longitudes, anchos y contornos de las diferentes zonas del cuerpo
          p En el contexto colombiano, la práctica formativa y productiva suele emplear el sistema métrico decimal, registrando las mediciones principalmente en centímetros, aunque en algunos entornos técnicos también se contempla el uso de pulgadas, según requerimientos específicos.
      p A continuación, se presentan aspectos relevantes para la toma y organización de la información corporal:

      .row.justify-content-start.mb-3(data-aos="zoom-in-left")
        .col-12.col-lg-2
          h4.bg3.py-2.w-card-text2 Medidas corporales
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-1.mb-3.col-4.col-md-3
          img(src='@/assets/curso/temas/t1/ico2.svg', alt='')
        .col-lg-11
          p Las medidas corporales se obtienen a partir de puntos de referencia anatómicos definidos, considerando criterios antropométricos que permiten ubicar con precisión cada registro. Estas mediciones tienen en cuenta los volúmenes y relieves estructurales del cuerpo, con el fin de garantizar coherencia entre la configuración corporal y los requerimientos de construcción de la prenda. De acuerdo con su función dentro del patronaje, estas medidas se agrupan en tres categorías principales.

      .row.mb-3(data-aos="fade-left")
        .col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton.color-acento-contenido.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5
                figure
                  img(src='@/assets/curso/temas/t1/1.svg', alt='')
            h4.text-center Largos
            p.mb-0 Las medidas se toman de forma vertical y hacen referencia a los largos y talles del cuerpo.

        .col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton.color-acento-contenido.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5
                figure
                  img(src='@/assets/curso/temas/t1/2.svg', alt='')
            h4.text-center Anchos
            p.mb-0 Las medidas se toman de forma horizontal y corresponden a los anchos del cuerpo, como el ancho de pecho.

        .col-sm-6.col-lg-4.mb-4.mb-sm-0
          .tarjeta--boton.color-acento-contenido.p-4.h-100
            .row.justify-content-center.mb-3
              .col-5
                figure
                  img(src='@/assets/curso/temas/t1/3.svg', alt='')
            h4.text-center Contornos
            p.mb-0 Las medidas se toman teniendo en cuenta la configuración tridimensional del cuerpo humano; por ejemplo, el contorno completo de la cintura.

      .row.justify-content-center.align-items-center.mb-3(data-aos="fade-left")
        .col-lg-6.mb-3.col-md-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 3. 
            span Clasificación de las medidas corporales femeninas
          figure
            img(src='@/assets/curso/temas/t1/fig3.svg', alt='Ilustración de una figura femenina de frente y de espalda con líneas rojas que indican los principales puntos para la toma de medidas corporales. Incluye circunferencia de la cabeza, hombro, sisa, largo de talle delantero y de espalda, largo y contorno de manga, contornos de busto, cintura, cadera y puño, ancho de espalda, alto de cadera, tiro y largo del pantalón.')
        .col-lg-6.mb-3.col-md-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 4. 
            span Clasificación de las medidas corporales masculinas
          figure
            img(src='@/assets/curso/temas/t1/fig4.svg', alt='Lámina técnica con varias representaciones de una figura corporal masculina que explican la toma de medidas mediante líneas amarillas. Incluye recorridos de hombro y brazo, contornos de pecho, cintura, cadera, cuello, muñeca y tobillo, ancho de espalda, largos de talle, manga y pantalón, entrepierna, tiro, sisa y profundidad de axila.')

      p Para fortalecer la comprensión sobre la clasificación y la toma de medidas corporales, se recomienda consultar el video Clasificación de medidas, en el cual se explican los contornos, los largos y los anchos, así como los principales puntos anatómicos de referencia utilizados en el patronaje.
      p Durante la consulta del recurso, identifique la cintura como eje central para organizar la medición del cuerpo y reconozca la forma correcta de tomar medidas en las zonas superior e inferior. También analice la importancia de mantener una postura adecuada, ubicar con precisión los puntos corporales y emplear correctamente la cinta métrica para obtener registros útiles en la elaboración de patrones.

      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")         
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/nrZzZ6GeEjY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video: clasificación de medidas

      .tarjeta.fondo01.p-3.mb-3(data-aos="fade-left")    
        .row.justify-content-around.align-items-center
          .col-lg-11.col-12
            .row.p-2
              .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
                img.img20(src='@/assets/curso/temas/t1/hoja.svg', alt='')
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    p Por otro lado, para ampliar la información sobre la medición corporal, se recomienda consultar el anexo Medidas anatómicas, clasificación y análisis, en el cual se explican los puntos anatómicos de referencia y la clasificación de las medidas empleadas en los procesos de patronaje.
                    h4.mb-1 Anexo 1: Medidas anatómicas, clasificación y análisis
                  .col-sm-auto
                    a.boton.color-acento-boton.texto-blanco(:href="obtenerLink('/downloads/Anexos/Anexo 1. Medidas anatómicas, clasificación y análisis.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download

      p El análisis y la clasificación de las medidas permiten organizar la información corporal, diferenciar largos, anchos y contornos, y aplicar correctamente los sistemas de medición empleados en patronaje. La precisión de estos registros constituye una base necesaria para lograr patrones coherentes con la estructura y las proporciones del cuerpo.
      p A partir de estos fundamentos, el siguiente apartado aborda el análisis de las medidas y las tipologías de prendas, estableciendo la relación entre la proporción corporal, los sistemas de tallas y las características estructurales de las prendas.

























































































  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
