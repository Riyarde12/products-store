<template>
	<section class="app-footer fixed">
		<small> © 2022 Products Store - All Rights Reserved </small>
	</section>
</template>
<script>
	export default {
		name: "app-footer",
		components: {},
		created() {},
	};
</script>

<style>
.app-footer {

    @apply h-screen-10;
    @apply flex;
    @apply justify-center;
    @apply items-center;
	@apply bottom-0;
	@apply w-full;
	@apply justify-around;
}

</style>