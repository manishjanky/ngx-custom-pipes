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

`ngx-custom-pipes` custom pipes module for angular 4 and above applications.

## Installation

* `npm install ngx-custom-pipes`

### For webpack and tsc builds/ angular-cli builds

* import `CustomPipesModule` from `ngx-custom-pipes`:

```
import { CustomPipesModule } from 'ngx-custom-pipes'
```

* If you dont want all the pipes and want pipes for `String` or `Math` or `Array` only then import only the required module.

```
import { MathPipesModule } from 'ngx-custom-pipes';
// or
import { ArrayPipesModule } from 'ngx-custom-pipes'
// or
import { StringPipesModule } from 'ngx-custom-pipes'
```

* add `CustomPipesModule` or `MathPipesModule` or `ArrayPipesModule` or `StringPipesModule` to the imports of your NgModule: as per your requirements

```
@NgModule({
  imports: [
    ...,

    CustomPipesModule, MathPipesModule, ArrayPipesModule, StringPipesModule
  ],
  ...
})
class YourModule { ... }
```

## Usage
### String Pipes
* **`cuurencyAbbrev`** : Currency short name/ abbreviation
````
<span>{{10000 | cuurencyAbbrev}}</span> 
<span>{{'1,000,000,000' | cuurencyAbbrev}}</span>
````
````
10.00K
1.00B
````
* **`camelCase`** : Converts the string to camel case with seperators ``(-,_, )``
`````
<span>{{'hello world' | camelCase}}</span>
<span>{{'hello_world' | camelCase}}</span>
<span>{{'hello-world' | camelCase}}</span>
`````
````
HelloWorld
HelloWorld
HelloWorld
````
* **`ltrim`** : trims the characters from left if match found.
````
Usage: str | ltrim: [chars?: string]
````
````
<span>{{'hello-world' | ltrim : 'hello'}}</span>
````
````
-world
````
* **`padEnd`** : pads the string at end where target length of string will be string length + `count`. Default character for padding is space.
````
Usage: str | padEnd: [padCount: number] : [chars?: string]
````
````
<span>{{'hello-world' | padEnd : 3 : 'hello'}}</span>
````
````
hello-worldhel
````
* **`padStart`** : pads the string at start where target length of string will be string length + `count`. Default character for padding is space.
````
Usage: str | padStart: [padCount: number] : [chars?: string]
````
````
<span>{{'hello-world' | padStart : 3 : 'hello'}}</span>
````
````
helhello-world
````
* **`repeat`** : repeats the string n number of times.
````
Usage: str | repeat: [repeatCount: number]
````
````
<span>{{'hello world' | repeat : 3}}</span>
````
````
hello worldhello worldhello world
````
* **`replaceFirst`** : replaces the first occurance of particular character with specified characters or just replace them with empty string if replacWith not specified.
````
Usage: str | replaceFirst: [replaceChar: string] : [replaceWith?: string]
````
````
<span>{{'hello world' | replaceFirst : 'h' : 'def'}}</span>
````
````
defello world
````
* **`replaceLast`** : replaces last occurance of of particular character with specified characters.
````
Usage: str | replaceLast: [replaceChar: string] : [replaceWith?: string]
````
````
<span>{{'hello world' | replaceLast : 'h' : 'def'}}</span>
<span>{{'hello world hello' | replaceLast : 'hello' : 'howdy'}}</span>
````
````
defello world
hello world howdy
````
* **`replace`** : replaces all occurrances of particular character with specified characters.
````
Usage: str | replace: [replaceChar: string] : [replaceWith?: string]
````
````
<span>{{'hello world hello' | replace : 'h' : 'def'}}</span>
````
````
defello world defello
````
* **`reverse`** : reverses the string
````
Usage: str | reverse
````
````
<span>{{'hello world' | reverse}}</span>
````
````
dlrow olleh
````
* **`rtrim`** : trims off the chars from right side if match found.
````
<span>{{'hello-world' | rtrim : 'ld'}}</span>
````
````
hello-wor
````
* **`profileName`** : returns the short profile user name for a string.
````
Usage: str | profileName
````
````
<span>{{'hello world' | profileName}}</span>
<span>{{'user name' | profileName}}</span>
````
````
HW
UN
````
* **`trim`** : trims off specified characters from start and end if match found.
````
Usage: str | trim : [chars?: string]
````
````
<span>{{'hello world hello' | trim : 'hello'}}</span>
````
````
world
````
* **`ucfirst`** : changes first letter of string to uppercase.
````
Usage: str | ucfirst
````
````
<span>{{'hello world' | ucfirst}}</span>
````
````
Hello world
````
* **`ucwords`** : change first letter of each word to uppercase.
````
Usage: str | ucwords
````
````
<span>{{'hello world' | ucwords}}</span>
````
````
Hello World
````

### Math Pipes
* **`ceil`** : returns the ceiling value of a floating point number.
````
Usage: number | ceil
````
````
<span>{{1.234 | ceil}}</span>
````
````
2
````
* **`degrees`** : converts radians to degrees.
````
Usage: number | degrees
````
````
<span>{{5 | degrees}}</span>
````
````
286.479
````
* **`floor`** : returns the floor value of a floating point number.
````
Usage: number | floor
````
````
<span>{{286.479 | floor}}</span>
````
````
286
````
* **`fromBinary`** : returns the decimal representation of a binary , octal, hexadecimal etc. number.
````
Usage: number | fromBinary :[base?: number]
````
````
<span>{{'00001100' | fromBinary}}</span>
<span>{{2322 | fromBinary : 8}}</span>
````
````
12
1234
````
* **`mean`** : returns the mean of an array of numbers.
````
Usage: number[] | mean
````
````
<span>{{[1, 2, 34, 5, 6, 7] | mean}}</span>
````
````
9.166666666
````
* **`median`** : returns the median of an array of numbers.
````
Usage: number[] | median
````
````
<span>{{[1, 2, 4, 5, 7] | median}}</span>
<span>{{[1, 2, 4, 5, 7, 8] | median}}</span>
````
````
4
4.5
````
* **`mode`** : returns the mode of an array of numbers.
````
Usage: number[] | mode
````
````
<span>{{[3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4, 6] | mode}}</span>
````
````
[3]
````
* **`prcnt`** : returns the percentage of value of a number.
````
Usage: number | prcnt :[total?: number]
````
````
<span>{{23 | prcnt}}</span>
<span>{{23 | prcnt : 200}}</span>
````
````
23%
11.5%
````
* **`pow`** : returns a number raised to power.
````
Usage: number | pow : [power: number]
````
````
<span>{{5 | pow : 3}}</span>
<span>{{23 | pow : 4}}</span>
````
````
125
279841
````
* **`radians`** : converts degrees to radians.
````
Usage: number | radians
````
````
<span>{{90 | radians}}</span>
````
````
1.5708
````
* **`roundoff`** : rounds off the number to specified decimal places and nearest integer if digits not specified.
````
Usage: number | roundoff : [digits?: number]
````
````
<span>{{123.566767 | roundoff : 3}}</span>
<span>{{876.566767 | roundoff}}</span>
````
````
123.566
877
````
* **`sqrt`** : returns the square root of a number.
````
Usage: number | sqrt
````
````
<span>{{225 | sqrt}}</span>
````
````
15
````
* **`toBinary`** : returns binary or octal or hexadecimal representation of a decimal number.
````
Usage: number | toBinary : [base?: number]
````
````
<span>{{12 | toBinary}}</span>
<span>{{1234 | toBinary: 8}}</span>
````
````
1100
2322
````

### Array Pipes
* **`contains`** : returns `true/false` if the item is present in the array or not.
````
Usage: array | contains : [item: any]
````
````
<span>{{[1, 2, 3, 4, 5] | contains : 4 }}</span>
````
````
true
````
* **`diff`** : returns difference between two arrays i.e the items unique to both arrays.
````
Usage: array | diff : [array_2: any[]]
````
````
<span>{{[1, 2, 3, 4, 5] | diff : [2, 3, 7, 8, 1] }}</span>
````
````
[4, 7, 5, 8]
````
* **`dupes`** : returns the items which occur more than once in array i.e duplicates.
````
Usage: array | dupes
````
````
<span>{{[1, 2, 3, 3, 8, 5, 2, 4, 5] | dupes}}</span>
````
````
[2, 3, 5]
````
* **`filterBy`** : filters an array based on searctext.
````
Usage: array | filterBy : [searchText: string] : [keyName?: string]
keyName: in case array of objects and filter required for a particular key
````
````
<span>{{['star', 'galaxy', 'sun', 'moon', 'earth'] | filterBy: 'ar'}}</span>
````
````
['star', 'earth']
````
* **`limitTo`** : limit the records to specified number of items from particular index.
````
Usage: array | limitTo : [itemsCount: number] : [startIndex?: number]
````
````
<span>{{['star', 'galaxy', 'sun', 'moon', 'earth'] | limitTo: 3 : 0}}</span>
````
````
['star', 'galaxy', 'sun']
````
* **`ltrim`** : trims an array from left for specified count of numbers.
````
Usage: array | ltrim : [itemsCount: number]
````
````
<span>{{[12, 34, 5, 56, 546, 34, 3, 54] | ltrim: 3}}</span>
````
````
[56, 546, 34, 3, 54]
````
* **`max`** : returns the max value in a array of numbers.
````
Usage: array | max
````
````
<span>{{[12, 34, 5, 56, 546, 34, 3, 54] | max}}</span>
````
````
546
````
* **`merge`** : merges/concats two or more arrays.
````
Usage: array | merge : [...arrays: any[]]
````
````
<span>{{[1, 2, 3, 4] | merge : [21, 32, 4] : ['a', 'f']}}</span>
````
````
[1, 2, 3, 4, 21, 32, 4, 'a', 'f']
````
* **`min`** : returns the minimum value in a array of numbers.
````
Usage: array | min
````
````
<span>{{[12, 34, 5, 56, 546, 34, 3, 54] | min}}</span>
````
````
3
````
* **`omit`** : returns an array after omiting the specified items.
````
Usage: array | omit : [omitItems: any[]]
````
````
<span>{{[1, 2, 3, 4, 5, 6, 7] | omit : [4, 7, 9]}}</span>
````
````
[1, 2, 3, 5, 6]
````
* **`range`** : returns an array containing the items in specified range.
````
Usage: array | range : [startIndex: number] : [endIndex?: numbers]
````
````
<span>{{[1, 2, 3, 4, 5, 6, 7] | range : 2 : 5}}</span>
<span>{{[1, 2, 3, 4, 5, 6, 7] | range : 2}}</span>
````
````
[3, 4, 5]
[3, 4, 5, 6, 7]
````
* **`reverse`** : reverses an array.
````
Usage: array | reverse
````
````
<span>{{[1, 2, 3, 4, 5, 6, 7] | reverse}}</span>
````
````
[7, 6, 5, 4, 3, 2, 1]
````
* **`rtrim`** : trims an array from right with specified count of numbers.
````
Usage: array | rtrim : [itemcCount: number]
````
````
<span>{{[1, 2, 3, 4, 5, 6, 7] | rtrim: 3}}</span>
````
````
[1, 2, 3, 4]
````
* **`shuffle`** : returns an array with items shuffled.
````
Usage: array | shuffle 
````
````
<span>{{[1, 2, 3, 4, 5, 6, 7] | shuffle}}</span>
````
````
[3, 7, 1, 2, 6, 5, 4]
````
* **`sortBy`** : returns a sorted array
````
Usage: array | sortBy : [reverse: boolean] : [keyName?: string] 
keyName: the key according to which the array needs to be sorted in case array of objects
````
````
<span>{{['asd', 'def', 'bghi', 'nhm'] | sortBy}}</span>
<span>{{[2, 8, 3, 6, 34, 12] | sortBy: true}}</span>
<span>{{[{name:'name2'} , {name:'name1'} , {name:'name3'}] | sortBy: true : 'name'}}</span>
````
````
['asd', 'bghi', 'def', 'nhm']
[34, 12, 8, 6, 3, 2]
[{name:'name1'} , {name:'name2'} , {name:'name3'}]
````
* **`sum`** : returns sum of an array of numbers.
````
Usage: array | sum
````
````
<span>{{[1, 2, 8, 9, 19] | sum}}</span>
````
````
39
````
* **`trim`** : trims an array from both ends with specified count of numbers.
````
Usage: array | trim : [itemsCount : number]
````
````
<span>{{[1, 2, 3, 4, 5, 6, 7, 8, 9] | trim : 2}}</span>
````
````
[3, 4, 5, 6, 7]
````
* **`unique`** : returns array with unique entries eleiminating duplicates.
````
Usage: array | unique
````
````
<span>{{[1, 2, 33, 4, 4, 5, 66, 33, 4] | unique}}</span>
````
````
[1, 2, 33, 4, 5, 66]
```` 

## Help Improve

Found a bug or an issue with this? [Open a new issue](https://github.com/manishjanky/ngx-custom-pipes/issues) here on GitHub.
