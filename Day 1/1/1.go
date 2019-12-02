package main

import (
	"bufio"
	"fmt"
	"log"
	"math"
	"os"
	"strconv"
)

func main() {
	var totalMasses []string
	totalFuel := 0

	file, err := os.Open("./masses.txt")
	if err != nil {
		log.Fatal(err)
	}

	// Good practice yeah.
	defer file.Close()

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		totalMasses = append(totalMasses, scanner.Text())
	}

	for _, mass := range totalMasses {
		toInt, _ := strconv.ParseFloat(mass, 8)
		totalFuel += int(math.Floor(toInt/3.0) - 2)
	}

	fmt.Println(totalFuel)
}
