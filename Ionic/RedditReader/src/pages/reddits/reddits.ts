
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { RedditService } from './../../app/services/reddit.service';
import { DetailsPage } from './../details/details';


@IonicPage()
@Component({
  selector: 'page-reddits',
  templateUrl: 'reddits.html',
})
export class RedditsPage {
  items: any;
  category: any;
  limit: any;
  constructor(public navCtrl: NavController, private redditService: RedditService) {
    this.getDefaults();
  }

  ngOnInit(){
    this.getPosts(this.category, this.limit);
  }

  getDefaults(){
    if(localStorage.getItem("category") != null){
      this.category = localStorage.getItem("category");
    }else{
      this.category = "instantkarma";
    }
    if(localStorage.getItem("limit") != null){
      this.limit = localStorage.getItem("limit");
    }else{
      this.limit = 10;
    }
  }

  changeCategory() {
    this.getPosts(this.category, this.limit);
  }

  getPosts(category, limit){
    this.redditService.getPost(category, limit).subscribe(response =>
      {
        this.items = response.data.children;
      });
  }

  viewItem(item){
    this.navCtrl.push(DetailsPage, {
        item:item
    });
  }
}
