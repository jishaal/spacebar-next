import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { renderToString } from 'react-dom/server';
import { extractCritical } from 'emotion-server';

import theme from './src/utils/theme';

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
	const ConnectedBody = () => <ThemeProvider theme={theme}>{bodyComponent}</ThemeProvider>;

	const { html, ids, css } = extractCritical(renderToString(<ConnectedBody />));

	const criticalStyle = <style dangerouslySetInnerHTML={{ __html: css }} />;
	const criticalIds = (
		<script
			dangerouslySetInnerHTML={{
				__html: `window.__EMOTION_CRITICAL_CSS_IDS__ = ${JSON.stringify(ids)};`
			}}
		/>
	);

	setHeadComponents([criticalIds, criticalStyle]);
	replaceBodyHTMLString(html);
};
