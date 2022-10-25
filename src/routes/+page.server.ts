import { DeckService } from "../libs/cms/deck";

export async function load() {
    return {
        decks: await DeckService.findDecks()
    }
}