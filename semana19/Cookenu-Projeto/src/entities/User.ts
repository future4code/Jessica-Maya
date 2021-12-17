export enum USER_ROLES {
    Normal = "Normal",
    Admin = "Admin"
}

export class User {
    constructor(
        private id: string,
        private email: string,
        private password: string,
        private name: string,
        private role: USER_ROLES
    ) {}

    public getId() {
        return this.id
    }
    public getEmail() {
        return this.email
    }
    public getPassword() {
        return this.password
    }
    public getName() {
        return this.name
    }
    public getRole() {
        return this.role
    }
        
    static toUserModel(data: any): User {
        return new User(data.id, data.email, data.password, data.name, data.role)
    }
}