def read_input(day):
    with open(f"../inputs/day{day:02}.txt") as f:
        return [line.strip() for line in f.readlines()]