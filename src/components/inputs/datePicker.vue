<template>
	<section class="">
		<form>
			<div class="nativeDatePicker">
				<label>Select..</label>
				<input
					type="date"
					:min="new Date().toISOString().split('T')[0]"
					:max="getMaxDate"
					@input="onSelected"
					v-model="selected"
				/>
			</div>
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