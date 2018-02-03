import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './buttons/component';
import { CheckboxComponent } from './forms/checkbox/component';
import { CheckboxGroupComponent } from './forms/checkbox-group/component';
import { NumberComponent } from './forms/number/component';
import { PasswordComponent } from './forms/password/component';
import { SearchComponent } from './forms/search/component';
import { TextComponent } from './forms/text/component';
import { ListComponent } from './list/component';
import { ModalComponent } from './modal/component';

export const partialsComponents = [
    ButtonComponent,
    ListComponent,
    ModalComponent,
    CheckboxComponent,
    CheckboxGroupComponent,
    NumberComponent,
    PasswordComponent,
    TextComponent,
    SearchComponent
];

@NgModule({
    declarations: partialsComponents,
    exports: partialsComponents,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class PartialsModule {}
