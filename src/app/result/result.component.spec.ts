import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponent } from './result.component';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    component.receive = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('ngOnChanges called', () =>{
    spyOn(component, 'ngOnChanges').and.callThrough();
    component.ngOnChanges();
    fixture.detectChanges();
    expect(component.ngOnChanges).toHaveBeenCalled();
  })
  it('ngOnInit called', () =>{
    spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.ngOnInit).toHaveBeenCalled();
  })
  it('if value of operation received is 1 (addition) then result should be 4', ()=>{    
    component.receive = {first: 1,second: 3,op: 1};
    component.compute();
    fixture.detectChanges();
    expect(component.result).toBe(4);
  })
  it('if value of operation received is 2 (subtraction) then result should be 0', ()=>{    
    component.receive = {first: 15,second: 15,op: 2};
    component.compute();
    fixture.detectChanges();
    expect(component.result).toBe(0);
  })
  it('if value of operation received is 3 (division) then result should be 5', ()=>{    
    component.receive = {first: 50,second: 10,op: 3};
    component.compute();
    fixture.detectChanges();
    expect(component.result).toBe(5);
  })
  it('if value of operation received is 4 (multiplication) then result should be 100', ()=>{    
    component.receive = {first: 50,second: 2,op: 4};
    component.compute();
    fixture.detectChanges();
    expect(component.result).toBe(100);
  })
  it('if addition operation fired, compute should be called', () => {
    let computeCall = spyOn(component,'compute').and.callThrough();
    component.receive = {first: 50,second: 2,op: 1};
    component.compute();
    expect(computeCall).toHaveBeenCalled();
  })
  it('if subtraction operation fired, compute should be called', () => {
    let computeCall = spyOn(component,'compute').and.callThrough();
    component.receive = {first: 50,second: 2,op: 2};
    component.compute();
    expect(computeCall).toHaveBeenCalled();
  })
  it('if division operation fired, compute should be called', () => {
    let computeCall = spyOn(component,'compute').and.callThrough();
    component.receive = {first: 50,second: 2,op: 3};
    component.compute();
    expect(computeCall).toHaveBeenCalled();
  })
  it('if multiplication operation fired, compute should be called', () => {
    let computeCall = spyOn(component,'compute').and.callThrough();
    component.receive = {first: 50,second: 2,op: 4};
    component.compute();
    expect(computeCall).toHaveBeenCalled();
  })
 
});
