import type { Color } from "./types";

export class IVCharacter {
    name: string;
    color: Color;
    initial: string;

    constructor(name: string, color: Color, initial: string) {
        this.name = name;
        this.color = color;
        this.initial = initial;
    }
}

export class IVMission {
    name: string;
    character: IVCharacter;

    constructor(name: string, character: IVCharacter) {
        this.name = name;
        this.character = character;
    }
}