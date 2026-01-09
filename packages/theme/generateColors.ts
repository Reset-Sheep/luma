// packages/theme/generateColors.ts

import { semanticColors } from './colors'
import { resolveColor } from './utils/resolveColor'

export function generateColorVariables(): Record<string, string> {
  const vars: Record<string, string> = {}

  Object.entries(semanticColors).forEach(([group, values]) => {
    Object.entries(values).forEach(([name, token]) => {
      vars[`--color-${group}-${name}`] = resolveColor(token)
    })
  })

  return vars
}
