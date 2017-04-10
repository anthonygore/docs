<template lang="pug">
  doc-view(v-bind:doc="doc" id="pickers-view")
    v-menu(transition="v-scale-transition" v-bind:close-on-content-click="false" v-model="menu")
      v-text-field(slot="activator" label="Date" single-line v-model="test")
      v-date-picker(v-model="test")
        template(scope="{ save, cancel }")
          v-card-row(actions v-on:click.native="menu = false")
            v-btn(flat primary v-on:click.native="cancel()") Cancel
            v-btn(flat primary v-on:click.native="save()") Ok
    v-modal(v-model="modal")
      v-text-field(slot="activator" label="Date" single-line v-model="test")
      v-date-picker(v-model="test")
        template(scope="{ save, cancel }")
          v-card-row(actions v-on:click.native="modal = false")
            v-btn(flat primary v-on:click.native="cancel()") Cancel
            v-btn(flat primary v-on:click.native="save()") Ok
</template>

<script>
  export default {
    data () {
      return {
        test: '2007-09-01',
        menu: false,
        modal: false,
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