import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

export default () => (
	<div>
		<StaticQuery
			query={graphql`
				query LatestPostQuery {
					allMediumPost(sort: { fields: [createdAt], order: DESC }, limit: 1) {
						edges {
							node {
								id
								title
								virtuals {
									subtitle
									previewImage {
										imageId
									}
								}
								author {
									name
								}
							}
						}
					}
				}
			`}
			render={data => {
				if (!data) {
					console.log('no data');
				}
				return <div>{data.allMediumPost.edges[0].node.title}</div>;
			}}
		/>
	</div>
);
