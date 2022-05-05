import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent - PREMACIO PAUL JOSHUA', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
  
  it('should store number to first number if value with which of 0 and receiveFromInput called', () => {
    let spy = spyOn(component, 'receiveFromInput').and.callThrough();
    let pass = {value: 12, which: 0}
    component.receiveFromInput(pass);
    expect(component.firstNumber).toBe(12);
    expect(spy).toHaveBeenCalled();
  })
  
  it('should store number to second number if value with which of 1 and receiveFromInput called', () => {
    let spy = spyOn(component, 'receiveFromInput').and.callThrough();
    let pass = {value: 14, which: 1}
    component.receiveFromInput(pass);
    expect(component.secondNumber).toBe(14);
    expect(spy).toHaveBeenCalled();
  })
  it('Operation is true and receiveOperation is called', () => {
    let spy = spyOn(component, 'receiveOperation').and.callThrough();
    component.receiveOperation(1);
    expect(component.operation).toBeTrue();
    expect(spy).toHaveBeenCalled();
  })
  it('should send values if receiveOperation is called', () => {
    let spy = spyOn(component, 'sendValue').and.callThrough();
    component.receiveOperation(1);
    expect(spy).toHaveBeenCalled();
  })
  it('should NOT show the ngIf block if OPERATION is FALSE and first and second number are null',()=>{
    let resultBlock = fixture.debugElement.query(By.css('#result'));
    expect(resultBlock).toBeNull();
  })
  it('should show the ngIf block if OPERATION is TRUE and first number is not null or equal to 0 and second number is not null or equal to 0',()=>{
    component.operation = true;
    component.firstNumber = 10;
    component.secondNumber = 7;
    fixture.detectChanges();
    let resultBlock = fixture.debugElement.query(By.css('#result'));
    expect(resultBlock).not.toBeNull();
  })
});
