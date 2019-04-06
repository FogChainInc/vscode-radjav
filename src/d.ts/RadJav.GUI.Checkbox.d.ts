/// <reference path="RadJav.d.ts" />
/// <reference path="RadJav.Vector2.d.ts" />
declare namespace RadJav {
    namespace GUI {
        /** @class RadJav.GUI.Checkbox
        * @extends RadJav.GUI.GObject
        * A checkbox.
        * Available on platforms: Windows,Linux,OSX,iOS,Android,HTML5
        */
        class Checkbox extends RadJav.GUI.GObject {
            static xmlTag: TagType;
            constructor(obj?: any, text?: string, parent?: RadJav.GUI.GObject);
            /** @property {Boolean} [_checked=false]
            * If set to true, the box is checked.
            * @protected
            */
            _checked: boolean;
            /** Set whether or not this checkbox is checked.
            * Theme Event: setChecked
            * Is Theme Event Asynchronous: No
            * @param {Boolean} checked Whether or not this is checked.
            * @return {Promise} Executes the promise when the image has loaded.
            */
            setChecked(checked: boolean): void;
            /** Checks if this checkbox is checked.
            * Theme Event: isChecked
            * Is Theme Event Asynchronous: No
            * @return {Boolean} Whether or not this is checked.
            */
            isChecked(): boolean;
        }
    }
}
