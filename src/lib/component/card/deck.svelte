<script lang="ts">

export let deck: Deck;

</script>

<style>

.box-shadow { 
    box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); 
}

</style>

<div class="card mb-4 box-shadow">
    <img class="card-img-top" src={deck.screenCaptureUrl} alt={deck.character} />
    <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
            <span>{deck.character}</span>
            <button type="button" class="btn btn-sm btn-outline-secondary">お試しドロー</button>
        </div>
    </div>
</div>