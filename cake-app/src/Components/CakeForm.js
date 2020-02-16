import React from 'react';
import API from '../API'

class CakeForm extends React.Component {

    state = {
        name: "",
        comment: "",
        imageUrl: "",
        yumFactor: 0
    }

    handleChange = event => this.setState({ [event.target.name]: event.target.value })
        
    handleSubmit = event => {
        event.preventDefault();
        API.postCake(this.state)
        .then((resp) => this.props.addCakeToList(resp))
    }

    render() {
        return (

            <div>
                <h3>Add a new cake!</h3>
                <form>
                    <div className="form-group">
                            <input onChange={this.handleChange} type="text" name="name" placeholder="Enter a Cake Name" value={this.state.name} />
                            <input onChange={this.handleChange} type="text" name="comment" placeholder="Enter a Cake Comment" value={this.state.comment} />
                            <input onChange={this.handleChange} type="text" name="imageUrl" placeholder="Enter an Image URL" value={this.state.imageUrl} /><br/>
                            <select name="yumFactor" placeholder="Choose a Yum Factor" value={this.state.value} onChange={this.handleChange}>
                                <option value="+1">1</option>
                                <option value="+2">2</option>
                                <option value="+3">3</option>
                                <option value="+4">4</option>
                                <option value="+5">5</option>
                            </select><br/>
                        <input onClick={this.handleSubmit} type="submit" placeholder="Submit"/>
                    </div>
                </form>
            </div>
        )
    }
}
        
export default CakeForm;