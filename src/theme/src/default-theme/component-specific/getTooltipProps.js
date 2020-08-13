import tinycolor from 'tinycolor2'
import palette from '../foundational-styles/palette'

const getTooltipProps = appearance => {
  switch (appearance) {
    case 'card':
      return {
        color: 'white',
        backgroundColor: tinycolor(palette.neutral.base)
          .setAlpha(0.95)
          .toString()
      }
    case 'default':
    default:
      return {
        backgroundColor: 'white',
        elevation: 3
      }
  }
}

export default getTooltipProps
