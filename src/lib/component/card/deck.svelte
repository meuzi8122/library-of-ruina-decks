<script lang="ts">

export let deck: Deck;

//view-source:https://getbootstrap.com/docs/4.0/examples/album/#

</script>

<style>

.box-shadow { 
    box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); 
}

</style>

<div class="card mb-4 box-shadow">
    <img class="card-img-top" src={deck.screenCaptureUrl} alt={deck.character} />
    <div class="card-body">
        <p class="card-text">{deck.character}</p>
        <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
                <a href={`decks/${deck.id}`} class="btn btn-sm btn-outline-secondary" sveltekit:prefetch>View</a>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
            </div>
        </div>
    </div>
</div>