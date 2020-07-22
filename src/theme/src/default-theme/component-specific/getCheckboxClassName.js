import { Themer } from '../../../../themer'
import memoizeClassName from '../utils/memoizeClassName'
import scales from '../foundational-styles/scales'
import { getPrimaryButtonStylesForIntent } from '../helpers'

const colors = getPrimaryButtonStylesForIntent()

const defaultAppearance = Themer.createCheckboxAppearance({
  base: {
    color: 'white',
    backgroundColor: 'white',
    border: `1px solid ${scales.neutral.N5}`
  },
  disabled: {
    cursor: 'not-allowed',
    backgroundColor: scales.neutral.N2A
  },
  hover: {
    border: `1px solid ${scales.neutral.N6}`
  },
  focus: {
    boxShadow: `0 0 0 2px ${scales.blue.B4A}, inset 0 0 0 1px ${scales.neutral.N5A}, inset 0 -1px 1px 0 ${scales.neutral.N3A}`
  },
  active: {
    backgroundImage: 'none',
    backgroundColor: scales.blue.B3A,
    boxShadow: `inset 0 0 0 1px ${scales.blue.B5A}`
  },
  checked: {
    color: 'white'
  },
  checkedHover: {
    color: 'white'
  },
  checkedDisabled: {
    color: scales.neutral.N6A,
    backgroundImage: `linear-gradient(to top, ${scales.neutral.N2A}, ${scales.neutral.N1A})`
  },
  checkedActive: {
    color: 'white',
    backgroundImage: `${colors?.active}`,
    boxShadow: `inset 0 0 0 1px ${scales.neutral.N4A}, inset 0 -1px 1px 0 ${scales.neutral.N2A}`
  }
})

/**
 * There is only a single appearance in the default theme.
 * @param {String} appearance.
 * @return {Object} the appearance of the checkbox.
 */
const getCheckboxAppearance = () => {
  return defaultAppearance
}

/**
 * Get the className of a `Checkbox`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */
export default memoizeClassName(getCheckboxAppearance)
