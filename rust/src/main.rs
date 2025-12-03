use std::fs;

fn read_input(day: u8) -> Vec<String> {
    let base = env!("CARGO_MANIFEST_DIR");
    let filename = format!("{}/../inputs/day{:02}.txt", base, day);
    println!("{:?}", filename);
    let content = fs::read_to_string(filename).expect("Cannot read input file");

    content.lines().map(|s| s.to_string()).collect()
}

fn part1(data: &Vec<String>) -> u32 {
    // println!("{:?}", data);

    let mut total_power = 0;
    for (_, battery) in data.iter().enumerate() {
        let mut max_value = 0;

        let digits: Vec<u32> = battery
            .trim()
            .chars()
            .filter_map(|c| c.to_digit(10))
            .collect();

        for i in 0..digits.len() {
            for j in i+1 .. digits.len() {
                let value = digits[i] * 10 + digits[j];
                if value > max_value {
                    max_value = value
                }
            }
        }
        println!("  Largest digits: {} → {}", battery, max_value);
        
        total_power += max_value
    }
    print!("totalPower: {:?}", total_power);
    total_power
}

fn part2(data: &Vec<String>, limit: i32) -> u128 {
    // println!("{:?}", data);

    let mut total_power = 0;
    for (_, battery) in data.iter().enumerate() {
        let mut max_value = 0;

        let digits: Vec<u32> = battery
            .trim()
            .chars()
            .filter_map(|c| c.to_digit(10))
            .collect();

        let max_length = digits.len();
        let mut to_remove = max_length as i32 - limit as i32;
        let mut stack: Vec<u32> = Vec::new();

        for &digit in &digits {
            while !stack.is_empty() && to_remove > 0 && *stack.last().unwrap() < digit {
                stack.pop();
                to_remove -= 1;
            }
            stack.push(digit);
        }

        if stack.len() as i32 > limit {
            stack.truncate(limit as usize)
        }

        for &digit in &stack {
            max_value = max_value * 10 + digit as u128
        }

        println!("  Largest digits: {} → {}", battery, max_value);

        total_power += max_value;
        print!("totalPower: {:?}", total_power);
    }
    total_power
}

fn main() {
    let data = read_input(3);
    println!("Part 1: {:?}", part1(&data));
    println!("Part 2: {:?}", part2(&data, 12));
}
