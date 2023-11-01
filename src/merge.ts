export function merge(
  collection_1: number[],
  collection_2: number[]
): number[] {
  let result: number[] = [];
  let i = 0,
    j = 0;

  while (i < collection_1.length && j < collection_2.length) {
    if (collection_1[i] < collection_2[j]) {
      result.push(collection_1[i]);
      i++;
    } else {
      result.push(collection_2[j]);
      j++;
    }
  }

  // add any remaining elements from collection_1
  while (i < collection_1.length) {
    result.push(collection_1[i]);
    i++;
  }

  // add any remaining elements from collection_2
  while (j < collection_2.length) {
    result.push(collection_2[j]);
    j++;
  }

  return result;
}

merge([4, 5, 6, 7], [8, 9, 10, 11]);
