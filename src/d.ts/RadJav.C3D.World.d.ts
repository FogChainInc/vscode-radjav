/// <reference path="RadJav.d.ts" />
declare namespace RadJav {
    namespace C3D {
        /** @class RadJav.C3D.World
        * A 3D world.
        * Available on platforms: Windows,Linux,OSX,HTML5
        */
        class World {
            constructor(obj?: any);
            /** @property {string} [_name="defaultWorld"]
            * @protected
            * The name of the world.
            */
            _name: string;
            /** @property {RadJav.Color} [_ambientLightColor=RadJav.Color.White]
            * @protected
            * The ambient light color.
            */
            _ambientLightColor: Color;
            /** @property {any} [_sceneManager=null]
            * @protected
            * The scene manager being used for this world.
            */
            _sceneManager: any;
            /** @property {any} [_renderWindow=null]
            * @protected
            * The window being rendered to.
            */
            _renderWindow: any;
            /** @method setAmbientLightColor
            * Set the position of this object.
            * @param {Number/RadJav.Vector3} x The x position or full vector3 position.
            * @param {Number} y The y position.
            * @param {Number} z The z position.
            */
            setAmbientLightColor(color: Color): void;
            /** @method getPosition
            * Get the position of this object.
            * @return {RadJav.Vector3} The position.
            */
            getAmbientLightColor(): Color;
        }
    }
}
