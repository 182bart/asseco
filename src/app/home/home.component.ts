import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServiceService } from '../service.service';
import { Model } from '../models/model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  modelList!: any;
  model!: Model;
  fraud!: number;
  currentInput: any;
  modelName;
  loanding = false;
  added = false;

  constructor(private servis: ServiceService) {}

  ngOnInit(): void {
    this.getModels();
  }

  ngOnDestroy() {
    this.modelList.unsubscribe();
  }

  //  Get models form server
  getModels() {
    this.modelList = this.servis
      .fetchModels()
      .subscribe((models) => (this.modelList = models));
  }

  // added model is a copy of one previously created models

  addModel(event) {
    if (event.target.files.length > 0) {
      this.modelName = event.target.files[0].name;
      const newModel =
        this.modelList[Math.floor(Math.random() * this.modelList.length)];
      newModel.id = '';
      this.loanding = true;
      this.added = false;
      setTimeout(() => {
        this.loanding = false;
        this.added = true;
        this.servis.addModel(newModel).subscribe(() => {
          this.getModels();
        });
      }, 5000);
    }
  }

  calculateFraud(model) {
    model.fraud = Math.random();
    model.fraud = model.fraud.toFixed(2);
  }

  // remove Model from server
  removeModel(model: Model) {
    this.servis.deleteModel(model).subscribe(() => {
      this.getModels();
    });
  }
}
