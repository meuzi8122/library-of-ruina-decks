import { client } from "./client";

export class DeckService {

    static parseCMSContent(content: any): Deck {
        return { 
            id: content.id, 
            character: content.Character,
            stage: content.Stage,
            screenCaptureUrl: content.ScreenCapture.url 
        }
    }

    static async findDecks(): Promise<Deck[]> {
        return (await client.get({
            endpoint: "decks",
            queries: {
                fields: "id,Character,Stage,ScreenCapture"
            }
        })).contents.map((content: any) => DeckService.parseCMSContent(content));
    }

}