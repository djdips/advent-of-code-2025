package aoc2025

fun main() {
    val input = readInput("day02")

    println("Part 1: ${part1(input)}")
    println("Part 2: ${part2(input)}")
}

fun splitInHalfInt(str: String): Pair<Long, Long> {
    val mid = (str.length + 1) / 2
    val firstHalf = str.take(mid).toLong()
    val secondHalf = if (mid < str.length) str.substring(mid).toLong() else 0L
    return Pair(firstHalf, secondHalf)
}

fun detectPattern(s: String): Long {
    val len = s.length
    for (i in 1..len / 2) {
        val pattern = s.take(i)
        val repeated = pattern.repeat(len / i)
        if (repeated == s) return pattern.toLong()
    }
    return 0L
}

fun part1(rawData: List<String>): Long {
    var sumOfInvalidNumbers = 0L
    val input = rawData.flatMap { it.split(",") }.filter { it.trim().isNotEmpty() }
    for (range in input) {
        val (start, end) = range.split("-")
        for (num in start.toLong() .. end.toLong()) {
            val numStr = num.toString()
            if (numStr.startsWith("0")) {
                sumOfInvalidNumbers += num
            }

            val (first, second) = splitInHalfInt(numStr)
            if (first - second == 0L) {
                sumOfInvalidNumbers += num
            }
        }
    }
    println(sumOfInvalidNumbers)
    return sumOfInvalidNumbers
}

fun part2(rawData: List<String>): Long {
    var sumOfInvalidNumbers = 0L
    val input = rawData.flatMap { it.split(",") }.filter { it.trim().isNotEmpty() }
    for (range in input) {
        val (start, end) = range.split("-")
        for (num in start.toLong() .. end.toLong()) {
            val numStr = num.toString()
            if (numStr.startsWith("0")) {
                sumOfInvalidNumbers += num
            }

            val repeatedSequence = detectPattern(numStr)
            if (repeatedSequence > 0L) {
                sumOfInvalidNumbers += num
            }
        }
    }
    println(sumOfInvalidNumbers)
    return sumOfInvalidNumbers
}