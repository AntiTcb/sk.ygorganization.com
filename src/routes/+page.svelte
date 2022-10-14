<script lang="ts">
    import type { PageData } from './$types'

    import { Avatar, Divider } from '@brainandbones/skeleton';

    export let data: PageData;
    const { posts } = data;
</script>

<div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    {#each posts as post}
        <!-- <a class="card overflow-hidden hover:shadow-4xl hover:-translate-y-3" href={post.slug}>
            <header class="card-header">
                <div class="flex flex-wrap justify-end my-1 gap-2">
                    {#each post.categories as category }
                        <span class="badge bg-primary-500">{category}</span>
                    {/each}
                </div>
                <img src={post.featuredImage.sourceUrl} class="bg-black/50 w-full scale-90" alt={post.title} />
                <Divider margin="my-2" borderWidth="border-t-2" />
                <span class="font-bold text-xl text-center block">{post.title}</span>
            </header>
            <div class="card-body">{@html post.excerpt}</div>
            <footer class="card-footer mt-2 space-x-4">
                <Divider margin="my-2" borderWidth="border-t-2" />
                <div class="flex justify-start items-center">
                    <Avatar src={post.author.avatarUrl} alt={post.author.name} />
                    <div class="flex-auto flex flex-col justify-between items-center">
                        <h6 class="font-bold">By {post.author.name}</h6>
                        <small>On {new Date(post.date).toLocaleString()}</small>
                    </div>
                </div>
            </footer>
        </a> -->
    {/each}
</div>
