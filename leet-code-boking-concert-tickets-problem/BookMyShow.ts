class BookMyShow {
    private rows: number;
    private seatsPerRow: number;
    private nextSeat: number[];
    private seatsLeft: number[];

    constructor(numRows: number, seatsPerRow: number) {
        this.rows = numRows;
        this.seatsPerRow = seatsPerRow;
        this.nextSeat = new Array(numRows).fill(0);
        this.seatsLeft = new Array(numRows).fill(seatsPerRow);
    }

    gather(groupSize: number, maxRow: number): number[] {
        for (let row = 0; row <= maxRow; row++) {
            const available = this.seatsPerRow - this.nextSeat[row];
            if (available >= groupSize) {
                const start = this.nextSeat[row];
                this.nextSeat[row] += groupSize;
                this.seatsLeft[row] -= groupSize;
                return [row, start];
            }
        }
        return [];
    }

    scatter(groupSize: number, maxRow: number): boolean {
        for (let row = 0; row <= maxRow && groupSize > 0; row++) {
            const take = Math.min(this.seatsLeft[row], groupSize);
            this.seatsLeft[row] -= take;
            this.nextSeat[row] += take;
            groupSize -= take;
        }
        return groupSize === 0;
    }
}

module.exports = { BookMyShow };