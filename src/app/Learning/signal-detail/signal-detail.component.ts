import { ChangeDetectionStrategy, Component, inject, resource, signal, Signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../housing.service';
import { HousingLocation } from '../../HousingLocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomCardComponent } from "../custom-card/custom-card.component";
import { CardTitleComponent } from "../custom-card/card-title/card-title.component";
import { CardBodyComponent } from "../custom-card/card-body/card-body.component";

@Component({
  selector: 'app-signal-detail',
  imports: [ReactiveFormsModule, CustomCardComponent, CardTitleComponent, CardBodyComponent],
  templateUrl: './signal-detail.component.html',
  styleUrl: './signal-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalDetailComponent {
   route: ActivatedRoute = inject(ActivatedRoute);
    housingService = inject(HousingService);
    housingLocation: HousingLocation | undefined;
    housingLocationId:Signal<number> = signal(parseInt(this.route.snapshot.params['id'], 10));
    applyForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
    });
    
    constructor() {
      // this.housingService.getHousingLocationById(housingLocationId()).then((housingLocation) => {
      //   this.housingLocation = housingLocation;
      // });
    }
    details= resource({
      request: this.housingLocationId,
      loader: async({request: housingLocationId}) =>{
          const response = await fetch(`${this.housingService.url}/${housingLocationId}`);
          return (await response.json()) ?? {};
      }
    });
  
  
    submitApplication() {
      this.housingService.submitApplication(
        this.applyForm.value.firstName ?? '',
        this.applyForm.value.lastName ?? '',
        this.applyForm.value.email ?? '',
      );
    }
}
