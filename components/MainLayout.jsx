/* global React */
/* global _ */
/* global MainLayout */
MainLayout = React.createClass({
  //
  // // This mixin makes the getMeteorData method work
  // mixins: [ReactMeteorData],
  //
  // // Loads items from the Tasks collection and puts them on this.data.tasks
  // getMeteorData() {
  //   return {
  //     currentUser: Meteor.user()
  //   };
  // },

  render() {
    return (
      <div>
        <Helmet title="designres" />
        <SideNav />
        <main>
          {
            (_.isFunction(this.props.content)) && this.props.content()
          }
        </main>
        <footer></footer>
      </div>
    );
  }
});