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

=====================================================================================================================

#### Arrow functions ignore call, apply, and bind.

<reason> --> This is one of the most important concepts about arrow functions.

Short Answer

call(), apply(), and bind() are used to change this.

But arrow functions don't have their own this.

They capture (inherit) this from the surrounding lexical scope when they are created.

So there's nothing for call(), apply(), or bind() to change.

=================================================================================================================
