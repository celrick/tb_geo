import numpy as np
from openpyxl import load_workbook
import time
import sys
from collections import Counter

#for name in names:
#    pass


def main(celltype):
    #load notebook
     workbook = load_workbook(filename="platoons_SM.xlsx")
     sheet=workbook.active
     
     #select cells
     cell_labels_top = [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
     cell_labels_middle = [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35]
     cell_labels_bottom = [38,39,40,41,42,43,44,45,46,47,48,49,50,51,52]
     cell_labels1 = ["A","B","C","D","E","F"]
     cell_labels2dict = {"top":cell_labels_top,\
                         "bottom":cell_labels_bottom, \
                         "middle":cell_labels_middle}
     
     # add toons to a list
     toons = []
     for label1 in cell_labels1:
         for label2 in cell_labels2dict[celltype]:
             cell = label1 + str(label2)
             toons.append(sheet[cell].value)
     
     # count number of occurances
     sorted_toons = Counter(toons)
     
     #format output
     str_sorted_toons = str(sorted_toons)[9:-2]
     str_sorted_toons = str_sorted_toons.replace(":" , ",")
     numbers = [1,2,3,4,5,6,7,8,9,10]
     runner2 = 0
     for num in numbers:
         str_sorted_toons = str_sorted_toons.replace(str(num) , "'" + str(num) + "'")
     print(str_sorted_toons)
    
     
     
     #format output
     #output = "[ "
     #for runner in range(len(sorted_toons)):
     #    output += "'"
     #    output += sorted_toons[runner][0]
     #    output += ", "
     #    output += sorted_toons[runner][1]
        
     #print(output)
     return None



if __name__=='__main__':
    main(sys.argv[1])
    
     
   
     
     
     
  



