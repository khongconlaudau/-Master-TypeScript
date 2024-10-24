{
    class Person{
        private name: string | undefined;

        set setName(name:string){
            this.name = name;
        }

        get getName():string{
            return <string>this.name;
        }
    }

    let person = new Person();
    // console.log(person.getName);
    person.setName = "Mason Van";
    console.log();
    console.log(person.getName);
}