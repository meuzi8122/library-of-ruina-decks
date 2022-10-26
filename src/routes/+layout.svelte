<script lang="ts">

import Header from "$lib/layouts/header.svelte";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/scss/bootstrap.scss";

</script>

<Header />
<main>
    <slot></slot>
</main>
<!-- フッターが必要ならここに設置 -->