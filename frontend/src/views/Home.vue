<template>
	<div class="flex justify-center">
		<div class="container login-form">
			<div class="row justify-center">
				<div class="col-4">
					<v-card
						width="100%">
						<v-card-title>
							Login
						</v-card-title>
						<div class="row justify-center">
							<div class="col-10">
								<v-text-field
									label="Email"
									outlined
								></v-text-field>
							</div>
							
						</div>
						<div class="row justify-center">
							<div class="col-10">
								<v-text-field
									label="Password"
									outlined
									type="password"
								></v-text-field>
							</div>
						</div>
						<v-card-text>
							<div class="row justify-center">
								<div class="col-11">
									<v-btn 
										color="secondary"
										width="100%">
										Login
									</v-btn>
								</div>
							</div>
							<div class="row">
								<div class="col-6"></div>
								<div class="col-6 flex justify-end mt-4">
									<v-btn 
										x-small
										@click="testButton">
										forgot password
									</v-btn>
								</div>
							</div>
							
						
						</v-card-text>
					</v-card>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex"
import { mapState } from "vuex"

export default {
  name: 'Home',
  components: {
	},
	mixins: [

	],
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
		console.log("Home mounted")
		this.$emit("navHome", true)
	}
}
</script>
<style lang="scss" scoped>
.login-form {
	margin-top: 15vh;
}
</style>
