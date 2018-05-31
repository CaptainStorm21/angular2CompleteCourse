import { Component, Input} from '@angular/core';
import {Hero } from './hero';

@Component ({
    selector: 'hero-child',
    template: `
        <h1> {{title }} </h1>
        <h3> {{hero.name}} says </h3>
        <p> I {{hero.name}} at your service, {{masterName}} </p>
    `
})

export class HeroChildComponent {
    title: string = "I am a new child"
    @Input() hero: Hero;
    @Input ('master') masterHero: string;
}