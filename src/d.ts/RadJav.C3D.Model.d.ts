/// <reference path="RadJav.d.ts" />
declare namespace RadJav {
    namespace C3D {
        /** @class RadJav.C3D.Model
        * A 3d Model.
        * Available on platforms: Windows,Linux,OSX,HTML5
        */
        class Model {
            constructor(object3d: any, obj: any, materials: any);
            /** @property {RadJav.C3D.Object3D} [_object3d=object3d]
            * @protected
            * The 3d object that is associated with this transform.
            */
            protected _object3d: RadJav.C3D.Object3D;
            /** @property {String} [_name=""]
            * @protected
            * The name.
            */
            protected _name: string;
            /** @property {RadJav.C3D.Model.Mesh} [mesh=null]
            * @protected
            * The model mesh to load.
            */
            protected mesh: Model.Mesh;
            /** @property {RadJav.C3D.Material[]} [materials=[]]
            * The materials used in this model.
            */
            protected materials: RadJav.C3D.Material[];
            /** @method create
            * Create the model.
            * @return {Promise} The promise to execute when completed.
            */
            create(): Promise<Model>;
            /** @method _setName
            * @protected
            * Set the name of the model.
            * @param {String} name The name of the model.
            */
            protected _setName(name: string): void;
            /** @method getName
            * Get the name of the model.
            * @return {String} The name of the model.
            */
            getName(): string;
        }
        namespace Model {
            /** @class RadJav.C3D.Model.Mesh
            * Information about the 3d Model mesh to load.
            * Available on platforms: Windows,Linux,OSX,HTML5
            */
            class Mesh {
                constructor(model: any, obj: any);
                /** @property {String} [_name=""]
                * The name of this mesh.
                */
                _name: String;
                /** @property {String} [filePath=""]
                * The path to the file to load.
                */
                filePath: String;
                /** @property {String} [type="json"]
                * @protected
                * The type of model to load.
                */
                type: String;
                /** @property {RadJav.C3D.Model.Mesh.Data} [data=null]
                * @protected
                * The mesh data.
                */
                data: Mesh.Data | object;
                /** @property {Object} [_mesh=null]
                * @protected
                * The 3d engine mesh associated with the model.
                */
                _mesh: Object;
                /** @property {RadJav.C3D.Model} [model=null]
                * @protected
                * The model that contains this mesh.
                */
                model: Model;
                /** @method getName
                * Get the name of this object.
                * @return {String} The name.
                */
                getName(): String;
                create(): Promise<{}>;
            }
            namespace Mesh {
                /** @class RadJav.C3D.Model.Mesh.Data
                * 3d Model mesh data.
                * Available on platforms: Windows,Linux,OSX,HTML5
                */
                class Data {
                    constructor(mesh: any, obj: any);
                    /** @property {String} [type="mesh"]
                    * @protected
                    * The type of mesh data. Can be:
                    * - mesh
                    * - sphere
                    * - cube
                    * - plane
                    */
                    type: 'mesh' | 'sphere' | 'cube' | 'plane';
                    /** @property {Number} [radius=100]
                    * @protected
                    * The radius of the sphere.
                    */
                    radius: Number;
                    /** @property {Number} [width=0]
                    * @protected
                    * The width of the mesh.
                    */
                    width: Number;
                    /** @property {Number} [height=0]
                    * @protected
                    * The height of the mesh.
                    */
                    height: Number;
                    /** @property {Number} [depth=0]
                    * @protected
                    * The depth of the mesh.
                    */
                    depth: Number;
                    /** @property {Number} [widthSegments=1]
                    * @protected
                    * The width segments in the cube.
                    */
                    widthSegments: Number;
                    /** @property {Number} [heightSegments=1]
                    * @protected
                    * The height segments in the cube.
                    */
                    heightSegments: Number;
                    /** @property {Number} [depthSegments=1]
                    * @protected
                    * The depth segments in the cube.
                    */
                    depthSegments: Number;
                }
            }
        }
    }
}
