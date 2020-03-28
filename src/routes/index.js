const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "Name": "Diego",
        "Website": "diego.com"
    };
    res.json(data);
}); 

module.exports = router;