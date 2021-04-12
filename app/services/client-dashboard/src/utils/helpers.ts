
export const countBy = (array: any) => {
    let counts: any = [{}];
    array.map((curr: any) => {
        counts[curr] ? counts[curr]++ : (counts[curr] = 1);
    });
    return counts;
}
