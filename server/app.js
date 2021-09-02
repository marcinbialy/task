const express = require('express');
const config = require('./config/config');
const {sequelize} = require('./models');
const app = express();
app.use(express.json());

require('./routes')(app)

sequelize.sync().then(app.listen(config.port, () => console.log(`server started on port ${config.port}`)));
