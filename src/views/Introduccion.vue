<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    .bg-full-width.bg-fondo-1
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-3.d-none.d-lg-block
            figure
              img(src="@/assets/curso/intro/1.png", alt="").mx-auto
          .col-lg-9
            p.mb-4(data-aos="fade-left") La actividad física y los estilos de vida saludables son fundamentales para prevenir enfermedades no transmisibles (ENT) y mejorar la calidad de vida de las personas. Estas enfermedades, como las cardiovasculares, la diabetes, el cáncer y las respiratorias crónicas, están relacionadas con factores de riesgo como el tabaquismo, el alcoholismo, una alimentación poco saludable y la inactividad física. Por ello, promover la actividad física es una estrategia clave en la salud pública. 

            .bg-color-1
              .row.justify-content-center.align-items-center.mb-5
                .col-lg
                  .p-4
                    p.mb-0(data-aos="fade-right")
                      | Al abordar la actividad física, es esencial conocer los factores de riesgo para poder modificarlos de manera adecuada. La protección del organismo mediante la actividad física responsable es una forma eficaz de reducir el impacto de las ENT, mejorando la salud cardiorrespiratoria y muscular, así como la salud ósea. Es igualmente importante tener en cuenta las recomendaciones de organizaciones internacionales como el American College of Sports Medicine (ACSM) y la Ley de Estadounidenses con Discapacidades (ADA). 
                .col-lg-auto.d-lg-none.d-xl-block
                  figure
                    img(src="@/assets/curso/intro/2.png", alt="").mx-auto

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            .bg-color-2.brounded.bg-color-2--fondo.pb-4.pb-lg-0
              .row.justify-content-center.align-items-center
                .col-lg
                  .p-4
                    .row.justify-content-center.align-items-center
                      .col-lg-auto
                        figure
                          img(src="@/assets/curso/intro/3.png", alt="", style="max-width: 102px;").mx-auto.mb-4.mb-lg-0
                      .col-lg
                        p.mb-0(data-aos="fade-left") Este componente formativo explora diversas teorías de cambios comportamental les que guían la adopción de estilos de vida activos y saludables. Entre ellas, se incluyen el modelo transteórico, la teoría del comportamiento planificado, la teoría de la autoeficacia y la motivación multidimensional. Estas teorías proporcionan un marco para entender cómo las personas adoptan, mantienen y consolidan conductas saludables, particularmente en lo que respecta a la actividad física en diferentes grupos poblacionales. 
                .col-lg-auto.d-none.d-lg-block
                  figure
                    img(src="@/assets/curso/intro/4.png", alt="").mx-auto

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
