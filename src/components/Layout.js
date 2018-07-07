import React from 'react';
import Header from './Header';

export default ({ children }) => (
	<div style={{ margin: `0 auto`, maxWidth: 1440, padding: `1.25rem 1rem` }}>
		<Header />
		{children}
	</div>
);
