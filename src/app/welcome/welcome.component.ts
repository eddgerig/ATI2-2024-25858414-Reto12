import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomPipe } from '../custom-pipe.pipe';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterModule, CustomPipe],
  templateUrl:'./welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {}