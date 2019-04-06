/// <reference path="RadJav.d.ts" />
declare namespace RadJav {
    /** @class RadJav.Thread
    * A thread class.
    * Available on platforms: Windows,Linux,OSX,HTML5
    */
    class Thread {
        constructor();
        /** @property {Any} [_appObj=null]
        * The OS thread object.
        */
        _appObj: any;
        /** @property {Any} [_htmlObj=null]
        * The HTML5 thread object.
        */
        _htmlObj: any;
        /** @property {((...args: any[]) => any)} [_threadFunc=null]
        * The function to execute when the thread starts.
        */
        _threadFunc: ((...args: any[]) => any);
        /** @method start
        * Start the thread and execute the function in the event thread.
        */
        start(): void;
        /** @method close
        * Close the thread.
        */
        close(): void;
        /** @method on
        * Calls a function when an event is triggered.
        * @param {String} eventName The name of the event to trigger.
        * @param {Function} func The function to execute.
        */
        on(eventName: string, func: ((...args: any[]) => any)): any;
    }
}
