declare module phosphor.collections {
    module algorithm {
        /**
         * A generic index callback function.
         */
        interface ICallback<T, U> {
            (value: T, index: number): U;
        }
        /**
         * A boolean predicate function.
         */
        interface IPredicate<T> {
            (value: T, index: number): boolean;
        }
        /**
         * A three-way comparison function.
         */
        interface IComparator<T, U> {
            (first: T, second: U): number;
        }
        /**
         * Find the index of the first occurrence of the given value.
         *
         * The `fromIndex` parameter controls the starting index of the search.
         * If the value is negative, it is offset from the end of the array. If
         * the adjusted value is still negative, it will be clamped to `0`. The
         * default index is `0`.
         *
         * The `wrap` parameter controls the search wrap-around. If true, the
         * search will wrap-around at the end of the array and continue until
         * reaching the element just before the starting element. The default
         * wrap value is `false`.
         *
         * Returns `-1` if the value is not found.
         */
        function indexOf<T>(array: T[], value: T, fromIndex?: number, wrap?: boolean): number;
        /**
         * Find the index of the last occurrence of the given value.
         *
         * The `fromIndex` parameter controls the starting index of the search.
         * If the value is negative, it is offset from the end of the array. If
         * the value is greater than the last index, it will be clamped to the
         * last index. The default index is `-1`.
         *
         * The `wrap` parameter controls the search wrap-around. If true, the
         * search will wrap-around at the front of the array and continue until
         * reaching the element just after the starting element. The default
         * wrap value is `false`.
         *
         * Returns `-1` if the value is not found.
         */
        function lastIndexOf<T>(array: T[], value: T, fromIndex?: number, wrap?: boolean): number;
        /**
         * Find the index of the first element which passes the test.
         *
         * The `fromIndex` parameter controls the starting index of the search.
         * If the value is negative, it is offset from the end of the array. If
         * the adjusted value is still negative, it will be clamped to `0`. The
         * default index is `0`.
         *
         * The `wrap` parameter controls the search wrap-around. If true, the
         * search will wrap-around at the end of the array and continue until
         * reaching the element just before the starting element. The default
         * wrap value is `false`.
         *
         * Returns `-1` if no element passes the test.
         */
        function findIndex<T>(array: T[], pred: IPredicate<T>, fromIndex?: number, wrap?: boolean): number;
        /**
         * Find the index of the last element which passes the test.
         *
         * The `fromIndex` parameter controls the starting index of the search.
         * If the value is negative, it is offset from the end of the array. If
         * the value is greater than the last index, it will be clamped to the
         * last index. The default index is `-1`.
         *
         * The `wrap` parameter controls the search wrap-around. If true, the
         * search will wrap-around at the front of the array and continue until
         * reaching the element just after the starting element. The default
         * wrap value is `false`.
         *
         * Returns `-1` if no element passes the test.
         */
        function findLastIndex<T>(array: T[], pred: IPredicate<T>, fromIndex?: number, wrap?: boolean): number;
        /**
         * Find the first element in the array which passes the given test.
         *
         * The `fromIndex` parameter controls the starting index of the search.
         * If the value is negative, it is offset from the end of the array. If
         * the adjusted value is still negative, it will be clamped to `0`. The
         * default index is `0`.
         *
         * The `wrap` parameter controls the search wrap-around. If true, the
         * search will wrap-around at the end of the array and continue until
         * reaching the element just before the starting element. The default
         * wrap value is `false`.
         *
         * Returns `undefined` if no element passes the test.
         */
        function find<T>(array: T[], pred: IPredicate<T>, fromIndex?: number, wrap?: boolean): T;
        /**
         * Find the last element in the array which passes the given test.
         *
         * The `fromIndex` parameter controls the starting index of the search.
         * If the value is negative, it is offset from the end of the array. If
         * the value is greater than the last index, it will be clamped to the
         * last index. The default index is `-1`.
         *
         * The `wrap` parameter controls the search wrap-around. If true, the
         * search will wrap-around at the front of the array and continue until
         * reaching the element just after the starting element. The default
         * wrap value is `false`.
         *
         * Returns `undefined` if no element passes the test.
         */
        function findLast<T>(array: T[], pred: IPredicate<T>, fromIndex?: number, wrap?: boolean): T;
        /**
         * Find the index of the first element which is not less than `value`.
         *
         * This function uses a binary search. It must be applied to a sorted
         * array in order for the results to be correct.
         *
         * Returns `array.length` if all elements are less than `value`.
         */
        function lowerBound<T, U>(array: T[], value: U, cmp: IComparator<T, U>): number;
        /**
         * Find the index of the first element which is greater than `value`.
         *
         * This function uses a binary search. It must be applied to a sorted
         * array in order for the results to be correct.
         *
         * Returns `array.length` if no element is greater than `value`.
         */
        function upperBound<T, U>(array: T[], value: U, cmp: IComparator<T, U>): number;
        /**
         * Find the index of the first element which is equal to `value`.
         *
         * This function uses a binary search. It must be applied to a sorted
         * array in order for the results to be correct.
         *
         * Returns `-1` if no matching value is found.
         */
        function findLowerIndex<T, U>(array: T[], value: U, cmp: IComparator<T, U>): number;
        /**
         * Find the index of the last element which is equal to `value`.
         *
         * This function uses a binary search. It must be applied to a sorted
         * array in order for the results to be correct.
         *
         * Returns `-1` if no matching value is found.
         */
        function findUpperIndex<T, U>(array: T[], value: U, cmp: IComparator<T, U>): number;
        /**
         * Find the first element which is equal to `value`.
         *
         * This function uses a binary search. It must be applied to a sorted
         * array in order for the results to be correct.
         *
         * Returns `undefined` if no matching value is found.
         */
        function findLower<T, U>(array: T[], value: U, cmp: IComparator<T, U>): T;
        /**
         * Find the index of the last element which is equal to `value`.
         *
         * This uses a binary search algorithm which must be applied to a
         * sorted array in order for the results to be correct.
         *
         * Returns `-1` if no matching value is found.
         */
        function findUpper<T, U>(array: T[], value: U, cmp: IComparator<T, U>): T;
        /**
         * Create a shallow copy of the given array.
         */
        function copy<T>(array: T[]): T[];
        /**
         * Insert an element at the given index.
         *
         * If `index` is negative, it will be offset from the end of the array.
         * If the adjusted value is still negative, it will be clamped to `0`.
         * If `index` is greater than `array.length`, it will be clamped to
         * `array.length`.
         *
         * Returns the index at which the element was inserted.
         */
        function insert<T>(array: T[], index: number, value: T): number;
        /**
         * Move an array element from one index to another.
         *
         * If `fromIndex` is negative, it will be offset from the end of the
         * array. If the adjusted value is out of range, `-1` will be returned.
         *
         * If `toIndex` is negative, it will be offset from the end of the
         * array. If the adjusted value is out of range, it will be clamped.
         *
         * Returns the final index of the moved element.
         */
        function move<T>(array: T[], fromIndex: number, toIndex: number): number;
        /**
         * Remove and return the element at the given index.
         *
         * If `index` is negative, it will be offset from the end of the array.
         *
         * Returns `undefined` if the index is out of range.
         */
        function removeAt<T>(array: T[], index: number): T;
        /**
         * Remove the first occurrence of the element and return its index.
         *
         * Returns the `-1` if the element is not in the array.
         */
        function remove<T>(array: T[], value: T): number;
    }
}

declare module phosphor.collections {
    import ICallback = algorithm.ICallback;
    import IPredicate = algorithm.IPredicate;
    /**
     * A circular buffer with a fixed maximum size.
     *
     * A circular buffer is a buffer with constant time access to its
     * elements and constant times inserts and deletes from the front
     * and back of the buffer. When the buffer reaches its maximum
     * size, newly added elements will overwrite existing elements.
     */
    class CircularBuffer<T> {
        /**
         * Construct a new circular buffer.
         */
        constructor(maxSize: number, items?: T[]);
        /**
         * The maximum size of the buffer.
         */
        maxSize: number;
        /**
         * The number of elements in the buffer.
         */
        size: number;
        /**
         * True if the buffer has elements, false otherwise.
         */
        empty: boolean;
        /**
         * The value at the front of the buffer.
         */
        front: T;
        /**
         * The value at the back of the buffer.
         */
        back: T;
        /**
         * Get the value at the given index.
         *
         * Returns `undefined` if the index is out of range.
         */
        get(index: number): T;
        /**
         * Set the value at the given index.
         *
         * Returns false if the index is out of range.
         */
        set(index: number, value: T): boolean;
        /**
         * Push a value onto the back of the buffer.
         *
         * If the buffer is full, the front element will be overwritten.
         */
        pushBack(value: T): void;
        /**
         * Push a value onto the front of the buffer.
         *
         * If the buffer is full, the back element will be overwritten.
         */
        pushFront(value: T): void;
        /**
         * Pop and return the value at the back of the buffer.
         */
        popBack(): T;
        /**
         * Pop and return the value at the front of the buffer.
         */
        popFront(): T;
        /**
         * Remove all values from the buffer.
         */
        clear(): void;
        /**
         * Create an array from the values in the buffer.
         */
        toArray(): T[];
        /**
         * Returns true if any value in the buffer passes the given test.
         */
        some(pred: IPredicate<T>): boolean;
        /**
         * Returns true if all values in the buffer pass the given test.
         */
        every(pred: IPredicate<T>): boolean;
        /**
         * Create an array of the values which pass the given test.
         */
        filter(pred: IPredicate<T>): T[];
        /**
         * Create an array of callback results for each value in the buffer.
         */
        map<U>(callback: ICallback<T, U>): U[];
        /**
         * Execute a callback for each element in buffer.
         *
         * Iteration will terminate if the callbacks returns a value other
         * than `undefined`. That value will be returned from this method.
         */
        forEach<U>(callback: ICallback<T, U>): U;
        /**
         * Get the value for the apparent index.
         *
         * The index is assumed to be in-range.
         */
        private _get(index);
        /**
         * Set the value for the apparent index.
         *
         * The index is assumed to be in-range.
         */
        private _set(index, value);
        /**
         * Clear and return the value at the apparent index.
         *
         * The index is assumed to be in-range.
         */
        private _rem(index);
        /**
         * Increment the offset by one.
         */
        private _increment();
        /**
         * Decrement the offset by one.
         */
        private _decrement();
        private _size;
        private _offset;
        private _array;
    }
}

declare module phosphor.collections {
    import ICallback = algorithm.ICallback;
    import IPredicate = algorithm.IPredicate;
    /**
     * A canonical singly linked FIFO queue.
     */
    class Queue<T> {
        /**
         * Construct a new queue.
         */
        constructor(items?: T[]);
        /**
         * The number of elements in the queue.
         */
        size: number;
        /**
         * True if the queue has elements, false otherwise.
         */
        empty: boolean;
        /**
         * The value at the front of the queue.
         */
        front: T;
        /**
         * The value at the back of the queue.
         */
        back: T;
        /**
         * Push a value onto the back of the queue.
         */
        pushBack(value: T): void;
        /**
         * Pop and return the value at the front of the queue.
         */
        popFront(): T;
        /**
         * Remove all values from the queue.
         */
        clear(): void;
        /**
         * Create an array from the values in the queue.
         */
        toArray(): T[];
        /**
         * Returns true if any value in the queue passes the given test.
         */
        some(pred: IPredicate<T>): boolean;
        /**
         * Returns true if all values in the queue pass the given test.
         */
        every(pred: IPredicate<T>): boolean;
        /**
         * Create an array of the values which pass the given test.
         */
        filter(pred: IPredicate<T>): T[];
        /**
         * Create an array of callback results for each value in the queue.
         */
        map<U>(callback: ICallback<T, U>): U[];
        /**
         * Execute a callback for each element in queue.
         *
         * Iteration will terminate if the callbacks returns a value other
         * than `undefined`. That value will be returned from this method.
         */
        forEach<U>(callback: ICallback<T, U>): U;
        private _size;
        private _front;
        private _back;
    }
}

declare module phosphor.core {
    /**
     * The base message object which can be sent to a message handler.
     */
    interface IMessage {
        /**
         * The type of the message.
         */
        type: string;
    }
}

declare module phosphor.core {
    /**
     * An object which filters messages sent to a message handler.
     */
    interface IMessageFilter {
        /**
         * Filter a message sent to a message handler.
         *
         * Returns true if the message should be filtered, false otherwise.
         */
        filterMessage(handler: IMessageHandler, msg: IMessage): boolean;
    }
}

declare module phosphor.core {
    import Queue = collections.Queue;
    /**
     * An object which processes messages.
     */
    interface IMessageHandler {
        /**
         * Process a message sent to the handler.
         */
        processMessage(msg: IMessage): void;
        /**
         * Compress a message posted to the handler.
         *
         * This optional method allows the handler to merge a posted message
         * with a message which is already pending. It should return true if
         * the message was compressed and should be dropped, or false if the
         * message should be enqueued for delivery as normal.
         */
        compressMessage?(msg: IMessage, pending: Queue<IMessage>): boolean;
    }
}

declare module phosphor.core {
    /**
     * A concrete implementation of IMessage.
     *
     * This may be subclassed to create complex message types.
     */
    class Message implements IMessage {
        /**
         * Construct a new message.
         */
        constructor(type: string);
        /**
         * The type of the message.
         */
        type: string;
        private _type;
    }
}

declare module phosphor.core {
    /**
     * Send a message to the message handler to process immediately.
     */
    function sendMessage(handler: IMessageHandler, msg: IMessage): void;
    /**
     * Post a message to the message handler to process in the future.
     */
    function postMessage(handler: IMessageHandler, msg: IMessage): void;
    /**
     * Test whether the message handler has pending messages.
     */
    function hasPendingMessages(handler: IMessageHandler): boolean;
    /**
     * Send the first pending message to the message handler.
     */
    function sendPendingMessage(handler: IMessageHandler): void;
    /**
     * Install a message filter for a message handler.
     *
     * A message filter is invoked before the message handler processes
     * the message. If the filter returns true from its `filterMessage`
     * method, processing of the message will stop immediately and no
     * other filters or the message handler will be invoked.
     *
     * The most recently installed filter is executed first.
     */
    function installMessageFilter(handler: IMessageHandler, filter: IMessageFilter): void;
    /**
     * Remove a message filter added for a message handler.
     *
     * It is safe to call this function while the filter is executing.
     *
     * If the filter is not installed, this is a no-op.
     */
    function removeMessageFilter(handler: IMessageHandler, filter: IMessageFilter): void;
    /**
     * Clear all message data associated with the message handler.
     *
     * This removes all pending messages and filters for the handler.
     */
    function clearMessageData(handler: IMessageHandler): void;
}

declare module phosphor.core {
    /**
     * An object used for loosely coupled inter-object communication.
     *
     * A signal is emitted by an object in response to some event. User
     * code may connect callback functions to the signal to be notified
     * when that event occurs.
     */
    class Signal<T, U> {
        /**
         * Construct a new signal.
         */
        constructor();
        /**
         * Connect a callback to the signal.
         *
         * If the callback is connected to the signal multiple times, it
         * will be invoked that many times when the signal is emitted.
         *
         * It is safe to connect the callback to the signal while the signal
         * is being emitted. The callback will not be invoked until the next
         * time the signal is emitted.
         */
        connect(callback: (sender: T, args: U) => void, thisArg?: any): void;
        /**
         * Disconnect a callback from the signal.
         *
         * This will remove all instances of the callback from the signal.
         * If no callback is provided, all callbacks will be disconnected.
         *
         * It is safe to disconnect a callback from the signal while the
         * signal is being emitted. The callback will not be invoked.
         */
        disconnect(callback?: (sender: T, args: U) => void, thisArg?: any): void;
        /**
         * Test whether a callback is connected to the signal.
         */
        isConnected(callback: (sender: T, args: U) => void, thisArg?: any): boolean;
        /**
         * Emit the signal and invoke its connected callbacks.
         *
         * Callbacks are invoked in the order in which they are connected.
         */
        emit(sender: T, args: U): void;
        private _callbacks;
    }
}

declare module phosphor.di {
    /**
     * A token object which holds compile-time type information.
     */
    interface IToken<T> {
        /**
         * A human readable name for the token.
         */
        name: string;
        /**
         * A hidden property which makes a token structurally unique.
         */
        __itoken_structural_property: any;
    }
    /**
     * Create a token with the given name.
     */
    function createToken<T>(name: string): IToken<T>;
}

declare module phosphor.di {
    /**
     * A lightweight dependency injection container.
     */
    class Container implements IContainer {
        /**
         * Construct a new container.
         */
        constructor();
        /**
         * Test whether a type is registered with the container.
         */
        isRegistered<T>(token: IToken<T>): boolean;
        /**
         * Register a type mapping with the container.
         *
         * An exception will be thrown if the type is already registered.
         *
         * The allowed lifetimes are:
         *
         *   'singleton' - Only a single instance of the type is ever
         *      created, and that instance is shared by all objects
         *      which have a dependency on the given type id.
         *
         *   'transient' - A new instance of the type is created each
         *      time the dependency is fullfilled for an object which
         *      has a dependency on the given type id.
         *
         *   'perresolve' - A single instance of the type is created
         *      each time the `resolve` method is called, and that
         *      instance is shared by all objects which are created
         *      during the same resolve pass and have a dependency
         *      on the given type id.
         *
         * The default lifetime is 'singleton'.
         */
        registerType<T>(token: IToken<T>, type: IInjectable<T>, lifetime?: string): void;
        /**
         * Register an instance mapping with the container.
         *
         * This is the same as a 'singleton' type registration, except
         * that the user creates the instance of the type beforehand.
         *
         * This will throw an exception if the token is already registered.
         */
        registerInstance<T>(token: IToken<T>, instance: T): void;
        /**
         * Resolve an instance for the given token or type.
         *
         * An error is thrown if no type mapping is registered for the
         * token or if the injection dependencies cannot be fulfilled.
         */
        resolve<T>(token: IToken<T> | IInjectable<T>): T;
        /**
         * Resolve an instance for the given token.
         *
         * An error is thrown if the token is not registered.
         */
        private _resolveToken<T>(token, key);
        /**
         * Resolve an instance of the given type.
         *
         * An error is thrown if the type dependencies cannot be fulfilled.
         */
        private _resolveType<T>(type, key);
        private _registry;
    }
}

declare module phosphor.di {
    /**
     * A class type which declares its injection dependencies.
     */
    interface IInjectable<T> {
        /**
         * The constructor signature for the class.
         */
        new (...args: any[]): T;
        /**
         * The type ids of the dependencies needed to instantiate the type.
         */
        $inject?: IToken<any>[];
    }
    /**
     * An object which manages dependency injection.
     */
    interface IContainer {
        /**
         * Test whether a type is registered with the container.
         */
        isRegistered<T>(token: IToken<T>): boolean;
        /**
         * Register a type mapping with the container.
         *
         * An exception will be thrown if the token is already registered.
         *
         * The allowed lifetimes are:
         *
         *   'singleton' - Only a single instance of the type is ever
         *      created, and that instance is shared by all objects
         *      which have a dependency on the given type id.
         *
         *   'transient' - A new instance of the type is created each
         *      time the dependency is fullfilled for an object which
         *      has a dependency on the given type id.
         *
         *   'perresolve' - A single instance of the type is created
         *      each time the `resolve` method is called, and that
         *      instance is shared by all objects which are created
         *      during the same resolve pass and have a dependency
         *      on the given type id.
         *
         * The default lifetime is 'singleton'.
         */
        registerType<T>(token: IToken<T>, type: IInjectable<T>, lifetime?: string): void;
        /**
         * Register an instance mapping with the container.
         *
         * This is the same as a 'singleton' type registration, except
         * that the user creates the instance of the type beforehand.
         *
         * This will throw an exception if the token is already registered.
         */
        registerInstance<T>(token: IToken<T>, instance: T): void;
        /**
         * Resolve an instance for the given token or type.
         *
         * An error is thrown if no type mapping is registered for the
         * token or if the injection dependencies cannot be fulfilled.
         */
        resolve<T>(token: IToken<T> | IInjectable<T>): T;
    }
    var IContainer: IToken<IContainer>;
}

declare module phosphor.utility {
    /**
     * The box sizing data for an HTML element.
     */
    interface IBoxSizing {
        /**
         * The minimum width, in pixels.
         */
        minWidth: number;
        /**
         * The minimum height, in pixels.
         */
        minHeight: number;
        /**
         * The maximum width, in pixels.
         */
        maxWidth: number;
        /**
         * The maximum height, in pixels.
         */
        maxHeight: number;
        /**
         * The top border width, in pixels.
         */
        borderTop: number;
        /**
         * The left border width, in pixels.
         */
        borderLeft: number;
        /**
         * The right border width, in pixels.
         */
        borderRight: number;
        /**
         * The bottom border width, in pixels.
         */
        borderBottom: number;
        /**
         * The top padding width, in pixels.
         */
        paddingTop: number;
        /**
         * The left padding width, in pixels.
         */
        paddingLeft: number;
        /**
         * The right padding width, in pixels.
         */
        paddingRight: number;
        /**
         * The bottom padding width, in pixels.
         */
        paddingBottom: number;
        /**
         * The sum of the vertical padding and border.
         */
        verticalSum: number;
        /**
         * The sum of the horizontal padding and border.
         */
        horizontalSum: number;
    }
    /**
     * Create a box sizing object for the given node.
     *
     * The values of the returned object are read only.
     */
    function createBoxSizing(node: HTMLElement): IBoxSizing;
}

declare module phosphor.utility {
    /**
     * Override the cursor for the entire document.
     *
     * Returns an IDisposable which will clear the override.
     */
    function overrideCursor(cursor: string): IDisposable;
}

declare module phosphor.utility {
    /**
     * An object which holds disposable resources.
     */
    interface IDisposable {
        /**
         * Dispose of the resources held by the object.
         *
         * It is not safe to use an object after it has been disposed.
         */
        dispose(): void;
    }
    /**
     * A concrete implementation of IDisposable.
     *
     * This will invoke a user provided callback when it is disposed.
     */
    class Disposable implements IDisposable {
        /**
         * Construct a new disposable.
         */
        constructor(callback: () => void);
        /**
         * Dispose the object and invoke the user provided callback.
         */
        dispose(): void;
        private _callback;
    }
}

declare module phosphor.utility {
    /**
     * A singleton frozen empty object.
     */
    var emptyObject: any;
    /**
     * A singleton frozen empty array.
     */
    var emptyArray: any[];
    /**
     * A singleton empty no-op function.
     */
    var emptyFunction: () => void;
}

declare module phosphor.utility {
    /**
     * Test whether a client position lies within a node.
     */
    function hitTest(node: HTMLElement, x: number, y: number): boolean;
}

declare module phosphor.utility {
    /**
     * A generic pair of values.
     */
    class Pair<T, U> {
        first: T;
        second: U;
        /**
         * Construct a new pair.
         */
        constructor(first: T, second: U);
    }
}

declare module phosphor.utility {
    /**
     * The position of a two dimensional object.
     */
    class Point {
        /**
         * A static zero point.
         */
        static Zero: Point;
        /**
         * A static infinite point.
         */
        static Infinite: Point;
        /**
         * Construct a new point.
         */
        constructor(x: number, y: number);
        /**
         * The X coordinate of the point.
         */
        x: number;
        /**
         * The Y coordinate of the point.
         */
        y: number;
        /**
         * Test whether the point is equivalent to another.
         */
        equals(other: Point): boolean;
        private _x;
        private _y;
    }
}

declare module phosphor.utility {
    /**
     * The position and size of a 2-dimensional object.
     */
    class Rect {
        /**
         * Construct a new rect.
         */
        constructor(x: number, y: number, width: number, height: number);
        /**
         * The X coordinate of the rect.
         *
         * This is equivalent to `left`.
         */
        x: number;
        /**
         * The Y coordinate of the rect.
         *
         * This is equivalent to `top`.
         */
        y: number;
        /**
         * The width of the rect.
         */
        width: number;
        /**
         * The height of the rect.
         */
        height: number;
        /**
         * The position of the rect.
         *
         * This is equivalent to `topLeft`.
         */
        pos: Point;
        /**
         * The size of the rect.
         */
        size: Size;
        /**
         * The top edge of the rect.
         *
         * This is equivalent to `y`.
         */
        top: number;
        /**
         * The left edge of the rect.
         *
         * This is equivalent to `x`.
         */
        left: number;
        /**
         * The right edge of the rect.
         *
         * This is equivalent to `x + width`.
         */
        right: number;
        /**
         * The bottom edge of the rect.
         *
         * This is equivalent to `y + height`.
         */
        bottom: number;
        /**
         * The position of the top left corner of the rect.
         *
         * This is equivalent to `pos`.
         */
        topLeft: Point;
        /**
         * The position of the top right corner of the rect.
         */
        topRight: Point;
        /**
         * The position bottom left corner of the rect.
         */
        bottomLeft: Point;
        /**
         * The position bottom right corner of the rect.
         */
        bottomRight: Point;
        /**
         * Test whether the rect is equivalent to another.
         */
        equals(other: Rect): boolean;
        private _x;
        private _y;
        private _width;
        private _height;
    }
}

declare module phosphor.utility {
    /**
     * The size of a 2-dimensional object.
     */
    class Size {
        /**
         * A static zero size.
         */
        static Zero: Size;
        /**
         * A static infinite size.
         */
        static Infinite: Size;
        /**
         * Construct a new size.
         */
        constructor(width: number, height: number);
        /**
         * The width of the size.
         */
        width: number;
        /**
         * The height of the size.
         */
        height: number;
        /**
         * Test whether the size is equivalent to another.
         */
        equals(other: Size): boolean;
        private _width;
        private _height;
    }
}

declare module phosphor.utility {
    /**
     * Get the currently visible viewport rect in page coordinates.
     */
    function clientViewportRect(): Rect;
}

declare module phosphor.virtualdom {
    /**
     * A typedef of the child types for an element factory.
     */
    type FactoryChildType = string | IElement;
    /**
     * A typedef for the factory child argument type.
     */
    type FactoryChildArgType = FactoryChildType | FactoryChildType[];
    /**
     * A factory function which creates a virtual element.
     */
    interface IFactory<T extends IData> {
        /**
         * Create a virtual element with the given children.
         */
        (...children: FactoryChildArgType[]): IElement;
        /**
         * Create a virtual element with the given data and children.
         */
        (data: T, ...children: FactoryChildArgType[]): IElement;
    }
    /**
     * Create a virtual element factory function for the given tag.
     *
     * This will typically be used to create an element factory for a user
     * defined component. The `virtualdom` module exports a `dom` object
     * which contains factories for the standard DOM elements.
     */
    function createFactory<T extends IData>(tag: string | IComponentClass<T>): IFactory<T>;
}

declare module phosphor.virtualdom {
    /**
     * The attributes available for all elements.
     */
    interface IElementAttributes extends IData {
        accessKey?: string;
        className?: string;
        contentEditable?: string;
        dataset?: any;
        dir?: string;
        draggable?: boolean;
        hidden?: any;
        id?: string;
        lang?: string;
        spellcheck?: boolean;
        style?: any;
        tabIndex?: number;
        title?: string;
        onabort?: (ev: UIEvent) => any;
        onbeforecopy?: (ev: DragEvent) => any;
        onbeforecut?: (ev: DragEvent) => any;
        onbeforepaste?: (ev: DragEvent) => any;
        onblur?: (ev: FocusEvent) => any;
        oncanplay?: (ev: Event) => any;
        oncanplaythrough?: (ev: Event) => any;
        onchange?: (ev: Event) => any;
        onclick?: (ev: MouseEvent) => any;
        oncontextmenu?: (ev: MouseEvent) => any;
        oncopy?: (ev: DragEvent) => any;
        oncuechange?: (ev: Event) => any;
        oncut?: (ev: DragEvent) => any;
        ondblclick?: (ev: MouseEvent) => any;
        ondrag?: (ev: DragEvent) => any;
        ondragend?: (ev: DragEvent) => any;
        ondragenter?: (ev: DragEvent) => any;
        ondragleave?: (ev: DragEvent) => any;
        ondragover?: (ev: DragEvent) => any;
        ondragstart?: (ev: DragEvent) => any;
        ondrop?: (ev: DragEvent) => any;
        ondurationchange?: (ev: Event) => any;
        onended?: (ev: Event) => any;
        onemptied?: (ev: Event) => any;
        onerror?: (ev: ErrorEvent) => any;
        onfocus?: (ev: FocusEvent) => any;
        onhelp?: (ev: Event) => any;
        oninput?: (ev: Event) => any;
        onkeydown?: (ev: KeyboardEvent) => any;
        onkeypress?: (ev: KeyboardEvent) => any;
        onkeyup?: (ev: KeyboardEvent) => any;
        onload?: (ev: Event) => any;
        onloadeddata?: (ev: Event) => any;
        onloadedmetadata?: (ev: Event) => any;
        onloadstart?: (ev: Event) => any;
        onmousedown?: (ev: MouseEvent) => any;
        onmouseenter?: (ev: MouseEvent) => any;
        onmouseleave?: (ev: MouseEvent) => any;
        onmousemove?: (ev: MouseEvent) => any;
        onmouseout?: (ev: MouseEvent) => any;
        onmouseover?: (ev: MouseEvent) => any;
        onmouseup?: (ev: MouseEvent) => any;
        onmousewheel?: (ev: MouseWheelEvent) => any;
        onpaste?: (ev: DragEvent) => any;
        onpause?: (ev: Event) => any;
        onplay?: (ev: Event) => any;
        onplaying?: (ev: Event) => any;
        onprogress?: (ev: ProgressEvent) => any;
        onratechange?: (ev: Event) => any;
        onreadystatechange?: (ev: Event) => any;
        onreset?: (ev: Event) => any;
        onscroll?: (ev: UIEvent) => any;
        onseeked?: (ev: Event) => any;
        onseeking?: (ev: Event) => any;
        onselect?: (ev: UIEvent) => any;
        onselectstart?: (ev: Event) => any;
        onstalled?: (ev: Event) => any;
        onsubmit?: (ev: Event) => any;
        onsuspend?: (ev: Event) => any;
        ontimeupdate?: (ev: Event) => any;
        onvolumechange?: (ev: Event) => any;
        onwaiting?: (ev: Event) => any;
    }
    /**
     * The attributes for <a> elements.
     */
    interface IAnchorAttributes extends IElementAttributes {
        download?: string;
        href?: string;
        hreflang?: string;
        media?: string;
        rel?: string;
        target?: string;
        type?: string;
    }
    /**
     * The attributes for <area> elements.
     */
    interface IAreaAttributes extends IElementAttributes {
        alt?: string;
        coords?: string;
        download?: string;
        href?: string;
        hreflang?: string;
        media?: string;
        rel?: string;
        shape?: string;
        target?: string;
        type?: string;
    }
    /**
     * The attributes for <button> elements.
     */
    interface IButtonAttributes extends IElementAttributes {
        autofocus?: boolean;
        disabled?: boolean;
        form?: string;
        formAction?: string;
        formEnctype?: string;
        formMethod?: string;
        formNoValidate?: boolean;
        formTarget?: string;
        name?: string;
        type?: string;
        value?: string;
    }
    /**
     * The attributes for <canvas> elements.
     */
    interface ICanvasAttributes extends IElementAttributes {
        width?: number;
        height?: number;
    }
    /**
     * The attributes for <data> elements.
     */
    interface IDataAttributes extends IElementAttributes {
        value?: string;
    }
    /**
     * The attributes for <embed> elements.
     */
    interface IEmbedAttributes extends IElementAttributes {
        height?: string;
        src?: string;
        type?: string;
        width?: string;
    }
    /**
     * The attributes for <fieldset> elements.
     */
    interface IFieldSetAttributes extends IElementAttributes {
        disabled?: boolean;
        form?: string;
        name?: string;
    }
    /**
     * The attributes for <form> elements.
     */
    interface IFormAttributes extends IElementAttributes {
        acceptCharset?: string;
        action?: string;
        autocomplete?: string;
        enctype?: string;
        method?: string;
        name?: string;
        noValidate?: boolean;
        target?: string;
    }
    /**
     * The attributes for <iframe> elements.
     */
    interface IIFrameAttributes extends IElementAttributes {
        allowFullscreen?: boolean;
        height?: string;
        name?: string;
        sandbox?: string;
        seamless?: boolean;
        src?: string;
        srcdoc?: string;
        width?: string;
    }
    /**
     * The attributes for <img> elements.
     */
    interface IImageAttributes extends IElementAttributes {
        alt?: string;
        crossOrigin?: string;
        height?: number;
        isMap?: boolean;
        src?: string;
        sizes?: string;
        srcset?: string;
        width?: number;
        useMap?: string;
    }
    /**
     * The attributes for <input> elements.
     */
    interface IInputAttributes extends IElementAttributes {
        accept?: string;
        alt?: string;
        autocomplete?: string;
        autofocus?: boolean;
        checked?: boolean;
        disabled?: boolean;
        form?: string;
        formAction?: string;
        formEnctype?: string;
        formMethod?: string;
        formNoValidate?: boolean;
        formTarget?: string;
        height?: string;
        inputMode?: string;
        list?: string;
        max?: string;
        maxLength?: number;
        min?: string;
        minLength?: number;
        multiple?: boolean;
        name?: string;
        pattern?: string;
        placeholder?: string;
        readOnly?: boolean;
        required?: boolean;
        size?: number;
        spellcheck?: boolean;
        src?: string;
        step?: string;
        type?: string;
        value?: string;
        width?: string;
    }
    /**
     * The attributes for <label> elements.
     */
    interface ILabelAttributes extends IElementAttributes {
        form?: string;
        htmlFor?: string;
    }
    /**
     * The attributes for <li> elements.
     */
    interface ILIAttributes extends IElementAttributes {
        value?: number;
    }
    /**
     * The attributes for <map> elements.
     */
    interface IMapAttributes extends IElementAttributes {
        name?: string;
    }
    /**
     * The attributes for <meter> elements.
     */
    interface IMeterAttributes extends IElementAttributes {
        high?: number;
        low?: number;
        max?: number;
        min?: number;
        optimum?: number;
        value?: number;
    }
    /**
     * The attributes for <audio> and <video> elements.
     */
    interface IMediaAttributes extends IElementAttributes {
        autoplay?: boolean;
        controls?: boolean;
        crossOrigin?: string;
        loop?: boolean;
        mediaGroup?: string;
        muted?: boolean;
        preload?: string;
        src?: string;
        volume?: number;
    }
    /**
     * The attributes for <del> and <ins> elements.
     */
    interface IModAttributes extends IElementAttributes {
        cite?: string;
        dateTime?: string;
    }
    /**
     * The attributes for <object> elements.
     */
    interface IObjectAttributes extends IElementAttributes {
        data?: string;
        form?: string;
        height?: string;
        name?: string;
        type?: string;
        typeMustMatch?: boolean;
        useMap?: string;
        width?: string;
    }
    /**
     * The attributes for <ol> elements.
     */
    interface IOListAttributes extends IElementAttributes {
        reversed?: boolean;
        start?: number;
        type?: string;
    }
    /**
     * The attributes for <optgroup> elements.
     */
    interface IOptGroupAttributes extends IElementAttributes {
        disabled?: boolean;
        label?: string;
    }
    /**
     * The attributes for <option> elements.
     */
    interface IOptionAttributes extends IElementAttributes {
        disabled?: boolean;
        label?: string;
        selected?: boolean;
        value?: string;
    }
    /**
     * The attributes for <output> elements.
     */
    interface IOutputAttributes extends IElementAttributes {
        form?: string;
        htmlFor?: string;
        name?: string;
    }
    /**
     * The attributes for <param> elements.
     */
    interface IParamAttributes extends IElementAttributes {
        name?: string;
        value?: string;
    }
    /**
     * The attributes for <progress> elements.
     */
    interface IProgressAttributes extends IElementAttributes {
        max?: number;
        value?: number;
    }
    /**
     * The attributes for <blockquote> elements.
     */
    interface IQuoteAttributes extends IElementAttributes {
        cite?: string;
    }
    /**
     * The attributes for <select> elements.
     */
    interface ISelectAttributes extends IElementAttributes {
        autofocus?: boolean;
        disabled?: boolean;
        form?: string;
        multiple?: boolean;
        name?: string;
        required?: boolean;
        size?: number;
    }
    /**
     * The attributes for <source> elements.
     */
    interface ISourceAttributes extends IElementAttributes {
        media?: string;
        sizes?: string;
        src?: string;
        srcset?: string;
        type?: string;
    }
    /**
     * The attributes for <col> elements.
     */
    interface ITableColAttributes extends IElementAttributes {
        span?: number;
    }
    /**
     * The attributes for <td> elements.
     */
    interface ITableDataCellAttributes extends IElementAttributes {
        colSpan?: number;
        headers?: number;
        rowSpan?: number;
    }
    /**
     * The attributes for <th> elements.
     */
    interface ITableHeaderCellAttributes extends IElementAttributes {
        colSpan?: number;
        headers?: string;
        rowSpan?: number;
        scope?: string;
        sorted?: string;
    }
    /**
     * The attributes for <textarea> elements.
     */
    interface ITextAreaAttributes extends IElementAttributes {
        autocomplete?: string;
        autofocus?: boolean;
        cols?: number;
        dirName?: string;
        disabled?: boolean;
        form?: string;
        inputMode?: string;
        maxLength?: number;
        minLength?: number;
        name?: string;
        placeholder?: string;
        readOnly?: boolean;
        required?: boolean;
        rows?: number;
        wrap?: string;
    }
    /**
     * The attributes for <time> elements.
     */
    interface ITimeAttributes extends IElementAttributes {
        dateTime?: string;
    }
    /**
     * The attributes for <track> elements.
     */
    interface ITrackAttributes extends IElementAttributes {
        default?: boolean;
        kind?: string;
        label?: string;
        src?: string;
        srclang?: string;
    }
    /**
     * The attributes for <video> elements.
     */
    interface IVideoAttributes extends IMediaAttributes {
        height?: number;
        poster?: string;
        width?: number;
    }
    /**
     * The virtual dom factory functions.
     */
    var dom: {
        a: IFactory<IAnchorAttributes>;
        abbr: IFactory<IElementAttributes>;
        address: IFactory<IElementAttributes>;
        area: IFactory<IAreaAttributes>;
        article: IFactory<IElementAttributes>;
        aside: IFactory<IElementAttributes>;
        audio: IFactory<IMediaAttributes>;
        b: IFactory<IElementAttributes>;
        bdi: IFactory<IElementAttributes>;
        bdo: IFactory<IElementAttributes>;
        blockquote: IFactory<IQuoteAttributes>;
        br: IFactory<IElementAttributes>;
        button: IFactory<IButtonAttributes>;
        canvas: IFactory<ICanvasAttributes>;
        caption: IFactory<IElementAttributes>;
        cite: IFactory<IElementAttributes>;
        code: IFactory<IElementAttributes>;
        col: IFactory<ITableColAttributes>;
        colgroup: IFactory<ITableColAttributes>;
        data: IFactory<IDataAttributes>;
        datalist: IFactory<IElementAttributes>;
        dd: IFactory<IElementAttributes>;
        del: IFactory<IModAttributes>;
        dfn: IFactory<IElementAttributes>;
        div: IFactory<IElementAttributes>;
        dl: IFactory<IElementAttributes>;
        dt: IFactory<IElementAttributes>;
        em: IFactory<IElementAttributes>;
        embed: IFactory<IEmbedAttributes>;
        fieldset: IFactory<IFieldSetAttributes>;
        figcaption: IFactory<IElementAttributes>;
        figure: IFactory<IElementAttributes>;
        footer: IFactory<IElementAttributes>;
        form: IFactory<IFormAttributes>;
        h1: IFactory<IElementAttributes>;
        h2: IFactory<IElementAttributes>;
        h3: IFactory<IElementAttributes>;
        h4: IFactory<IElementAttributes>;
        h5: IFactory<IElementAttributes>;
        h6: IFactory<IElementAttributes>;
        header: IFactory<IElementAttributes>;
        hr: IFactory<IElementAttributes>;
        i: IFactory<IElementAttributes>;
        iframe: IFactory<IIFrameAttributes>;
        img: IFactory<IImageAttributes>;
        input: IFactory<IInputAttributes>;
        ins: IFactory<IModAttributes>;
        kbd: IFactory<IElementAttributes>;
        label: IFactory<ILabelAttributes>;
        legend: IFactory<IElementAttributes>;
        li: IFactory<ILIAttributes>;
        main: IFactory<IElementAttributes>;
        map: IFactory<IMapAttributes>;
        mark: IFactory<IElementAttributes>;
        meter: IFactory<IMeterAttributes>;
        nav: IFactory<IElementAttributes>;
        object: IFactory<IObjectAttributes>;
        ol: IFactory<IOListAttributes>;
        optgroup: IFactory<IOptGroupAttributes>;
        option: IFactory<IOptionAttributes>;
        output: IFactory<IOutputAttributes>;
        p: IFactory<IElementAttributes>;
        param: IFactory<IElementAttributes>;
        pre: IFactory<IElementAttributes>;
        progress: IFactory<IProgressAttributes>;
        q: IFactory<IElementAttributes>;
        rp: IFactory<IElementAttributes>;
        rt: IFactory<IElementAttributes>;
        ruby: IFactory<IElementAttributes>;
        s: IFactory<IElementAttributes>;
        samp: IFactory<IElementAttributes>;
        section: IFactory<IElementAttributes>;
        select: IFactory<ISelectAttributes>;
        small: IFactory<IElementAttributes>;
        source: IFactory<ISourceAttributes>;
        span: IFactory<IElementAttributes>;
        strong: IFactory<IElementAttributes>;
        sub: IFactory<IElementAttributes>;
        summary: IFactory<IElementAttributes>;
        sup: IFactory<IElementAttributes>;
        table: IFactory<IElementAttributes>;
        tbody: IFactory<IElementAttributes>;
        td: IFactory<ITableDataCellAttributes>;
        textarea: IFactory<ITextAreaAttributes>;
        tfoot: IFactory<IElementAttributes>;
        th: IFactory<ITableHeaderCellAttributes>;
        thead: IFactory<IElementAttributes>;
        time: IFactory<ITimeAttributes>;
        title: IFactory<IElementAttributes>;
        tr: IFactory<IElementAttributes>;
        track: IFactory<ITrackAttributes>;
        u: IFactory<IElementAttributes>;
        ul: IFactory<IElementAttributes>;
        var: IFactory<IElementAttributes>;
        video: IFactory<IVideoAttributes>;
        wbr: IFactory<IElementAttributes>;
    };
}

declare module phosphor.virtualdom {
    import IDisposable = utility.IDisposable;
    /**
     * An object which manages its own node in a virtual DOM tree.
     */
    interface IComponent<T extends IData> extends IDisposable {
        /**
         * The DOM node for the component.
         *
         * The component should render its content using this node as a host.
         */
        node: HTMLElement;
        /**
         * Initialize the component with new data and children.
         *
         * This is called whenever the component is rendered by its parent.
         *
         * A component is resposible for updating the content of its node.
         */
        init(data: T, children: IElement[]): void;
    }
    /**
     * A component class type.
     */
    interface IComponentClass<T extends IData> {
        /**
         * Construct a new component.
         */
        new (): IComponent<T>;
    }
}

declare module phosphor.virtualdom {
    /**
     * A base data object for a virtual element.
     */
    interface IData {
        /**
         * The key id for the element.
         *
         * If an element is given a key id, the generated node will not be
         * recreated during a rendering update if it moves in the render
         * tree provided the type of the node does not change.
         */
        key?: string;
        /**
         * The ref id for the element.
         *
         * If an element is given a ref id, the generated node or component
         * will be added to the ref mapping created by the renderer.
         */
        ref?: string;
    }
}

declare module phosphor.virtualdom {
    /**
     * An enum of supported virtual element types.
     */
    enum ElementType {
        /**
         * The element represents a text node.
         */
        Text = 0,
        /**
         * The element represents an HTMLElement node.
         */
        Node = 1,
        /**
         * The element represents a component.
         */
        Component = 2,
    }
    /**
     * An object which represents a node or component in virtual DOM tree.
     *
     * User code will typically create an element indirectly by calling an
     * element factory function. The framework provides default factories
     * for all standard DOM nodes, and new factories may be created with
     * the `createFactory` function.
     *
     * An element *must* be treated as immutable. Mutating element state
     * will lead to undefined rendering behavior.
     */
    interface IElement {
        /**
         * The type of the element.
         */
        type: ElementType;
        /**
         * The tag for the element.
         *
         * The interpretation of the tag depends on the element type:
         *   Text - the text content
         *   Node - the node tag name
         *   Component - the component constructor
         */
        tag: string | IComponentClass<any>;
        /**
         * The data object for the element.
         *
         * The interpretation of the data depends on the element type:
         *   Text - an empty object
         *   Node - the node attributes object
         *   Component - the component data object
         */
        data: IData;
        /**
         * The array of child elements.
         */
        children: IElement[];
        /**
         * A prototype property used to quickly type-check an element.
         */
        __isElement: boolean;
    }
}

declare module phosphor.virtualdom {
    /**
     * Render virtual content into a host node.
     *
     * This renders the delta from the previous rendering. It assumes that
     * the contents of the host node are not manipulated by external code.
     * Modifying the host node will result in undefined rendering behavior.
     *
     * Returns an object which maps ref names to nodes and components.
     */
    function render(content: IElement | IElement[], host: HTMLElement): any;
}

declare module phosphor.components {
    import IComponent = virtualdom.IComponent;
    import IElement = virtualdom.IElement;
    import IData = virtualdom.IData;
    /**
     * A concrete base implementation of IComponent.
     *
     * This class should be used by subclasses that want to manage their
     * own DOM content outside the virtual DOM, but still be embeddable
     * inside a virtual DOM hierarchy.
     */
    class BaseComponent<T extends IData> implements IComponent<T> {
        /**
         * The tag name used to create the component's DOM node.
         *
         * A subclass may redefine this property.
         */
        static tagName: string;
        /**
         * The initial class name for the component's DOM node.
         *
         * A subclass may redefine this property.
         */
        static className: string;
        /**
         * Construct a new base component.
         */
        constructor();
        /**
         * Dispose of the resources held by the component.
         */
        dispose(): void;
        /**
         * Get the DOM node for the component.
         */
        node: HTMLElement;
        /**
         * Get the current data object for the component.
         */
        data: T;
        /**
         * Get the current children for the component.
         */
        children: IElement[];
        /**
         * Initialize the component with new data and children.
         *
         * This is called whenever the component is rendered by its parent.
         */
        init(data: T, children: IElement[]): void;
        private _node;
        private _data;
        private _children;
    }
}

declare module phosphor.components {
    import IElement = virtualdom.IElement;
    import IData = virtualdom.IData;
    /**
     * A concrete implementation of IComponent with virtual DOM rendering.
     *
     * User code should subclass this class to create a custom component.
     * The subclasses should reimplement the `render` method to generate
     * the virtual DOM content for the component.
     */
    class Component<T extends IData> extends BaseComponent<T> {
        /**
         * Dispose of the resources held by the component.
         */
        dispose(): void;
        /**
         * Get the refs mapping for the component.
         *
         * This is an object which maps a ref name to the corresponding node
         * or component instance created for the most recent rendering pass.
         */
        refs: any;
        /**
         * Initialize the component with new data and children.
         *
         * This is called whenever the component is rendered by its parent.
         *
         * The method will normally not be reimplemented by a subclass.
         */
        init(data: T, children: IElement[]): void;
        /**
         * Create the virtual content for the component.
         *
         * The rendered content is used to populate the component's node.
         *
         * This should be reimplemented by a subclass.
         */
        render(): IElement | IElement[];
        /**
         * Schedule a rendering update for the component.
         *
         * This should be called whenever the internal state of the component
         * has changed such that it requires the component to be re-rendered,
         * or when external code requires the component to be refreshed.
         *
         * If the 'immediate' flag is false (the default) the update will be
         * scheduled for the next cycle of the event loop. If the flag is set
         * to true, the component will be updated immediately.
         *
         * Multiple pending requests are collapsed into a single update.
         */
        update(immediate?: boolean): void;
        /**
         * A method invoked immediately before the component is rendered.
         *
         * The default implementation is a no-op.
         */
        protected beforeRender(): void;
        /**
         * A method invoked immediately after the component is rendered.
         *
         * The default implementation is a no-op.
         */
        protected afterRender(): void;
        /**
         * Test whether the component should be updated.
         *
         * This method is invoked when the component is initialized with new
         * data and children. It should return true if the component should
         * be updated, or false if the values do not cause a visual change.
         *
         * Determining whether a component should update is error prone and
         * can be just as expensive as performing the virtual DOM diff, so
         * this should only be reimplemented if performance is a problem.
         *
         * The default implementation of this method always returns true.
         */
        protected shouldUpdate(data: T, children: IElement[]): boolean;
        /**
         * Perform an immediate rendering of the component.
         */
        private _render();
        /**
         * Clear the pending animation frame.
         */
        private _cancelFrame();
        private _frameId;
        private _refs;
    }
}

declare module phosphor.components {
    import IData = virtualdom.IData;
    import IElement = virtualdom.IElement;
    /**
     * The data object for a code mirror component.
     */
    interface ICodeMirrorData extends IData {
        config: CodeMirror.EditorConfiguration;
    }
    /**
     * A component which hosts a CodeMirror editor.
     */
    class CodeMirrorComponent extends BaseComponent<ICodeMirrorData> {
        /**
         * The default class name for a code mirror component.
         */
        static className: string;
        /**
         * Dispose of the resources held by the component.
         */
        dispose(): void;
        /**
         * Initialize the component with new data and children.
         */
        init(data: ICodeMirrorData, children: IElement[]): void;
        /**
         * Get the code mirror editor for the component.
         *
         * This component does not attempt to wrap the extensive code mirror
         * api. User code should interact with the editor object directly.
         */
        editor: CodeMirror.Editor;
        /**
         * Create the editor for the component.
         *
         * This can be reimplemented by subclasses which require custom
         * creation of the editor instance. The default implementation
         * assumes `CodeMirror` is available in the global scope.
         */
        protected createEditor(): CodeMirror.Editor;
        private _editor;
    }
    /**
     * The default virtual element factory for the CodeMirrorComponent.
     */
    var CodeMirrorFactory: virtualdom.IFactory<ICodeMirrorData>;
}

declare module phosphor.widgets {
    /**
     * An enum of alignment bit flags.
     */
    enum Alignment {
        /**
         * Align with the left edge.
         */
        Left = 1,
        /**
         * Align with the right edge.
         */
        Right = 2,
        /**
         * Align with the horizontal center.
         */
        HorizontalCenter = 4,
        /**
         * Align with the top edge.
         */
        Top = 16,
        /**
         * Align with the bottom edge.
         */
        Bottom = 32,
        /**
         * Align with the vertical center.
         */
        VerticalCenter = 64,
        /**
         * Align with the horizontal and vertical center.
         */
        Center,
        /**
         * A mask of horizontal alignment values.
         */
        Horizontal_Mask,
        /**
         * A mask of vertical alignment values.
         */
        Vertical_Mask,
    }
}

declare module phosphor.widgets {
    import Message = core.Message;
    /**
     * A class for messages related to child widgets.
     */
    class ChildMessage extends Message {
        /**
         * Construct a new child message.
         */
        constructor(type: string, child: Widget);
        /**
         * The child widget for the message.
         */
        child: Widget;
        private _child;
    }
}

declare module phosphor.widgets {
    /**
     * An enum of layout directions.
     */
    enum Direction {
        /**
         * Left to right direction.
         */
        LeftToRight = 0,
        /**
         * Right to left direction.
         */
        RightToLeft = 1,
        /**
         * Top to bottom direction.
         */
        TopToBottom = 2,
        /**
         * Bottom to top direction.
         */
        BottomToTop = 3,
    }
}

declare module phosphor.widgets {
    /**
     * An enum of docking modes for a dock area.
     */
    enum DockMode {
        /**
         * Insert the widget at the top of the dock area.
         */
        Top = 0,
        /**
         * Insert the widget at the left of the dock area.
         */
        Left = 1,
        /**
         * Insert the widget at the right of the dock area.
         */
        Right = 2,
        /**
         * Insert the widget at the bottom of the dock area.
         */
        Bottom = 3,
        /**
         * Insert the widget as a new split item above the reference.
         */
        SplitTop = 4,
        /**
         * Insert the widget as a new split item to the left of the reference.
         */
        SplitLeft = 5,
        /**
         * Insert the widget as a new split item to the right of the reference.
         */
        SplitRight = 6,
        /**
         * Insert the widget as a new split item below the reference.
         */
        SplitBottom = 7,
        /**
         * Insert the widget as a new tab before the reference.
         */
        TabBefore = 8,
        /**
         * Insert the widget as a new tab after the reference.
         */
        TabAfter = 9,
    }
}

declare module phosphor.widgets {
    /**
     * An object which can be used as a tab in a tab bar.
     */
    interface ITab {
        /**
         * The text for the tab.
         */
        text: string;
        /**
         * Whether the tab is currently selected.
         */
        selected: boolean;
        /**
         * Whether the tab is closable.
         */
        closable: boolean;
        /**
         * The DOM node for the tab.
         */
        node: HTMLElement;
        /**
         * The DOM node for the close icon, if available.
         */
        closeIconNode: HTMLElement;
    }
}

declare module phosphor.widgets {
    import Size = utility.Size;
    /**
     * An object which manages an item in a layout.
     */
    interface ILayoutItem {
        /**
         * Test whether the item manages a widget.
         */
        isWidget: boolean;
        /**
         * Test whether the item manages empty space.
         */
        isSpacer: boolean;
        /**
         * Test whether the item should be treated as hidden.
         */
        isHidden: boolean;
        /**
         * The widget the item manages, if any.
         */
        widget: Widget;
        /**
         * The alignment for the item in its layout cell.
         */
        alignment: Alignment;
        /**
         * Test whether the item should be expanded horizontally.
         *
         * If this is true, the item will get as much space as possible
         * in the horizontal direction up to its maximum size.
         */
        expandHorizontal: boolean;
        /**
         * Test Whether the item should be expanded vertically.
         *
         * If this is true, the item will get as much space as possible
         * in the vertical direction up to its maximum size.
         */
        expandVertical: boolean;
        /**
         * Invalidate the cached data for the item.
         */
        invalidate(): void;
        /**
         * Compute the preferred size of the item.
         */
        sizeHint(): Size;
        /**
         * Compute the minimum allowed size of the item.
         */
        minSize(): Size;
        /**
         * Compute the maximum allowed size of the item.
         */
        maxSize(): Size;
        /**
         * Set the geometry of the item using the given values.
         */
        setGeometry(x: number, y: number, width: number, height: number): void;
    }
}

declare module phosphor.widgets {
    /**
     * A widget which owns and manages its own tab.
     */
    interface ITabbable extends Widget {
        /**
         * The tab associated with the widget.
         */
        tab: ITab;
    }
}

declare module phosphor.widgets {
    import Message = core.Message;
    /**
     * A message class for 'move' messages.
     */
    class MoveMessage extends Message {
        /**
         * Construct a new move message.
         */
        constructor(oldX: number, oldY: number, x: number, y: number);
        /**
         * The previous X coordinate of the widget.
         */
        oldX: number;
        /**
         * The previous Y coordinate of the widget.
         */
        oldY: number;
        /**
         * The current X coordinate of the widget.
         */
        x: number;
        /**
         * The current Y coordinate of the widget.
         */
        y: number;
        /**
         * The change in X coordinate of the widget.
         */
        deltaX: number;
        /**
         * The change in Y coordinate of the widget.
         */
        deltaY: number;
        private _oldX;
        private _oldY;
        private _x;
        private _y;
    }
}

declare module phosphor.widgets {
    /**
     * An enum of layout orientations.
     */
    enum Orientation {
        /**
         * Horizontal orientation.
         */
        Horizontal = 0,
        /**
         * Vertical orientation.
         */
        Vertical = 1,
    }
}

declare module phosphor.widgets {
    import Message = core.Message;
    /**
     * A message class for 'resize' messages.
     */
    class ResizeMessage extends Message {
        /**
         * Construct a new resize message.
         */
        constructor(oldWidth: number, oldHeight: number, width: number, height: number);
        /**
         * The previous width of the widget.
         */
        oldWidth: number;
        /**
         * The previous height of the widget.
         */
        oldHeight: number;
        /**
         * The current width of the widget.
         */
        width: number;
        /**
         * The current height of the widget.
         */
        height: number;
        /**
         * The change in width of the widget.
         */
        deltaWidth: number;
        /**
         * The change in height of the widget.
         */
        deltaHeight: number;
        private _oldWidth;
        private _oldHeight;
        private _width;
        private _height;
    }
}

declare module phosphor.widgets {
    /**
     * An enum of size policy values.
     *
     * A size policy controls how layouts interpret a widget's `sizeHint`.
     */
    enum SizePolicy {
        /**
         * A policy indicating that the `sizeHint` is the only acceptable
         * size for the widget.
         */
        Fixed = 0,
        /**
         * A bit flag indicating the widget can grow beyond `sizeHint`.
         */
        GrowFlag = 1,
        /**
         * A bit flag indicating the widget can shrink below `sizeHint`.
         */
        ShrinkFlag = 2,
        /**
         * A bit flag indicating the widget should expand beyond `sizeHint`.
         */
        ExpandFlag = 4,
        /**
         * A bit flag indicating the `sizeHint` is ignored.
         */
        IgnoreFlag = 8,
        /**
         * A policy indicating that the `sizeHint` is a minimum, but the
         * widget can be expanded if needed and still be useful.
         */
        Minimum,
        /**
         * A policy indicating that the `sizeHint` is a maximum, but the
         * widget can be shrunk if needed and still be useful.
         */
        Maximum,
        /**
         * A policy indicating that the `sizeHint` is preferred, but the
         * widget can grow or shrink if needed and still be useful.
         *
         * This is the default size policy.
         */
        Preferred,
        /**
         * A policy indicating that `sizeHint` is reasonable, but the widget
         * can shrink if needed and still be useful. It can also make use of
         * extra space and should expand as much as possible.
         */
        Expanding,
        /**
         * A policy indicating that `sizeHint` is a minimum. The widget can
         * make use of extra space and should expand as much as possible.
         */
        MinimumExpanding,
        /**
         * A policy indicating the `sizeHint` is ignored.
         */
        Ignored,
    }
}

declare module phosphor.widgets {
    /**
     * An enum of widget bit flags.
     *
     * Widget flags are used to control various low-level behaviors of
     * a widget. They are typically not used directly by user code.
     */
    enum WidgetFlag {
        /**
         * The widget is attached to the DOM.
         */
        IsAttached = 1,
        /**
         * The widget is explicitly hidden.
         */
        IsHidden = 2,
        /**
         * The widget is visible.
         */
        IsVisible = 4,
        /**
         * The widget has been disposed.
         */
        IsDisposed = 8,
        /**
         * Changing the widget layout is disallowed.
         */
        DisallowLayoutChange = 16,
    }
}

declare module phosphor.widgets {
    import IMessage = core.IMessage;
    import IMessageHandler = core.IMessageHandler;
    import IMessageFilter = core.IMessageFilter;
    import IDisposable = utility.IDisposable;
    import Size = utility.Size;
    /**
     * The base class of phosphor layouts.
     *
     * The Layout class does not define an interface for adding widgets to
     * the layout. A subclass should define that API in a manner suitable
     * for its intended use.
     */
    class Layout implements IMessageFilter, IDisposable {
        /**
         * Construct a new layout.
         */
        constructor();
        /**
         * Dispose of the resources held by the layout.
         */
        dispose(): void;
        /**
         * Get the parent widget of the layout.
         */
        /**
         * Set the parent widget of the layout.
         *
         * The parent widget can only be set once, and is done automatically
         * when the layout is installed on a widget. This should not be set
         * directly by user code.
         */
        parent: Widget;
        /**
         * Get the number of layout items in the layout.
         *
         * This must be implemented by a subclass.
         */
        count: number;
        /**
         * Get the layout item at the given index.
         *
         * This must be implemented by a subclass.
         */
        itemAt(index: number): ILayoutItem;
        /**
         * Remove and return the layout item at the given index.
         *
         * This must be implemented by a subclass.
         */
        removeAt(index: number): ILayoutItem;
        /**
         * Compute the size hint for the layout.
         *
         * This must be implemented by a subclass.
         */
        sizeHint(): Size;
        /**
         * Compute the minimum required size for the layout.
         *
         * This must be implemented by a subclass.
         */
        minSize(): Size;
        /**
         * Compute the maximum allowed size for the layout.
         *
         * This must be implemented by a subclass.
         */
        maxSize(): Size;
        /**
         * Get the widget at the given index.
         *
         * Returns `undefined` if there is no widget at the given index.
         */
        widgetAt(index: number): Widget;
        /**
         * Get the index of the given widget or layout item.
         *
         * Returns -1 if the widget or item does not exist in the layout.
         */
        indexOf(value: Widget | ILayoutItem): number;
        /**
         * Remove an item from the layout and return its index.
         *
         * Returns -1 if the item is not in the layout.
         */
        remove(value: Widget | ILayoutItem): number;
        /**
         * Get the alignment for the given widget.
         *
         * Returns 0 if the widget is not found in the layout.
         */
        alignment(widget: Widget): Alignment;
        /**
         * Set the alignment for the given widget.
         *
         * Returns true if the alignment was updated, false otherwise.
         */
        setAlignment(widget: Widget, alignment: Alignment): boolean;
        /**
         * Invalidate the cached layout data and enqueue an update.
         *
         * This should be reimplemented by a subclass as needed.
         */
        invalidate(): void;
        /**
         * Update the layout for the parent widget immediately.
         *
         * This is typically called automatically at the appropriate times.
         */
        update(): void;
        /**
         * Filter a message sent to a message handler.
         *
         * This implements the `IMessageFilter` interface.
         */
        filterMessage(handler: IMessageHandler, msg: IMessage): boolean;
        /**
         * Process a message dispatched to the parent widget.
         *
         * Subclasses may reimplement this method as needed.
         */
        protected processParentMessage(msg: IMessage): void;
        /**
         * A method invoked when widget layout should be updated.
         *
         * The arguments are the content boundaries for the layout which are
         * already adjusted to account for the parent widget box sizing data.
         *
         * The default implementation of this method is a no-op.
         */
        protected layout(x: number, y: number, width: number, height: number): void;
        /**
         * Ensure a child widget is parented to the layout's parent.
         *
         * This should be called by a subclass when adding a widget.
         */
        protected ensureParent(widget: Widget): void;
        /**
         * Reparent the child widgets to the layout's parent.
         *
         * This is typically called automatically at the proper times.
         */
        protected reparentChildWidgets(): void;
        private _parent;
    }
}

declare module phosphor.widgets {
    /**
     * A sizer object for the `layoutCalc` function.
     *
     * Instances of this class are used internally by the panel layouts
     * to implement their layout logic. User code will not typically use
     * this class directly.
     */
    class LayoutSizer {
        /**
         * The size hint for the sizer.
         *
         * The sizer will be given this initial size subject to its bounds.
         */
        sizeHint: number;
        /**
         * The minimum size of the sizer.
         *
         * The sizer will never sized less than this value.
         *
         * Limits: [0, Infinity) && <= maxSize
         */
        minSize: number;
        /**
         * The maximum size of the sizer.
         *
         * The sizer will never be sized greater than this value.
         *
         * Limits: [0, Infinity] && >= minSize
         */
        maxSize: number;
        /**
         * The stretch factor for the sizer.
         *
         * This controls how much the sizer stretches relative to the other
         * sizers when layout space is distributed. A sizer with a stretch
         * factor of zero will only be resized after all stretch sizers
         * and expansive sizers have been sized to their limits.
         *
         * Limits: [0, Infinity)
         */
        stretch: number;
        /**
         * Whether the sizer should consume extra space if available.
         *
         * Expansive sizers will absorb any remaining space after all
         * stretch sizers have been resized to their limits.
         */
        expansive: boolean;
        /**
         * The computed size of the sizer.
         *
         * This value is the output of the algorithm.
         */
        size: number;
        /**
         * An internal storage property for the layout algorithm.
         */
        done: boolean;
    }
    /**
     * Distribute space among the given sizers.
     *
     * This distributes the given layout spacing among the sizers
     * according the following algorithm:
     *
     *   1) Initialize the sizers's size to its size hint and compute
     *      the sums for each of size hint, min size, and max size.
     *
     *   2) If the total size hint equals the layout space, return.
     *
     *   3) If the layout space is less than the total min size,
     *      set all sizers to their min size and return.
     *
     *   4) If the layout space is greater than the total max size,
     *      set all sizers to their max size and return.
     *
     *   5) If the layout space is less than the total size hint,
     *      distribute the negative delta as follows:
     *
     *     a) Shrink each sizer with a stretch factor greater than
     *        zero by an amount proportional to the sum of stretch
     *        factors and negative space. If the sizer reaches its
     *        minimum size, remove it and its stretch factor from
     *        the computation.
     *
     *     b) If after adjusting all stretch sizers there remains
     *        negative space, distribute it equally among sizers
     *        with a stretch factor of zero. If a sizer reaches
     *        its minimum size, remove it from the computation.
     *
     *   6) If the layout space is greater than the total size hint,
     *      distribute the positive delta as follows:
     *
     *     a) Expand each sizer with a stretch factor greater than
     *        zero by an amount proportional to the sum of stretch
     *        factors and positive space. If the sizer reaches its
     *        maximum size, remove it and its stretch factor from
     *        the computation.
     *
     *     b) If after adjusting all stretch sizers there remains
     *        positive space, distribute it equally among sizers
     *        with the `expansive` flag set. If a sizer reaches
     *        its maximum size, remove it from the computation.
     *
     *     c) If after adjusting all stretch and expansive sizers
     *        there remains positive space, distribute it equally
     *        among sizers with a stretch factor of zero. If a sizer
     *        reaches its maximum size, remove it from the computation.
     */
    function layoutCalc(sizers: LayoutSizer[], space: number): void;
}

declare module phosphor.widgets {
    import Size = utility.Size;
    /**
     * A layout item which manages empty space.
     *
     * User code will not typically use this class directly.
     */
    class SpacerItem implements ILayoutItem {
        /**
         * Construct a new spacer item.
         */
        constructor(width: number, height: number, hPolicy: SizePolicy, vPolicy: SizePolicy);
        /**
         * Test whether the item manages a widget.
         */
        isWidget: boolean;
        /**
         * Test whether the item manages empty space.
         */
        isSpacer: boolean;
        /**
         * Test whether the item should be treated as hidden.
         */
        isHidden: boolean;
        /**
         * The widget the item manages, if any.
         */
        widget: Widget;
        /**
         * Get the alignment for the item in its layout cell.
         */
        alignment: Alignment;
        /**
         * Test whether the item should be expanded horizontally.
         */
        expandHorizontal: boolean;
        /**
         * Test Whether the item should be expanded vertically.
         */
        expandVertical: boolean;
        /**
         * Change the sizing of the spacer item.
         *
         * The owner layout must be invalidated to reflect the change.
         */
        setSizing(width: number, height: number, hPolicy: SizePolicy, vPolicy: SizePolicy): void;
        /**
         * Transpose the effective orientation of the spacer item.
         */
        transpose(): void;
        /**
         * Invalidate the cached data for the item.
         */
        invalidate(): void;
        /**
         * Compute the preferred size of the item.
         */
        sizeHint(): Size;
        /**
         * Compute the minimum size of the item.
         */
        minSize(): Size;
        /**
         * Compute the maximum size of the item.
         */
        maxSize(): Size;
        /**
         * Set the geometry of the item using the given values.
         */
        setGeometry(x: number, y: number, width: number, height: number): void;
        private _size;
        private _sizePolicy;
    }
}

declare module phosphor.widgets {
    import Size = utility.Size;
    /**
     * A layout item which manages a widget.
     *
     * User code will not typically use this class directly.
     */
    class WidgetItem implements ILayoutItem {
        /**
         * Construct a new widget item.
         */
        constructor(widget: Widget, alignment?: Alignment);
        /**
         * Test whether the item manages a widget.
         */
        isWidget: boolean;
        /**
         * Test whether the item manages empty space.
         */
        isSpacer: boolean;
        /**
         * Test whether the item should be treated as hidden.
         */
        isHidden: boolean;
        /**
         * The widget the item manages, if any.
         */
        widget: Widget;
        /**
         * Get the alignment for the item in its layout cell.
         */
        /**
         * Set the alignment for the item in its layout cell.
         *
         * The owner layout must be invalidated to reflect the change.
         */
        alignment: Alignment;
        /**
         * Test whether the item should be expanded horizontally.
         */
        expandHorizontal: boolean;
        /**
         * Test Whether the item should be expanded vertically.
         */
        expandVertical: boolean;
        /**
         * Invalidate the cached data for the item.
         */
        invalidate(): void;
        /**
         * Compute the preferred size of the item.
         */
        sizeHint(): Size;
        /**
         * Compute the minimum size of the item.
         */
        minSize(): Size;
        /**
         * Compute the maximum size of the item.
         */
        maxSize(): Size;
        /**
         * Set the geometry of the item using the given values.
         */
        setGeometry(x: number, y: number, width: number, height: number): void;
        /**
         * Update the computed sizes for the widget item.
         */
        private _updateSizes();
        private _widget;
        private _alignment;
        private _origHint;
        private _sizeHint;
        private _minSize;
        private _maxSize;
    }
}

declare module phosphor.widgets {
    import Size = utility.Size;
    /**
     * A layout which arranges widgets in a row or column.
     */
    class BoxLayout extends Layout {
        /**
         * Construct a new box layout.
         */
        constructor(direction: Direction, spacing?: number);
        /**
         * Dispose of the resources held by the layout.
         */
        dispose(): void;
        /**
         * Get the layout direction for the box layout.
         */
        /**
         * Set the layout direction for the box layout.
         */
        direction: Direction;
        /**
         * Get the inter-element fixed spacing for the box layout.
         */
        /**
         * Set the inter-element fixed spacing for the box layout.
         */
        spacing: number;
        /**
         * Get the number of layout items in the layout.
         */
        count: number;
        /**
         * Get the layout item at the specified index.
         */
        itemAt(index: number): ILayoutItem;
        /**
         * Remove and return the layout item at the specified index.
         */
        removeAt(index: number): ILayoutItem;
        /**
         * Add a widget as the last item in the layout.
         *
         * If the widget already exists in the layout, it will be moved.
         *
         * Returns the index of the added widget.
         */
        addWidget(widget: Widget, stretch?: number, alignment?: Alignment): number;
        /**
         * Insert a widget into the layout at the given index.
         *
         * If the widget already exists in the layout, it will be moved.
         *
         * Returns the index of the added widget.
         */
        insertWidget(index: number, widget: Widget, stretch?: number, alignment?: Alignment): number;
        /**
         * Add a fixed amount of spacing to the end of the layout.
         *
         * Returns the index of the added space.
         */
        addSpacing(size: number): number;
        /**
         * Insert a fixed amount of spacing at the given index.
         *
         * Returns the index of the added space.
         */
        insertSpacing(index: number, size: number): number;
        /**
         * Add stretchable space to the end of the layout.
         *
         * Returns the index of the added space.
         */
        addStretch(stretch: number): number;
        /**
         * Insert stretchable space at the given index.
         */
        insertStretch(index: number, stretch: number): number;
        /**
         * Get the stretch factor for the given widget or index.
         *
         * Returns -1 if the given widget or index is invalid.
         */
        stretch(which: Widget | number): number;
        /**
         * Set the stretch factor for the given widget or index.
         *
         * Returns true if the stretch was updated, false otherwise.
         */
        setStretch(which: Widget | number, stretch: number): boolean;
        /**
         * Invalidate the cached layout data and enqueue an update.
         */
        invalidate(): void;
        /**
         * Compute the preferred size of the layout.
         */
        sizeHint(): Size;
        /**
         * Compute the minimum size of the layout.
         */
        minSize(): Size;
        /**
         * Compute the maximum size of the layout.
         */
        maxSize(): Size;
        /**
         * Update the geometry of the child layout items.
         */
        protected layout(x: number, y: number, width: number, height: number): void;
        /**
         * Initialize the layout items and internal sizes for the layout.
         */
        private _setupGeometry();
        /**
         * Insert a layout item at the given index.
         *
         * Returns the index of the added item.
         */
        private _insert(index, item, stretch);
        private _dirty;
        private _fixedSpace;
        private _spacing;
        private _lastSpaceIndex;
        private _direction;
        private _sizeHint;
        private _minSize;
        private _maxSize;
        private _items;
        private _sizers;
    }
}

declare module phosphor.widgets {
    /**
     * A class which manages a handle node for a split panel.
     */
    class SplitHandle {
        /**
         * Construct a new split handle.
         */
        constructor(orientation: Orientation);
        /**
         * Get whether the handle is hidden.
         */
        /**
         * Set whether the handle is hidden.
         */
        hidden: boolean;
        /**
         * Get the orientation of the handle.
         */
        /**
         * Set the orientation of the handle.
         */
        orientation: Orientation;
        /**
         * Get the DOM node for the handle.
         */
        node: HTMLElement;
        /**
         * Create the DOM node for the handle.
         */
        protected createNode(): HTMLElement;
        private _hidden;
        private _node;
        private _orientation;
    }
}

declare module phosphor.widgets {
    import Size = utility.Size;
    /**
     * A layout which arranges widgets in resizable sections.
     */
    class SplitLayout extends Layout {
        /**
         * Construct a new split layout.
         */
        constructor(orientation: Orientation);
        /**
         * Dispose of the resources held by the layout.
         */
        dispose(): void;
        /**
         * Get the orientation of the split layout.
         */
        /**
         * Set the orientation of the split layout.
         */
        orientation: Orientation;
        /**
         * Get the size of the split handles.
         */
        /**
         * Set the the size of the split handles.
         */
        handleSize: number;
        /**
         * Get the number of layout items in the layout.
         */
        count: number;
        /**
         * Get the normalized sizes of the items in the layout.
         */
        sizes(): number[];
        /**
         * Set the relative sizes for the split items.
         *
         * Extra values are ignored, too few will yield an undefined layout.
         */
        setSizes(sizes: number[]): void;
        /**
         * Get the splitter handle at the given index.
         */
        handleAt(index: number): SplitHandle;
        /**
         * Move the handle at the given index to the offset position.
         *
         * This will move the handle as close as possible to the given
         * offset position, without violating item size constraints.
         */
        moveHandle(index: number, pos: number): void;
        /**
         * Get the layout item at the specified index.
         */
        itemAt(index: number): ILayoutItem;
        /**
         * Remove and return the layout item at the specified index.
         */
        removeAt(index: number): ILayoutItem;
        /**
         * Add a widget as the last item in the layout.
         *
         * If the widget already exists in the layout, it will be moved.
         *
         * Returns the index of the added widget.
         */
        addWidget(widget: Widget, stretch?: number, alignment?: Alignment): number;
        /**
         * Insert a widget into the layout at the given index.
         *
         * If the widget already exists in the layout, it will be moved.
         *
         * Returns the index of the added widget.
         */
        insertWidget(index: number, widget: Widget, stretch?: number, alignment?: Alignment): number;
        /**
         * Get the stretch factor for the given widget or index.
         *
         * Returns -1 if the given widget or index is invalid.
         */
        stretch(which: Widget | number): number;
        /**
         * Set the stretch factor for the given widget or index.
         *
         * Returns true if the stretch was updated, false otherwise.
         */
        setStretch(which: Widget | number, stretch: number): boolean;
        /**
         * Invalidate the cached layout data and enqueue an update.
         */
        invalidate(): void;
        /**
         * Compute the preferred size of the layout.
         */
        sizeHint(): Size;
        /**
         * Compute the minimum size of the layout.
         */
        minSize(): Size;
        /**
         * Compute the maximum size of the layout.
         */
        maxSize(): Size;
        /**
         * Update the geometry of the child layout items.
         */
        protected layout(x: number, y: number, width: number, height: number): void;
        /**
         * Initialize the layout items and internal sizes for the layout.
         */
        private _setupGeometry();
        private _dirty;
        private _handleSize;
        private _fixedSpace;
        private _sizeHint;
        private _minSize;
        private _maxSize;
        private _orientation;
        private _items;
        private _sizers;
    }
    /**
     * A custom widget item used by a split layout.
     */
    class SplitItem extends WidgetItem {
        /**
         * Construct a new split item.
         */
        constructor(handle: SplitHandle, widget: Widget, alignment?: Alignment);
        /**
         * Get the split handle for the item.
         */
        handle: SplitHandle;
        private _handle;
    }
}

declare module phosphor.widgets {
    import Signal = core.Signal;
    import Pair = utility.Pair;
    import Size = utility.Size;
    /**
     * A layout in which only one widget is visible at a time.
     *
     * User code is responsible for managing the current layout index. The
     * index defaults to -1, which means no widget will be shown. The index
     * must be set to a valid index in order for a widget to be displayed.
     *
     * If the current widget is removed, the current index is reset to -1.
     *
     * This layout will typically be used in conjunction with another
     * widget, such as a tab bar, which manipulates the layout index.
     */
    class StackedLayout extends Layout {
        /**
         * A signal emitted when a widget is removed from the layout.
         */
        widgetRemoved: Signal<StackedLayout, Pair<number, Widget>>;
        /**
         * Construct a new stack layout.
         */
        constructor();
        /**
         * Dispose of the resources held by the layout.
         */
        dispose(): void;
        /**
         * Get the current index of the layout.
         */
        /**
         * Set the current index of the layout.
         */
        currentIndex: number;
        /**
         * Get the current widget in the layout.
         */
        /**
         * Set the current widget in the layout.
         */
        currentWidget: Widget;
        /**
         * Get the number of layout items in the layout.
         */
        count: number;
        /**
         * Get the layout item at the specified index.
         */
        itemAt(index: number): ILayoutItem;
        /**
         * Remove and return the layout item at the specified index.
         */
        removeAt(index: number): ILayoutItem;
        /**
         * Add a widget as the last item in the layout.
         *
         * If the widget already exists in the layout, it will be moved.
         *
         * Returns the index of the added widget.
         */
        addWidget(widget: Widget, alignment?: Alignment): number;
        /**
         * Insert a widget into the layout at the given index.
         *
         * If the widget already exists in the layout, it will be moved.
         *
         * Returns the index of the added widget.
         */
        insertWidget(index: number, widget: Widget, alignment?: Alignment): number;
        /**
         * Move a widget from one index to another.
         *
         * This method is more efficient for moving a widget than calling
         * `insertWidget` for an already added widget. It will not remove
         * the widget before moving it and will not emit `widgetRemoved`.
         *
         * Returns -1 if `fromIndex` is out of range.
         */
        moveWidget(fromIndex: number, toIndex: number): number;
        /**
         * Invalidate the cached layout data and enqueue an update.
         */
        invalidate(): void;
        /**
         * Compute the preferred size of the layout.
         */
        sizeHint(): Size;
        /**
         * Compute the minimum size of the layout.
         */
        minSize(): Size;
        /**
         * Compute the maximum size of the layout.
         */
        maxSize(): Size;
        /**
         * Update the geometry of the child layout items.
         */
        protected layout(x: number, y: number, width: number, height: number): void;
        /**
         * Initialize the layout items and internal sizes for the layout.
         */
        private _setupGeometry();
        private _dirty;
        private _sizeHint;
        private _minSize;
        private _maxSize;
        private _items;
        private _currentItem;
    }
}

declare module phosphor.widgets {
    import Queue = collections.Queue;
    import IMessage = core.IMessage;
    import IMessageHandler = core.IMessageHandler;
    import Signal = core.Signal;
    import IBoxSizing = utility.IBoxSizing;
    import IDisposable = utility.IDisposable;
    import Size = utility.Size;
    /**
     * The base class of the Phosphor widget hierarchy.
     *
     * A widget wraps an absolutely positioned DOM node. It can act as a
     * container for child widgets which can be arranged with a Phosphor
     * layout manager, or it can act as a leaf control which manipulates
     * its DOM node directly.
     *
     * A root widget (a widget with no parent) can be mounted anywhere
     * in the DOM by calling its `attach` method and passing the DOM
     * node which should be used as the parent of the widget's node.
     */
    class Widget implements IMessageHandler, IDisposable {
        /**
         * A signal emitted when the widget is disposed.
         */
        disposed: Signal<Widget, void>;
        /**
         * Construct a new widget.
         */
        constructor();
        /**
         * Dispose of the widget and its descendants.
         */
        dispose(): void;
        /**
         * Get the DOM node managed by the widget.
         */
        node: HTMLElement;
        /**
         * Get the X position set for the widget.
         */
        /**
         * Set the X position for the widget.
         *
         * This is equivalent to `move(x, this.y)`.
         */
        x: number;
        /**
         * Get the Y position set for the widget.
         */
        /**
         * Set the Y position for the widget.
         *
         * This is equivalent to `move(this.x, y)`.
         */
        y: number;
        /**
         * Get the width set for the widget.
         */
        /**
         * Set the width for the widget.
         *
         * This is equivalent to `resize(width, this.height)`.
         */
        width: number;
        /**
         * Get the height set for the widget.
         */
        /**
         * Set the height for the widget.
         *
         * This is equivalent to `resize(this.width, height)`.
         */
        height: number;
        /**
         * Get the horizontal size policy for the widget.
         */
        /**
         * Set the horizontal size policy for the widget.
         *
         * This is equivalent to `setSizePolicy(policy, this.verticalSizePolicy)`.
         */
        horizontalSizePolicy: SizePolicy;
        /**
         * Get the vertical size policy for the widget.
         */
        /**
         * Set the vertical size policy for the widget.
         *
         * This is equivalent to `setSizePolicy(this.horizontalPolicy, policy)`.
         */
        verticalSizePolicy: SizePolicy;
        /**
         * Get the CSS box sizing for the widget.
         *
         * This method computes the data once, then caches it. The cached
         * data can be cleared by calling the `invalidateBoxSizing` method.
         */
        boxSizing: IBoxSizing;
        /**
         * Test whether the widget's node is attached to the DOM.
         */
        isAttached: boolean;
        /**
         * Test whether the widget has been disposed.
         */
        isDisposed: boolean;
        /**
         * Test whether the widget is explicitly hidden.
         */
        isHidden: boolean;
        /**
         * Test whether the widget is visible.
         *
         * A widget is visible under the following conditions:
         *   - it is attached to the DOM
         *   - it is not explicitly hidden
         *   - it has no explicitly hidden ancestors
         */
        isVisible: boolean;
        /**
         * Get the layout manager attached to the widget.
         *
         * Returns null if the widget has no layout manager.
         */
        /**
         * Set the layout manager for the widget.
         *
         * A layout is single-use only. The current layout can be set to null
         * or to a new layout instance, but not to a layout which is already
         * installed on another widget.
         *
         * The current layout will be disposed and cannot be reused.
         */
        layout: Layout;
        /**
         * Get the parent of the widget.
         *
         * Returns null if the widget has no parent.
         */
        /**
         * Set the parent of the widget.
         *
         * Setting the parent to null will detach the widget from the DOM
         * and automatically remove it from the relevant layout manager.
         */
        parent: Widget;
        /**
         * Get the number of children in the widget.
         */
        childCount: number;
        /**
         * Get the child widget at the given index.
         *
         * Returns `undefined` if the index is out of range.
         */
        childAt(index: number): Widget;
        /**
         * Test whether the widget's DOM node has the given class name.
         */
        hasClass(name: string): boolean;
        /**
         * Add a class name to the widget's DOM node.
         */
        addClass(name: string): void;
        /**
         * Remove a class name from the widget's DOM node.
         */
        removeClass(name: string): void;
        /**
         * Test whether the given widget flag is set.
         */
        testFlag(flag: WidgetFlag): boolean;
        /**
         * Set the given widget flag.
         */
        setFlag(flag: WidgetFlag): void;
        /**
         * Clear the given widget flag.
         */
        clearFlag(flag: WidgetFlag): void;
        /**
         * Make the widget visible to its parent.
         *
         * If the widget is not explicitly hidden, this is a no-op.
         */
        show(): void;
        /**
         * Make the widget invisible to its parent.
         *
         * If the widget is already hidden, this is a no-op.
         */
        hide(): void;
        /**
         * Close the widget by sending it a 'close' message.
         *
         * Subclasses should reimplement `onClose` to perform custom actions.
         */
        close(): void;
        /**
         * Attach the widget's node to a host DOM element.
         *
         * The `fit` method can be called to resize the widget to fill its
         * host node. It should be called whenever the size of host node is
         * known to have changed.
         *
         * Only a root widget can be attached to a host node.
         */
        attach(host: HTMLElement): void;
        /**
         * Detach the widget's node from the DOM.
         *
         * Only a root widget can be detached from its host node.
         */
        detach(): void;
        /**
         * Resize the widget so that it fills its host node.
         *
         * Only a root widget can be fit to its host.
         *
         * If the size of the host node is known, it can be provided. This
         * will prevent a DOM geometry read and avoid a potential reflow.
         */
        fit(width?: number, height?: number, box?: IBoxSizing): void;
        /**
         * Calculate the preferred size for the widget.
         *
         * This is used by Phosphor's layout machinery to compute the natural
         * space required for the widget and its children. A subclass which
         * provides leaf content should reimplement this method.
         *
         * The default implementation of this method delegates to the layout
         * manager if installed, otherwise it returns a zero size.
         */
        sizeHint(): Size;
        /**
         * Calculate the preferred minimum size for the widget.
         *
         * This is used by Phosphor's layout machinery to compute the minimum
         * space required for the widget and its children. This is independent
         * of and subordinate to the minimum size specified in CSS. User code
         * will not typically interact with this method.
         *
         * The default implementation of this method delegates to the layout
         * manager if installed, otherwise it returns a zero size.
         */
        minSizeHint(): Size;
        /**
         * Calculate the preferred maximum size for the widget.
         *
         * This is used by Phosphor's layout machinery to compute the maximum
         * space allowed for the widget and its children. This is independent
         * of and subordinate to the maximum size specified in CSS. User code
         * will not typically interact with this method.
         *
         * The default implementation of this method delegates to the layout
         * manager if installed, otherwise it returns an infinite size.
         */
        maxSizeHint(): Size;
        /**
         * Invalidate the cached CSS box sizing for the widget.
         *
         * User code should invoke this method when it makes a change to the
         * node's style which changes its border, padding, or size limits.
         */
        invalidateBoxSizing(): void;
        /**
         * Notify the layout system that the widget's geometry is dirty.
         *
         * This is typically called automatically at the proper times, but
         * a custom leaf widget should call this method when its size hint
         * changes so that the ancestor layout will refresh.
         *
         * If the `force` flag is false and the widget is explicitly hidden,
         * this is a no-op. The geometry will update automatically when the
         * widget is made visible.
         */
        updateGeometry(force?: boolean): void;
        /**
         * Move the widget to the specified X-Y coordinate.
         */
        move(x: number, y: number): void;
        /**
         * Resize the widget to the specified width and height.
         */
        resize(width: number, height: number): void;
        /**
         * Set the position and size of the widget.
         *
         * The size is clipped to the limits specified by the node's style.
         *
         * This method will send 'move' and 'resize' messages to the widget if
         * the new geometry changes the position or size of the widget's node.
         */
        setGeometry(x: number, y: number, width: number, height: number): void;
        /**
         * Set the size policy for the widget.
         */
        setSizePolicy(horizontal: SizePolicy, vertical: SizePolicy): void;
        /**
         * Process a message sent to the widget.
         *
         * This implements the IMessageHandler interface.
         *
         * Subclasses may reimplement this method as needed.
         */
        processMessage(msg: IMessage): void;
        /**
         * Compress a message posted to the widget.
         *
         * This implements the IMessageHandler interface.
         *
         * Subclasses may reimplement this method as needed.
         */
        compressMessage(msg: IMessage, pending: Queue<IMessage>): boolean;
        /**
         * Create the DOM node for the widget.
         *
         * This can be reimplemented by subclasses as needed.
         *
         * The default implementation creates an empty div.
         */
        protected createNode(): HTMLElement;
        /**
         * A method invoked when a 'close' message is received.
         *
         * The default implementation sets the parent to null.
         */
        protected onClose(msg: IMessage): void;
        /**
         * A method invoked when a 'child-added' message is received.
         *
         * The default implementation appends the child node to the DOM.
         */
        protected onChildAdded(msg: ChildMessage): void;
        /**
         * A method invoked when a 'child-removed' message is received.
         *
         * The default implementation removes the child node from the DOM.
         */
        protected onChildRemoved(msg: ChildMessage): void;
        /**
         * A method invoked when a 'move' message is received.
         *
         * The default implementation is a no-op.
         */
        protected onMove(msg: MoveMessage): void;
        /**
         * A method invoked when a 'resize' message is received.
         *
         * The default implementation is a no-op.
         */
        protected onResize(msg: ResizeMessage): void;
        /**
         * A method invoked when a 'before-show' message is received.
         *
         * The default implementation is a no-op.
         */
        protected onBeforeShow(msg: IMessage): void;
        /**
         * A method invoked when an 'after-show' message is received.
         *
         * The default implementation is a no-op.
         */
        protected onAfterShow(msg: IMessage): void;
        /**
         * A method invoked when a 'before-hide' message is received.
         *
         * The default implementation is a no-op.
         */
        protected onBeforeHide(msg: IMessage): void;
        /**
         * A method invoked when an 'after-hide' message is received.
         *
         * The default implementation is a no-op.
         */
        protected onAfterHide(msg: IMessage): void;
        /**
         * A method invoked when a 'before-attach' message is received.
         *
         * The default implementation is a no-op.
         */
        protected onBeforeAttach(msg: IMessage): void;
        /**
         * A method invoked when an 'after-attach' message is received.
         *
         * The default implementation is a no-op.
         */
        protected onAfterAttach(msg: IMessage): void;
        /**
         * A method invoked when a 'before-detach' message is received.
         *
         * The default implementation is a no-op.
         */
        protected onBeforeDetach(msg: IMessage): void;
        /**
         * A method invoked when an 'after-detach' message is received.
         *
         * The default implementation is a no-op.
         */
        protected onAfterDetach(msg: IMessage): void;
        private _node;
        private _layout;
        private _parent;
        private _children;
        private _sizePolicy;
        private _boxSizing;
        private _x;
        private _y;
        private _width;
        private _height;
        private _flags;
    }
}

declare module phosphor.widgets {
    /**
     * A widget which delegates to a permanently installed layout.
     *
     * This is used as a base class for common panel widgets.
     */
    class Panel extends Widget {
        /**
         * Construct a new panel.
         */
        constructor(layout: Layout);
        /**
         * Get the number of items (widgets + spacers) in the panel.
         */
        count: number;
        /**
         * Get the index of the given widget.
         *
         * Returns -1 if the widget is not found.
         */
        indexOf(widget: Widget): number;
        /**
         * Get the widget at the given index.
         *
         * Returns `undefined` if there is no widget at the given index.
         */
        widgetAt(index: number): Widget;
        /**
         * Get the alignment for the given widget.
         *
         * Returns 0 if the widget is not found in the panel.
         */
        alignment(widget: Widget): Alignment;
        /**
         * Set the alignment for the given widget.
         *
         * Returns true if the alignment was updated, false otherwise.
         */
        setAlignment(widget: Widget, alignment: Alignment): boolean;
    }
}

declare module phosphor.widgets {
    /**
     * A panel which arranges its children in a row or column.
     */
    class BoxPanel extends Panel {
        /**
         * Construct a new box panel.
         */
        constructor(direction?: Direction, spacing?: number);
        /**
         * Get the layout direction for the panel.
         */
        /**
         * Set the layout direction for the panel.
         */
        direction: Direction;
        /**
         * Get the inter-element fixed spacing for the panel.
         */
        /**
         * Set the inter-element fixed spacing for the panel.
         */
        spacing: number;
        /**
         * Add a child widget to the end of the panel.
         *
         * If the widget already exists in the panel, it will be moved.
         *
         * Returns the index of the added widget.
         */
        addWidget(widget: Widget, stretch?: number, alignment?: Alignment): number;
        /**
         * Insert a child widget into the panel at the given index.
         *
         * If the widget already exists in the panel, it will be moved.
         *
         * Returns the index of the added widget.
         */
        insertWidget(index: number, widget: Widget, stretch?: number, alignment?: Alignment): number;
        /**
         * Add a fixed amount of spacing to the end of the panel.
         *
         * Returns the index of the added space.
         */
        addSpacing(size: number): number;
        /**
         * Insert a fixed amount of spacing at the given index.
         *
         * Returns the index of the added space.
         */
        insertSpacing(index: number, size: number): number;
        /**
         * Add stretchable space to the end of the panel.
         *
         * Returns the index of the added space.
         */
        addStretch(stretch: number): number;
        /**
         * Insert stretchable space at the given index.
         *
         * Returns the index of the added space.
         */
        insertStretch(index: number, stretch: number): number;
        /**
         * Get the stretch factor for the given widget or index.
         *
         * Returns -1 if the given widget or index is invalid.
         */
        stretch(which: Widget | number): number;
        /**
         * Set the stretch factor for the given widget or index.
         *
         * Returns true if the stretch was updated, false otherwise.
         */
        setStretch(which: Widget | number, stretch: number): boolean;
    }
}

declare module phosphor.widgets {
    import IMessage = core.IMessage;
    /**
     * A panel which arranges its children into resizable sections.
     */
    class SplitPanel extends Panel {
        /**
         * Construct a new split panel.
         */
        constructor(orientation?: Orientation);
        /**
         * Dispose of the resources held by the panel.
         */
        dispose(): void;
        /**
         * Get the orientation of the split panel.
         */
        /**
         * Set the orientation of the split panel.
         */
        orientation: Orientation;
        /**
         * Get the size of the split handles.
         */
        /**
         * Set the the size of the split handles.
         */
        handleSize: number;
        /**
         * Get the normalized sizes of the widgets in the split panel.
         */
        sizes(): number[];
        /**
         * Set the relative sizes for the split panel widgets.
         *
         * Extra values are ignored, too few will yield an undefined layout.
         */
        setSizes(sizes: number[]): void;
        /**
         * Add a child widget to the end of the split panel.
         *
         * If the widget already exists in the panel, it will be moved.
         *
         * Returns the index of the added widget.
         */
        addWidget(widget: Widget, stretch?: number, alignment?: Alignment): number;
        /**
         * Insert a child widget into the split panel at the given index.
         *
         * If the widget already exists in the panel, it will be moved.
         *
         * Returns the index of the added widget.
         */
        insertWidget(index: number, widget: Widget, stretch?: number, alignment?: Alignment): number;
        /**
         * Get the stretch factor for the given widget or index.
         *
         * Returns -1 if the given widget or index is invalid.
         */
        stretch(which: Widget | number): number;
        /**
         * Set the stretch factor for the given widget or index.
         *
         * Returns true if the stretch was updated, false otherwise.
         */
        setStretch(which: Widget | number, stretch: number): boolean;
        /**
         * A method invoked after the node is attached to the DOM.
         */
        protected onAfterAttach(msg: IMessage): void;
        /**
         * A method invoked after the node is detached from the DOM.
         */
        protected onAfterDetach(msg: IMessage): void;
        /**
         * Handle the DOM events for the split panel.
         */
        protected handleEvent(event: Event): void;
        /**
         * Handle the 'mousedown' event for the split panel.
         */
        private _evtMouseDown(event);
        /**
         * Handle the 'mouseup' event for the split panel.
         */
        private _evtMouseUp(event);
        /**
         * Handle the 'mousemove' event for the split panel.
         */
        private _evtMouseMove(event);
        /**
         * Find the index of the handle which contains a target element.
         */
        private _findHandle(target);
        /**
         * Release the mouse grab for the split panel.
         */
        private _releaseMouse();
        private _pressData;
    }
}

declare module phosphor.widgets {
    import Signal = core.Signal;
    import Pair = utility.Pair;
    /**
     * A panel where only one child widget is visible at a time.
     */
    class StackedPanel extends Panel {
        /**
         * A signal emitted when a widget is removed from the panel.
         */
        widgetRemoved: Signal<StackedPanel, Pair<number, Widget>>;
        /**
         * Construct a new stacked panel.
         */
        constructor();
        /**
         * Dispose of the resources held by the panel.
         */
        dispose(): void;
        /**
         * Get the current index of the panel.
         */
        /**
         * Set the current index of the panel.
         */
        currentIndex: number;
        /**
         * Get the current widget of the panel.
         */
        /**
         * Set the current widget of the panel.
         */
        currentWidget: Widget;
        /**
         * Add a child widget to the end of the panel.
         *
         * If the widget already exists in the panel, it will be moved.
         *
         * Returns the index of the added widget.
         */
        addWidget(widget: Widget, alignment?: Alignment): number;
        /**
         * Insert a child widget into the panel at the given index.
         *
         * If the widget already exists in the panel, it will be moved.
         *
         * Returns the index of the added widget.
         */
        insertWidget(index: number, widget: Widget, alignment?: Alignment): number;
        /**
         * Move a child widget from one index to another.
         *
         * This method is more efficient for moving a widget than calling
         * `insertWidget` for an already added widget. It will not remove
         * the widget before moving it and will not emit `widgetRemoved`.
         *
         * Returns -1 if `fromIndex` is out of range.
         */
        moveWidget(fromIndex: number, toIndex: number): number;
        /**
         * Handle the `widgetRemoved` signal for the stacked layout.
         */
        private _sl_widgetRemoved(sender, args);
    }
}

declare module phosphor.widgets {
    /**
     * A widget which provides a flexible docking layout area for widgets.
     */
    class DockArea extends Widget {
        /**
         * Construct a new dock area.
         */
        constructor();
        /**
         * Dispose of the resources held by the widget.
         */
        dispose(): void;
        /**
         * Get the width of the tabs in the dock area.
         */
        /**
         * Get the width of the tabs in the dock area.
         */
        tabWidth: number;
        /**
         * Get the minimum tab width in pixels.
         */
        /**
         * Set the minimum tab width in pixels.
         */
        minTabWidth: number;
        /**
         * Get the tab overlap amount in pixels.
         */
        /**
         * Set the tab overlap amount in pixels.
         */
        tabOverlap: number;
        /**
         * Get the handle size of the dock splitters.
         */
        /**
         * Set the handle size of the dock splitters.
         */
        handleSize: number;
        /**
         * Add a widget to the dock area.
         *
         * The widget is positioned in the area according to the given dock
         * mode and reference widget. If the dock widget is already added to
         * the area, it will be moved to the new location.
         *
         * The default mode inserts the widget on the left side of the area.
         */
        addWidget(widget: ITabbable, mode?: DockMode, ref?: ITabbable): void;
        /**
         * Handle the DOM events for the dock area.
         */
        protected handleEvent(event: Event): void;
        /**
         * Handle the 'mousemove' event for the dock area.
         *
         * This is triggered on the document during a tab move operation.
         */
        private _evtMouseMove(event);
        /**
         * Handle the 'mouseup' event for the dock area.
         *
         * This is triggered on the document during a tab move operation.
         */
        private _evtMouseUp(event);
        /**
         * Add the widget to a new root dock panel along the given orientation.
         *
         * If the widget already exists in the area, it will be removed.
         */
        private _addWidget(widget, orientation, after);
        /**
         * Add the dock widget as a new split panel next to the reference.
         *
         * If the reference does not exist in the area, this is a no-op.
         *
         * If the dock widget already exists in the area, it will be moved.
         */
        private _splitWidget(widget, ref, orientation, after);
        /**
         * Split the panel with the given widget along the given orientation.
         *
         * If the widget already exists in the area, it will be moved.
         */
        private _splitPanel(panel, widget, orientation, after);
        /**
         * Add the dock widget as a tab next to the reference.
         *
         * If the reference does not exist in the area, this is a no-op.
         *
         * If the dock widget already exists in the area, it will be moved.
         */
        private _tabifyWidget(widget, ref, after);
        /**
         * Ensure the root splitter has the given orientation.
         *
         * If the current root has the given orientation, this is a no-op.
         *
         * If the root has <= 1 child, its orientation will be updated.
         *
         * Otherwise, a new root will be created with the proper orientation
         * and the current root will be added as the new root's first child.
         */
        private _ensureRoot(orientation);
        /**
         * Create a new panel and setup the signal handlers.
         */
        private _createPanel();
        /**
         * Create a new dock splitter for the dock area.
         */
        private _createSplitter(orientation);
        /**
         * Remove an empty dock panel from the hierarchy.
         *
         * This ensures that the hierarchy is kept consistent by merging an
         * ancestor splitter when it contains only a single child widget.
         */
        private _removePanel(panel);
        /**
         * Abort the tab drag operation if one is in progress.
         */
        private _abortDrag();
        /**
         * Handle the `currentChanged` signal from a tab bar.
         */
        private _tb_currentChanged(sender, args);
        /**
         * Handle the `tabCloseRequested` signal from a tab bar.
         */
        private _tb_tabCloseRequested(sender, args);
        /**
         * Handle the `tabDetachRequested` signal from the tab bar.
         */
        private _tb_tabDetachRequested(sender, args);
        /**
         * Handle the `widgetRemoved` signal from a stack widget.
         */
        private _sw_widgetRemoved(sender, args);
        private _handleSize;
        private _tabWidth;
        private _tabOverlap;
        private _minTabWidth;
        private _ignoreRemoved;
        private _root;
        private _dragData;
        private _items;
    }
}

declare module phosphor.widgets {
    import IMessage = core.IMessage;
    import Size = utility.Size;
    import IElement = virtualdom.IElement;
    /**
     * A leaf widget which hosts a virtual element.
     *
     * This is used to embed a virtual element into a widget hierarchy. This
     * is a simple widget which disallows an external layout. The intent is
     * that the element will provide the content for the widget, typically
     * in the form of a component which manages its own updates.
     */
    class ElementHost extends Widget {
        /**
         * Construct a new element host.
         */
        constructor(element?: IElement, width?: number, height?: number);
        /**
         * Get the virtual element hosted by the panel.
         */
        /**
         * Set the virtual element hosted by the panel.
         */
        element: IElement;
        /**
         * Calculate the preferred size of the panel.
         */
        sizeHint(): Size;
        /**
         * Set the preferred size for the panel.
         */
        setSizeHint(width: number, height: number): void;
        /**
         * A method invoked on an 'after-attach' message.
         */
        protected onAfterAttach(msg: IMessage): void;
        /**
         * A method invoked on an 'after-detach' message.
         */
        protected onAfterDetach(msg: IMessage): void;
        private _size;
        private _element;
    }
}

declare module phosphor.widgets {
    import Signal = core.Signal;
    /**
     * An options object for initializing a menu item.
     */
    interface IMenuItemOptions {
        /**
         * The type of the menu item.
         */
        type?: string;
        /**
         * The text for the menu item.
         */
        text?: string;
        /**
         * The mnemonic for the menu item.
         */
        mnemonic?: string;
        /**
         * The shortcut combo for the menu item.
         */
        shortcut?: string;
        /**
         * Whether the menu item is enabled.
         */
        enabled?: boolean;
        /**
         * Whether a 'check' type menu item is checked.
         */
        checked?: boolean;
        /**
         * The submenu for the menu item.
         */
        submenu?: Menu;
        /**
         * The extra class name to associate with the menu item.
         */
        className?: string;
        /**
         * A callback to invoke when the menu item is toggled.
         */
        onToggled?: (item: MenuItem) => void;
        /**
         * A callback to invoke when the menu item is triggered.
         */
        onTriggered?: (item: MenuItem) => void;
    }
    /**
     * An item which can be added to a menu or menu bar.
     */
    class MenuItem {
        /**
         * A signal emitted when the state of the menu item is changed.
         */
        changed: Signal<MenuItem, void>;
        /**
         * A signal emitted when a `check` type menu item is toggled.
         */
        toggled: Signal<MenuItem, void>;
        /**
         * A signal emitted when the menu item is triggered.
         */
        triggered: Signal<MenuItem, void>;
        /**
         * Construct a new menu item.
         */
        constructor(options?: IMenuItemOptions);
        /**
         * Get the type of the menu item: 'normal' | 'check' | 'separator'.
         */
        /**
         * Set the type of the menu item: 'normal' | 'check' | 'separator'.
         */
        type: string;
        /**
         * Get the text for the menu item.
         */
        /**
         * Set the text for the menu item.
         */
        text: string;
        /**
         * Get the mnemonic key for the menu item.
         */
        /**
         * Set the mnemonic key for the menu item.
         */
        mnemonic: string;
        /**
         * Get the shortcut key for the menu item (decoration only).
         */
        /**
         * Set the shortcut key for the menu item (decoration only).
         */
        shortcut: string;
        /**
         * Get whether the menu item is enabled.
         */
        /**
         * Set whether the menu item is enabled.
         */
        enabled: boolean;
        /**
         * Get whether the 'check' type menu item is checked.
         */
        /**
         * Set whether the 'check' type menu item is checked.
         */
        checked: boolean;
        /**
         * Get the submenu for the menu item.
         */
        /**
         * Set the submenu for the menu item.
         */
        submenu: Menu;
        /**
         * Get the class name for the menu item.
         */
        /**
         * Set the class name for the menu item.
         */
        className: string;
        /**
         * Trigger the menu item.
         *
         * This will emit the `triggered` signal.
         *
         * If the item is a `check` type, it will also be toggled.
         */
        trigger(): void;
        /**
         * Initialize the menu item from the given options object.
         */
        private _initFrom(options);
        private _text;
        private _mnemonic;
        private _shortcut;
        private _className;
        private _enabled;
        private _type;
        private _checked;
        private _submenu;
    }
}

declare module phosphor.widgets {
    import Signal = core.Signal;
    /**
     * An object which displays menu items as a popup menu.
     */
    class Menu {
        /**
         * Find the root menu of a menu hierarchy.
         */
        static rootMenu(menu: Menu): Menu;
        /**
         * Find the leaf menu of a menu hierarchy.
         */
        static leafMenu(menu: Menu): Menu;
        /**
         * A signal emitted when the menu is closed.
         */
        closed: Signal<Menu, void>;
        /**
         * Construct a new menu.
         */
        constructor(items?: MenuItem[]);
        /**
         * Get the DOM node for the menu.
         */
        node: HTMLElement;
        /**
         * Get the parent menu of the menu.
         *
         * This will be null if the menu is not an open submenu.
         */
        parentMenu: Menu;
        /**
         * Get the child menu of the menu.
         *
         * This will be null if the menu does not have an open submenu.
         */
        childMenu: Menu;
        /**
         * Get the index of the active (highlighted) menu item.
         */
        /**
         * Set the index of the active (highlighted) menu item.
         *
         * Only a non-separator item can be set as the active item.
         */
        activeIndex: number;
        /**
         * Get the active (highlighted) menu item.
         */
        /**
         * Set the active (highlighted) menu item.
         *
         * Only a non-separator item can be set as the active item.
         */
        activeItem: MenuItem;
        /**
         * Get the number of menu items in the menu.
         */
        count: number;
        /**
         * Get the menu item at the given index.
         */
        itemAt(index: number): MenuItem;
        /**
         * Get the index of the given menu item.
         */
        indexOf(item: MenuItem): number;
        /**
         * Add a menu item to the end of the menu.
         *
         * Returns the new index of the item.
         */
        addItem(item: MenuItem): number;
        /**
         * Insert a menu item into the menu at the given index.
         *
         * Returns the new index of the item.
         */
        insertItem(index: number, item: MenuItem): number;
        /**
         * Remove and return the menu item at the given index.
         */
        removeAt(index: number): MenuItem;
        /**
         * Remove the given menu item from the menu.
         *
         * Returns the index of the removed item.
         */
        removeItem(item: MenuItem): number;
        /**
         * Remove all menu items from the menu.
         */
        clearItems(): void;
        /**
         * Activate the next non-separator menu item.
         *
         * This is equivalent to pressing the down arrow key.
         */
        activateNextItem(): void;
        /**
         * Activate the previous non-separator menu item.
         *
         * This is equivalent to pressing the up arrow key.
         */
        activatePreviousItem(): void;
        /**
         * Activate the next menu item with the given mnemonic key.
         *
         * This is equivalent to pressing the mnemonic key.
         */
        activateMnemonicItem(key: string): void;
        /**
         * Open the submenu of the active menu item.
         *
         * This is equivalent to pressing the right arrow key.
         *
         * Returns true if the item was opened, false otherwise.
         */
        openActiveItem(): boolean;
        /**
         * Trigger (or open) the active menu item.
         *
         * This is equivalent to pressing the enter key.
         *
         * Returns true if the item was triggered, false otherwise.
         */
        triggerActiveItem(): boolean;
        /**
         * Popup the menu at the specified location.
         *
         * The menu will be opened at the given location unless it will not
         * fully fit on the screen. If it will not fit, it will be adjusted
         * to fit naturally on the screen. The last two optional parameters
         * control whether the provided coordinate value must be obeyed.
         *
         * When the menu is opened as a popup menu, it will handle all key
         * events related to menu navigation as well as closing the menu
         * when the mouse is pressed outside of the menu hierarchy. To
         * prevent these actions, use the 'open' method instead.
         */
        popup(x: number, y: number, forceX?: boolean, forceY?: boolean): void;
        /**
         * Open the menu at the specified location.
         *
         * The menu will be opened at the given location unless it will not
         * fully fit on the screen. If it will not fit, it will be adjusted
         * to fit naturally on the screen. The last two optional parameters
         * control whether the provided coordinate value must be obeyed.
         *
         * When the menu is opened with this method, it will not handle key
         * events for navigation, nor will it close itself when the mouse is
         * pressed outside the menu hierarchy. This is useful when using the
         * menu from a menubar, where this menubar should handle these tasks.
         * Use the `popup` method for the alternative behavior.
         */
        open(x: number, y: number, forceX?: boolean, forceY?: boolean): void;
        /**
         * Close the menu and remove it's node from the DOM.
         */
        close(): void;
        /**
         * Create the DOM node for the panel.
         *
         * This can be reimplemented to create a custom menu node.
         */
        protected createNode(): HTMLElement;
        /**
         * Create a DOM node for the given MenuItem.
         *
         * This can be reimplemented to create custom menu item nodes.
         */
        protected createItemNode(item: MenuItem): HTMLElement;
        /**
         * Initialize the item node for the given menu item.
         *
         * This method should be reimplemented if a subclass reimplements the
         * `createItemNode` method. It should initialize the node using the
         * given menu item. It will be called any time the item changes.
         */
        protected initItemNode(item: MenuItem, node: HTMLElement): void;
        /**
         * A method invoked when a menu item is inserted into the menu.
         *
         * This method should be reimplemented if a subclass reimplements the
         * `createNode` method. It should insert the item node into the menu
         * at the specified location.
         */
        protected insertItemNode(index: number, node: HTMLElement): void;
        /**
         * A method invoked when a menu item is removed from the menu.
         *
         * This method should be reimplemented if a subclass reimplements the
         * `createNode` method. It should remove the item node from the menu.
         */
        protected removeItemNode(node: HTMLElement): void;
        /**
         * Handle the DOM events for the menu.
         */
        protected handleEvent(event: Event): void;
        /**
         * Handle the 'mouseenter' event for the menu.
         *
         * This event listener is attached to the child item nodes.
         */
        private _evtMouseEnter(event);
        /**
         * Handle the 'mouseleave' event for the menu.
         *
         * This event listener is only attached to the menu node.
         */
        private _evtMouseLeave(event);
        /**
         * Handle the 'mouseup' event for the menu.
         *
         * This event listener is attached to the menu node.
         */
        private _evtMouseUp(event);
        /**
         * Handle the 'contextmenu' event for the menu.
         *
         * This event listener is attached to the menu node and disables
         * the default browser context menu.
         */
        private _evtContextMenu(event);
        /**
         * Handle the 'mousedown' event for the menu.
         *
         * This event listener is attached to the document for a popup menu.
         */
        private _evtMouseDown(event);
        /**
         * Handle the key down event for the menu.
         *
         * This event listener is attached to the document for a popup menu.
         */
        private _evtKeyDown(event);
        /**
         * Handle the 'keypress' event for the menu.
         *
         * This event listener is attached to the document for a popup menu.
         */
        private _evtKeyPress(event);
        /**
         * Set the active item index for the menu.
         *
         * This updates the class name of the relevant item nodes.
         */
        private _setActiveIndex(index);
        /**
         * Synchronize the active item hierarchy starting with the parent.
         *
         * This ensures that the proper child items are activated for the
         * ancestor menu hierarchy and that any pending open or close
         * tasks are cleared.
         */
        private _syncAncestors();
        /**
         * Synchronize the active item with the item for the child menu.
         *
         * This ensures that the active item is the child menu item.
         */
        private _syncChildItem();
        /**
         * Open the menu item's submenu using the node for location.
         *
         * If the given item is already open, this is a no-op.
         *
         * Any pending open operation will be cancelled before opening
         * the menu or queueing the delayed task to open the menu.
         */
        private _openChildMenu(item, node, delayed);
        /**
         * Open the menu as a child menu.
         */
        private _openAsSubmenu(item);
        /**
         * Close the currently open child menu using a delayed task.
         *
         * If a task is pending or if there is no child menu, this is a no-op.
         */
        private _closeChildMenu();
        /**
         * Reset the state of the menu.
         *
         * This deactivates the current item and closes the child menu.
         */
        private _reset();
        /**
         * Remove the menu from its parent menu.
         */
        private _removeFromParent();
        /**
         * Cancel any pending child menu open task.
         */
        private _cancelPendingOpen();
        /**
         * Cancel any pending child menu close task.
         */
        private _cancelPendingClose();
        /**
         * Handle the `changed` signal from a menu item.
         */
        private _mi_changed(sender);
        private _node;
        private _parentMenu;
        private _childMenu;
        private _childItem;
        private _items;
        private _nodes;
        private _activeIndex;
        private _openTimer;
        private _closeTimer;
    }
}

declare module phosphor.widgets {
    import IMessage = core.IMessage;
    import Size = utility.Size;
    /**
     * A leaf widget which displays menu items as a menu bar.
     */
    class MenuBar extends Widget {
        /**
         * Construct a new menu bar.
         */
        constructor(items?: MenuItem[]);
        /**
         * Dispose of the resources held by the panel.
         */
        dispose(): void;
        /**
         * Get the child menu of the menu bar.
         *
         * This will be null if the menu bar does not have an open menu.
         */
        childMenu: Menu;
        /**
         * Get the index of the active (highlighted) menu item.
         */
        /**
         * Set the index of the active (highlighted) menu item.
         *
         * Only an enabled non-separator item can be set as the active item.
         */
        activeIndex: number;
        /**
         * Get the active (highlighted) menu item.
         */
        /**
         * Set the active (highlighted) menu item.
         *
         * Only an enabled non-separator item can be set as the active item.
         */
        activeItem: MenuItem;
        /**
         * Get the number of menu items in the menu bar.
         */
        count: number;
        /**
         * Get the menu item at the given index.
         */
        itemAt(index: number): MenuItem;
        /**
         * Get the index of the given menu item.
         */
        indexOf(item: MenuItem): number;
        /**
         * Add a menu item to the end of the menu bar.
         *
         * Returns the new index of the item.
         */
        addItem(item: MenuItem): number;
        /**
         * Insert a menu item into the menu bar at the given index.
         *
         * Returns the new index of the item.
         */
        insertItem(index: number, item: MenuItem): number;
        /**
         * Remove and return the menu item at the given index.
         */
        removeAt(index: number): MenuItem;
        /**
         * Remove the given menu item from the menu bar.
         *
         * Returns the index of the removed item.
         */
        removeItem(item: MenuItem): number;
        /**
         * Remove all menu items from the menu bar.
         */
        clearItems(): void;
        /**
         * Activate the next non-separator menu item.
         *
         * This is equivalent to pressing the right arrow key.
         */
        activateNextItem(): void;
        /**
         * Activate the previous non-separator menu item.
         *
         * This is equivalent to pressing the left arrow key.
         */
        activatePreviousItem(): void;
        /**
         * Activate the next menu item with the given mnemonic key.
         *
         * This is equivalent to pressing the mnemonic key.
         */
        activateMnemonicItem(key: string): void;
        /**
         * Open the submenu of the active menu item.
         *
         * This is equivalent to pressing the down arrow key.
         *
         * Returns true if the item was opened, false otherwise.
         */
        openActiveItem(): boolean;
        /**
         * Compute the size hint for the menu bar.
         */
        sizeHint(): Size;
        /**
         * Compute the minimum size hint for the menu bar.
         */
        minSizeHint(): Size;
        /**
         * Create the DOM node for the widget.
         */
        protected createNode(): HTMLElement;
        /**
         * Create a DOM node for the given MenuItem.
         *
         * This can be reimplemented to create custom menu item nodes.
         */
        protected createItemNode(item: MenuItem): HTMLElement;
        /**
         * Initialize the item node for the given menu item.
         *
         * This method should be reimplemented if a subclass reimplements the
         * `createItemNode` method. It should initialize the node using the
         * given menu item. It will be called any time the item changes.
         */
        protected initItemNode(item: MenuItem, node: HTMLElement): void;
        /**
         * A method invoked when a menu item is inserted into the menu.
         *
         * This method should be reimplemented if a subclass reimplements the
         * `createNode` method. It should insert the item node into the menu
         * at the specified location.
         */
        protected insertItemNode(index: number, node: HTMLElement): void;
        /**
         * A method invoked when a menu item is removed from the menu.
         *
         * This method should be reimplemented if a subclass reimplements the
         * `createNode` method. It should remove the item node from the menu.
         */
        protected removeItemNode(node: HTMLElement): void;
        /**
         * A method invoked on the 'after-attach' message.
         */
        protected onAfterAttach(msg: IMessage): void;
        /**
         * A method invoked on the 'after-detach' message.
         */
        protected onAfterDetach(msg: IMessage): void;
        /**
         * Handle the DOM events for the menu bar.
         */
        protected handleEvent(event: Event): void;
        /**
         * Handle the 'mousedown' event for the menu bar.
         */
        private _evtMouseDown(event);
        /**
         * Handle the 'mousemove' event for the menu bar.
         */
        private _evtMouseMove(event);
        /**
         * Handle the 'mouseleave' event for the menu bar.
         */
        private _evtMouseLeave(event);
        /**
         * Handle the 'keydown' event for the menu bar.
         */
        private _evtKeyDown(event);
        /**
         * Handle the 'keypress' event for the menu bar.
         */
        private _evtKeyPress(event);
        /**
         * Set the active item index for the menu bar.
         *
         * If the index points to an item, it is assumed to be selectable.
         *
         * This will take the appropriate action based on the menu bar state.
         */
        private _setActiveIndex(index);
        /**
         * Open the menu item's submenu using the node for location.
         */
        private _openChildMenu(menu, node);
        /**
         * Close the current child menu, if one exists.
         */
        private _closeChildMenu();
        /**
         * Set the state mode for the menu bar.
         *
         * This will update the menu bar event listeners accordingly.
         */
        private _setState(state);
        /**
         * Update the event listeners for the inactive state.
         */
        private _useInactiveListeners();
        /**
         * Update the event listeners for the active and open states.
         */
        private _useActiveListeners();
        /**
         * Handle the `closed` signal from the child menu.
         */
        private _mn_closed(sender);
        /**
         * Handle the `changed` signal from a menu item.
         */
        private _mi_changed(sender);
        private _childMenu;
        private _items;
        private _nodes;
        private _state;
        private _activeIndex;
    }
}

declare module phosphor.widgets {
    /**
     * A concrete implementation of ITab.
     */
    class Tab implements ITab {
        /**
         * Construct a new tab.
         */
        constructor(text?: string);
        /**
         * Get the text for the tab.
         */
        /**
         * Set the text for the tab.
         */
        text: string;
        /**
         * Get whether the tab is selected.
         */
        /**
         * Set whether the tab is selected.
         */
        selected: boolean;
        /**
         * Get whether the tab is closable.
         */
        /**
         * Set whether the tab is closable.
         */
        closable: boolean;
        /**
         * The DOM node for the tab.
         */
        node: HTMLElement;
        /**
         * The DOM node for the close icon, if available.
         */
        closeIconNode: HTMLElement;
        /**
         * Create the DOM node for the tab.
         */
        protected createNode(): HTMLElement;
        private _node;
    }
}

declare module phosphor.widgets {
    import IMessage = core.IMessage;
    import Signal = core.Signal;
    import Pair = utility.Pair;
    import Size = utility.Size;
    /**
     * The arguments object for the `tabDetachRequested` signal.
     */
    interface ITabDetachArgs {
        /**
         * The tab of interest.
         */
        tab: ITab;
        /**
         * The index of the tab.
         */
        index: number;
        /**
         * The current mouse client X position.
         */
        clientX: number;
        /**
         * The current mouse client Y position.
         */
        clientY: number;
    }
    /**
     * The options object for initializing a tab bar.
     */
    interface ITabBarOptions {
        /**
         * Wether the tabs are movable by the user.
         */
        tabsMovable?: boolean;
        /**
         * The preferred tab width.
         *
         * Tabs will be sized to this width if possible, but never larger.
         */
        tabWidth?: number;
        /**
         * The minimum tab width.
         *
         * Tabs will never be sized smaller than this amount.
         */
        minTabWidth?: number;
        /**
         * The tab overlap amount.
         *
         * A positive value will cause neighboring tabs to overlap.
         * A negative value will insert empty space between tabs.
         */
        tabOverlap?: number;
    }
    /**
     * A leaf widget which displays a row of tabs.
     */
    class TabBar extends Widget {
        /**
         * A signal emitted when a tab is moved.
         */
        tabMoved: Signal<TabBar, Pair<number, number>>;
        /**
         * A signal emitted when the currently selected tab is changed.
         */
        currentChanged: Signal<TabBar, Pair<number, ITab>>;
        /**
         * A signal emitted when the user clicks a tab close icon.
         */
        tabCloseRequested: Signal<TabBar, Pair<number, ITab>>;
        /**
         * A signal emitted when a tab is dragged beyond the detach threshold.
         */
        tabDetachRequested: Signal<TabBar, ITabDetachArgs>;
        /**
         * Construct a new tab bar.
         */
        constructor(options?: ITabBarOptions);
        dispose(): void;
        /**
         * Get the currently selected tab index.
         */
        /**
         * Set the currently selected tab index.
         */
        currentIndex: number;
        /**
         * Get the currently selected tab.
         */
        /**
         * Set the currently selected tab.
         */
        currentTab: ITab;
        /**
         * Get the previously selected tab.
         */
        previousTab: ITab;
        /**
         * Get whether the tabs are movable by the user.
         */
        /**
         * Set whether the tabs are movable by the user.
         */
        tabsMovable: boolean;
        /**
         * Get the preferred tab width.
         *
         * Tabs will be sized to this width if possible, but never larger.
         */
        /**
         * Set the preferred tab width.
         *
         * Tabs will be sized to this width if possible, but never larger.
         */
        tabWidth: number;
        /**
         * Get the minimum tab width.
         *
         * Tabs will never be sized smaller than this amount.
         */
        /**
         * Set the minimum tab width.
         *
         * Tabs will never be sized smaller than this amount.
         */
        minTabWidth: number;
        /**
         * Get the tab overlap amount.
         *
         * A positive value will cause neighboring tabs to overlap.
         * A negative value will insert empty space between tabs.
         */
        /**
         * Set the tab overlap amount.
         *
         * A positive value will cause neighboring tabs to overlap.
         * A negative value will insert empty space between tabs.
         */
        tabOverlap: number;
        /**
         * Get the number of tabs in the tab bar.
         */
        count: number;
        /**
         * Get the tab at the given index.
         */
        tabAt(index: number): ITab;
        /**
         * Get the index of the given tab.
         */
        indexOf(tab: ITab): number;
        /**
         * Add a tab to the end of the tab bar.
         *
         * Returns the index of the tab.
         */
        addTab(tab: ITab): number;
        /**
         * Insert a tab into the tab bar at the given index.
         *
         * Returns the index of the tab.
         */
        insertTab(index: number, tab: ITab): number;
        /**
         * Move a tab from one index to another.
         *
         * Returns the new tab index.
         */
        moveTab(fromIndex: number, toIndex: number): number;
        /**
         * Remove and return the tab at the given index.
         *
         * Returns `undefined` if the index is out of range.
         */
        removeAt(index: number): ITab;
        /**
         * Remove a tab from the tab bar and return its index.
         *
         * Returns -1 if the tab is not in the tab bar.
         */
        removeTab(tab: ITab): number;
        /**
         * Remove all of the tabs from the tab bar.
         */
        clearTabs(): void;
        /**
         * Add a tab to the tab bar at the given client X position.
         *
         * This method is intended for use by code which supports tear-off
         * tab interfaces. It will insert the tab at the specified location
         * without a transition and grab the mouse to continue the tab drag.
         * It assumes that the left mouse button is currently pressed.
         *
         * This is a no-op if the tab is already added to the tab bar.
         */
        attachTab(tab: ITab, clientX: number): void;
        /**
         * Detach and return the tab at the given index.
         *
         * This method is intended for use by code which supports tear-off
         * tab interfaces. It will remove the tab at the specified index
         * without a transition.
         *
         * Returns `undefined` if the index is invalid.
         */
        detachAt(index: number): ITab;
        /**
         * Compute the size hint for the tab bar.
         */
        sizeHint(): Size;
        /**
         * Compute the minimum size hint for the tab bar.
         */
        minSizeHint(): Size;
        /**
         * Get the content node for the tab bar.
         */
        protected contentNode: HTMLElement;
        /**
         * Create the DOM node for the tab bar.
         */
        protected createNode(): HTMLElement;
        /**
         * A method invoked on an 'after-attach' message.
         */
        protected onAfterAttach(msg: IMessage): void;
        /**
         * A method invoked on an 'after-dettach' message.
         */
        protected onAfterDetach(msg: IMessage): void;
        /**
         * A method invoked on a 'resize' message.
         */
        protected onResize(msg: ResizeMessage): void;
        /**
         * Handle the DOM events for the tab bar.
         */
        protected handleEvent(event: Event): void;
        /**
         * Handle the 'click' event for the tab bar.
         */
        private _evtClick(event);
        /**
         * Handle the 'mousedown' event for the tab bar.
         */
        private _evtMouseDown(event);
        /**
         * Handle the 'mousemove' event for the tab bar.
         */
        private _evtMouseMove(event);
        /**
         * Handle the 'mouseup' event for the tab bar.
         */
        private _evtMouseUp(event);
        /**
         * Release the current mouse grab for the tab bar.
         */
        private _releaseMouse();
        /**
         * Insert a new tab into the tab bar at the given index.
         *
         * This method assumes that the tab has not already been added.
         */
        private _insertTab(index, tab, animate);
        /**
         * Move an item to a new index in the tab bar.
         *
         * Returns the new index of the tab, or -1.
         */
        private _moveTab(fromIndex, toIndex);
        /**
         * Remove and return the tab at the given index.
         *
         * Returns `undefined` if the index is invalid.
         */
        private _removeTab(index, animate);
        /**
         * Remove a child node of the tab bar content node.
         *
         * This is a no-op if the node is not a child of the content node.
         */
        private _removeContentChild(node);
        /**
         * Get the index of the tab which covers the given client position.
         *
         * Returns -1 if the client position does not intersect a tab.
         */
        private _hitTest(clientX, clientY);
        /**
         * Compute the layout width of a tab.
         *
         * This computes a tab size as close as possible to the preferred
         * tab size, taking into account the minimum tab width, the current
         * tab bar width, and the tab overlap setting.
         */
        private _tabLayoutWidth();
        /**
         * Update the Z-indices of the tabs for the current tab order.
         */
        private _updateTabZOrder();
        /**
         * Update the position and size of the tabs in the tab bar.
         *
         * The position of the drag tab will not be updated.
         */
        private _updateTabLayout();
        /**
         * A helper function to execute an animated transition.
         *
         * This will add the transition class to the tab bar for the global
         * transition duration. The optional `onEnter` callback is invoked
         * immediately after the transition class is added. The optional
         * `onExit` callback will be invoked after the transition duration
         * has expired and the transition class is removed from the tab bar.
         *
         * If there is an active drag in progress, the transition class
         * will not be removed from the on exit.
         */
        private _withTransition(onEnter?, onExit?);
        /**
         * Initialize the tab bar state from an options object.
         */
        private _initFrom(options);
        private _tabWidth;
        private _tabOverlap;
        private _minTabWidth;
        private _tabs;
        private _tabsMovable;
        private _currentTab;
        private _previousTab;
        private _dragData;
    }
}

declare module phosphor.widgets {
    import Signal = core.Signal;
    import Pair = utility.Pair;
    /**
     * A panel which provides a tabbed container for child widgets.
     *
     * The TabPanel provides a convenient combination of a TabBar and a
     * StackedPanel which allows the user to toggle between widgets by
     * selecting the tab associated with a widget.
     */
    class TabPanel extends Widget {
        /**
         * A signal emitted when the current widget is changed.
         */
        currentChanged: Signal<TabPanel, Pair<number, Widget>>;
        /**
         * Construct a new tab panel.
         */
        constructor();
        /**
         * Dispose of the resources held by the panel.
         */
        dispose(): void;
        /**
         * Get the index of the currently selected widget.
         */
        /**
         * Set the index of the currently selected widget.
         */
        currentIndex: number;
        /**
         * Get the currently selected widget.
         */
        /**
         * Set the currently selected widget.
         */
        currentWidget: Widget;
        /**
         * Get whether the tabs are movable by the user.
         */
        /**
         * Set whether the tabs are movable by the user.
         */
        tabsMovable: boolean;
        /**
         * Get the tab bar used by the panel.
         */
        tabBar: TabBar;
        /**
         * Get the number of widgets in the panel.
         */
        count: number;
        /**
         * Get the index of the given widget.
         */
        indexOf(widget: Widget): number;
        /**
         * Get the widget at the given index.
         *
         * Returns `undefined` if there is no widget at the given index.
         */
        widgetAt(index: number): Widget;
        /**
         * Add a tabbable widget to the end of the panel.
         *
         * If the widget already exists in the panel, it will be moved.
         *
         * Returns the index of the added widget.
         */
        addWidget(widget: ITabbable, alignment?: Alignment): number;
        /**
         * Insert a tabbable widget into the panel at the given index.
         *
         * If the widget already exists in the panel, it will be moved.
         *
         * Returns the index of the added widget.
         */
        insertWidget(index: number, widget: ITabbable, alignment?: Alignment): number;
        /**
         * Move a widget from one index to another.
         *
         * Returns the new index of the widget.
         */
        moveWidget(fromIndex: number, toIndex: number): number;
        /**
         * Handle the `tabMoved` signal from the tab bar.
         */
        private _tb_tabMoved(sender, args);
        /**
         * Handle the `currentChanged` signal from the tab bar.
         */
        private _tb_currentChanged(sender, args);
        /**
         * Handle the `tabCloseRequested` signal from the tab bar.
         */
        private _tb_tabCloseRequested(sender, args);
        /**
         * Handle the `widgetRemoved` signal from the stacked panel.
         */
        private _sw_widgetRemoved(sender, args);
        private _tabBar;
        private _stackedPanel;
    }
}
