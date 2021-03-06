<template lang="pug">
  div(class="doc" id="colors-view")
    div
      section-def
        dt(slot="title") {{ doc.title }}
        dd(slot="desc") {{ doc.desc }}
    section
      section-header Classes
      section-text You can change a background or text color by adding a class to the element. For background, use just the name, for example, <code>&lt;div class="red"&gt;</code>. To use a shade, just add the modifying type, such as, <strong>darken-3</strong>. Text is very similar, adding a modification class, <strong>red--text</strong>, you can change the color of text, or change the type with adding <strong>text--lighten-2</strong>. For some elements like the <code>v-badge</code>, you can use the <em>--after</em> type for the background, <code>&lt;span class="green--after" v-badge:5&gt;</code>.
      div
        v-container(fluid)
          v-row(row wrap)
            v-col(xs6 sm6 md4 lg3 v-for="color in colors")
              v-card(v-bind:class="[color]" height="100px")
                v-card-text
                  h3 {{ color }}
              v-card(
                v-for="n in [4,3,2,1]"
                v-bind:class="[color, 'lighten-' + n]"
                class="black--text"
              )
                v-card-text {{ color }} lighten-{{ n }}
              v-card(
                v-for="n in 4"
                v-bind:class="[color, 'darken-' + n]"
              )
                v-card-text {{ color }} darken-{{ n }}
              v-card(
                v-for="n in 4"
                v-bind:class="[color, 'accent-' + n]"
                v-if="['grey', 'blue-grey', 'brown'].indexOf(color) === -1"
                class="black--text"
              )
                v-card-text {{ color }} accent-{{ n }}
    section
      section-header Color Pack
      section-text Vuetify comes pre-built with a Material Design Color Pack (thanks <a href="http://materializecss.com/color.html" target="_blank">Materialize.css</a>) by default. While convenient, this also increases the css export size by ~30kb. This can be disabled in both the webpack and webpack-ssr Vue cli templates.
      div(class="title pt-3 pb-3") Webpack
      section-text Navigate to <kbd>src/App.vue</kbd>. Scroll to the style element and set <code>$color-pack = false</code> above the Vuetify css import.

      div(class="title pt-3 pb-3") Webpack-SSR
      section-text Navigate to <kbd>src/stylus/main.styl</kbd>. At the top of the file, declare <code>$color-pack = false</code>.
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Colors',
          desc: 'Included with Vuetify is the entire Material Design color library. These color classes drastically help the prototyping phase or make the need for additional color declaration not needed.'
        },
        colors: [
          'red', 'pink', 'purple', 'deep-purple',
          'indigo', 'blue', 'light-blue', 'cyan',
          'teal', 'green', 'light-green', 'lime',
          'yellow', 'amber', 'orange', 'deep-orange',
          'brown', 'blue-grey', 'grey'
        ],
        types: [
          'darken', 'lighten', 'accent'
        ]
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
          title: 'Colors | Vuetify.js',
          h1: 'Colors',
          description: 'Colors for the Vuetify Framework',
          keywords: 'vuetify, colors'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #colors-view
    .col
      margin: .5rem 0
      
    .card
      color: #fff
      font-weight: 500
      letter-spacing: .5px
      padding: 1rem
      border-radius: 0
        
      .card__text
        h3
          color: #fff
          align-self: flex-start
          font-size: 1.5rem
          margin: 0
      
    .card__text
      padding: 0
</style>