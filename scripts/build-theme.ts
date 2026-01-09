// scripts/build-theme.ts

import { generateColorVariables } from '../packages/theme/generateColors'
import fs from 'fs'

const vars = generateColorVariables()

let css = ':root {\n'
Object.entries(vars).forEach(([key, value]) => {
  css += `  ${key}: ${value};\n`
})
css += '}\n'

fs.writeFileSync('packages/theme/colors.css', css)
