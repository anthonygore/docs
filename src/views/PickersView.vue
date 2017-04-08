<template lang="pug">
  doc-view(v-bind:doc="doc" id="pickers-view")
    v-date-time
</template>

<script>
  export default {
    data () {
      return {
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
</style>