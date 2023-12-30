NF = 0
counter = 0
input('presione "enter" para iniciar el programa')
N = int(input('¿Cuántas notas tiene?\n'))
while counter<N:
    print('\n','<'*20,'>'*20,'\n')
    print('Ingrese el porcentaje de su nota ', counter+1, ':', sep='')
    porcent = float(input())
    print('Ingrese su nota ', counter+1, ':', sep='')
    nota = float(input())
    NF += (((20*(porcent/100))*nota)/20)
    counter += 1

print('\n','<'*20,'>'*20,'\n')
print('Su nota final del curso es:',NF)
print('\n','<'*20,'>'*20,'\n')
input('presione "enter" para finalizar el programa')
