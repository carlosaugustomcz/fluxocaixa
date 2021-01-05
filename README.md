# fluxocaixa
Projeto API Caixa Virtual

Criação de uma Api para saber o tempo gasto nas tarefas diárias.

# Tecnologias :

*	Node 12.16.3.
*	Express 4.17.1
*	Mysql2 2.2.5
*	Sequelize 6.3.5
*	Sequelize-cli 6.0.2
*	Yup 0.32.8
*	Eslint 7.16.0
*	Nodemon 2.0.6
*	Sucrase 3.16.0
*	SGBD mysql
* EditorConfig
* yarn
* Docker
* Docker Compose

# Como Executar
*	clonar o projeto do repositório (GitHub)
* instalar o Docker
* baixar a imagem do Mysql 5.7
* executar o comando no prompt na pasta do projeto: 
"docker-compose up"

Irá criar o componente fluxocaixa.

Conexão com o MySQL Workbench
Baixando o MySQL Workbench
Comece baixando o MySQL Workbench https://www.mysql.com/products/workbench/ .

Conectando-se à sua instância MySQL
Em seguida, faça uma nova conexão como:

* HostNmae: 127.0.0.1
* UserName: root
* password: root
* port: 3306

No command prompt na pasta onde baixou o projeto:
 excute: 
 
  yarn sequelize db:migrate 

Irá criar as tabelas na database : fluxocaixa
   * cartegorias
   * movimentacoes
   * SequelizeMeta
   
# Como executar a API:

na pasta do projeto no command prompt execute:

* yarn Build

depois execute 

* yarn prod


# Documentação das Rotas:

 Categorias
  * POST Incluir Categoria: http://localhost:3333/categorias/inserir
  
  BODY
  
  {
  
      "descricao":"Telefone"
      
  }

GET Listar Categorias:  

http://localhost:3333/categorias/listar

PUT Alterar Categoria:  

http://localhost:3333/categorias/alterar
  
  BODY 
  
  {
  
     "id":2,
     
      "descricao":"Telefone"
      
  }

DEL Deletar Categoria:   http://localhost:3333/categoria/deletar

BODY 

  {
  
      "id":3
      
  }

Movimentacao

  * (tipo: "E" - entrada / "S" - saída)
  
  BODY 
  
  {
  
      "descricao":"Recebimento do Aluguel Janeiro",
      
      "idCategoria":4,
      
      "valor":500.00,
      
      "dataEntrada":"2020/01/03 00:00:00z",
      
     "data":"2020/01/03",
     
      "tipo":"E"
      
  }

DEL Deletar Movimentacoes :  http://localhost:3333/movimentacoes/deletar
  
  BODY
  
  {
  
      "id":6
      
  }

GET Listar Movimentacoes :  http://localhost:3333/movimentacoes/listar?dataInicio=2021/01/03
  
  PARAMS
  
  dataInicio: 2021/01/03
 


   

