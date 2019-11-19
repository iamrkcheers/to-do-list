var initialState = {
	buckets: [
		{	
			name: 'Test Bucket',
			bucketId: 0,
			visibilityFilter: "SHOW_ALL",
			todos: [
				{
					todoId: 0,
					text: "This is a test",
					completed: true,
					isEditable: false,
				},
				{
					todoId: 1,
					text: "Random entry",
					completed: true,
					isEditable: false,
				},
				{
					todoId: 2,
					text: 'Another random entry',
					completed: false,
					isEditable: false,
				}
			]
		},
		{	
			name: 'Default',
			bucketId: 1,
			visibilityFilter: "SHOW_ALL",
			todos: [
				{
					todoId: 0,
					text: "Alpha Beta Gamma",
					completed: true,
					isEditable: false,
				},
				{
					todoId: 1,
					text: "Lorem Ipsum",
					completed: true,
					isEditable: false,
				},
				{
					todoId: 2,
					text: 'Something Something',
					completed: false,
					isEditable: false,
				}
			]
		},
	]
};

export default initialState;