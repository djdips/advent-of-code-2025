def read_input(filename):
    with open(f"../inputs/{filename}.txt") as f:
        return [line.strip() for line in f.readlines()]

def split_by_empty_line(data):
    new_line_index = data.index("")
    return data[:new_line_index], data[new_line_index + 1:]