<template>
	<section class="app-header">
		<h1>Products Store</h1>
	</section>
</template>
<script>
	export default {
		name: "app-header",
		components: {},
		created() {},
	};
</script>

<style>
.app-header{
@apply h-screen-10;
@apply flex;
@apply items-center;
@apply shadow-b-s-helper;
@apply pl-24;
/* @apply px-padding-l-r-7.6; */
}

.app-header h1{
	@apply text-4xl;
	@apply cursor-pointer;
}
</style>