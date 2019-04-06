/// <reference path="RadJav.d.ts" />
/// <reference path="RadJav.GUI.GObject.d.ts" />
/// <reference path="RadJav.C3D.Object3D.d.ts" />
/// <reference types="jquery" />
declare namespace RadJav {
    class Interact {
        static Apps: {
            [name: string]: RadJav.Interact.App;
        };
    }
    namespace Interact {
        class ParsedExpression {
            expression: string;
            start: number;
            end: number;
            length: number;
            constructor(expression: string, start: number, end: number);
        }
        function parseExpressions(expression: string): ParsedExpression[];
        class App {
            name: string;
            currentView: View;
            _views: {
                [name: string]: View;
            };
            root: string | HTMLElement | RadJav.GUI.GObject;
            options: {
                [optionName: string]: any;
            };
            html: CompiledHTML;
            xrjApp: CompiledXRJApp;
            constructor(name: string);
            createView(name: string): View;
            addView(view: View): void;
            /**
            * Update the current view.
            */
            updateView(): void;
            setView(root: string | HTMLElement | RadJav.GUI.GObject | RadJav.Interact.View, view: RadJav.Interact.View): void;
            setComponentEvent(name: string, eventName: string, eventFunction: Function | EventListener): void;
            build(newApp?: CompiledApp): CompiledApp;
            static loadApp(file: string | Function): void;
        }
        class View {
            name: string;
            _components: {
                [name: string]: Component;
            };
            _refCount: number;
            _events: {
                [eventName: string]: Function;
            };
            _mainComponent: Component;
            _app: App;
            constructor(app: App, name: string);
            /** @method createComponent
            *
            */
            createComponent(obj: RadJav.Interact.Component): RadJav.Interact.Component;
            setMainComponent(component: string | Component): void;
            getMainComponent(): Component;
            update(): void;
            on(eventName: string, eventFunction: Function): any;
            build(newApp: CompiledApp): CompiledView;
        }
        class Component {
            name: string;
            tag: string;
            display: string | RadJav.GUI.GObject | RadJav.C3D.Object3D | JQuery<HTMLElement>;
            _children: Component[];
            protected _originalDisplay: string;
            css: string[] | {
                css: string;
            }[];
            _data: {
                [name: string]: ComponentData;
            };
            _events: {
                [eventName: string]: Function | string;
            };
            _view: View;
            _innerHTML: string;
            static ignoreKeyList: string[];
            constructor(obj: Component, parentView: View);
            getParentInner(): HTMLElement | RadJav.GUI.GObject;
            update(): void;
            parse(): void;
            on(eventName: string, eventFunction: Function): any;
        }
        class ComponentData {
            name: string;
            value: any;
            start: number;
            end: number;
            length: number;
            constructor();
        }
        class CompiledHTML {
            filename: string;
            title: string;
            interactAppPath: string;
            htmlEvents: string[];
            body: string;
            cssFiles: string[];
            jsFiles: string[];
            html: string;
            constructor(name: string);
            build(): string;
            writeToFile(path: string): void;
        }
        class CompiledXRJApp {
            filename: string;
            name: string;
            version: string;
            interactAppPath: string;
            xrjApp: string;
            generateAsHTML5App: boolean;
            guiEvents: string[];
            constructor(name: string);
            build(): string;
            writeToFile(path: string): void;
        }
        class CompiledApp {
            name: string;
            html: CompiledHTML;
            xrjApp: CompiledXRJApp;
            views: CompiledView[];
            mainView: string;
            root: string;
            compiledStr: string;
            _assetsPath: string;
            _fileCopyFunc: (src: string, dest: string) => boolean;
            constructor(name: string);
            assetsDir(path: string, fileCopyFunc: (src: string, dest: string) => boolean): void;
            writeFiles(path: string): void;
        }
        class CompiledView {
            name: string;
            compiledHTMLCSS: string;
            components: {
                [name: string]: string;
            };
            mainComponentName: string;
            root: string;
            compiledStr: string;
            constructor(name: string, root: string);
            build(): string;
            writeHTMLCSSToFile(path: string): void;
            writeToFile(path: string): void;
        }
    }
}
