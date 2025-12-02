package aoc2025

fun readInput(name: String): List<String> {
    val inputStream = object {}.javaClass.getResourceAsStream("/$name.txt")
        ?: throw IllegalArgumentException("File not found: $name.txt")
    return inputStream.bufferedReader().readLines()
}