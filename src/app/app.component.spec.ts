import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from "@angular/platform-browser";

describe('AppComponent tesztelése', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('Az app komponens működik', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`A title értéke 'Járművek'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Járművek');
  });

  it('A cím a h1 elemben', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Járművek');
  });

  it('A container div létezik',() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const divElem = fixture.debugElement.queryAll(By.css('.container'));
    expect(divElem.length).toBe(1);
    // -> egy ilyen elem van
  });

  it('A gyermek komponens létezik',() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const divElem = fixture.debugElement.queryAll(By.css('app-vehicle'));
    expect(divElem).toBeTruthy();
    // -> létezik e
  });


});
