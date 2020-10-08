<template>
	<div>
		<template>
			<!-- Left Drawer -->
			<div v-if="onDrawer" class="row mt-8">

			</div>
			<div class="row">
				<div class="col-12">
					<div v-if="!onDrawer" class="headline text-center text-white">
						Admin
					</div>
				</div>
			</div>
	

			<v-divider></v-divider>

			<v-list dense>
				<v-list-item
				
					v-for="item in items"
					:key="item.title"
					@click="selectMenuItem"
				>
					<v-list-item-icon>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</template>


	</div>
</template>

<script>
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
import moment from 'moment';



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

			//vuetify stuff
			items: [
				{ title: 'Dashboard', icon: 'mdi-gauge' },
				{ title: 'Admin', icon: 'mdi-account-supervisor-circle' },
				{ title: 'Vendors', icon: 'mdi-cube-send' },
				{ title: 'Teachers', icon: 'mdi-teach' },
				{ title: 'Parents', icon: 'mdi-account-child-circle' },
				{ title: 'Settings', icon: 'mdi-cogs' }
			],
		}
	},
	methods: {
		testButton() {

		},
		selectMenuItem(evt) {
			console.log("selectMenuItem evt", evt)
			if(evt.target.textContent === "Trading Screen") {
				this.$router.push("/home")
				
			} else if(evt.target.textContent === "Settings") {
				this.$refs.settingsComponentRef.setupSheetOpened = true
				this.openLeftDrawer = false
			} else if(evt.target.textContent === "Strategies") {
				
			} else if(evt.target.textContent === "Trading History") {
				
			}else if(evt.target.textContent === "Upload Data") {
				this.$refs.uploadComponentRef.openUploadSheet = true
				this.openLeftDrawer = false
				
			}
		}

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
aside {
	z-index: 10000;
}


</style>
