import faker from 'faker';
import { Mapable } from 'CustomMap';

//пример экспорта  (см. импорт в index.ts)
//стараемся не использовать в своем коде export default, тк принято писать импорт через {}
export const name : string = 'Jack' 
export default 'thing for import';

//все элементы класса User должны соответствовать Mapable
// говорит implements Mapable
export class User implements Mapable{
    name : string;
    location : {
        lat : number;
        lng : number;
    };

    color: string = 'black';

    constructor () {
        this.name = faker.name.firstName();
        this.location = {
            lat : parseFloat(faker.address.latitude()),
            lng : parseFloat(faker.address.longitude())
        }
    }

    markerContent():string {
        return `User Name: ${this.name}`
    }
}