<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >

			<v-img
				:src="require('./assets/static/granite_mountain_logo.svg')"
				class="my-3"
				contain
				height="60"
			/>

			<v-spacer></v-spacer>
        
        <p class="headline">
					Granite Mountain Charter School
				</p>
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

    <v-main>
      <router-view name="main"></router-view>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {

  },

  data: () => ({
		// Main Data
		mini: true,
		drawer: true, 
		showMenu: false,
		items: [
			{ title: 'Click Me' },
			{ title: 'Click Me' },
			{ title: 'Click Me' },
			{ title: 'Click Me 2' },
		],
  })
}
</script>
