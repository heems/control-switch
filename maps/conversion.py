filename = raw_input("Filename?\n")

f = open(filename, 'rw')

map_array = []

for line in f:
	print line