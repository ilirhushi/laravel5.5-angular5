import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'btn',
    template: `<button
		#button
		class="{{ classes }} {{extraClass}}"
		[disabled]="disabled">
		<i *ngIf="icon" class="{{ icon }}"></i>
		<ng-content></ng-content>
	</button>`,
})
export class ButtonComponent {

	@Input()
	public classes: string = 'btn bg-light-blue btn-flat';

	@Input()
	public extraClass: string = '';

	@Input()
	public icon: string = '';

	@Input()
	public modal: string;

	@Input()
	public disabled: boolean = false;

	@ViewChild('button')
	public button: any;

	constructor(public element: ElementRef){
	}

	ngOnInit(){
		if(this.modal){
			this.button.nativeElement.setAttribute('data-toggle', 'modal');
			this.button.nativeElement.setAttribute('data-target', this.modal);
		}
	}

}