const { addMessage, getAllMessage } = require("../controllers/messagesControllesr");

const router = require("express").Router();

router.post("/addmsg/", addMessage);
router.post("/getmsg/", getAllMessage); 

module.exports = router;