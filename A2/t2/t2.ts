
type Value<T> = {
    value: T;
};

// Use the generic type directly
const stringValue: Value<string> = { value: "Hello" };
const numberValue: Value<number> = { value: 123 };
const booleanValue: Value<boolean> = { value: true };

console.log(stringValue);
console.log(numberValue);
console.log(booleanValue);
