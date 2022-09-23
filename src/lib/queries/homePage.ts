import { wpgql } from '$wp'
import { gql } from 'graphql-request'

class HomePageData {
    posts: Wordpress.Post[];
    siteUrl: string;
    siteTitle: string;

    constructor(gqlQuery: GraphQlQueries.HomePage) {
        this.posts = gqlQuery.posts.edges.map(edge => {
            return {
                slug: edge.node.slug,
                title: edge.node.title,
                excerpt: edge.node.excerpt,
                content: edge.node.content,
                date: edge.node.date,
                featuredImage: {
                    sourceUrl: edge.node.featuredImage.node.sourceUrl
                },
                author: {
                    name: edge.node.author.node.name,
                    avatarUrl: edge.node.author.node.avatar.url
                },
                categories: edge.node.categories.nodes.map(node => node.name),
            }
        });
        this.siteUrl = gqlQuery.allSettings.generalSettingsUrl;
        this.siteTitle = gqlQuery.allSettings.generalSettingsTitle;
    }
}

export const homePageQuery = async () : Promise<HomePageData> => {
    const query = gql`
    {
        posts(first: 20) {
          edges {
            node {
              id
              slug
              title
              excerpt
              date
              featuredImage {
                node {
                  sourceUrl
                  title
                  altText
                }
              }
              author {
                node {
                  name
                  avatar {
                    url
                  }
                }
              }
              categories {
                nodes {
                  name
                }
              }
            }
          }
        }
        allSettings {
          generalSettingsUrl
          generalSettingsTitle
        }
      }`;
    const results = await wpgql<GraphQlQueries.HomePage>(query);

    const data = new HomePageData(results);

    return data;
}
