<template>
	<div>
		<template>
			<!-- Left Drawer -->
			<div v-if="onDrawer" class="row mt-12">

			</div>
			<div class="row">
				<div class="col-12 my-7">
					<div v-if="!onDrawer" class="headline-3 text-center text-white">
						{{navRoute[0].toUpperCase() + navRoute.substring(1)}}
					</div>
					<div v-if="!onDrawer" class="headline-5 text-center text-white m-0">
						Linda Johnson
					</div>
				</div>
			</div>
	

			<v-divider></v-divider>

			<v-list dense>
				<router-link 
					v-for="item in items"
					:key="item.id"
					:to="item.path"
					active-class>

						<v-list-item
							:class="{activeClass: navRoute == item.name}"
							@click="selectMenuItem"
						>
							<v-list-item-icon color="primary">
								<v-icon>{{ item.icon }}</v-icon>
							</v-list-item-icon>

							<v-list-item-content>
								<v-list-item-title>{{ item.title }}</v-list-item-title>
							</v-list-item-content>
						</v-list-item>

				</router-link>
				
			</v-list>
		</template>


	</div>
</template>

<script>
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
import moment from 'moment';

//Import NavLinks
import { main } from "@/router/app-navigation"
import { admin } from "@/router/app-navigation"
import { teacher } from "@/router/app-navigation"
console.log("teacher", teacher)
import { parent } from "@/router/app-navigation"


export default {
  name: 'leftDrawerComponent',
  components: {
	},
	mixins: [

	],
	props: {
		onDrawer: {
			type: Boolean,
			required: true
		}
	},
	data() {
		return {
			//Main Data
			openLeftDrawer: false,
			navRoute: null,
			//vuetify stuff
			items: admin,

			item: 1
		}
	},
	methods: {
		testButton() {

		},
		selectMenuItem(evt) {
			console.log("activeClass evt", evt)
		}

	},
	computed: {
		...mapState([]),
		...mapGetters([]),
		activeClass(evt) {
		console.log("activeClass evt", evt)
		}

	},
	watch: {

	},
	mounted() {
		this.navRoute = this.$route.name
		switch(this.navRoute) {
			case "admin":
				this.items = admin
				break
			case "teacher":
				this.items = teacher
				break
			case "parent":
				this.items = parent
				break
			case "main":
				this.items = main
				break
		}
		console.log("this.$route.name", this.$route.name)
		console.log("teacher", teacher)

	}
}
</script>
<style scoped lang="scss">
aside {
	z-index: 10000;
}


</style>
