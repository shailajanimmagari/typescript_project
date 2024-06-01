
interface ShoppingItem {
    name: string;
    completed: boolean;
}


function addItem(items: ShoppingItem[], itemName: string): ShoppingItem[] {
    return [...items, { name: itemName, completed: false }];
}


function deleteItem(items: ShoppingItem[], index: number): ShoppingItem[] {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    return updatedItems;
}


function toggleItemCompletion(items: ShoppingItem[], index: number): ShoppingItem[] {
    const updatedItems = [...items];
    updatedItems[index].completed = !updatedItems[index].completed;
    return updatedItems;
}


function countCompletedItems(items: ShoppingItem[]): number {
    let count = 0;
    for (const item of items) {
        if (item.completed) {
            count++;
        }
    }
    return count;
}


function hideCompletedItems(items: ShoppingItem[]): ShoppingItem[] {
    const hiddenItems: ShoppingItem[] = [];
    for (const item of items) {
        if (!item.completed) {
            hiddenItems.push(item);
        }
    }
    return hiddenItems;
}


let shoppingList: ShoppingItem[] = [];

shoppingList = addItem(shoppingList, "Anarkali type");
shoppingList = addItem(shoppingList, "Kurtha type");

console.log("Initial shopping list:", shoppingList);

shoppingList = toggleItemCompletion(shoppingList, 0);
console.log("Shopping list after marking first item as completed:", shoppingList);

shoppingList = deleteItem(shoppingList, 1);
console.log("Shopping list after deleting second item:", shoppingList);

console.log("Number of completed items:", countCompletedItems(shoppingList));

console.log("Shopping list with completed items hidden:", hideCompletedItems(shoppingList));
