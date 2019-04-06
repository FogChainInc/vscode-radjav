/// <reference path="RadJav.d.ts" />
/// <reference path="RadJav.GUI.GObject.d.ts" />
/// <reference path="RadJav.C3D.Object3D.d.ts" />
/// <reference path="RadJav.Interact.d.ts" />
/// <reference path="RadJav.Vector2.d.ts" />
/// <reference path="RadJav.Vector3.d.ts" />
declare namespace RadJav {
    class Animation {
        name: string;
        attachedObject: HTMLElement | RadJav.Interact.Component | RadJav.GUI.GObject | RadJav.C3D.Object3D;
        lerpAnimators: Animation.LerpAnimator[];
        onUpdate: (timeDelta: number) => void;
        onAnimation: (animationObj: any, data: any, timeDelta: number) => void;
        onCompleted: () => void;
        playState: Animation.PlayState;
        constructor();
        attach(obj: HTMLElement | RadJav.Interact.Component | RadJav.GUI.GObject | RadJav.C3D.Object3D): void;
        _getDisplayObject(obj: HTMLElement | RadJav.Interact.Component | RadJav.GUI.GObject | RadJav.C3D.Object3D): HTMLElement | RadJav.GUI.GObject | RadJav.C3D.Object3D;
        lerp(start: RadJav.Vector2 | RadJav.Vector3, end: RadJav.Vector2 | RadJav.Vector3, speed: number): void;
        play(): void;
        pause(): void;
        stop(): void;
        on(event: string, func: (timeDelta?: number) => void): void;
        update(timeDelta: number): void;
    }
    namespace Animation {
        class Animator {
            animation: Animation;
            onAnimate: (attachedObject: HTMLElement | RadJav.GUI.GObject | RadJav.C3D.Object3D, data: any, timeDelta: number) => void;
            constructor(animation: Animation);
            animate(data: any, timeDelta: number): void;
            complete(): void;
        }
        class LerpAnimator extends Animator {
            startPos: RadJav.Vector3;
            endPos: RadJav.Vector3;
            startTime: number;
            timeElapsed: number;
            speed: number;
            constructor(animation: Animation, start: RadJav.Vector3, end: RadJav.Vector3, speed: number);
            update(timeDelta: number): void;
        }
        class PlayState {
            static Stopped: number;
            static Playing: number;
            static Paused: number;
        }
    }
}
