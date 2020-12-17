import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
     /**
    * Declares (returns) property acting as variable local to this class.
    * @returns user
    */
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  
  static styles = css`
  :host {
      display: flex;
      background-color: #f2f2f2;
      padding: 190px;
      flex-flow: column;
      justify-content: center space-between;
      align-items: center;
      
  }
  
  button {
      background-color: #4CAF50; /* Green */
      border: none;
      color: white;
      padding: 10px 20px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      align-content: flex-end;
    } 
  `;


      /**
    * Provides the html render for the edit user component.
    * It also accepts some data from the user that can be processed by an API.
    *
    * @see editUser
    * @returns html
    */

  render() {
    return html`
    <div id = "editHeader">Edit user: </div>
    <form method="POST" >
      <div class="form-group">
      <label for="UserName">User name:</label>
      <input type="text" pattern="[a-z0-9_-&$/+-\!]$" name="userName"   placeholder="myUserName99" value="${this.user.uid} required >
      </div>
      <div class="form-group">
      <label for="FirstName">First name:</label>
      <input type="text" pattern="[a-z]$" name="firstName"   placeholder="John" required >
      </div>
      <div class="form-group">
      <label for="LastName">Last name:</label>
      <input type="text" pattern="[a-z]$" name="lastName"   id="lastName"  placeholder="Nodemonson" required >
      </div>
      <div class="form-group">
      <label for="oldPassword">Old password:</label>
      <input type="password" pattern="[a-z0-9@£$&%?!#]$" name="oldPassword"   id="oldPassword"  placeholder=">VeryBadSecretPassword123" required >
      </div>
      <div class="form-group">
      <label for="newPassword">New password:</label>
      <input type="password" pattern="[a-z0-9@£$&%?!#]$" name="newPassword"  id="newPassword"  placeholder=">VeryBadSecretPassword12345" required >
      </div>
      <input id="Button"type="submit"  @click=${this.editUser} id="submit" >Modify user</input>
    </form>
    `;
  }

      /**
    * Gets data from the user update form and validates it against
    * the relevant api.
    * 
    * @param e - data from render()
    */
  editUser(e) {
    e.preventDefault();
    fetch(`api/updateUser.php`, { 
            method: 'POST',
            body: userEditForm
        })
        .then(res => res.json())
        .then(data=>{
          if (data.status=='success') { //See api-file
              console.log("Your user info changed successfully");
          } else {
              console.log("The user info failed to change.");
          }
        });
      }


}
customElements.define('edit-user', EditUser);
