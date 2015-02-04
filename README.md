[![Build Status](https://travis-ci.org/formly-js/angular-formly.svg)](https://travis-ci.org/formly-js/angular-formly)
[![Coverage Status](https://img.shields.io/coveralls/formly-js/angular-formly.svg)](https://coveralls.io/r/formly-js/angular-formly)

## Angular-Formly: Bootstrap Template
This is a template for Angular-Formly which adds templates with classes specific to bootstrap. Each field is wrapped in a div. This library is not standalone and requires angular-formly to be present and loaded.

### Demo http://formly-js.github.io/angular-formly

## Dependencies
- Required to use Formly:
 - Angular
 - Angular-Formly

- Dev dependencies to build Formly
 - npm


## Install in your project
- Install [Angular-Formly](https://github.com/formly-js/angular-formly)

- Install Angular-Formly: Bootstrap Templates
 `$ bower install angular-formly angular-formly-templates-bootstrap --save`

 or

 `$ npm install angular-formly angular-formly-templates-bootstrap --save`

- Include the javascript file in your index.html, Formly comes in the following flavors:
 `<script src="bower_components/angular-formly/dist/formly.min.js"></script>`
 `<script src="bower_components/angular-formly-templates-bootstrap/dist/angular-formly-templates-bootstrap.min.js"></script>`

 and

 `angular.module('yourModule', ['formly', 'formlyBootstrap']);`

 or

 `angular.module('yourModule', [require('angular-formly'), require('angular-formly-templates-bootstrap')]);`

## Documentation

See [Angular-Formly](https://github.com/formly-js/angular-formly) for formly core documentation.

### Common Properties

NOTE: All of these properties will be under the `templateOptions` property as of angular-formly 3.0.0

---
##### label (string)
>`label` is used to add an html label to each field.

###### Default
>A default is set for each field based on its type. ie `Text`, `Checkbox`, `Password`

---
##### required (boolean)
>`required` is used to add the required attribute to a form field.

###### Default
>`undefined`

---
##### hide (boolean)
>`hide` is used to conditionally show the input. When true, the input is hidden (meant to be used with a watch).

###### Default
>`undefined`

---
##### disabled (boolean)
>`disabled` is used to add the disabled attribute to a form field.

###### Default
>`undefined`

---
##### placeholder (string)
>`placeholder` is used to add placeholder text to some inputs.

###### Default
>`undefined`

---
##### description (string)
>`description` is used to add descriptive text to all inputs.

###### Default
>`undefined`

### Fields

### Form Fields

Below is a detailed description of each form fields and its custom properties.

#### Input form field
>The input uses the <input> element and allows you to specify it's type via the type property

##### default (string, optional)

_Example text field_
```json
	{
		"type": "text",
		"key": "firstName",
		"templateOptions": {
		  "type": "email", // or url, or text, etc.
      "placeholder": "jane doe",
      "label": "First name"
		}
	}
```

---
#### Textarea form field
>The textarea field creates multiline input with a textarea element.

##### default (string, optional)

##### lines (number, optional)
>`lines` sets the rows attribute for the textarea element.

_Example textarea field_
```json
	{
		"type": "textarea",
		"key": "about",
		"templateOptions": {
      "placeholder": "I like puppies",
      "label": "Tell me about yourself",
      "rows": 4,
      "cols": 15
		}
	}
```

---
#### Checkbox form field
>The checkbox field allows checkbox input with a input element set to `type='checkbox'`. It doesn't have any custom properties.

##### default (boolean, optional)

_Example checkbox field_
```json
	{
		"type": "checkbox",
		"key": "checkThis",
		"templateUrl": {
      "label": "Check this box"
		}
	}
```

---
#### Radio form field
>The radio field allows multiple choice input with a series of linked inputs, with `type='radio'`.

##### options (array, required)
>`options` is an array of options for the radio form field to display. Each option should be an object with a `name`(string) and `value`(string or number).

_Example radio field_
```json
	{
		"key": "triedEmber",
		"type": "radio",
		"templateOptions": {
      "label": "Have you tried EmberJs yet?",
      "options": [
        {
          "name": "Yes, and I love it!",
          "value": "yesyes"
        },
        {
          "name": "Yes, but I'm not a fan...",
          "value": "yesno"
        },
        {
          "name": "Nope",
          "value": "no"
        }
      ]
		}
	}
```

---
#### Select form field
>The select field allows selection via dropdown using the select element.

##### default (number, optional)
>The default can be set to the index of one of the `options`.

##### options (array, required)
>`options` is an array of options for the select form field to display. Each option should be an object with a `name`(string). You may optionally add a `group` to some or all of your options.

_Example select field_
```json
	{
		"key": "transportation",
		"type": "select",
		"templateOptions": {
      "label": "How do you get around in the city",
      "options": [
        {
          "name": "Car"
        },
        {
          "name": "Helicopter"
        },
        {
          "name": "Sport Utility Vehicle"
        },
        {
          "name": "Bicycle",
          "group": "low emissions"
        },
        {
          "name": "Skateboard",
          "group": "low emissions"
        },
        {
          "name": "Walk",
          "group": "low emissions"
        },
        {
          "name": "Bus",
          "group": "low emissions"
        },
        {
          "name": "Scooter",
          "group": "low emissions"
        },
        {
          "name": "Train",
          "group": "low emissions"
        },
        {
          "name": "Hot Air Baloon",
          "group": "low emissions"
        }
      ]
		}
	}
```


---
#### Number form field
>The number field allows input that is restricted to numbers. Browsers also provide minimal ui to increase and decrease the current value.

##### default (number, optional)

##### min (number, optional)
>`min` sets minimum acceptable value for the input.

##### max (number, optional)
>`max` sets maximum acceptable value for the input.

_Example number field_
```json
	{
		"key": "love",
		"type": "number",
		"templateOptions": {
      "label": "How much love?",
      "min": 0,
      "max": 100,
      "required": true
		}
	}
```


## Contributing

Please see the [CONTRIBUTING Guidelines](CONTRIBUTING.md).

## Thanks

A special thanks to [Nimbly](http://gonimbly.com) for creating/sponsoring Angular-Formly's development.
Thanks to [Kent C. Dodds](https://github.com/kentcdodds) for his continued support on the project.
