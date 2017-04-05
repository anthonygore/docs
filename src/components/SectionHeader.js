export default {
  functional: true,

  render (h, context) {
    let styles = {}

    if (context.data.attrs && context.data.attrs.first) {
      styles['margin-top'] = 0
    }

    const data = {
      'class': 'section-header secondary--text primary--after',
      style: styles
    }

    return h('h3', data, context.children)
  }
}
