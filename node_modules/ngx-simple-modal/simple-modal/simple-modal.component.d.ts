import { ElementRef } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { SimpleModalOptions } from './simple-modal-options';
export interface OnDestroyLike {
    ngOnDestroy(): void;
    [key: string]: any;
}
/**
 * Abstract modal
 * @template T - modal data;
 * @template T1 - modal result
 */
export declare abstract class SimpleModalComponent<T, T1> {
    /**
     * Observer to return result from modal
     */
    private observer;
    /**
     * Dialog result
     * @type {T1}
     */
    result: T1;
    /**
     * Dialog wrapper (modal placeholder)
     */
    wrapper: ElementRef;
    /**
     * ref of options for this component
     */
    options: SimpleModalOptions;
    /**
     * ready$ is when all animations and focusing have comleted
     */
    _ready$: BehaviorSubject<boolean>;
    /**
     * Callback to the holders close function
     */
    private closerCallback;
    /**
     * Constructor
     */
    constructor();
    /**
     * Maps your object passed in the creation to fields in your own Dialog classes
     * @param {T} data
     */
    mapDataObject(data: T): void;
    /**
     * Setup observer
     * @return {Observable<T1>}
     */
    setupObserver(): Observable<T1>;
    /**
     * Defines what happens when close is called - default this
     * will just call the default remove modal process. If overriden
     * must include
     * @param callback
     */
    onClosing(callback: (component: SimpleModalComponent<any, any>) => Promise<any>): void;
    /**
     * Closes modal
     */
    close(): Promise<any>;
    /**
     * keypress binding ngx way
     * @param evt
     */
    onKeydownHandler(evt: KeyboardEvent): void;
    readonly ready$: Observable<boolean>;
    markAsReady(): void;
}
