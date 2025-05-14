The `::` syntax in the `::new` line indicates that `new` is an associated function of the `String` type.

`.read_line(& mut guess)` calls the `read_line` method on the standard input handle to get input from the user. The string argument needs to be mutable so the method can change the string's content.

The `&` indicates that this argument  is a *reference* 

Variables, references are immutable by default

It's often wise to introduce a newline and other whitespace to help break up long lines when you call a method with the `.method_name()` syntax.

`Result` has an `expect` method that you can call. If this instance of `Result` is an `Err` value, `expect` will cause the program to crash and display the message that you passed as an argument  to `expect`.

The variable name can go inside the curly brackets`{}`

Cargo can reuse what it has already downloaded and compiled.

`Cargo.lock` file is important for reprodducible builds, it's often checked into source control with the rest of the code in your project

*Shadow* lets us reuse the `guess` variable name rather tham forcing us to create two unique variables. This feature is often used when you want to convert a value frome one type to another type.

The `trim` method on a `String` instance will eliminate any thitespace at the beginning and end.

If user type `5` and press `enter`, the input will looks like this `5\n`.

The `trim` method eliminates `\n` or `\r\n`.

The `prase` method on string vonverts a string to another type.

If the `prase` fails, it will returns an `Err` `Result` variant because it couldn't create a number from the string.

We could use different ways to handle the Result

## Introduce to the programming concept

We can shadow a variable by using the same variable's name and repeating the use of the `let` keyword.

You must know the types of all variables at compile time.

The compiler can usually infer what type we want to use based on the value and how we use it.

Number literals can also use `_` as a visual separator to make the number easier to read, such as `1_000`, which will have the same value as if you had specified `1000`.

When you're compiling in release mode with the `--release` flag, Rust does not include checks for integer overflow that cause panics. Instead, if overflow occurs, Rust performs two's *complement wrapping*.

The default floating type is `f64` because on modern CPUs, it's roughly the same speed as `f32` but is capable of more precision.

Integer division truncates toward zero to the nearest integer.

Boolean are one byte in size, the boolean type in Rust is specified using `bool`.

Note that we specify `char` literals with single quotes, as opposed to string literals, which use double quotes.

Rust's `char` type is four bytes in size and represents a Unicode Scalar Value.

Rust has two primitive compound types: tuples and arrays.

A *tuple* is a general way of grouping together a number of values with a variety of types into one compound type.

Tuples have a fixed length: once declared, they cannot grow or shrink in size.

The types of the different values in the tuple don't have to be the same.

To get the individual values out of a tuple, we can use pattern matching to restructure a tuple value, like this:

`let tup = (500,6.4,1);`

`let (x, y, z) = tup;`

We can also access a tuple element  directly  by using a period(`.`) followed by the index of the value we want to access. The first index in a tuple is 0.

The tuple without any values has a special name, *unit*. This value and its corresponding type are both written `()` and represent  an empty value or an empty return type.

Unlike a tuple, every element of an array must have the same type. Unlike arrays in some other languages, arrays in Rust have a fixed length.

A *vector* is a similar collection type provided by the standara library that is allowed to grow or shrink in size. Arrays are more useful when you know the number of elements will not need to change.

You write an array's type using square brackets with the type of each element, a semicolon, and then the number of elements in the array, like so:

`let a: [i32; 5] = [1, 2, 3, 4, 5];`

Here, `i32` is the type of each element. After the semicolon, the number `5` indicates the array contains five elements.

You can also initialize an array to contain the same value for each element by specifying the initial value, followed by a semicolon, and then the length of the array in square brackets, as shown here:

`let a = [3;5]`

Array is a single chunk of memory of a known, fixed size that can be allocated on the stack(堆)

## Functions

The `fn` keyword allows you to declare new function.

Rust code uses *snake case* as the conventional style for function and variables names, in which all letters are lowercase and underscores separate words.

In functin signatures, you must declare the type of each parameter.

- **Statements** are instructions that perform some action and do not return a value.
- **Expressions** evaluate to a resultant value.

*Calling* a function is not a statement. `let a = 6` is a statement.

*Calling* a marco is an expression.

Expression do not include ending semicolons. If you add a semicolon to the end of an expression, you turn it into a statement, and it will then not return a value.

### Functions with return values

Functions can return values to the code that calls them. We don't name return values, but we must declare their type after an arrow(`->`). In Rust, the return value of the function is synonymous with the value of the final expression in the block of the body of a function. You can return early from a functin by using  `retun` keyword.

Return `()` as its body has no tail or `return` expression.

### If expression

Unlike languages such as JavaScript, Rust will not automatically try to convert non-Boolean types to Boolean. You must be explicit and always provide `if` with a Boolean as its condition.

Using many `else if` expressions can clutter your code, so if you have more than one, you might want to refactor your code.

`if` is a expression but not statement.

Rust has three kinds of loops: `loop`, `while`, and `for`.

You can place the `break` keyword within the loop to tell the program when to stop executing the loop.

We also use `continue` in the guessing game, which in a loop tells the program to skip over any remaining code in this iteration of the loop and go to the mext iteration.

*** You migth also need to pass the result of that operation out of the loop to the rest of your code. To do this, you cam add the value you want returnd after the `break` expression you use to stop the loop;

#### Loop Labels to Disambiguate Between multiple Loops

If you have loops within loops, `break` and `continue` apply to the innermost loop at that point. You can optionally specify a *loop label* on a loop that you can then use with `break` or `continue` to specify that those key words apply to the labeled loop instead of the innermost loop.

**Loop labels must begin with a single quote.**

You can also use the `while` construct to loop over the elements of a collection, such as an array.

As a more concise alternative, you can use a `for` loop and execute some code for each item in a collection. A `for` loop looks like the code behind:

``fn main(){``

``let a = [10, 20 ,30 ,40, 50];``

``for element in a{``

``println!("The value is{element}");}}``

or using the code behind:

`for number in (1..4).rev(){}`

*Ownership* is a set of rules that govern how a Rust program manages memory.

### now is owner ship

