import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CounterService {
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    incrementActivetoInactive() {
        this.activeToInactiveCounter++;
        console.log('Active to Inactive Count: ' + this.activeToInactiveCounter);
    }

    incrementInactivetoActive() {
        this.inactiveToActiveCounter++;
        console.log('Inactive to Active Count: ' + this.inactiveToActiveCounter);
    }
}