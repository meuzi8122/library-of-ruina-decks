<script lang="ts">

function openSteam() {
    window.open("https://store.steampowered.com/app/1256670/Library_Of_Ruina/", "_blank");
}

function openTwitter() {
    window.open("https://twitter.com/projmoonstudio", "_blank");
}

function openYoutube() {
    window.open("https://www.youtube.com/channel/UCpqyr6h4RCXCEswHlkSjykA", "_blank");
}

</script>

<section class="welcome text-center">
    <div class="container">
        <h1 class="welcome-heading">LoR Decks</h1>
        <p class="lead text-muted">Library of Ruinaのデッキのスクリーンショット</p>
        <p>
            <button class="btn btn-default" on:click={openSteam}>
                <i class="bi bi-steam"></i>
            </button>
            <button class="btn btn-default" on:click={openTwitter}>
                <i class="bi bi-twitter"></i>
            </button>
            <button class="btn btn-default" on:click={openYoutube}>
                <i class="bi bi-youtube"></i>
            </button>
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

.bi {
    font-size: 1.5rem;
}

</style>