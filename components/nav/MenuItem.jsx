/* global React */
/* global _ */
/* global MenuItem */
MenuItem = React.createClass({

  propTypes: {
    children: React.PropTypes.element.isRequired,
    className: React.PropTypes.string,
    active: React.PropTypes.bool
  },

  render() {
    var className = 'item ';
    if (this.props.active == true) {
      className += "active ";
    }
    if (!!this.props.className) {
      className += this.props.className;
    }
    return (
      <a className={className}>
        {this.props.children}
      </a>
    )
  }
});