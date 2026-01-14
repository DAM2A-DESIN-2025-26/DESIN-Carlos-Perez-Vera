import { SamrtTrackNavbar } from './components/samrt-track-navbar/samrt-track-navbar';
import { Component, signal } from '@angular/core';
import { RouterOutlet, ɵEmptyOutletComponent } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SamrtTrackNavbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('smart_track_app');
}
