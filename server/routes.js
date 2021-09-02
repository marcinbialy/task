const Joi = require('joi');
const {sequelize, Task, Test} = require('./models');

function validateList(item){
    const schema = Joi.object({
        name: Joi.string().min(5).required(),
        isComplete: Joi.bool().required()
    });

    return schema.validate(item);
}

module.exports = (app) => {
    app.get('/api/tests', async(req, res) => {
        
        const testlist = await Test.findAll();
        res.send(testlist);
    }),

    app.get('/api/list', async(req, res) => {
        
        const tasklist = await Task.findAll();
        res.send(tasklist);
    }),

    app.get('/api/list/:id', async(req, res) => {
        const idd = await Task.findOne({where: {id: parseInt(req.params.id)}});
        console.log(idd)
        if (!idd) return res.status(404).send('Not found');

        res.send(idd);
    }),

    app.get('/api/list/:month/:year', (req, res) => {
        // branie wzystkich parmetrow
        res.send(req.params) 
    }),

    app.get('/api/list/', (req, res) => {
        // mozna brać po ? rzeczy przez req.query
        res.send(req.query)
    }),

    app.post('/api/list/create', async(req,res) => {
        try {
            const { error } = validateList(req.body);
            if(error){
                res.status(400).send(error.details[0].message);
                return;
            }

            const task = await Task.create(req.body);
            return res.json(task);

        }catch(err){
            res.status(500).send(`Internal server error ${err}`);
            return;
        }       
    }),

    app.put('/api/list/:id', async(req, res) => {
        try {
            const idd = await Task.findOne({where: {id: parseInt(req.params.id)}});

            if (!idd) return res.status(404).send('Not found');

            const {error} = validateList(req.body);
            if(error){
                res.status(400).send(error.details[0].message);
                return;
            }
            
            idd.name = req.body.name;
            idd.isComplete = req.body.isComplete;

            await idd.save();

            return res.json(idd);
        }catch{
            return res.status(500).send('Internal server error');
        }       
    })

    app.delete('/api/list/:id', async(req, res) => {
        try {
            const idd = await Task.findOne({where: {id: parseInt(req.params.id)}});

            if (!idd) return res.status(404).send('Not found');

            await idd.destroy();

            return res.json({message: 'User deleted'});
        }catch{
            return res.status(500).send('Internal server error');
        }       
    })
};
