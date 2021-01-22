<p align="center">React window event listener popstate</p>
<p align="center">
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
    isPrompt: true,
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
const { isBackButtonClicked } = usePopstate({ isPrompt, alertDescription, callback })
```

#### Parameters object
* `alertDescription` {`String`} Confirm prompt description
* `callback` {`Function`} Callback function
* `isPrompt` {`Booleen`} Use confirm propmt **default : false**

#### Return value
* `isBackButtonClicked` {`Booleen`} Back status

## Contributing
Feel free to submit any issues or pull requests.

## License
MIT
