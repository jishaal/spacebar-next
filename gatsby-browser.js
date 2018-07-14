import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { StaticQueryContext } from "gatsby"

import theme from './src/utils/theme';

export const wrapRootComponent = ({ Root }) => {
	return () => (
		<StaticQueryContext.Provider>
			<ThemeProvider theme={theme}>
				<Root />
			</ThemeProvider>
		</StaticQueryContext.Provider>
	);
};
