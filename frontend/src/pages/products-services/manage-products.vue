<template>
	<div class="container">
		<template>
			<div>Add Edit Products and Services</div>
			<div class="row">
				<div class="col-3">
					<v-btn
						@click="testButton"
						color="success">
						Test
					</v-btn>
				</div>
			</div>
		</template>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
import moment from 'moment';


export default {
  name: 'addEditProductsServices',
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
