/// <reference path="RadJav.d.ts" />
/// <reference path="RadJav.C3D.Object3D.d.ts" />
declare namespace RadJav {
    namespace C3D {
        /** @class RadJav.C3D.Camera
         * A camera object.
         * Available on platforms: Windows,Linux,OSX,HTML5
         */
        class Camera extends RadJav.C3D.Object3D {
            constructor(canvas3d?: any, obj?: any, parent?: any);
            /** @property {Boolean} [_perspective=true]
             * @protected
             * If this is set to true, the perspective view will be used.
             */
            protected _perspective: boolean;
            /** @property {Number} [_aspectRatio=parseFloat (canvas3d.getWidth ()) / parseFloat (canvas3d.getHeight ()]
             * @protected
             * The camera's aspect ratio.
             */
            protected _aspectRatio: number;
            /** @property {Number} [_fov=(90 / _this._aspectRatio)]
             * @protected
             * The camera's fov.
             */
            protected _fov: Number;
            /** @property {Number} [_nearClip=1.0]
             * @protected
             * The camera's near clip distance.
             */
            protected _nearClip: Number;
            /** @property {Number} [_farClip=1.0]
             * @protected
             * The camera's far clip distance.
             */
            protected _farClip: Number;
            /** @property {Object} [_rayCaster=null]
             * @protected
             * The ray caster used to get ray casts from the screen.
             */
            protected _rayCaster: any;
            /** @method create
             * Using the existing parameters in this object, create it.
             * @return {Promise} The promise to execute when the creation is completed.
             */
            create(): Promise<Camera>;
        }
    }
}
