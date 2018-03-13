import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 template: `
      <h2> Books by 19th Century Authors</h2>
      <app-book1> </app-book1>
      <app-bookcover></app-bookcover>
`,

  styles: [`
    h2 {
      color: indigo;
    }
    `]
})

//


export class AppComponent {
  title = 'this is your 1st ';
}
