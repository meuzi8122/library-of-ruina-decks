<script lang="ts">

import { page } from "$app/stores";
import DeckCard from "$lib/component/card/deck.svelte";
import Welcome from "$lib/component/welcome/index.svelte";

export let data: { decks: Deck[] };

$: keyword = $page.url.searchParams.get("keyword");

</script>

<Welcome />

<div class="album py-5 bg-light">
    <div class="container">
        <div class="row">
            {#each data.decks as deck}
                {#if deck.character.toLowerCase().match(keyword || "")}
                    <div class="col-md-6">
                        <DeckCard deck={deck} />
                    </div>
                {/if}
            {/each}
        </div>
    </div>
</div>