import { ColorPalette } from '@/definitions/mui'
import { Components } from '@mui/material/styles'

const DEFAULT_COLOR_PALETTE: ColorPalette = {
  primary: '#ffb803',
  primarySoft: '#fef5e3',
  secondary: '#ecedf2',
  secondarySoft: '#f5f7fc',
  light: '#fff',
  dark: '#132f4c',
  text: '#171717',
  description: '#77838f',
  descriptionDark: '#696969',
  success: '#3bb549',
  error: '#dc494a',
}

const FONTS: string[] = ['Jost', 'Nunito', 'Times New Roman', 'sans-serif']

// Global override
const COMPONENT_STYLES: Components = {
  /**/
}

export { COMPONENT_STYLES, FONTS, DEFAULT_COLOR_PALETTE as PALETTE }
