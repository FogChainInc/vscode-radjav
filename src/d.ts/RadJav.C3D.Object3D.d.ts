/// <reference path="RadJav.d.ts" />
/// <reference path="RadJav.C3D.Transform.d.ts" />
declare namespace RadJav {
    namespace C3D {
        /** @class RadJav.C3D.Object3D
         * The base 3D object.
         * Available on platforms: Windows,Linux,OSX,HTML5
         */
        class Object3D {
            /** The name of this object.
             * @default ""
             */
            name: String;
            /** The type of object.
             * @default ""
             */
            type: string;
            /** The visibility of the object.
             * @default true
             * @protected
             */
            protected _visible: boolean;
            /** The parent of this object.
             * @protected
             * @default null
             */
            protected _parent: Object3D;
            /** The canvas 3d object used to display this object.
             * @protected
             * @default canvas3d
             */
            protected _canvas3D: GUI.Canvas3D;
            /** The 3d object associated with this object.
             * @protected
             * @default null
             */
            protected _obj3d: any;
            protected _c3dObj: any;
            /** This object's transform.
             * @default new RadJav.C3D.Transform (this)
             * @protected
             */
            protected _transform: C3D.Transform;
            constructor(canvas3d: any, obj: any, parent: any);
            getCanvas3D(): GUI.Canvas3D;
            getObj3D(): any;
            /** Using the existing parameters in this object, create it.
             * @return {Promise} The promise to execute when the creation is completed.
             */
            create(): Promise<Object3D>;
            /** Destroy this object.
             */
            destroy(): void;
            /** Get the parent.
            * @return {RadJav.C3D.Object3D} The parent of this object.
            */
            getParent(): Object3D;
            /** Get the transform.
            * @return {RadJav.C3D.Transform} The transform.
            */
            getTransform(): C3D.Transform;
            /** Set the position of this object.
            * @param {Number/RadJav.Vector3} x The x position or full vector3 position.
            * @param {Number} y The y position.
            * @param {Number} z The z position.
            */
            setPosition(x: number | RadJav.Vector3, y?: number, z?: number): void;
            /** Get the position of this object.
             * @return {RadJav.Vector3} The position.
             */
            getPosition(): Vector3;
            /** Set the visibility of this object.
             * Theme Event: setVisibility
             * Is Theme Event Asynchronous: Yes
             * Parameters Passed to Theme Event: RadJav.GUI.GObject, Boolean
             * @param {Boolean} visible The visibility of the object
             */
            setVisibility(visible: boolean): void;
            /** Get the visibility of this object.
             * Theme Event: setVisibility
             * Is Theme Event Asynchronous: No
             * Parameters Passed to Theme Event: RadJav.GUI.GObject
             * @return {Boolean} The visibility of this object
             */
            getVisibility(): boolean;
            /** Show this object.
             * Theme Event: setVisibility
             * Is Theme Event Asynchronous: Yes
             * Parameters Passed to Theme Event: RadJav.GUI.GObject, Boolean
             */
            show(): void;
            /** Show this object.
             * Theme Event: setVisibility
             * Is Theme Event Asynchronous: Yes
             * Parameters Passed to Theme Event: RadJav.GUI.GObject, Boolean
             */
            hide(): void;
            /** Calls a function when an event is triggered.
             * Theme Event: on
             * Is Theme Event Asynchronous: Yes
             * Parameters Passed to Theme Event: RadJav.GUI.GObject, String, Function
             * @param {String} eventName The name of the event to trigger.
             * @param {Function} func The function to execute.
             */
            on(eventName: string, func: Function): void;
        }
    }
}
