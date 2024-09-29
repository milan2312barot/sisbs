import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrl: './team-details.component.css'
})
export class TeamDetailsComponent {
  //teamNames: any;
  teams: any;
  teamIndices = Array(11).fill(0).map((x,i)=> i);


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //route is in future scope
    //this.teamNames = this.route.snapshot.paramMap.get('teamNames');
    const temp = localStorage.getItem('teamNames');
    if (temp) {
      this.teams = JSON.parse(temp);
    }
  }
}
