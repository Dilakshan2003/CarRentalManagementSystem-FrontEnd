export interface UserAccount {
   
    name: string,
    email: string,
    licenceNumber : string,
    address : string,
    nic : string,
    phoneNumber : string,

}

export interface IToken{
    token: string;
}

export interface updateCustomer{
    name:string
    email:string
    phoneNumber:string
    address:string
    nic : string,
    licenceNumber:string
    password:string
}