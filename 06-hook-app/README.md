
## useSTate()

Is the main React hook. It allow us to change a component and change it in the html,
not needing to refresh the whole html.

## useEffect()

This hook is triggered whenever a dependancy changes. It is usefull to do async task.
dependancies are the objects between brackets '[]'. If empty, it will trigger everytime 
the component is mounted.

## React.memo

Intended to keep a value when the function argument is the same.

## useMemo()

Intended to keep a value when its dependancies don't change. 
The first argument is the function that should be executed if the dependancies change.

## useCallback() 

It keeps a function reference while it dependancies dont change.
It returns the function so it can be called somewhere else.