import { DeckService } from "$lib/cms/deck";

/* TODO: paramsの型指定の方法(app.d.tsのPageServerLoadに書く？) */
/* https://kit.svelte.dev/docs/routing */

export async function load(context: { params: { id: string } }) {  
    return {
        deck: await DeckService.getDeck(context.params.id)
    }
}