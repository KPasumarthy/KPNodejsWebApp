import { InjectionToken } from '@angular/core';
export declare const DefaultSimpleModalOptionConfig: InjectionToken<SimpleModalOptions>;
export interface SimpleModalOptions {
    closeOnEscape: boolean;
    closeOnClickOutside: boolean;
    bodyClass: string;
    wrapperDefaultClasses: string;
    wrapperClass: string;
    animationDuration: number;
    autoFocus: boolean;
}
export declare type SimpleModalOptionsOverrides = Partial<SimpleModalOptions>;
export declare const defaultSimpleModalOptions: SimpleModalOptions;
