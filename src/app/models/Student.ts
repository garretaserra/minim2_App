'use strict';
export class Student {
    _id: String;
    name: String;
    address: String;
    degrees: String[];
    phones: [{
        description: String;
        number: String;
    }]
}
