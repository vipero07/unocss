import type { Variant } from '@unocss/core'
import type { PresetMiniOptions } from '..'
import type { Theme } from '../theme'
import { variantBreakpoints } from './breakpoints'
import { variantCombinators } from './combinators'
import { variantColorsMediaOrClass } from './dark'
import { variantLanguageDirections } from './directions'
import { variantImportant, variantLayer, variantNegative, variantScope, variantSelector } from './misc'
import { variantCustomMedia, variantPrint } from './media'
import { partClasses, variantPseudoClassFunctions, variantPseudoClasses, variantPseudoElements, variantTaggedPseudoClasses } from './pseudo'

export const variants = (options: PresetMiniOptions): Variant<Theme>[] => [
  variantSelector,
  variantLayer,
  variantNegative,
  variantImportant,
  variantPrint,
  variantCustomMedia,
  variantBreakpoints,
  ...variantCombinators,
  variantPseudoClasses,
  variantPseudoClassFunctions,
  ...variantTaggedPseudoClasses(options),
  variantPseudoElements,
  partClasses,
  ...variantColorsMediaOrClass(options),
  ...variantLanguageDirections,
  variantScope,
]
