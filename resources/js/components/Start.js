import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Logo from '../../images/logo2.png'
import AboutPic1 from '../../images/about-main.jpg'
import AboutPic2 from '../../images/about-inset.jpg'
import Staff1 from '../../images/staff-01.jpg'
import Staff2 from '../../images/staff-02.jpg'
import Staff3 from '../../images/staff-03.jpg'
import '../../css/style.css'
import '../../css/responsive.css'

export class Start extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email:'',
            password:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({ [event.target.id] : event.target.value });

    }

    handleSubmit(event) {
        event.preventDefault();
        var query = this.state;
        const { onUpdate } = this.props;  //this line is important for update parent's state

        fetch("/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(query)
        })
        .then(function(response) {
            if (response.status >= 400) {
                console.log("Bad response from server");
            }
            return response.json();
        })
        .then(function(data) {
            if (data.email) {
                //update parent state
                onUpdate(data) 
            } else {
                //redirect to '/'
                window.location="/";
            }
            
        })
        .catch(function(err){
            console.log(err);
        });
    }

    render() {
        return (
        <div>

            <nav className="navbar navbar-expand-lg default-color sticky-top lighten-4 justify-content-between">
                <a className="navbar-brand" href="#"><img src={Logo} height="30" /></a>
                <div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#banner">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#our_team">Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#signup">Sign Up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div id="banner" className="banner full-screen-mode parallax mt-0">
                <div className="container pr mt-0">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="banner-static mt-0">
                            <div className="banner-text">
                                <div className="banner-cell">
                                    <h1>Let &nbsp; Love &nbsp; <span className="text-success">Grow</span></h1>
                                    <form className= 'mb-5 col-6 offset-3' onSubmit={this.handleSubmit}  method='POST'>
                                        <div className='container row offset-1'>
                                            <div className="form-group mr-2">
                                              <label htmlFor="email">Email address</label>
                                              <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email"
                                                     onChange={this.handleChange}
                                                     required>
                                                    </input>
                                            </div>

                                            <div className="form-group">
                                              <label htmlFor="password">Password</label>
                                              <input type="password" className="form-control" id="password" name="password" placeholder="Password"
                                                     onChange={this.handleChange}
                                                     required>

                                               </input>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-default">Login</button>
                                    </form>     
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div id="about" className="about-main pad-top-100 pad-bottom-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                                <h2 className="block-title"> About Us </h2>
                                <h3>IT STARTED, QUITE SIMPLY, LIKE THIS...</h3>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia, nostrud exercitation ullamco. </p>

                                <p> Aenean commodo ligula eget dolor aenean massa. Cum sociis nat penatibu set magnis dis parturient montes, nascetur ridiculus mus. quam felisorat, ultricies nec, Aenean commodo ligula eget dolor penatibu set magnis is parturient montes, nascetur ridiculus mus. quam felisorat, ultricies nec, pellentesque eu, pretium quis, sem. quat massa quis enim. Donec vitae sapien ut libero venenatis fauci Nullam quis ante. Etiam sit amet rci eget eros. </p>

                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia, nostrud exercitation ullamco. </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                                <div className="about-images">
                                    <img className="about-main" src={AboutPic1} alt="About Main Image" />
                                    <img className="about-inset" src={AboutPic2} alt="About Inset Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div id="our_team" className="team-main pad-top-100 pad-bottom-100 parallax">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                                <h2 className="block-title text-center">Our Team</h2>
                                <p className="title-caption text-center">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                            </div>
                            <div className="team-box">
                
                                <div className="row">
                                    <div className="col-md-4 col-sm-6">
                                        <div className="sf-team">
                                            <div className="thumb">
                                                <a href="#"><img src={Staff1} /></a>
                                            </div>
                                            <div className="text-col">
                                                <h3>Jin Kim</h3>
                                                <p>Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.</p>
                                                <ul className="team-social">
                                                    <li><a href="http://www.github.com/jinkkim"><i className="fa fa-github-square" aria-hidden="true"></i></a></li>
                                                    <li><a href="https://www.instagram.com/k9.cookie"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                                    <li><a href="https://www.linkedin.com/jinkingkim"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4 col-sm-6">
                                        <div className="sf-team">
                                            <div className="thumb">
                                                <a href="#"><img src={Staff2} /></a>
                                            </div>
                                            <div className="text-col">
                                                <h3>Marika Manuud</h3>
                                                <p>Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.</p>
                                                <ul className="team-social">
                                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4 col-sm-6">
                                        <div className="sf-team">
                                            <div className="thumb">
                                                <a href="#"><img src={Staff3} /></a>
                                            </div>
                                            <div className="text-col">
                                                <h3>Debbie Leiva</h3>
                                                <p>Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.</p>
                                                <ul className="team-social">
                                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>                
                            </div>                
                        </div>
                    </div>
                </div>
            </div>


            <div id="signup" className="reservations-main pad-top-100 pad-bottom-100">
                <div className="container">
                    <div className="row">
                        <div className="form-reservations-box">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                                    <h2 className="block-title text-center">Sign Up</h2>
                                </div>
                                <p>PLEASE FILL OUT ALL REQUIRED* FIELDS. THANKS!</p>
                
                                <form className='col-10 offset-1' autoComplete="off" action='/signup' method='POST'>
                                    <small className="form-text text-muted">*required</small>
                                    <div className="form-group row" >
                                      <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email*</label>

                                      <div className="col-sm-10">
                                        <input type="email" className="form-control" id="inputEmail" name="email"placeholder="Email" aria-describedby="emailHelp"></input>

                                      </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password*</label>
                                        <div className="col-sm-10">
                                          <input type="password" className="form-control" id="inputPassword" name="password" placeholder="Password"></input>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                          <label htmlFor="inputFirstName">First Name*</label>
                                          <input type="text" className="form-control" id="inputFirstName" name="firstName" placeholder="First Name"></input>
                                        </div>
                                        <div className="form-group col-md-6">
                                          <label htmlFor="inputLastName">Last Name*</label>
                                          <input type="text" className="form-control" id="inputLastName" name="lastName" placeholder="Last Name"></input>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="inputCoupleID" className="col-sm-2 col-form-label">Couple Key</label>
                                        <div className="col-sm-10">
                                          <input type="text" className="form-control" id="inputCoupleID" name="coupleKey" placeholder="If your partner has one..."></input>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="inputBirthday" className="col-sm-2 col-form-label">Birthday</label>
                                        <div className="col-sm-10">
                                          <input type="date" className="form-control" id="inputBirthday" name="birthday" placeholder="2018-01-01"></input>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="inputAnniversary" className="col-sm-2 col-form-label">Anniversary</label>
                                        <div className="col-sm-10">
                                          <input type="date" className="form-control" id="inputAnniversary" name="anniversary" placeholder="2018-01-01"></input>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="uploadPhoto" className="col-sm-2 col-form-label">Choose your photo</label>
                                        <div className="col-sm-10">
                                            <input type="file" className="form-control-file" id="uploadPhoto" name="photo"></input>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="uploadPhoto" className="col-sm-2 col-form-label">Choose your partner's photo</label>
                                        <div className="col-sm-10">
                                            <input type="file" className="form-control-file" id="uploadPhoto2" name="photo_couple"></input>
                                        </div>
                                    </div>

                                    <button className="btn btn-default btn-lg offset-10" type="submit" name="action">Submit</button>
                                </form>                             
                            </div>                        
                        </div>                   
                    </div>                 
                </div>           
            </div>           
                
        </div>
        )
    }
}