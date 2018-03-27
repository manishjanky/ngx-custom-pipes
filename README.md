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

## Examples

* [demo-page](https://manishjanky.github.io/ngx-custom-pipes/)

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
* **`rtrim`** : trims off the chars from right side if match found.
````
<span>{{'hello-world' | rtrim : 'ld'}}</span>
````
````
hello-wor
````
* **`profileName`** : returns the short profile user name for a string.
* **`trim`** : trims off specified characters from start and end.
* **`ucfirst`** : changes first letter of string to uppercase.
* **`ucwords`** : change first letter of each word to uppercase

### Math Pipes
* **`ceil`** : returns the ceiling value of a floating point number.
* **`degrees`** : converts radians to degrees.
* **`floor`** : returns the floor value of a floating point number.
* **`fromBinary`** : returns the decimal,octal,hexadecimmal etc representation of a binary number.
* **`mean`** : returns the mean of an array of numbers.
* **`median`** : returns the median of an array of numbers.
* **`mode`** : returns the mode of an array of numbers.
* **`prcnt`** : returns the percentage of value of a number.
* **`pow`** : returns a number raised to power.
* **`radians`** : converts degrees to radians.
* **`roundoff`** : rounds off the number to specified decimal places.
* **`sqrt`** : returns the square root of a number.
* **`toBinary`** : returns binary or octal or hexadecimal representation of a decimal number.

### Array Pipes
* **`contains`** : returns `true/false` if the item is present in the array or not.
* **`diff`** : returns difference between two arrays i.e the items unique to both arrays.
* **`dupes`** : returns the items which occur more than once in array i.e duplicates.
* **`filterBy`** : filters an array based on searctext.
* **`limitTo`** : limit the records to specified number of items from particular index.
* **`ltrim`** : trims an array from left for specified count of numbers.
* **`max`** : returns the max value in a array of numbers.
* **`merge`** : merges/concats two or more arrays.
* **`min`** : returns the minimum value in a array of numbers.
* **`omit`** : returns an array after omiting the specified items.
* **`range`** : returns an array containing the items in specified range.
* **`reverse`** : reverses an array.
* **`rtrim`** : trims an array from right with specified count of numbers.
* **`shuffle`** : returns an array with items shuffled.
* **`sortBy`** : returns a sorted array
* **`sum`** : returns sum of an array of numbers.
* **`trim`** : trims an array from both ends with specified count of numbers.
* **`unique`** : returns array with unique entries eleiminating duplicates. 

## Help Improve

Found a bug or an issue with this? [Open a new issue](https://github.com/manishjanky/ngx-custom-pipes/issues) here on GitHub.
