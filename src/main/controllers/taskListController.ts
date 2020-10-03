import { Request, Response } from 'express';
import Debug from 'debug';

const debug = Debug('app:controller:taskListController');


export function createTaskListPage(req: Request, res: Response): void {
  debug('createTaskList controller...');
  res.render('task-list', {
    tasks: {
      'myTasks': req.session.myTasks,
      'myAvailableTasks': req.session.myFilteredAvailableTasks,
    },
  });
}

