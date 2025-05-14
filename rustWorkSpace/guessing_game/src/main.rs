use std::io;
fn main() {
    let a = [1, 2, 3, 4, 5];
    println!("Please enter an array index");
    let mut index: String = String::new();
    io::stdin()
        .read_line(& mut index)
        .expect("Failed to read line");
    let index: usize = index.trim().parse().expect("Index entered was not a number");
    let element = a[index];
    println!("The number of the a[index] is {}", element);
    another_function();
    

}
//iterate迭代
fn another_function(){
    println!("This is a another function");
}
//In rust, the variable is immutable by default
//reference is immutable by default
 