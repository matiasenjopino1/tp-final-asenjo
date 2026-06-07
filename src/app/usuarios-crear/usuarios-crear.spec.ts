import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosCrear } from './usuarios-crear';

describe('UsuariosCrear', () => {
  let component: UsuariosCrear;
  let fixture: ComponentFixture<UsuariosCrear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuariosCrear],
    }).compileComponents();

    fixture = TestBed.createComponent(UsuariosCrear);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
