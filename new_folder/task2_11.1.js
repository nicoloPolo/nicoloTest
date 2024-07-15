function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(todo => {
            return todo;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            throw error;
        });
}


    function fetchUser() {
        return fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(user => {
                return user;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                throw error;
            });
    }



    Promise.all([fetchTodo(), fetchUser()])
    .then(([todo, user]) => {
        console.log('Promise.all results:');
        console.log('Todo:', todo);
        console.log('User:', user);
    })
    .catch(error => {
        console.error('Promise.all error:', error);
    });

Promise.race([fetchTodo(), fetchUser()])
    .then(result => {
        console.log('Promise.race result:', result);
    })
    .catch(error => {
        console.error('Promise.race error:', error);
    });