import { client } from "./client";

export class DeckService {

    static parseCMSContent(content: any): Deck {
        return { 
            id: content.id, 
            character: content.Character,
            description: content.Description,
            screenCaptureUrl: content.ScreenCapture.url 
        }
    }

    static async findDecks(): Promise<Deck[]> {
        return (await client.get({
            endpoint: "decks",
            queries: {
                fields: "id,Character,Description,ScreenCapture"
            }
        })).contents.map((content: any) => DeckService.parseCMSContent(content));
    }

}