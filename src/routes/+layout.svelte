<script lang="ts">
    import '@brainandbones/skeleton/styles/all.css';
    import '../app.postcss';

    // Themes
    import Normal from '$themes/normal.postcss?inline';
    import Effect from '$themes/effect.postcss?inline';
    const themes: any = { Normal, Effect };

    import { AppShell } from '@brainandbones/skeleton';
    import Footer from '$components/Footer.svelte';
    import SideNav from '$components/SideNav.svelte';
    import HeaderNav from '$components/HeaderNav.svelte';
    import Advertisements from '$components/Advertisements.svelte';

    // import { storeTheme } from '$stores/theme';

    // $: currentTheme = `<style>${themes[$storeTheme]}</style>`;
</script>

<svelte:head>
    <!-- {@html currentTheme} -->
    <script src="https://code.iconify.design/iconify-icon/1.0.0/iconify-icon.min.js"></script>
</svelte:head>

<AppShell>
    <svelte:fragment slot="header">
        <HeaderNav />
    </svelte:fragment>
    <svelte:fragment slot="pageHeader">
        <Advertisements />
    </svelte:fragment>
    <svelte:fragment slot="sidebarLeft">
        <div id="sidebar-left" class="hidden lg:block">
            <SideNav />
        </div>
    </svelte:fragment>
    <svelte:fragment slot="pageFooter">
        <Footer />
    </svelte:fragment>
    <div class="mx-3">
        <slot />
    </div>
</AppShell>
