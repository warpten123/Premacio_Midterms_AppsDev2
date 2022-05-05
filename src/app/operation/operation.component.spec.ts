import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationComponent } from './operation.component';

describe('OperationComponent', () => {
  let component: OperationComponent;
  let fixture: ComponentFixture<OperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should emit the value (1) when button for addition is clicked', () => {
    spyOn(component.operation,'emit');
    let add = fixture.debugElement.query(By.css('#addition')).nativeElement;
    add.click();
    fixture.detectChanges();
    expect(component.operation.emit).toHaveBeenCalled();
  })
  it('should emit the value (2) when button for subtraction is clicked', () => {
    spyOn(component.operation,'emit');
    let subtract = fixture.debugElement.query(By.css('#subtraction')).nativeElement;
    subtract.click();
    fixture.detectChanges();
    expect(component.operation.emit).toHaveBeenCalled();
  })
  it('should emit the value (3) when button for division is clicked', () => {
    spyOn(component.operation,'emit');
    let divide = fixture.debugElement.query(By.css('#division')).nativeElement;
    divide.click();
    fixture.detectChanges();
    expect(component.operation.emit).toHaveBeenCalled();
  })
  it('should emit the value (4) when button for multiplication is clicked', () => {
    spyOn(component.operation,'emit');
    let multiply = fixture.debugElement.query(By.css('#multiplication')).nativeElement;
    multiply.click();
    fixture.detectChanges();
    expect(component.operation.emit).toHaveBeenCalled();
  })
  it('should call the onButtonClick when button for addition is clicked', () => {
    let button = spyOn(component,'onButtonClick').and.callThrough();
    let clickedButton = fixture.debugElement.query(By.css('#addition')).nativeElement;
    clickedButton.click();
    expect(button).toHaveBeenCalledWith(1);
  })
  it('should call the onButtonClick when button for subtraction is clicked', () => {
    let button = spyOn(component,'onButtonClick').and.callThrough();
    let clickedButton = fixture.debugElement.query(By.css('#subtraction')).nativeElement;
    clickedButton.click();
    expect(button).toHaveBeenCalledWith(2);
  })
  it('should call the onButtonClick when button for division is clicked', () => {
    let button = spyOn(component,'onButtonClick').and.callThrough();
    let clickedButton = fixture.debugElement.query(By.css('#division')).nativeElement;
    clickedButton.click();
    expect(button).toHaveBeenCalledWith(3);
  })
  it('should call the onButtonClick when button for multiplication is clicked', () => {
    let button = spyOn(component,'onButtonClick').and.callThrough();
    let clickedButton = fixture.debugElement.query(By.css('#multiplication')).nativeElement;
    clickedButton.click();
    expect(button).toHaveBeenCalledWith(4);
  })

});
