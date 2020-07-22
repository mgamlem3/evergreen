import tinycolor from 'tinycolor2'
import { Intent } from '../../../constants'
import colors from './foundational-styles/colors'
import palette from './foundational-styles/palette'

/**
 * @param {String} top - color.
 * @param {String} bottom - color.
 * @return {String} CSS background propery.
 */
const linearGradient = (top, bottom) => {
  return `linear-gradient(to bottom, ${top}, ${bottom})`
}

/**
 * @param {Intent} intent
 * @return {String} color
 */
const getTextColorForIntent = (intent, defaultColor) => {
  switch (intent) {
    case Intent.SUCCESS:
      return colors.text.success
    case Intent.DANGER:
      return colors.text.danger
    case Intent.WARNING:
      return colors.text.warning
    default:
      return defaultColor || colors.text.default
  }
}

/**
 * @param {Intent} intent
 * @return {Object} color
 */
const getColorsForIntent = (intent) => {
  switch (intent) {
    case Intent.SUCCESS:
      return {
        base: palette.green.base,
        hover: tinycolor(palette.green.base).lighten(10),
        active: tinycolor(palette.green.base).darken(10)
      }
    case Intent.DANGER:
      return {
        base: palette.red.base,
        hover: tinycolor(palette.red.base).lighten(10),
        active: tinycolor(palette.red.base).darken(10)
      }
    case Intent.WARNING:
      return {
        base: palette.yellow.base,
        hover: tinycolor(palette.yellow.base).lighten(10),
        active: tinycolor(palette.yellow.base).darken(10)
      }
    default:
      return {
        base: palette.blue.base,
        hover: tinycolor(palette.blue.base).lighten(10),
        active: tinycolor(palette.blue.base).darken(10)
      }
  }
}

/**
 * @param {String} startColor
 * @param {String} endColor
 * @param {Number} intensityMultiplier - Some colors need more darkening.
 */
const getLinearGradientWithStates = (
  startColor,
  endColor,
  intensityMultiplier = 1
) => {
  return {
    base: linearGradient(startColor, endColor),
    hover: linearGradient(
      tinycolor(startColor)
        .darken(5 * intensityMultiplier)
        .toString(),
      tinycolor(endColor)
        .darken(5 * intensityMultiplier)
        .toString()
    ),
    active: linearGradient(
      tinycolor(endColor)
        .darken(5 * intensityMultiplier)
        .toString(),
      tinycolor(endColor)
        .darken(5 * intensityMultiplier)
        .toString()
    )
  }
}

/**
 * Gradients in the default theme have a intentional hue shift.
 * @param {Intent} intent - intent of the gradient.
 * @return {Object} { colors: {base, hover active}, focusColor }
 */
const getPrimaryButtonStylesForIntent = intent => {
  switch (intent) {
    case Intent.SUCCESS: {
      const {base} = palette.green
      const hover = tinycolor(base).lighten(10)
      const active = tinycolor(base).darken(10)
      return {
        colors: {
          base,
          hover,
          active
        },
        focusColor: tinycolor(base)
          .setAlpha(0.4)
          .toString()
      }
    }

    case Intent.WARNING: {
      const {base} = palette.yellow
      const hover = tinycolor(base).lighten(10)
      const active = tinycolor(base).darken(10)
      return {
        colors: {
          base,
          hover,
          active
        },
        focusColor: tinycolor(base)
          .setAlpha(0.4)
          .toString()
      }
    }

    case Intent.DANGER: {
      const {base} = palette.red
      const hover = tinycolor(base).lighten(10)
      const active = tinycolor(base).darken(10)
      return {
        colors: {
          base,
          hover,
          active
        },
        focusColor: tinycolor(base)
          .setAlpha(0.4)
          .toString()
      }
    }

    default: {
      const {base} = palette.blue
      const hover = tinycolor(base).lighten(10)
      const active = tinycolor(base).darken(10)
      return {
        colors: {
          base,
          hover,
          active
        },
        focusColor: tinycolor(base)
          .setAlpha(0.4)
          .toString()
      }
    }
  }
}

export {
  linearGradient,
  getTextColorForIntent,
  getColorsForIntent,
  getLinearGradientWithStates,
  getPrimaryButtonStylesForIntent
}
