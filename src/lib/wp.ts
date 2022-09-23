import { request } from 'graphql-request';

export const wpgql = async <T>(query: string) => {
    const uri = 'https://ygorganization.com/graphql';
    const results: T = await request(uri, query);
    return results;
};
