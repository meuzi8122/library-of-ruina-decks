type Deck = {
    id: string;
    character: string;
    battleCards: BattleCard[];
    screenCaptureUrl: string;
}

type BattleCard = {
    id: string;
    name: string;
}