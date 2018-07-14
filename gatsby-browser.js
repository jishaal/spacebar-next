import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import theme from './src/utils/theme';

export const wrapRootComponent = ({ Root }) => {
	return () => (
		<ThemeProvider theme={theme}>
			<Root />
		</ThemeProvider>
	);
};
