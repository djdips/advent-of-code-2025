package main

import (
	"fmt"
	"log"
)

func part1(data []string) any {
	return nil
}

func part2(data []string) any {
	return nil
}

func main() {
	data, err := ReadInput(1)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Part 1:", part1(data))
	fmt.Println("Part 2:", part2(data))
}
