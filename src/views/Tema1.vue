<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Modelo transteórico 


    .bg-color-3.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src="@/assets/curso/tema1/1.png", alt="").mx-auto
        .col-lg
          .p-4.pe-lg-5
            p.mb-0(data-aos="fade-left")
              | Este modelo surgió en la década de los 70, tras un análisis comparativo de diversas teorías que explicaban los cambios en el comportamiento de personas con dependencia a las drogas. Su nombre deriva de la integración de los principios y componentes teóricos de los sistemas terapéuticos analizados. El modelo explica el cambio de comportamiento a través de cinco variables: etapas, procesos de cambio, balance decisional, autoeficacia y tentación. Estas etapas se utilizan para comprender la adquisición de conductas saludables o la reducción de comportamientos de riesgo. 

    
    p.mb-5(data-aos="fade-left") Las etapas de cambio según el modelo transteórico: 

    .bg-full-width.bg-fondo-slide.mb-5
      .p-4.p-md-5
        .tarjeta.bg-white.p-4.pb-lg-4.shadow-soft(data-aos="fade-down")
          LineaTiempoC.color-acento-contenido(text-small).px-4(data-aos="fade-up")
            .row(titulo="Etapa 1").justify-content-center
              .col-lg-7.mb-4.mb-md-0
                h4 Precontemplación
                p.mb-4 Las personas no tienen intención de realizar cambios a corto plazo, es decir, en los próximos 6 meses.
              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema1/2.png", style="max-width:100%", alt="").mx-auto.mb-4


            .row(titulo="Etapa 2").justify-content-center
              .col-lg-7.mb-4.mb-md-0
                h4 Contemplación
                p.mb-4 El individuo aún no está listo para tomar acción inmediata, pero considera hacerlo dentro de los próximos 6 meses.
              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema1/3.png", style="max-width:100%", alt="").mx-auto.mb-4
            
            .row(titulo="Etapa 3").justify-content-center
              .col-lg-7.mb-4.mb-md-0
                h4 Preparación
                p.mb-4 La persona está planificando cambiar su conducta en el futuro cercano, generalmente en el próximo mes.
              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema1/4.png", style="max-width:100%", alt="").mx-auto.mb-4


            .row(titulo="Etapa 4").justify-content-center
              .col-lg-7.mb-4.mb-md-0
                h4 Acción
                p.mb-4 El individuo ya ha comenzado a implementar un cambio en su conducta, aunque este aún no está completamente estructurado.
              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema1/5.png", style="max-width:100%", alt="").mx-auto.mb-4

            .row(titulo="Etapa 5").justify-content-center
              .col-lg-7.mb-4.mb-md-0
                h4 Mantenimiento
                p.mb-4 La persona ha mantenido el cambio de conducta por más de 6 meses y está comprometida activamente con sostenerlo como un hábito saludable.
              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema1/6.png", style="max-width:100%", alt="").mx-auto.mb-4

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-4
        .bg-color-2.brounded.bg-color--fondo
          .p-4.pb-5
            p.mb-0(data-aos="fade-left")
              | Estas etapas permiten evaluar el progreso del individuo en su intención de mantener un cambio. Además, el modelo propone que la modificación de conducta no es un proceso instantáneo, ya que el individuo puede abandonar el cambio y luego volver a comenzar el ciclo. Estudios recientes sugieren que ayudar al individuo a avanzar en una etapa del modelo puede aumentar las posibilidades de éxito a corto plazo. 
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/7.png", style="max-width:100%", alt="").mx-auto
      .col-lg-4
        p.mb-0(data-aos="fade-left")
          | Según el modelo, es probable que las personas con alguna Enfermedad No Transmisible (ENT) que se encuentren en las etapas de acción y mantenimiento experimenten un cambio en sus hábitos alimenticios, adoptando conductas como un mayor consumo de frutas y verduras, menor ingesta de alimentos hipercalóricos y mejor hidratación. En contraste, aquellos en las etapas de precontemplación, contemplación y preparación, aunque reconocen la necesidad de cambiar, no toman acciones concretas para hacerlo. 

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
