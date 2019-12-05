const getFileName = path => {
  const array = path.split('/');
  return array[array.length - 1];
};

export const sortCategoryPaths = arrayOfStories =>
  arrayOfStories.sort((pathA, pathB) => {
    const fileA = getFileName(pathA);
    const fileB = getFileName(pathB);

    if (fileA < fileB) {
      return -1;
    }

    if (fileA > fileB) {
      return 1;
    }

    return 0;
  });
