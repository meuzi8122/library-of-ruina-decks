import { DeckService } from "../lib/cms/deck";

export async function load() {
    return {
        decks: await DeckService.findDecks()
    }
}