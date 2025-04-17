import matplotlib . pyplot as plt
import numpy as np
import random
import math

mean = [ 3 , 3 ]
cov = [ [ 1 , 0 ] , [ 0 , 1 ] ]
a = np.random.multivariate_normal(mean, cov , 500).T
mean = [- 3 , -3]
cov = [[ 2 , 0 ] , [ 0 , 5 ] ]
b = np.random.multivariate_normal(mean, cov , 500).T
c = np.concatenate( ( a , b ) ,axis = 1 )
c = c.T
np.random.shuffle(c)
c = c.T

x = c[0]
y = c[1]

plt.plot(x, y, 'x')

# Ensure the axes have equal scaling
plt.axis('equal')

# Show the plot
#plt.show()
'''
import matplotlib.pyplot as plt
import numpy as np

# Definindo os parâmetros das distribuições Gaussianas
mean1 = [3, 3]  # Centro do primeiro conjunto
cov1 = [[1, 0], [0, 1]]  # Covariância do primeiro conjunto

mean2 = [-3, -3]  # Centro do segundo conjunto
cov2 = [[2, 0], [0, 5]]  # Covariância do segundo conjunto

# Gerando os dois conjuntos de pontos
a = np.random.multivariate_normal(mean1, cov1, 500)
b = np.random.multivariate_normal(mean2, cov2, 500)

# Adicionando labels para identificar o conjunto 1 e conjunto 2
a = np.hstack((a, np.ones((a.shape[0], 1))))
b = np.hstack((b, np.zeros((b.shape[0], 1))))

# Juntando e baralhando os conjuntos
data = np.vstack((a, b))
np.random.shuffle(data)

# Plotando os pontos
plt.scatter(data[:, 0], data[:, 1], c=data[:, 2])
plt.axis('equal')
#plt.show()

# Salvando o conjunto em um ficheiro
np.savetxt("data_kmeans.csv", data, delimiter=",")'''


''' EXERCICIO 111111111111111111111111111 E TAAAAAAAAAAAAAAL
a=10e-5
r1, r2 = c.T[np.random.choice(range(c.T.shape[0]), 2)]
hr1, hr2 = [r1.copy()], [r2.copy()]

for i in range(0,10):
    for x in c.T:

        if np.linalg.norm(x - r1) < np.linalg.norm(x - r2):
            r1 = (1 - a) * r1 + a * x
        else:
            r2 = (1 - a) * r2 + a * x
        
    hr1.append(r1.copy())
    hr2.append(r2.copy())
    
plt.plot([r[0] for r in hr1], [r[1] for r in hr1], 'ro-', label='r1')
plt.plot([r[0] for r in hr2], [r[1] for r in hr2], 'bo-', label='r2')
plt.legend()
plt.show()
'''


''' EXERCICIO 111111111111111111 E TAAAAAAAAAAAAAAAL 2222222222222222222
a=10e-5

r1, r2 = c.T[np.random.choice(range(c.T.shape[0]), 2)]

hr1, hr2 = [r1.copy()], [r2.copy()]

for i in range(0,10):
    for x in c.T:
        d1, d2, n1ex, n2ex = 0, 0 ,0 ,0

        if np.linalg.norm(x - r1) < np.linalg.norm(x - r2):
            d1 += x - r1
            n1ex +=1
        else:
            d2 += x - r2
            n2ex +=1
    
    if n1ex >0:
        r1 += (a/n1ex)*d1
    if n2ex >0:
        r2 += (a/n2ex)*d2
    
    hr1.append(r1.copy())
    hr2.append(r2.copy())
    
plt.plot([r[0] for r in hr1], [r[1] for r in hr1], 'ro-', label='r1')
plt.plot([r[0] for r in hr2], [r[1] for r in hr2], 'bo-', label='r2')
plt.legend()
plt.show()
'''

r1 = c.T[np.random.choice(c.T.shape[0])]
p = np.array([20.0,20.0])

while len(c.T)>2:
    for i in c.T:
        #if np.linalg.norm(x[:2] - r1) < p:
        print(i)
        print(r1)
        print(np.linalg.norm(i - r1))
        break
    break

#plt.show()