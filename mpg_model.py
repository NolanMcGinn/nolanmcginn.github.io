#!/usr/bin/env python3

# display a welcome message
print("The Miles Per Gallon program")
print()

# get input from the user
miles_driven= float(input("Enter miles driven:\t\t"))
gallons_used = float(input("Enter gallons of gas used:\t"))
gas_price = float(input("What is the price of gas\t"))

# calculate miles per gallon
mpg = round((miles_driven / gallons_used), 1)
gas = round(gallons_used * gas_price, 1)
gas_mile =  round(gas/ miles_driven, 1)
            
# format and display the result
print()
print(f"Miles Per Gallon:\t\t{mpg}")
print(f"Gas cost:\t\t{gas}")
print(f"Cost per mile:\t{gas_mile}")
print()
print("Bye!")


