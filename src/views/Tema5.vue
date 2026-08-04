<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Maquinaria, materiales e insumos para confección 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-3(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el entorno productivo de la confección industrial, el conocimiento de la maquinaria, los materiales y los insumos disponibles constituye una base indispensable para el desempeño técnico competente. Operar correctamente un equipo, seleccionar el material adecuado para cada prenda e identificar el insumo requerido para cada operación son decisiones que inciden directamente en la calidad del producto terminado, la eficiencia del proceso y la seguridad en el puesto de trabajo.
          br 
      
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
          h3.bg2.py-2.w-card-text Tipos y características

    p La maquinaria de confección se clasifica, según su capacidad productiva, en cuatro grupos principales. Esta clasificación permite identificar las características técnicas de cada equipo y relacionarlas con el contexto de producción en el que se utiliza.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-4
      h5 Tabla 5.
      span Tipos de máquinas empleadas en el sector de la confección

    .tabla-a.color-acento-botones(data-aos="zoom-in-left").mb-4
      table
        thead
          tr
            th.izq.bg5 Tipo de máquina
            th.izq.bg5 Velocidad
            th.izq.bg5 Características principales
            th.izq.bg5 Contexto de uso
        tbody
          tr
            td #[b Doméstica o familiar]
            td 500 a 1.000 rpm.
            td Baja potencia, estructura liviana y portátil, lubricación manual, variedad de puntadas básicas.
            td Uso doméstico, talleres artesanales, aprendizaje inicial.

          tr
            td #[b Semi industrial]
            td Hasta 1.725 rpm.
            td Mayor potencia que la doméstica; permite trabajar más capas de material, lubricación manual o por bomba.
            td Talleres de mediana producción.

          tr
            td #[b Industrial]
            td Hasta 6.000 rpm.
            td Alta potencia, lubricación automática, especializada por tipo de operación.
            td Producción en serie, industria de la confección.

          tr
            td #[b De ciclo]
            td Variable.
            td Ejecuta una operación específica en un ciclo automatizado: ojal, botón, presilla.
            td Operaciones repetitivas de alta precisión.

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-8
        .cajon.color-primario.p-4
          p.mb-0 #[b Nota.] La sigla rpm significa revoluciones por minuto. Esta unidad mide la velocidad de rotación del motor de una máquina de coser e indica cuántos ciclos completos de movimiento realiza durante un minuto.

    p Dentro de las máquinas industriales, los tipos más utilizados en la confección de prendas de vestir son los siguientes:

    .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-4
      h5 Tabla 6.
      span Tipos de máquinas industriales empleadas en la confección de prendas de vestir

    .tabla-a.color-acento-botones(data-aos="zoom-in-left").mb-4
      table
        thead
          tr
            th.izq.bg5 Tipo de máquina industrial
            th.izq.bg5 Tipo de puntadas que produce
            th.izq.bg5 Aplicaciones principales
        tbody
          tr
            td Plano de una aguja
            td Doble pespunte, serie 300.
            td Costuras de ensamble en tejidos planos, como camisas, pantalones y chaquetas.

          tr
            td Plano de dos agujas
            td Doble pespunte paralelo, serie 300.
            td Costuras decorativas, trabillas, presillas y prendas de tejido pesado.

          tr
            td Fileteadora #[em (overlock)]
            td Sobrehilado, serie 500.
            td Acabado de bordes y unión y fileteo simultáneos en tejidos de punto.

          tr
            td Collarín o recubridora
            td Cobertura plana, serie 600.
            td Dobladillos en tejidos de punto, ropa deportiva y ropa interior.

          tr
            td Ojaladora
            td Ciclo automatizado.
            td Elaboración de ojales rectos y en forma de ojo de cerradura en camisas, chaquetas y pantalones.

          tr
            td Botonera
            td Ciclo automatizado.
            td Pegado de botones planos y con pie en diferentes tipos de prendas.

          tr
            td Presilladora
            td Ciclo automatizado.
            td Refuerzo de puntos de tensión, como bolsillos, trabillas y cremalleras.

          tr
            td Máquina de pespunte ciego
            td Puntada invisible, serie 300.
            td Dobladillos invisibles en pantalones de vestir, faldas y chaquetas.

    .tarjeta.fondo04.p-4
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-6
            h4.mb-3 Máquina industrial plana de una aguja
            p Se emplea principalmente para realizar costuras rectas y operaciones de ensamble en tejidos planos.
          .col-lg-5.mb-4.mb-md-0.col-md-10
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 14. 
              span Máquina industrial plana de una aguja
            figure
              img(src='@/assets/curso/temas/t5/1.png', alt='Máquina de coser industrial plana de una aguja instalada sobre una mesa de trabajo, con motor, pedal, soporte para hilos y mecanismos utilizados para realizar costuras rectas.')
        .row.justify-content-center
          .col-lg-6
            h4.mb-3 Máquina industrial plana de dos agujas
            p Produce dos líneas de pespunte paralelas y se utiliza en costuras decorativas, refuerzos y prendas que requieren mayor resistencia.
          .col-lg-5.mb-4.mb-md-0.col-md-10
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 15.
              span Máquina industrial plana de dos agujas
            figure
              img(src='@/assets/curso/temas/t5/2.png', alt='Máquina de coser industrial plana equipada con dos agujas paralelas y dos sistemas de hilo para realizar dos líneas de costura simultáneas.')

        .row.justify-content-center
          .col-lg-6
            h4.mb-3 Máquina fileteadora industrial
            p Se utiliza para unir piezas, recortar sobrantes y realizar el acabado de los bordes, especialmente en tejidos de punto.
          .col-lg-5.mb-4.mb-md-0.col-md-10
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 16.
              span Máquina fileteadora industrial
            figure
              img(src='@/assets/curso/temas/t5/3.png', alt='Máquina fileteadora industrial con varios soportes para conos de hilo y mecanismos destinados a unir piezas, cortar excedentes y sobrehilar los bordes del material.')

        .row.justify-content-center
          .col-lg-6
            h4.mb-3 Máquina industrial collarín
            p Se utiliza principalmente para elaborar dobladillos y costuras de cobertura en camisetas, ropa deportiva y otras prendas de tejido de punto.
          .col-lg-5.mb-4.mb-md-0.col-md-10
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 17.
              span Máquina industrial collarín
            figure
              img(src='@/assets/curso/temas/t5/4.png', alt='Máquina collarín industrial instalada sobre una mesa de trabajo y equipada con varios soportes para hilos, utilizada para realizar costuras de cobertura y dobladillos en tejidos de punto.')

        .row.justify-content-center
          .col-lg-6
            h4.mb-3 Máquina industrial ojaladora
            p Realiza automáticamente ojales con dimensiones y características previamente ajustadas.
          .col-lg-5.mb-4.mb-md-0.col-md-10
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 18.
              span Máquina industrial ojaladora
            figure
              img(src='@/assets/curso/temas/t5/5.png', alt='Máquina ojaladora industrial con panel de control y mecanismos especializados para realizar ojales automatizados en diferentes tipos de prendas.')

        .row.justify-content-center
          .col-lg-6
            h4.mb-3 Máquina industrial botonera
            p Se utiliza para fijar botones planos o con pie mediante ciclos automáticos y repetitivos.
          .col-lg-5.mb-4.mb-md-0.col-md-10
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 19.
              span Máquina industrial botonera
            figure
              img(src='@/assets/curso/temas/t5/6.png', alt='Máquina botonera industrial con sistema de sujeción y panel de control, diseñada para fijar botones automáticamente sobre las prendas.')

        .row.justify-content-center
          .col-lg-6
            h4.mb-3 Máquina industrial presilladora
            p Realiza costuras cortas y densas para reforzar zonas sometidas a tensión.
          .col-lg-5.mb-4.mb-md-0.col-md-10
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 20.
              span Máquina industrial presilladora
            figure
              img(src='@/assets/curso/temas/t5/7.png', alt='Máquina presilladora industrial con panel de control y área de costura especializada para reforzar bolsillos, trabillas, cremalleras y otros puntos de tensión.')

        .row.justify-content-center
          .col-lg-6
            h4.mb-3 Máquina industrial de pespunte ciego
            p Produce puntadas que quedan ocultas en el derecho de la prenda y se utiliza para realizar dobladillos invisibles.
          .col-lg-5.mb-4.mb-md-0.col-md-10
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 21.
              span Máquina industrial de pespunte ciego
            figure
              img(src='@/assets/curso/temas/t5/8.png', alt='Máquina industrial de pespunte ciego con superficie de trabajo y mecanismo curvo de costura, utilizada para elaborar dobladillos con puntadas poco visibles en el exterior de la prenda.')

    separador
    #t_5_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 5.1 Técnicas de manejo

    p El manejo adecuado de la maquinaria de confección es determinante para garantizar la calidad de las costuras, la seguridad de quien opera el equipo y la conservación de su vida útil.

    .row.justify-content-start.mb-3(data-aos="zoom-in-left")
      .col-12.col-lg-6
        h4.bg3.py-2.w-card-text2 Técnicas generales para el manejo de maquinaria de confección

    .row.justify-content-center.mb-0
      .col-lg-8.mb-3
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos='fade-right')
          .row.justify-content-center(titulo="Postura y ubicación")
            .col-lg-11.mb-0.mb-md-0
              p Mantenga una postura erguida frente a la máquina, con los pies apoyados completamente en el suelo o sobre el pedal, los codos cerca del cuerpo y los hombros relajados.
          .row.justify-content-center(titulo="Enhebrado correcto")
            .col-lg-11.mb-0.mb-md-0
              p Siga la secuencia indicada por el fabricante. Un enhebrado incorrecto altera la tensión y puede generar roturas del hilo o costuras defectuosas.

          .row.justify-content-center(titulo="Guía del material")
            .col-lg-11.mb-0.mb-md-0
              p Conduzca la tela con las manos de manera suave y constante, sin jalarla ni empujarla. El avance debe ser controlado por los mecanismos de arrastre de la máquina.

          .row.justify-content-center(titulo="Velocidad de operación")
            .col-lg-11.mb-0.mb-md-0
              p Reduzca la velocidad en las curvas, las esquinas y las zonas con detalles, con el propósito de mantener el control y la precisión de la costura.

          .row.justify-content-center(titulo="Verificación previa")
            .col-lg-11.mb-0.mb-md-0
              p Antes de iniciar la operación, revise el enhebrado, el estado de la aguja y los ajustes de tensión y longitud de la puntada.
      .col-lg-4
        img(src='@/assets/curso/temas/t5/img02.png', alt='')

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
          h3.bg2.py-2.w-card-text Calibración de puntadas

    p La calibración de puntadas es el proceso mediante el cual se ajustan los parámetros de la máquina para obtener una costura con las características técnicas requeridas.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-4
      h5 Tabla 7.
      span Parámetros para la calibración de las puntadas

    .tabla-a.color-acento-botones(data-aos="zoom-in-left").mb-4
      table
        thead
          tr
            th.izq.bg5 Parámetro
            th.izq.bg5 Descripción
            th.izq.bg5 Efecto de un ajuste incorrecto
        tbody
          tr
            td Longitud de puntada
            td Distancia entre una puntada y la siguiente, expresada en milímetros o en cantidad de puntadas por centímetro.
            td Una puntada muy larga puede generar una costura débil. Una puntada muy corta puede provocar el fruncimiento del material.

          tr
            td Tensión del hilo superior
            td Fuerza de retención ejercida sobre el hilo de la aguja.
            td Una tensión alta puede hacer visible el hilo inferior sobre la superficie. Una tensión baja puede hacer visible el hilo superior en la parte inferior.

          tr
            td Tensión del hilo inferior
            td Fuerza de retención del hilo ubicado en la bobina o canilla.
            td Puede generar un desequilibrio en el punto de unión de los hilos dentro del tejido.

          tr
            td Presión del prensatelas
            td Fuerza con la que el prensatelas sostiene el material.
            td Una presión alta puede dejar marcas en tejidos delicados. Una presión baja puede producir un avance irregular.

          tr
            td Altura de los dientes de arrastre
            td Nivel de los dientes encargados de transportar el material.
            td Una altura incorrecta puede ocasionar un avance desigual o daños en el tejido.

    separador
    #t_5_2.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 5.2 Usos y aplicaciones

    p Elegir una máquina inadecuada para una operación no solo produce costuras deficientes, sino que también puede dañar el material o generar reprocesos. La selección correcta parte del reconocimiento de la función de cada equipo y de su relación con el tipo de prenda, tejido u operación.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-4
      h5 Tabla 8.
      span Tipos de máquinas según la operación de costura

    .tabla-a.color-acento-botones(data-aos="zoom-in-left").mb-4
      table
        thead
          tr
            th.izq.bg5 Operación
            th.izq.bg5 Máquina recomendada
            th.izq.bg5 Tipo de prenda o material
        tbody
          tr
            td Unión de piezas en tejido plano.
            td Plana de una aguja.
            td Camisas, pantalones, chaquetas y ropa formal.

          tr
            td Acabado de bordes y unión en tejido de punto.
            td Fileteadora #[em (overlock)].
            td Camisetas, ropa deportiva y ropa interior.

          tr
            td Dobladillo en tejido de punto.
            td Collarín.
            td Camisetas, medias y ropa deportiva.

          tr
            td Costuras decorativas paralelas.
            td Plana de dos agujas.
            td Prendas de tejido pesado, uniformes y ropa de trabajo.

          tr
            td Elaboración de ojales.
            td Ojaladora.
            td Camisas, chaquetas y pantalones con botones.

          tr
            td Pegado de botones.
            td Botonera.
            td Diferentes tipos de prendas con cierre de botón.

          tr
            td Dobladillo invisible.
            td Máquina de pespunte ciego.
            td Pantalones de vestir, faldas y chaquetas.

          tr
            td Refuerzo de puntos de tensión.
            td Presilladora.
            td Bolsillos, trabillas y cremalleras.

    .col-lg-12
      img(src='@/assets/curso/temas/t5/img03.png', alt='')

    separador
    #t_5_3.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 5.3 Insumos: guías, accesorios y agujas

    p Los insumos son elementos que, sin formar parte del cuerpo principal de la prenda, hacen posible que las operaciones de costura se ejecuten con precisión. Dentro de esta categoría, las guías, los accesorios y las agujas tienen un impacto técnico directo sobre la calidad del proceso.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-4
      h5 Tabla 9.
      span Guías y accesorios para máquinas de coser

    .tabla-a.color-acento-botones(data-aos="zoom-in-left").mb-4
      table
        thead
          tr
            th.izq.bg5 Accesorio o guía
            th.izq.bg5 Descripción
            th.izq.bg5 Aplicación
        tbody
          tr
            td Prensatelas estándar.
            td Pie base de la máquina empleado para realizar costuras rectas generales.
            td Costuras de ensamble en tejido plano.

          tr
            td Prensatelas para cremallera.
            td Permite coser cerca de los dientes de la cremallera por ambos lados.
            td Instalación de cierres en prendas.

          tr
            td Prensatelas para ojales.
            td Guía automáticamente el ancho y el largo del ojal.
            td Elaboración de ojales en máquina plana.

          tr
            td Prensatelas enrollador de dobladillo.
            td Enrolla y dobla el borde del tejido durante la costura.
            td Dobladillos estrechos en blusas y telas livianas.

          tr
            td Guía de costura magnética.
            td Imán ajustable que permite mantener un margen de costura constante.
            td Control de márgenes en costuras largas.

          tr
            td Embudos para vivos.
            td Piezas metálicas que doblan y guían tiras de tela para formar ribetes durante la costura.
            td Aplicación de ribetes y vivos en ropa deportiva y lencería.

          tr
            td Guía para pespunte paralelo.
            td Barra ajustable que conserva una distancia constante respecto de una costura previamente realizada.
            td Pespuntes decorativos en camisas y pantalones.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
          h3.bg2.py-2.w-card-text La aguja

    p Para seleccionar correctamente una aguja, se deben considerar el tipo de punta, el calibre y el sistema de referencia correspondiente a la máquina.

    .row.justify-content-start.mb-3(data-aos="zoom-in-left")
      .col-12.col-lg-3
        h4.bg3.py-2.w-card-text2 Agujas según el tipo de punta

    .row.justify-content-center.align-items-center
      .col-lg-8.mb-3.h-100
        .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-4
          h5 Tabla 10.
          span Tipos de agujas según la punta

        .tabla-a.color-acento-botones(data-aos="zoom-in-left").mb-4
          table
            thead
              tr
                th.izq.bg5.w-25 Tipo de punta
                th.izq.bg5.w-25 Código
                th.izq.bg5 Material recomendado
            tbody
              tr
                td Redonda fina.
                td SUK
                td Tejidos de punto finos, como #[em jersey] e #[em interlock]. Penetra entre los hilos sin cortarlos.

              tr
                td Redonda media.
                td SES
                td Tejidos de punto medianos, como #[em rib] y neopreno.

              tr
                td Redonda gruesa.
                td SKF
                td Tejidos de punto gruesos, como felpa y tejidos técnicos.

              tr
                td Cortante.
                td R
                td Tejidos planos, como algodón, lino y poliéster. Perfora el tejido durante la formación de la puntada.

              tr
                td Bola #[em (ball point)].
                td BP
                td Tejidos de punto elásticos y delicados.
      .col-lg-4.h-100
        img(src='@/assets/curso/temas/t5/img04.png', alt='')

    .row.justify-content-start.mb-3(data-aos="zoom-in-left")
      .col-12.col-lg-3
        h4.bg3.py-2.w-card-text2 Agujas según el calibre
    
    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-4.d-flex.mb-4.mb-lg-0
        img.w-100.h-100(
          src='@/assets/curso/temas/t5/img05.png'
          alt='Mujer utilizando una máquina de coser industrial como apoyo visual para la información sobre agujas según el calibre.'
          style='object-fit: cover;'
        )

      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-4
          h5 Tabla 11.
          span Agujas según el calibre

        .tabla-a.color-acento-botones(data-aos="zoom-in-left").mb-0
          table
            thead
              tr
                th.izq.bg5.w-25 Calibre Nm
                th.izq.bg5.w-25 Sistema Singer
                th.izq.bg5.w-25 Equivalencia en milímetros
                th.izq.bg5.w-50 Materiales recomendados
            tbody
              tr
                td 60
                td 8
                td 0,60 mm
                td Tejidos muy finos, como organza, seda y gasa.

              tr
                td 70
                td 10
                td 0,70 mm
                td Tejidos ligeros, como batista, #[em voile] y tul.

              tr
                td 80
                td 12
                td 0,80 mm
                td Tejidos de peso medio, como popelina y poliéster.

              tr
                td 90
                td 14
                td 0,90 mm
                td Tejidos de punto, como #[em jersey] e #[em interlock].

              tr
                td 100
                td 16
                td 1,00 mm
                td Tejidos semipesados, como gabardina y #[em denim] ligero.

              tr
                td 110
                td 18
                td 1,10 mm
                td Tejidos pesados, como #[em denim] y lona.

              tr
                td 120
                td 20
                td 1,20 mm
                td Materiales muy pesados, como cuero natural y telas técnicas.
          
    .row.justify-content-start.mb-3(data-aos="zoom-in-left")
      .col-12.col-lg-4
        h4.bg3.py-2.w-card-text2 Agujas según el sistema de referencia

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-6.d-flex.mb-4.mb-lg-0
        .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-4
          h5 Tabla 12.
          span Agujas según el sistema de referencia

        .tabla-a.color-acento-botones(data-aos="zoom-in-left").mb-4
          table
            caption Nota. SENA (2025).
            thead
              tr
                th.izq.bg5 Tipo de máquina
                th.izq.bg5 Sistema de aguja
            tbody
              tr
                td Máquina plana industrial de cabo delgado.
                td 16 × 231.

              tr
                td Máquina plana industrial de cabo grueso.
                td 135 × 5.

              tr
                td Máquina recubridora o collarín.
                td B63.

              tr
                td Máquina de dos agujas.
                td 135 × 5.

              tr
                td Fileteadora #[em (overlock)].
                td B27.

      .col-lg-6
        



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
