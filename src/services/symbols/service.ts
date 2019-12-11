import { listingMock } from 'src/mocks';

const getSymbols = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: listingMock
      });
    }, 2000);
  });

export {
  getSymbols
}