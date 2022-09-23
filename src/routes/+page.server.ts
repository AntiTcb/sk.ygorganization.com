import type { PageServerLoad } from './$types';

import { error } from '@sveltejs/kit'
import { homePageQuery } from '$queries/homePage';

export const load: PageServerLoad = async () => {
    const posts = await homePageQuery();

    if (posts) {
        return {
            posts: posts.posts,
        }
    }

    throw error(404, 'Not found');
};
