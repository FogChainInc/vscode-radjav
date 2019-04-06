/// <reference path="RadJav.d.ts" />
/// <reference path="RadJav.Vector2.d.ts" />
declare namespace RadJav {
    namespace GUI {
        /** @class RadJav.GUI.Radio
         * @extends RadJav.GUI.GObject
         * A Radio button.
         * Available on platforms: Windows,Linux,OSX,HTML5
         */
        class Radio extends RadJav.GUI.GObject {
            static xmlTag: TagType;
            constructor(obj?: any, text?: string, parent?: RadJav.GUI.GObject);
            /** @property {String} [_radioGroup=""]
             * @protected
             * The group this box is associated grouped with.
             */
            _radioGroup: String;
            /** @property {Boolean} [_checked=false]
             * @protected
             * Whether or not this object is checked when created.
             */
            _checked: boolean;
            /** @method setChecked
             * Set whether or not this object is checked.
             * Theme Event: setChecked
             * Is Theme Event Asynchronous: No
             * Parameters Passed to Theme Event: RadJav.GUI.GObject, Boolean
             * @param {Boolean} checked Set to true if this item is checked.
             */
            setChecked(checked: boolean): void;
            /** @method isChecked
             * Checks whether or not this object is checked.
             * Theme Event: isChecked
             * Is Theme Event Asynchronous: No
             * Parameters Passed to Theme Event: RadJav.GUI.GObject
             * Returned from Theme Event: Boolean
             * @return {Boolean} If set to true, this item is checked.
             */
            isChecked(): boolean;
        }
    }
}
