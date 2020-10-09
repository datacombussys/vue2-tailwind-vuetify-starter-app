<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
			<template>
				<v-img
					:src="require('./assets/static/granite_mountain_logo.svg')"
					class="my-3"
					contain
					height="60"
				/>
			</template>
			

        
        <div class="headline-4">
					Granite Mountain Charter School
				</div>
  

      <v-spacer></v-spacer>

			<v-menu
				v-model="showMenu"
				absolute
				offset-y
				style="max-width: 600px"
			>
				<template v-slot:activator="{ on, attrs }">
					<v-card
						class="portrait"
						img="https://randomuser.me/api/portraits/women/81.jpg"
						height="50"
						width="50"
						v-bind="attrs"
						v-on="on"
					></v-card>
				</template>

				<v-list>
					<v-list-item
						v-for="(item, index) in items"
						:key="index"
						@click=""
					>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>

    </v-app-bar>

		<!--No Drawer Content-->

    <v-main>
			<router-view
				@navHome="navHome">
			</router-view>

      <router-view name="main">
				<slot name="leftDrawer"/>
			</router-view>

			<template v-if="showDrawer" slot:leftDrawer>
				<v-navigation-drawer
					v-model="drawer"
					:mini-variant.sync="mini"
					permanent
					app
					expand-on-hover
					dark
				>
					<router-view :onDrawer="mini" name="left"></router-view>
				</v-navigation-drawer>
			</template>
		
		
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex"
import { mapState } from "vuex"

export default {
  name: 'App',

  components: {

  },

  data: () => ({
		// Main Data
		currentRoute: null,
		//Drawer
		mini: true,
		drawer: true, 
		showMenu: false,
		items: [
			{ title: 'Click Me' },
			{ title: 'Click Me' },
			{ title: 'Click Me' },
			{ title: 'Click Me 2' },
		],
	}),
	methods: {
		testButton() {

		},
		navHome(evt) {
			console.log("navHome", evt)
			this.currentRoute = "Home"
		}

	},
	computed: {
		...mapState([]),
		...mapGetters([]),
		showDrawer() {
			switch(this.currentRoute) {
				case "Home":
					return false
					break
					case "Shopping Cart":
					return false
					break
			}
			return true
		}


	},
	mounted() {
		this.currentRoute = this.$route.name
		console.log('this.$route.name',this.$route.name)
	}
}
</script>
