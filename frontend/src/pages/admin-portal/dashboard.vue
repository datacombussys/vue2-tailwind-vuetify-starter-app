<template>
	<div class="flex justify-center">
		<div class="container">
			<div class="headline-3">Admin Dashboard</div>
			<!-- Main Container Row -->
			<div class="row">
				<!-- Main Content Left Area -->
				<div class="col-8">
					<template>
						<div class="row mt-4 justify-center">
							<v-card
								class="p-4 mx-6 my-4"
								max-width="344"
								elevation="5"
							>
								<div class="row mt-2">
									<div class="col-12 flex justify-center">
										<div class="dashboard-number">
											3,250
										</div>
									</div>
								</div>
								<div class="row mt-4">
									<div class="col-12 text-center">
										<div class="headline-4">
											Students
										</div>
									</div>
								</div>
							</v-card>

							<v-card
								class="p-4 mx-6 my-4"
								max-width="344"
								elevation="5"
							>
								<div class="row mt-2">
									<div class="col-12 flex justify-center">
										<div class="dashboard-number">
											22
										</div>
									</div>
								</div>
								<div class="row mt-4">
									<div class="col-12 text-center">
										<div class="headline-4">
											Teachers
										</div>
									</div>
								</div>
							</v-card>

							<v-card
								class="p-4 mx-6 my-4"
								max-width="344"
								elevation="5"
							>
								<div class="row mt-2">
									<div class="col-12 flex justify-center">
										<div class="dashboard-number">
											3,250
										</div>
									</div>
								</div>
								<div class="row mt-4">
									<div class="col-12 text-center">
										<div class="headline-4">
											Parents
										</div>
									</div>
								</div>
							</v-card>

							<v-card
								class="p-4 mx-6 my-4"
								max-width="344"
								elevation="5"
							>
								<div class="row mt-2">
									<div class="col-12 flex justify-center">
										<div class="dashboard-number">
											425
										</div>
									</div>
								</div>
								<div class="row mt-4">
									<div class="col-12 text-center">
										<div class="headline-4">
											Vendors
										</div>
									</div>
								</div>
							</v-card>

							<v-card
								class="p-4 mx-6 my-4"
								max-width="344"
								elevation="5"
							>
								<div class="row mt-2">
									<div class="col-12 flex justify-center">
										<div class="dashboard-number">
											10,242
										</div>
									</div>
								</div>
								<div class="row mt-4">
									<div class="col-12 text-center">
										<div class="headline-4">
											Products / Services
										</div>
									</div>
								</div>
							</v-card>
						</div>
					</template>
					<template>
						<div class="row">
							<div class="col-12">
								<v-card>
									<v-card-title>
										History
									</v-card-title>
									<v-tabs v-model="vTab">
										<v-tabs-slider></v-tabs-slider>

										<v-tab>Sales Orders</v-tab>
										<v-tab>Purchase Orders</v-tab>
										<v-tab>Payments</v-tab>
										<v-tab-item>
											Content for 1 tab
										</v-tab-item>
										<v-tab-item>
											Content for 2 tab
										</v-tab-item>
										<v-tab-item>
											Content for 3 tab
										</v-tab-item>
									</v-tabs>
								</v-card>
								
							</div>
						</div>
					</template>
				</div>
				<!-- Sidebar Right -->
				<div class="col-4">
					<v-card
						class="p-4 mx-6 my-4"
						max-width="450"
						min-width="300"
						elevation="5"
					>
					<div class="headline-5">
						Messages
					</div>
						<div class="row mt-2">
							<div class="col-12 flex justify-center">
								<v-list three-line>
									<template v-for="(item, index) in items">
										<v-subheader
											v-if="item.header"
											:key="item.header"
											v-text="item.header"
										></v-subheader>

										<v-divider
											v-else-if="item.divider"
											:key="index"
											:inset="item.inset"
										></v-divider>

										<v-list-item
											v-else
											:key="item.title"
											@click=""
										>
											<v-list-item-avatar>
												<v-img :src="item.avatar"></v-img>
											</v-list-item-avatar>

											<v-list-item-content>
												<v-list-item-title v-html="item.title"></v-list-item-title>
												<v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
											</v-list-item-content>
										</v-list-item>
									</template>
								</v-list>
							</div>
						</div>
					</v-card>
				</div>
				
			</div>
			<!-- END Main Container Row -->
			<!--Bottomr Row -->
			

			
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
import moment from 'moment';


export default {
  name: 'adminDashboard',
  components: {
	},
	mixins: [

	],
	props: {

	},
	data() {
		return {
			//Main Data
			vTab: null,
			items: [
        { header: 'Today' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        },
      ]
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
