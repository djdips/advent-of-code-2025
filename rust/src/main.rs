use std::fs;

fn read_input(day: u8) -> Vec<String> {
    let filename = format!("../inputs/day{:02}.txt", day);
    let content = fs::read_to_string(filename).expect("Cannot read input file");
    content.lines().map(|s| s.to_string()).collect()
}

fn part1(data: &Vec<String>) -> Option<i32> {
    None
}

fn part2(data: &Vec<String>) -> Option<i32> {
    None
}

fn main() {
    let data = read_input(1);
    println!("Part 1: {:?}", part1(&data));
    println!("Part 2: {:?}", part2(&data));
}
