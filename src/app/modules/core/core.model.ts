export class Model {
    setObject(obj:any) {
        for (let key in this) {
            if (obj[key]) {
                this[key] = obj[key];
            }
        }
    }
}