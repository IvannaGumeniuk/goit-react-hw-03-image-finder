// import { toast } from 'react-toastify';
import React, { Component } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "./Searchbar.module.css";


class Searchbar extends Component {
    state = {
        searchKey: '',
    }

handleNameChange = event => {
    this.setState({ searchKey: event.currentTarget.value.toLowerCase() });
};

    handleSubmit = event => {
        event.preventDefault();
    
        if (this.state.searchKey.trim() === '') {
            // toast.error('Введите запрос');
            alert('errrorrrrrs')
            return;
        }

        this.props.onSubmit(this.state.searchKey);
        this.setState({ searchKey: '' });
        console.log(this.state.searchKey);
    };
    

    render() {
        return (
            <header className={styles.searchbar}>
            <form className={styles.form} onSubmit={this.handleSubmit}>
                    <button type="submit" className={styles.button}><AiOutlineSearch  /></button>
                <input
                    className={styles.input}
                    value={this.state.searchKey}
                    onChange={this.handleNameChange}
                    type="text"
                    // autocomplete="off"
                    // autofocus
                    placeholder="Search images and photos"
                />
            </form>
            </header>
        )
    };
};

export default Searchbar;
