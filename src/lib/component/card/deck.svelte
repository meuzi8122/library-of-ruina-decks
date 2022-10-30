<script lang="ts">

export let deck: Deck;

function tryDraw() {

    let battleCards: string[] = [];

    for (const battleCard of deck.battleCards) {
        for (let count = 0; count < battleCard.num; count++) {
            battleCards.push(battleCard.name);
        }
    }

    let drawnBattleCards: string[] = [];

    while (drawnBattleCards.length < 4) {
        const pos = Math.ceil(Math.random() * (battleCards.length - 1));
        drawnBattleCards.push(battleCards[pos]);
        battleCards.splice(pos, 1);
    }

    alert(drawnBattleCards.join(","));

}

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
            <button type="button" class="btn btn-sm btn-outline-secondary" on:click={tryDraw}>お試しドロー</button>
        </div>
    </div>
</div>