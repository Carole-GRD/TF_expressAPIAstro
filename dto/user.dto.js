
class UserDTO {
    constructor( 
        { 
            id, 
            firstname,
            lastname,
            pseudo,
            email,
            role,
            avatar
        } ) {
                this.id = id;
                this.firstname = firstname;
                this.lastname = lastname;
                this.pseudo = pseudo ?? null;
                this.email = email;
                this.role = role;
                this.avatar = avatar ?? null;
            }
}

module.exports = UserDTO;