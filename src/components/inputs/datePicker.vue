<template>
	<section class="date-picker">
		<form>
			<input
				type="date"
				class="form-input rounded"
				autofocus
				:min="new Date().toISOString().split('T')[0]"
				:max="getMaxDate"
				@input="onSelected"
				v-model="selected"
			/>
		</form>
	</section>
</template>
<script>
	import { addDays } from "../../services/utils/date";

	export default {
		name: "date-picker",
		components: {},
		created() {},
		data() {
			return {
				selected: null,
			};
		},
		methods: {
			onSelected() {
				this.$emit("onSelected", this.selected);
			},
		},
		computed: {
			getMinDate() {
				return Date.now();
			},
			getMaxDate() {
				const res = addDays(Date.now(), 14);
				return res.toISOString().split("T")[0];
			},
		},
	};
</script>

<style>
 input{
	@apply cursor-pointer;
}
</style>