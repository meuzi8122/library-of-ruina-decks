<script lang="ts">

export let deck: Deck;

</script>

<style>

.box-shadow { 
    box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); 
}

</style>

<div class="card mb-4 box-shadow">
    <img class="card-img-top" src={deck.screenCaptureUrl} alt={`${deck.character} / ${deck.stage}`} />
    <div class="card-body">
        <p class="card-text">
            { #if deck.stage }
                {deck.character} / {deck.stage}
            { :else }
                {deck.character}
            {/if}
        </p>
        <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">表示中の画像を拡大</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">画像の切り替え</button>
            </div>
        </div>
    </div>
</div>