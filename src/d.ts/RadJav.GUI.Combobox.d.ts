/// <reference path="RadJav.d.ts" />
/// <reference path="RadJav.Vector2.d.ts" />
declare namespace RadJav {
    namespace GUI {
        /** @class RadJav.GUI.Combobox
         * @extends RadJav.GUI.GObject
         * A combobox.
         * Available on platforms: Windows,Linux,OSX,HTML5
         */
        class Combobox extends RadJav.GUI.GObject {
            static xmlTag: TagType;
            constructor(obj?: any, text?: string, parent?: RadJav.GUI.GObject);
            /** @property {String} [_items=[]]
             * The items associated with this object.
             */
            _items: Combobox.Item[];
            /** @method addItem
             * Add an item to the combo box.
             * Theme Event: addItem
             * Is Theme Event Asynchronous: No
             * Parameters Passed to Theme Event: RadJav.GUI.GObject, RadJav.GUI.Combobox.Item
             * @param {RadJav.GUI.Combobox.Item/String} item The item to add.
             */
            addItem(item: any): void;
            /** @method setItems
             * Set an array of items to the combo box.
             * Theme Event: setItems
             * Is Theme Event Asynchronous: No
             * Parameters Passed to Theme Event: RadJav.GUI.GObject, RadJav.GUI.Combobox.Item[]
             * @param {RadJav.GUI.Combobox.Item[]} items The items to set to this combo box.
             */
            setItems(items: Combobox.Item[]): void;
            /** @method deleteItem
             * Remove an item from this combobox.
             * Theme Event: deleteItem
             * Is Theme Event Asynchronous: No
             * Parameters Passed to Theme Event: RadJav.GUI.GObject, Number
             * @param {Number} The item index to delete.
             */
            deleteItem(index: number): void;
            /** @method getItem
             * Get an item from this combobox.
             * Theme Event: getItem
             * Is Theme Event Asynchronous: No
             * Parameters Passed to Theme Event: RadJav.GUI.GObject, Number
             * @return {RadJav.GUI.Combobox.Item} The item.
             */
            getItem(index: number): Combobox.Item;
            /** @method getItems
             * Get all items from this combobox.
             * Theme Event: getItems
             * Is Theme Event Asynchronous: No
             * Parameters Passed to Theme Event: RadJav.GUI.GObject
             * @return {RadJav.GUI.Combobox.Item[]} The items.
             */
            getItems(): Combobox.Item[];
            /** @method getNumItems
             * Get the number of items.
             * Theme Event: getNumItems
             * Is Theme Event Asynchronous: No
             * Parameters Passed to Theme Event: RadJav.GUI.GObject
             * @return {Number} The number of items.
             */
            getNumItems(): number;
            /** @method clear
             * Clear this object of all items.
             * Theme Event: clear
             * Is Theme Event Asynchronous: No
             * Parameters Passed to Theme Event: RadJav.GUI.GObject
             */
            clear(): void;
            /** @method setSelectedItemIndex
             * Set the selected item index.
             * Theme Event: setSelectedItemIndex
             * Is Theme Event Asynchronous: No
             * Parameters Passed to Theme Event: RadJav.GUI.GObject
             * Returned from Theme Event: Boolean
             * @param {number} index The selected item index.
             */
            setSelectedItemIndex(index: number): void;
            /** @method getSelectedItemIndex
             * Get the selected item index.
             * Theme Event: getSelectedItemIndex
             * Is Theme Event Asynchronous: No
             * Parameters Passed to Theme Event: RadJav.GUI.GObject
             * Returned from Theme Event: Boolean
             * @return {Number} The selected item index.
             */
            getSelectedItemIndex(): number;
        }
        namespace Combobox {
            /** @class RadJav.GUI.Combobox.Item
             * A combobox item.
             * Available on platforms: Windows,Linux,OSX,HTML5
             */
            class Item {
                constructor(obj: any);
                /** @property {String} [name=""]
                 * The name.
                 */
                name: string;
                /** @property {String} [text=""]
                 * The item's display text.
                 */
                text: string;
            }
        }
    }
}
