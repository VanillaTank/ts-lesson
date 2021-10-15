import faker from 'faker';


//пример экспорта  (см. импорт в index.ts)
//стараемся не использовать в своем коде export default, тк принято писать импорт через {}
export const name : string = 'Jack' 
export default 'thing for import';


export class User {
    name : string;
    location : {
        lat : number;
        lng : number;
    };

    constructor () {
        this.name = faker.name.firstName();
        this.location = {
            lat : parseFloat(faker.address.latitude()),
            lng : parseFloat(faker.address.longitude())
        }
    }
}