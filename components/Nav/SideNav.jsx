/* global React */
/* global _ */
/* global SideNav */
SideNav = React.createClass({

  propTypes: {
    currentPage: React.PropTypes.string
  },

  render() {
    var menuData = {
      "basics": {
        text: "Basics"
      },
      "visual": { 
        header: true,
        text: "Visual"
      },
      "visual_color": {
        text: "Color"
      },
      "visual_typography": {
        text: "Typography"
      },
      "visual_photography": {
        id: "visual_photography",
        text: "Photography"
      },
      "visual_textures+patterns": {
        id: "visual_textures+patterns",
        text: "Textures + Patterns"
      },
      "visual_iconography": {
        id: "visual_iconography",
        text: "Iconography"
      },
      "visual_illustration": {
        id: "visual_illustration",
        text: "Illustration"
      },
      "visual_motion": {
        id: "visual_motion",
        text: "Motion"
      },
      "visual_style-guides": {
        id: "visual_style-guides",
        text: "Style Guides"
      },
      "ui": { 
        header: true,
        text: "UI"
      },
      "ui_layout": {
        id: "ui_layout",
        text: "Layout"
      },
      "ui_patterns": {
        id: "ui_patterns",
        text: "Patterns"
      },
      "ui_prototyping": {
        id: "ui_prototyping",
        text: "Prototyping"
      },
      "ui_research": {
        id: "ui_research",
        text: "Research"
      },
      "ui_metrics": {
        id: "ui_metrics",
        text: "Metrics"
      }
    }
    var menuItems = menuData.keys.map(function(id) {
      var menuItem = menuData[id];
      if (menuItem.header) {
        return (
          <MenuHeader {...menuItem}>{menuItem.text}</MenuHeader>
        )
      } 
      else {
        return (
          <MenuItem {...menuItem}>{menuItem.text}</MenuItem>
        )
      }
      
      
      
    })
    return (
        <nav className="ui vertical text menu" id="sidenav">
          {menuItems}
        </nav>
    );
  },
  componentDidMount: function() {
    var navNode = this.refs.nav;
    // fix main menu to page on passing
    $(navNode).visibility({
      type: 'fixed'
    });
    // show dropdown on hover
    $(navNode).find('.ui.dropdown').dropdown({
      on: 'hover'
    });
  }


});