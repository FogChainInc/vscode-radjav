/// <reference path="RadJav.d.ts" />
declare namespace RadJav {
    namespace C3D {
        /** @class RadJav.C3D.Material
         * A 3d tranform.
         * Available on platforms: Windows,Linux,OSX,HTML5
         */
        class Material {
            constructor(canvas3d: any, obj: any, parent?: any, model?: any);
            /** @property {String} [_name=""]
             * @protected
             * The name.
             */
            protected _name: string;
            /** @property {Object} [_material=null]
             * @protected
             * The 3d engine material.
             */
            protected _material: Object;
            /** @method getName
             * Get the name of this object.
             * @return {String} The name.
             */
            getName(): string;
            /** @method createMaterials
             * @static
             * Create materials from the 3d engine materials
             * @param {Object/Object[]} materials The materials to create.
             * @return {RadJav.C3D.Material[]} The materials.
             */
            static _createMaterials(canvas3d: GUI.Canvas3D, materials: Object[]): any[];
        }
    }
}
