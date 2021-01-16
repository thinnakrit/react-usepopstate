<p align="center">React window event listener popstate</p>
<p align="center">
    <a href="https://circleci.com/gh/thinnakrit/react-usepopstate">
        <img src="https://circleci.com/gh/thinnakrit/react-usepopstate.svg?style=svg" />
    </a>
    <a href="https://coveralls.io/github/thinnakrit/react-usepopstate?branch=master">
        <img src="https://coveralls.io/repos/github/thinnakrit/react-usepopstate/badge.svg?branch=master" />
    </a>
    <a href="https://www.npmjs.com/package/react-usepopstate">
        <img src="https://img.shields.io/npm/v/react-usepopstate.svg" />
    </a>
</p>

## Installation
Using npm:

```sh
$ npm install --save react-usepopstate
```

Using yarn:

```sh
$ yarn add react-usepopstate
```

## Quick Start
```javascript
import React from 'react';
import usePopstate from 'react-usepopstate';

const render = () => {
  	const { isBackButtonClicked } = usePopstate({
		alertDescription: 'Confirm back',
		callback: () => {
			alert('BACK')
		},
	})
 
  return (
    <>
      <div>Hello React!</div>
    </>
  );
}
```

## Documentation
```javascript
const { isBackButtonClicked } = usePopstate({ alertDescription, callback })
```

#### Parameters object
* `alertDescription` {`String`} Confirm propmt description
* `callback` {`Function`} Callback function

#### Return value
* `isBackButtonClicked` {`Booleen`} Back status

## Contributing
Feel free to submit any issues or pull requests.

## License
MIT
