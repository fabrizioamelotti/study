export class Computer {
    ram: number;
    video: string;
    processor: string;
    notes: string;

    // parameter 'data' is optional because have '?' and type is 'any'
    constructor(data?: any) {
        this.ram = data.ram;
        this.video = data.video;
        this.processor = data.processor;
        this.notes = data.notes || 'This is a string with default notes when data.notes is undefined';
    }
}
