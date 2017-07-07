import React, {Component} from "react";
import "./index.css";
import {TodoInput} from "../../components/TodoInput";
import {TodoSectionList} from "../../components/TodoSectionList";
import {connect} from "react-redux";
import {TodoList} from "../../components/TodoList";
import {ProfileList} from "../../components/ProfileList";
import {addItem, deleteItem, changeItemStatus, changeItemSection, loadItems} from "../../actions/itemsActions";
import {addSection, deleteSection, loadSections} from "../../actions/sectionsActions";
import {loadProfiles, addProfileToSection} from "../../actions/profilesAcions";
import {setSessionFromUrl} from "../../actions/userActions";

class TodoPage extends Component {
  componentDidMount() {
    // const sessionFromUrl = queryString.parse(this.props.location.search);

    if (this.props.user.session) {
      let userId = this.props.user.session.userId;
      this.props.loadItems(userId);
      this.props.loadSections(userId);
      this.props.loadProfiles();
    }
    else {
      this.props.history.push('/signin');
    }
  }

  componentWillUpdate() {
    if (!this.props.user.session) {
      this.props.history.push('/signin');
    }
  }

  render() {
    return (
      <div className="todo-page">
        <div className="col-md-4">
          <h3>Items</h3>
          <TodoList {...this.props}/>
          <TodoInput add={this.props.addItem.bind(this)}/>
        </div>
        <div className="col-md-4">
          <h3>Sections</h3>
          <TodoSectionList
            items={this.props.sections}
            remove={this.props.removeSection.bind(this)}
            addUser={(sectionId, userId) => this.props.addUserToSection(sectionId, userId)}
            user={this.props.user}
          />
          <TodoInput add={(name, user = this.props.user) => this.props.addSection(name, user)}/>
        </div>
        <div className="col-md-4">
          <h3>Profiles</h3>
          <ProfileList items={this.props.profiles}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({items, sections, user, profiles}) => ({
  items: items,
  sections: sections,
  user: user,
  profiles: profiles,
});

const mapDispatchToProps = (dispatch) => {
  return {
    //items actions
    loadItems: (userId) => dispatch(loadItems(userId)),
    addItem: (name) => dispatch(addItem(name)),
    deleteItem: (id) => dispatch(deleteItem(id)),
    changeItemStatus: (id) => dispatch(changeItemStatus(id)),
    changeItemSection: (itemId, sectionId) => dispatch(changeItemSection(itemId, sectionId)),

    //sections actions
    loadSections: (userId) => dispatch(loadSections(userId)),
    addSection: (name, user) => dispatch(addSection(name)),
    removeSection: (id) => dispatch(deleteSection(id)),
    addUserToSection: (userId, sectionId) => dispatch(addProfileToSection(userId, sectionId)),

    //users actions
    loadProfiles: () => dispatch(loadProfiles()),
    setSessionFromUrl: (session) => dispatch(setSessionFromUrl(session)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
