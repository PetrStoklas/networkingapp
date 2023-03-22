export async function asyncForEach(
  array: any[],
  callback: { (item: any, index: number): Promise<void>; (arg0: any, arg1: number, arg2: any): any }
) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}
