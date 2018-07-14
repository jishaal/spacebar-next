import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'react-emotion';
import { Flex, Box } from 'grid-styled/emotion';

const Anchor = styled('a')`
	color: ${props => props.theme.colors.white};
	&:hover {
		text-decoration: none;
	}
`;

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
								<Box width={[1, 1, 1 / 2]} py={[2, 3]} pr={[2, 4]} key={post.id}>
									<h3>
										<Anchor
											href={`https://medium.com/@jishaal/${post.uniqueSlug}`}
										>
											{post.title}
										</Anchor>
									</h3>
									<p>{post.virtuals.subtitle}</p>
									<span>{post.firstPublishedAt}</span>
									{' · '}
									<span>{post.virtuals.readingTime}</span>
								</Box>
							))}
						</Flex>
					</Box>
				);
			}}
		/>
	</div>
);
