<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Patronaje básico para el trazo de camiseta deportiva 

    .row.justify-content-center.mb-2(data-aos="zoom-in-left")
        .col-lg-5.mb-3.col-md-9.col-9
          img(src='@/assets/curso/temas/t6/img01.png', alt='')
        .col-lg-7
          .cajon.color-primario.p-4.mb-3
            p.mb-0 El patronaje básico permite representar la estructura corporal mediante trazos técnicos que sirven como punto de partida para la construcción y transformación de diferentes prendas. La precisión en las medidas, la correcta ubicación de las líneas estructurales y la señalización de las piezas son aspectos fundamentales para lograr patrones funcionales, equilibrados y coherentes con las especificaciones definidas.
          p En la confección de camisetas deportivas, las bases superiores femenina y masculina permiten establecer las proporciones necesarias para desarrollar el cuerpo, las mangas y los demás componentes de la prenda.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
          h3.bg2.py-2.w-card-text Patrón base superior femenino

    .row.justify-content-centeralign-items-stretch.mb-3(data-aos="zoom-in-left")
      .col-lg-4.mb-3.bg6.p-4
        .mb-4
        p La base superior femenina corresponde al patrón que representa la estructura corporal desde la región del cuello hasta la línea de cintura e incorpora las proporciones anatómicas necesarias para su correcta construcción. Este molde constituye el fundamento técnico para desarrollar prendas como blusas, camisetas, chaquetas, chalecos, corpiños y vestidos.
      .col-lg-4.mb-2
        img.d-none.d-lg-block(src="@/assets/curso/temas/t6/img02.png")
      .col-lg-4.mb-3 
        .row
          .col-lg-3.mb-3.col-3.col-md-2
            img(src="@/assets/curso/temas/t6/img03.png")
          .col-lg-12
            p La adecuada elaboración de esta base permite establecer una estructura equilibrada y facilita su posterior transformación según los requerimientos de diseño, funcionalidad y uso. Su correcta construcción favorece el ajuste, la estabilidad y la coherencia estructural de la prenda final dentro del proceso de patronaje.

    p Para reconocer el procedimiento de construcción de esta base, se recomienda consultar el anexo Pasos para el trazo de la base superior. El recurso presenta las orientaciones necesarias para ubicar las medidas, las líneas estructurales y los puntos que conforman el patrón.
    p Durante la consulta, identifique el orden de construcción del trazo y analice la relación entre las medidas corporales y las líneas que conforman el delantero y el posterior.

    .tarjeta.fondo01.p-3.mb-3(data-aos="fade-left")    
        .row.justify-content-around.align-items-center
          .col-lg-11.col-12
            .row.p-2
              .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
                img.img20(src='@/assets/curso/temas/t1/hoja.svg', alt='')
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-1 Anexo 3: Pasos para el trazo de la base superior
                  .col-sm-auto
                    a.boton.color-acento-boton.texto-blanco(:href="obtenerLink('/downloads/Anexos/Anexo 3. Pasos para el trazo de la base superior.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-1.mb-3.col-4.col-md-3
          img(src='@/assets/curso/temas/t6/img05.svg', alt='')
        .col-lg-11
          p Para ampliar la información, se recomienda consultar el anexo Manual de patronaje básico e interpretación de diseños, específicamente las páginas 20 a 25, en las cuales se presenta el trazo del patrón base superior femenino.
          p Durante la consulta, reconozca la ubicación de las líneas de referencia, los puntos de construcción y las medidas requeridas para obtener el patrón base.

    .tarjeta.fondo01.p-3.mb-3(data-aos="fade-left")    
        .row.justify-content-around.align-items-center
          .col-lg-11.col-12
            .row.p-2
              .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
                img.img20(src='@/assets/curso/temas/t1/hoja.svg', alt='')
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-1 Anexo 4: Manual de patronaje básico e interpretación de diseños
                  .col-sm-auto
                    a.boton.color-acento-boton.texto-blanco(:href="obtenerLink('/downloads/Anexos/Anexo 4. Manual de patronaje básico e interpretación de diseños.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
          h3.bg2.py-2.w-card-text Patrón base superior femenino

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-7.mb-3
        p Para trazar la cabeza de manga se requieren las siguientes medidas: 
        ul.lista-ul--color
                li.d-flex
                  i.fas.fa-angle-right2
                  | Recorrido de la sisa delantera, obtenido del patrón.

                li.d-flex
                  i.fas.fa-angle-right2
                  | Recorrido de la sisa posterior, obtenido del patrón.

                li.d-flex
                  i.fas.fa-angle-right2
                  | Tipo de cabeza de manga, según las características de la prenda deportiva, casual o formal.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Largo total de la manga.
        .cajon.color-acento-contenido.p-4.mb-4
          p En el trazo de la manga, la cabeza constituye un elemento estructural determinante en la configuración y adaptación de la prenda. Esta sección corresponde a la zona superior que se integra con la sisa del cuerpo y permite la unión entre la manga y el patrón base. Su construcción técnica influye directamente en la movilidad, el ajuste y la estabilidad de la prenda durante su uso.
      .col-lg-5.col-8.col-md-6
        img.w-card-icon(src="@/assets/curso/temas/t6/img06.png")
    p Para profundizar en la relación entre el cuerpo y la construcción de la manga, se recomienda consultar el anexo Aspectos clave en el trazo de la manga. Este recurso explica cómo la anatomía y la ergonomía influyen en el desarrollo del patrón de manga para prendas femeninas.
    p Durante la consulta, identifique los recorridos de sisa, la altura de la cabeza de manga y los puntos de referencia que permiten adaptar la pieza al patrón del cuerpo.


    .tarjeta.fondo01.p-3.mb-4(data-aos="fade-left")    
        .row.justify-content-around.align-items-center
          .col-lg-11.col-12
            .row.p-2
              .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
                img.img20(src='@/assets/curso/temas/t1/hoja.svg', alt='')
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-1 Anexo 5: Aspectos clave en el trazo de la manga
                  .col-sm-auto
                    a.boton.color-acento-boton.texto-blanco(:href="obtenerLink('/downloads/Anexos/Anexo 5. Aspectos clave para el trazo de la manga.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-1.mb-3.col-4.col-md-3
          img(src='@/assets/curso/temas/t6/camisa.svg', alt='')
        .col-lg-11
          p Asimismo, se recomienda consultar el video Trazo de manga y cabezas de manga, en el cual se explica la construcción del patrón de manga a partir de los recorridos de las sisas delantera y posterior, el largo de manga y el contorno de puño. El recurso también presenta la relación entre la altura de la cabeza de manga, la estructura de la prenda y la movilidad que esta proporciona.
    p Durante la consulta del recurso, identifique las diferencias entre las cabezas de manga para prendas deportivas, casuales y formales. Asimismo, analice cómo la suma de los recorridos de las sisas y su división en diferentes proporciones permiten determinar la altura de la cabeza de manga según el tipo de prenda. Reconozca también los puntos de referencia utilizados para construir las curvas delantera y posterior y verificar su correspondencia con las sisas del patrón.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-12
        figure
          .video
            iframe( width="560" height="315" src="https://www.youtube.com/embed/flZWxWKNq5s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
          figcaption Video: trazo de manga y cabezas de manga

    separador
    #t_6_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 6.1 Patrones básicos masculinos

    p El patrón base superior masculino representa la estructura inicial que se ajusta y transforma para desarrollar diferentes prendas, como camisas, camisetas, chaquetas o chalecos. Esta base cubre desde el cuello hasta un largo ubicado entre la cintura y la cadera, de acuerdo con las características del diseño.

    .row.justify-content-start.mb-3(data-aos="zoom-in-left")
      .col-12.col-lg-5
        h4.bg3.py-2.w-card-text2 Etapas para construir el patrón base superior masculino

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-4.col-8.col-md-6
        img(src='@/assets/curso/temas/t6/img07.png', alt='')
      .col-lg-6
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Trazado del patrón base")
            .col-lg-12.mb-md-0
              p Construir la estructura inicial a partir de las medidas corporales y los puntos de referencia requeridos.
          .row(numero="2" titulo="Interpretación de líneas estructurales")
            .col-lg-12.mb-md-0
              p Identificar las líneas que conforman el patrón, como el centro, el cuello, el hombro, la sisa, el costado, la cintura y la cadera.

          .row(numero="3" titulo="Aplicación de desahogos")
            .col-lg-12.mb-md-0
              p Incorporar los ajustes necesarios en los contornos, largos y anchos, según el tipo de prenda que se va a desarrollar.

          .row(numero="4" titulo="Definición del sistema de ajuste")
            .col-lg-12.mb-md-0
              p Establecer los recursos que permiten adaptar la prenda al cuerpo, de acuerdo con sus características y funcionalidad.

          .row(numero="5" titulo="Definición del sistema de cierre")
            .col-lg-12.mb-md-0
              p Determinar el uso de botonaduras, cremalleras u otros sistemas de cierre, cuando el diseño lo requiera.

          .row(numero="6" titulo="Diseño de piezas complementarias")
            .col-lg-12.mb-md-0
              p Desarrollar los cuellos, puños, vistas y demás componentes necesarios para la construcción de la prenda.

          .row(numero="7" titulo="Señalización técnica")
            .col-lg-12.mb-md-0
              p Incorporar las marcas de guía, unión, dirección del hilo y demás indicaciones necesarias para interpretar correctamente el patrón.

          .row(numero="8" titulo="Despiece del molde")
            .col-lg-12.mb-md-0
              p Separar y organizar las piezas que conforman el patrón para facilitar su identificación y posterior proceso de corte.

    p Este patrón actúa como una plantilla esencial sobre la cual se realizan las transformaciones necesarias para diseñar prendas específicas, favoreciendo el ajuste, la funcionalidad y la estética del producto final.
    p Para ampliar la información sobre la construcción de esta base, se recomienda consultar el anexo Análisis estructura masculina prepatronaje. Este recurso presenta los fundamentos y las orientaciones técnicas necesarias para desarrollar el patrón base superior masculino.
    
    .tarjeta.fondo01.p-3.mb-4(data-aos="fade-left")    
        .row.justify-content-around.align-items-center
          .col-lg-11.col-12
            .row.p-2
              .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
                img.img20(src='@/assets/curso/temas/t1/hoja.svg', alt='')
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-1 Anexo 6: Análisis estructura masculina prepatronaje
                  .col-sm-auto
                    a.boton.color-acento-boton.texto-blanco(:href="obtenerLink('downloads/Anexos/Anexo 6. Analisis estructura masculina prepatronaje.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download

    .fondo06
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-8.col-10.col-md-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 22. 
            span Base superior masculina
          img(src='@/assets/curso/temas/t6/fig22.svg', alt='Esquema técnico del patrón base superior masculino, con las piezas delantera y posterior delimitadas por las líneas de centro frente y centro atrás. Incluye el trazado del escote, los hombros, las sisas, los costados y el borde inferior, acompañado por líneas auxiliares, curvas, fórmulas y medidas de construcción.')

    p Para complementar este procedimiento, se recomienda consultar el documento Manual de patronaje básico e interpretación de diseños, específicamente la página 65, en la cual se presenta el trazo del esquema del patrón base masculino clásico.

    .tarjeta.fondo01.p-3.mb-4(data-aos="fade-left")    
        .row.justify-content-around.align-items-center
          .col-lg-11.col-12
            .row.p-2
              .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
                img.img20(src='@/assets/curso/temas/t1/hoja.svg', alt='')
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-1 PDF: Manual de patronaje básico e interpretación de diseños
                  .col-sm-auto
                    a.boton.color-acento-boton.texto-blanco(:href="obtenerLink('downloads/Anexos/Anexo 7. Manual de patronaje basico e interpretacion de diseños.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download

    p Por otro lado, para fortalecer la comprensión sobre la preparación técnica de los patrones, se recomienda consultar el video Despiece de planos. Este recurso presenta el procedimiento para separar las piezas de un patrón previamente interpretado, teniendo en cuenta los requerimientos de confección, los márgenes de costura y las características de cada componente de la prenda.
    p Durante la consulta del recurso, identifique el proceso de calco y despiece de piezas como el delantero, el posterior, la botonadura, el cuello, el pie de cuello, la manga, el puño y el bolsillo. Asimismo, reconozca la importancia de incorporar el sentido del hilo, las líneas de doblez, los piquetes, los márgenes de costura, la cantidad de piezas que deben cortarse y la información necesaria para su correcta identificación.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-12
        figure
          .video
            iframe( width="560" height="315" src="https://www.youtube.com/embed/u0eiVcJAldI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
          figcaption Video: Despiece de planos

    separador
    #t_6_2.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 6.2 Patrón de camiseta deportiva

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-1.mb-3.col-4.col-md-3
          img(src='@/assets/curso/temas/t6/img08.svg', alt='')
        .col-lg-11
          p En esta sección se presentan los planos de patronaje y las indicaciones técnicas para realizar el trazado de los patrones básicos de camisetas deportivas masculina y femenina. Las medidas propuestas corresponden a una talla de referencia y deben ajustarse según la escala de tallas y las especificaciones registradas en la ficha técnica de producción.

    .row.justify-content-start.mb-3(data-aos="zoom-in-left")
      .col-12.col-lg-4
        h4.bg3.py-2.w-card-text2 Patrón de camiseta deportiva masculina

    .fondo06
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8.col-11.col-md-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 23. 
            span Trazo del patrón de camiseta deportiva masculina
          img(src='@/assets/curso/temas/t6/fig23.svg', alt='Plano técnico del patrón de una camiseta deportiva masculina compuesto por el cuerpo, la manga y el cuello. Incluye líneas estructurales, curvas, puntos de construcción y medidas de referencia para realizar el trazado.')


    .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-4
      h5 Tabla 14.
      span Pasos para el trazado del patrón básico de camiseta deportiva masculina

    .tabla-a.color-acento-botones(data-aos="zoom-in-left").mb-4
      table
        thead
          tr
            th.izq.bg5(style="width:6%") N.°
            th.izq.bg5(style="width:18%") Parte del patrón
            th.izq.bg5(style="width:46%") Paso
            th.izq.bg5(style="width:30%") Medida de referencia
        tbody
          tr
            td.text-center 1
            td Cuerpo delantero/trasero
            td Se traza un rectángulo base con el ancho total de la prenda.
            td 28,5 cm de ancho.

          tr
            td.text-center 2
            td Cuerpo delantero/trasero
            td Se marca el largo total del cuerpo desde el hombro hasta el bajo.
            td 72 cm de largo.

          tr
            td.text-center 3
            td Escote
            td Se traza el ancho del escote desde el centro hacia el hombro.
            td 15 cm de ancho.

          tr
            td.text-center 4
            td Escote
            td Se marca la profundidad del escote descendiendo desde la línea de hombro.
            td 10 cm de profundidad.

          tr
            td.text-center 5
            td Hombro
            td Se traza la línea de hombro con caída desde el cuello hacia la sisa.
            td 3 cm de caída.

          tr
            td.text-center 6
            td Sisa
            td Se construye la curva de sisa desde el extremo del hombro hasta la línea de axila.
            td 24 cm de profundidad.

          tr
            td.text-center 7
            td Costado
            td Se traza la línea lateral recta desde la axila hasta el bajo del cuerpo.
            td 72 cm menos profundidad de sisa.

          tr
            td.text-center 8
            td Ancho de sisa
            td Se marca el ancho horizontal de la sisa en la línea de axila.
            td 23,5 cm.

          tr
            td.text-center 9
            td Manga
            td Se traza el rectángulo base de la manga con su ancho y largo.
            td 18 cm de ancho × 23 cm de largo.

          tr
            td.text-center 10
            td Cabeza de manga
            td Se construye la curva de cabeza de manga desde el punto de hombro.
            td Curva de 12 cm en cada lado.

          tr
            td.text-center 11
            td Cuello (vista o ribete)
            td Se traza la tira de cuello como rectángulo independiente.
            td 2,5 cm × 5 cm (doble: 2,5 cm + 2,5 cm).

          tr
            td.text-center 12
            td Verificación
            td Se cotejan todas las piezas entre sí para confirmar que las costuras coinciden en largo y curvaturas.
            td Todas las piezas.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-8
        .cajon.color-secundario.p-4.mb-3
          p.mb-0 #[b Nota.] Las medidas corresponden a una talla de referencia M y deben ajustarse según la escala de tallas definida en la ficha técnica de producción.


    .fondo06(data-aos="zoom-in-left")
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8.col-11.col-md-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 24. 
            span Trazo del patrón de camiseta deportiva femenina
          img(src='@/assets/curso/temas/t6/fig24.svg', alt='Plano técnico del patrón de una camiseta deportiva masculina compuesto por el cuerpo, la manga y el cuello. Incluye líneas estructurales, curvas, puntos de construcción y medidas de referencia para realizar el trazado.')

    .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-4
      h5 Tabla 15.
      span Pasos para el trazado del patrón básico de camiseta deportiva femenina

    .tabla-a.color-acento-botones(data-aos="zoom-in-left").mb-4
      table
        thead
          tr
            th.izq.bg5(style="width:6%") N.°
            th.izq.bg5(style="width:18%") Parte del patrón
            th.izq.bg5(style="width:46%") Paso
            th.izq.bg5(style="width:30%") Medida de referencia
        tbody
          tr
            td.text-center 1
            td Cuerpo delantero y posterior
            td Se traza el rectángulo base con el ancho total de la prenda desde el centro hasta el costado.
            td 26 cm de ancho.

          tr
            td.text-center 2
            td Cuerpo delantero y posterior
            td Se marca el largo total del cuerpo desde la línea de hombro hasta el borde inferior.
            td 23 cm + 19 cm + 18 cm = 60 cm de largo.

          tr
            td.text-center 3
            td Hombro posterior
            td Se traza el ancho del hombro desde el escote hasta el extremo de la sisa.
            td 10,5 cm de ancho.

          tr
            td.text-center 4
            td Hombro delantero
            td Se traza el ancho del hombro delantero desde el escote hasta el extremo de la sisa.
            td 8,5 cm de ancho.

          tr
            td.text-center 5
            td Escote posterior
            td Se marca la profundidad del escote posterior descendiendo desde la línea de hombro.
            td 2 cm de profundidad.

          tr
            td.text-center 6
            td Escote delantero
            td Se marca la profundidad del escote delantero, con una medida mayor que la del posterior.
            td 9 cm de profundidad.

          tr
            td.text-center 7
            td Sisa posterior
            td Se construye la curva de sisa posterior desde el extremo del hombro hasta la línea de axila.
            td 2,2 cm de entrada en la curva.

          tr
            td.text-center 8
            td Sisa delantera
            td Se construye la curva de sisa delantera desde el extremo del hombro hasta la línea de axila.
            td 2,5 cm de entrada en la curva.

          tr
            td.text-center 9
            td Talle
            td Se marca la línea de talle con el ajuste lateral correspondiente a la estructura femenina.
            td 3 cm de entrada posterior y 3,2 cm de entrada delantera.

          tr
            td.text-center 10
            td Cadera
            td Se traza la línea de cadera con el ancho correspondiente al volumen de la prenda.
            td 23 cm de ancho.

          tr
            td.text-center 11
            td Borde inferior del cuerpo
            td Se traza la línea inferior con la salida lateral correspondiente en el costado.
            td 1 cm de salida en cada costado.

          tr
            td.text-center 12
            td Vista de escote o ribete
            td Se construye la vista del escote delantero como una pieza independiente con sus curvas interior y exterior.
            td 14 cm de largo × 6 cm de ancho, curva interior de 2,5 cm y margen de 1 cm.

          tr
            td.text-center 13
            td Verificación del delantero y el posterior
            td Se cotejan ambas piezas para confirmar que los costados, los hombros y las sisas coincidan en longitud y curvatura.
            td Todas las piezas.

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-8
        .cajon.color-secundario.p-4.mb-3
          p.mb-0 #[b Nota.] Las medidas corresponden a una talla de referencia M y deben ajustarse según la escala de tallas definida en la ficha técnica de producción. El patrón presenta piezas delantera y posterior independientes debido a las diferencias de ajuste en el escote, la sisa y el talle propias de la estructura femenina.

    p El trazado de los patrones de camiseta deportiva permite integrar las medidas corporales, las líneas estructurales y los requerimientos técnicos de la prenda. La correcta construcción y verificación del cuerpo, las mangas, los escotes, las sisas y los costados favorece el ajuste, la movilidad y la funcionalidad del producto antes de iniciar los procesos de corte y confección.
























































</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
<style lang="sass"></style>
