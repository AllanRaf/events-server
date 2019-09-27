//events-server/event router.js file
const { Router } = require('express')
const Event = require('./model')

const router = new Router()


//get all events
router.get('/event', (request, response, next) => {

    Event.findAll()
    .then(events => response.send(events))
    .catch(err => next(err))

})

//get one event
router.get('/event/:id', (request, response, next) => {

    Event.findByPk(request.params.id)
    .then(event => response.send(event))
    .catch(err => next(err))
})

//create an event
router.post('/event', (request, response, next) => {

    Event.create(request.body)
    .then(event => response.send(event))
    .catch(err => next(err))

})

//update one event
router.put('/event/:id', (request, response, next) => {

    Event.findByPk(request.params.id)
    .then(event => event.update(request.body))
    .then(event => response.send(event))
    .catch(next)
})

//delete one event
router.delete('/event/:id', (request, response, next) => {

    Event.destroy({
        where: {
            id: request.params.id
        }
    })
    .then(event => response.status(201).send({event}))
    .catch(err => next(err))

})

module.exports = router