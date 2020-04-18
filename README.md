# delivery-much-sre-challenge
Desafio delivery Much



## Descrição do Projeto

Neste repositório você encontrará duas aplicações (front/back) em node.js e um arquivo seed para a base MySQL.
•	front serve uma página html que se comunica com back para enviar as preferências
•	back salva preferências e o IP real do requisitante vindas do front no banco de dados
•	mysql contem o arquivo de inicialização para criação da base

## Deploy na AWS

Utilizando:

máquina EC2:
  Intâncias :        | ipv4-pbulic IP
    • frontend-app      3.22.176.54
    • node-app          3.21.84.1
    
máquina RDS:
  Endpoint: node-app.cjeffeg10qrd.us-east-2.rds.amazonaws.com
  Engine: MySQL Community

## Acesso ao Front-End
http://3.22.176.54

## Acesso ao Back-End
http://3.21.84.1

No front-end ao acessarmos o dominio e selecionarmos um radio-box e submitermos é retornado id, ip e preference persistida no banco

No Back-End ao acessar o dominio podemos verificar o status do RDS

