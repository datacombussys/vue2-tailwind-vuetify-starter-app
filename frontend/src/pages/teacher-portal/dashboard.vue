<template>
	<div class="container">
		<template>
			<div>Teachers Dashboard</div>
			<div class="row">
				<div class="col-3">
					<v-btn
						@click="testButton">
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
  name: 'teachersDashboard',
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
			console.log(this.$route.name)
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
