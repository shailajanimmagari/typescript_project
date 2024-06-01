var originalObject = {
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
var requiredObject = {
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
function concatKeysAndValues(obj) {
    var result = '';
    for (var key in obj) {
        if (result !== '') {
            result += ', ';
        }
        result += key + ': ' + obj[key];
    }
    return result;
}
//TAKS-3
var ObjectUtils;
(function (ObjectUtils) {
    function concatKeysAndValues(obj) {
        var result = '';
        for (var key in obj) {
            var value = obj[key];
            if (typeof value === 'string') {
                if (result !== '') {
                    result += ', ';
                }
                result += key + ': ' + value;
            }
            else {
                result += ', ' + concatKeysAndValues(value);
            }
        }
        return result;
    }
    ObjectUtils.concatKeysAndValues = concatKeysAndValues;
})(ObjectUtils || (ObjectUtils = {}));
var inputObject1 = {
    name: "shailaja",
    email: "shailu@gmail.com",
    address: {
        city: "Hyderabad",
        state: "Telangana"
    }
};
var inputObject2 = {
    title: "Instagram post",
    content: "This is a post",
    comments: {
        1: "Great post!",
        2: "Keep it up!"
    }
};
console.log(ObjectUtils.concatKeysAndValues(inputObject1));
console.log(ObjectUtils.concatKeysAndValues(inputObject2));
