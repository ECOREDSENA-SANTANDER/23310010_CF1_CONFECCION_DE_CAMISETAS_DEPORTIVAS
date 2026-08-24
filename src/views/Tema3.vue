<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Textiles

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-3(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los materiales textiles, tanto para aplicaciones de vestuario como para usos industriales, se originan a partir de fibras que constituyen la unidad básica de cualquier estructura textil. Estas fibras se transforman mediante procesos técnicos que incluyen la formación de filamentos, el hilado para obtener hilos y, posteriormente, la conformación de tejidos que dan lugar a las telas. La comprensión de esta secuencia permite interpretar cómo las características del material influyen en el comportamiento, la resistencia y la funcionalidad del producto final.
          br       
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
          h3.bg2.py-2.w-card-text Fibras textiles

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
      .col-lg-4.mb-3.h-100.bg5.p-3
        p Se entienden como la unidad sólida elemental que compone toda estructura textil. Cada fibra corresponde a un filamento que participa en la conformación de los hilos y, en consecuencia, de los tejidos y telas. Desde el punto de vista técnico, se considera fibra a aquel elemento cuya longitud es considerablemente mayor que su diámetro, condición que posibilita su entrelazado, torsión y transformación en estructuras textiles con propiedades específicas de resistencia, flexibilidad y adaptabilidad al uso.
      .col-lg-4.mb-3.col-9
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 10. 
          span Fibras textiles
        figure
          img(src="@/assets/curso/temas/t3/img02.png", alt="Conjunto de fibras textiles agrupadas en hebras, presentado como materia prima para la elaboración de hilos, tejidos y telas.")
      .col-lg-4.mb-3
        .row
          .col-lg-4.mb-3.col-4.col-md-3
            img(src="@/assets/curso/temas/t3/img03.svg")
          .col-lg-12 
            p Las fibras textiles se organizan de acuerdo con su origen, lo que permite comprender sus propiedades físicas, su comportamiento durante los procesos de transformación y su pertinencia según el uso final. De manera general, se reconocen dos grandes grupos: fibras naturales y fibras químicas, cada uno con subdivisiones según la materia prima de procedencia.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-4
      h5 Tabla 1.
      span Clasificación de las fibras textiles

    .tabla-a.color-acento-botones(data-aos="zoom-in-left").mb-4
      table
        caption Nota. SENA (2025).
        thead
          tr
            th.izq.bg5 Grupo
            th.izq.bg5 Subgrupo
            th.izq.bg5 Procedencia
            th.izq.bg5 Ejemplos
        tbody
          tr
            td Fibras naturales
            td Animal
            td Procedentes de secreciones sedosas.
            td Seda y seda silvestre.

          tr
            td Fibras naturales
            td Animal
            td Procedentes de folículos pilosos.
            td Alpaca, angora, camello, cachemira, conejo, llama, vicuña y yak, entre otras.

          tr
            td Fibras naturales
            td Vegetal
            td Procedentes de la semilla.
            td Algodón.

          tr
            td Fibras naturales
            td Vegetal
            td Procedentes del tallo.
            td Lino, cáñamo, yute y ramio.

          tr
            td Fibras naturales
            td Vegetal
            td Procedentes de la hoja.
            td Esparto y sisal.

          tr
            td Fibras naturales
            td Vegetal
            td Procedentes del fruto.
            td Coco.

          tr
            td Fibras naturales
            td Mineral
            td Origen inorgánico.
            td Asbesto, fibra de vidrio y fibra de carbono.

          tr
            td Fibras químicas
            td Artificiales
            td Base proteica.
            td Fibras derivadas de caseína y alginatos.

          tr
            td Fibras químicas
            td Artificiales
            td Base celulósica.
            td Rayón: viscosa, cupro y acetato.

          tr
            td Fibras químicas
            td Artificiales
            td Base metálica.
            td Filamentos con contenido de oro, plata o cobre.

          tr
            td Fibras químicas
            td Sintéticas
            td Por polimerización.
            td Polivinilo y fibras acrílicas.

          tr
            td Fibras químicas
            td Sintéticas
            td Por condensación.
            td Poliéster y poliamida (nylon).

          tr
            td Fibras químicas
            td Sintéticas
            td Por poliadición.
            td Poliuretano y elastómeros.

    .row.justify-content-center.cursor-pointer.mb-2(data-aos="zoom-in-left").h-100
        .col-xl-4.col-md-9.col-11.mb-4.mb-xl-0.h-100
          .crd_hover_txt(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t3/1.png", alt="")
            .crd_hover_txt--body
              h4.mb-4.d-flex.align-items-center
                span.icono-circulo.me-3
                  span.flecha
                | Hilo
              p.mb-0 Se entiende como la agrupación de fibras textiles, continuas o discontinuas, que se integran mediante torsión hasta alcanzar una longitud suficiente para su utilización en la fabricación de estructuras textiles. Esta conformación permite obtener un elemento resistente y uniforme, apto para los procesos posteriores de tejido.
        
        .col-xl-4.col-md-9.col-11.mb-4.mb-xl-0.h-100(data-aos="zoom-in-left")
          .crd_hover_txt(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t3/2.png", alt="")
            .crd_hover_txt--body
              h4.mb-4.d-flex.align-items-center
                span.icono-circulo.me-3
                  span.flecha
                | Hilatura
              p.mb-0 Corresponde al proceso técnico mediante el cual los filamentos o las fibras se transforman y organizan en hebras continuas, preparadas para la construcción de hilos y, posteriormente, de tejidos. Este procedimiento incide de manera directa en propiedades como la resistencia, la regularidad y el desempeño funcional del material durante su uso.
        .col-xl-4.col-md-8.col-10.mb-4.mb-xl-0.h-100
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 11. 
            span Hilatura
          figure 
            img(src="@/assets/curso/temas/t3/fig11.png", alt="Conjunto de ovillos de fibra textil natural organizados como materia prima para procesos de tejido y elaboración de productos artesanales")

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
      .col-lg-8.mb-3
        .row.justify-content-start.mb-2(data-aos="zoom-in-left")
          .col-sm-12.col-lg-12
            .d-flex.align-items-center
              img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
              h3.bg2.py-2.w-card-text Tejidos
        p Los tejidos corresponden a estructuras textiles obtenidas a partir de la transformación y organización de fibras o hilos, cuya relación entre longitud, área y espesor les otorga cohesión y resistencia mecánica suficiente para su uso (Textile Terms and Definitions, The Textile Institute, citado por SENA, 2025). Estas estructuras permiten generar superficies flexibles con propiedades específicas según el método de construcción empleado.
        .cajon.color-acento-contenido.p-4.mb-4
          p De manera general, los tejidos se agrupan en dos categorías principales (tejidos planos y tejidos de punto), además de contemplar las estructuras no tejidas, las cuales se producen mediante procesos tecnológicos que no requieren entrelazado tradicional de hilos.
      .col-lg-4.mb-3.col-10.col-md-7
        img(src="@/assets/curso/temas/t3/img03.png")

    .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-4
      h5 Tabla 2.
      span Clasificación de los tejidos

    .tabla-a.color-acento-botones(data-aos="zoom-in-left").mb-4
      table
        caption Nota. Adaptado de SENA (2025).
        thead
          tr
            th.izq.bg5 Categoría
            th.izq.bg5 Subcategoría
            th.izq.bg5 Tipo
            th.izq.bg5 Ejemplos
        tbody
          tr
            td Telas tejidas
            td Tejido plano
            td Ligamentos fundamentales.
            td Tafetán, sarga o diagonal y raso.

          tr
            td Telas tejidas
            td Tejido plano
            td Ligamentos derivados.
            td Esterilla, panamá o canastra; espina o espiga; y sarga interrumpida #[em (broken twill)].

          tr
            td Telas tejidas
            td Tejido plano
            td Otros.
            td #[em Dobby], #[em jacquard], rizo y afelpados.

          tr
            td Telas tejidas
            td Tejido de punto
            td Por trama.
            td Sencillo, como #[em jersey]; y doble, como #[em rib], #[em interlock] y piqué.

          tr
            td Telas tejidas
            td Tejido de punto
            td Por urdimbre.
            td #[em Tricot] y #[em raschel].

          tr
            td Telas no tejidas
            td Estructuras no entrelazadas
            td Unión de fibras mediante procesos mecánicos, térmicos o químicos.
            td Interlones, guatas y entretelas.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
          h3.bg2.py-2.w-card-text Caracterización de los textiles

    p(data-aos="zoom-in-left") La caracterización de los textiles se organiza en función de su comportamiento y se relaciona con aspectos como el peso, la estructura, la fluidez, la expansión y la compresión del material. El reconocimiento de estas características permite interpretar su respuesta y determinar su pertinencia para diferentes aplicaciones dentro de la confección.

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-12
        img(src="@/assets/curso/temas/t3/img05.png")
    p Para profundizar en la caracterización y el comportamiento de los materiales textiles, se recomienda consultar el video Caracterización de los textiles. Este recurso explica las propiedades relacionadas con la estructura, la fluidez, la expansión y la compresión, así como su influencia en la forma, el movimiento, el volumen y el ajuste de las prendas.
    p Durante la consulta del recurso, identifique las diferencias entre los textiles estructurados, fluidos, expansivos y de compresión, y reconozca algunos materiales representativos de cada categoría. Asimismo, analice la función de las entretelas, sus principales tipos y los criterios que deben considerarse para seleccionarlas y aplicarlas de acuerdo con las características del material exterior.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/mc1kARHDHrs?start=1" title="Caracterización de los textiles" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
          figcaption Video: caracterización de los textiles.


    separador
    #t_3_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 3.1 Aprovechamiento de los textiles

    .row.justify-content-center.mb-2(data-aos="zoom-in-left")
        .col-lg-5.mb-3.col-md-9
          img(src='@/assets/curso/temas/t3/img04.png', alt='')
        .col-lg-7
          .cajon.color-primario.p-4.mb-3
            p.mb-0 El aprovechamiento por metro de tela consiste en determinar cuánta tela se utiliza realmente para confeccionar una prenda en relación con la cantidad total adquirida. Este cálculo resulta fundamental para optimizar costos, minimizar desperdicios y mejorar la eficiencia de la producción.
          p Para fortalecer la comprensión sobre la importancia del aprovechamiento de los textiles en el proceso de confección, se recomienda consultar el pódcast Aprovechamiento textil: menos desperdicio, más productividad. 
        p Este recurso explica, mediante una conversación sencilla y aplicada, cómo la correcta distribución de las piezas del patrón permite optimizar el uso de la tela, reducir desperdicios y mejorar la eficiencia del proceso productivo.
        p Durante la consulta del recurso, identifique la relación entre el trazado, la distribución de las piezas, el sentido del hilo, los márgenes de costura y el cálculo del aprovechamiento. Asimismo, analice cómo una mala planificación del material puede generar mayor consumo de tela, aumento de costos, sobrantes innecesarios y reprocesos en la confección.

    .row.justify-content-center.mb-4(data-aos="zoom-in-left")
        .col-lg-12
          img.w-100(
            src='@/assets/curso/temas/t3/img06.png'
            alt=''
            data-aos="zoom-in-left"
          )
        .col-lg-12
          .tarjeta.clr--pink.p-4.rounded-0.h-100.color-primario
            .tarjeta.bg-white.p-4
              TarjetaAudio.color-acento-botones(
                texto="Pódcast: Cada centímetro"
                :audio="require_src('@/assets/curso/temas/t3/img06.png')"
              )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
           

    .row.justify-content-start.mb-3(data-aos="zoom-in-left")
      .col-12.col-lg-5
        h4.bg3.py-2.w-card-text2 Pasos para determinar el aprovechamiento de los textiles

    .row.justify-content-center.mb-0(data-aos="zoom-in-left")
      .col-lg-8.mb-3
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos='fade-right')
          .row.justify-content-center(titulo="Trazado de las piezas del patrón")
            .col-lg-10.mb-4.mb-md-0
              p Ubique las piezas del patrón sobre la tela respetando los siguientes aspectos:
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-angle-right2
                  | El sentido del hilo o dirección de la urdimbre.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Los márgenes de costura.
                li.d-flex
                  i.fas.fa-angle-right2
                  | El sentido del diseño o estampado, cuando corresponda.
          .row.justify-content-center(titulo="Distribución y encaje de las piezas")
            .col-lg-11.mb-4.mb-md-0
              p Organice las piezas para que ocupen el menor espacio posible dentro del ancho de la tela, que normalmente corresponde a 1,40 m o 1,50 m. La distribución debe buscar un encaje eficiente, mediante la ubicación de las piezas en diferentes posiciones o su rotación, siempre que las características del diseño y del material lo permitan.
          .row.justify-content-center(titulo="Medición de la tela utilizada")
            .col-lg-11.mb-4.mb-md-0
              p Mida el largo total de la tela ocupada después de distribuir todas las piezas. Por ejemplo, si las piezas utilizan 0,95 m de un metro de tela adquirido, esta medida corresponde al largo empleado en el trazado.
          .row.justify-content-center(titulo="Cálculo del aprovechamiento")
            .col-lg-11.mb-4.mb-md-0
              p El porcentaje de aprovechamiento se determina mediante la relación entre el área ocupada por los patrones y el área total de la tela:
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 12.
                span  Fórmula de aprovechamiento de los textiles
              figure 
                img(src='@/assets/curso/temas/t3/fig12.svg', alt='')
              figcaption.mb-4 Fuente: SENA, 2021
              h5 Ejemplo de aplicación
              p.mb-0 Tela disponible:
              p.mb-0 1 m de largo × 1,50 m de ancho = 1,50 m²
              p.mb-0 Área ocupada por los patrones:
              p.mb-3 1,15 m²

              p Cálculo:
              p.mb-0 1,15 m² ÷ 1,50 m² × 100 = 76,67 %
              p.mb-4 El porcentaje de aprovechamiento de la tela corresponde al 76,67 %.
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 13.
                span Ejemplo de aplicación del aprovechamiento de los textiles
              figure 
                img(src='@/assets/curso/temas/t3/fig13.svg', alt='')
              figcaption.mb-4 Fuente: SENA, 2021
      
          .row.justify-content-center(titulo="Identificación de los factores que afectan el aprovechamiento")
            .col-lg-11.mb-4.mb-md-0
              p #[b Forma y número de piezas:] las prendas conformadas por numerosas piezas pequeñas pueden generar una mayor cantidad de sobrantes.
              p #[b Ancho de la tela:] un mayor ancho puede ofrecer más posibilidades para optimizar la distribución de los patrones.
              p #[b Diseño o estampado:] las telas con dibujos o estampados direccionados limitan la rotación y la ubicación de las piezas.
              p #[b Técnicas de corte:] el uso de #[em software] especializado o de procedimientos manuales puede influir en el rendimiento del material.
          
          .row.justify-content-center(titulo="Aplicación de consideraciones adicionales")
            .col-lg-11.mb-4.mb-md-0
              p Se recomienda contemplar un margen de seguridad entre el 5 % y el 10 % al adquirir la tela, de acuerdo con las características del material, el diseño y el proceso de confección. Asimismo, los retales sobrantes pueden utilizarse en otras prendas, piezas complementarias o aplicaciones, con el propósito de mejorar el aprovechamiento general del material.
      .col-lg-4.mb-3.col-9.col-md-7
        img(src='@/assets/curso/temas/t3/img07.png', alt='')

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-1.mb-3.col-4.col-md-3
          img(src='@/assets/curso/temas/t1/ico2.svg', alt='')
        .col-lg-11
          p El conocimiento de las fibras, los hilos y los tejidos permite reconocer el origen, la estructura y el comportamiento de los materiales empleados en confección. A su vez, el cálculo del aprovechamiento facilita una distribución eficiente de los patrones, contribuye a reducir los desperdicios y favorece el uso responsable de la tela dentro del proceso productivo.
    p A partir de estos fundamentos, el siguiente apartado aborda las fichas técnicas como instrumentos para organizar y comunicar las especificaciones necesarias durante el diseño, el patronaje, el corte, la confección y el control de calidad.
























































































</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
