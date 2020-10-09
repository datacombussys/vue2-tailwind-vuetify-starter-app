<template>
	<div class="flex justify-center">
		<div class="container mt-4">
				<!-- Main Container Row -->
				<div class="row">
					<!-- Main Content Left Area -->
					<div class="col-6 px-5">
						<template>
							<v-card>
								<v-card-title>
									Add New Teacher
									<v-spacer></v-spacer>
									<v-btn class="mx-2" fab dark color="teal">
										<v-icon dark>mdi-upload</v-icon>
									</v-btn>
								</v-card-title>
								<!-- Form -->
								<template>
									<div class="p-5">
										<v-form
											ref="form"
											v-model="valid"
											lazy-validation
										>
											<v-text-field
												v-model="name"
												:counter="10"
												:rules="nameRules"
												label="Name"
												required
											></v-text-field>

											<v-text-field
												v-model="email"
												:rules="emailRules"
												label="E-mail"
												required
											></v-text-field>

											<v-select
												v-model="select"
												:items="items"
												:rules="[v => !!v || 'Item is required']"
												label="Item"
												required
											></v-select>

											<v-checkbox
												v-model="checkbox"
												:rules="[v => !!v || 'You must agree to continue!']"
												label="Do you agree?"
												required
											></v-checkbox>

											<v-btn
												:disabled="!valid"
												color="success"
												class="mr-4"
												@click="validate"
											>
												Validate
											</v-btn>

											<v-btn
												color="error"
												class="mr-4"
												@click="reset"
											>
												Reset Form
											</v-btn>

											<v-btn
												color="warning"
												@click="resetValidation"
											>
												Reset Validation
											</v-btn>
										</v-form>
									</div>
									
								</template>
								<!-- END Form -->
							</v-card>
						</template>
					</div>
					<!-- END Main Content Left Area -->
					<!-- Right Panel -->
					<div class="col-6 px-5">
						<template>
							<v-card>
								<v-card-title>
									Nutrition
									<v-spacer></v-spacer>
									<v-text-field
										color="teal"
										dark
										v-model="search"
										append-icon="mdi-magnify"
										label="Search"
										single-line
										:single-select="singleSelect"
										hide-details
									></v-text-field>
								</v-card-title>
								<v-data-table
									v-model="selected"
									:headers="headers"
									:items="desserts"
									:search="search"
									item-key="name"
									show-select
									class="elevation-1"
								></v-data-table>
							</v-card>
						</template>
					</div>
					<!-- END Right Panel -->
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
  name: 'adminManageTeachers',
  components: {
	},
	mixins: [

	],
	props: {

	},
	data() {
		return {
			//Main Data

			//Vuetify DataTable
			singleSelect: false,
			selected: [],
			search: '',
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
				],
				
				//Form Data
				valid: true,
				name: '',
				nameRules: [
					v => !!v || 'Name is required',
					v => (v.length <= 10) || 'Name must be less than 10 characters',
				],
				email: '',
				emailRules: [
					v => !!v || 'E-mail is required',
					v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
				],
				select: null,
				items: [
					'Item 1',
					'Item 2',
					'Item 3',
					'Item 4',
				],
				checkbox: false,

		}
	},
	methods: {
		testButton() {

		},
		validate () {
			this.$refs.form.validate()
		},
		reset () {
			this.$refs.form.reset()
		},
		resetValidation () {
			this.$refs.form.resetValidation()
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

</style>
