<script lang="ts">

import DeckCard from "$lib/component/card/deck.svelte";
import ExternalImageLink from "$lib/component/link/image.svelte";

export let data: { decks: Deck[] };

</script>

<main>

    <section class="jumbotron text-center">
        <div class="container">
            <h1 class="jumbotron-heading">LoR Decks</h1>
            <p class="lead text-muted">Library of Ruinaのデッキ集</p>
            <p>
                <ExternalImageLink href="https://store.steampowered.com/app/1256670/Library_Of_Ruina/" alt="steam link" src="./steam.png"  />
                <!-- プロムンのTwitterやYoutubeなど -->
            </p>
        </div>
    </section>

    <div class="album py-5 bg-light">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    {#each data.decks as deck}
                        <DeckCard deck={deck} />
                    {/each}
                </div>
            </div>
        </div>
    </div>

</main>


<style>
    
    :root {
      --jumbotron-padding-y: 3rem;
    }
    
    .jumbotron {
      padding-top: var(--jumbotron-padding-y);
      padding-bottom: var(--jumbotron-padding-y);
      margin-bottom: 0;
      background-color: #fff;
    }
    @media (min-width: 768px) {
      .jumbotron {
        padding-top: calc(var(--jumbotron-padding-y) * 2);
        padding-bottom: calc(var(--jumbotron-padding-y) * 2);
      }
    }
    
    .jumbotron p:last-child {
      margin-bottom: 0;
    }
    
    .jumbotron-heading {
      font-weight: 300;
    }
    
    .jumbotron .container {
      max-width: 40rem;
    }

</style>
