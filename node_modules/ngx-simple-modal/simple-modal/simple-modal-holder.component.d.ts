import { ComponentFactoryResolver, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { SimpleModalOptions, SimpleModalOptionsOverrides } from './simple-modal-options';
import { SimpleModalComponent } from './simple-modal.component';
/**
 * View container manager which manages a list of modals currently active
 * inside the viewvontainer
 */
export declare class SimpleModalHolderComponent {
    private resolver;
    private defaultSimpleModalOptions;
    /**
     * Target viewContainer to insert modals
     */
    viewContainer: any;
    /**
     * modal collection, maintained by addModal and removeModal
     * @type {Array<SimpleModalComponent> }
     */
    modals: Array<SimpleModalComponent<any, any>>;
    /**
     * if auto focus is on and no element focused, store it here to be restored back after close
     */
    previousActiveElement: any;
    /**
     * Constructor
     * @param {ComponentFactoryResolver} resolver
     */
    constructor(resolver: ComponentFactoryResolver, defaultSimpleModalOptions: SimpleModalOptions);
    /**
     * Configures then adds modal to the modals array, and populates with data passed in
     * @param {Type<SimpleModalComponent>} component
     * @param {object?} data
     * @param {SimpleModalOptionsOverrides?} options
     * @return {Observable<*>}
     */
    addModal<T, T1>(component: Type<SimpleModalComponent<T, T1>>, data?: T, options?: SimpleModalOptionsOverrides): Observable<T1>;
    /**
     * triggers components close function
     * to take effect
     * @param {SimpleModalComponent} component
     * @returns {Promise<void>}
     */
    removeModal(closingModal: SimpleModalComponent<any, any>): Promise<any>;
    /**
     * Instructs all open modals to
     */
    removeAllModals(): Promise<any>;
    /**
     * Bind a body class 'modal-open' to a condition of modals in pool > 0
     * @param bodyClass - string to add and remove from body in document
     */
    private toggleBodyClass;
    /**
     * if the option to close on background click is set, then hook up a callback
     * @param options
     * @param modalWrapper
     */
    private configureCloseOnClickOutside;
    /**
     * Auto focus o the first element if autofocus is on
     * @param options
     * @param modalWrapperEl
     */
    private autoFocusFirstElement;
    /**
     * Restores the last focus is there was one
     */
    private restorePreviousFocus;
    /**
     * Configure the adding and removal of a wrapper class - predominantly animation focused
     * @param options
     * @param modalWrapperEl
     */
    private toggleWrapperClass;
    /**
     * Helper function for a more readable timeout
     * @param ms
     */
    private wait;
    /**
     * Instructs the holder to remove the modal and
     * removes this component from the collection
     * @param {SimpleModalComponent} component
     */
    private removeModalFromArray;
}
