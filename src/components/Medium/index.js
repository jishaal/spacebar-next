import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Flex, Box } from 'grid-styled/emotion';

import ArticleBlock from './ArticleBlock';

export default () => (
	<div>
		<StaticQuery
			query={graphql`
				query LatestPostQuery {
					allMediumPost(sort: { fields: [createdAt], order: DESC }, limit: 2) {
						edges {
							node {
								id
								title
								firstPublishedAt
								uniqueSlug
								virtuals {
									subtitle
									readingTime
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
				const posts = data.allMediumPost.edges;

				return (
					<Box>
						<h3
							css={`
								text-align: center;
								font-weight: 400;
							`}
						>
							Latest articles
						</h3>
						<Flex flexWrap="wrap">
							{posts.map(({ node: post }) => (
								<ArticleBlock
									key={post.id}
									title={post.title}
									subtitle={post.virtuals.subtitle}
									date={post.firstPublishedAt}
									readingTime={post.virtuals.readingTime}
									slug={post.uniqueSlug}
								/>
							))}
						</Flex>
					</Box>
				);
			}}
		/>
	</div>
);
