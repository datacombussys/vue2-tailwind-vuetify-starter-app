<template>
	<div class="container">
		<template>
			<div>Place order Parents</div>
		</template>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
import moment from 'moment';


export default {
  name: 'parentsPlaceOrder',
  components: {
	},
	mixins: [

	],
	props: {

	},
	data() {
		return {
			//Main Data

		}
	},
	methods: {
		testButton() {

		},

	},
	computed: {
		...mapState([]),
		...mapGetters([]),


	},
	mounted() {

	}
}
</script>
<style scoped lang="scss">

</style>
