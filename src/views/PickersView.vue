<template lang="pug">
  doc-view(v-bind:doc="doc" id="pickers-view")
    component-example(header="Date pickers" file="pickers/1" v-bind:data="$data")
    component-example(file="pickers/2" v-bind:data="$data")
      span(class="subheading" slot="details") Landscape
    component-example(file="pickers/3" v-bind:data="$data")
      span(class="subheading" slot="details") Dark Portrait
    component-example(file="pickers/4" v-bind:data="$data")
      span(class="subheading" slot="details") Dark Landscape
</template>

<script>
  export default {
    data () {
      return {
        e1: null,
        e2: null,
        doc: {
          title: 'Pickers',
          desc: '',
          props: {}
        }
      }
    },

    mounted () {
      this.$emit('view', this.meta())
    },

    preFetch () {
      return this.methods.meta()
    },

    methods: {
      testing (e) {
        e.cancel()
      },
      meta () {
        return {
          title: 'Pickers | Vuetify.js',
          h1: 'Pickers',
          description: 'Pickers directive for Vuetify Framework',
          keywords: 'vuetify, pickers, directives'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #pickers-view
    min-height: 150vh
</style>