# ng.http

A Reactive __HTTP__ module for Angular. Reactive? Yes, I super-charged the module with the [RxJS library](https://github.com/ReactiveX/rxjs).

__RxJS__ is a library that brings Reactivity (notion of data/events over time) to JavaScript.


> __RxJS__ stands for __R__eactive E__x__tensions for __J__ava__S__cript.


This is my own implementation/clone of the Angular `HTTP` module.

# Installation

You can pull in from `NPM` using the command:

```sh
npm i ng.http.lib -S
```

Using yarn:

```sh
yarn add ng.http.lib
```
Yeah, I know, the name looks weird and with the double dots, its kind of creepy, I would say. I originally named it `ng_http`, but I couldn't publish with the name 'cos of too many similiar names on `NPM`, so I had to conjure up that.

# Usage

Import the __HttpModule__ in `app.module.ts` file:

```ts
// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { HttpModule } from 'ng.http.lib'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
__Http__ class was implemented. Like in the official Angular __HTTP__ module, it has methods for `CRUD`y requests:

* get
* post
* delete
* put
* patch

Though, I only implemented the `get` method. Don't worry, I'll fix other methods or you can help by contributing to the project. I built this module just to demonstrate how Angular modules work and how `RxJS` (`Reactive Programming`) was incorporated into the HTTP module unlike other `Promise`-based `HTTP` libraries we have always seen (axios etc.).

The __Http__ class is available to the whole Angular app because it was added to __HttpModule__'s `providers` array. So you do not have to re-import it in your own sub-modules. So, inorder to use __HTTP__ methods, import it in your Component/Directive/Service like this:

```ts
import { Component, OnInit } from '@angular/core';
import { Http } from 'ng.http.lib'

@Component({
  selector: 'app-todo',
  template: `
    <p>
      todo works!
    </p>
    <button (click)="see()">See</button>
  `,
  styles: []
})
export class TodoComponent implements OnInit {

  constructor(private http: Http) { }

  see() {
    this.http.get('http://localhost:3000/api')
      .subscribe((v) => alert(v),err=>alert(`Error`))
  }
}
```

You see the `this.http.get` method returns an Observable, which we subscribe to the stream, to get our values.

# Authors

* [Chidume Nnamdi](https://twitter.com/ngArchAngel)