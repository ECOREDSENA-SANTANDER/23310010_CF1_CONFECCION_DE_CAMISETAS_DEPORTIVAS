<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Maquinaria y sistema de medidas de camisetas deportivas',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la apropiación conceptual y técnica de los contenidos relacionados con sistemas de medidas, textiles, fichas técnicas, maquinaria de confección, insumos, mantenimiento preventivo y bases del patronaje aplicados a camisetas deportivas.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la unidad base del sistema inglés empleada en procesos de patronaje?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El centímetro como medida lineal utilizada en la mayoría de países de América Latina.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La pulgada como medida base usada en contextos productivos como Estados Unidos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El metro como unidad principal para prendas de confección artesanal y técnica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El milímetro como unidad exclusiva para escalado de moldes industriales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 2,
          texto:
            '¿Qué instrumento se emplea para registrar longitudes, anchos y contornos del cuerpo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La cinta métrica flexible aplicada de forma lineal y perimetral sobre el cuerpo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La escuadra industrial utilizada para verificar ángulos en piezas de confección.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El calibrador metálico usado para determinar espesores de materiales textiles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La regla rígida empleada para marcar recorridos curvos de la sisa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 3,
          texto:
            '¿Cómo se toman técnicamente las medidas correspondientes a los anchos del cuerpo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'De manera perimetral considerando la figura tridimensional completa de cada segmento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'De manera vertical siguiendo los largos y talles principales del cuerpo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'De manera horizontal registrando distancias como el ancho de pecho.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'De manera inclinada según el recorrido natural de hombro y cuello.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 4,
          texto:
            '¿Cuál es la finalidad del cuadro de tallas dentro del proceso técnico de patronaje?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Decorar la ficha técnica con datos complementarios sobre tendencias de moda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Organizar y estandarizar la información corporal requerida para desarrollar patrones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir el patronaje base mediante referencias gráficas de uso comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Registrar únicamente los largos de manga y cuello para producción masiva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 5,
          texto:
            '¿Qué concepto corresponde a la relación de equilibrio entre las partes que conforman un todo?',
          imagen: '@/assets/actividad/imagen05.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Canon, como modelo ideal aplicado de manera histórica a la figura humana.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Escala, como ampliación progresiva de moldes entre una talla y otra.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Simetría, como repetición exacta de piezas en ambos lados del cuerpo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Proporción, como correspondencia equilibrada entre las partes de una estructura.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cómo se clasifican de manera general las fibras textiles según su origen?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'En fibras naturales y fibras químicas con sus respectivas subdivisiones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'En fibras cortas, fibras largas y fibras mezcladas por torsión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'En fibras de punto, fibras planas y fibras técnicas para alto rendimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'En fibras rígidas, fibras blandas y fibras elásticas de uso industrial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 7,
          texto:
            '¿Cuál de los siguientes materiales corresponde a una fibra natural de origen vegetal procedente de la semilla?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El algodón como fibra empleada ampliamente en estructuras textiles convencionales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La seda como filamento obtenido de secreciones sedosas naturales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El <i>nylon</i> como polímero sintético usado en tejidos técnicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El rayón como fibra artificial de base celulósica transformada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 8,
          texto: '¿Qué caracteriza técnicamente al proceso de hilatura?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La organización de patrones sobre la tela para reducir desperdicios de corte.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La transformación de fibras en hebras continuas para construir hilos y tejidos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La unión de piezas mediante costuras funcionales en línea de ensamble.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La calibración de puntadas para obtener uniformidad en el pespunte.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 9,
          texto:
            '¿Qué tipo de tejido por trama incluye estructuras como <i>jersey</i>, <i>lacoste</i> e <i>interlock</i>?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El tejido plano con ligamentos fundamentales y derivados de alta rigidez.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El tejido no entrelazado usado en guatas, entretelas e interlones técnicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El tejido de punto por trama con estructuras sencillas y dobles.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El tejido mineral reforzado con fibras inorgánicas para usos industriales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 10,
          texto:
            '¿Cuál es el propósito del aprovechamiento por metro de tela en confección?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustituir el escalado de moldes por un control directo del ancho textil.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Determinar la elasticidad del material antes del proceso de corte.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Establecer el color definitivo de la tela para la ficha de diseño.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Optimizar costos, reducir desperdicios y mejorar la eficiencia de producción.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué define de manera más precisa a la ficha técnica en confección?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un formato visual de promoción comercial para exhibir la prenda terminada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una guía informal para tomar medidas sin relación con producción industrial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un instructivo exclusivo para mantenimiento de maquinaria en talleres textiles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un documento estructurado que registra especificaciones técnicas de prenda o proceso.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 12,
          texto:
            '¿Cuál tipo de ficha técnica detalla materiales, insumos, medidas y secuencia de ensamble?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La ficha técnica de diseño centrada en temporada y propuesta estética.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La ficha técnica de calidad orientada a criterios de aceptación final.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La ficha técnica de maquinaria enfocada en calibración y referencia del equipo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La ficha técnica de producción orientada a especificaciones operativas de fabricación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 13,
          texto:
            '¿Cuál característica exige que la ficha técnica contenga toda la información necesaria para ejecutar el proceso?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La claridad en la organización del lenguaje para cada área funcional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La completitud como presencia integral de la información requerida.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La precisión de datos numéricos en medidas y referencias técnicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La trazabilidad para reconstruir el historial del producto elaborado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 14,
          texto:
            '¿Qué tipo de máquina industrial se recomienda para acabados de bordes y unión en tejido de punto?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La plana de una aguja para costuras rectas en tejido plano.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La botonera para fijación de botones sobre prendas terminadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La fileteadora <i>overlock</i> para unión y fileteo simultáneo del material.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La presilladora para refuerzo puntual en zonas de alta tensión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 15,
          texto:
            '¿Cuál es una técnica general de manejo adecuada para la maquinaria de confección?',
          imagen: '@/assets/actividad/imagen05.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Jalar el material con ambas manos para acelerar el avance de costura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Conducir la tela suavemente sin empujar, dejando actuar al arrastre mecánico.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Mantener alta velocidad constante en curvas y detalles de la prenda.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Omitir la revisión previa cuando la máquina ya fue usada ese día.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué efecto puede generar una longitud de puntada demasiado corta durante la costura?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un fruncido del material por exceso de densidad en la puntada.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Una costura débil con menor resistencia sobre el material ensamblado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una mejora automática del arrastre en tejidos de alta elasticidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un aumento del calibre real de la aguja durante la operación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 17,
          texto:
            '¿Qué accesorio facilita coser cerca del diente de una cremallera en ambos lados?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El prensatelas estándar usado para ensambles generales en tejido plano.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La guía magnética para mantener constante el margen de costura.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El prensatelas para cremallera diseñado para esa operación específica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El prensatelas para cremallera diseñado para esa operación específica.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 18,
          texto:
            '¿Cuál sistema de aguja corresponde de manera estándar a la fileteadora <i>overlock</i>?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El sistema 16 x 231 para máquina plana de cabo delgado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El sistema B27 empleado en fileteadoras de confección industrial.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El sistema B63 para máquinas recubridoras tipo collarín.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El sistema 135 x 5 para plana industrial de cabo grueso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 19,
          texto:
            '¿Cuál actividad pertenece al mantenimiento preventivo diario de una máquina de confección?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La limpieza de pelusa y residuos en bobina, dientes y prensatelas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La revisión técnica especializada por parte de personal externo calificado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La sustitución obligatoria de correas y poleas de transmisión interna.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La calibración electrónica integral del motor y del panel de control.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 20,
          texto:
            '¿Qué se debe verificar al final del trazado del patrón básico de camiseta deportiva?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que las piezas decorativas reemplacen todas las líneas estructurales del patrón.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que cuello y manga tengan siempre el mismo largo en cualquier talla.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que las costuras coincidan en longitud y curvatura entre todas las piezas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Que el delantero elimine toda diferencia con respecto al patrón trasero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre maquinaria y patronaje de camisetas deportivas.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
