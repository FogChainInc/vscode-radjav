/// <reference path="RadJav.d.ts" />
/// <reference path="RadJav.C3D.Object3D.d.ts" />
declare namespace RadJav {
    namespace C3D {
        /** @class RadJav.C3D.Camera
         * A camera object.
         * Available on platforms: Windows,Linux,OSX,HTML5
         */
        class Entity extends RadJav.C3D.Object3D {
            constructor(canvas3d: any, obj: any, parent: any, model: any);
            /** @property {Object} [_model=null]
             * @protected
             * The name of the 3d model being used.
             */
            protected _model: any;
            protected _c3dEntity: any;
            /** @method create
             * Using the existing parameters in this object, create it.
             * @return {Promise} The promise to execute when the creation is completed.
             */
            create(): Promise<Entity>;
            /** @method setModel
             * Set a model.
             * @param {String} newModel The model to set.
             */
            setModel(newModel: string): void;
            /** @method getModel
             * Get the model.
             * @return {String} The model being used.
             */
            getModel(): any;
            static Types: {
                None: number;
                Cube: number;
                Sphere: number;
                Plane: number;
                Camera: number;
                Light: number;
            };
        }
    }
}
