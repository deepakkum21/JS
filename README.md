# JS (Javascript)

## Synchronous single threaded lang

1. **Everything in JS happens `inside the execution engine`**.
2. This execution environment has two components:-
   1. **Memory component/ variable environment**
      - it stores all the variable (in form of key value) and functions.
      - it is the `phase one (where the initial value for variable is undefined)`
      - the value for function is the code inside the function.
   2. **Code component/ Thread of execution**
      - it is the place where code is executed.
      - it is single thread where code is executed one line at a time.
      - it is the second phase.
      - it `replaces the value of variable the current one`.
      - for function it creates a new execution context and so on if another function is present inside .
3. A Call stack is maintained where the 1st one is Global exectuion context
   - it `maintains the execution order of execution context`.
   - Also called as `runtime stack, control stack, program stack, execution context stack, machine stack`
