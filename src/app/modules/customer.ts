/*KP : Customer Class */
export class Customer { 
    _id: number; 
    first_name: string;
    last_name: string;
    gender: string;
    address: Address;
    age: number;
    balance: number;  }

export class Address { 
    street: string;         ///'321 Jala-Vayu-Vihar, Kukatpally',
    city: string;           ///'Hyderabad'
    state: string;          ///'Telangana/TS'
    zipcode: string;        ///'08550
    country: string;        //'INDIA'
}