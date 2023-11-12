export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));
    const numberOfJumps = breaks.length / jumpAmount

    var lowerEnd = 0;

    for (let n = 1; n < numberOfJumps + 1; ++n) {
        const index = jumpAmount * n

        if (breaks[index] === true) {
            for (let i = lowerEnd; i < index; i++) {
                if (breaks[i] === true) {
                    return i;
                }
                lowerEnd = i;
            }
        }
    }

    return -1 // indicating no match aka crystal ball won't break at all
}
