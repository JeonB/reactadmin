//destructuring은 객체나 배열의 값을 특정 변수에 할당하기 위하여
//분해하는 문법.
const person = {
  name: 'Lee',
  address: {
    zipCode: '03868',
    city: 'Seoul',
    country: { ko: 'northKorea' },
  },
};

const {
  address: {
    country: { ko },
  },
} = person;
console.log(ko);

const todos = [
  { id: 1, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: false },
  { id: 3, content: 'JS', completed: false },
];

// todos 배열의 요소인 객체로부터 completed 프로퍼티만을 추출한다.
const completedTodos = todos.filter(({ completed }) => completed);
console.log(completedTodos); // [ { id: 1, content: 'HTML', completed: true } ]
