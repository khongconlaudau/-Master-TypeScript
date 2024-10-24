{
  let password: string | number = 20;

  type UserInfo = {
    name: string;
    age: number;
  };

  type detailsInfor = {
    job: string;
    email?: string;
  };

  let user: UserInfo | detailsInfor = {
    name: "Duc Manh Van",
    email: "vanducmanh266",
    job: "student",
  };


  console.log(user);


   const items : (number | string)[] = [1, 2, 3, "Hello"];
   console.log(items);
   
}
