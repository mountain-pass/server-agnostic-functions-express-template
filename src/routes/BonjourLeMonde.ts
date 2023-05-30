import { AgnosticRouter } from '@mountainpass/server-agnostic-functions-core'

const HelloWorldRouter = () => {
    const router = new AgnosticRouter()

    router.get('/bonjour/le/monde', (req, res) => {
        res.json({ message: 'bonjour' })
    })

    return router
}
export default HelloWorldRouter
