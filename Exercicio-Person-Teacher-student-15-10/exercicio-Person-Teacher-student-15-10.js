class Person{
    constructor(firstname, lastname, age, gender, interests){
        this.firstname = firstname,
        this.lastname = lastname
        this.age = age,
        this.gender = gender,
        this. interests = array()
    }

    bio(){
        return `${this.firstname} is ${this.age} years old. They like ${this.interests}`;
    }
    greeting(){
        return `Hi! I'm ${this.firstname}`;
    }
}

class Teacher extends Person{
    constructor(firstname, lastname,age,gender,interests,subject){
        super(firstname, lastname,age,gender,interests,subject)
        this.subject = subject;
    }

    bio(){
        return super.bio();
    }

    greeting(){
        return `Hello. My name id ${this.firstname} ${this.lastname}, and i teach ${this.subject}`;
    }
}

class Student extends Person{
        
    bio(){
        super.bio();
    }

    greeting(){
        return `Yo! I'm ${this.firstname}`;
    }
}

