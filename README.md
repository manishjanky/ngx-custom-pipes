# ngx-custom-pipes

[![GitHub license](https://img.shields.io/github/license/manishjanky/ngx-custom-pipes.svg)](https://github.com/me-and/mdf/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/ngx-custom-pipes.svg)]()
[![Build Status](https://travis-ci.org/manishjanky/ngx-custom-pipes.svg?branch=master)](https://travis-ci.org/manishjanky/ngx-custom-pipes)
[![Codecov branch](https://codecov.io/gh/manishjanky/ngx-custom-pipes/branch/master/graphs/badge.svg)]()
[![npm](https://img.shields.io/npm/dt/ngx-custom-pipes.svg)]()
[![GitHub top language](https://img.shields.io/github/languages/top/manishjanky/ngx-custom-pipes.svg)]()
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/manishjanky/ngx-custom-pipes.svg)]()
[![GitHub issues](https://img.shields.io/github/issues/manishjanky/ngx-custom-pipes.svg)]()
[![GitHub closed issues](https://img.shields.io/github/issues-closed/manishjanky/ngx-custom-pipes.svg)]()
[![GitHub contributors](https://img.shields.io/github/contributors/manishjanky/ngx-custom-pipes.svg)]()

`ngx-custom-pipes` is Bootstrap(4) based pagination module for Angular(2+) applications.

## Examples

* [demo-page](https://manishjanky.github.io/ngx-custom-pipes-demo/)

## Installation

* `npm install ngx-custom-pipes`
* `npm install bootstrap@4.0.0-alpha.6 --save-dev`
* include bootstrap scripts and styles in you `angular-cli.json` to be build of your build process.
* or include bootstrap css in your index.html 

`````
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
`````
* Right now `bootstrap@4.0.0-alpha.6` is supported will add support for other versions soon.

### For webpack and tsc builds/ angular-cli builds

* import `PaginationModule` from `ngx-custom-pipes`:

```
import { PaginationModule } from 'ngx-custom-pipes'
```

* add `PaginationModule` to the imports of your NgModule:

```
@NgModule({
  imports: [
    ...,

    PaginationModule
  ],
  ...
})
class YourModule { ... }
```

* use `<ng-pagination></ng-pagination>` in your templates to add pagination in your view like below

```
<ng-pagination [position]="'left'" [pageSize]="10" [itemsCount]="data.length" [data]="data" (getPageData)="getPageData($event)"></ng-pagination>
```

* do not forget to include bootstrap css in your build process, module or index.html!

## Config

### Input

* `pageSize: number` - Size of a page i.e number of items to be displayed in one page.
* `itemsCount: number` - total no of itmes that needs ro be paged/total no of records.
* `position: string` - position of the pagination respect to parent contrainer of your pagination component.
* `data: Array` - Optional | the data needs to be paged default is null. If pagination is handled by api no need of data.

### Output

* `getPageData: EventEmitter` - emmited when user navigates to a page. Caputure this and update you view data. The events contains the following info

```
{
    event: event: Event,
    pageNo: pageNo: number,
    pageSize:pageSize: number,
    data: null| Array,
}
```
- **event**: the triggered event
- **pageNo**: current page number
- **pageSize**: current page size. No of items per page
- **data**: data is the array of records that belongs to this page. Will be `null` if data was not passed and you can fetch data from your api or the way you want it to handle

## Changelog
* v1.4.1
````
 Added support for Observable Data Source.
 Current items range display bug when itemcount 0 bug fix .
````

## Help Improve

Found a bug or an issue with this? [Open a new issue](https://github.com/manishjanky/ngx-custom-pipes/issues) here on GitHub.
