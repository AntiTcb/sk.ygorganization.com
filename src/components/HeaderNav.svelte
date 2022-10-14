<script lang="ts">
    import { AppBar, GradientHeading } from '@brainandbones/skeleton';
    import AppBarTrail from './AppBarTrail.svelte';
</script>

<AppBar>
    <svelte:fragment slot="lead">
        <a href="/">
            <GradientHeading tag="h4" direction="bg-gradient-to-r" from="from-warning-500" to="to-accent-500">YGOrganization</GradientHeading>
        </a>
    </svelte:fragment>
    <input type="search" placeholder="Search..." class="max-w-sm hidden lg:block" />
    <svelte:fragment slot="trail">
        <AppBarTrail />
    </svelte:fragment>
</AppBar>
