export function between(a: number, b: number): number[] {
    let number: number[] = [];
    for (let i: number = a; i <= b; i++) {
        number.push(i);
    }

    return number;
}