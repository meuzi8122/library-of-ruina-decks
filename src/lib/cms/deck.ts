import { client } from "./client";

export class DeckService {

    // static findCharacters = async (): Promise<string[]> => {
    //     return (await client.get({
    //         endpoint: "decks",
    //         queries: {
    //             fields: "Character"
    //         }
    //     })).contents.map((content: any) => content.Character);
    // }

    private static parseDeck(content: any): Deck {
        return { 
            id: content.id, 
            character: content.Character,
            battleCards: content.BattleCards.map((battleCard: any) => ({ name: battleCard.name, num: battleCard.num })),
            screenCaptureUrl: content.ScreenCapture.url 
        }
    }

    static async findDecks(): Promise<Deck[]> {
        return (await client.get({
            endpoint: "decks",
            queries: {
                fields: "id,Character,BattleCards,ScreenCapture"
            }
        })).contents.map((content: any) => DeckService.parseDeck(content));
    }

}