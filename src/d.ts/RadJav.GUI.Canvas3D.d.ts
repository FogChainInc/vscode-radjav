/// <reference path="RadJav.d.ts" />
/// <reference path="RadJav.Vector2.d.ts" />
declare namespace RadJav {
    namespace GUI {
        /**
         * A combobox.
         * Available on platforms: Windows,Linux,OSX,HTML5
         */
        class Canvas3D extends RadJav.GUI.GObject {
            static xmlTag: TagType;
            constructor(obj?: any, text?: string, parent?: RadJav.GUI.GObject);
            /**
             * The renderer used to render the canvas.
             */
            protected _renderer: any;
            /**
             * The renderer type used to render the canvas.
             */
            protected _rendererType: Number;
            /**
             * The current camera used to render the scene.
             */
            protected _currentCamera: any;
            /**
             * The models that have been loaded for use. Each key is a RadJav.C3D.Model.
             */
            protected _models: Object[];
            /**
             * The materials that have been loaded for use. Each key is a RadJav.C3D.Material.
             */
            protected _materials: object[];
            protected _sceneManager: any;
            create(): Promise<RadJav.GUI.GObject>;
            /**
             * Setup the default camera.
             * @return {Promise} The promise to execute when the camera has finished being
             * created.
             */
            _setupDefaultCamera(): Promise<RadJav.C3D.Camera>;
            /**
             * Setup the default scene manager.
             * @return {RadJav.GUI.GObject} The parent of this object.
             */
            _setupDefaultSceneManager(): void;
            /**
             * Set the ambient light color of the scene.
             * @param {RadJav.Color} color The color.
             */
            setAmbientLightColor(colour: Color): void;
            /** @method createEntity
             * Create an entity to display in the scene.
             * @param {String} name The name of the object.
             * @param {RadJav.C3D.Object3D} parent The parent object.
             * @param {RadJav.C3D.Model} model The 3d model to create.
             * @return {Promise} The promise to execute when the entity has finished creating.
             */
            createEntity(name: string, parent: RadJav.C3D.Object3D, model: RadJav.C3D.Model): Promise<any>;
            /**
             * Add a loaded model for use.
             * @param {RadJav.C3D.Model} model The model to add.
             */
            addModel(model: RadJav.C3D.Model): void;
            /**
             * Add a loaded material for use.
             * @param {RadJav.C3D.Material} material The material to add.
             */
            addMaterial(material: RadJav.C3D.Material): void;
            /**
             * Get the number of models that have been loaded.
             */
            getNumModels(): number;
            /**
             * Get the number of materials that have been loaded.
             */
            getNumMaterials(): number;
            /**
             * Perform the actual rendering.
             */
            render(): void;
            /**
             * Set the ambient light color of the scene.
             * @param {RadJav.Color} color The color.
             */
            createWorld(colour: any): void;
            /**
             * Set the ambient light color of the scene.
             * @param {RadJav.Color} color The color.
             */
            setWorld(colour: Color): void;
        }
        namespace Canvas3D {
            /** A 3d canvas.
             * Available on platforms: Windows,Linux,OSX,HTML5
             */
            enum RendererTypes {
                AnyAvailable = 1,
                WebGL = 2,
                Context2D = 3,
            }
        }
    }
}
