const express = require("express")
const path = require("path")
const port = 1488

const app = express()

app.use("/static", express.static(path.resolve(__dirname, 'src', 'static')))

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "src", "index.html"))
} )

app.listen(port, () => console.log(`server running on port ${port}`))