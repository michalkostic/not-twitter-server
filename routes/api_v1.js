var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/messages', function(req, res, next) {
  res.json([
    {
      "userId": "123",
      "avatar": "imagers/person-circle.svg",
      "text": `You gotta smoke test your hypothesis to gain traction. Social currency problem territories, but
      pre launch, but core competencies. We need to dialog around your choice of work attire screw the
      pooch, for ultimate measure of success, best practices.`
    },
    {
      "userId": "123",
      "avatar": "imagers/person-circle.svg",
      "text": `Big picture hit the ground running. If you're not hurting you're not winning. Onward and upward,
      productize the deliverables and focus on the bottom line pig in a python circle back.`
    },
    {
      "userId": "123",
      "avatar": "imagers/person-circle.svg",
      "text": `Shotgun approach we're building the plane while we're flying it a set of certitudes based on
      deductions founded on false premise, but quantity, yet i called the it department about that
      ransomware because of the old antivirus, but he said that we were using avast 2021. Locked and
      loaded. We need to follow protocol workflow ecosystem.`
    },
  ]);
});

module.exports = router;
