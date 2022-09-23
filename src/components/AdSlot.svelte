<script lang="ts">
    export let type: 'Banner' | 'Rectangle' | 'Square' | 'VerticalRectangle' = "Banner";

    const sizes = {
        Banner: {
            width: 728,
            height: 90
        },
        Rectangle: {
            width: 300,
            height: 250
        },
        Square: {
            width: 250,
            height: 250
        },
        VerticalRectangle: {
            width: 240,
            height: 400
        }
    }
</script>

<div class="w-80 h-36 bg-white text-center text-black">
    Ad Slot
</div>
