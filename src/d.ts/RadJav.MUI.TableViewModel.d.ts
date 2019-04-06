/// <reference path="RadJav.d.ts" />
/// <reference path="RadJav.Vector2.d.ts" />
declare namespace RadJav {
    namespace MUI {
        /** @class RadJav.MUI.TableViewModel
         * A model for TableView control.
         * Available on platforms: iOS,Android,HTML5
         */
        class TableViewModel {
            static xmlTag: TagType;
            /** @property {string} [type=""]
             * The type of object.
             */
            type: string;
            /** @property {Array} [items=[]]
             * The items hold by this model.
             */
            private items;
            /** @property {any} [_appObj=null]
             * The type of object.
             */
            private _appObj;
            constructor();
            push(item: any): void;
            remove(index: number): void;
            pop(): void;
            clear(): void;
            get(index: number): object;
        }
    }
}
