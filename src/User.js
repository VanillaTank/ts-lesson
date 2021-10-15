import faker from 'faker';
//пример экспорта  (см. импорт в index.ts)
//стараемся не использовать в своем коде export default, тк принято писать импорт через {}
export const name = 'Jack';
export default 'thing for import';
export class User {
    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }
}
