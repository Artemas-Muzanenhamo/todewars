export function findUniq(arr: number[]): number {
    // let map = new Map<number, number>;
    //
    // arr.forEach(element => {
    //     if (map.has(element)) {
    //         // get map key + value
    //         let existingValue = map.get(element);
    //         if (existingValue != null) {
    //             // increment count here
    //             let newVar = existingValue + 1;
    //             map.set(element, newVar)
    //             // add count here
    //         } else {
    //             return 0;
    //         }
    //     } else {
    //         map.set(element, 1)
    //     }
    // });
    //
    // let result: number = 0;
    // map.forEach((value, key) => {
    //     if (value == 1) {
    //         result = key;
    //     }
    // });
    //
    // return result;

    arr = arr.sort()
    return arr[0] == arr[1] ? arr[arr.length - 1] : arr[0]
}
