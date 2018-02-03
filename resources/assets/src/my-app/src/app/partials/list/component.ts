import { Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';

// | paginate: { itemsPerPage: 10, currentPage: page, totalItems: totalRows }
@Component({
    selector: 'list',
    template: `<div class="list-group">
                    <ng-template #list [ngIf]="dataSource" [ngIfElse]="loading">
                        <ng-template #list [ngIf]="dataSource.length > 0" [ngIfElse]="loading">
                            <li
                                class="list-group-item list-group-item-action flex-column align-items-start"
                                *ngFor="let data of dataSource"
                                (click)="clickAction($event, data)">
                                <ng-template [ngTemplateOutlet]="templateRef" [ngTemplateOutletContext]="{$implicit: data}"></ng-template>
                            </li>
                        </ng-template>
                    </ng-template>
                </div>

                <ng-template #loading>
                    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">Cargando</h5>
                        </div>
                    </a>
                </ng-template>

                <ng-template #listEmpty>
                    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">No se han econtrado registros</h5>
                        </div>
                    </a>
                </ng-template>`
})
export class ListComponent implements OnInit {

    @Input()
    public dataSource: any[] = [];

    @Input()
    public page: number = 1;

    @Input()
    public totalRows: number = 0;

    @Output()
    public action: EventEmitter<any> = new EventEmitter();

    @ContentChild(TemplateRef)
    public templateRef: TemplateRef<any>;

    constructor(public element: ElementRef) {
    }

    ngOnInit() {

    }

    public clickAction(_event: any, _data: any) {
    // console.log('clickAction()', _event, _data);
    this.action.emit(_data);
    }

}
