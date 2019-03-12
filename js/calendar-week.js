const CalendarWeek = {
	template: `
		<div id="calender-week" class="container">
			<calendar-day v-for="day in sharedData.seedData" 
				:key="day.id"
				:day="day">
			</calendar-day>
		</div>
	`, 

	components: {
		'calendar-day': CalendarDay
	}, 

	data() {
		return {
			sharedData: store.state,
		}
	}
}