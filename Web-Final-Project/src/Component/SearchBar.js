import React from 'react'
import { Link } from 'react-router-dom'

const options = [
    'All Categories', 'Art', 'Book', 'Baby'
]
const defaultOption = options[0]
const SearchBar = () => {

    return (
        <div>
            <table>
                <tbody>
                <tr>
                    <td style={{ verticalAlign: 'middle' }}>
                        <img style={{ width: '150px', marginRight: '20px', marginLeft: '20px' }}
                             src="https://icons-for-free.com/iconfiles/png/512/cat-131996349058051117.png"/>
                    </td>

                    <td style={{ width: '30px', verticalAlign: 'middle' }}>
                        <i className="fas fa-search"></i>
                    </td>
                    <td style={{ width: '750px', verticalAlign: 'middle' }}>
                        <input style={{ width: '100%', height: '40px', marginLeft: '15px' }}
                               placeholder="Search for anything"
                        />

                    </td>
                    <td>
                        <select name="role" style={{ height: '40px' }}>
                            {options.map(option => {
                                return (
                                    <option value="">
                                        {option}
                                    </option>)
                            })
                            }


                        </select>
                    </td>
                    <td>
                        <Link to = "/search">
                            <button className="bg-primary text-white" style={{ height: '40px' }}>
                                Search
                            </button>
                        </Link>
                    </td>
                    <td>
                        <span style={{ marginLeft: '20px', marginRight: '20px' }}>Advanced</span>
                    </td>
                </tr>
                </tbody>
            </table>
            <hr style={{ margin: '10px' }}/>
        </div>
    )
}

export default SearchBar