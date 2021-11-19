const express = require('express') // Nạp thư viện express -> Đi vào node modules tải về -> truyền vào biến
const app = express() // Trả về 1 đối tượng (1 website)
const port = 3000

// Route định nghĩa
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})