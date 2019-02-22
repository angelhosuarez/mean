export class Usuario {
    _id: string;
    nombres: string;
    apellidos: string;
    constructor(_id = '', nombres = '', apellidos = '') {
        this._id = _id;
        this.nombres = nombres;
        this.apellidos = apellidos;
    }


}
