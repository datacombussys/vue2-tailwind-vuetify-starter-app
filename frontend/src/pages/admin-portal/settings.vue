
<template>
	<div class="flex justify-center">
		<div class="container">
				<div>Admin page to Manage Settings</div>
				<!-- Main Container Row -->
				<div class="row">
					<!-- Main Content Left Area -->
					<div class="col-8">

					</div>
					<!-- ENDMain Content Left Area -->
				</div>
				<!-- END Main Container Row -->
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
import moment from 'moment';


export default {
  name: 'schoolSettings',
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
