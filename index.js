const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const response = {
        email: 'plance991@gmail.com',
        current_datetime: new Date().toISOString(),
        github_url: 'https://github.com/tempahh/hngint'
    };

    res.json(response);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});