One-Liner Interview Answer
Method	Executes Immediately?	Arguments
call()	✅ Yes	Separate arguments
apply()	✅ Yes	Array of arguments
bind()	❌ No	Separate arguments, returns new function

The most important thing to remember:

All three methods allow us to explicitly set the value of this.

call() and apply() execute immediately, while bind() returns a new function with this permanently bound.

====================================================================================================================

| Method | Purpose             | Returns      |
| ------ | ------------------- | ------------ |
| map    | Transform each item | New array    |
| filter | Keep/reject items   | New array    |
| reduce | Combine all values  | Single value |
