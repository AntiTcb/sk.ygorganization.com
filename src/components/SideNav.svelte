<script lang="ts">
    import type { Writable } from 'svelte/store';
    import { ListBox, ListBoxItem } from '@brainandbones/skeleton';
    import { writable } from 'svelte/store';

    const storeSingle : Writable<number> = writable(1);
</script>

<ListBox selected={storeSingle}>
    <ListBoxItem value={1}>YGOrganization</ListBoxItem>
    <ListBoxItem value={2}></ListBoxItem>
</ListBox>
