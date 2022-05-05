import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberInputComponent } from './number-input.component';
import { By } from '@angular/platform-browser';

describe('NumberInputComponent', () => {
  let component: NumberInputComponent;
  let fixture: ComponentFixture<NumberInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain first number as label',() => {
    let label = fixture.debugElement.query(By.css('#firstLabel')).nativeElement;
    expect(label.textContent).toBe('First Number'); 
  })
  it('should contain second number as label',() => {
    let label = fixture.debugElement.query(By.css('#secondLabel')).nativeElement;
    expect(label.textContent).toBe('Second Number'); 
  })
  it('should call numberInput when number is being inputted in first number field',() => {
    let spyNumberInput = spyOn(component, 'numberInput').and.callThrough();
    let input = fixture.debugElement.query(By.css('#firstNumberInput')).nativeElement;
    input.value = '7';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(spyNumberInput).toHaveBeenCalled();
  })
  it('should call numberInput when number is being inputted in second number field',() => {
    let spyNumberInput = spyOn(component, 'numberInput').and.callThrough();
    let input = fixture.debugElement.query(By.css('#secondNumberInput')).nativeElement;
    input.value = '10';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(spyNumberInput).toHaveBeenCalled();
  })
  it('should emit the value of first number when numberInput is called',()=>{
    spyOn(component.firstNumber, 'emit');
    component.numberInput('10',0);
    expect(component.firstNumber.emit).toHaveBeenCalled();
  })
  it('should emit the value of second number when numberInput is called',()=>{
    spyOn(component.secondNumber, 'emit');
    component.numberInput('7',1);
    expect(component.secondNumber.emit).toHaveBeenCalled();
  })
  
});
