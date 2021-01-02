Projeto Backend Anestech

Criação de uma Api para saber o tempo gasto nas tarefas diárias.

Tecnologias :
•	Node 12.16.3.
•	Express 4.17.1
•	Mysql2 2.2.5
•	Sequelize 6.3.5
•	Sequelize-cli 6.0.2
•	Yup 0.32.8
•	Eslint 7.16.0
•	Nodemon 2.0.6
•	Sucrase 3.16.0
•	SGBD mysql

Requisitos: 
Estrutura de usuários: 
•	Nome; 
•	Email. 

Estrutura das Tarefas: 
 Descrição; 
•	Responsável (usuário); 
•	Status (aberto, fazendo, finalizado); 
•	Data e hora de início (quando a tarefa entra no status ‘fazendo’); 
•	Data e hora de finalização; 
•	Data e hora de criação. Na rota que lista todas as tarefas: 
•	Deve ser possível realizar filtros de pesquisa na descrição e status da tarefa; 
•	Opção para ordenar os seguintes campos de forma crescente ou decrescente: ○ Responsável; ○ Status; ○ Criação. Rotas de Indicadores 

Desempenho geral dos usuários em determinado período de tempo 
•	Número de tarefas concluídas; 
•	Média de tarefas concluídas por usuário; 
•	Tempo médio entre “aberto” e “fazendo” das tarefas; 
•	Tempo médio entre “fazendo” e “finalizado” das tarefas.

Como Executar
•	Baixar o projeto do repositório (GitHub)
•	Executar o script do banco de dados MYSQL se encontra na pasta: “projetoAnestech\scriptBanco” > rodar o script no banco de dados, ele irá criar a base de dados e as tabelas (Usuários e Tarefas);
•	Configuração do Base de dados:
host: LOCALHOST
username: root
password: 
database:anestech

•	Entrar na pasta do projeto executar :
C:\projetoanestech\dist\node Server.js

Requisições para acessar a API 

Usuario

POST 
Inserir Usuario
http://localhost:3333/usuarios/inserir
BODY 
{   
   "nome":"Francisco Maria",
    "email":"augustoqqqqq@gmail.com",
    "tipo":"Agente"
 }
 
GET 
Listar Usuario
http://localhost:3333/usuarios/listar?idUsuario=6
PARAMS
idUsuario: 6 – usuário que tema permissão de listar

PUT
 Alterar Usuário
http://localhost:3333/usuarios/alterar?idUsuario=6
PARAMS
idUsuario: 6 – usuário que tem a permissão de alterar
BODY 
{
    "idUsuario":5,
    "nome":"João Gualberto Pereira do Carmo",
    "email":"jg@gmail.com",
    "tipo":"Agente"
}

DEL
Deletar Usuário
http://localhost:3333/usuarios/deletar?idUsuario=6
PARAMS
idUsuario : 6 – Usuário que tem a permissão para deletar
BODY 
{
    "idUsuario":7 
}

Tarefas

POST
 Abrir
http://localhost:3333/tarefas/abrir
BODY 
{
    "responsavel": 8,
    "descricao": "Manutenção do Cadastro de Usuários",
    "status": "aberto"
 }
 
PUT
Fazendo
http://localhost:3333/tarefas/fazendo
BODY
{
    "idTarefa": 6
}

PUT 
Finalizando
http://localhost:3333/tarefas/finalizando
BODY
{
    "idTarefa": 6
}

GET 
Tarefas Concluidas
http://localhost:3333/tarefas/concluidas?idUsuario=6&dataInicio='2020/12/20'&dataFinal='2020/12/31'
PARAMS
idUsuario : 6
dataInicio : '2020/12/20'
dataFinal : '2020/12/31'

GET 
Listar Tarefas
http://localhost:3333/tarefas/listar?idUsuario=6&pesquisa=&status=fazendo&order=descricao&classificacao=asc
PARAMS
idUsuario : 6 – usuário com permissão 
pesquisa :  - campo de pesquisa(descrição)
status : fazendo – campo de pesquisa(status)
order : descricao – campos para ordenação  (responsável, status, criação)
classificação : asc – (acendende(asc), decrecente(desc))

GET 
Media de Tarefas Concluídas por Usuário
http://localhost:3333/tarefas/mediaconcluidausuario/?idUsuario=6&dataInicio='2020/12/21 00:00:00'&dataFinal='2020/12/30 12:59:59'
PARAMS
idUsuario : 6
dataInicio : '2020/12/21 00:00:00'
dataFinal : '2020/12/30 12:59:59'

GET 
Tempo Médio Aberto e Fazendo
http://localhost:3333/tarefas/tempomedioabertofazendo?idUsuario=6&dataInicio='2020/12/20'&dataFinal='2020/12/31'
PARAMS
idUsuario : 6
dataInicio : '2020/12/20'
dataFinal : '2020/12/31'

GET 
Tempo Medio Fazendo e Finalizado
http://localhost:3333/tarefas/tempomediofazendofinalizado?idUsuario=6&dataInicio='2020/12/21'&dataFinal='2020/12/31'
PARAMS
idUsuario : 6
dataInicio : '2020/12/21'
dataFinal : '2020/12/31'

PUT
Alterar Tarefas
http://localhost:3333/tarefas/alterar
BODY 
{
    "idTarefa":5,
    "responsavel":5,
    "descricao":"Alteração",
    "status":"finalizado",
    "dataHoraInicio":"2020/12/29 00:00:00",
    "dataHoraFinal":"2020/12/29 00:00:00",
    "dataHoraCriacao":"2020/12/29 00:00:00"
  }



