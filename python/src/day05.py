from utils import read_input, split_by_empty_line


def part1(data):
    range_list, number_list = split_by_empty_line(data)

    ranges = [tuple(map(int, r.split("-"))) for r in range_list]
    if not ranges:
        return len(number_list)
    
    ranges.sort()
    merged = []
    for low, high in ranges:
        if not merged or low > merged[-1][1] + 1:
            merged.append([low, high])
        else:
            merged[-1][1] = max(merged[-1][1], high)
    
    fresh_count = 0
    for num_str in number_list:
        num = int(num_str)
        # Check if num is in any merged range
        is_fresh = False
        for low, high in merged:
            if low <= num <= high:
                is_fresh = True
                break
        if is_fresh:
            fresh_count += 1
    
    return fresh_count


def part2(data):
    range_list, number_list = split_by_empty_line(data)
    ranges = [tuple(map(int, r.split("-"))) for r in range_list]
    if not ranges:
        return len(number_list)
    
    ranges.sort()
    merged = []
    for low, high in ranges:
        if not merged or low > merged[-1][1] + 1:
            merged.append([low, high])
        else:
            merged[-1][1] = max(merged[-1][1], high)
    
    range_count = 0
    for low, high in merged:
        range_count += high - low + 1
    
    return range_count


if __name__ == "__main__":
    data = read_input("day05")
    print("Part 1:", part1(data))
    print("Part 2:", part2(data))