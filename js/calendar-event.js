const CalendarEvent = {
	template: `
		<div class="day-event" :style="getEventBackgroundColor">
			<div v-if="!event.edit">
				<span class="text-center details">{{ event.details }}</span>
				<div class="text-center icons">
					<i class="fa fa-edit" @click="editEvent(day.id, event.details)"></i>
					<i class="fa fa-trash" @click="deleteEvent(day.id, event.details)"></i>
				</div>
			</div>
			<div v-if="event.edit" class="edit">
				<form @submit.prevent="updateEvent(day.id, event.details, newEventDetails)">
					<input type="text" :placeholder="event.details" v-model="newEventDetails"/>
					<div class="text-center">
						<button class="no-button" role="submit"><i class="fa fa-check"></i></button>
					</div>
				</form>
			</div>
		</div>
	`, 
	props: ['event', 'day'],
	data() {
		return {
			newEventDetails: '',
		}
	},
	computed: {
		getEventBackgroundColor() {
			const colors = ['#ff9999', '#85d6ff', '#99ff99', '#ffeb3b', '#cddc39', '#fcc26b'];
			let randomColor = colors[Math.floor(Math.random() * colors.length)];
			return `background-color: ${randomColor}`
		}
	}, 
	methods: {
		editEvent(dayId, eventDetails) {
			store.editEvent(dayId, eventDetails)
		},
		updateEvent(dayId, originalEventDetails, updatedEventDetails) {
			const updatedEventDetails = updatedEventDetails || originalEventDetails
			store.updateEvent(dayId, originalEventDetails, updatedEventDetails)
			this.newEventDetails = ''
		},
		deleteEvent(dayId, eventDetails) {
			store.deleteEvent(dayId, eventDetails)
		}
	}
}