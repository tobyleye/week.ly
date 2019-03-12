CalendarEntry = {
	template: `
		<div id="calender-entry" class="container">
			<div class="calendar-entry-note">
				<form @submit.prevent="submitEvent(inputEntry)">
					<input type="text" placeholder="New Event" v-model="inputEntry" required autofocus/>
					<p style="color: red; font-size: 13px; margin-bottom: 10px;" v-if="error">You must type something</p>
					<p class="calendar-entry-day">Day of event: <strong :style="{fontStyle: 'italic'}">{{ titleOfActiveDay || 'No day selected yet' }}</strong></p>
					<button class="button is-small is-outline">Submit</button>
				</form>
			</div>
		</div>
	`, 
	computed: {
		titleOfActiveDay() {
			return store.getActiveDay().fullTitle;
		}
	},
	data() {
		return {
			inputEntry: '',
			error: false
		}
	},
	methods: {
		submitEvent(eventDetails) { 
			if (eventDetails === '') return this.error = true;

			store.submitEvent(eventDetails)
			this.inputEntry = '';
			this.error = false;
		}
	}
}