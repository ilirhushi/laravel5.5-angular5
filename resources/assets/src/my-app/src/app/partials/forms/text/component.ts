import { BaseInputComponent } from '../base-input.component';
import { Component, Input, ViewChild } from '@angular/core';

@Component({
    selector: 'text',
    template: `<div
	class="form-group has-feedback"
	[formGroup]="group"
	[ngClass]="{'has-error':!group.controls[field].valid, 'has-success':group.controls[field].valid}">
	<label
		for="{{ field }}">
		{{ label }}
	</label>
	<div class="input-group">
		<input
			type="text"
			class="form-control"
			id="field"
			name="{{ field }}"
			placeholder="{{ placeholder }}"
			formControlName="{{ field }}">
        <span class="input-group-addon" *ngIf="sufix" [innerHTML]="sufix"></span>
        <span class="input-group-btn" *ngIf="sufixBtn">
			<button type="button" class="btn btn-flat {{ sufixBtnClass }}" [innerHTML]="sufix"></button>
        </span>
	</div>
	<span class="glyphicon form-control-feedback" aria-hidden="true"></span>
</div>`
})
export class TextComponent extends BaseInputComponent {

    constructor() {
        super();
    }

}
