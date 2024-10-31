<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Escala multidimensional de la motivación 

 
    .row.justify-content-center.align-items-start.mb-5
      .col-lg-3
        figure
          img(src="@/assets/curso/tema4/1.png", style="max-width:100%", alt="").mx-auto
      .col-lg-6
        .bg-color-6.p-4.mb-4
          figure.mb-3
            img(src="@/assets/curso/tema4/2.svg", style="max-width:75px", alt="").ml-auto
          p.mb-0(data-aos="fade-left")
            | La automotivación es un conjunto de habilidades aprendidas y respuestas habituales que permiten a los individuos aumentar su disposición hacia actividades que no están adecuadamente indicadas ni reforzadas por el entorno. Es una fuerza interna que impulsa a las personas a realizar un comportamiento específico. Las personas adoptan patrones de motivación para iniciar la práctica de actividad física y establecer un estilo de vida saludable.

        p.mb-0(data-aos="fade-left")
          | Numerosos estudios han establecido asociaciones entre la automotivación y la adherencia al ejercicio físico, aunque en algunos casos esta relación es débil. Los individuos necesitan un alto grado de motivación para adquirir habilidades específicas, como la resolución de problemas, el auto-refuerzo y la gestión del tiempo, que pueden facilitar la adherencia a un programa de ejercicio.
      .col-lg-3
        figure
          img(src="@/assets/curso/tema4/3.png", style="max-width:100%", alt="").mx-auto

    .bg-color-7.bg-color-7--fondo.p-4.mb-5.brounded
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src="@/assets/curso/tema4/4.svg", style="max-width:100%", alt="").mx-auto
        .col-lg
          p.mb-0(data-aos="fade-left")
            | Aunque los niveles de automotivación suelen ser resistentes al cambio, una intervención específica en estas habilidades puede mejorar la automotivación, tanto para quienes desean comenzar un programa de ejercicio como para aquellos que ya lo practican.

    p.mb-5(data-aos="fade-left")
      | La escala multidimensional de la motivación establece tres tipos de motivación:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-8
        TabsA.color-acento-botones
          .tarjeta.bg-color-3.p-4.mb-4.brounded(titulo="A-motivación").h-100
            h5.mb-3 A-motivación
            p.mb-0(data-aos="fade-left")
              | Ausencia total de motivación. Las personas no muestran interés en cambiar su comportamiento. 
          .tarjeta.bg-color-3.p-4.mb-4.brounded(titulo="Motivación extrínseca ").h-100
            h5.mb-3 Motivación extrínseca 
            p.mb-0(data-aos="fade-left")
              | Los individuos realizan un cambio comportamental impulsados por factores externos, como premios, recompensas o reconocimiento. Mientras estos factores existan, el cambio se mantendrá. 
          .tarjeta.bg-color-4.p-4.mb-4.brounded(titulo="Motivación intrínseca ").h-100
            h5.mb-3 Motivación intrínseca 
            p.mb-0(data-aos="fade-left")
              | El cambio de comportamiento se produce por razones internas, sin la necesidad de estímulos externos, lo que asegura la permanencia del cambio. 
      .col-lg-4
        figure
          img(src="@/assets/curso/tema4/5.png", style="max-width:100%", alt="").mx-auto


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-auto
        figure
          img(src="@/assets/curso/bullets/icon-3.svg", style="max-width:100%", alt="").mx-auto
      .col-lg
        p.mb-0(data-aos="fade-left")
          | El objetivo ideal es lograr una motivación intrínseca, ya que esta asegura la continuidad del comportamiento. Sin embargo, en algunos casos, la adquisición o abandono de ciertos hábitos implica un proceso continuo donde se separa la automotivación de la motivación extrínseca. Si se logran los procesos de cambio, es posible obtener una motivación intrínseca, lo que lleva a la adquisición de un comportamiento que genera cambios positivos en las personas.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        figure
          img(src="@/assets/curso/tema4/6.png", style="max-width:100%", alt="").mx-auto
      .col-lg-9
        p.mb-4(data-aos="fade-left") Escala que subdivide la motivación extrínseca e intrínseca en etapas más específicas. A continuación, se presentan dichas etapas:
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-2")
          div(titulo="Regulación externa")
            p.mb-0 Relacionada con el condicionamiento operante, donde el comportamiento se realiza para ganar la aprobación de otros. 
          div(titulo="Regulación introducida")
            p.mb-0 Un poco más internalizada, pero comprometida con la evitación de la culpa.
          div(titulo="Regulación identificada")
            p.mb-0 Valora el comportamiento por su impacto en el bienestar personal, convirtiéndose así en un medio para alcanzar un fin. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        p.mb-4(data-aos="fade-left") Escala que subdivide la motivación extrínseca e intrínseca en etapas más específicas. A continuación, se presentan dichas etapas:
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-2")
          div(titulo="Regulación integrada")
            p.mb-0 Integra los valores, metas y necesidades personales en el comportamiento. 
          div(titulo="Motivación de aprendizaje")
            p.mb-0 Surge del interés por aprender y comprender una actividad. 
          div(titulo="Motivación de sensación")
            p.mb-0 Se realiza la actividad por las sensaciones que esta genera, como ocurre frecuentemente en la actividad física. 
      .col-lg-3
        figure
          img(src="@/assets/curso/tema4/7.png", style="max-width:100%", alt="").mx-auto



</template>

<script>
export default {
  name: 'Tema4',
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
