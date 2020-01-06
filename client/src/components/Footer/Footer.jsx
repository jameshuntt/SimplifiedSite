import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons'
import './Footer.scss'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <div className="top-footer-content">
                <p>content</p>
                </div>
                <div className="">
                    <p>content</p>
                    <SocialIcon network="facebook" bgColor="#ffffff" />
                    <SocialIcon network="twitter" bgColor="#ffffff" />
                    <SocialIcon network="github" bgColor="#ffffff" />
                    <SocialIcon network="snapchat" bgColor="#ffffff" />
                    <SocialIcon network="instagram" bgColor="#ffffff" />
                    <SocialIcon network="youtube" bgColor="#ffffff" />
                </div>
                <div className="copyright">
                    <h4>Copyright @2020 WebAmbrosia</h4>
                </div>
            </div>
        )
    }
}
