import { Themer } from '../../../../themer'
import memoizeClassName from '../utils/memoizeClassName'
import scales from '../foundational-styles/scales'
import { getColorsForIntent, getPrimaryButtonStylesForIntent } from '../helpers'
import { defaultControlStyles } from '../shared'
import { palette } from '../foundational-styles'

/**
 * Disabled styles are all the same for all buttons.
 */
const { disabled } = defaultControlStyles

/**
 * Get button appearance.
 * @param {string} appearance - default, primary, minimal.
 * @param {string} intent - none, success, warning, danger.
 * @return {Object} the appearance of the button.
 */
const getButtonAppearance = (appearance, intent) => {
  switch (appearance) {
    case 'primary': {
      const { colors, focusColor } = getPrimaryButtonStylesForIntent(intent)
      return Themer.createButtonAppearance({
        disabled,
        base: {
          color: 'white',
          backgroundColor: `${colors?.base}`
        },
        hover: {
          backgroundColor: `${colors?.hover}`
        },
        focus: {
          boxShadow: `0 0 0 3px ${focusColor}, inset 0 0 0 1px ${scales.neutral.N4A}, inset 0 -1px 1px 0 ${scales.neutral.N5A}`
        },
        active: {
          backgroundColor: `${colors?.active}`
        },
        focusAndActive: {
          boxShadow: `0 0 0 3px ${focusColor}, inset 0 0 0 1px ${scales.neutral.N4A}, inset 0 1px 1px 0 ${scales.neutral.N2A}`
        }
      })
    }

    case 'minimal': {
      const colors = getColorsForIntent(intent)
      return Themer.createButtonAppearance({
        disabled,
        base: {
          color: `${colors?.base}`,
          backgroundColor: 'transparent'
        },
        hover: {
          color: `${colors?.hover}`
        },
        focus: {
          boxShadow: `0 0 0 3px ${colors?.hover}`
        },
        active: {
          backgroundImage: 'none',
          color: `${colors?.active}`
        },
        focusAndActive: {}
      })
    }

    case 'combo': {
      return Themer.createButtonAppearance({
        disabled,
        base: {
          borderTop: `1px solid ${scales.neutral.N5}`,
          borderRight: `1px solid ${scales.neutral.N5}`,
          borderBottom: `1px solid ${scales.neutral.N5}`,
          backgroundColor: 'white'
        },
        // Hover: { backgroundColor: `${palette.blue.base}` },
        focus: {
          boxShadow: `0 0 0 3px ${scales.blue.B4A}`
        },
        active: {
          backgroundImage: 'none',
          // Color: `${palette.blue.base}`,
          boxShadow: `0 0 0 3px ${scales.blue.B4A}`
        }
      })
    }

    case 'default':
    default: {
      const colors = getColorsForIntent(intent)
      return Themer.createButtonAppearance({
        disabled,
        base: {
          ...defaultControlStyles?.base,
          color: `${colors.base}`,
          border: `1px ${colors.base} solid`,
          backgroundImage: '#ffffff',
          boxShadow: 'none'
        },
        hover: {
          ...defaultControlStyles.hover,
          color: '#ffffff',
          backgroundImage: 'unset',
          backgroundColor: `${colors.hover}`
        },
        focus: defaultControlStyles.focus,
        active: defaultControlStyles.active,
        focusAndActive: defaultControlStyles.focusAndActive
      })
    }
  }
}

/**
 * Get the className of a `Button`|`IconButton`.
 * @param {string} appearance - default, primary, minimal.
 * @param {Intent} intent - none, success, warning, danger.
 * @return {string} the appearance class name.
 */
export default memoizeClassName(getButtonAppearance)
