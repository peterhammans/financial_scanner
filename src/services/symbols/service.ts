import { listingMock } from 'src/mocks';

const getSymbols = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: listingMock
      });
    }, 1000);
  });

export {
  getSymbols
}