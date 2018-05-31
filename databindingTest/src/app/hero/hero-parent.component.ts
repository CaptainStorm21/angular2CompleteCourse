import { Component } from '@angular/core';
import { HEROES } from './hero';

@Component ({
    selector: 'hero-parent',
    template: `
        <h2> {{master}} controls {{heroes.length}} heroes </h2>
        Master is: <input type = "text" [(ngModel)]='master'>
        <hero-child *ngFor ="let hero of heroes"
        [hero] = "hero"
        [master] = "master">
        </hero-child>
    `
})

export class HeroParentComponent {
    heroes = HEROES;
    master = "Master";
}
