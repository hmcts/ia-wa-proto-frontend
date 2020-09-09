import * as express from 'express';
import Debug from 'debug';
import { createMyCaseWorkPage, claimTask } from '../controllers/myCaseWork';

const debug = Debug('app:route:myCaseWork');

const router = express.Router();

router.get('/my-case-work', (req, res) => {
  debug('myCaseWork router...');
  createMyCaseWorkPage(req, res);
});

router.get('/claim-task', (req, res) => {
  debug(`claim-task router with caseRef=${req.query.caseRef}...`);
  claimTask(req, res);
});


module.exports = router;
