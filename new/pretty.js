async function fetchUser() {
	try {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/users/1'
		);
		if (!response.ok) {
			throw new Error('Network response was not ok ' + response.statusText);
		}
		const user = await response.json();
		return user;
	} catch (error) {
		console.error('There was a problem with the fetch operation:', error);
		throw error;
	}
}
