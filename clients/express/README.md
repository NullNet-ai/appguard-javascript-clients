# appguard-express

[AppGuard](https://github.com/NullNet-ai/appguard-server) client for [Express](https://expressjs.com).

### Installation

Add the following to your `package.json`:

```json
"dependencies": {
    "@nullnet/appguard-express": "^0.1.0"
}
```

### Usage

```typescript
import express from 'express'
import {createAppGuardMiddleware} from '@nullnet/appguard-express'

const app = express()

const appGuardMiddleware = createAppGuardMiddleware()

app.get('/some-route', appGuardMiddleware, async (req, res) => {
    res.json({message: 'Hello World'})
})

app.get('*' , appGuardMiddleware, async (req, res) => {
    res.json({message: 'Hello World'})
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
```

A complete working example can be found [here](https://github.com/NullNet-ai/appguard-javascript-clients/blob/main/clients/express/sample/src/index.ts).

### Environment variables

The following environment variables must be set for the client to work:
- `CONTROL_SERVICE_ADDR`: AppGuard server's IP address
- `CONTROL_SERVICE_PORT`: AppGuard server's port
- `INSTALLATION_CODE`: installation code for this client
