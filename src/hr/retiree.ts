import { _Person } from '.';
import { ProvidesInformation } from './employee';

export class Retiree extends _Person implements ProvidesInformation {

    pension: number;
    getInfo() {
        return 'This is a retiree'
    }

}