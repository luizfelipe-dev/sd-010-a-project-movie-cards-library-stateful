import React from 'react';
import PropTypes from 'prop-types';

// subtitle: guarda o subtítulo preenchido no formulário por quem usa a aplicação;
// title: guarda o título preenchido no formulário por quem usa a aplicação;
// imagePath: guarda o caminho da imagem preenchido no formulário por quem usa a aplicação;
// storyline: guarda a sinopse do filme escrita no formulário por quem usa a aplicação;
// rating: guarda a nota de avaliação dada no formulário por quem usa a aplicação;
// genre
class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="true" data-testid="title-input-label">
            Título
            <input
              name="title"
              type="text"
              value={ title }
              data-testid="title-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="true" data-testid="subtitle-input-label">
            Subtítulo
            <input
              name="subtitle"
              type="text"
              value={ subtitle }
              data-testid="subtitle-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="true" data-testid="image-input-label">
            Imagem
            <input
              name="imagePath"
              type="text"
              value={ imagePath }
              data-testid="image-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="true" data-testid="storyline-input-label">
            Sinopse
            <textarea
              name="storyline"
              value={ storyline }
              data-testid="storyline-input"
              onChange={ this.handleChange }
            />
          </label>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
