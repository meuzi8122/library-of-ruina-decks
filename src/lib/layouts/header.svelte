<script lang="ts">

import { goto } from "$app/navigation";

let keyword: string = "";

function navigateIndexPage() {
    goto(`/?keyword=${keyword}`);
}

</script>

<header>
    <div class="navbar navbar-dark bg-dark box-shadow">
        <div class="container d-flex justify-content-between">
            <a href="/" class="navbar-brand d-flex align-items-center">
                <strong>LoR Decks</strong>
            </a>
            <div class="d-flex">
                <input class="form-control me-2" type="search" placeholder="コアページ・階層で検索" bind:value={keyword}>
                <button class="btn btn-outline-success" on:click={navigateIndexPage}>Search</button>
            </div>
        </div>
    </div>
</header>