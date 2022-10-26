<script lang="ts">

import Header from "$lib/layouts/header.svelte";
import Welcome from "$lib/layouts/welcome.svelte";
import "bootstrap/scss/bootstrap.scss";

</script>

<Header />
<Welcome />
<main>
    <slot></slot>
</main>
<!-- フッターが必要ならここに設置 -->