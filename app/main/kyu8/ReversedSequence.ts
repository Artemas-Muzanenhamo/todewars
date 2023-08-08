export const reverseSeq = (n: number): number[] => {
    let numbers: number[] = [];
    for (let i = n; i > 0; i--) {
        numbers.push(i);
    }

    return numbers;
};