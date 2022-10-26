<script lang="ts">

import DeckCard from "$lib/component/card/deck.svelte";


export let data: { decks: Deck[] };

</script>

<div class="album py-5 bg-light">
    <div class="container">
        <div class="row">
            {#each data.decks as deck}
                <div class="col-md-4">
                    <DeckCard deck={deck} />
                </div>
            {/each}
        </div>
    </div>
</div>