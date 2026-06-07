import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleProducto } from './detalle-producto';

describe('DetalleProducto', () => {
  let component: DetalleProducto;
  let fixture: ComponentFixture<DetalleProducto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleProducto],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleProducto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
