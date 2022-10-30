type Deck = {
    id: string;
    character: string;
    battleCards: BattleCard[];
    screenCaptureUrl: string;
}

type BattleCard = {
    name: string;
    num: number;
}