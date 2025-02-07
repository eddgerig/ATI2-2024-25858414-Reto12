import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute
import { RouterTestingModule } from '@angular/router/testing'; // Importa RouterTestingModule
import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  // Mock de ActivatedRoute
  const mockActivatedRoute = {
    snapshot: {
      paramMap: {
        get: (key: string) => 'mockValue', // Simula un parámetro de ruta
      },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeComponent, RouterTestingModule], // Añade RouterTestingModule
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute }, // Proporciona el mock
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});