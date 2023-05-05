import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'app-root',
  template: `<template #alertContainer></template>
  <button (click)="createComponent('success')">Create success alert</button>
  <button (Click)="createComponent('danger')">Create danger alert</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 //viewchild decorator use to get referance to the templete element
  @ViewChild("alertContainer",{read: ViewContainerRef}) container: any;
  componentRef!: ComponentRef<any>;
  title: any;

  constructor(private resolver:ComponentFactoryResolver) {
    
  }

  createComponent(type: any){
    //when create a component and we need to remove it we use this clear()
    this.container.clear();
    //this resloveComponentFactory() method takes a component and returns to the componentFactory
    const ComponentFactory =this.resolver.resolveComponentFactory(AlertComponent);
    //create() method used by container to display componentRef
    this.componentRef=this.container.createComponent(ComponentFactory);
    // reference to our new component, and we can set the type Input
    this.componentRef.instance.type=type;
    //subscribe to a component Output like this
    this.componentRef.instance.output.subscribe((event: any)=>console.log(event));
  }
//destory the newly create component
  ngOnDestroy(){
    this.componentRef.destroy();
  }
}
