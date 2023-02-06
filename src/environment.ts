export const environment = {
  apiOptions: {
    baseUrl: 'https://sudoku-generator1.p.rapidapi.com', // https://rapidapi.com/gregor-i/api/sudoku-generator1
    path: '/sudoku',
    retryCalls: '3',
    retryDelay: '5000',
    endpoints: {
      generate: '/generate',
    },
  },
};
