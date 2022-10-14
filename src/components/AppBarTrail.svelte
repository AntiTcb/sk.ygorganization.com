<script lang="ts">
    import { Divider, menu } from '@brainandbones/skeleton'
    import Icon from '@iconify/svelte'

    import { storeTheme, themes } from '$stores/theme';
</script>

<div class="relative">
    <button class="btn" use:menu={{menu: 'themes'}}>
        <iconify-icon icon="fluent:paint-bucket-20-filled" class="text-2xl text-ternary-500"></iconify-icon>
        <span class="hidden md:inline-block font-bold text-sm">Theme</span>
        <span class="opacity-50">▾</span>
    </button>
    <nav class="list-nav card shadow-xl" data-menu="themes">
        <ul>
            {#each themes as theme }
                <li class="option" class:!bg-primary-500={$storeTheme === theme} on:click={() => { storeTheme.set(theme)}}>{theme}</li>
            {/each}
        </ul>
    </nav>
</div>

<Divider vertical borderWidth="border-l-2" />

<section class="flex">
    <a href="https://facebook.com/ygorganization" class="btn btn-sm" target="blank">
        <iconify-icon icon="akar-icons:facebook-fill" class="text-xl text-[#4267B2]"></iconify-icon>
    </a>
    <a href="https://twitter.com/ygorganization" class="btn btn-sm" target="blank">
        <iconify-icon icon="akar-icons:twitter-fill" class="text-xl text-[#1DA1F2]"></iconify-icon>
    </a>
    <a href="https://discord.gg/theorganization" class="btn btn-sm" target="blank">
        <iconify-icon icon="akar-icons:discord-fill" class="text-xl text-[#5865F2]"></iconify-icon>
    </a>
</section>
