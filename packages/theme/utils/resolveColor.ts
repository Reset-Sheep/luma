// packages/theme/utils/resolveColor.ts

import { palette } from '../colors'

export function resolveColor(token: string): string {
  if (token.startsWith('#')) return token

  const [group, key] = token.split('.')
  // @ts-expect-error dynamic access
  return palette[group]?.[key] ?? token
}
