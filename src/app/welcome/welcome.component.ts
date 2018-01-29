import { Component } from '@angular/core';

@Component({
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
    public welcomeMessage: string = 'Welcome to Amazon';
    public imageUrl: string = '../../assets/images/logo.jpg';
}
