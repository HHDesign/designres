/* global React */
/* global _ */
/* global MenuHeader */
MenuHeader = React.createClass({

  propTypes: {
    children: React.PropTypes.element.isRequired,
    className: React.PropTypes.string,
    active: React.PropTypes.bool
  },

  render() {
    var className = 'item header ';
    if (this.props.active == true) {
      className += "active ";
    }
    if (!!this.props.className) {
      className += this.props.className;
    }
    return (
      <div className={className}>
        {this.props.children}
      </div>
    )
  }
});