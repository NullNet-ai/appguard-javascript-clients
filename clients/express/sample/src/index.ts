import express from 'express'
import {createAppGuardMiddleware} from '@nullnet/appguard-express'

const app = express()

const appGuardMiddleware = createAppGuardMiddleware()

// AC #1:
// Able to use as direct express module
// Only uncomment this if not using with AC #2 and AC #3
// app.use(appGuard)

// AC #2: 
// Able to use as middleware to specific route
// @ts-ignore
app.get('/some-route', appGuardMiddleware, async (req, res) => {
    res.json({message: 'Hello World'})
})

// @ts-ignore
app.get('/index' , appGuardMiddleware, async (req, res) => {
    res.json({message: 'Hello World'})
})

// AC #3:
// Able to uses a default route controller
// @ts-ignore
app.get('*' , appGuardMiddleware, async (req, res) => {
    res.json({message: 'Hello World'})
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})