// packages/theme/colors.ts

export const palette = {
  gray: {
    100: '#f5f5f7',
    200: '#e8e8ed',
    300: '#d2d2d7',
    400: '#a1a1a6',
    500: '#6e6e73',
    600: '#515154',
    700: '#424245',
    800: '#2c2c2e',
    900: '#1d1d1f'
  },

  blue: {
    500: '#0071e3',
    600: '#0077ed'
  },

  status: {
    success: '#2ecc71',
    warning: '#f5a623',
    danger: '#e53935'
  },

  product: {
    graphite: '#8e8e93',
    silver: '#d1d1d6'
  }
} as const

/**
 * Semantic colors
 * ⚠️ 组件只能使用 semantic，不允许使用 palette
 */
export const semanticColors = {
  text: {
    primary: 'gray.900',
    secondary: 'gray.500',
    tertiary: 'gray.400',
    inverse: '#ffffff'
  },

  background: {
    default: '#ffffff',
    subtle: 'gray.100',
    elevated: '#ffffff',
    inverted: 'gray.900'
  },

  border: {
    default: 'gray.300',
    subtle: 'gray.200'
  },

  action: {
    primary: 'blue.600',
    primaryHover: 'blue.500',
    text: 'blue.600'
  }
} as const
