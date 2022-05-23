import React from 'react';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      Raridade: 'normal',
      arrayCads: [],
      hasTrunfo: false,
      image: '',
      name: '',
      description: '',
      attr1: '',
      attr2: '',
      attr3: '',
      rare: 'todas',
      checkTrunfoFilter: false,

    };
  }

  validadeForm = (values) => {
    const [
      name,
      description,
      image,
      attr1,
      attr2,
      attr3,
    ] = values;
    const max = 90;
    const min = 0;
    const totalMaxValue = 210;

    const sum = +attr1 + +attr2 + +attr3;

    if (
      name !== ''
      && description !== ''
      && image !== ''
      && attr1 <= max
      && attr2 <= max
      && attr3 <= max
      && attr1 >= min
      && attr2 >= min
      && attr3 >= min
      && sum <= totalMaxValue) {
      return false;
    }
    return true;
  }

  hasCardTrunfo = () => {
    const { soper } = this.state;
    console.log('trunfo');
    if (soper) {
      this.setState({
        hasTrunfo: true,
      });
    }
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
    console.log('handle');
  }

  clickOnButton = (event) => {
    const {
      name, description, attr1, attr2,
      attr3, image, Raridade, soper, disabled, arrayCads,
    } = this.state;
    arrayCads.push({
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      Raridade,
      soper,
      disabled,
    });
    this.setState({
      name: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      Raridade: 'normal',
      soper: false,
      disabled: false,
    });
    event.preventDefault();
    this.hasCardTrunfo();
  }

  onClickDeleteButton =  (card) => {
    const { arrayCads } = this.state;
    if (card.soper === true) {
      const filter1 = arrayCads.filter((item) => item.soper === false);
      this.setState({
        arrayCads: filter1,
        hasTrunfo: false,
      });
    } else {
      const filter = arrayCads.filter((item) => item.name !== card.name);
      this.setState({
        arrayCads: filter,
      });
    }
  }

  filterByName = (array) => {
    const { filtername } = this.state;
    if (!filtername) {
      return array;
    }
    const filter = array.filter((item) => item.name.includes(filtername));
    return filter;
  }

  filterByRare = (array) => {
    const { rare } = this.state;
    if (rare === 'todas') {
      return array;
    }
    const filter = array.filter((item) => item.Raridade === rare);
    return filter;
  }

  filterBySpTrf = (array) => {
    const { checkTrunfoFilter } = this.state;
    const inputFilterName = document.querySelector('[data-testid="name-filter"]');
    const inputFilterRare = document.querySelector('[data-testid="rare-filter"]');
    if (checkTrunfoFilter === true) {
      const filter = array.filter((item) => item.soper === true);
      inputFilterName.value = '';
      inputFilterRare.value = '';
      inputFilterName.disabled = true;
      inputFilterRare.disabled = true;
      return filter;
    }
    if (checkTrunfoFilter == null || !checkTrunfoFilter === true && inputFilterName && inputFilterRare) {
      inputFilterName.disabled = false;
      inputFilterRare.disabled = false;
    }
    return array;
  }

  render() {
    const {
      name, description, attr1, attr2,
      attr3, image, Raridade, soper, hasTrunfo, arrayCads } = this.state;
    this.filterByName(arrayCads);
    this.filterBySpTrf(arrayCads);
    return (
      <div>
        <section id="main">
          <div id="create-cart">
            <Form
              onInputChange={ this.handleChange }
              cardName={ name }
              cardDescription={ description }
              cardAttr1={ attr1 }
              cardAttr2={ attr2 }
              cardAttr3={ attr3 }
              cardImage={ image }
              cardRare={ Raridade }
              cardTrunfo={ soper }
              isSaveButtonDisabled={ this.validadeForm([name,
                description,
                image,
                attr1,
                attr2,
                attr3]) }
              onSaveButtonClick={ this.clickOnButton }
              hasTrunfo={ hasTrunfo }
            />
          </div>
          <div id="preview-cart">
            <div>
              <h1>Pré-visualização</h1>
              <Card
                cardName={ name }
                cardDescription={ description }
                cardAttr1={ attr1 }
                cardAttr2={ attr2 }
                cardAttr3={ attr3 }
                cardImage={ image }
                cardRare={ Raridade }
                cardTrunfo={ soper }
              />
            </div>

          </div>
        </section>
        <section className="second-section">
          <div className="filters">
            <h1>Todas as Cartas</h1>
            <h3>Filtros de Busca</h3>
            <input
              type="text"
              data-testid="name-filter"
              name="filtername"
              onChange={ this.handleChange }
            />
            <select
              data-testid="rare-filter"
              name="rare"
              onChange={ this.handleChange }
            >
              <option value="todas" selected>todas</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
            <div className="ckeckbox-filter">
              <input
                type="checkbox"
                data-testid="trunfo-filter"
                id="check-Trunfo"
                name="checkTrunfoFilter"
                onChange={ this.handleChange }
              />
              <label htmlFor="check-Trunfo">
                Super Trunfo
              </label>
            </div>

          </div>
          {/* this.filterByRare(this.filterByName(arrayCads)).map((item) */ }
          {/* this.filterByRare(this.filterByName(this.filterBySpTrf(arrayCads))).map((item) */ }
          <section className="list-card">
            { this.filterByRare(this.filterByName(this.filterBySpTrf(arrayCads))).map((item) => (
              <div key={ item.name }>
                <div id="preview-cart" className="cards">
                  <div>
                    <Card
                      cardName={ item.name }
                      cardDescription={ item.description }
                      cardAttr1={ item.attr1 }
                      cardAttr2={ item.attr2 }
                      cardAttr3={ item.attr3 }
                      cardImage={ item.image }
                      cardRare={ item.Raridade }
                      cardTrunfo={ item.soper }
                    />
                    <button
                      type="button"
                      data-testid="delete-button"
                      onClick={ () => this.onClickDeleteButton(item) }
                    >
                      Excluir
                    </button>
                  </div>

                </div>
                <div className="btn-card-add" />
              </div>)) }
          </section>
        </section>
      </div>
    );
  }
}

export default App;
