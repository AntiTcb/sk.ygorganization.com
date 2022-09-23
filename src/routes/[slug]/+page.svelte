<script lang="ts">
    import type { PageData } from './$types'

    export let data : PageData;
    const { post } = data;
</script>

<h2 class="text-center">{post.title}</h2>

<article class="flex flex-col gap-3">
    {@html post.content}
</article>
