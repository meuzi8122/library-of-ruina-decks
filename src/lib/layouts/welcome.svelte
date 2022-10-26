<script lang="ts">

import ExternalImageLink from "$lib/component/link/image.svelte";

</script>

<section class="welcome text-center">
    <div class="container">
        <h1 class="welcome-heading">LoR Decks</h1>
        <p class="lead text-muted">Library of Ruinaのデッキ集</p>
        <p>
            <ExternalImageLink href="https://store.steampowered.com/app/1256670/Library_Of_Ruina/" alt="steam link" src="./steam.png"  />
            <ExternalImageLink href="https://twitter.com/projmoonstudio" alt="twitter link" src="./twitter.png" />
            <!-- Youtube -->
        </p>
    </div>
</section>

<style>
    
:root {
    --welcome-padding-y: 3rem;
}
    
.welcome {
    padding-top: var(--welcome-padding-y);
    padding-bottom: var(--welcome-padding-y);
    margin-bottom: 0;
    background-color: #fff;
}
    
@media (min-width: 768px) {
    .welcome {
        padding-top: calc(var(--welcome-padding-y) * 2);
        padding-bottom: calc(var(--welcome-padding-y) * 2);
    }
}
    
.welcome p:last-child {
    margin-bottom: 0;
}
    
.welcome-heading {
    font-weight: 300;
}
    
.welcome .container {
    max-width: 40rem;
}

</style>