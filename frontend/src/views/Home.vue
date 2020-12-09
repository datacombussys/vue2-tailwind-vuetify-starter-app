<template>
	<div class="justify-center">
		<template v-if="Object.keys(Auth.userProfile).length != 0">
			<div class="page-container">
				<div class="row">
					<div class="header">
						User Profiles
					</div>
				</div>
				<div class="row mb-3">
					<div class="col-3">
						<router-link v-if="$can('view', 'superuser')" to="/superuser">
							Super User
						</router-link>
					</div>
					<div class="col-3">
						<router-link v-if="$can('view', 'admin')" to="/admin">
							Admin
						</router-link>
					</div>
					<div class="col-3">
						<router-link v-if="$can('view', 'teacher')" to="/teacher">
							Teacher
						</router-link>
					</div>
					<div class="col-3">
						<router-link v-if="$can('view', 'parent')" to="/parent">
							Parent
						</router-link>
					</div>
				</div>
				<div class="row my-3">
					<div class="col-3">
						<router-link v-if="$can('view', 'student')" to="/student">
							Student
						</router-link>
					</div>
					<div class="col-3">
						<router-link v-if="$can('view', 'vendor')" to="/vendor">
							Vendors
						</router-link>
					</div>
					<div class="col-3">
						<router-link v-if="$can('view', 'admin')" to="/products-services">
							Products / Services
						</router-link>
					</div>
					<div class="col-3">
				
					</div>
				</div>

				<div class="row">
					<div class="header">
						Registration Views
					</div>
				</div>
				<div class="row mb-3">
					<div class="col-3">
						<router-link to="/registration">
							Registration
						</router-link>
					</div>
					<div class="col-3">
						
					</div>
					<div class="col-3">
						
					</div>
					<div class="col-3">
						
					</div>
				</div>

				<div class="row">
					<div class="header">
						e-Commerce
					</div>
				</div>
				<div class="row">
					<div class="col-2">
						<router-link :to="{ name: 'Products'}">
							Product Listings
						</router-link>
					</div>
					<div class="col-2">
						<router-link :to="{ name: 'Product Details', params: { userId: 123 }}">
							Product Details
						</router-link>
					</div>
					<div class="col-2">
						<router-link :to="{ name: 'Shopping Cart'}">
							Shopping Cart
						</router-link>
					</div>
					<div class="col-2">
						<router-link :to="{ name: 'Checkout'}">
							Checkout
						</router-link>
					</div>
					<div class="col-2">
						<router-link :to="{ name: 'Transaction Result'}">
							Payment Completion
						</router-link>
					</div>
					<div class="col-2">
						
					</div>
				</div>
				<div class="row justify-end mt-10">
					<div class="col-4">
						<v-btn
							width="50%"
							color="primary"
							@click="testButton">
							Test
						</v-btn>
					</div>
				</div>

			</div>
			

			<div class="row">
				<div class="col-3">
					<v-btn
						color="primary"
						@click="testButton">
						Test Button
					</v-btn>
				</div>
			</div>
		</template>

		<template v-else>
			<v-carousel
				cycle
				:height="innerHeight"
				hide-delimiter-background
				show-arrows-on-hover
			>
				<v-carousel-item>
					<v-sheet
						class="backgroundImage1"
						height="100%"
					>
						<v-row
							class="fill-height"
							align="center"
							justify="center"
						>
							<div class="display-3">
								Log in to get started...
							</div>
						</v-row>
					</v-sheet>
				</v-carousel-item>

				<v-carousel-item>
					<v-sheet
						class="backgroundImage2"
						height="100%"
					>
						<v-row
							class="fill-height"
							align="center"
							justify="center"
						>
							<div class="display-3">
								Log in to get started...
							</div>
						</v-row>
					</v-sheet>
				</v-carousel-item>

				<v-carousel-item>
					<v-sheet
						class="backgroundImage3"
						height="100%"
					>
						<v-row
							class="fill-height"
							align="center"
							justify="center"
						>
							<div class="display-3">
								Log in to get started...
							</div>
						</v-row>
					</v-sheet>
				</v-carousel-item>

				<v-carousel-item>
					<v-sheet
						class="backgroundImage4"
						height="100%"
					>
						<v-row
							class="fill-height"
							align="center"
							justify="center"
						>
							<div class="display-3">
								Log in to get started...
							</div>
						</v-row>
					</v-sheet>
				</v-carousel-item>

			</v-carousel>
		</template>

	</div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
  },
  mixins: [

  ],
  data () {
    return {
      // Main Data

    }
  },
  methods: {
    testButton () {
			console.log('this.Auth.userLogin,', this.Auth.userLogin)
			console.log('this.Auth.userProfile', this.Auth.userProfile)
			console.log('this.GET_USER_PROFILE', this.GET_USER_PROFILE)
    }

  },
  computed: {
    ...mapState(["Auth"]),
    ...mapGetters(["GET_USER_PROFILE"]),
    innerHeight () {
      var height = window.innerHeight
      console.log('height', height)
      return height - 60
    }

  },
  mounted () {
    console.log('Home mounted')
    this.$emit('navHome', true)
  }
}
</script>

<style lang="scss" scoped>

</style>
