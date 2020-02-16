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
                <h1>FORM GOES HERE!</h1>
                <form>
                    <div className="form-group">
                        <label>Cake Name: </label>
                            <input onChange={this.handleChange} type="text" name="name" placeholder="Cake Name" value={this.state.name} /><br/>
                        <label>Cake Comment: </label>
                            <input onChange={this.handleChange} type="text" name="comment" placeholder="Cake Description" value={this.state.comment} /><br/>
                        <label>Image URL: </label>
                            <input onChange={this.handleChange} type="text" name="imageUrl" placeholder="Image URL" value={this.state.imageUrl} /><br/>
                        <label>Yum Factor: </label>
                            <select name="yumFactor" value={this.state.value} onChange={this.handleChange}>
                                <option value="+1">1</option>
                                <option value="+2">2</option>
                                <option value="+3">3</option>
                                <option value="+4">4</option>
                                <option value="+5">5</option>
                            </select>
                        <input onClick={this.handleSubmit} type="submit" placeholder="Submit"/>
                    </div>
                </form>
            </div>
        )
    }
}
        
export default CakeForm;