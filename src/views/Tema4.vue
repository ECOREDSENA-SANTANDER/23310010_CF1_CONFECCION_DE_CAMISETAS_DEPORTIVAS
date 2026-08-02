<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Fichas técnicas

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-3(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el entorno productivo de la confección, la documentación técnica constituye uno de los pilares que sostienen la organización y la calidad de los procesos. Dentro de esta documentación, la ficha técnica ocupa un lugar central, ya que concentra en un solo instrumento la información necesaria para que cada etapa de la cadena productiva se ejecute con precisión y coherencia.
          br 
          br 
          | Comprender su definición, sus tipos y las características que debe reunir permite elaborarla correctamente, interpretarla y aplicarla con criterio en diferentes contextos del sector.      

    separador
    #t_4_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 4.1 Definición y tipos 

    .row.justify-content-center.align-items-center.mb-1(data-aos="zoom-in-left")
      .col-lg-7.mb-3
        p La ficha técnica es un documento estructurado que registra de manera sistemática las especificaciones técnicas de una prenda de vestir o de un proceso productivo. Su función principal consiste en garantizar que toda la información necesaria para la producción esté disponible, sea comprensible y pueda consultarse en cualquier etapa del proceso, desde el diseño hasta el control de calidad.
        .cajon.color-primario.p-3.mb-0
          p.mb-0 En el sector de la confección, la ficha técnica actúa como instrumento de comunicación entre las distintas áreas de la cadena productiva: diseño, patronaje, corte, ensamble y calidad. Su correcta elaboración reduce los márgenes de error, facilita la estandarización de los procesos y permite la trazabilidad del producto a lo largo de su desarrollo.
      .col-lg-5.col-10.mb-3.col-md-8
        img(src='@/assets/curso/temas/t4/img02.png', alt='')
    p De acuerdo con su propósito, las fichas técnicas se clasifican de la siguiente manera:

    .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-4
      h5 Tabla 3.
      span Tipos de fichas técnicas en el sector de la confección

    .tabla-a.color-acento-botones(data-aos="zoom-in-left").mb-4
      table
        thead
          tr
            th.izq.bg5.w-25 Tipo de ficha técnica
            th.izq.bg5 Descripción
        tbody
          tr
            td Ficha técnica de diseño
            td Registra las características estéticas y conceptuales de la prenda, como el boceto, la paleta de color, los materiales propuestos y la temporada.

          tr
            td Ficha técnica de producción
            td Detalla las especificaciones operativas para la fabricación, como materiales, insumos, medidas, márgenes de costura y secuencia de ensamble.

          tr
            td Ficha técnica de materiales e insumos
            td Describe las características técnicas de cada material utilizado, como composición, peso, rendimiento y condiciones de uso.

          tr
            td Ficha técnica de calidad
            td Establece los criterios de aceptación o rechazo del producto terminado, como tolerancias, puntos de revisión y estándares aplicables.

          tr
            td Ficha técnica de maquinaria
            td Contiene la información técnica de los equipos utilizados en el proceso, como referencia, tipo de puntada, calibración y mantenimiento.


    separador
    #t_4_2.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 4.2 Características y aplicación

    p.mb-3(data-aos="zoom-in-left") No toda ficha técnica cumple adecuadamente su función. Un documento mal estructurado, desactualizado o con datos imprecisos puede generar dificultades en la línea de producción. Para que la ficha técnica sea realmente útil, debe reunir cinco características esenciales:
    
    .row.justify-content-start.mb-3(data-aos="zoom-in-left")
        .col-12.col-lg-5
          h4.bg3.py-2.w-card-text2 Características esenciales de una ficha técnica

    SlyderF(columnas="col-lg-6 col-xl-4").mb-4(data-aos="zoom-in-left")
      .tarjeta.fondo03.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t4/1.png' alt='')
        h4.text-center Precisión
        p Cada dato registrado debe ser exacto y verificable. Las medidas, las referencias de materiales y los tipos de puntada no admiten ambigüedades.

      .tarjeta.fondo03.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t4/2.png' alt='')
        h4.text-center Completitud
        p Debe contener toda la información necesaria para ejecutar el proceso sin recurrir a fuentes adicionales.

      .tarjeta.fondo03.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t4/3.png' alt='')
        h4.text-center Claridad
        p La información debe organizarse de manera lógica y expresarse mediante un lenguaje comprensible para todos los roles que intervienen en el proceso.

      .tarjeta.fondo03.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t4/4.png' alt='')
        h4.text-center Actualización
        p Debe reflejar siempre la versión vigente. Toda modificación debe registrarse con la fecha, la persona responsable y la descripción del cambio.

      .tarjeta.fondo03.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t4/5.png' alt='')
        h4.text-center Trazabilidad
        p Debe permitir reconstruir el historial del producto o del proceso, facilitando la identificación, revisión y corrección de desviaciones.

    p En la práctica, la ficha técnica acompaña cada etapa del proceso productivo y cumple una función específica:

    .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-4
      h5 Tabla 4.
      span Etapas del proceso de confección y aplicación de la ficha técnica

    .tabla-a.color-acento-botones(data-aos="zoom-in-left").mb-4
      table
        thead
          tr
            th.izq.bg5.w-25 Etapa del proceso
            th.izq.bg5 Aplicación de la ficha técnica
        tbody
          tr
            td #[b Diseño]
            td Consolida la propuesta creativa y define los parámetros técnicos iniciales de la prenda.

          tr
            td #[b Patronaje]
            td Orienta la construcción del patrón base con base en las medidas y especificaciones registradas.

          tr
            td #[b Corte]
            td Indica la cantidad de piezas, el sentido del hilo, los márgenes de costura y el tipo de material.

          tr
            td #[b Ensamble]
            td Guía la secuencia de unión de piezas, los tipos de costura y los acabados requeridos.

          tr
            td #[b Control de calidad]
            td Sirve como referencia para verificar que el producto terminado cumple con las especificaciones establecidas.

    .fondo02(data-aos="zoom-in-left")
      .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/img03.png', alt='')
        .col-lg-7
          .p-4
            .d-flex.align-items-start
              .row
                .col-lg-2.mb-3.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t4/img04.png', alt='')
                .col-lg-12
                  h4 Importancia documental de la ficha técnica
                  p En los entornos de producción industrial, la ficha técnica es un documento oficial que forma parte del sistema de gestión documental de la empresa. Su elaboración, aprobación, actualización y archivo deben seguir los procedimientos establecidos por cada organización.

    p Para ampliar la comprensión sobre la función de las fichas técnicas en el proceso productivo, se recomienda consultar el video Introducción a la ficha técnica. Este recurso explica cómo estos documentos concentran la información necesaria para la fabricación de una prenda y permiten mantener la trazabilidad en las etapas de diseño, patronaje, escalado, corte, confección y empaque.
    p Durante la consulta del recurso, identifique los principales tipos de fichas técnicas y reconozca que su estructura puede variar de acuerdo con las necesidades, los procesos y los requerimientos de cada organización. Asimismo, analice la importancia de registrar información clara, detallada y comprensible para las áreas que intervienen en la producción.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-12
        figure
          .video
            iframe( width="560" height="315" src="https://www.youtube.com/embed/5YOLIDHLiCw?start=474" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
          figcaption Video. Introducción a la ficha técnica.

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-1.mb-3.col-4.col-md-3
          img(src='@/assets/curso/temas/t4/play.svg', alt='')
        .col-lg-11
          p Por otra parte, para fortalecer la aplicación práctica de estos conocimientos, se recomienda consultar el video Diligenciamiento de ficha técnica de prenda. Este recurso presenta los diferentes documentos que pueden conformar el paquete técnico de una prenda y explica el procedimiento para registrar sus características generales, el dibujo plano, los sistemas de cierre y ajuste, los acabados y las observaciones.
    p Durante la consulta del recurso, reconozca la relación entre las fichas de usuario, prenda, patronaje, insumos, tendido y corte, ajuste de tallas y ruta operacional. También analice la importancia de diligenciar cada campo con precisión, claridad y coherencia, de manera que la información oriente correctamente la elaboración del producto.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-12
        figure
          .video
            iframe( width="560" height="315" src="https://www.youtube.com/embed/PfYp-Hsyb6I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
          figcaption Video: diligenciamiento de ficha técnica de prenda

    p La ficha técnica permite integrar y comunicar las especificaciones necesarias para desarrollar una prenda de manera organizada, precisa y trazable. A partir de esta documentación, el siguiente apartado aborda la maquinaria, los materiales y los insumos requeridos para ejecutar las operaciones de confección.
















































</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
