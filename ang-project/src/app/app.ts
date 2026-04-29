import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { User } from "./user/user";
import { Footer } from './footer/footer';
import { Home } from "./home/home";
import { Admin } from './admin/admin';
import { DataBinding } from './data-binding/data-binding';
import { Signal } from './signal/signal';
import { ControlFlow } from './control-flow/control-flow';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, User, Footer, Home, Admin, DataBinding, Signal, ControlFlow],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ang-project');
}
