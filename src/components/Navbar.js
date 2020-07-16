import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaSearch, FaAlignJustify } from 'react-icons/fa'
import logo from '../images/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';

class bar extends Component {
    constructor(props) {
        super(props)

        this.state = {

            search: '',
            searchOpen: false,
            menu: false,
            scroll: false

        }
    }
    ToggleSerach = () => {
        this.setState({
            searchOpen: !this.state.searchOpen
        })
    }

    handleMenu = () => {
        this.setState({
            menu: !this.state.menu
        })
    }
    handlesearch = e => {
        this.setState({
            [e.tearget.name]: e.target.value
        })
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const top = window.scrollY <100
        if(top !==true){
            this.setState({
                scroll:true
            })

        }   else{
            this.setState({
                scroll:false
            })

        }

    })
    }
    componentWillMount(){
        // window.removeEventListener('scroll')
    }

    render() {

        const { search, searchOpen, menu } = this.state
        return (
            <>

                <div className="navbar navbar-dark bg-dark">
                    <div className="topNavBar">


                        <div className="top-icons">

                            <Link to="https://www.facebook.com/La-Bettie-Beads-2013230752332684/"><FaFacebook /></Link>
                            <Link to="#"><FaTwitter /></Link>
                            <Link to="#"><FaInstagram /></Link>

                        </div>

                    </div>



                </div>
                <div className="nav_back">
                    <div className="container">
                        <Link to="/">
                            <img className="logo" style={{ width: '150px' }} src={logo} alt="labettie beads" />

                        </Link>

                        <div className={!menu ? "showMenu navBarlower" : "hideMenu  navBarlower"}>

                            <ul className="nav nav-pills ">
                                <li> <Link to="/">Home</Link> </li>
                                <li> <Link to="/gallery">Gallery</Link> </li>
                                <li> <Link to="/blog">Blog</Link> </li>
                                <li> <Link to="/about">About</Link> </li>
                                <li> <Link to="/contact">Contact</Link> </li>
                            </ul>

                        </div>

                        <div className="menu-icon" onClick={this.handleMenu}><FaAlignJustify /></div>
                        <div className="search">

                            {/* <span className={searchOpen ? "h-25 d-inline-block" : "h-1"}>
                                <input type="text"
                                    onChange={this.handlesearch}
                                    placeholder="search" name="search" value={search} />
                            </span>
                                &nbsp;<span className="search-icon"><FaSearch onClick={this.ToggleSerach}>Search</FaSearch></span> */}
                            <form className="form-inline">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>

                    </div>

                </div>
            </>
        )
    }
}

export default bar
