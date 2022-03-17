import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import { VehicleComponent } from './vehicle.component';

describe('VehicleComponent', () => {
  let component: VehicleComponent;
  let fixture: ComponentFixture<VehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Komponens létezik', () => {
    expect(component).toBeTruthy();
  });

  it('A táblázat létezik', () => {
    const table = fixture.debugElement.queryAll(By.css('.table'));
    expect(table).toBeTruthy();
  });

  it('4 gomb van az oldalon', () => {
    const addButton = fixture.debugElement.queryAll(By.css('button'));
    expect(addButton.length).toBe(4);
  });

  it('A modal létezik', () => {
    const modal = fixture.debugElement.queryAll(By.css('#addVehicleModal'));
    expect(modal).toBeTruthy();
  });



});
