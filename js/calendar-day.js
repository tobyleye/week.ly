const CalendarDay = {
	template: `
		<div class="day" @click="setActiveDay(day.id)">
			<div class="day-banner">{{ day.abvTitle }}</div>
			<div class="day-details">
				<div class="day-number">{{ day.id }}</div>
				<div v-if="day.events.length">
					<calendar-event v-for="(event, index) in day.events"
						:key="index"
						:event="event"
						:day="day">
					</calendar-event>
				</div>
				<div v-else class="day-empty">
					<p>No event have been added on this day</p>
				</div>
			</div>
		</div>
	`, 
	props: ['day'],
	components: {
		'calendar-event': CalendarEvent,
	},
	methods: {
		setActiveDay(dayId) {
			store.setActiveDay(dayId);
		}
	}
}