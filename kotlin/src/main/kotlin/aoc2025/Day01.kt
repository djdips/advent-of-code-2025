package aoc2025

fun part1Day1(lines: List<String>): Int {
    var pos = 50
    val max = 99
    var count = 0

    for (line in lines) {
        val dir = line[0]
        val steps = line.substring(1).toInt()
        pos = if (dir == 'L') (pos - steps) else (pos + steps)
        pos = ((pos % 100) + 100) % 100     // wrap safely

        if (pos == 0) count++
    }

    return count
}

fun part2Day1(lines: List<String>): Int {
    var pos = 50
    val size = 100
    var count = 0

    fun passes(from: Int, move: Int): Int {
        return ( (from + move) / size ) - (from / size)
    }

    for (line in lines) {
        val dir = line[0]
        val steps = line.substring(1).toInt()
        val move = if (dir == 'R') steps else -steps

        count += passes(pos, move)

        pos = ((pos + move) % size + size) % size

        if (pos == 0) count++
    }

    return count
}
