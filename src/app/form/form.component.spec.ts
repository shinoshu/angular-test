import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('firstName should be validation error', () => {
    const firstName = component.addressForm.get('firstName');
    firstName.setValue('');
    expect(firstName.hasError('required')).toBeTruthy();
  });

  it('postalCode should be validation error of required', () => {
    const postalCode = component.addressForm.get('postalCode');
    postalCode.setValue('');
    expect(postalCode.hasError('required')).toBeTruthy();
  });

  it('postalCode should be validation error of required', () => {
    const postalCode = component.addressForm.get('postalCode');
    postalCode.setValue('');
    expect(postalCode.hasError('required')).toBeTruthy();
  });

  it('postalCode should be validation error of minlength', () => {
    const postalCode = component.addressForm.get('postalCode');
    postalCode.setValue('123');
    expect(postalCode.hasError('minlength')).toBeTruthy();
  });

  it('postalCode should be validation error of maxlength', () => {
    const postalCode = component.addressForm.get('postalCode');
    postalCode.setValue('123456');
    expect(postalCode.hasError('maxlength')).toBeTruthy();
  });

  it('number of textarea element should be two', () => {
    component.hasUnitNumber = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const elementList = compiled.querySelectorAll('textarea');
    expect(elementList.length).toEqual(2);
  });

  it('state should be validation error of required', () => {
    const state = component.addressForm.get('state');
    state.setValue('');
    expect(state.hasError('required')).toBeTruthy();
  });
});
