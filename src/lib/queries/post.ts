import { wpgql } from "$wp";
import { gql } from "graphql-request";

type PostQuery = {
    post: {
        content: string;
        date: Date;
        title: string;
        featuredImage: {
            node: {
                sourceUrl: string;
            }
        };
        author: {
            node: {
                name: string;
            }
        }
    }
}

export const postQuery = async (slug: string) : Promise<PostQuery> => {
    const query = gql`
    {
        post(id: "${slug}", idType: SLUG) {
          id
          content
          date
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
          author {
            node {
              name
            }
          }
        }
      }`;
    const results = await wpgql<PostQuery>(query);
    return results;
}
