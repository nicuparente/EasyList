import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from '@chakra-ui/theme-tools'


// 2. Add your color mode config
const breakpoints = createBreakpoints({
  sm: '30em',
  md: '45em',
  lg: '55em',
  xl: '80em',
})


const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  breakpoints,
}




// 3. extend the theme
const theme = extendTheme({ config })

export default theme