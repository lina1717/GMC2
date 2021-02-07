export class Person {
    id: number;
    name: string;
    firstname: string;
    age: number;
    cin: number;
    job: string;
    constructor(id: number = 0,
                name: string = '',
                firstname: string = '',
                age: number = 0,
                cin: number = 0,
                job: string = '') {
      this.id = id;
      this.name = name;
      this.firstname = firstname;
      this.age = age;
      this.cin = cin;
      this.job = job;
  
    }
  }