import { createContext, useState, useMemo } from 'react'
import { createTheme, type Theme, type ThemeOptions } from '@mui/material/styles'

// Define types for color tokens
interface ColorTokens {
  grey: Record<number, string>
  primary: Record<number, string>
  greenAccent: Record<number, string>
  redAccent: Record<number, string>
  blueAccent: Record<number, string>
  yellowAccent: Record<number, string>
}

// Function to generate color tokens based on mode
export const tokens = (mode: 'light' | 'dark'): ColorTokens => ({
  ...(mode === 'dark'
    ? {
        grey: {
          100: '#e0e0e0',
          200: '#c2c2c2',
          300: '#a3a3a3',
          400: '#858585',
          500: '#666666',
          600: '#525252',
          700: '#3d3d3d',
          800: '#292929',
          900: '#141414'
        },
        primary: {
          100: '#d0d1d5',
          200: '#a1a4ab',
          300: '#727681',
          400: '#1F2A40',
          500: '#141b2d',
          600: '#101624',
          700: '#0c101b',
          800: '#080b12',
          900: '#040509'
        },
        greenAccent: {
          100: '#dbf5ee',
          200: '#4cceac',
          300: '#4cceac',
          400: '#70d8bd',
          500: '#4cceac',
          600: '#3da58a',
          700: '#2e7c67',
          800: '#1e5245',
          900: '#0f2922'
        },
        redAccent: {
          100: '#f8dcdb',
          200: '#f1b9b7',
          300: '#e99592',
          400: '#e2726e',
          500: '#db4f4a',
          600: '#af3f3b',
          700: '#832f2c',
          800: '#58201e',
          900: '#2c100f'
        },
        blueAccent: {
          100: '#e1e2fe',
          200: '#c3c6fd',
          300: '#a4a9fc',
          400: '#868dfb',
          500: '#6870fa',
          600: '#535ac8',
          700: '#3e4396',
          800: '#2a2d64',
          900: '#151632'
        },
        yellowAccent: {
          100: '#FFF9C4',
          200: '#FFF59D',
          300: '#FFF176',
          400: '#FFEE58',
          500: '#FFEB3B',
          600: '#FDD835',
          700: '#FBC02D',
          800: '#F9A825',
          900: '#F57F17'
        }
      }
    : {
        grey: {
          100: '#141414',
          200: '#292929',
          300: '#3d3d3d',
          400: '#525252',
          500: '#666666',
          600: '#858585',
          700: '#a3a3a3',
          800: '#c2c2c2',
          900: '#e0e0e0'
        },
        primary: {
          100: '#040509',
          200: '#080b12',
          300: '#0c101b',
          400: '#f2f0f0', // manually changed
          500: '#f2f0f0',
          600: '#1F2A40',
          700: '#727681',
          800: '#a1a4ab',
          900: '#d0d1d5'
        },
        greenAccent: {
          100: '#0f2922',
          200: '#4cceac',
          300: '#4cceac',
          400: '#3da58a',
          500: '#4cceac',
          600: '#70d8bd',
          700: '#94e2cd',
          800: '#b7ebde',
          900: '#dbf5ee'
        },
        redAccent: {
          100: '#2c100f',
          200: '#58201e',
          300: '#832f2c',
          400: '#af3f3b',
          500: '#db4f4a',
          600: '#e2726e',
          700: '#e99592',
          800: '#f1b9b7',
          900: '#f8dcdb'
        },
        blueAccent: {
          100: '#151632',
          200: '#2a2d64',
          300: '#3e4396',
          400: '#535ac8',
          500: '#6870fa',
          600: '#868dfb',
          700: '#a4a9fc',
          800: '#c3c6fd',
          900: '#e1e2fe'
        },
        yellowAccent: {
          100: '#F57F17',
          200: '#F9A825',
          300: '#FBC02D',
          400: '#FDD835',
          500: '#FFEB3B',
          600: '#FFEE58',
          700: '#FFF176',
          800: '#FFF59D',
          900: '#FFF9C4'
        }
      })
})

// Type definition for the theme settings function return
interface ThemeSettings extends ThemeOptions {
  palette: {
    mode: 'light' | 'dark'
    primary: {
      main: string
    }
    secondary: {
      main: string
    }
    neutral: {
      dark: string
      main: string
      light: string
    }
    background: {
      default: string
    }
  }
  components: Record<string, any> // For custom component overrides
  typography: {
    fontFamily: string
    fontSize: number
    h1: {
      fontFamily: string
      fontSize: string
    }
    h2: {
      fontFamily: string
      fontSize: string
    }
    h3: {
      fontFamily: string
      fontSize: string
    }
    h4: {
      fontFamily: string
      fontSize: string
    }
    h5: {
      fontFamily: string
      fontSize: string
    }
    h6: {
      fontFamily: string
      fontSize: string
    }
    p: {
      fontFamily: string
      fontSize: string
    }
  }
}

// Function to generate theme settings based on mode
export const themeSettings = (mode: 'light' | 'dark'): ThemeSettings => {
  const colors = tokens(mode)
  return {
    palette: {
      mode,
      ...(mode === 'dark'
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500]
            },
            secondary: {
              main: colors.greenAccent[500]
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100]
            },
            background: {
              default: colors.primary[500]
            }
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100]
            },
            secondary: {
              main: colors.greenAccent[500]
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100]
            },
            background: {
              default: '#fcfcfc'
            }
          })
    },
    components: {
      MuiDataGrid: {
        styleOverrides: {
          root: {
            '& .MuiDataGrid-toolbarContainer': {
              // Change the background of the toolbar
              color: '#fff' // Change the text color in the toolbar
            },
            '& .MuiButton-root': {
              color: '#fff' // Change the text color of buttons
            }
          }
        }
      },
      // MuiDropzoneSnackbar: {
      //   styleOverrides: {
      //     root: {
      //       gridColumn: 'span 4',
      //       backgroundColor: colors.primary[400]
      //     }

      //   }

      // },
      MuiPaper: {
        styleOverrides: {
          root: {
            '&.MuiPaper-root': {
              backgroundColor: colors.primary[400]
            },
            '&.MuiPaper-root.MuiAlert-root.MuiAlert-colorSuccess ': {
              backgroundColor: 'rgb(56, 142, 60)',
              '& .MuiAlert-icon': {
                color: 'rgba(0, 0, 0, 0.87)'
              },
              '& .MuiAlert-message': {
                color: 'rgba(0, 0, 0, 0.87)'
              }
            },

            '&.MuiPaper-root.MuiAlert-root.MuiAlert-colorWarning ': {
              backgroundColor: 'rgb(245, 124, 0)',
              '& .MuiAlert-icon': {
                color: 'rgba(0, 0, 0, 0.87)'
              },
              '& .MuiAlert-message': {
                color: 'rgba(0, 0, 0, 0.87)'
              }
            }

          }
        }
      },
      Muicheckbox: {
        styleOverrides: {
          root: {
            '&.MuiCheckbox-colorPrimary': {
              color: colors.greenAccent[500]
            }
          }
        }
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            '&.MuiSvgIcon-root': {
              width: '20px !important',
              height: '20px !important'
            }
          }
        }
      }
    },
    typography: {
      fontFamily: ['Roboto', 'Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 12,
      h1: {
        fontFamily: ['Roboto', 'Source Sans Pro', 'sans-serif'].join(','),
        fontSize: '40px'
      },
      h2: {
        fontFamily: ['Roboto', 'Source Sans Pro', 'sans-serif'].join(','),
        fontSize: '32px'
      },
      h3: {
        fontFamily: ['Roboto', 'Source Sans Pro', 'sans-serif'].join(','),
        fontSize: '24px'
      },
      h4: {
        fontFamily: ['Roboto', 'Source Sans Pro', 'sans-serif'].join(','),
        fontSize: '20px'
      },
      h5: {
        fontFamily: ['Roboto', 'Source Sans Pro', 'sans-serif'].join(','),
        fontSize: '16px'
      },
      h6: {
        fontFamily: ['Roboto', 'Source Sans Pro', 'sans-serif'].join(','),
        fontSize: '14px'
      },
      p: {
        fontFamily: ['Roboto', 'Source Sans Pro', 'sans-serif'].join(','),
        fontSize: '16px !important'
      }
    }
  }
}

// Define the context type
interface ColorModeContextType {
  toggleColorMode: () => void
}

// Create context for color mode
export const ColorModeContext = createContext<ColorModeContextType>({
  toggleColorMode: () => {}
})

// Custom hook to manage and toggle color mode
export const useMode = (): [Theme, ColorModeContextType] => {
  const [mode, setMode] = useState<'light' | 'dark'>('dark')

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => { setMode((prev) => (prev === 'light' ? 'dark' : 'light')) }
    }),
    []
  )

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return [theme, colorMode]
}
