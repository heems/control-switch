import textwrap

filename = raw_input("Filename?\n")

f = open(filename, 'rw')
text = f.read()
text = ','.join(textwrap.wrap(text, 1))
print text

map_array = []