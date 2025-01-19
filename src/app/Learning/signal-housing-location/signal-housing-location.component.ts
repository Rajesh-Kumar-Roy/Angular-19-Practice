import { ChangeDetectionStrategy, Component, input, Input, OnChanges, signal } from '@angular/core';
import { HousingLocation } from '../../HousingLocation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signal-housing-location',
  imports: [CommonModule],
  templateUrl: './signal-housing-location.component.html',
  styleUrl: './signal-housing-location.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalHousingLocationComponent  {
  //@Input() housingLocation!: HousingLocation;
  // one way
  // housingLocationSignal = signal<HousingLocation | null>(null);
  
  // @Input() set housingLocation(value: HousingLocation){
  //   this.housingLocationSignal.set(value);
  // }

  // other way

  housingLocationSignal = input.required<HousingLocation>();

  constructor(){}

}
