import React, { Component } from "react";
import { Text, View, StyleSheet, Button, TextInput, TouchableHighlight, Image, Dimensions } from "react-native-web";
import firebase from 'firebase';

//--- GRÁFICOS ---
import { AreaChart, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

// DECLARAÇÃO DE VARIÁVEIS GLOBAIS DA CLASSE
const logo = require('./img/KALEbranco.png');
const simbol = require('./faviconLogo.png');
const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pedidos: 0,
      produtos: 0,
      cozinha: 0,
      cardapio: 0,
      home: 0,
      promocao: 0,
      imgSelecionada: null,
      nome: '',
      desc: '',
      qnt: '',
      preco: '',
    }
  }
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAO6_ktpvf-0cK8XlmajJfSNyNiP6aWgrE",
      authDomain: "kale-restaurante.firebaseapp.com",
      databaseURL: "https://kale-restaurante.firebaseio.com",
      projectId: "kale-restaurante",
      storageBucket: "kale-restaurante.appspot.com",
      messagingSenderId: "340135705086",
      appId: "1:340135705086:web:a1a711581157bb8e8868af"
    });
  }


  _alteraNome(nome) {
    this.setState({ nome: this.state.nome = nome });
  }

  _alteraDescricao(desc) {
    this.setState({ desc: this.state.desc = desc });
  }

  _alteraQuantidade(qnt) {
    this.setState({ qnt: this.state.qnt = qnt });
  }

  _alteraPreco(preco) {
    this.setState({ preco: this.state.preco = preco });

  }
  _telaPedidos() {
    this.setState({
      pedidos: this.state.pedidos = 1,
      produtos: this.state.produtos = 0,
      cozinha: this.state.cozinha = 0,
      cardapio: this.state.cardapio = 0,
      home: this.state.home = 0,
      promocao: this.state.promocao = 0
    });
  }

  _telaProdutos() {
    this.setState({
      pedidos: this.state.pedidos = 0,
      produtos: this.state.produtos = 1,
      cozinha: this.state.cozinha = 0,
      cardapio: this.state.cardapio = 0,
      home: this.state.home = 0,
      promocao: this.state.promocao = 0
    });
  }

  _telaCozinha() {
    this.setState({
      pedidos: this.state.pedidos = 0,
      produtos: this.state.produtos = 0,
      cozinha: this.state.cozinha = 1,
      cardapio: this.state.cardapio = 0,
      home: this.state.home = 0,
      promocao: this.state.promocao = 0
    });
  }

  _telaCardapio() {
    this.setState({
      pedidos: this.state.pedidos = 0,
      produtos: this.state.produtos = 0,
      cozinha: this.state.cozinha = 0,
      cardapio: this.state.cardapio = 1,
      home: this.state.home = 0,
      promocao: this.state.promocao = 0
    });
  }

  _telaHome() {
    this.setState({
      pedidos: this.state.pedidos = 0,
      produtos: this.state.produtos = 0,
      cozinha: this.state.cozinha = 0,
      cardapio: this.state.cardapio = 0,
      home: this.state.home = 1,
      promocao: this.state.promocao = 0
    });
  }

  _telaPromocao() {
    this.setState({
      pedidos: this.state.pedidos = 0,
      produtos: this.state.produtos = 0,
      cozinha: this.state.cozinha = 0,
      cardapio: this.state.cardapio = 0,
      home: this.state.home = 0,
      promocao: this.state.promocao = 1
    });
  }

  _salvaImg = () => {
    return false
  }


  _adicionaFirebase() {
    return false
  }

  _imgSelecionada = evento => {
    this.setState({
      imgSelecionada: evento.target.files[0]
    })
  }

  render() {
    // --- Retorno Promoções da aplicação ---
    if (this.state.promocao == 1) {
      return (
        <View style={styles.container}>
          <View style={styles.container_Menu}>
            <View style={{ height: 200, width: 200 }}>
              <Image style={styles.img_Menu} source={logo} />
            </View>
            <View style={styles.btn_Menu}>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaHome()}>
                <Text style={styles.txt_Menu}>Home</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaProdutos()}>
                <Text style={styles.txt_Menu}>Produtos</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaPedidos()}>
                <Text style={styles.txt_Menu}>Pedidos</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaCozinha()}>
                <Text style={styles.txt_Menu}>Cozinha</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaCardapio()}>
                <Text style={styles.txt_Menu}>Cardápio</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaPromocao()}>
                <Text style={styles.txt_Menu}>Promoções</Text>
              </TouchableHighlight>
            </View>
            <View style={{ justifyContent: 'center', alignItens: 'center', flex: 1 }}>
              <Image style={styles.img_Simbol} source={simbol} />
              <Text style={{ fontSize: 10, color: '#000', fontWeight: 'bold', marginLeft: 20 }}>TODOS OS DIREITOS RESERVADOS</Text>
            </View>
          </View>
          <View style={{ flex: 8 }}>
            <Text style={{ fontSize: 30 }}>PAINEL Promoções</Text>
            <View style={{ marginTop: 100, flexDirection: 'row' }}>
              <View style={{ marginTop: 100, margin: 10, flex: 1 }}>
                <Text style={{ fontWeight: 'bold', marginBottom: 15, marginLeft: 10, color: "#5b70cd" }}>CADASTRAR NOVA PROMOÇÕES</Text>
                <TextInput style={styles.input_Produtos} placeholder="Nome do produto" onChangeText={nome => this._alteraNome(nome)}></TextInput>
                <TextInput style={styles.input_Produtos} placeholder="Descrição do produto" onChangeText={desc => this._alteraDescricao(desc)}></TextInput>
                <TextInput style={styles.input_Produtos} placeholder="Quantidade da caixa" onChangeText={qnt => this._alteraQuantidade(qnt)}></TextInput>
                <TextInput style={styles.input_Produtos} placeholder="Preço do produto" onChangeText={preco => this._alteraPreco(preco)}></TextInput>
                <TextInput style={styles.input_Produtos} placeholder="Comissão" onChangeText={comi => this._alteraComissao(comi)}></TextInput>
                <input style={{ margin: 5 }} type="file" onChange={this._imgSelecionada} />
                <View style={{ marginTop: 12, width: '25%' }}>
                  <Button onPress={() => { this._adicionaFirebase() }} title="SALVAR" color="#5b70cd" />
                </View>
              </View>
              <View style={{ marginTop: 100, margin: 10, flex: 1 }}>
                <Text style={{ fontWeight: 'bold', marginBottom: 15, marginLeft: 10, color: "#5b70cd" }}>EXCLUIR PROMOÇÃO</Text>
                <Text>LISTVIEW DAS PROMOÇÕES COM TouchableHighlight ENCAMINHANDO FUNÇÃO DE EXCLUSÃO NO FIREBASE</Text>
                <View style={{ marginTop: 145, width: '25%' }}>
                  <Button onPress={() => false} title="EXCLUIR" color="#5b70cd" />
                </View>
              </View>
            </View>
          </View>
        </View>
      );
    }
    // --- Retorno Inicial da aplicação ---
    if (this.state.home == 1) {
      return (
        <View style={styles.container}>
          <View style={styles.container_Menu}>
            <View style={{ height: 200, width: 200 }}>
              <Image style={styles.img_Menu} source={logo} />
            </View>
            <View style={styles.btn_Menu}>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaHome()}>
                <Text style={styles.txt_Menu}>Home</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaProdutos()}>
                <Text style={styles.txt_Menu}>Produtos</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaPedidos()}>
                <Text style={styles.txt_Menu}>Pedidos</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaCozinha()}>
                <Text style={styles.txt_Menu}>Cozinha</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaCardapio()}>
                <Text style={styles.txt_Menu}>Cardápio</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaPromocao()}>
                <Text style={styles.txt_Menu}>Promoções</Text>
              </TouchableHighlight>
            </View>
            <View style={{ justifyContent: 'center', alignItens: 'center', flex: 1 }}>
              <Image style={styles.img_Simbol} source={simbol} />
              <Text style={{ fontSize: 10, color: '#000', fontWeight: 'bold', marginLeft: 20 }}>TODOS OS DIREITOS RESERVADOS</Text>
            </View>
          </View>
          <View style={{ flex: 8 }}>
            <Text style={{ fontSize: 30 }}>PAINEL ADMINISTRATIVO</Text>
            <Image source={require('./img/logo.png')} />
            <AreaChart style={{ height: 200 }} data={data} contentInset={{ top: 30, bottom: 30 }} curve={shape.curveNatural} svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}>
                <Grid />
            </AreaChart>
          </View>
        </View>
      );
    }
    // --- Retorno Catálogo da aplicação ---
    if (this.state.cardapio == 1) {
      return (
        <View style={styles.container}>
          <View style={styles.container_Menu}>
            <View style={{ height: 200, width: 200 }}>
              <Image style={styles.img_Menu} source={logo} />
            </View>
            <View style={styles.btn_Menu}>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaHome()}>
                <Text style={styles.txt_Menu}>Home</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaProdutos()}>
                <Text style={styles.txt_Menu}>Produtos</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaPedidos()}>
                <Text style={styles.txt_Menu}>Pedidos</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaCozinha()}>
                <Text style={styles.txt_Menu}>Cozinha</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaCardapio()}>
                <Text style={styles.txt_Menu}>Cardápio</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaPromocao()}>
                <Text style={styles.txt_Menu}>Promoções</Text>
              </TouchableHighlight>
            </View>
            <View style={{ justifyContent: 'center', alignItens: 'center', flex: 1 }}>
              <Image style={styles.img_Simbol} source={simbol} />
              <Text style={{ fontSize: 10, color: '#000', fontWeight: 'bold', marginLeft: 20 }}>TODOS OS DIREITOS RESERVADOS</Text>
            </View>
          </View>
          <View style={{ flex: 8 }}>
            <Text style={{ fontSize: 30 }}>PAINEL CARDÁPIO</Text>
          </View>
        </View>
      );
    }
    // --- Retorno Cozinha da aplicação ---
    if (this.state.cozinha == 1) {
      return (
        <View style={styles.container}>
          <View style={styles.container_Menu}>
            <View style={{ height: 200, width: 200 }}>
              <Image style={styles.img_Menu} source={logo} />
            </View>
            <View style={styles.btn_Menu}>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaHome()}>
                <Text style={styles.txt_Menu}>Home</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaProdutos()}>
                <Text style={styles.txt_Menu}>Produtos</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaPedidos()}>
                <Text style={styles.txt_Menu}>Pedidos</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaCozinha()}>
                <Text style={styles.txt_Menu}>Cozinha</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaCardapio()}>
                <Text style={styles.txt_Menu}>Cardápio</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaPromocao()}>
                <Text style={styles.txt_Menu}>Promoções</Text>
              </TouchableHighlight>
            </View>
            <View style={{ justifyContent: 'center', alignItens: 'center', flex: 1 }}>
              <Image style={styles.img_Simbol} source={simbol} />
              <Text style={{ fontSize: 10, color: '#000', fontWeight: 'bold', marginLeft: 20 }}>TODOS OS DIREITOS RESERVADOS</Text>
            </View>
          </View>
          <View style={{ flex: 8 }}>
            <Text style={{ fontSize: 30 }}>PAINEL COZINHA</Text>
          </View>
        </View>
      );
    }
    // --- Retorno Produtos da aplicação ---
    if (this.state.produtos == 1) {
      return (
        <View style={styles.container}>
          <View style={styles.container_Menu}>
            <View style={{ height: 200, width: 200 }}>
              <Image style={styles.img_Menu} source={logo} />
            </View>
            <View style={styles.btn_Menu}>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaHome()}>
                <Text style={styles.txt_Menu}>Home</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaProdutos()}>
                <Text style={styles.txt_Menu}>Produtos</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaPedidos()}>
                <Text style={styles.txt_Menu}>Pedidos</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaCozinha()}>
                <Text style={styles.txt_Menu}>Cozinha</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaCardapio()}>
                <Text style={styles.txt_Menu}>Cardápio</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaPromocao()}>
                <Text style={styles.txt_Menu}>Promoções</Text>
              </TouchableHighlight>
            </View>
            <View style={{ justifyContent: 'center', alignItens: 'center', flex: 1 }}>
              <Image style={styles.img_Simbol} source={simbol} />
              <Text style={{ fontSize: 10, color: '#000', fontWeight: 'bold', marginLeft: 20 }}>TODOS OS DIREITOS RESERVADOS</Text>
            </View>
          </View>
          <View style={{ flex: 8 }}>
            <Text style={{ fontSize: 30 }}>PAINEL PRODUTOS</Text>
            <View style={{ marginTop: 100, flexDirection: 'row' }}>
              <View style={{ marginTop: 100, margin: 10, flex: 1 }}>
                <Text style={{ fontWeight: 'bold', marginBottom: 15, marginLeft: 10, color: "#5b70cd" }}>CADASTRAR NOVO PRODUTO</Text>
                <TextInput style={styles.input_Produtos} placeholder="Nome do produto" onChangeText={nome => this._alteraNome(nome)}></TextInput>
                <TextInput style={styles.input_Produtos} placeholder="Descrição do produto" onChangeText={desc => this._alteraDescricao(desc)}></TextInput>
                <TextInput style={styles.input_Produtos} placeholder="Quantidade da caixa" onChangeText={qnt => this._alteraQuantidade(qnt)}></TextInput>
                <TextInput style={styles.input_Produtos} placeholder="Preço do produto" onChangeText={preco => this._alteraPreco(preco)}></TextInput>
                <input style={{ margin: 5 }} type="file" onChange={this._imgSelecionada} />
                <View style={{ marginTop: 12, width: '25%' }}>
                  <Button onPress={() => { this._adicionaFirebase() }} title="SALVAR" color="#5b70cd" />
                </View>
              </View>
              <View style={{ marginTop: 100, margin: 10, flex: 1 }}>
                <Text style={{ fontWeight: 'bold', marginBottom: 15, marginLeft: 10, color: "#5b70cd" }}>EDITAR PRODUTO</Text>
                <TextInput style={styles.input_Produtos} placeholder="Nome do produto"></TextInput>
                <TextInput style={styles.input_Produtos} placeholder="Descrição do produto"></TextInput>
                <TextInput style={styles.input_Produtos} placeholder="Quantidade da caixa"></TextInput>
                <TextInput style={styles.input_Produtos} placeholder="Preço do produto"></TextInput>
                <View style={{ marginTop: 12, width: '25%' }}>
                  <Button onPress={() => false} title="ATUALIZAR" color="#5b70cd" />
                </View>
              </View>
              <View style={{ marginTop: 100, margin: 10, flex: 1 }}>
                <Text style={{ fontWeight: 'bold', marginBottom: 15, marginLeft: 10, color: "#5b70cd" }}>EXCLUIR PRODUTO</Text>
                <TextInput style={styles.input_Produtos} placeholder="Nome do produto"></TextInput>
                <View style={{ marginTop: 145, width: '25%' }}>
                  <Button onPress={() => false} title="EXCLUIR" color="#5b70cd" />
                </View>
              </View>
            </View>
          </View>
        </View>
      );
    }
    // --- Retorno Pedidos da aplicação ---
    if (this.state.pedidos == 1) {
      return (
        <View style={styles.container}>
          <View style={styles.container_Menu}>
            <View style={{ height: 200, width: 200 }}>
              <Image style={styles.img_Menu} source={logo} />
            </View>
            <View style={styles.btn_Menu}>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaHome()}>
                <Text style={styles.txt_Menu}>Home</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaProdutos()}>
                <Text style={styles.txt_Menu}>Produtos</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaPedidos()}>
                <Text style={styles.txt_Menu}>Pedidos</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaCozinha()}>
                <Text style={styles.txt_Menu}>Cozinha</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaCardapio()}>
                <Text style={styles.txt_Menu}>Cardápio</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#fff"
                onPress={() => this._telaPromocao()}>
                <Text style={styles.txt_Menu}>Promoções</Text>
              </TouchableHighlight>
            </View>
            <View style={{ justifyContent: 'center', alignItens: 'center', flex: 1 }}>
              <Image style={styles.img_Simbol} source={simbol} />
              <Text style={{ fontSize: 10, color: '#000', fontWeight: 'bold', marginLeft: 20 }}>TODOS OS DIREITOS RESERVADOS</Text>
            </View>
          </View>
          <View style={{ flex: 8 }}>
            <Text style={{ fontSize: 30 }}>PAINEL PEDIDOS</Text>
            <View style={{ marginTop: 100, flexDirection: 'row' }}>
              <View style={{ marginTop: 100, margin: 10, flex: 1, borderWidth: 3, borderColor: '#000' }}>
                <Text>FILA DE PEDIDOS PENDENTES (EM PREPARO)</Text>

              </View>
              <View style={{ marginTop: 100, margin: 10, flex: 1, borderWidth: 3, borderColor: '#000' }}>
                <Text>FILA DE PEDIDOS ENTREGUES</Text>
              </View>
              <View style={{ marginTop: 100, margin: 10, flex: 1, borderWidth: 3, borderColor: '#000' }}>
                <Text>FILA DE PEDIDOS RECUSADOS</Text>
              </View>
            </View>
          </View>
        </View>
      );
    }
    // --- Retorno Default da aplicação ---
    return (
      <View style={styles.container}>
        <View style={styles.container_Menu}>
          <View style={{ height: 200, width: 200 }}>
            <Image style={styles.img_Menu} source={logo} />
          </View>
          <View style={styles.btn_Menu}>
            <TouchableHighlight underlayColor="#fff"
              onPress={() => this._telaHome()}>
              <Text style={styles.txt_Menu}>Home</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#fff"
              onPress={() => this._telaProdutos()}>
              <Text style={styles.txt_Menu}>Produtos</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#fff"
              onPress={() => this._telaPedidos()}>
              <Text style={styles.txt_Menu}>Pedidos</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#fff"
              onPress={() => this._telaCozinha()}>
              <Text style={styles.txt_Menu}>Cozinha</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#fff"
              onPress={() => this._telaCardapio()}>
              <Text style={styles.txt_Menu}>Cardápio</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#fff"
              onPress={() => this._telaPromocao()}>
              <Text style={styles.txt_Menu}>Promoções</Text>
            </TouchableHighlight>
          </View>
          <View style={{ justifyContent: 'center', alignItens: 'center', flex: 1 }}>
            <Image style={styles.img_Simbol} source={simbol} />
            <Text style={{ fontSize: 10, color: '#000', fontWeight: 'bold', marginLeft: 20 }}>TODOS OS DIREITOS RESERVADOS</Text>
          </View>
        </View>
        <View style={{ flex: 8 }}>
          <Text style={{ fontSize: 30 }}>PAINEL ADMINISTRATIVO</Text>
          <AreaChart style={{ height: 200 }} data={data} contentInset={{ top: 30, bottom: 30 }} curve={shape.curveNatural} svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}>
                <Grid />
          </AreaChart>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItens: 'flex-start',
    width: '100%',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  container_Menu: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: 200,
    backgroundColor: '#5b70cd',
    justifyContent: 'center',
    alignItens: 'center'
  },
  txt_Menu: {
    color: '#fff',
    marginLeft: 50,
    fontSize: 20,
    padding: 10
  },
  img_Menu: {
    marginTop: 30,
    height: 67,
    width: '100%',
  },
  btn_Menu: {
    justifyContent: 'center',
    alignItens: 'center',
    flex: 1
  },
  img_Simbol: {
    height: 80,
    width: 80,
    marginLeft: 60,
    marginTop: 250
  },
  input_Produtos: {
    height: 40,
    width: '100%',
    borderColor: '#5b70cd',
    borderWidth: 3,
    borderRadius: 10,
    marginBottom: 3,
    marginLeft: 5
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 25
  }
});

