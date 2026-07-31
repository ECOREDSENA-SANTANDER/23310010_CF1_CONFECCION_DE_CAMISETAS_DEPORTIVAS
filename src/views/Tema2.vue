<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Análisis de medidas y tipologías de prendas

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-3(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Con base en el análisis previo y en la correcta toma de medidas, este apartado aborda los fundamentos para la construcción del cuadro de tallas y su aplicación dentro de los procesos técnicos de patronaje, como herramienta que permite organizar y estandarizar la información corporal necesaria para el desarrollo de patrones.
          br       
      
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
          h3.bg2.py-2.w-card-text Proporción y canon 

    p La relación entre proporción y canon se vincula con la manera en que se estudia la correspondencia entre las partes del cuerpo y su altura total, tradicionalmente expresada mediante la referencia de cuántas veces la longitud de la cabeza se integra en la estatura corporal. Para facilitar su comprensión, se precisan los siguientes conceptos:

    .row.justify-content-start.mb-3(data-aos="zoom-in-left")
      .col-12.col-lg-4
        h4.bg3.py-2.w-card-text2 Canon y proporción de la figura humana

    TabsC.color-primario(data-aos="zoom-in-left").mb-0
      .py-3.py-md-4(titulo="Canon")
        .row.align-items-center
          .col-md-6.mb-3
            img(src='@/assets/curso/temas/t2/img02.png', alt='')
          .col-md-6.mb-4.mb-md-0
            p Se entiende como un modelo de referencia que reúne características consideradas ideales dentro de un contexto histórico y cultural determinado. Se utiliza para analizar la organización y el equilibrio de la figura humana en términos de proporcionalidad.      
          
      
      .py-3.py-md-4(titulo="Proporción")
        .row.align-items-center
          .col-md-6.mb-3
            img(src='@/assets/curso/temas/t2/img03.png', alt='')
          .col-md-6.mb-4.mb-md-0
            p Hace referencia a la relación de correspondencia, equilibrio y coherencia existente entre las partes que conforman un todo. Este principio se aplica en campos como el arte, el diseño de vestuario, la arquitectura y otras disciplinas proyectuales, en las que la armonía estructural resulta determinante.
    
    
    .fondo02
      .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/img05.png', alt='')
        .col-lg-7
          .p-4
            .d-flex.align-items-start
              .row
                .col-lg-12
                  h4.bg4.text-white.p-2 Importancia de la proporción en el diseño
                  p La aplicación del principio de proporcionalidad en el diseño de prendas permite establecer relaciones coherentes entre los diferentes componentes de un modelo y la configuración corporal de la persona usuaria. Este criterio contribuye a lograr equilibrio estructural, funcionalidad y una adecuada distribución de volúmenes, favoreciendo que la prenda responda de manera consistente a las características físicas y a los requerimientos de uso.

    p Las siguientes representaciones permiten reconocer la relación entre el canon, la proporción corporal y las variaciones que se presentan durante las diferentes etapas de crecimiento.

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos='fade-right')
      .row.justify-content-center(titulo="Canon femenino de ocho cabezas")
        .col-lg-5.mb-4.mb-md-0
          p La representación organiza la figura corporal femenina tomando la longitud de la cabeza como unidad de medida. La altura total se divide en ocho segmentos proporcionales.
        .col-md-8.col-lg-6
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 5. 
            span Canon femenino de ocho cabezas
          figure
            img(src='@/assets/curso/temas/t2/fig5.svg', alt='Ilustración de una figura corporal femenina dividida verticalmente en ocho segmentos iguales, cada uno equivalente a la altura de la cabeza. La representación muestra la relación proporcional entre la cabeza, el torso, la cadera, las piernas y la altura total del cuerpo.')
      .row.justify-content-center(titulo="Proporción de la figura humana vitruviana")
        .col-lg-5.mb-4.mb-md-0
          p La representación relaciona las dimensiones de las diferentes partes del cuerpo con la altura total de la figura humana, tomando como referencia principios de equilibrio y proporcionalidad.
        .col-lg-6.col-md-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 6. 
            span Proporción de la figura humana vitruviana
          figure
            img(src='@/assets/curso/temas/t2/fig6.svg', alt='Ilustración de una figura corporal con brazos y piernas extendidos, inscrita dentro de un círculo y un cuadrado. La composición representa las relaciones proporcionales entre la cabeza, el torso, las extremidades y la altura total del cuerpo humano.')  
      .row.justify-content-center(titulo="Proporción según las etapas de crecimiento")
        .col-lg-5.mb-4.mb-md-0
          p La representación compara las proporciones de la figura humana durante diferentes etapas del crecimiento y permite reconocer las variaciones en la relación entre la cabeza, el tronco y las extremidades.
        .col-lg-6.col-md-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 7. 
            span Proporción de acuerdo con las etapas de crecimiento
          figure
            img(src='@/assets/curso/temas/t2/fig7.svg', alt='Ilustración comparativa de figuras humanas en diferentes etapas de crecimiento, desde la infancia hasta la adultez. La imagen muestra cómo varían las proporciones entre la cabeza, el tronco y las extremidades a medida que aumenta la edad.')
      
      
    .row.justify-content-center.align-items-center.mb-3(data-aos='fade-right')
      .col-lg-12
        img(src='@/assets/curso/temas/t2/img06.png', alt='')
    
    p Para ampliar la información sobre la organización y estandarización de las medidas corporales, se recomienda consultar el anexo Análisis de tallas y medidas: cuadro de tallas, en el cual se explica la relación entre las medidas anatómicas, la definición de tallas y la deducción de valores utilizados en los procesos de patronaje.

    .tarjeta.fondo01.p-3.mb-3(data-aos="fade-left")    
        .row.justify-content-around.align-items-center
          .col-lg-11.col-12
            .row.p-2
              .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
                img.img20(src='@/assets/curso/temas/t1/hoja.svg', alt='')
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-1 Anexo 2: Medidas anatómicas, clasificación y análisis
                  .col-sm-auto
                    a.boton.color-acento-boton.texto-blanco(:href="obtenerLink('/downloads/Anexos/Anexo 2. Análisis de tallas y medidas.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download

    .row.justify-content-center.align-items-center.mb-2(data-aos='fade-right')
      .col-lg-3.mb-3.col-9.col-md-7
        img(src='@/assets/curso/temas/t2/img07.svg', alt='')
      .col-lg-9
        p El análisis de las medidas, la organización de los cuadros de tallas y el reconocimiento de las categorías de prendas permiten relacionar las proporciones corporales con las características estructurales de cada modelo. 
        p Estos fundamentos facilitan la interpretación de las formas, los componentes y las condiciones de ajuste que deben considerarse antes de desarrollar un patrón.
        p A partir de esta relación, el siguiente apartado aborda las tipologías de prendas y su clasificación según la zona del cuerpo que cubren y los elementos que conforman su estructura.

    separador
    #t_2_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 2.1 Tipología de prendas

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/img08.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          br
          p.mb-0 Las tipologías de prendas se clasifican en función de la estructura corporal. Por esta razón, para completar la etapa de conceptualización, resulta necesario establecer una clasificación que permita identificar las partes de las prendas según la arquitectura del cuerpo.
            br
            br
    p Para ampliar la comprensión sobre la clasificación y la estructura de las prendas, se recomienda consultar el video Categorías de prendas, tipologías y bitácora de formas. Este recurso presenta la diferencia entre prendas superiores e inferiores, tomando la cintura como punto de referencia, y explica cómo se organizan sus principales componentes dentro de una bitácora de formas.
    p Durante la consulta del recurso, identifique las características que permiten clasificar las prendas según la zona corporal que cubren. Asimismo, reconozca elementos como pinzas, cortes, cuellos, puños, bolsillos, pretinas y sistemas de cierre, y analice la importancia de utilizar un glosario técnico para representar y nombrar correctamente cada componente.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")         
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/leHGYnfUxGk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video: categorías de prendas, tipologías y bitácora de formas

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
          h3.bg2.py-2.w-card-text Categorías de prendas y tipologías
    
    p.mb-4 A continuación, se presentan los modelos básicos de camiseta deportiva y la variación de camiseta deportiva con martingala. Ambas opciones se consideran unisex.

    .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
      .col-lg-6.mb-3(data-aos="zoom-in-left").col-md-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 8.
          span  Diseño de camiseta básica deportiva
        figure
          img(src='@/assets/curso/temas/t2/fig8.svg', alt='Ilustración técnica de una camiseta deportiva básica de manga corta y cuello redondo, representada de frente, de espalda y de perfil. La prenda presenta silueta recta, ajuste holgado y acabados visibles en el cuello, las mangas y el borde inferior.')  
      .col-lg-6.mb-3(data-aos="zoom-in-left").col-md-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 9.
          span Diseño de camiseta deportiva con martingala
        figure
          img(src='@/assets/curso/temas/t2/fig9.svg', alt='Ilustración técnica de una camiseta deportiva tipo polo, representada de frente, de espalda y de perfil. La prenda presenta cuello camisero, abertura frontal con botones, mangas cortas, silueta recta y acabados de costura en las mangas y el borde inferior.')  








































</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
