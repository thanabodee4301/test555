import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    let data2 = this.mockData();
    let data3 = this.calculateSomeThing(data2.opt1);
    let data = data3;
    console.log('skajkw', data3);
    console.log('data ::',  data2.opt1);
  }
  mockData(){
    return  {
      displayType: 'statisticcard',
      positionIndex: 2,
      opt1: [
          {
              index: 1,
              title: 'Sessions',
              subtitle: '(Number of visited times)',
              image: 'http://itp1.itopfile.com/ImageServer/552103ef5ba6b75f/1903/0/iTopPlus786879209955.jpg',
              current: 3978,
              compare: 3035,
              // diff: '',
              text1: 'october',
              text2: 'september',
          },
          {
              index: 2,
              title: 'Pages / Session',
              subtitle: '(Number of viewed pages per each time)',
              image: 'http://itp1.itopfile.com/ImageServer/552103ef5ba6b75f/1903/0/iTopPlus786879209955.jpg',
              current: 4.27,
              compare: 1.86,
              // diff: '',
              text1: '',
              text2: '',
          },
          {
              index: 3,
              title: 'Time Spent',
              subtitle: '(How long they visited per each time)',
              image: 'http://itp1.itopfile.com/ImageServer/552103ef5ba6b75f/1903/0/iTopPlus786879209955.jpg',
              current: 500,
              compare: 1000,
              // diff: '',
              text1: '',
              text2: '',
          },
          {
              // aHR0cDovL2l0cDEuaXRvcGZpbGUuY29tL0ltYWdlU2VydmVyLzU1MjEwM2VmNWJhNmI3NWYvMTkwMy8wL2lUb3BQbHVzNzg2ODc5MjA5OTU1LmpwZw==
              index: 4,
              title: 'Users',
              subtitle: '(Number of users)',
              image: 'http://itp1.itopfile.com/ImageServer/552103ef5ba6b75f/1903/0/iTopPlus786879209955.jpg',
              current: 3191,
              compare: 2594,
              // diff: '',
              text1: '',
              text2: '',
          },
      ],
  }
  }
  calculateSomeThing(data) {
    for (var i = 0; i < data.length; i++) {
        var diff = data[i].current - data[i].compare;
        var diff2 = ((diff / data[i].compare) * 100).toFixed(2);
        if (Number(diff2) < 0) {
            data[i].check = false;
            diff2 = diff2.replace('-', '');
        } else {
            data[i].check = true;
        }
        data[i].diff = diff2;
    }
    return data;
}
}
