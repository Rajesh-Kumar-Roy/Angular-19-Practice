import { ChangeDetectionStrategy, Component, inject, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { HousingLocation } from '../../HousingLocation';
import { HousingService } from '../../housing.service';
import { HousingLocationComponent } from "../../housing-location/housing-location.component";
import { single } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SignalHousingLocationComponent } from "../signal-housing-location/signal-housing-location.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-signal-learning',
  imports: [CommonModule, SignalHousingLocationComponent],
  templateUrl: './signal-learning.component.html',
  styleUrl: './signal-learning.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalLearningComponent implements OnInit{
  housingLocationList: WritableSignal<HousingLocation[]> = signal<HousingLocation[]>([]);
  housingService: HousingService = inject(HousingService);
  filteredLocationList: WritableSignal<HousingLocation[]> = signal<HousingLocation[]>([]);
  constructor(private _router: Router) {
   
  }
  ngOnInit(): void {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList.set(housingLocationList) ;
      this.filteredLocationList.set(housingLocationList);
    });
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      console.log(this.housingLocationList);
      return;
    }
    this.filteredLocationList= signal<HousingLocation[]>(this.housingLocationList().filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase())),
    );
  }

  onCLickDetails(id: number){
    this._router.navigateByUrl(`/signalDetail/${id}`);
  }
}
