import math

with open("masses.txt") as f:
    mass_array = f.readlines()

def main():    
    total_fuel = 0
    for mass in mass_array:
        total_fuel += math.floor(float(mass) / 3) - 2

    print(total_fuel)

main()