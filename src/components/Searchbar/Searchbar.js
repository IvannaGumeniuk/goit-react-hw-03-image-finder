// import { toast } from 'react-toastify';
import React, { Component } from "react";
import PropTypes from 'prop-types';
import { AiOutlineSearch } from "react-icons/ai";
import styles from "./Searchbar.module.css";


class Searchbar extends Component {
    state = {
        searchKey: '',
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.searchKey);
    };

    onChangeInput = event => {
        const searchKey = event.target.value;
        this.setState({ searchKey });
    };
    
    render() {
        return (
            <header className={styles.searchbar}>
            <form className={styles.form} onSubmit={this.handleSubmit}>
                    <button type="submit" className={styles.button}><AiOutlineSearch  /></button>
                    <input
                        className={styles.input}
                        value={this.state.searchKey}
                        onChange={this.onChangeInput}
                        type="text"
                        autoComplete="off"
                        autoFocus={true}
                        placeholder="Search images and photos"
                    />
            </form>
            </header>
        )
    };
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
