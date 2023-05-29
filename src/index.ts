import { ExpressWrapper } from '@mountainpass/server-agnostic-functions-express'
import express from 'express'
import HelloWorldRouter from './routes/HelloWorld'

const app = express()

app.use(new ExpressWrapper().wrap(HelloWorldRouter()))

app.listen(3000, () => console.log('listening on port 3000'))
