import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { User } from "./user/user";
import { Footer } from './footer/footer';
import { Home } from "./home/home";
import { Admin } from './admin/admin';
import { DataBinding } from './data-binding/data-binding';
import { Signal } from './signal/signal';
import { ControlFlow } from './control-flow/control-flow';
import { Contact } from './contact/contact';
import { About } from './about/about';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, User, Footer, Home, Contact, About, Admin, DataBinding, Signal, ControlFlow, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ang-project');
}
