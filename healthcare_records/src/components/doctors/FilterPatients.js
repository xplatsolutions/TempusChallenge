import React, {
    Component
} from 'react';

class FilterPatients extends Component {

    state = {
        filterText: ''
    }

    onUserType = (e) => this.setState({ filterText: e.target.value })

    render() {
        return (
            <form style={{ display: 'flex' }}>
                <input style={{ flex: '10' }} 
                        type="text" 
                        placeholder="Filter patients by name"
                        onChange={this.onUserType}
                         />
            </form>
        )
    }
}

export default FilterPatients;