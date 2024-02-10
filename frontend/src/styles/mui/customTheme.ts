import {
  FONTS,
  COMPONENT_STYLES as OVERRIDE_COMPONENT_STYLES,
  PALETTE,
} from '@/constants/mui'
import { Theme, createTheme } from '@mui/material/styles'

const lightTheme: Theme = createTheme({
  typography: {
    fontFamily: FONTS.join(),
  },
  palette: {
    mode: 'light',
    primary: {
      main: PALETTE.primary,
      light: PALETTE.primarySoft,
    },
    secondary: {
      main: PALETTE.secondary,
      light: PALETTE.secondarySoft,
    },
    background: { default: PALETTE.light },
    success: {
      main: PALETTE.success,
    },
    error: {
      main: PALETTE.error,
    },
  },
  components: OVERRIDE_COMPONENT_STYLES,
})

const darkTheme: Theme = createTheme({
  typography: {
    fontFamily: FONTS.join(),
  },
  palette: {
    mode: 'dark',
    primary: {
      main: PALETTE.primary,
      light: PALETTE.primarySoft,
    },
    secondary: {
      main: PALETTE.light,
      light: PALETTE.descriptionDark,
    },
    background: { default: PALETTE.dark },
    success: {
      main: PALETTE.success,
    },
    error: {
      main: PALETTE.error,
    },
  },
  components: OVERRIDE_COMPONENT_STYLES,
})

export { lightTheme, darkTheme }
