/* .envからクライアント側で秘匿すべき環境変数を読み込む */
import { API_KEY, SERVICE_DOMAIN } from "$env/static/private";
import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: SERVICE_DOMAIN,
    apiKey: API_KEY
});
