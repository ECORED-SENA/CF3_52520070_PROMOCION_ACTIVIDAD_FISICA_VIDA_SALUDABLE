<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Teorías de cambio y recomendaciones de actividad física',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> Identificar  los modelos de cambio comportamental, teorías de autoeficacia, motivación y recomendaciones de actividad física adaptadas para diferentes grupos poblacionales.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué modelo de cambio comportamental explica el proceso de adopción de conductas saludables?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Modelo ecológico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Modelo transteórico.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Teoría de la autoeficacia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Teoría del comportamiento planificado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿En cuál de las siguientes etapas del modelo transteórico una persona planea cambiar su conducta en el próximo mes?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contemplación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mantenimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Acción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Preparación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué teoría sugiere que las creencias sobre la capacidad personal de ejecutar un comportamiento influyen en el éxito de su implementación?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Modelo ecológico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Teoría del comportamiento planificado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Teoría de la autoeficacia.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Modelo transteórico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es la recomendación mínima de actividad física aeróbica moderada para adultos de 18 a 64 años?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '150 minutos semanales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '60 minutos semanales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '75 minutos diarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '100 minutos semanales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Según el modelo ecológico, el comportamiento humano es influenciado principalmente por:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Factores genéticos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El entorno social y los diferentes niveles interconectados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Factores individuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La motivación intrínseca.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'Las personas en la etapa de precontemplación del modelo transteórico:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No tienen intención de realizar cambios a corto plazo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Están planificando un cambio en su conducta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Han comenzado a implementar un cambio en su conducta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Han mantenido el cambio por más de seis meses.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: 'La motivación extrínseca está relacionada con:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una ausencia total de motivación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La integración de valores personales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La satisfacción interna por el comportamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Factores externos como premios o recompensas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: 'Las mujeres embarazadas pueden realizar actividad física si:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No realizan ningún tipo de evaluación médica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Siguen las recomendaciones de su médico y adaptan las actividades.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Realizan únicamente actividades de bajo impacto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No realizan ninguna actividad física.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'El modelo transteórico tiene cuántas etapas principales de cambio:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cinco.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Tres.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cuatro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Seis.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Las personas con capacidades diferentes no deben realizar actividad física intensa.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
