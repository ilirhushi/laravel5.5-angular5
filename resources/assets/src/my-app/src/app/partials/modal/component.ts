import { Component, ElementRef, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
	selector: 'modal',
    template: `<div
	class="modal fade"
	tabindex="-1"
	id="{{ modalId }}"
	#modal>
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header bg-light-blue">
				<h5 class="modal-title" [innerHTML]="titulo">
				</h5>

				<h5 class="modal-title">
					<a href="#" class="reset-modal" data-dismiss="modal" style="color:#fff">
						<i class="fa fa-times fa-lg"></i>
					</a>
				</h5>
			</div>
			<div class="modal-body">
				<div class="row">
					<div class="col">
						<ng-container *ngIf="content; else noContent">
							<ng-container *ngTemplateOutlet="content"></ng-container>
						</ng-container>
					</div>
				</div>
			</div>
			<div class="modal-footer">
				<ng-container *ngIf="footer; else noContent">
					<ng-container *ngTemplateOutlet="footer"></ng-container>
				</ng-container>
			</div>
		</div>
	</div>
</div>

<ng-template #noContent>
	No hay contenido
</ng-template>`
})
export class ModalComponent {

	@Input()
	public modalId: string;

	@Input()
	public modalClass: string;

	@Input()
	public titulo: string;

	@Input()
	public content: TemplateRef<any>;

	@Input()
	public footer: TemplateRef<any>;

	@ViewChild('modal')
	public modal: ElementRef;

	constructor(){
	}

	public show(){
		// $(this.modal.nativeElement).modal('show');
	}

	public hide(){
		// $(this.modal.nativeElement).modal('hide');
	}

}