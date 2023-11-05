export class Todo{
    serial :number; 
    title: string;
    description: string;
    active: boolean;

    constructor(serial: number, title: string, description: string, active: boolean) {
        this.serial = serial;
        this.title = title;
        this.description = description;
        this.active = active;
      }
}