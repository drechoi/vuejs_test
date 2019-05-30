export default {
  state: {
    wishItems: [{
      id: 1,
      title: 'Wish Item A',
      project: 'Project A',
      description: 'Item A in store',
      done: false,
      status: 'New',
    },
    {
      id: 2,
      title: 'Wish Item B',
      project: 'Project B',
      description: 'I want item B',
      done: true,
      status: 'New',
    }]
  },
  actions: {
    test() {
    }
  },
  mutations: {
  },
  getters: {
  }
};
