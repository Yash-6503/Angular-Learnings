import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Home, Contact, About, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('routing-app');
}
