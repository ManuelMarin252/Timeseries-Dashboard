import React, { useContext } from 'react'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { ColorModeContext, tokens } from '../theme'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'

export function Topbar () {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)
  return (
    <Box display='flex' sx={{ background: `${colors.primary[400]} !important`, justifyContent: 'space-between', alignItems: 'center' }} p={2} width='100%' height='50px'>
      <Box display='flex' />
      <Box display='flex' flexDirection='column' justifyContent='center'>
        <Typography variant='h3' textAlign='center' color={colors.greenAccent[400]}>Timeseries Dashboard</Typography>
      </Box>

      {/* ICONS */}
      <Box display='flex' maxHeight='30px'>
        <IconButton className='Theme' onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark'
            ? (
              <DarkModeOutlinedIcon />
              )
            : (
              <LightModeOutlinedIcon />
              )}
        </IconButton>
        <IconButton onClick={() => { }}>
          <SettingsOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Topbar
