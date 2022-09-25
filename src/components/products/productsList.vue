<template>
	<section class="products-list">
		<ul v-if="products">
			<div class="grid grid-cols-4 gap-4">
				<!--	TODO: DATE PICKER HERE -->
				<li v-for="product in products" :key="product.id">
					<products-list-item :product="product" />
				</li>
			</div>
		</ul>
	</section>
</template>

<script>
	import productsListItem from "./productsListItem.vue";
	export default {
		name: "products-list",
		props: {
			products: { type: Array, required: true },
		},
		components: {
			productsListItem,
		},
		created() {},
		data() {
			return {};
		},
	};
</script>
