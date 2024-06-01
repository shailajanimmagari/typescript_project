var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function addItem(items, itemName) {
    return __spreadArray(__spreadArray([], items, true), [{ name: itemName, completed: false }], false);
}
function deleteItem(items, index) {
    var updatedItems = __spreadArray([], items, true);
    updatedItems.splice(index, 1);
    return updatedItems;
}
function toggleItemCompletion(items, index) {
    var updatedItems = __spreadArray([], items, true);
    updatedItems[index].completed = !updatedItems[index].completed;
    return updatedItems;
}
function countCompletedItems(items) {
    var count = 0;
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        if (item.completed) {
            count++;
        }
    }
    return count;
}
function hideCompletedItems(items) {
    var hiddenItems = [];
    for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
        var item = items_2[_i];
        if (!item.completed) {
            hiddenItems.push(item);
        }
    }
    return hiddenItems;
}
var shoppingList = [];
shoppingList = addItem(shoppingList, "Anarkali type");
shoppingList = addItem(shoppingList, "Kurtha type");
console.log("Initial shopping list:", shoppingList);
shoppingList = toggleItemCompletion(shoppingList, 0);
console.log("Shopping list after marking first item as completed:", shoppingList);
shoppingList = deleteItem(shoppingList, 1);
console.log("Shopping list after deleting second item:", shoppingList);
console.log("Number of completed items:", countCompletedItems(shoppingList));
console.log("Shopping list with completed items hidden:", hideCompletedItems(shoppingList));
