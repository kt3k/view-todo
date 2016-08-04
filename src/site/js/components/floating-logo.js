
const {component, on} = $.cc

@component
class FloatingLogo {
  @on('click')
  onClick () {
    this.elem.addClass('clicked')

    setTimeout(() => {
      this.elem.removeClass('clicked')
    }, 3000)
  }
}

module.exports = FloatingLogo
