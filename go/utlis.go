package main

import (
	"fmt"
	"os"
	"strings"
)

func ReadInput(day int) ([]string, error) {
	filename := fmt.Sprintf("../inputs/day%02d.txt", day)
	data, err := os.ReadFile(filename)
	if err != nil {
		return nil, err
	}
	return strings.Split(strings.TrimSpace(string(data)), "\n"), nil
}
