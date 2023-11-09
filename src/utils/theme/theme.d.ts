import '@emotion/react';

import type { ThemeCustom as CustomTheme } from './index';
import type { Theme as MuiTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

declare module '@emotion/react' {
  export interface Theme extends MuiTheme {}
  export interface Theme extends CustomTheme {}
}
