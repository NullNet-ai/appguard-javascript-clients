import express from 'express'
import {AppGuardConfig, createAppGuardMiddleware, FirewallPolicy} from '@nullnet/app-guard-express'

const app = express()

const appGuardConfig: AppGuardConfig = {
    host: 'localhost',
    port: 50051,
    defaultPolicy: FirewallPolicy.ALLOW,
    firewallTimeout: 1_000,
    connectionTimeout: 2_000
}

const appGuardMiddleware = createAppGuardMiddleware(appGuardConfig)

// AC #1:
// Able to use as direct express module
// Only uncomment this if not using with AC #2 and AC #3
// app.use(appGuard)

// AC #2: 
// Able to use as middleware to specific route
app.get('/some-route', appGuardMiddleware, async (req, res) => {
    res.json({message: 'Hello World'})
})

app.get('/index' , appGuardMiddleware, async (req, res) => {
    res.json({message: 'Hello World'})
})

// AC #3:
// Able to uses a default route controller
app.get('*' , appGuardMiddleware, async (req, res) => {
    res.json({message: 'Hello World'})
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})