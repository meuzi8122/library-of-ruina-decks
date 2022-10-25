<script lang="ts">

export let data: { decks: Deck[] };

</script>


{#each data.decks as deck}
    <p>{deck.id}</p>
{/each}
