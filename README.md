react-frostedglass
==================

A React utility library to blur stuff immediately or after some time.

## Why??

The first reason is that I wanted to make a standalone React library, even if it's useless. ;)

The other more (sort of) convincing reason  is to enable you to temporarily hide sensitive information on your components.

_Imagine the user of your app suddenly turns from their desk and is now chatting with a co-worker. Their screen hasn't locked and now anyone passing behind them or staring at the screen can see all the information they are viewing on a customer. What if we could thwart this invasive nosey person by blurring parts of the screen when the window is not focused._

> NOTE: This is still a Work In Progress and not production-ready and I have only tested it on a toy project, if you are serious about using this - send PRs am sure there are better ways and missing things.

## Usage

First step is to add a context provider to wrap your components so that standard config can be shared across child nodes:

```jsx
import FrostedContext 'react-frostedglass/Label'

function App() {
    const focusCheckInterval = 10_000;
    const [blurSize, isFrosted] = useFrostEffect(focusCheckInterval, '0.3em')

    return (
        <FrostedContext.Provider value={{ blurSize: blurSize}}>
            <Account />
        </FrostedContext.Provider>
    )
}
```


Second step is to use one of the built in "Frosted" versions of some DOM elements, currently only `div` via `FrostedDiv`, `label` via `FrostedLabel`, `span` via `FrostedSpan`.  Incase you want to apply the frost effect on a an element that's not built in you can use the `withFrost()` function

```jsx
import FrostedSpan 'react-frostedglass/Span'

function Account() {
    const user = {
        email: 'user@example.com',
        phone: '+265-xxx-xxx-xxx',
        addres: 'Address 1, City, Country'
    };

    return (
        <div>
            <div className="field">
                <label>Email</label>
                <FrostedSpan>{user.emai}</FrostedSpan>
            </div>

            <FrostedDiv>
                <p>{user.phone}</p>
                <p>{user.address}</p>
            </FrostedDiv>

            <section {...withFrost({ blurSize: '0.3em' })}>
                Some section that's frosted by default...
            </section>
        </div>
    )
}
```

