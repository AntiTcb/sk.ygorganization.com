<script>
    import '@brainandbones/skeleton/themes/theme-vintage.css';
    import '@brainandbones/skeleton/styles/all.css';
    import '../app.postcss';

    import { AppShell } from '@brainandbones/skeleton';
    import Footer from '$components/Footer.svelte';
    import SideNav from '$components/SideNav.svelte';
    import HeaderNav from '$components/HeaderNav.svelte';
    import Advertisements from '$components/Advertisements.svelte';
</script>

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
