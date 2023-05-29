import { AgnosticRouter } from '@mountainpass/server-agnostic-functions-core'

const HelloWorldRouter = () => {
    const router = new AgnosticRouter()

    router.get('/users/{userId}', (req, res) => {
        res.json({ message: 'success', user: req.params.userId })
    })
    router.get('/services/getUsersByQueryId', (req, res) => {
        res.json({ message: 'success', user: req.query.userId })
    })

    return router
}
export default HelloWorldRouter
