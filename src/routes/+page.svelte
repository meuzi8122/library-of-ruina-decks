<script lang="ts">

import DeckCard from "$lib/component/card/deck.svelte";
import Welcome from "$lib/component/welcome/index.svelte";

export let data: { decks: Deck[] };

</script>

<Welcome />

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

<div class="modal fade">
    <div class="modal-dialog modal-xl">
        <img src={data.decks[0].screenCaptureUrl} alt={data.decks[0].character} />
    </div>
</div>