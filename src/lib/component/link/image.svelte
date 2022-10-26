<!-- 外部サイトのリンク用 -->

<script lang="ts">

export let href: string;
export let alt: string;
export let src: string;

</script>

<a href={href} target="_blank" rel="noopener noreferrer">
    <img alt={alt} src={src} />
</a>