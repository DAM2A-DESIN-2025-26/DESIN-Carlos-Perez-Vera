# Copilot Instructions for DESIN-Carlos-Perez-Vera

## Project Overview
A multi-unit coursework workspace containing:
- **Ud1**: HTML/JavaScript exercises (learning fundamentals)
- **Ud2**: TypeScript projects and Angular examples (modern patterns)
- **Ud4**: Two Ionic/Angular applications (AsturiasExplorer, primerEjercicio)

## Key Architecture Patterns

### Ud4 - Ionic/Angular Applications

**AsturiasExplorer** (Main project):
- **Mixed routing approach**: Combines lazy-loaded modules (`home`) with standalone components (`inicio`, `rutas`, `gastro`)
- Route path: [app-routing.module.ts](Ud4/AsturiasExplorer/src/app/app-routing.module.ts#L1)
- Modules: `home` uses NgModule pattern with declarations; pages may use standalone or module-based
- Bootstrap: Traditional NgModule via [main.ts](Ud4/AsturiasExplorer/src/main.ts)

**Component Architecture**:
- Reusable layout components in `src/app/components/` (header, footer, navbar, main)
- Page components in `src/app/pages/` with feature routing (inicio, rutas, gastro)
- Pages implement `OnInit` with both constructor injection and signal patterns in newer code

**Services** (Data Layer):
- Domain-specific services like `RutaService` and `GastronomiaService` at page level
- Example: [RutaService](Ud4/AsturiasExplorer/src/app/pages/rutas/ruta.service.ts#L1) provides mock data with `providedIn: 'root'`
- Model files define interfaces (e.g., `ruta.model.ts`)

**Ud2 - Modern Angular Patterns**:
- `Ud2/Prueba` uses standalone components with `bootstrapApplication()` 
- `Ud2/Actividades/ud2_act2/smart_track_app` uses `ApplicationConfig` with providers
- Services use `inject()` for dependency injection instead of constructors

### Dependency Injection Patterns
1. **Traditional (AsturiasExplorer)**: Constructor injection with private fields
2. **Modern (Ud2 projects)**: `inject()` function for component-level DI

```typescript
// Traditional - AsturiasExplorer
constructor(private userService: UserService) {}

// Modern - Ud2 projects
userService = inject(UserService);
```

## Build & Development Workflows

### Scripts (all projects use Angular CLI)
```bash
npm start          # ng serve - dev server on http://localhost:4200
npm run build      # Ionic: outputs to www/ (Ud4/AsturiasExplorer)
npm test           # ng test - Karma/Jasmine
npm run lint       # ESLint with @angular-eslint plugins
npm run watch      # Development build with watch
```

### Key Files
- [angular.json](Ud4/AsturiasExplorer/angular.json): Build config; Ionic apps output to `www/` not `dist/`
- [tsconfig.json](Ud4/AsturiasExplorer/tsconfig.json): Strict mode enabled, ES2022 target
- [ionic.config.json](Ud4/AsturiasExplorer/ionic.config.json): Type is "angular"

## Project-Specific Conventions

### Naming & File Organization
- Components: `*.component.ts|html|scss` (declaration-based or standalone)
- Pages: `*.page.ts|html|scss` with optional `*.module.ts` and `-routing.module.ts`
- Services: `*.service.ts` placed within feature folders or `services/` directory
- Models: `*.model.ts` defines interfaces

### Routing Rules
- **Lazy load with modules**: `loadChildren: () => import('./module').then(m => m.ModuleName)`
- **Standalone components**: `loadComponent: () => import('./page').then(m => m.PageComponent)`
- **Root strategy**: `RouteReuseStrategy` set to `IonicRouteStrategy` for Ionic apps
- **Preloading**: All routes preload with `PreloadAllModules` strategy in Ud4 projects

### Testing Pattern
- Jasmine specs in `.spec.ts` files
- Ionic components wrapped in `IonicModule.forRoot()` for TestBed
- Example: [header.component.spec.ts](Ud4/AsturiasExplorer/src/app/components/header/header.component.spec.ts)

## Integration Points

### Ionic Framework
- Toolbar, Header, Content, Button, Icon components from `@ionic/angular`
- Icons from `ionicons` (v7)
- Standalone mode requires `imports: [IonApp, IonRouterOutlet, ...]` in component

### HttpClient
- Used in Ud2 services (e.g., DragonballService)
- Provided via `provideHttpClient()` in ApplicationConfig

### Reactive Programming
- **Signals**: Used for state management in newer code (`signal()` from `@angular/core`)
- **RxJS**: Services use `Observable` and `.subscribe()` patterns

## Cross-Cutting Concerns

### Styling
- SCSS modules per component (`*.component.scss`)
- Global styles: [global.scss](Ud4/AsturiasExplorer/src/global.scss), [variables.scss](Ud4/AsturiasExplorer/src/theme/variables.scss)
- Ionic theming via CSS variables in theme folder

### Module vs. Standalone Coexistence
AsturiasExplorer mixes both patterns:
- Bootstrap module app (`AppModule` with `NgModule`)
- Some pages as lazy-loaded modules (home)
- Other pages as standalone components (inicio, rutas, gastro)
- Keep consistency within each feature; standalone for new pages

## Common Commands When Extending

```bash
# Generate new Ionic page with routing
ng generate page pages/new-page

# Generate service at page level
ng generate service pages/feature/feature.service

# Run tests
npm test

# Serve and navigate to http://localhost:4200/your-path
npm start
```

## When Adding Code

1. **New pages**: Use `loadComponent` in routing if standalone, not part of existing module
2. **New services**: Place in feature folder with `providedIn: 'root'` unless locally scoped
3. **New components**: Add to `components/` if shared across multiple pages; keep styling isolated with component-scoped SCSS
4. **Testing**: Each component/service should have `.spec.ts` with proper TestBed setup for Ionic components
