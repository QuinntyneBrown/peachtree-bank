import { Injectable, ComponentRef, Injector } from '@angular/core';
import { TransferConfirmationOverlayComponent } from './transfer-confirmation-overlay.component';
import { PortalInjector, ComponentPortal } from '@angular/cdk/portal';
import { Observable } from 'rxjs';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { Transaction } from './transaction';


@Injectable({
    providedIn: 'root'
})
export class TransferConfirmation {
    constructor(private overlay: Overlay, private injector: Injector) {

    }
    public create(options: { transaction: Transaction }): void {
        const positionStrategy = this.overlay.position()
        .global()
        .centerHorizontally()
        .centerVertically();

        const overlayRef = this.overlay.create({
            hasBackdrop: true,
            positionStrategy
        });

        const overlayComponent = this.attachOverlayContainer(overlayRef);

        overlayComponent.transaction = options.transaction;
    }

    public attachOverlayContainer(overlayRef): TransferConfirmationOverlayComponent {
        const injectionTokens = new WeakMap();
        injectionTokens.set(OverlayRef, overlayRef);
        const injector = new PortalInjector(this.injector, injectionTokens);
        const overlayPortal = new ComponentPortal(TransferConfirmationOverlayComponent, null, injector);
        const overlayPortalRef: ComponentRef<TransferConfirmationOverlayComponent> = overlayRef.attach(overlayPortal);
        return overlayPortalRef.instance;
    }
}
