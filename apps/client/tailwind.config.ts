import type { Config } from 'tailwindcss'
import preset from '../../packages/config/tailwind.config'

const config: Config = {
  presets: [preset],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', '../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}'],
}

export default config
