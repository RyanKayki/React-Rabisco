import os
import mysql.connector

# Conectando com o banco de dados
conexaoDB = mysql.connector.connect(
    host="localhost",
    user="root",
    password="senai",
    database="Papelaria"
)

# Cabeçário do MENU
def imprimir_header():
    # Limpa a tela do console e imprime o cabeçalho
    os.system('cls' if os.name == 'nt' else 'clear')
    print("- " * 20)
    print("*** SISTEMA PAPELARIA ***")
    print("- " * 20)
    return

# Função para cadastrar um novo produto
def cadastro_produto():
    # Exibe cabeçalho do cadastro de produto e solicita informações
    print("- " * 20)
    print("*** CADASTRO DE PRODUTO ***")
    print("- " * 20)
    nome_produto = input("Nome do produto: ")
    descricao_produto = input("Descrição do produto: ")
    preco_produto = float(input("Preço do produto: "))
    quantidade_produto = int(input("Quantidade do produto: "))
    img_produto = input("Caminho da imagem do produto: ")

    if quantidade_produto < 0:
        print("A quantidade não pode ser menor que zero.")
        return
    # Verifica se todos os campos foram preenchidos
    if nome_produto == "" or descricao_produto == "" or img_produto == "":
        print("Todos os campos devem ser preenchidos")
        return

    # Cria comando SQL para inserção do produto no banco de dados
    comandoSQL = f"INSERT INTO Produto (nome, descricao, preco, quantidade, img) VALUES ('{nome_produto}', '{descricao_produto}', {preco_produto}, {quantidade_produto}, '{img_produto}')"
    try:
        cursorDB = conexaoDB.cursor()
        cursorDB.execute(comandoSQL)
        conexaoDB.commit()
        print(f"Produto {nome_produto} cadastrado com sucesso!")
        cursorDB.close()
    except mysql.connector.Error as erro:
        print(f"Falha Ao Cadastrar: {erro}")
        return

# Função para alterar a quantidade de um produto
def alterar_quantidade():
    # Exibe cabeçalho da alteração de quantidade e solicita informações
    print("- " * 20)
    print("*** ALTERAR QUANTIDADE ***")
    print("- " * 20)
    nome_produto = input("Nome do produto que deseja alterar a quantidade: ")
    nova_quantidade = int(input("Nova quantidade: "))
    # Verifica se a nova quantidade é válida
    if nova_quantidade < 0:
        print("A quantidade não pode ser menor que zero.")
        return
    try:
        cursorDB = conexaoDB.cursor()
        # Seleciona o produto no banco de dados
        comandoSQL = f"SELECT * FROM Produto WHERE nome = '{nome_produto}'"
        cursorDB.execute(comandoSQL)
        produto = cursorDB.fetchone()
        if produto:
            # Atualiza a quantidade do produto no banco de dados
            comandoSQL = f"UPDATE Produto SET quantidade = {nova_quantidade} WHERE nome = '{nome_produto}'"
            cursorDB.execute(comandoSQL)
            conexaoDB.commit()
            print(f"Quantidade do produto {nome_produto} atualizada com sucesso!")
            print(f"Nova Quantidade: {nova_quantidade}")
        else:
            print("Esse produto não está cadastrado!")
        cursorDB.close()
    except mysql.connector.Error as erro:
        print(f"Falha ao alterar quantidade: {erro}")
        return

# Função para alterar o preço de um produto
def alterar_preco():
    # Exibe cabeçalho da alteração de preço e solicita informações
    print("- " * 20)
    print("*** ALTERAR PREÇO ***")
    print("- " * 20)
    nome_produto = input("Nome do produto que deseja alterar o preço: ")
    novo_preco = float(input("Novo preço: "))
    try:
        cursorDB = conexaoDB.cursor()
        # Seleciona o produto no banco de dados
        comandoSQL = f"SELECT * FROM Produto WHERE nome = '{nome_produto}'"
        cursorDB.execute(comandoSQL)
        produto = cursorDB.fetchone() 
        if produto:
            # Atualiza o preço do produto no banco de dados
            comandoSQL = f"UPDATE Produto SET preco = {novo_preco} WHERE nome = '{nome_produto}'"
            cursorDB.execute(comandoSQL)
            conexaoDB.commit()
            print(f"Preço do produto {nome_produto} atualizado com sucesso!")
            print(f"Novo Preço: {novo_preco}")
        else:
            print("Esse produto não está cadastrado!")
        cursorDB.close()
    except mysql.connector.Error as erro:
        print(f"Falha ao alterar preço: {erro}")
        return

# Função para mostrar todos os produtos
def mostrar_todos_produtos():
    # Exibe cabeçalho da listagem de produtos
    print("- " * 20)
    print("*** MOSTRAR TODOS OS PRODUTOS ***")
    print("- " * 20)
    try:
        cursorDB = conexaoDB.cursor()
        # Seleciona todos os produtos do banco de dados
        cursorDB.execute("SELECT * FROM Produto")
        produtos = cursorDB.fetchall()
        if produtos:
            # Exibe os produtos
            for produto in produtos:
                print(f"ID: {produto[0]}\nNome: {produto[2]}\nDescrição: {produto[3]}\nPreço: R${produto[4]:.2f}\nQuantidade: {produto[5]}\nImagem: {produto[1]}")
                print("- " * 50)
        else:
            print("Não há produtos cadastrados.")
        cursorDB.close()
    except mysql.connector.Error as erro:
        print(f"Falha ao mostrar produtos: {erro}")
        return

# Função para excluir um produto
def excluir_produto():
    # Exibe cabeçalho da exclusão de produto e solicita informações
    print("- " * 20)
    print("*** EXCLUIR UM PRODUTO ***")
    print("- " * 20)
    nome_produto = input("Nome do produto que deseja excluir: ")
    try:
        cursorDB = conexaoDB.cursor()
        # Seleciona o produto no banco de dados
        comandoSQL = f"SELECT * FROM Produto WHERE nome = '{nome_produto}'"
        cursorDB.execute(comandoSQL)
        produto = cursorDB.fetchone()
        if produto:
            # Exclui o produto do banco de dados
            comandoSQL = f"DELETE FROM Produto WHERE nome = '{nome_produto}'"
            cursorDB.execute(comandoSQL)
            conexaoDB.commit()
            print(f"Produto {nome_produto} excluído com sucesso!")
        else:
            print("Esse produto não está cadastrado!")
        cursorDB.close()
    except mysql.connector.Error as erro:
        print(f"Falha ao excluir produto: {erro}")

# Loop principal do programa
while True:
    # Limpa a tela e imprime o cabeçalho do menu
    os.system('cls' if os.name == 'nt' else 'clear')
    imprimir_header()
    print("MENU")
    print("Código [1] - Cadastro Produto")
    print("Código [2] - Alterar Quantidade")
    print("Código [3] - Alterar Preco")
    print("Código [4] - Mostrar todos os Produtos")
    print("Código [5] - Excluir um Produto")
    print("Código [6] - Sair do sistema")

    # Validação do MENU
    try:
        op_menu = int(input("Informe o código da opção desejada: "))
        if op_menu == 1:
            os.system("cls")
            cadastro_produto()

        elif op_menu == 2:
            os.system("cls")
            alterar_quantidade()

        elif op_menu == 3:
            os.system("cls")
            alterar_preco()

        elif op_menu == 4:
            os.system("cls")
            mostrar_todos_produtos()

        elif op_menu == 5:
            os.system("cls")
            excluir_produto()

        elif op_menu == 6:
            print("Saindo do sistema....")
            break
        else:
            print("Código inválido!")
    except ValueError:
        print("Valor inválido!")

    input("Pressione Enter para continuar...")
