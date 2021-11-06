export default {
  namespaced: true,
  state: {
    meetings: [],
    meeting: {
      id: null,
      title: '',
      description: '',
      date: '',
      time: '',
      location: '',
      room: '',
      attendees: [
        {
          id: null,
          name: '',
          email: '',
          phone: '',
          company: '',
          position: '',
          status: '',
          notes: ''
        }
      ],
      agenda: [],
      status: '',
      created_at: '',
      updated_at: ''
    },
    todaysMeetings: [],
    tomorrowsMeetings: []
  },
  mutations: {},
  actions: {}
}
