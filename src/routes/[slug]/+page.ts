import type { PageLoad } from './$types'
import { error } from '@sveltejs/kit'
import { postQuery } from '$queries/post';

export const load = async ({ params }) : Promise<PageLoad> => {
    if (params.slug) {
        const post = await postQuery(params.slug);
        return {
            post: post.post,
        }
    }

    throw error(404, 'Not found');
}
