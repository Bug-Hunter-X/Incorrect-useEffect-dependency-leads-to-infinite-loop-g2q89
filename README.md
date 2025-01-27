# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving the `useEffect` hook.  The problem stems from an incorrect dependency array, causing an infinite loop and unexpected behavior.

## Bug Description
The `MyComponent` function uses `useEffect` to update a counter every second. However, the `count` state variable is missing from the dependency array. This causes the effect to run repeatedly, leading to an infinite loop and the counter not updating correctly.

## Solution
The solution involves adding the `count` variable to the dependency array. This ensures the effect only runs when the `count` value changes.