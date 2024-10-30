<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Teoría del comportamiento planificado 

    .row.justify-content-center.align-items-start
      .col-lg-9
        p.mb-4(data-aos="fade-left")
          | Este modelo es fundamental, ya que permite que el individuo se enfoque tanto en la intención de cambio como en el control del comportamiento. El control está influenciado por diversos factores involuntarios, internos o externos, que dificultan que la persona logre el cambio deseado. El sujeto puede tener un control total o parcial sobre el comportamiento a modificar.  

        .bg-color-2
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-auto
              figure
                img(src="@/assets/curso/tema2/2.png", style="max-width:100%", alt="").mx-auto
            .col-lg
              .p-4
                figure.mb-3
                  img(src="@/assets/curso/tema2/3.svg", style="max-width:75px", alt="").ml-auto
                p.mb-0(data-aos="fade-left")
                  | Por ejemplo, una persona que desea salir temprano a hacer ejercicio al aire libre (control total) puede despertarse y encontrar que está lloviendo (falta de control), lo que le impide llevar a cabo su plan. Este modelo facilita la identificación de barreras y excusas percibidas que, en ciertas circunstancias, pueden afectar el control percibido sobre el comportamiento.

      .col-lg-3
        figure
          img(src="@/assets/curso/tema2/1.png", style="max-width:100%", alt="").mx-auto

    p.mb-5(data-aos="fade-left") Si una persona desea tomar decisiones más firmes y enfrentar menos obstáculos al establecer un patrón de comportamiento, debe tener mayor control sobre sí misma. La firmeza en las decisiones será clave para mantener y adoptar hábitos de ejercicio físico.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 1.
          span  Teoría del comportamiento planificado
        
        .bg-color-sintesis.brounded
          .p-md-5.p-4
            figure
              img(src="@/assets/curso/figuras/1.svg", style="max-width:100%", alt="El diagrama presenta el proceso de cambio de conducta, partiendo del patrón de comportamiento y la intención de cambio de conducta. Esta se basa en tres factores: actitud (creencias conductuales), normas subjetivas (creencias sobre las normas) y creencias controladas, que incluyen el control percibido y el control real del comportamiento. ").mx-auto.d-none.d-md-block

              img(src="@/assets/curso/figuras/1b.svg", style="max-width:100%", alt="El diagrama presenta el proceso de cambio de conducta, partiendo del patrón de comportamiento y la intención de cambio de conducta. Esta se basa en tres factores: actitud (creencias conductuales), normas subjetivas (creencias sobre las normas) y creencias controladas, que incluyen el control percibido y el control real del comportamiento. ").mx-auto.d-md-none
            

</template>

<script>
export default {
  name: 'Tema2',
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
