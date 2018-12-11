
console.log('Loaded');

// USE AXIOS TO PING YOUR API TO GET THE LIST OF PROJECTS
axios.get('/api/projects')
    .then(res => {
        console.log(res.data)});

// CHANGE TO ADD SEARCH TO GIPHY

