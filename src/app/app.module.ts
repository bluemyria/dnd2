import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';


import { PreloadAllModules } from '@angular/router';

import { StoreRootModule, StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';


import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { SkyhookDndModule } from '@angular-skyhook/core';
import { routes } from './routes';
import { customMultiBackend } from './customMultiBackend';
import { HotkeyModule } from 'angular2-hotkeys';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules,
            useHash: true
        }),
        StoreRootModule,
        SkyhookDndModule.forRoot({ backendFactory: customMultiBackend }),
        // SkyhookDndModule.forRoot({ backend: TouchBackend }),
        // SkyhookDndModule.forRoot({ backend: MouseBackend }),
        StoreModule.forRoot(reducers, { metaReducers }),
        // !environment.production ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forRoot([AppEffects]),
        HotkeyModule.forRoot()
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
