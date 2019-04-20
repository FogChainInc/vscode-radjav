var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var RadJav;
(function (RadJav) {
    var Animation = (function () {
        function Animation() {
            this.name = "";
            this.attachedObject = null;
            this.lerpAnimators = [];
            this.onUpdate = null;
            this.onAnimation = null;
            this.onCompleted = null;
            this.playState = Animation.PlayState.Stopped;
            RadJav.addAnimation(this);
        }
        Animation.prototype.attach = function (obj) {
            this.attachedObject = obj;
        };
        Animation.prototype._getDisplayObject = function (obj) {
            var foundObj = null;
            if (typeof (HTMLElement) != "undefined") {
                if (this.attachedObject instanceof HTMLElement)
                    foundObj = this.attachedObject;
            }
            if (typeof (RadJav.Interact) != "undefined") {
                if (this.attachedObject instanceof RadJav.Interact.Component)
                    foundObj = this._getDisplayObject(this.attachedObject.display);
            }
            if (typeof (RadJav.GUI) != "undefined") {
                if (this.attachedObject instanceof RadJav.GUI.GObject)
                    foundObj = this.attachedObject;
            }
            if (typeof (RadJav.C3D) != "undefined") {
                if (typeof (RadJav.C3D.Object3D) != "undefined") {
                    if (this.attachedObject instanceof RadJav.C3D.Object3D)
                        foundObj = this.attachedObject;
                }
            }
            return (foundObj);
        };
        Animation.prototype.lerp = function (start, end, speed) {
            var foundObj = this._getDisplayObject(this.attachedObject);
            if (start instanceof RadJav.Vector2)
                start = new RadJav.Vector3(start);
            if (end instanceof RadJav.Vector2)
                end = new RadJav.Vector3(end);
            var animator = new Animation.LerpAnimator(this, start, end, speed);
            animator.onAnimate = function (animObj, newPos, timeDelta) {
                var execRadJavObj = true;
                if (typeof (HTMLElement) != "undefined") {
                    if (animObj instanceof HTMLElement) {
                        animObj.style.left = newPos.x + "px";
                        animObj.style.top = newPos.y + "px";
                        execRadJavObj = false;
                    }
                }
                if (execRadJavObj == true) {
                    if (animObj instanceof RadJav.GUI.GObject)
                        animObj.setPosition(newPos);
                    if (typeof (RadJav.C3D.Object3D) != "undefined") {
                        if (animObj instanceof RadJav.C3D.Object3D)
                            animObj.setPosition(newPos);
                    }
                }
                if (this.animation.onAnimation != null)
                    this.animation.onAnimation(animObj, newPos, timeDelta);
            };
            this.lerpAnimators.push(animator);
        };
        Animation.prototype.play = function () {
            if (this.playState == Animation.PlayState.Playing)
                return;
            for (var iIdx = 0; iIdx < this.lerpAnimators.length; iIdx++) {
                var animation = this.lerpAnimators[iIdx];
                animation.startTime = RadJav.getTime();
                animation.timeElapsed = RadJav.getTime();
            }
            this.playState = Animation.PlayState.Playing;
        };
        Animation.prototype.pause = function () {
            if (this.playState == Animation.PlayState.Paused)
                return;
            for (var iIdx = 0; iIdx < this.lerpAnimators.length; iIdx++) {
                var animation = this.lerpAnimators[iIdx];
            }
            this.playState = Animation.PlayState.Paused;
        };
        Animation.prototype.stop = function () {
            if (this.playState == Animation.PlayState.Stopped)
                return;
            for (var iIdx = 0; iIdx < this.lerpAnimators.length; iIdx++) {
                var animation = this.lerpAnimators[iIdx];
            }
            this.playState = Animation.PlayState.Stopped;
        };
        Animation.prototype.on = function (event, func) {
            if (event == "update")
                this.onUpdate = func;
            if (event == "animation")
                this.onAnimation = func;
            if (event == "complete")
                this.onCompleted = func;
        };
        Animation.prototype.update = function (timeDelta) {
            if (this.playState != Animation.PlayState.Playing)
                return;
            for (var iIdx = 0; iIdx < this.lerpAnimators.length; iIdx++) {
                var animation = this.lerpAnimators[iIdx];
                animation.update(timeDelta);
            }
            if (this.onUpdate != null)
                this.onUpdate(timeDelta);
        };
        return Animation;
    }());
    RadJav.Animation = Animation;
    (function (Animation) {
        var Animator = (function () {
            function Animator(animation) {
                this.animation = animation;
                this.onAnimate = null;
            }
            Animator.prototype.animate = function (data, timeDelta) {
                if (this.onAnimate != null)
                    this.onAnimate(this.animation.attachedObject, data, timeDelta);
            };
            Animator.prototype.complete = function () {
                if (this.animation.onCompleted != null)
                    this.animation.onCompleted();
                this.animation.stop();
            };
            return Animator;
        }());
        Animation.Animator = Animator;
        var LerpAnimator = (function (_super) {
            __extends(LerpAnimator, _super);
            function LerpAnimator(animation, start, end, speed) {
                var _this = _super.call(this, animation) || this;
                _this.startPos = start;
                _this.endPos = end;
                _this.speed = speed;
                _this.startTime = 0;
                _this.timeElapsed = 0;
                return _this;
            }
            LerpAnimator.prototype.update = function (timeDelta) {
                var currentPos = null;
                this.timeElapsed += timeDelta;
                var timeMoved = ((this.timeElapsed - this.startTime) / this.speed);
                currentPos = RadJav.Vector3.lerp(this.startPos, this.endPos, Math.clamp(timeMoved, 0, 1));
                this.animate(currentPos, timeDelta);
                if (currentPos.distance(this.endPos) == 0)
                    this.complete();
            };
            return LerpAnimator;
        }(Animator));
        Animation.LerpAnimator = LerpAnimator;
        var PlayState = (function () {
            function PlayState() {
            }
            PlayState.Stopped = 1;
            PlayState.Playing = 2;
            PlayState.Paused = 3;
            return PlayState;
        }());
        Animation.PlayState = PlayState;
    })(Animation = RadJav.Animation || (RadJav.Animation = {}));
})(RadJav || (RadJav = {}));
//# sourceMappingURL=RadJav.Animation.js.map