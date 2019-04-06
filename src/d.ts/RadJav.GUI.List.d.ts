/// <reference path="RadJav.d.ts" />
/// <reference path="RadJav.Vector2.d.ts" />
declare namespace RadJav {
    namespace GUI {
        /** @class RadJav.GUI.Label
         * @extends RadJav.GUI.GObject
         * A label.
         * Available on platforms: Windows,Linux,OSX,HTML5
         */
        class List extends RadJav.GUI.GObject {
            static xmlTag: TagType;
            constructor(obj?: any, text?: string, parent?: RadJav.GUI.GObject);
            protected _canSort: any;
            protected _hasCheckBoxes: any;
            protected _columns: any;
            /** @method addColumn
             * Add a column to this list.
             * Theme Event: addColumn
             * Is Theme Event Asynchronous: No
             * Parameters Passed to Theme Event: RadJav.GUI.GObject, RadJav.GUI.List.Column
             * @param {RadJav.GUI.List.Column/String} columns The columns to set to this list.
             * @param {Number} [width=null] The width.
             * @param {Mixed} [key=null] The key associated with this column.
             */
            addColumn(column: any, width: number, key: any): void;
            /** @method setColumns
             * Set the columns of this list.
             * Theme Event: setColumns
             * Is Theme Event Asynchronous: No
             * Parameters Passed to Theme Event: RadJav.GUI.GObject, RadJav.GUI.List.Column[]
             * @param {RadJav.GUI.List.Column[]} columns The columns to set to this list.
             */
            setColumns(columns: any): void;
            /** @method addRow
             * Add a row to the list.
             * Theme Event: addRow
             * Is Theme Event Asynchronous: No
             * Parameters Passed to Theme Event: RadJav.GUI.GObject, row, hiddenValue
             * @param {Mixed} row The row to add to the list.
             * @param {Mixed} [hiddenValue=undefined] The hidden value to add to the row. If
             * row has a property named hiddenRow, the value of that will be placed into this
             * parameter, and it will be deleted from the row object.
             */
            addRow(row: any, hiddenValue: any): void;
            /** @method setRows
             * Set the list's rows.
             * Theme Event: setRows
             * Is Theme Event Asynchronous: No
             * Parameters Passed to Theme Event: RadJav.GUI.GObject, rows, hiddenRows
             * @param {Array} rows The rows of data to set.
             * @param {Array} [hiddenRows=null] The hidden rows of data to set.
             */
            setRows(rows: any, hiddenRows: any): void;
            /** @method getSelectedRows
             * Get the selected rows.
             * Theme Event: getSelectedRows
             * Is Theme Event Asynchronous: No
             * Parameters Passed to Theme Event: RadJav.GUI.GObject
             * @return {RadJav.GUI.List.Selection} The selected objects.
             */
            getSelectedRows(): any;
            /** @method deleteRows
             * Delete rows.
             * Theme Event: deleteRows
             * Is Theme Event Asynchronous: No
             * Parameters Passed to Theme Event: RadJav.GUI.GObject, RadJav.GUI.List.Selection
             * @param {RadJav.GUI.List.Selection} selection The selection to delete.
             */
            deleteRows(selection: any): any;
        }
        namespace List {
            /**
             * A List row.
             * Available on platforms: Windows,Linux,OSX,HTML5
             */
            class Row {
                constructor(obj: any);
                /**
                 * The items to display.
                 */
                items: any;
                /**
                 * Add an item to this row.
                 * @param {RadJav.GUI.List.Item} item The item to add.
                 */
                addItem(item: any): void;
            }
            /** @class RadJav.GUI.List.Item
             * A List item.
             * Available on platforms: Windows,Linux,OSX,HTML5
             */
            class Item {
                constructor(obj: any);
                /** @property {String} [name=""]
                 * The name to display.
                 */
                name: String;
                /** @property {String} [text=""]
                 * The text to display.
                 */
                text: string;
            }
            /** @class RadJav.GUI.List.Column
             * A List column.
             * Available on platforms: Windows,Linux,OSX,HTML5
             */
            class Column {
                constructor(obj: any);
                /** @property {String} [text=""]
                 * The text to display.
                 */
                text: String;
                /** @property {Number} [width=0]
                 * The column width. If set to 0, the width will be automatic.
                 */
                width: number;
                /** @property {Object} [key=null]
                 * The key associated with this column.
                 */
                key: object;
            }
            /** @class RadJav.GUI.List.Selection
             * A List selection.
             * Available on platforms: Windows,Linux,OSX,HTML5
             */
            class Selection {
                constructor(obj: any);
                /** @property {Mixed} [_html=null]
                 * @protected
                 * The HTML object associated with this selection.
                 */
                protected _html: any;
                /** @property {Mixed} [_appObj=null]
                 * @protected
                 * The os object associated with this selection.
                 */
                protected _appObj: any;
            }
        }
    }
}
