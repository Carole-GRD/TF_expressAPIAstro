
class MarkDTO {
    constructor( { id, name, Mark } ) {
       this.id = id;
       this.name = name;
       this.Mark = Mark ? Mark : null;
    }
}

module.exports = MarkDTO;