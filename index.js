const express = require("express")
const welcomeRouter = require("./welcome/welcome-router")
const recipesRouter = require("./routers/recipes-router")

const server = express()
const port = process.env.PORT || 3000

server.use(express.json())
server.use(welcomeRouter)
server.use(recipesRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})
