import { ApplicationRef, ComponentFactoryResolver, Injector, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { SimpleModalComponent } from './simple-modal.component';
import { SimpleModalOptionsOverrides } from './simple-modal-options';
export declare class SimpleModalServiceConfig {
    container: HTMLElement | string;
}
export declare class SimpleModalService {
    private resolver;
    private applicationRef;
    private injector;
    /**
     * Placeholder of modals
     * @type {SimpleModalHolderComponent}
     */
    private modalHolderComponent;
    /**
     * HTML container for modals
     * type {HTMLElement | string}
     */
    private _container;
    /**
     * @param {ComponentFactoryResolver} resolver
     * @param {ApplicationRef} applicationRef
     * @param {Injector} injector
     * @param {SimpleModalServiceConfig} config
     */
    constructor(resolver: ComponentFactoryResolver, applicationRef: ApplicationRef, injector: Injector, config: SimpleModalServiceConfig);
    /**
     * Adds modal
     * @param {Type<SimpleModalComponent<T, T1>>} component
     * @param {T?} data
     * @param {SimpleModalOptionsOverrides?} options
     * @return {Observable<T1>}
     */
    addModal<T, T1>(component: Type<SimpleModalComponent<T, T1>>, data?: T, options?: SimpleModalOptionsOverrides): Observable<T1>;
    /**
     * Hides and removes modal from DOM, resolves promise when fully removed
     * @param {SimpleModalComponent} component
     * @return {Promise<{}>}
  
     */
    removeModal(component: SimpleModalComponent<any, any>): Promise<{}>;
    /**
     * Closes all modals, resolves promise when they're fully removed
     * @return {Promise<{}>}
     */
    removeAll(): Promise<{}>;
    /**
     * Accessor for contain - will auto generate from string
     * if needed or default to the root element if nothing was set
     */
    private container;
    /**
     * Creates and add to DOM modal holder component
     * @return {SimpleModalHolderComponent}
     */
    private createSimpleModalHolder;
}
