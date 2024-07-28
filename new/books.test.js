const axios = require('axios');

test('Get number of posts', async () => {
	const respons = await axios.get('https://jsonplaceholder.typicode.com/posts');
	expect(respons.status).toBe(200);
	/* console.log(respons); */
});

test('Get post to be defined', async () => {
	const respons = await axios.get(
		'https://jsonplaceholder.typicode.com/posts/1'
	);
	expect(respons.data).toBeDefined();
});

test('Post something', async () => {
	const post1 = {
		title: 'foo',
		body: 'bar',
		userId: 1,
	};
	const respons = await axios.post(
		'https://jsonplaceholder.typicode.com/posts',
		post1
	);
	expect(respons.status).toBe(201);
	/* console.log(respons); */
});

test('GET /posts/1/comments - array length should be 5', async () => {
	const response = await axios.get(
		'https://jsonplaceholder.typicode.com/posts/1/comments'
	);
	expect(response.data.length).toBe(5);
});

test('GET /posts/1/comments - response should be an array', async () => {
	const response = await axios.get(
		'https://jsonplaceholder.typicode.com/posts/1/comments'
	);
	expect(Array.isArray(response.data)).toBe(true);
	/* console.log(response); */
});
