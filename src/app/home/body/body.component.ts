import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  constructor(private router: Router){}
  numOfTeamsSelected = false;

  teamForm = new FormGroup({
    numOfTeams: new FormControl(0, [
      Validators.required,
      Validators.min(0),
      Validators.max(12)
    ]),
    teamNames: new FormArray([])
  });

  get teamNames() {
    return this.teamForm.get('teamNames') as FormArray;
  }

  saveNumOfTeams(){
    this.numOfTeamsSelected = true;
  }

  ngAfterViewInit(): void {
    this.teamForm.get('numOfTeams')?.valueChanges.subscribe(() => {
      this.teamNames.clear();
      this.addTeamNameControls();
    });
  }

  addTeamNameControls(): void {
    const numTeams = this.teamForm.get('numOfTeams')?.value;
    if(numTeams){
      for(let i=0; i<numTeams;i++){
        this.teamNames.push(new FormControl('', Validators.required));
      }
    }
  }

  submitForm(): void {
    if(this.teamForm.valid){
      const teamNames = this.teamNames.controls.map(control => control.value);

      localStorage.setItem('teamNames', JSON.stringify(teamNames));
      console.log("Team names:"+teamNames);
      this.router.navigate(['/team-details', teamNames]);
    }
  }

  getTeamName(index: number): FormControl {
    return this.teamNames.at(index) as FormControl;
}
}
