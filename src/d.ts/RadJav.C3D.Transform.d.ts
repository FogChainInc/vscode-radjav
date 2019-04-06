/// <reference path="RadJav.d.ts" />
declare namespace RadJav {
    namespace C3D {
        /** @class RadJav.C3D.Transform
         * A 3d tranform.
         * Available on platforms: Windows,Linux,OSX,HTML5
         */
        class Transform {
            constructor(object3d: any, obj?: any, position?: any);
            protected position: any;
            /** @property {RadJav.C3D.Object3D} [_object3d=object3d]
             * @protected
             * The 3d object that is associated with this transform.
             */
            _object3d: Object3D;
            /** @property {RadJav.C3D.Transform} [_parent=null]
             * @protected
             * This object's parent transform.
             */
            _parent: Transform;
            /** @property {Mixed} [_sceneNode=null]
             * @protected
             * This object's scene node.
             */
            _sceneNode: any;
            /** @property {Mixed} [_movable=null]
             * @protected
             * The object that is being moved.
             */
            _movable: any;
            /** @method addChild
             * Add a child RadJav.C3D.Object3D to this transform.
             * @param {RadJav.C3D.Object3D} child The child to add.
             */
            addChild(child: Object3D): void;
            /** @method setPosition
             * Set the position of this object.
             * @param {Number/RadJav.Vector3} x The x position or full vector3 position.
             * @param {Number} y The y position.
             * @param {Number} z The z position.
             */
            setPosition(x: any | Vector3, y: number, z: number): void;
            /** @method getPosition
             * Get the position of this object.
             * @return {RadJav.Vector3} The position.
             */
            getPosition(): Vector3;
        }
    }
}
