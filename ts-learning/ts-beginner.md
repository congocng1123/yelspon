# 1. Types

- Null and undefined are not the same

- enums is one of the user-defined types

  tuple 

## 1.1 Variables

- naming cannot includes spaces and special characters, except underscore(_) and the dollar($)

​    in the past, we use **var** to declare Variables, but now, we use **let** and **const**.

- variables declarations

  the type syntax for declaring a variable in ts is to include a colon(:) after the variable name, followed by its type.just like:

  - let a : number = 1;
  - const a : type = balabala;

- Declare its type but no value. In this situation, the variable will be set to **undefined**.

- declare a variable but no type and value, it will be **any**.

​    Now, when using the **string** type, we always use \`\`to define it.

- The ts complier will illustrate the errors.

  (It is a strong-type coding language )

## 1.2 Type assertion

- TS allows changing a variable from one type to another. This process is called **Type Assertion**. 

  (类似于c语言中的强制类型转换)

  Ths syntax is to put the target type between \<\> symbols and place it in front of the variables or expression.

  - Why call type assertion?

    the reason is that "type assertion" are purely a compile time construct and a way for you to provide hints to the compiler on how you want your code to be analyzed.

