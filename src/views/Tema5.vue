<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Teoría de la autoeficacia 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema3/1.svg", style="max-width:100%", alt="").mx-auto
      .col-lg
        p.mb-0(data-aos="fade-left")
          | La teoría de la autoeficacia sostiene que la seguridad en la propia capacidad para llevar a cabo una conducta está directamente relacionada con el éxito en su ejecución. Las creencias en las propias habilidades influyen en cómo las personas piensan, sienten, se motivan y actúan.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 2.
          span  Fuentes de la creencia en la autoeficacia
        
        .bg-color-sintesis.brounded
          .p-md-5.p-4
            figure
              img(src="@/assets/curso/figuras/2.svg", style="max-width:100%", alt="El diagrama presenta las fuentes de creencia de la autoeficacia, como la experiencia previa y la evaluación emocional. Esto lleva a dos opciones: iniciar un programa de ejercicio, que fomenta la actividad y el control, resultando en éxito, o evitar el ejercicio por pereza, lo que conduce a la pasividad y, finalmente, al fracaso. ").mx-auto.d-none.d-md-block

              img(src="@/assets/curso/figuras/2b.svg", style="max-width:100%", alt="El diagrama presenta las fuentes de creencia de la autoeficacia, como la experiencia previa y la evaluación emocional. Esto lleva a dos opciones: iniciar un programa de ejercicio, que fomenta la actividad y el control, resultando en éxito, o evitar el ejercicio por pereza, lo que conduce a la pasividad y, finalmente, al fracaso. ").mx-auto.d-md-none


    p.mb-5(data-aos="fade-left")
      | Adoptar una actitud activa ayuda a mejorar la situación, establecer objetivos y mejorar la condición física. Por otro lado, la pasividad conduce a la inacción y a buscar excusas, como la falta de tiempo.


    .row.justify-content-center.align-items-start.mb-5
      .col-lg-3
        figure
          img(src="@/assets/curso/tema3/2.png", style="max-width:100%", alt="").mx-auto
      .col-lg-6
        .bg-color-4.p-4.mb-4
          p.mb-0(data-aos="fade-left")
            | La autoeficacia se refiere a las creencias personales sobre la capacidad de afrontar las situaciones cotidianas, donde se actúa en función de esas creencias. Al adoptar la teoría de la autoeficacia, el individuo asume un rol de autorreferencia y se activa un mecanismo común mediante el cual las personas demuestran control sobre sus #[strong expectativas, motivaciones y comportamientos]. 

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema3/3.svg", style="max-width:100%", alt="").mx-auto
          .col-lg
            p.mb-0(data-aos="fade-left") Es fundamental que los individuos sientan que tienen #[strong las capacidades físicas, mentales y personales] para realizar un cambio, lo cual conduce al éxito. Por el contrario, si piensan que no cumplen con los requisitos para efectuar ese cambio, experimentan #[strong frustración y descartan la posibilidad de actuar], lo que suele resultar en el fracaso.
      .col-lg-3
        figure
          img(src="@/assets/curso/tema3/4.png", style="max-width:100%", alt="").mx-auto

    p.mb-5(data-aos="fade-left")
      | Cuando las personas inician la acción para cambiar y empiezan a percibir resultados positivos, su autoeficacia aumenta, ya que el reto es consigo mismas. Esto les permite lograr éxitos que no pensaban que podían alcanzar, lo que las motiva a asumir retos más grandes y nuevos en su vida personal.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema3/5.png", style="max-width:100%", alt="").mx-auto
      .col-lg-7
        .bg-color-5.p-4.px-lg-5
          p.mb-0(data-aos="fade-left")
            | Existen estudios que han investigado la relación entre la autoeficacia y las conductas deportivas, obteniendo resultados mixtos. Algunos estudios muestran asociaciones positivas, mientras que otros presentan resultados contrarios. La mayoría de los estudios longitudinales han arrojado resultados positivos. Por lo tanto, la teoría de la autoeficacia es prometedora para su implementación en programas de ejercicio físico individualizado.

    p.mb-5(data-aos="fade-left")
      | Los factores clave según la teoría de la autoeficacia: 

    
    .bg-full-width.bg-fondo-2
      .px-4.px-md-5
        .row.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card
              img.custom-image-card__image(src="@/assets/curso/tema3/6.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-center Las actividades que las personas eligen realizar. 
          .col-lg-4.mb-4(data-aos="zoom-in")
            .custom-image-card
              img.custom-image-card__image(src="@/assets/curso/tema3/7.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-center El esfuerzo que dedican para mantenerse en dichas actividades.
          .col-lg-4.mb-4(data-aos="zoom-in-left")
            .custom-image-card
              img.custom-image-card__image(src="@/assets/curso/tema3/8.png" alt="")
              .custom-image-card__text.p-4          
                p.mb-0.text-center El grado de persistencia que demuestran para no fracasar.
        br

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
