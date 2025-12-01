import java.io.File

fun readInput(day: Int): List<String> = File("../inputs/day%02d.txt".format(day)).readLines()

fun part1(data: List<String>): Any? {
    return null
}

fun part2(data: List<String>): Any? {
    return null
}

fun main() {
    val data = readInput(1)
    println("Part 1: ${part1(data)}")
    println("Part 2: ${part2(data)}")
}
