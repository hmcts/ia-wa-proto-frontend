import { Task } from '../models/task';

const task1 = new Task('1549 6338 2756 6773', 'Lala Joji', 'Human', 'Taylor House', 'Review respondent evidence', 'Today', 3, 'today');
const task2 = new Task('1549 2353 5684 8902', 'Rachel Smith', 'Human', 'Birmingham', 'Review respondent evidence', 'Today', 3, 'today');
const task3 = new Task('1549 9061 9513 0004', 'Nonasky Pecki', 'EEA', 'Taylor House', 'Create case summary', '04 Dec', 2, 'future');
const task4 = new Task('1549 9083 5480 6960', 'Wauanda Jik', 'Human Rights', 'Taylor House', 'Review appellant case', '+2 days', 4, 'past');

const task5 = new Task('1549 4765 3206 5586', 'Kili Muso', 'Protection', 'Taylor House', 'Review respondent evidence', 'Today', 3, 'today');
const task6 = new Task('1549 5366 1108 0150', 'Mankay Lit', 'Revocation', 'Taylor House', 'Review appellant case', '14 Dec', 1, 'future');
const task7 = new Task('1549 2345 7854 9786', 'Wina Palic', 'Human Rights', 'Taylor House', 'Review respondent evidence', '+4 days', 5, 'past');


export const tasks = [
  task1,
  task2,
  task3,
  task4,
  task5,
  task6,
  task7,
];

