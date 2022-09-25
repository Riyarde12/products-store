<template>
	<section class="product-list-item">
		<h1 class="">{{ product.name }}</h1>
	</section>
</template>

<script>
	export default {
		name: "product-list-item",
		components: {},
		props: {
			product: { type: Object, required: true },
		},

		created() {},
		data() {
			return {};
		},
	};
</script>
