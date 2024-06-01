// TASK-1
type OriginalType = {
    name: string;
    age?: number;
    email: string | null;
    isActive: boolean;
    address?: {
      street: string;
      city: string;
      postalCode: number;
    };
    hobbies: string[];
  }
  

  type RequiredType = {
    name: string;
    age: number;
    email: string | null;
    isActive: boolean;
    address: {
      street: string;
      city: string;
      postalCode: number;
    };
    hobbies: string[];
  }
  
  
  const originalObject: OriginalType = {
    name: "Shailaja",
    age: 21,
    email: "shailu@gmail.com",
    isActive: true,
    address: {
      street: "vatpally",
      city: "Sangareddy",
      postalCode: 502269
    },
    hobbies: ["reading", "Dancing"]
  };
 
  const requiredObject: RequiredType = {
    name: "Anusha",
    age: 21,
    email: "Anu@gmail.com",
    isActive: false,
    address: {
      street: "vatpally",
      city: "sangareddy",
      postalCode: 543211
    },
    hobbies: ["reading"]
  };
  console.log("Original Object:", originalObject);
console.log("Required Object:", requiredObject);

 // TASK-2

function concatKeysAndValues(obj: { [key: string]: string }): string {
  let result = '';

  for (const key in obj) {
    if (result !== '') {
      result += ', ';
    }
    result += key + ': ' + obj[key];
  }

  return result;
}

//TAKS-3
namespace ObjectUtils {
    export type NestedObject = { [key: string]: string | NestedObject };
  
    export function concatKeysAndValues(obj: NestedObject): string {
      let result = '';
  
      for (const key in obj) {
        const value = obj[key];
        if (typeof value === 'string') {
          if (result !== '') {
            result += ', ';
          }
          result += key + ': ' + value;
        } else {
          result += ', ' + concatKeysAndValues(value as NestedObject);
        }
      }
  
      return result;
    }
  }
  
  const inputObject1: ObjectUtils.NestedObject = {
    name: "shailaja",
    email: "shailu@gmail.com",
    address: {
        city: "Hyderabad",
        state: "Telangana"
    }
  };
  
  const inputObject2: ObjectUtils.NestedObject = {
    title: "Instagram post",
    content: "This is a post",
    
    comments: {
        1: "Great post!",
        2: "Keep it up!"
    }
  };
  
  console.log(ObjectUtils.concatKeysAndValues(inputObject1));
  console.log(ObjectUtils.concatKeysAndValues(inputObject2));
  