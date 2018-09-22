// @flow

// type StatusType = 'pending' | 'paid';

// type BillType = {
//   id: string,
//   dueDate: string,
//   amountInCents: number,
//   status: StatusType,
// };

// type BillsType = {
//   [id: string]: BillType,
// };

const BillsType = {
  a: {
    id: 'a',
    dueDate: '2018-04-29',
    amountInCents: 12300,
    status: 'pending',
  },
  b: {
    id: 'b',
    dueDate: '2017-08-19',
    amountInCents: 1153,
    status: 'paid',
  },
  c: {
    id: 'c',
    dueDate: '2018-10-11',
    amountInCents: 101363,
    status: 'pending',
  },
  d: {
    id: 'd',
    dueDate: '2018-11-30',
    amountInCents: 789127,
    status: 'pending',
  },
  e: {
    id: 'e',
    dueDate: '2018-07-22',
    amountInCents: 8129,
    status: 'paid',
  },
  f: {
    id: 'f',
    dueDate: '2018-06-06',
    amountInCents: 93020,
    status: 'pending',
  },
  g: {
    id: 'g',
    dueDate: '2018-02-11',
    amountInCents: 129308,
    status: 'paid',
  },
  h: {
    id: 'h',
    dueDate: '2018-01-15',
    amountInCents: 39333,
    status: 'paid',
  },
  i: {
    id: 'i',
    dueDate: '2018-03-13',
    amountInCents: 525222,
    status: 'pending',
  },
}

export default BillsType;
