const store = {
	state: {
		seedData: JSON.parse(localStorage.getItem('seedData')) || dataTemplate,
	}, 
	getActiveDay() {
		return this.state.seedData.find(day => day.active) || {}
	},
	setActiveDay(dayId) {
		const seedData = this.state.seedData.map(dayObj => {
			dayObj.id === dayId ? dayObj.active = true : dayObj.active = false
		});
	},
	submitEvent(eventDetails) {
		const activeDay = this.getActiveDay();
		activeDay.events.push({ details: eventDetails, edit: false });
		this.persist()
	},
	getEventObj(dayId, eventDetails) {
		const dayObj = this.state.seedData.find(day => day.id === dayId)
		const eventObj = dayObj.events.find(event => event.details === eventDetails)
		return eventObj;
	},
	editEvent(dayId, eventDetails) {
		this.resetEditOfAllEvents()
		const eventObj = this.getEventObj(dayId, eventDetails)
		eventObj.edit = true;
	},
	resetEditOfAllEvents() {
		this.state.seedData.map( dayObj => {
			dayObj.events.map( event => {
				event.edit = false
			})
		})
	},
	updateEvent(dayId, originalEventDetails, newEventDetails) {
		const eventObj = this.getEventObj(dayId, originalEventDetails)
		eventObj.details = newEventDetails;
		eventObj.edit = false;
		this.persist()

	},
	deleteEvent(dayId, eventDetails) {
		const dayObj = this.state.seedData.find(dayObj => dayObj.id === dayId)
		dayObj.events = dayObj.events.filter(event => event.details !== eventDetails)
		this.persist()
	},
	persist() {
		localStorage.setItem('seedData', JSON.stringify(this.state.seedData))
	}
}