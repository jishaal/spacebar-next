import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import ReactDOMServer from 'react-dom/server';

import theme from './src/utils/theme';

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
    const ConnectedBody = () => (
        <ThemeProvider theme={theme}>
            {bodyComponent}
        </ThemeProvider>
    )

    replaceBodyHTMLString(ReactDOMServer.renderToString(<ConnectedBody/>))
};
