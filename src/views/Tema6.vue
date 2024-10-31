<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Recomendaciones de Actividad Física (AF) 

    p(data-aos="fade-left").mb-4 Antes de comenzar con las recomendaciones, es importante definir algunos términos clave relacionados con los niveles de actividad física recomendados:

    .bg-full-width.bg-fondo-slide.mb-0
      .p-4.p-md-5
        .tarjeta.bg-color-white.p-4.p-lg-5.pb-lg-4.shadow-soft(data-aos="fade-up")
          SlyderA(tipo='b')
            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Tipo de actividad física 
                  p.mt-4 Forma de participación en la actividad física, como aeróbica, o para mejorar la fuerza, flexibilidad o equilibrio. 
              .col-lg-4
                img(src='@/assets/curso/tema6/1.png', style="max-width: 412px").mx-auto


            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Duración 
                  p.mt-4 Tiempo dedicado a la actividad o ejercicio, generalmente expresado en minutos. 
              .col-lg-4
                img(src='@/assets/curso/tema6/2.png', style="max-width: 412px").mx-auto


            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                 h4 Frecuencia  
                 p.mt-4 Número de veces que se realiza una actividad, expresado en sesiones por semana. 
              .col-lg-4
                img(src='@/assets/curso/tema6/3.png', style="max-width: 412px").mx-auto


            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Intensidad  
                  p.mt-4 Grado de esfuerzo requerido para realizar una actividad, en términos de ritmo o nivel de esfuerzo. 
              .col-lg-4
                img(src='@/assets/curso/tema6/4.png', style="max-width: 412px").mx-auto

            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Volumen 
                  p.mt-4 Resultado total de la interacción entre intensidad, frecuencia, duración y permanencia del programa. 
              .col-lg-4
                img(src='@/assets/curso/tema6/5.png', style="max-width: 412px").mx-auto


            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Actividad física moderada  
                  p.mt-4 En una escala absoluta, la intensidad es de 3,0 a 5,9 veces superior a la actividad en reposo. 
              .col-lg-4
                img(src='@/assets/curso/tema6/6.png', style="max-width: 412px").mx-auto


            .row.pt-lg-4
             .col-lg-8.mb-4.mb-lg-0
               .pe-4
                 h4 Actividad física vigorosa  
                 p.mt-4 En una escala absoluta, la intensidad es de 6,0 veces o más superior a la actividad en reposo. 
             .col-lg-4
               img(src='@/assets/curso/tema6/7.png', style="max-width: 412px").mx-auto

               
            .row.pt-lg-4
             .col-lg-8.mb-4.mb-lg-0
               .pe-4
                 h4 Actividad aeróbica  
                 p.mt-4 Actividad de resistencia que mejora la función cardiorrespiratoria, como caminar, correr, nadar, etc. 
             .col-lg-4
               img(src='@/assets/curso/tema6/8.png', style="max-width: 412px").mx-auto

    .bg-full-width.bg-fondo-3.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-11
            LineaTiempoE.color-acento-contenido
              .div(titulo="5 a 17 años" subtitulo="")

                h5 Recomendaciones para niños y jóvenes
                p.mt-4  A continuación se presentan las recomendaciones de actividad física:

                .row.justify-content-center.align-items-start.mb-5
                  .col-lg-auto
                    figure
                      img(src='@/assets/curso/tema6/9.png', style="max-width: 332px").mx-auto
                  .col-lg
                    .bg-color-4.p-4.brounded
                      .bg-color-white.p-3.mb-3.brounded
                        p.mb-0 Los niños y jóvenes deben acumular al menos #[strong 60 minutos diarios] de actividad física moderada o vigorosa.

                      .bg-color-white.p-3.mb-3.brounded
                        p.mb-0 Superar los 60 minutos diarios de actividad física genera beneficios adicionales para la salud.

                      .bg-color-white.p-3.mb-3.brounded
                        p.mb-0 La mayor parte de la actividad física diaria debe ser aeróbica, incorporando actividades vigorosas al menos tres veces por semana para fortalecer músculos y huesos.

                      .bg-color-white.p-3.mb-3.brounded
                        p.mb-0 Para niños sedentarios o inactivos, es esencial comenzar con sesiones cortas, aumentando progresivamente la duración, frecuencia e intensidad.

              .div(titulo="18 a 64 años" subtitulo="")

                h5 Recomendaciones para adultos
                p.mt-4  A continuación se presentan las recomendaciones de actividad física:

                .row.justify-content-center.align-items-start.mb-5
                  .col-lg-auto
                    figure
                      img(src='@/assets/curso/tema6/10.png', style="max-width: 332px").mx-auto
                  .col-lg
                    .bg-color-4.p-4.brounded
                      .bg-color-white.p-3.mb-3.brounded
                        p.mb-0 Los adultos deben acumular #[strong 150 minutos semanales] de actividad física aeróbica moderada, o #[strong 75 minutos] de actividad aeróbica vigorosa, o una combinación equivalente.

                      .bg-color-white.p-3.mb-3.brounded
                        p.mb-0 La actividad aeróbica debe realizarse en sesiones de al menos #[strong 10 minutos].

                      .bg-color-white.p-3.mb-3.brounded
                        p.mb-0 Se deben incluir actividades de fortalecimiento muscular dos o más veces por semana.

                      .bg-color-white.p-3.mb-3.brounded
                        p.mb-0 Para obtener mayores beneficios, es recomendable aumentar la actividad física a #[strong 300 minutos semanales] de actividad moderada, o #[strong 150 minutos]  de actividad vigorosa, o una combinación equivalente.


              .div(titulo="65 años en adelante" subtitulo="")

                h5 Recomendaciones para adultos
                p.mt-4  A continuación se presentan las recomendaciones de actividad física:

                .row.justify-content-center.align-items-start.mb-5
                  .col-lg-auto
                    figure
                      img(src='@/assets/curso/tema6/11.png', style="max-width: 332px").mx-auto
                  .col-lg
                    .bg-color-4.p-4.brounded
                      .bg-color-white.p-3.mb-3.brounded
                        p.mb-0 Los adultos mayores deben acumular un mínimo de #[strong 150 minutos semanales] de actividad física moderada, o #[strong 75 minutos] de actividad vigorosa, distribuidos a lo largo de la semana.

                      .bg-color-white.p-3.mb-3.brounded
                        p.mb-0 Superar los #[strong 300 minutos semanales] proporciona beneficios adicionales para la salud.

                      .bg-color-white.p-3.mb-4.brounded
                        p.mb-0 Se recomienda realizar ejercicios de fortalecimiento muscular dos veces por semana y ejercicios de flexibilidad y equilibrio para reducir el riesgo de caídas.

                      p.mb-0 Estas recomendaciones aplican a todos los adultos, excepto aquellos con condiciones médicas que requieran una evaluación previa a la actividad física.

    .titulo-tres.mb-4(data-aos="flip-up").mb-5
      h4 Recomendaciones de actividad física en el embarazo y postparto

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/tema6/12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Antes de iniciar un programa de actividad física durante el embarazo, es fundamental que la mujer sea evaluada por su médico, debido a los cambios fisiológicos asociados con el embarazo y los posibles riesgos de la actividad física. Existen riesgos como un aporte inadecuado de oxígeno al feto, parto prematuro o un aumento en las contracciones uterinas. Sin embargo, muchos estudios indican que las mujeres activas y con embarazos sin complicaciones no necesitan limitar la actividad física, siempre que sigan las recomendaciones médicas y adapten sus actividades.
</template>

<script>
export default {
  name: 'Tema3',
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
