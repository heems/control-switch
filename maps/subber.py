f1 = open('dump.txt', 'r')
f2 = open('done.txt', 'w')
for line in f1:
    f2.write(line.replace('39', '0'))
f1.close()
f2.close()
