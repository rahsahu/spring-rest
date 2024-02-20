import * as jsonpath from 'jsonpath-plus';

const jsonData = {
  store: {
    book: [
      { title: 'Book 1', author: 'Author 1' },
      { title: 'Book 2', author: 'Author 2' },
      // ...
    ],
  },
};

// Use JSONPath to query data
const result = jsonpath({ json: jsonData, path: '$.store.book[*].title' });

console.log('Result:', result);

